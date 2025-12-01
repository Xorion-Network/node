import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaBook, FaCode, FaRocket, FaCog, FaTerminal, FaWallet, 
  FaFileCode, FaShieldAlt, FaChevronRight,
  FaDownload, FaExternalLinkAlt, FaSearch, FaLayerGroup,
  FaNetworkWired, FaDatabase, FaLightbulb,
  FaTools, FaBookOpen, FaClipboardList, FaCircle
} from 'react-icons/fa';
import Navbar from '../components/Layout/Navbar';
import FooterContent from '../components/Home/Footer';

const DevPortal = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  useEffect(() => {
    // Floating animation for background elements
    const floatingElements = document.querySelectorAll('.floating-bg');
    floatingElements.forEach((el, index) => {
      el.animate([
        { transform: 'translateY(0px) rotate(0deg)' },
        { transform: `translateY(-${20 + index * 10}px) rotate(${5 + index * 2}deg)` },
        { transform: 'translateY(0px) rotate(0deg)' }
      ], {
        duration: 4000 + index * 1000,
        iterations: Infinity,
        easing: 'ease-in-out'
      });
    });
  }, []);

  const navigationSections = [
    {
      id: 'overview',
      title: 'Overview',
      icon: <FaBook className="w-5 h-5" />,
      description: 'Getting started with XORION'
    },
    {
      id: 'deployment',
      title: 'Deployment',
      icon: <FaRocket className="w-5 h-5" />,
      description: 'Deploy your dApps'
    },
    {
      id: 'api',
      title: 'API Reference',
      icon: <FaCode className="w-5 h-5" />,
      description: 'Complete API documentation'
    },
    {
      id: 'tools',
      title: 'Tools & SDKs',
      icon: <FaTools className="w-5 h-5" />,
      description: 'Developer tools and SDKs'
    },
    {
      id: 'cli',
      title: 'CLI Reference',
      icon: <FaTerminal className="w-5 h-5" />,
      description: 'Command line interface'
    },
    {
      id: 'wallets',
      title: 'Wallet Integration',
      icon: <FaWallet className="w-5 h-5" />,
      description: 'Connect with wallets'
    },
    {
      id: 'contracts',
      title: 'Smart Contracts',
      icon: <FaFileCode className="w-5 h-5" />,
      description: 'Contract templates'
    }
  ];

  const quickStartCards = [
    {
      title: 'Master Documentation',
      description: 'Complete technical documentation and architecture overview',
      icon: <FaBookOpen className="w-6 h-6" />,
      link: 'https://xorion-chain.gitbook.io/xorion-chain-docs/',
      color: 'from-blue-500 to-purple-500',
      type: 'external'
    },
    {
      title: 'Whitepaper v3',
      description: 'Official whitepaper and technical vision',
      icon: <FaClipboardList className="w-6 h-6" />,
      link: 'https://github.com/Xorion-Network/xorion-main/blob/master/Whitepaper/Xorion%20Whitepaper%201.0.0.3.pdf',
      color: 'from-green-500 to-cyan-500',
      type: 'pdf'
    },
    {
      title: 'Quick Start Guide',
      description: 'Get up and running in minutes',
      icon: <FaLightbulb className="w-6 h-6" />,
      link: 'https://xorion-chain.gitbook.io/xorion-chain-docs/',
      color: 'from-yellow-500 to-orange-500',
      type: 'external'
    }
  ];

  const sdkLanguages = [
    { name: 'Node.js', icon: <FaCode />, color: 'from-green-400 to-green-600' },
    { name: 'Python', icon: <FaCode />, color: 'from-blue-400 to-blue-600' },
    { name: 'Rust', icon: <FaCode />, color: 'from-orange-400 to-orange-600' }
  ];

  const walletIntegrations = [
    { name: 'MetaMask', icon: <FaWallet />, status: 'Ready' },
    { name: 'Keplr', icon: <FaWallet />, status: 'Ready' },
    { name: 'Phantom', icon: <FaWallet />, status: 'Coming Soon' },
    { name: 'WalletConnect', icon: <FaWallet />, status: 'Ready' }
  ];

  const contractTemplates = [
    {
      name: 'AccessControl.sol',
      description: 'Role-based access control system',
      icon: <FaShieldAlt />,
      color: 'from-red-500 to-pink-500'
    },
    {
      name: 'TransparentUpgradeableProxy.sol',
      description: 'Upgradeable proxy contract pattern',
      icon: <FaLayerGroup />,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      name: 'CircuitBreaker.sol',
      description: 'Emergency stop mechanism',
      icon: <FaCircle />,
      color: 'from-yellow-500 to-red-500'
    }
  ];

  const renderContent = () => {
    switch(activeSection) {
      case 'overview':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {quickStartCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ delay: index * 0.02, type: 'tween', duration: 0.18 }}
                  className="group cursor-pointer"
                >
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${card.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                    <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${card.color}`}>{card.icon}</div>
                        <h3 className="text-xl font-bold text-white">{card.title}</h3>
                      </div>
                      <p className="text-gray-300 mb-4">{card.description}</p>
                      {card.type === 'pdf' ? (
                        <div className="flex items-center gap-2 mt-2">
                          <a
                            href={card.link}
                            download
                            className="flex items-center px-2 py-1 text-xs rounded bg-white/10 hover:bg-white/20 text-blue-400 border border-white/10 hover:border-white/30 transition-all"
                            title="Download PDF"
                          >
                            <FaDownload className="w-3 h-3 mr-1" /> Download
                          </a>
                          <a
                            href={card.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-2 py-1 text-xs rounded bg-white/10 hover:bg-white/20 text-green-400 border border-white/10 hover:border-white/30 transition-all"
                            title="Open in new tab"
                          >
                            <FaExternalLinkAlt className="w-3 h-3 mr-1" /> Open
                          </a>
                        </div>
                      ) : card.type === 'external' ? (
                        <a
                          href={card.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors"
                        >
                          <span className="text-sm">View Documentation</span>
                          <FaExternalLinkAlt className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>
                      ) : (
                        <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                          <span className="text-sm">View Documentation</span>
                          <FaChevronRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="bg-black/20 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Architecture Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { name: 'Consensus Layer', icon: <FaNetworkWired />, color: 'from-blue-500 to-cyan-500' },
                  { name: 'Execution Layer', icon: <FaCog />, color: 'from-purple-500 to-pink-500' },
                  { name: 'Storage Layer', icon: <FaDatabase />, color: 'from-green-500 to-emerald-500' },
                  { name: 'Security Layer', icon: <FaShieldAlt />, color: 'from-red-500 to-orange-500' }
                ].map((layer, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${layer.color} flex items-center justify-center mb-3`}>
                      {layer.icon}
                    </div>
                    <h4 className="text-white font-semibold">{layer.name}</h4>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        );
      
      case 'deployment':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="bg-black/20 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Deployment Process</h3>
              <div className="space-y-4">
                {[
                  { step: '1', title: 'Setup Environment', description: 'Configure your development environment' },
                  { step: '2', title: 'Build & Test', description: 'Compile and test your smart contracts' },
                  { step: '3', title: 'Deploy to Testnet', description: 'Deploy to XORION testnet for testing' },
                  { step: '4', title: 'Mainnet Deployment', description: 'Deploy to XORION mainnet' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        );
      
      case 'tools':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="bg-black/20 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">SDKs & Libraries</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {sdkLanguages.map((sdk, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${sdk.color} flex items-center justify-center mb-4`}>
                      {sdk.icon}
                    </div>
                    <h4 className="text-white font-semibold mb-2">{sdk.name} SDK</h4>
                    <p className="text-gray-400 text-sm">Official SDK for {sdk.name} development</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        );
      
      case 'wallets':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="bg-black/20 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Wallet Integrations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {walletIntegrations.map((wallet, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                          {wallet.icon}
                        </div>
                        <h4 className="text-white font-semibold">{wallet.name}</h4>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        wallet.status === 'Ready' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {wallet.status}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">Integration guide and code examples</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        );
      
      case 'contracts':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="bg-black/20 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Smart Contract Templates</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {contractTemplates.map((template, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="group cursor-pointer"
                  >
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${template.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                      <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-br ${template.color}`}>
                            {template.icon}
                          </div>
                        </div>
                        <h4 className="text-white font-semibold mb-2">{template.name}</h4>
                        <p className="text-gray-300 text-sm">{template.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        );
      
      default:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-white mb-2">Coming Soon</h3>
            <p className="text-gray-400">This section is under development</p>
          </motion.div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-black font-geist">
      
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="floating-bg absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="floating-bg absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-pink-500/10 to-red-500/10 rounded-full blur-3xl"></div>
        <div className="floating-bg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <div className="relative px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8"
          >
            
            <div>
            <Navbar/>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-2 mt-10">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  XORION
                </span>
                <span className="text-white"> DEV</span>
              </h1>
              <p className="text-gray-400 text-lg">Developer Documentation Portal</p>
            </div>
            
            {/* Search */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative w-full sm:w-auto"
            >
              <div className={`relative transition-all duration-300 ${isSearchFocused ? 'scale-105' : ''}`}>
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  className="w-full sm:w-80 pl-12 pr-4 py-3 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 focus:border-blue-400 focus:outline-none text-white placeholder-gray-400 transition-all duration-300"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Navigation */}
          <div className="flex flex-wrap gap-2 mb-8">
            {navigationSections.map((section, index) => (
              <motion.button
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-blue-500 text-white border border-blue-400'
                    : 'bg-white/10 text-gray-300 border border-white/20 hover:border-white/40 hover:bg-white/20'
                }`}
              >
                {section.icon}
                <span className="hidden sm:inline">{section.title}</span>
              </motion.button>
            ))}
          </div>

          {/* Main Content */}
          <div className="min-h-[60vh]">
            <AnimatePresence mode="wait">
              {renderContent()}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <FooterContent></FooterContent>
    </div>
  );
};

export default DevPortal;