import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import React from 'react';
import { 
  FaNewspaper, 
  FaShieldAlt, 
  FaCode, 
  FaFlask, 
  FaCalendarAlt,
  FaUser,
  FaArrowRight,
  FaSearch,
  FaEye,
  FaClock,
  FaExternalLinkAlt,
  FaTwitter,
  FaMedium,
  FaSpinner
} from 'react-icons/fa';
import { FaRocket, FaNetworkWired } from "react-icons/fa";
import Navbar from '../Layout/Navbar';
import FooterContent from '../Home/Footer';

// Define types
interface Post {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime?: string;
  icon?: React.ReactNode;
  views?: string;
  tags?: string[];
  mediumLink: string;
  twitterLink: string;
  source: 'medium' | 'twitter';
  thumbnail?: string | null;
  featured?: boolean;
  engagement?: {
    likes: number;
    retweets: number;
    replies: number;
  };
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('BlogNewsroom Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-black">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Something went wrong</h2>
            <p className="text-gray-400 mb-6">We're experiencing technical difficulties</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const BlogNewsroom: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [mediumPosts, setMediumPosts] = useState<Post[]>([]);
  const [twitterPosts, setTwitterPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const safeToUpperCase = (str: string | undefined | null): string => {
    if (!str || typeof str !== 'string') return '';
    return str.toUpperCase();
  };

  const safeStringOperation = (str: string | undefined | null, operation = 'uppercase'): string => {
    if (!str || typeof str !== 'string') return '';
    switch (operation) {
      case 'uppercase':
        return str.toUpperCase();
      case 'lowercase':
        return str.toLowerCase();
      default:
        return str;
    }
  };

  const fetchMediumPosts = async (): Promise<void> => {
    try {
      setError(null);
      const response = await fetch(
        'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@xorion_network'
      );
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data: any = await response.json();
      
      if (data.status === 'ok' && data.items && Array.isArray(data.items)) {
        const formattedPosts: Post[] = data.items
          .filter((item: any) => item && item.title)
          .map((item: any, index: number): Post => ({
            id: `medium-${index}`,
            title: item.title || 'Untitled Post',
            excerpt: item.description 
              ? item.description.replace(/<[^>]*>/g, '').substring(0, 200) + '...'
              : 'No description available...',
            category: getCategoryFromContent(item.title || '', item.description || ''),
            author: item.author || 'XorionChain Team',
            date: item.pubDate ? new Date(item.pubDate).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
            readTime: `${Math.ceil((item.description?.split(' ')?.length || 200) / 200)} min read`,
            icon: getCategoryIcon(getCategoryFromContent(item.title || '', item.description || '')),
            views: `${Math.floor(Math.random() * 20 + 5)}.${Math.floor(Math.random() * 9)}K`,
            tags: extractTags(item.title || '', item.description || ''),
            mediumLink: item.link || 'https://medium.com/@xorion_network',
            twitterLink: 'https://x.com/Xorion_Network',
            source: 'medium',
            thumbnail: item.thumbnail || null,
            featured: index < 2
          }));
        
        setMediumPosts(formattedPosts);
      } else {
        throw new Error('Invalid RSS data format');
      }
    } catch (error) {
      console.error('Error fetching Medium posts:', error);
      setError('Failed to load Medium posts');
      setMediumPosts(getFallbackPosts());
    }
  };

  const getCategoryFromContent = (title = '', description = ''): string => {
    try {
      const content = `${title} ${description}`.toLowerCase();
      if (content.includes('security') || content.includes('audit')) return 'security';
      if (content.includes('developer') || content.includes('api') || content.includes('sdk')) return 'developer';
      if (content.includes('research') || content.includes('quantum') || content.includes('cryptography')) return 'research';
      if (content.includes('network') || content.includes('mainnet') || content.includes('upgrade')) return 'network';
      return 'network';
    } catch (err) {
      console.warn('Error in getCategoryFromContent:', err);
      return 'network';
    }
  };

  const getCategoryIcon = (category: string): React.ReactNode => {
    const icons: { [key: string]: React.ReactNode } = {
      security: <FaShieldAlt className="w-8 h-8 text-red-400" />,
      developer: <FaCode className="w-8 h-8 text-green-400" />,
      research: <FaFlask className="w-8 h-8 text-purple-400" />,
      network: <FaNetworkWired className="w-8 h-8 text-blue-400" />
    };
    
    return icons[category] || <FaNewspaper className="w-8 h-8 text-gray-400" />;
  };

  const extractTags = (title = '', description = ''): string[] => {
    try {
      const content = `${title} ${description}`.toLowerCase();
      const possibleTags = [
        'blockchain', 'quantum', 'security', 'defi', 'mainnet', 'upgrade',
        'research', 'cryptography', 'smart-contracts', 'api', 'sdk',
        'cross-chain', 'consensus', 'privacy', 'zk-proofs'
      ];
      
      return possibleTags.filter((tag: string) => content.includes(tag)).slice(0, 3);
    } catch (err) {
      console.warn('Error in extractTags:', err);
      return ['blockchain'];
    }
  };

  const getFallbackPosts = (): Post[] => [
    {
      id: 'fallback-1',
      title: "Welcome to XorionChain Blog",
      excerpt: "Follow our official Medium publication for the latest updates on quantum-resistant blockchain technology, technical deep-dives, and project announcements.",
      category: "network",
      author: "XorionChain Team",
      date: "2025-09-15",
      readTime: "2 min read",
      icon: <FaRocket className="w-8 h-8 text-blue-400" />,
      views: "1.2K",
      tags: ["announcement", "community"],
      mediumLink: "https://medium.com/@xorion_network",
      twitterLink: "https://x.com/Xorion_Network",
      source: 'medium',
      featured: true
    },
    {
      id: 'fallback-2',
      title: "Connect with us on Medium & X",
      excerpt: "Stay connected with XorionChain through our official Medium publication and X/Twitter account for real-time updates and technical insights.",
      category: "network",
      author: "XorionChain Team",
      date: "2025-09-15",
      readTime: "1 min read",
      icon: <FaMedium className="w-8 h-8 text-green-400" />,
      views: "856",
      tags: ["social", "updates"],
      mediumLink: "https://medium.com/@xorion_network",
      twitterLink: "https://x.com/Xorion_Network",
      source: 'medium',
      featured: false
    }
  ];

  const fetchTwitterPosts = async (): Promise<void> => {
    try {
      const twitterData: Post[] = [
        {
          id: 'twitter-1',
          title: "🚀 XorionChain Mainnet 4.0 is LIVE!",
          excerpt: "The future of quantum-resistant blockchain is here. Experience 100k+ to 5k+ TPS with unbreakable security. #QuantumProof #Blockchain",
          category: 'network',
          author: "@xorionchain",
          date: "2025-09-15",
          source: 'twitter',
          twitterLink: "https://x.com/Xorion_Network",
          mediumLink: "https://medium.com/@xorion_network",
          tags: ['mainnet', 'quantum', 'launch'],
          engagement: {
            likes: 2847,
            retweets: 1205,
            replies: 342
          }
        },
        {
          id: 'twitter-2', 
          title: "🔐 Security First Approach",
          excerpt: "Our post-quantum cryptography implementation passed all security audits. Building the most secure blockchain for the quantum era.",
          category: 'security',
          author: "@xorionchain",
          date: "2025-09-14",
          source: 'twitter',
          twitterLink: "https://x.com/Xorion_Network",
          mediumLink: "https://medium.com/@xorion_network",
          tags: ['security', 'quantum', 'audit'],
          engagement: {
            likes: 1923,
            retweets: 856,
            replies: 234
          }
        }
      ];
      
      setTwitterPosts(twitterData);
    } catch (error) {
      console.error('Error fetching Twitter posts:', error);
      setTwitterPosts([]);
    }
  };

  useEffect(() => {
    const loadContent = async (): Promise<void> => {
      try {
        setLoading(true);
        setError(null);
        
        await Promise.all([
          fetchMediumPosts(),
          fetchTwitterPosts()
        ]);
      } catch (err) {
        console.error('Error loading content:', err);
        setError('Failed to load content');
      } finally {
        setLoading(false);
      }
    };

    loadContent();

    const setupAnimations = () => {
      try {
        const floatingElements = document.querySelectorAll('.floating-bg');
        if (floatingElements.length > 0) {
          floatingElements.forEach((element, index) => {
            if (element && (element as Element).animate) {
              (element as Element).animate([
                { transform: 'translateY(0px)' },
                { transform: `translateY(${-10 - (index * 2)}px)` },
                { transform: 'translateY(0px)' }
              ], {
                duration: 4000 + (index * 500),
                iterations: Infinity,
                easing: 'ease-in-out'
              });
            }
          });
        }
      } catch (animationError) {
        console.warn('Animation setup failed:', animationError);
      }
    };

    const timeoutId = setTimeout(setupAnimations, 100);
    
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const categories = [
    { id: 'all', name: 'All Posts', icon: <FaNewspaper className="w-4 h-4" /> },
    { id: 'network', name: 'Network Updates', icon: <FaRocket className="w-4 h-4" /> },
    { id: 'security', name: 'Security', icon: <FaShieldAlt className="w-4 h-4" /> },
    { id: 'developer', name: 'Developer', icon: <FaCode className="w-4 h-4" /> },
    { id: 'research', name: 'Research', icon: <FaFlask className="w-4 h-4" /> }
  ];

  const allPosts: Post[] = [...mediumPosts, ...twitterPosts].filter(Boolean);
  const featuredPosts: Post[] = allPosts.filter((post: Post) => post?.featured);
  const regularPosts: Post[] = allPosts.filter((post: Post) => post && !post.featured);

  const filteredPosts: Post[] = regularPosts.filter((post: Post) => {
    if (!post) return false;
    
    try {
      const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
      const searchLower = safeStringOperation(searchQuery, 'lowercase');
      const titleLower = safeStringOperation(post.title, 'lowercase');
      const excerptLower = safeStringOperation(post.excerpt, 'lowercase');
      
      const matchesSearch = !searchQuery || 
                           titleLower.includes(searchLower) || 
                           excerptLower.includes(searchLower);
      
      return matchesCategory && matchesSearch;
    } catch (filterError) {
      console.warn('Filter error for post:', post.id, filterError);
      return false;
    }
  });

  if (error && allPosts.length === 0) {
    return (
      <div className="min-h-screen bg-black font-geist flex items-center justify-center">
        <div className="text-center">
          <FaExternalLinkAlt className="text-6xl mb-4 text-red-400 mx-auto" />
          <h2 className="text-2xl font-bold text-white mb-4">Unable to Load Content</h2>
          <p className="text-gray-400 mb-6">Please check your internet connection</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div ref={containerRef} className="relative bg-black font-geist overflow-hidden">
        <Navbar />
        
        <div className="fixed inset-0 pointer-events-none">
          <div className="floating-bg absolute top-10 left-10 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
          <div className="floating-bg absolute bottom-10 right-10 w-40 h-40 md:w-80 md:h-80 bg-gradient-to-r from-pink-500/10 to-red-500/10 rounded-full blur-3xl"></div>
          <div className="floating-bg absolute top-1/3 right-1/3 w-24 h-24 md:w-48 md:h-48 bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-full blur-2xl"></div>
        </div>

        <motion.div 
          style={{ y }}
          className="relative pt-20 md:pt-32 pb-8 md:pb-16 px-4 md:px-6"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
                BLOG &
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  NEWSROOM
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                Stay updated with the latest developments in quantum-resistant blockchain technology, 
                security advisories, and cutting-edge research from the XorionChain team.
              </p>

              <div className="flex items-center justify-center gap-6">
                <a
                  href="https://medium.com/@xorion_network"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-green-500/20 hover:bg-green-500/30 text-green-400 rounded-xl transition-all duration-300 group"
                >
                  <FaMedium className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Follow on Medium</span>
                  <FaExternalLinkAlt className="w-3 h-3" />
                </a>
                <a
                  href="https://x.com/Xorion_Network"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-xl transition-all duration-300 group"
                >
                  <FaTwitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Follow on X</span>
                  <FaExternalLinkAlt className="w-3 h-3" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-4xl mx-auto mb-12"
            >
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1 w-full">
                  <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value || '')}
                    className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-all duration-300"
                  />
                </div>

                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {categories.map((category) => (
                    <motion.button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        activeCategory === category.id
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                          : 'bg-white/10 text-gray-300 hover:bg-white/20'
                      }`}
                    >
                      {category.icon}
                      <span className="text-sm">{category.name}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {loading && (
          <div className="flex items-center justify-center py-20">
            <FaSpinner className="w-8 h-8 text-blue-400 animate-spin mr-3" />
            <span className="text-white">Loading latest posts...</span>
          </div>
        )}

        {!loading && featuredPosts.length > 0 && (
          <div className="relative py-8 md:py-16 px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-3"
              >
                <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                Featured Articles
              </motion.h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredPosts.slice(0, 2).map((post: Post, index: number) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group cursor-pointer"
                  >
                    <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="text-4xl md:text-5xl">{post.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-3">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              post.category === 'network' ? 'bg-blue-500/20 text-blue-400' :
                              post.category === 'security' ? 'bg-red-500/20 text-red-400' :
                              post.category === 'developer' ? 'bg-green-500/20 text-green-400' :
                              'bg-purple-500/20 text-purple-400'
                            }`}>
                              {safeToUpperCase(post.category) || 'GENERAL'}
                            </span>
                            <span className="text-yellow-400 text-xs">★ FEATURED</span>
                            {post.source === 'medium' && (
                              <span className="text-green-400 text-xs">📝 MEDIUM</span>
                            )}
                            {post.source === 'twitter' && (
                              <span className="text-blue-400 text-xs">🐦 X/TWITTER</span>
                            )}
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                            {post.title}
                          </h3>
                          <p className="text-gray-300 leading-relaxed mb-4">
                            {post.excerpt}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-2">
                            <FaUser className="w-3 h-3" />
                            {post.author}
                          </div>
                          <div className="flex items-center gap-2">
                            <FaCalendarAlt className="w-3 h-3" />
                            {post.date ? new Date(post.date).toLocaleDateString() : 'Recent'}
                          </div>
                          {post.readTime && (
                            <div className="flex items-center gap-2">
                              <FaClock className="w-3 h-3" />
                              {post.readTime}
                            </div>
                          )}
                        </div>
                        {post.views && (
                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            <FaEye className="w-3 h-3" />
                            {post.views}
                          </div>
                        )}
                        {post.engagement && (
                          <div className="flex items-center gap-4 text-sm text-gray-400">
                            <span>❤️ {post.engagement.likes}</span>
                            <span>🔄 {post.engagement.retweets}</span>
                            <span>💬 {post.engagement.replies}</span>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-3 mt-4">
                        <a
                          href={post.mediumLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 py-2 bg-green-500/20 hover:bg-green-500/30 text-green-400 rounded-lg transition-all duration-300 text-sm"
                        >
                          <FaMedium className="w-4 h-4" />
                          <span>Read on Medium</span>
                          <FaExternalLinkAlt className="w-3 h-3" />
                        </a>
                        <a
                          href={post.twitterLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg transition-all duration-300 text-sm"
                        >
                          <FaTwitter className="w-4 h-4" />
                          <span>Share on X</span>
                          <FaExternalLinkAlt className="w-3 h-3" />
                        </a>
                      </div>

                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {post.tags.map((tag: string, idx: number) => (
                            <span key={idx} className="px-2 py-1 bg-white/5 text-gray-400 text-xs rounded-md">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        )}

        {!loading && (
          <div className="relative py-8 md:py-16 px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-3"
              >
                <div className="w-1 h-8 bg-gradient-to-b from-green-500 to-cyan-500 rounded-full"></div>
                Recent Posts
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post: Post, index: number) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.18, delay: index * 0.01, type: 'tween' }}
                    className="group cursor-pointer"
                  >
                    <div className="relative bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                      <div className="flex items-center gap-3 mb-4">
                        {post.icon && <div className="text-3xl">{post.icon}</div>}
                        <div className="flex flex-col gap-1">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            post.category === 'network' ? 'bg-blue-500/20 text-blue-400' :
                            post.category === 'security' ? 'bg-red-500/20 text-red-400' :
                            post.category === 'developer' ? 'bg-green-500/20 text-green-400' :
                            'bg-purple-500/20 text-purple-400'
                          }`}>
                            {safeToUpperCase(post.category) || 'GENERAL'}
                          </span>
                          {post.source && (
                            <span className={`text-xs ${
                              post.source === 'medium' ? 'text-green-400' : 'text-blue-400'
                            }`}>
                              {post.source === 'medium' ? '📝 Medium' : '🐦 X'}
                            </span>
                          )}
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-1">
                        {post.excerpt}
                      </p>

                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag: string, idx: number) => (
                            <span key={idx} className="px-2 py-1 bg-white/5 text-gray-400 text-xs rounded-md">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <div className="flex items-center gap-3 text-xs text-gray-400">
                          <div className="flex items-center gap-1">
                            <FaUser className="w-3 h-3" />
                            {post.author}
                          </div>
                          {post.readTime && (
                            <div className="flex items-center gap-1">
                              <FaClock className="w-3 h-3" />
                              {post.readTime}
                            </div>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          {post.views && <span className="text-xs text-gray-400">{post.views}</span>}
                          {post.engagement && (
                            <div className="flex items-center gap-2 text-xs text-gray-400">
                              <span>❤️ {post.engagement.likes}</span>
                            </div>
                          )}
                          <FaArrowRight className="w-3 h-3 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mt-3">
                        <a
                          href={post.mediumLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-2 py-1 bg-green-500/20 hover:bg-green-500/30 text-green-400 rounded-md transition-all duration-300 text-xs"
                        >
                          <FaMedium className="w-3 h-3" />
                          <span>Medium</span>
                        </a>
                        <a
                          href={post.twitterLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-2 py-1 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-md transition-all duration-300 text-xs"
                        >
                          <FaTwitter className="w-3 h-3" />
                          <span>X</span>
                        </a>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              {filteredPosts.length === 0 && !loading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <FaSearch className="text-6xl mb-4 text-blue-400 mx-auto" />
                  <p className="text-gray-400 text-lg">No articles found matching your search.</p>
                  <p className="text-gray-500 text-sm mt-2">Try adjusting your search terms or category filter.</p>
                </motion.div>
              )}
            </div>
          </div>
        )}

        <div className="relative py-12 md:py-20 px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Stay Connected
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Follow us on Medium and X for real-time updates on quantum-resistant blockchain technology, 
                security advisories, and research breakthroughs.
              </p>
              
              <div className="flex items-center justify-center gap-6">
                <a
                  href="https://medium.com/@xorion_network"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-green-500/20 hover:bg-green-500/30 text-green-400 rounded-lg transition-all duration-300 group"
                >
                  <FaMedium className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Follow on Medium</span>
                  <FaExternalLinkAlt className="w-3 h-3" />
                </a>
                <a
                  href="https://x.com/Xorion_Network"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg transition-all duration-300 group"
                >
                  <FaTwitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Follow on X</span>
                  <FaExternalLinkAlt className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        <FooterContent />
      </div>
    </ErrorBoundary>
  );
};

export default BlogNewsroom;
