import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Crosshair,
  Cpu,
  Network,
  Code
} from 'lucide-react';
import Navbar from '../Layout/Navbar';

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const container = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    // Desktop implementation
    if (window.innerWidth >= 1024) {
      ScrollTrigger.create({
        trigger: '.left-section',
        start: 'top top',
        end: '+=400%',
        pin: true,
        pinSpacing: false
      });
 
      gsap.utils.toArray('.feature-card').forEach((card: any) => {
        gsap.from(card, {
          opacity: 0,
          y: 100,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        });
      });
    }
 
    // Handle resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, { scope: container });
 
  // Animation variants for mobile
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-[#00e676]" />,
      title: "Quantum-Resistant Zero-Knowledge Proofs",
      description: "Future-proof privacy with post-quantum cryptography that ensures your data remains secure even against quantum computer attacks.",
      gradient: "from-green-500 to-emerald-500 opacity-50"
    },
    {
      icon: <Crosshair className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-[#00e676]" />,
      title: "Cross-Chain Intent Protocol",
      description: "Seamless interoperability across all blockchain networks, enabling unified experiences across different ecosystems.",
      gradient: "from-emerald-500 to-green-500 opacity-50"
    },
    {
      icon: <Cpu className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-[#00e676]" />,
      title: "Adaptive Security Framework",
      description: "Self-evolving protection system that automatically adapts to emerging threats using advanced machine learning algorithms.",
      gradient: "from-green-500 to-emerald-500 opacity-50"
    },
    {
      icon: <Network className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-[#00e676]" />,
      title: "Decentralized Security Oracle Network",
      description: "Real-time threat intelligence gathered from distributed nodes worldwide to provide comprehensive security coverage.",
      gradient: "from-emerald-500 to-green-500 opacity-50"
    },
    {
      icon: <Code className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-[#00e676]" />,
      title: "Quantum-Secure Smart Contract Language",
      description: "Revolutionary programming language designed for the post-quantum era, ensuring smart contracts remain secure forever.",
      gradient: "from-green-500 to-emerald-500 opacity-50"
    }
  ];

  return (
    <div className="relative">
      <Navbar />
      {/* Mobile & Tablet - Vertical layout */}
      <div className="lg:hidden w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center py-12 px-6"
        >
          <motion.h1 
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Revolutionary Features
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Next-gen blockchain technology
          </motion.p>
        </motion.div>
       
        <div className="px-6 pb-12">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-8 max-w-4xl mx-auto"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'tween', duration: 0.18 }}
                className="feature-card"
              >
                {/* Card Container */}
                <div className="relative w-full">
                  {/* Back Layer - Gradient rectangle offset */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={`absolute -top-3 -left-3 w-full h-full bg-gradient-to-br ${feature.gradient} rounded-2xl shadow-lg blur-sm`}
                  ></motion.div>
                 
                  {/* Front Layer - Dark glassmorphism rectangle */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="relative w-full bg-black/50 backdrop-blur-xl rounded-2xl shadow-md border border-white/10 p-6 md:p-8 mt-6"
                  >
                    {/* Content Section */}
                    <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                      {/* Icon */}
                      <div className="mb-4 md:mb-0 flex-shrink-0">
                        {feature.icon}
                      </div>
                      {/* Title */}
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-0 font-geist leading-tight">
                        {feature.title}
                      </h2>
                    </div>
                    {/* Body Text */}
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed font-geist mt-4 md:mt-2">
                      {feature.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Desktop - Vertical layout */}
      <div className="hidden lg:flex w-full h-full">
        {/* Left fixed section */}
        <section className="left-section w-[50vw] h-screen sticky top-0">
          <div className="h-full flex items-center justify-center">
            <div className="text-center px-8 xl:px-12 2xl:px-16">
              <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white mb-4 xl:mb-6">Revolutionary Features</h1>
              <p className="text-lg xl:text-xl 2xl:text-2xl text-gray-400 max-w-md xl:max-w-lg 2xl:max-w-xl mx-auto leading-relaxed">
                The next generation of blockchain technology
              </p>
            </div>
          </div>
        </section>
       
        {/* Right scrollable section */}
        <section className="right-section w-[50vw]">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card h-screen w-full flex items-center justify-center p-8 xl:p-12 2xl:p-16"
            >
              {/* Card Container with relative positioning */}
              <div className="relative w-full max-w-lg xl:max-w-2xl 2xl:max-w-3xl h-72 xl:h-80 2xl:h-96">
                {/* Back Layer - Gradient rectangle offset to top-left */}
                <div className={`absolute -top-3 xl:-top-4 2xl:-top-6 -left-3 xl:-left-4 2xl:-left-6 w-full h-full bg-gradient-to-br ${feature.gradient} rounded-2xl xl:rounded-3xl shadow-lg blur-sm`}></div>
               
                {/* Front Layer - Dark glassmorphism rectangle */}
                <div className="relative w-full h-full bg-black/50 backdrop-blur-xl rounded-2xl xl:rounded-3xl shadow-xl border border-white/10 p-6 xl:p-8 2xl:p-10 flex flex-col justify-between">
                  {/* Content Section */}
                  <div>
                    {/* Icon */}
                    <div className="mb-4 xl:mb-6 2xl:mb-8">
                      {feature.icon}
                    </div>
                   
                    {/* Title */}
                    <h2 className="text-2xl xl:text-3xl 2xl:text-4xl font-semibold text-white mb-3 xl:mb-4 2xl:mb-6 font-sans leading-tight">
                      {feature.title}
                    </h2>
                   
                    {/* Body Text */}
                    <p className="text-gray-300 text-sm xl:text-base 2xl:text-lg leading-relaxed font-sans">
                      {feature.description}
                    </p>
                  </div>
                 
                  {/* Button */}
                  <div className="flex justify-start mt-4 xl:mt-6 2xl:mt-8">
                    <button 
                      onClick={() => window.open('https://github.com/Xorion-Network/xorion-main/blob/master/Whitepaper/Xorion%20Whitepaper%201.0.0.3.pdf', '_blank')}
                      className="bg-[#00e676] hover:bg-[#00c853] text-black font-medium px-4 xl:px-6 2xl:px-8 py-2 xl:py-3 2xl:py-4 rounded-lg text-sm xl:text-base 2xl:text-lg font-sans transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}