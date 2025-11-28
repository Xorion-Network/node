import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Layout/Navbar';
import FooterContent from '../components/Home/Footer';
import { FaDiscord, FaTelegram, FaGithub, FaReddit, FaMedium } from 'react-icons/fa';
import { SiX } from 'react-icons/si';
gsap.registerPlugin(ScrollTrigger);

const forumPosts = [
  { title: 'How to stake XOR?', author: 'Alice', replies: 42 },
  { title: 'Validator setup guide', author: 'Bob', replies: 30 },
  { title: 'DAO voting explained', author: 'Carol', replies: 27 },
];

const events = [
  { date: '', title: 'Launchpads IDO', desc: 'Coming soon - launchpads token sales and partnerships' },
  { date: '', title: '$XOR TGE & Listing', desc: 'Coming soon - Token Generation Event and Listing updates' },
  { date: '', title: 'Developer bounty', desc: 'DApps development on Xorion Network' },
];

const socialLinks = [
  {
    label: "X",
    href: "https://x.com/Xorion_Network",
    icon: SiX,
    description: "Official X (Twitter)"
  },
  {
    label: "Discord",
    href: "https://discord.gg/TWxeqcbwu7",
    icon: FaDiscord,
    description: "Community chat"
  },
  {
    label: "Telegram",
    href: "https://t.me/xorion_network",
    icon: FaTelegram,
    description: "Community chat"
  },
  {
    label: "GitHub",
    href: "https://github.com/Xorion-Network",
    icon: FaGithub,
    description: "Source code and issues"
  },
  {
    label: "Linktree",
    href: "https://linktr.ee/xorionnetwork",
    icon: FaReddit,
    description: "All our links"
  },
  {
    label: "Medium",
    href: "https://medium.com/@xorion_network",
    icon: FaMedium,
    description: "Blog & Announcements"
  }
];

const Community: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to('.floating-bg', {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut',
    });
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative bg-black font-geist min-h-screen overflow-x-hidden">
      {/* Animated Floating Gradient Backgrounds */}
      {/* 1. Reduce background gradient intensity */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="floating-bg absolute top-20 left-10 w-40 h-40 md:w-72 md:h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
        <div className="floating-bg absolute bottom-20 right-10 w-32 h-32 md:w-56 md:h-56 bg-gradient-to-r from-pink-500/10 to-red-500/10 rounded-full blur-2xl"></div>
        <div className="floating-bg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-40 md:h-40 bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-full blur-2xl"></div>
      </div>
      <Navbar />
      {/* Hero Section */}
      <section className="relative pt-24 pb-10 px-2 md:px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Headline & Stats */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">XORION</span> Community
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-light">
              Decentralized. Secure. People-driven. <span className="text-cyan-400 font-semibold">Join the movement.</span>
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-cyan-400">12,345</div>
                <div className="text-gray-400 text-xs">Active Members</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-blue-400">98</div>
                <div className="text-gray-400 text-xs">Countries</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-purple-400">1.2M</div>
                <div className="text-gray-400 text-xs">Forum Posts</div>
              </div>
            </div>
          </div>
          {/* Parallax/Glassmorphic Card */}
          <div className="relative flex flex-col items-center">
            <div className="w-full max-w-md bg-black/60 backdrop-blur-xl rounded-3xl p-6 border border-white/10 shadow-2xl">
              <div className="text-xl font-bold text-white mb-2">Welcome!</div>
              <div className="text-gray-300">Connect, build, and grow with pioneers in the XORION ecosystem.</div>
            </div>
          </div>
        </div>
      </section>
      {/* Socials Bento Grid */}
      <section className="relative py-10 px-2 md:px-6">
        <h2 className="text-3xl md:text-4xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-8">Connect with Us</h2>
        <motion.div
          className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[150px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12
              }
            }
          }}
        >
          {socialLinks.map((link, i) => {
            // Glassmorphic + brand color overlay
            let glassBg = "bg-black/40";
            let border = "border border-white/20";
            let iconBg = "bg-white/10";
            let iconColor = "text-white";
            let bentoSizing = '';
            let glowColor = 'from-cyan-400 to-blue-500';
            if (i === 0) bentoSizing = 'md:col-span-2 md:row-span-2';
            else if (i === 1) bentoSizing = 'md:col-span-2';
            else if (i === 2) bentoSizing = 'md:row-span-2';
            if (link.label === "X") {
              glassBg = "bg-neutral-900/70";
              iconBg = "bg-neutral-800/80";
              iconColor = "text-white";
              glowColor = 'from-neutral-400 to-neutral-900';
            } else if (link.label === "Discord") {
              glassBg = "bg-blue-900/40";
              iconBg = "bg-[#5865F2]/20";
              iconColor = "text-[#5865F2]";
              glowColor = 'from-[#5865F2] to-blue-400';
            } else if (link.label === "Telegram") {
              glassBg = "bg-cyan-900/40";
              iconBg = "bg-[#229ED9]/20";
              iconColor = "text-[#229ED9]";
              glowColor = 'from-[#229ED9] to-cyan-400';
            } else if (link.label === "GitHub") {
              glassBg = "bg-gray-900/60";
              iconBg = "bg-white/10";
              iconColor = "text-white";
              glowColor = 'from-gray-400 to-gray-900';
            } else if (link.label === "Linktree") {
              glassBg = "bg-green-900/40";
              iconBg = "bg-[#39E09B]/20";
              iconColor = "text-[#39E09B]";
              glowColor = 'from-[#39E09B] to-green-400';
            } else if (link.label === "Medium") {
              glassBg = "bg-green-900/40";
              iconBg = "bg-[#02B875]/20";
              iconColor = "text-[#02B875]";
              glowColor = 'from-[#02B875] to-green-400';
            }
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.description || link.label}
                className={`group flex flex-col justify-between rounded-3xl p-4 shadow-lg transition-all duration-200 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-cyan-400 min-h-[120px] text-white relative overflow-hidden ${glassBg} ${border} backdrop-blur-xl ${bentoSizing}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.18, type: 'tween' }}
                viewport={{ once: true, amount: 0.2 }}
              >
                {/* Glassmorphism overlay (extra shine) */}
                <div className="absolute inset-0 bg-white/10 rounded-3xl pointer-events-none z-0" />
                {/* Animated lighting/glow effect behind icon */}
                <div className={`absolute left-4 top-4 w-12 h-12 rounded-full blur-xl opacity-30 z-0 transition-opacity duration-200 bg-gradient-to-br ${glowColor}`}></div>
                <div className="flex items-center gap-3 mb-2 relative z-10">
                  <span className={`text-2xl ${iconColor} group-hover:scale-105 transition-transform ${iconBg} rounded-2xl p-1.5`}>
                    {React.createElement(link.icon)}
                  </span>
                  <span className="font-semibold text-base">{link.label}</span>
                </div>
                <div className="text-xs text-gray-300 z-10 relative">{link.description}</div>
              </motion.a>
            );
          })}
        </motion.div>
      </section>
      {/* Forum Highlights */}
      <section className="relative py-16 px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-12">Forum Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {forumPosts.map((post) => (
            <div
              key={post.title}
              className="bg-black/50 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              <div className="text-lg font-bold text-white mb-2">{post.title}</div>
              <div className="text-gray-400 mb-1">By {post.author}</div>
              <div className="text-purple-400 font-semibold">{post.replies} replies</div>
            </div>
          ))}
        </div>
      </section>
      {/* Events Timeline */}
      <section className="relative py-10 px-2 md:px-6">
        <h2 className="text-3xl md:text-4xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-8">Upcoming Events</h2>
        <div className="max-w-2xl mx-auto flex flex-col gap-6">
          {events.map((event) => (
            <div key={event.date} className="flex items-center gap-4 bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/20">
              <div className="flex flex-col items-center justify-center min-w-[70px]">
                
              </div>
              <div>
                <div className="text-base font-semibold text-white">{event.title}</div>
                <div className="text-xs text-gray-300">{event.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <FooterContent />
    </div>
  );
};

export default Community; 