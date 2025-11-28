import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaShieldAlt, FaCubes, FaBolt, FaLock, FaRocket, FaNetworkWired, FaLinkedin } from 'react-icons/fa';
import FooterContent from '../Home/Footer';
import Navbar from '../Layout/Navbar';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -300]);

  useEffect(() => {
    // Floating animation for background elements
    gsap.to(".floating-bg", {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut"
    });

    // Parallax effect for hero elements
    gsap.to(".parallax-element", {
      y: -100,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const features = [
    {
      icon: <FaShieldAlt className="w-8 h-8 md:w-10 md:h-10" />,
      title: "Quantum-Proof",
      description: "Post-quantum cryptography that defies computational limits",
      color: "from-purple-500 to-pink-500",
      delay: 0.1
    },
    {
      icon: <FaCubes className="w-8 h-8 md:w-10 md:h-10" />,
      title: "Modular Core",
      description: "Lego-like architecture that scales infinitely",
      color: "from-blue-500 to-cyan-500",
      delay: 0.2
    },
    {
      icon: <FaBolt className="w-8 h-8 md:w-10 md:h-10" />,
      title: "Lightning Fast",
      description: "100k+ to 5k+  TPS with sub-second finality",
      color: "from-yellow-500 to-orange-500",
      delay: 0.3
    },
    {
      icon: <FaLock className="w-8 h-8 md:w-10 md:h-10" />,
      title: "L1 Fortress",
      description: "Unbreakable base layer security",
      color: "from-green-500 to-emerald-500",
      delay: 0.4
    },
    {
      icon: <FaRocket className="w-8 h-8 md:w-10 md:h-10" />,
      title: "Dev Paradise",
      description: "Zero-friction dApp development",
      color: "from-red-500 to-pink-500",
      delay: 0.5
    },
    {
      icon: <FaNetworkWired className="w-8 h-8 md:w-10 md:h-10" />,
      title: "Omni-Chain",
      description: "Seamless cross-chain communication",
      color: "from-indigo-500 to-purple-500",
      delay: 0.6
    }
  ];

  const teamMembers = [
    {
      name: "Rajat Sharma",
      position: "Founder & CEO",
      linkedin: "https://www.linkedin.com/in/rajat-sharma-09145918b/",
      photo: "/RGB/Rajat Sharma.png"
    },
    {
      name: "Benjamin Abena",
      position: "COO",
      linkedin: "https://www.linkedin.com/in/abena-benjamin/",
      photo: "/RGB/Benjamin Abena.png"
    },
    {
      name: "Otuo Kofi",
      position: "Blockchain Developer",
      linkedin: "https://www.linkedin.com/in/kofi-otuo-010993222/",
      photo: "/RGB/Otuo Kofi.png"
    },
    {
      name: "Esang Jimmy",
      position: "Full Stack Developer",
      linkedin: "https://www.linkedin.com/in/esangubong-jimmy/",
      photo: "/RGB/Esang Jimmy.png"
    },
    {
      name: "Jabulani Usen",
      position: "Full Stack Developer",
      linkedin: "https://x.com/JabulaniUsen",
      photo: "/RGB/jabulani usen.png"
    },
    {
      name: "Clement Kalu",
      position: "Full Stack Developer",
      linkedin: "https://www.linkedin.com/in/inspikalu/",
      photo: "/RGB/Clement Kalu.png"
    },
    {
      name: "Yusuf Owolabi",
      position: "Blockchain Audit & Security Manager",
      linkedin: "https://www.linkedin.com/in/owolabi-yusuf-717447156",
      photo: "/RGB/Yusuf Owolabi.png"
    },
    {
      name: "Joy Michael",
      position: "Web3 Growth Manager",
      linkedin: "https://www.linkedin.com/in/joy-michael-5a4264248",
      photo: "/RGB/Joy Michael.png"
    },
    {
      name: "Godwin Bassey",
      position: "UI/UX Designer",
      linkedin: "https://www.linkedin.com/in/godwin-bassey",
      photo: "/RGB/Goddwin Bassey.png"
    },
    {
      name: "James Onyero",
      position: "Graphics Designer",
      linkedin: "https://www.linkedin.com/in/paul-james-2005498b",
      photo: "/RGB/James Onyero.png"
    },
    {
      name: "Elizabeth Moore",
      position: "Community Engagement Manager",
      linkedin: "https://www.linkedin.com/in/elizabeth-moore",
      photo: "/RGB/Elizabeth Moore.png"
    },
    {
      name: "Daniel Ekpe",
      position: "Community and Growth Architecture Specialist",
      linkedin: "https://www.linkedin.com/in/daniel-ekpe-171a06233/",
      photo: "/RGB/Daniel Ekpe.png"
    }
  ];

  return (
    <div ref={containerRef} className="relative bg-black font-geist min-h-screen overflow-x-hidden">
      <Navbar />
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="floating-bg absolute top-20 left-10 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
        <div className="floating-bg absolute bottom-20 right-10 w-40 h-40 md:w-80 md:h-80 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-full blur-3xl"></div>
        <div className="floating-bg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section - Asymmetric Layout */}
      <motion.div 
        style={{ y }}
        className="relative pt-20 md:pt-32 pb-12 md:pb-20 px-4 md:px-6"
      >
        <div className="max-w-7xl mx-auto">
          {/* Diagonal Text Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-6 md:space-y-8"
            >
              <div className="relative">
                <motion.h1 
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white leading-none"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  XORION
                </motion.h1>
                <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-12 h-12 md:w-24 md:h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-60"></div>
              </div>
              
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed font-light"
              >
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-bold">quantum-proof</span> L1 blockchain that redefines what's possible.
              </motion.p>
            </motion.div>

            {/* Floating Stats Cards */}
            <motion.div 
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'tween', duration: 0.18 }}
                  className="bg-white/10 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/20"
                >
                  <div className="text-2xl md:text-4xl font-bold text-white">100k+ to 5k+</div>
                  <div className="text-gray-400 text-xs md:text-sm">TPS</div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'tween', duration: 0.18 }}
                  className="bg-white/10 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/20"
                >
                  <div className="text-2xl md:text-4xl font-bold text-white">∞</div>
                  <div className="text-gray-400 text-xs md:text-sm">Scalability</div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'tween', duration: 0.18 }}
                  className="bg-white/10 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/20"
                >
                  <div className="text-2xl md:text-4xl font-bold text-white">99.9%</div>
                  <div className="text-gray-400 text-xs md:text-sm">Uptime</div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'tween', duration: 0.18 }}
                  className="bg-white/10 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/20"
                >
                  <div className="text-2xl md:text-4xl font-bold text-white">0</div>
                  <div className="text-gray-400 text-xs md:text-sm">Compromises</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Features Section - Overlapping Cards */}
      <div className="relative py-12 md:py-20 px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto"
        >
          <motion.h2 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white text-center mb-12 md:mb-20"
          >
            WHY XORION?
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                transition={{ delay: feature.delay, duration: 0.18, type: 'tween' }}
                className="relative group cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                <div className="relative bg-black/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${feature.color}`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Team Section */}
      <div className="relative py-12 md:py-20 px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto"
        >
          <motion.h2 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white text-center mb-12 md:mb-20"
          >
            MEET THE
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              TEAM
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                transition={{ delay: index * 0.1, duration: 0.18, type: 'tween' }}
                className="relative group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="relative bg-black/50 backdrop-blur-xl rounded-3xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 text-center">
                  <div className="relative mb-4">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-500 p-1">
                      <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                        <img 
                          src={member.photo} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                          onError={(e:any) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextElementSibling.style.display = 'flex';
                          }}
                        />
                        <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center text-white text-2xl font-bold" style={{display: 'none'}}>
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{member.position}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    <FaLinkedin className="w-4 h-4" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <FooterContent />
    </div>
  );
};

export default About;
