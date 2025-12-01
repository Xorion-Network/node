import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  FaExchangeAlt, 
  FaChartLine, 
  FaBuilding, 
  FaUserSecret, 
  FaFileContract,
  FaRocket,
  FaCode,
  FaShieldAlt,
  FaNetworkWired,
  FaLock,
  FaArrowRight,
  FaUsers,
  FaCalendarAlt,
  FaStar,
  FaCrown,
  FaHandshake,
  FaShoppingCart
} from 'react-icons/fa';
import { FaBridge } from 'react-icons/fa6';
import Navbar from '../Layout/Navbar';
import FooterContent from '../Home/Footer';

const Ecosystem = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -300]);

  useEffect(() => {
    // Subtle floating animation for background elements
    const floatingElements = document.querySelectorAll('.floating-bg');
    floatingElements.forEach((element) => {
      element.animate([
        { transform: 'translateY(0px)' },
        { transform: 'translateY(-8px)' },
        { transform: 'translateY(0px)' }
      ], {
        duration: 6000,
        iterations: Infinity,
        easing: 'ease-in-out'
      });
    });
    
    return () => {};
  }, []);

  const defiApps = [
    {
      icon: <FaExchangeAlt className="w-8 h-8" />,
      title: "DEX Aggregator",
      description: "Multi-chain liquidity aggregation with quantum-resistant security",
      features: ["Cross-chain swaps", "MEV protection", "Zero slippage"],
      color: "from-blue-500 to-purple-500",
      delay: 0.1
    },
    {
      icon: <FaBridge className="w-8 h-8" />,
      title: "Cross-Chain Bridge",
      description: "Secure asset bridging with circuit breakers and fraud detection",
      features: ["Circuit breakers", "Fraud detection", "Instant finality"],
      color: "from-green-500 to-cyan-500",
      delay: 0.2
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Oracle Network",
      description: "TWAP price feeds with outlier detection and manipulation resistance",
      features: ["TWAP pricing", "Outlier detection", "Manipulation proof"],
      color: "from-yellow-500 to-orange-500",
      delay: 0.3
    }
  ];

  const enterpriseUseCases = [
    {
      icon: <FaUserSecret className="w-8 h-8" />,
      title: "Private Transactions",
      description: "Zero-knowledge proofs with selective disclosure for enterprise privacy",
      features: ["Selective disclosure", "Zero-knowledge", "Compliance ready"],
      color: "from-purple-500 to-pink-500",
      delay: 0.1
    },
    {
      icon: <FaFileContract className="w-8 h-8" />,
      title: "Regulatory Compliance",
      description: "Built-in compliance mechanisms for institutional adoption",
      features: ["KYC/AML ready", "Audit trails", "Regulatory reporting"],
      color: "from-red-500 to-pink-500",
      delay: 0.2
    },
    {
      icon: <FaBuilding className="w-8 h-8" />,
      title: "Supply Chain",
      description: "End-to-end traceability with immutable records",
      features: ["Product tracking", "Authenticity proof", "Global network"],
      color: "from-indigo-500 to-purple-500",
      delay: 0.3
    }
  ];

  const dappsShowcase = [
    {
      name: "XorionSwap",
      description: "Next-gen DEX with quantum-proof security",
      status: "Live",
      tvl: "$2.3B",
      icon: <FaExchangeAlt className="w-10 h-10 text-blue-400" />,
      color: "from-blue-500 to-purple-500"
    },
    {
      name: "QuantumVault",
      description: "Institutional-grade DeFi yield platform",
      status: "Beta",
      tvl: "$890M",
      icon: <FaLock className="w-10 h-10 text-cyan-400" />,
      color: "from-green-500 to-cyan-500"
    },
    {
      name: "ChainLink Pro",
      description: "Enterprise cross-chain infrastructure",
      status: "Coming Soon",
      tvl: "TBA",
      icon: <FaNetworkWired className="w-10 h-10 text-yellow-400" />,
      color: "from-yellow-500 to-orange-500"
    },
    {
      name: "ZeroID",
      description: "Privacy-first identity verification",
      status: "Live",
      tvl: "$150M",
      icon: <FaUserSecret className="w-10 h-10 text-pink-400" />,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const deploymentSteps = [
    {
      step: "01",
      title: "Setup Development Environment",
      description: "Install XorionChain SDK and configure your workspace",
      icon: <FaCode className="w-6 h-6" />
    },
    {
      step: "02",
      title: "Smart Contract Development",
      description: "Build quantum-resistant smart contracts using our framework",
      icon: <FaShieldAlt className="w-6 h-6" />
    },
    {
      step: "03",
      title: "Testing & Validation",
      description: "Test on our quantum-proof testnet environment",
      icon: <FaNetworkWired className="w-6 h-6" />
    },
    {
      step: "04",
      title: "Deploy to Mainnet",
      description: "Launch your dApp on XorionChain 4.0 mainnet",
      icon: <FaRocket className="w-6 h-6" />
    }
  ];

  // Updated tokenomics data
  const tokenomicsData = [
    {
      category: "Ecosystem & Community",
      percentage: 30,
      amount: "300M XOR",
      description: "Community incentives and ecosystem development",
      color: "from-blue-500 to-cyan-500",
      icon: <FaUsers className="w-6 h-6" />
    },
    {
      category: "Core Team & Advisors",
      percentage: 18,
      amount: "180M XOR", 
      description: "Team and advisor allocations with vesting",
      color: "from-purple-500 to-pink-500",
      icon: <FaCrown className="w-6 h-6" />
    },
    {
      category: "Developer Incentives",
      percentage: 15,
      amount: "150M XOR",
      description: "Incentivizing developers and builders",
      color: "from-green-500 to-emerald-500",
      icon: <FaCode className="w-6 h-6" />
    },
    {
      category: "Reserve",
      percentage: 15,
      amount: "150M XOR",
      description: "Reserved for future ecosystem needs",
      color: "from-indigo-500 to-purple-500",
      icon: <FaLock className="w-6 h-6" />
    },
    {
      category: "Strategic Partners",
      percentage: 10,
      amount: "100M XOR",
      description: "Strategic partnerships and collaborations",
      color: "from-red-500 to-pink-500",
      icon: <FaHandshake className="w-6 h-6" />
    },
    {
      category: "Validator Rewards",
      percentage: 10,
      amount: "100M XOR",
      description: "Network security and validator rewards",
      color: "from-yellow-500 to-orange-500",
      icon: <FaShieldAlt className="w-6 h-6" />
    },
    {
      category: "Public Sale",
      percentage: 2,
      amount: "20M XOR",
      description: "Public token sale (Launchpad/IDO)",
      color: "from-cyan-500 to-blue-500",
      icon: <FaShoppingCart className="w-6 h-6" />
    }
  ];

  // Updated vesting schedule
  const vestingSchedule = [
    {
      category: "Ecosystem & Community",
      initialRelease: "5%",
      vestingPeriod: "24 months",
      description: "5% at TGE, 24-month linear vesting",
      color: "from-blue-500 to-cyan-500",
      amount: "300M XOR"
    },
    {
      category: "Core Team & Advisors",
      initialRelease: "0%",
      vestingPeriod: "36 months",
      description: "12-month cliff, 36-month vesting",
      color: "from-purple-500 to-pink-500",
      amount: "180M XOR"
    },
    {
      category: "Developer Incentives",
      initialRelease: "0%",
      vestingPeriod: "Quarterly",
      description: "Quarterly disbursements",
      color: "from-green-500 to-emerald-500",
      amount: "150M XOR"
    },
    {
      category: "Reserve",
      initialRelease: "0%",
      vestingPeriod: "Locked",
      description: "Locked for future use",
      color: "from-indigo-500 to-purple-500",
      amount: "150M XOR"
    },
    {
      category: "Strategic Partners",
      initialRelease: "0%",
      vestingPeriod: "18 months",
      description: "6-month cliff, 18-month linear vesting",
      color: "from-red-500 to-pink-500",
      amount: "100M XOR"
    },
    {
      category: "Validator Rewards",
      initialRelease: "Continuous",
      vestingPeriod: "Ongoing",
      description: "Continuous via staking",
      color: "from-yellow-500 to-orange-500",
      amount: "100M XOR"
    },
    {
      category: "Public Sale",
      initialRelease: "TBD",
      vestingPeriod: "TBD",
      description: "TBD (Launchpad/IDO)",
      color: "from-cyan-500 to-blue-500",
      amount: "20M XOR"
    }
  ];

  return (
    <div ref={containerRef} className="relative bg-black font-geist overflow-hidden">
      <Navbar />
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="floating-bg absolute top-20 left-10 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
        <div className="floating-bg absolute bottom-20 right-10 w-40 h-40 md:w-80 md:h-80 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-full blur-3xl"></div>
        <div className="floating-bg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="floating-bg absolute top-1/4 right-1/4 w-24 h-24 md:w-48 md:h-48 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full blur-2xl"></div>
      </div>

      {/* Hero Section */}
      <motion.div 
        style={{ y }}
        className="relative pt-20 md:pt-32 pb-12 md:pb-20 px-4 md:px-6"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none mb-6">
              USE CASES &
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                ECOSYSTEM
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed font-light max-w-4xl mx-auto mb-8">
              Discover the infinite possibilities of <span className="text-blue-400 font-semibold">XorionChain 4.0</span> - 
              from DeFi innovation to enterprise solutions.
            </p>
            
            {/* Key Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-8 mb-8"
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  1B
                </div>
                <div className="text-gray-400 text-sm">Total Supply</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
                  30%
                </div>
                <div className="text-gray-400 text-sm">Ecosystem & Community</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                  10%
                </div>
                <div className="text-gray-400 text-sm">Validator Rewards</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* DeFi Applications Section */}
      <div className="relative py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-20"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4">
              DeFi APPLICATIONS
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              Revolutionary DeFi protocols built on quantum-proof infrastructure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {defiApps.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="parallax-card relative group cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${app.color} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                <div className="relative bg-black/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${app.color}`}>
                      {app.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{app.title}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {app.description}
                  </p>
                  <div className="space-y-2">
                    {app.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                        <span className="text-gray-400 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Enterprise Use Cases */}
      <div className="relative py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-20"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4">
              ENTERPRISE SOLUTIONS
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              Enterprise-grade blockchain solutions for institutional adoption
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {enterpriseUseCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="parallax-card relative group cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${useCase.color} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                <div className="relative bg-black/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${useCase.color}`}>
                      {useCase.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{useCase.title}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {useCase.description}
                  </p>
                  <div className="space-y-2">
                    {useCase.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                        <span className="text-gray-400 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* DApps Showcase */}
      <div className="relative py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-20"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4">
              DAPPS SHOWCASE
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              Cutting-edge applications built on XorionChain 4.0
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dappsShowcase.map((dapp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                transition={{ delay: index * 0.03, duration: 0.18, type: "tween" }}
                className="parallax-card relative group cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${dapp.color} rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-300`}></div>
                <div className="relative bg-black/60 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 h-full flex flex-col">
                  <div className="flex justify-center mb-4">{dapp.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2 text-center">{dapp.name}</h3>
                  <p className="text-gray-300 text-sm mb-4 text-center flex-grow">{dapp.description}</p>
                  <div className="flex justify-center items-center">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      dapp.status === 'Live' ? 'bg-green-500/20 text-green-400' :
                      dapp.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {dapp.status}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* XOR Tokenomics Section */}
      <div className="relative py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-20"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4">
              XOR TOKENOMICS
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-8">
              XOR token has a **fixed maximum supply of 1 billion**. The distribution model is structured for significantly long-term ecosystem health.
            </p>
            
            {/* Key Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10 mb-12 max-w-4xl mx-auto"
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <FaStar className="text-yellow-400 w-5 h-5" />
                <h3 className="text-xl font-bold text-white">Cross-Chain Risk Reduction</h3>
                <FaStar className="text-yellow-400 w-5 h-5" />
              </div>
              <p className="text-gray-300 text-center">
                Xorion proactively reduces cross-chain risk by dedicating **10% to validators and the security pool**, 
                addressing one of the biggest challenges facing interoperability protocols today.
              </p>
            </motion.div>
          </motion.div>

          {/* Token Distribution Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {tokenomicsData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                transition={{ delay: index * 0.1, duration: 0.18, type: "tween" }}
                className="relative group cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                <div className="relative bg-black/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color}`}>
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.category}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                      {item.percentage}%
                    </span>
                    <span className="text-gray-300 text-sm">({item.amount})</span>
                  </div>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Enhanced Tokenomics Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-black/20 backdrop-blur-xl rounded-3xl p-8 border border-white/10 mb-16"
          >
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Token Distribution Breakdown</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Pie Chart */}
              <div className="flex items-center justify-center">
                <div className="relative w-80 h-80">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    {tokenomicsData.map((item, index) => {
                      const startAngle = tokenomicsData.slice(0, index).reduce((acc, curr) => acc + curr.percentage, 0) * 3.6;
                      const endAngle = startAngle + item.percentage * 3.6;
                      const largeArcFlag = item.percentage > 50 ? 1 : 0;
                      const x1 = 50 + 35 * Math.cos((startAngle * Math.PI) / 180);
                      const y1 = 50 + 35 * Math.sin((startAngle * Math.PI) / 180);
                      const x2 = 50 + 35 * Math.cos((endAngle * Math.PI) / 180);
                      const y2 = 50 + 35 * Math.sin((endAngle * Math.PI) / 180);
                      
                      return (
                        <path
                          key={index}
                          d={`M 50 50 L ${x1} ${y1} A 35 35 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                          fill={`url(#gradient-${index})`}
                          className="hover:opacity-80 transition-opacity duration-300 cursor-pointer"
                        />
                      );
                    })}
                    {tokenomicsData.map((item, index) => {
                      const colors = {
                        'from-blue-500 to-cyan-500': ['#3B82F6', '#06B6D4'],
                        'from-purple-500 to-pink-500': ['#8B5CF6', '#EC4899'],
                        'from-green-500 to-emerald-500': ['#10B981', '#059669'],
                        'from-yellow-500 to-orange-500': ['#F59E0B', '#EA580C'],
                        'from-red-500 to-pink-500': ['#EF4444', '#F97316'],
                        'from-indigo-500 to-purple-500': ['#6366F1', '#8B5CF6'],
                        'from-cyan-500 to-blue-500': ['#06B6D4', '#3B82F6']
                      };
                      
                      const [startColor, endColor] = (colors as any)[item.color] || ['#3B82F6', '#06B6D4'];
                      
                      return (
                        <defs key={index}>
                          <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor={startColor} />
                            <stop offset="100%" stopColor={endColor} />
                          </linearGradient>
                        </defs>
                      );
                    })}
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                        1B
                      </div>
                      <div className="text-gray-400 text-sm">XOR Tokens</div>
                      <div className="text-gray-500 text-xs">Fixed Supply</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Legend */}
              <div className="space-y-3">
                {tokenomicsData.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div className={`w-4 h-4 rounded bg-gradient-to-r ${item.color}`}></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-white font-semibold text-sm">{item.category}</span>
                        <span className="text-blue-400 font-bold">{item.percentage}%</span>
                      </div>
                      <div className="text-gray-400 text-xs">{item.amount}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Vesting Schedule Section */}
      <div className="relative py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-20"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4">
              VESTING SCHEDULE
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Long-term commitment to sustainable token distribution with carefully structured release timelines
            </p>
            
            {/* Token Emission Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10 mb-12 max-w-4xl mx-auto"
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <FaLock className="text-green-400 w-5 h-5" />
                <h3 className="text-xl font-bold text-white">No Inflationary Minting</h3>
                <FaLock className="text-green-400 w-5 h-5" />
              </div>
              <p className="text-gray-300 text-center">
                Every XOR token that will ever exist is already accounted for. **No open-ended mint functions**, 
                no supply dilution, and no backdoors. Every release is scheduled, visible, and subject to protocol rules.
              </p>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {vestingSchedule.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                transition={{ delay: index * 0.1, duration: 0.18, type: "tween" }}
                className="relative group cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                <div className="relative bg-black/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color}`}>
                      <FaCalendarAlt className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{item.category}</h3>
                  <div className="text-sm text-gray-300 mb-2">{item.amount}</div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Initial Release:</span>
                      <span className="text-white font-semibold text-sm">{item.initialRelease}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Vesting Period:</span>
                      <span className="text-white font-semibold text-sm">{item.vestingPeriod}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-xs leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Vesting Timeline Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 bg-black/20 backdrop-blur-xl rounded-3xl p-8 border border-white/10"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Token Release Timeline</h3>
            <div className="flex flex-col space-y-4">
              {[
                { time: 'TGE (Token Generation Event)', events: ['Public Sale: 50%', 'Core Team: 15%', 'Ecosystem: 5%'] },
                { time: '3 Months', events: ['Developer Incentives cliff ends'] },
                { time: '6 Months', events: ['Public Sale fully unlocked', 'Strategic Partners cliff ends'] },
                { time: '18 Months', events: ['Strategic Partners fully vested'] },
                { time: '24 Months', events: ['Developer Incentives fully vested', 'Ecosystem & Community fully vested'] },
                { time: '36 Months', events: ['Core Team & Advisors fully vested'] }
              ].map((milestone, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-white/5 rounded-lg">
                  <div className="w-24 text-blue-400 font-semibold text-sm">{milestone.time}</div>
                  <div className="flex-1">
                    {milestone.events.map((event, idx) => (
                      <div key={idx} className="text-gray-300 text-sm">{event}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Deploy Your DApp Section */}
      <div className="relative py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-20"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4">
              DEPLOY YOUR DAPP
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              Build the future on XorionChain 4.0 with our developer tools
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deploymentSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ 
                  delay: index * 0.2, 
                  duration: 0.6
                }}
                className="parallax-card relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="relative bg-black/50 backdrop-blur-xl rounded-3xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 h-full flex flex-col">
                  <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
                    {step.step}
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500">
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300"
            >
              <FaRocket className="w-5 h-5" />
              Start Building Now
              <FaArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>
      </div>
      
      <FooterContent />
    </div>
  );
};

export default Ecosystem;
