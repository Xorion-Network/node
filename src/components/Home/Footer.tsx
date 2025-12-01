import { FaGithub, FaDiscord, FaTelegram, FaMedium, FaLinkedin } from 'react-icons/fa';
import { SiX } from 'react-icons/si';
import { Link } from 'react-router-dom';

export default function FooterContent() {
  return (
    <div className="bg-black font-geist text-white py-10 px-12 h-full w-full flex flex-col justify-between rounded-t-3xl shadow-2xl">
      <FooterNav />
      <FooterBottom />
    </div>
  );
}

const FooterNav = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-wrap gap-20 mb-8">
      <div className="flex flex-col gap-2 min-w-[120px]">
        <h3 className="mb-2 uppercase text-[#ffffff80] text-xs">Pages</h3>
        <Link to="/" onClick={scrollToTop} className="hover:text-[#00e676] cursor-pointer">Home</Link>
        <Link to="/about" onClick={scrollToTop} className="hover:text-[#00e676] cursor-pointer">About</Link>
        <Link to="/community" onClick={scrollToTop} className="hover:text-[#00e676] cursor-pointer">Community</Link>
        <Link to="/developers" onClick={scrollToTop} className="hover:text-[#00e676] cursor-pointer">Developers</Link>
        <Link to="/ecosystem" onClick={scrollToTop} className="hover:text-[#00e676] cursor-pointer">Ecosystem</Link>
        <Link to="/usecases" onClick={scrollToTop} className="hover:text-[#00e676] cursor-pointer">Usecases</Link>
        <Link to="/blogs" onClick={scrollToTop} className="hover:text-[#00e676] cursor-pointer">Blogs</Link>
      </div>
    <div className="flex flex-col gap-2 min-w-[120px]">
      <h3 className="mb-2 uppercase text-[#ffffff80] text-xs">Education</h3>
      <a href="https://x.com/Xorion_Network" target="_blank" rel="noopener noreferrer" className="hover:text-[#00e676] cursor-pointer">News</a>
      <a href="https://medium.com/@xorion_network" target="_blank" rel="noopener noreferrer" className="hover:text-[#00e676] cursor-pointer">Learn</a>
      <a href="https://www.linkedin.com/company/xorion-network" target="_blank" rel="noopener noreferrer" className="hover:text-[#00e676] cursor-pointer">Publications</a>
    </div>
    <div className="flex flex-col gap-2 min-w-[120px]">
      <h3 className="mb-2 uppercase text-[#ffffff80] text-xs">Community</h3>
      <a href="https://linktr.ee/xorionnetwork" target="_blank" rel="noopener noreferrer" className="hover:text-[#00e676] cursor-pointer">Events</a>
      <a href="https://www.xorion.network/blogs" target="_blank" rel="noopener noreferrer" className="hover:text-[#00e676] cursor-pointer">Blog</a>
    </div>
    <div className="flex flex-col gap-2 min-w-[120px]">
      <h3 className="mb-2 uppercase text-[#ffffff80] text-xs">Connect</h3>
      <div className="flex gap-4 mt-1">
        <a href="https://x.com/Xorion_Network" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="hover:text-[#00e676] transition-colors"><SiX size={20} /></a>
        <a href="https://github.com/Xorion-Network" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-[#00e676] transition-colors"><FaGithub size={20} /></a>
        <a href="https://discord.gg/TWxeqcbwu7" target="_blank" rel="noopener noreferrer" aria-label="Discord" className="hover:text-[#00e676] transition-colors"><FaDiscord size={20} /></a>
        <a href="https://t.me/xorion_network" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="hover:text-[#00e676] transition-colors"><FaTelegram size={20} /></a>
        <a href="https://medium.com/@xorion_network" target="_blank" rel="noopener noreferrer" aria-label="Medium" className="hover:text-[#00e676] transition-colors"><FaMedium size={20} /></a>
        <a href="https://www.linkedin.com/company/xorion-network" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[#00e676] transition-colors"><FaLinkedin size={20} /></a>
      </div>
    </div>
  </div>
  );
};

const FooterBottom = () => (
  <div className="flex justify-between items-end">
    <h1 className="text-[10vw] md:text-[7vw] font-extrabold leading-[0.8] mt-10 text-white drop-shadow-lg">
      XORION
    </h1>
    <p className="text-white/70 text-sm">© {new Date().getFullYear()} XORION</p>
  </div>
);