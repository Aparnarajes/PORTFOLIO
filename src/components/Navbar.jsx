import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Brain } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Milestones', href: '#achievements' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Floating Pill Navbar */}
      <motion.nav 
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed top-6 left-1/2 z-50 px-6 py-3.5 glass-card-dark border border-white/5 transition-all duration-300 hidden md:block ${
          scrolled ? 'shadow-[0_15px_40px_rgba(0,0,0,0.7)] backdrop-blur-3xl' : 'shadow-lg'
        }`}
      >
        <ul className="flex items-center space-x-7">
          <li className="flex items-center mr-4 text-accent-cyan font-bold tracking-wide gap-1 text-sm uppercase">
            <Brain size={18} className="animate-pulse" />
            <span>AR</span>
          </li>
          {navItems.map((item) => (
            <li key={item.name} className="relative group">
              <a 
                href={item.href} 
                className="text-white/50 hover:text-white transition-all duration-300 font-medium text-xs tracking-widest uppercase"
              >
                {item.name}
                <span className="absolute -bottom-1.5 left-0 w-0 h-[1.5px] bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-purple group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>

      {/* Mobile Navbar Header */}
      <div className="fixed top-0 inset-x-0 h-20 px-6 z-50 flex items-center justify-between md:hidden backdrop-blur-md bg-black-pure/40 border-b border-white/5">
        <div className="flex items-center text-accent-cyan font-bold tracking-wide gap-2 text-sm uppercase">
          <Brain size={20} className="text-accent-blue" />
          <span>Aparna Rajesh</span>
        </div>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white focus:outline-none"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-20 z-40 bg-black-pure/95 border-b border-white/10 px-8 py-10 md:hidden flex flex-col space-y-6"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white font-semibold text-lg tracking-widest uppercase border-b border-white/5 pb-2 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
