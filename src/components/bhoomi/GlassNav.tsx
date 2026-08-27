import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';
import { Menu, X, Sparkles } from 'lucide-react';

const navLinks = [
  { label: 'Problem', href: '#problem' },
  { label: 'Solution', href: '#solution' },
  { label: 'Features', href: '#features' },
  { label: 'Technology', href: '#technology' },
  { label: 'Impact', href: '#impact' },
  { label: 'Achievement', href: '#achievement' },
];

export default function GlassNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' as const }}
      className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[92%] max-w-5xl md:w-auto"
      aria-label="Main navigation"
    >
      <div className="glass-nav flex items-center justify-between md:justify-start gap-1 rounded-full px-4 py-2.5 shadow-2xl backdrop-blur-xl bg-black/40 border border-white/10">
        {/* Logo */}
        <a href="#hero" onClick={(e) => handleScroll(e, '#hero')} className="mr-3 flex items-center gap-2 shrink-0">
          <img
            src="https://isteam.wsimg.com/genai-assistant/logoagent/customer/9cb20ec8-eef8-432a-b965-c2daadfe1408/session/0c0811ef-ba62-4c56-af1f-d2ca7a1f21bd/horizontal-transparent-a13f845a-1dd4-4326-abd6-f594e39169d0/logo-logo.png"
            alt="Bhoomi Bytes"
            className="h-7 w-auto object-contain"
            onError={(e) => {
              // Fallback to SVGs if dynamic image route is unmapped
              e.currentTarget.src = `${import.meta.env.BASE_URL}assets/uploads/airo-logo-shimmer-horizontal.svg`;
            }}
          />
        </a>

        {/* Desktop Divider */}
        <div className="h-4 w-px bg-white/20 mr-2 hidden md:block" />

        {/* Desktop Nav links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="px-3 py-1.5 text-xs font-medium text-white/70 hover:text-white transition-colors duration-200 rounded-full hover:bg-white/10"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Live Demo CTA */}
        <Link
          to="/demo"
          className="ml-2 px-3 py-1.5 text-xs font-semibold rounded-full border border-primary/40 text-primary hover:bg-primary/10 transition-all duration-200 hidden md:flex items-center gap-1.5"
        >
          <span className="live-dot w-1.5 h-1.5 rounded-full bg-primary inline-block" />
          Live Demo
        </Link>

        {/* Desktop Team link */}
        <Link
          to="/team"
          className="ml-1 px-3 py-1.5 text-xs font-semibold rounded-full border border-white/15 text-white/70 hover:text-white hover:border-white/30 transition-all duration-200 hidden md:block"
        >
          Our Team
        </Link>

        {/* Desktop Technology link */}
        <Link
          to="/technology"
          className="ml-1 px-3 py-1.5 text-xs font-semibold rounded-full border border-white/15 text-white/70 hover:text-white hover:border-white/30 transition-all duration-200 hidden md:block"
        >
          Technology
        </Link>

        {/* Desktop Our Story CTA */}
        <a
          href="#achievement"
          onClick={(e) => handleScroll(e, '#achievement')}
          className="ml-1 px-3 py-1.5 text-xs font-semibold rounded-full text-background transition-all duration-200 hover:opacity-90 hidden md:block"
          style={{ background: 'hsl(var(--primary))' }}
        >
          Our Story
        </a>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center justify-center p-1.5 text-white/80 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 8, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden w-full rounded-2xl bg-black/90 backdrop-blur-2xl border border-white/15 p-4 shadow-2xl overflow-hidden flex flex-col gap-3"
          >
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-white/10">
              <Link
                to="/demo"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold rounded-xl bg-primary text-black transition-opacity hover:opacity-90"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Live Demo
              </Link>
              <Link
                to="/technology"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center px-3 py-2 text-xs font-semibold rounded-xl bg-white/10 text-white border border-white/10 hover:bg-white/20 transition-colors"
              >
                Technology
              </Link>
            </div>

            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors flex items-center justify-between"
                >
                  {link.label}
                </a>
              ))}
              <Link
                to="/team"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-emerald-400 hover:bg-white/10 rounded-lg transition-colors flex items-center justify-between"
              >
                Our Team
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-amber-400 hover:bg-white/10 rounded-lg transition-colors flex items-center justify-between"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
