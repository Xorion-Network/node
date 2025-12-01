import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaRocket, FaBolt, FaCubes, FaNetworkWired, FaCode } from 'react-icons/fa';
import Navbar from '../Layout/Navbar';

gsap.registerPlugin(ScrollTrigger);

const Herovid = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const techFeatures = [
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: "Quantum Cryptography",
      description: "Post-quantum cryptography that defies computational limits",
      gradient: "from-purple-500 to-pink-500",
      delay: 0.1
    },
    {
      icon: <FaBolt className="w-8 h-8" />,
      title: "100k+ to 5k+ TPS",
      description: "Lightning-fast transaction processing with sub-second finality",
      gradient: "from-blue-500 to-cyan-500",
      delay: 0.2
    },
    {
      icon: <FaCubes className="w-8 h-8" />,
      title: "Modular Architecture",
      description: "Lego-like design that scales infinitely",
      gradient: "from-green-500 to-emerald-500",
      delay: 0.3
    },
    {
      icon: <FaNetworkWired className="w-8 h-8" />,
      title: "Cross-Chain",
      description: "Seamless interoperability across all blockchains",
      gradient: "from-orange-500 to-red-500",
      delay: 0.4
    }
  ];

  const stats = [
    { value: "∞", label: "Scalability", color: "text-blue-400" },
    { value: "0", label: "Compromises", color: "text-green-400" },
    { value: "100%", label: "Uptime", color: "text-purple-400" },
    { value: "24/7", label: "Security", color: "text-pink-400" }
  ];

  return (
    <div ref={containerRef} className="relative bg-black overflow-hidden font-geist">
      <Navbar />
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="floating-element absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="floating-element absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-pink-500/10 to-red-500/10 rounded-full blur-3xl"></div>
        <div className="floating-element absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <motion.section 
        style={{ y }}
        className="relative pt-32 pb-20 px-4 md:px-6"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <motion.h2 
              className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-none mb-8"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.2 }}
            >
              THE
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                FUTURE
              </span>
              IS HERE
            </motion.h2>
            
            <motion.p 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            >
              Experience the next generation of decentralized technology. 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-bold">
                {" "}Quantum security. Infinite scalability. Zero compromises.
              </span>
            </motion.p>
          </motion.div>

          {/* Floating Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            {stats.map((stat, index) => (
      <motion.div
                key={index}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300"
              >
                <div className={`text-4xl md:text-5xl font-black ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm md:text-base font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Technology Grid */}
      <section className="relative py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h3 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-black text-white text-center mb-16"
          >
            CUTTING-EDGE
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              TECHNOLOGY
            </span>
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{}}
                transition={{ delay: feature.delay, duration: 0.3, type: "tween" }}
                className={`relative group cursor-pointer`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                <div className="relative bg-black/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${feature.gradient}`}>
                      {feature.icon}
                    </div>
                    <h4 className="text-2xl md:text-3xl font-bold text-white">{feature.title}</h4>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {feature.description}
                  </p>
              </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Diagonal CTA Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative py-32 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 transform -skew-y-6"></div>
        <div className="relative max-w-6xl mx-auto px-4 md:px-6 text-center">
          <motion.h3 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-black text-white mb-8"
          >
            READY TO BUILD THE
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              IMPOSSIBLE?
            </span>
          </motion.h3>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button 
              whileHover={{}}
              whileTap={{}}
              onClick={() => window.open('https://explorer.xorion.network/explorer', '_blank')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-12 py-6 rounded-3xl text-xl font-bold transition-colors duration-200 flex items-center gap-3"
            >
              <FaRocket className="w-6 h-6" />
              <span>Start Building</span>
            </motion.button>
            
            <motion.button 
              whileHover={{}}
              whileTap={{}}
              onClick={() => window.open('https://xorion-chain.gitbook.io/xorion-chain-docs/', '_blank')}
              className="border-2 border-purple-500 hover:bg-purple-500/10 text-purple-400 hover:text-white px-12 py-6 rounded-3xl text-xl font-bold transition-colors duration-200 flex items-center gap-3"
            >
              <FaCode className="w-6 h-6" />
              <span>View Docs</span>
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Remove floating animated dots for minimalism */}
      </div>
    </div>
  );
};

export default Herovid;