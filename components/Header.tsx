
import React, { useState } from 'react';
import { Menu, X, ChevronDown, Send } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const closeTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const whatsappProposta = "https://wa.me/5543991320453?text=Olá Noerlis, gostaria de solicitar um contato para falar sobre minha empresa.";

  React.useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
      setScrolled(totalScroll > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  const navItems = [
    { label: 'Sobre Mim', href: '#sobre' },
    {
      label: 'Serviços',
      href: '#servicos',
      children: [
        { label: 'Contabilidade em Geral', href: '#contabilidade' },
        { label: 'BPO Financeiro', href: '#bpo' },
        { label: 'Imposto de Renda', href: '#irpf' },
        { label: 'Terceirização Adm', href: '#terceirizacao' }
      ]
    },
    { label: 'Diferenciais', href: '#diferenciais' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-slate-200'
        : 'bg-transparent border-transparent'
        }`}
    >
      {/* Scroll Progress Indicator */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-slate-900 to-blue-800 transition-all duration-100 ease-out z-50"
        style={{ width: `${scrollProgress * 100}%`, opacity: scrolled ? 1 : 0 }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${scrolled ? 'h-20' : 'h-24'}`}>
          {/* Logo ND CONTABILIDADE */}
          <div className="flex items-center gap-3 filter drop-shadow-sm hover:drop-shadow-md transition-all cursor-pointer group">
            <div className="flex flex-col items-center transform group-hover:scale-105 transition-transform">
              <div className="relative flex items-center justify-center h-12 w-20">
                <span className="text-5xl font-serif font-bold text-slate-900 absolute -translate-x-4 group-hover:-translate-x-5 transition-transform">N</span>
                <span className="text-5xl font-serif font-bold text-slate-900 absolute translate-x-4 translate-y-0.5 group-hover:translate-x-5 transition-transform">D</span>
              </div>
              <span className="text-[8px] tracking-[0.2em] font-black text-slate-700 mt-2 border-t border-slate-900 pt-0.5 leading-none uppercase">Contabilidade</span>
            </div>
            <div className="h-10 w-px bg-slate-200 mx-2"></div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-900 text-sm sm:text-base leading-tight">NOERLIS GARCIA</span>
              <span className="text-slate-500 font-medium text-[8px] sm:text-[10px] tracking-widest uppercase">CONTADORA</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center bg-white/50 backdrop-blur-sm px-6 py-2 rounded-full border border-white/20 shadow-sm hover:shadow-md transition-all">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href={item.href}
                  className="text-slate-600 hover:text-blue-900 font-medium flex items-center gap-1 transition-colors relative py-2"
                >
                  {item.label}
                  {item.children && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
                </a>

                {item.children && activeDropdown === item.label && (
                  <div
                    className="absolute top-full -left-4 w-64 bg-white shadow-2xl shadow-slate-900/10 rounded-2xl border border-slate-100 py-3 mt-4 transition-all opacity-100 animate-in fade-in slide-in-from-top-4 z-50 overflow-hidden"
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-600 to-blue-900"></div>
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block px-6 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-900 hover:pl-8 transition-all duration-300"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA & Profile */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="tel:4337723887" className="text-slate-700 hover:text-slate-900 font-bold text-sm transition-colors flex items-center gap-2 group">
              <span className="flex items-center justify-center w-5 h-5 bg-green-100 rounded-full group-hover:bg-green-200 transition-colors">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              </span>
              (43) 3772-3887
            </a>
            <a
              href={whatsappProposta}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 text-amber-500 px-7 py-3 rounded-md font-bold hover:shadow-lg hover:shadow-amber-500/10 transition-all hover:-translate-y-0.5 flex items-center gap-2 group overflow-hidden relative border border-amber-500/30"
            >
              <div className="absolute inset-0 bg-blue-900/40 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <span className="relative z-10 flex items-center gap-2">
                <span className="bg-amber-500/10 text-amber-500 px-2 py-0.5 rounded text-[10px] tracking-wider uppercase border border-amber-500/20">IRPF 2026</span>
                Declare seu IR Agora
              </span>
              <Send size={16} className="text-amber-500 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center z-50">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-12 h-12 flex flex-col items-center justify-center gap-[6px] focus:outline-none p-2 rounded-full hover:bg-slate-100/80 transition-colors group"
              aria-label="Menu"
            >
              <span className={`block h-[2px] bg-slate-800 rounded-full transition-all duration-300 ease-out origin-center ${isMenuOpen ? 'w-6 rotate-45 translate-y-[8px]' : 'w-6'}`}></span>
              <span className={`block h-[2px] bg-slate-800 rounded-full transition-all duration-300 ease-out origin-center ${isMenuOpen ? 'w-0 opacity-0' : 'w-6'}`}></span>
              <span className={`block h-[2px] bg-slate-800 rounded-full transition-all duration-300 ease-out origin-center ${isMenuOpen ? 'w-6 -rotate-45 -translate-y-[8px]' : 'w-4 group-hover:w-6'}`}></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-emerald-50 h-screen overflow-y-auto animate-in slide-in-from-right duration-300">
          <div className="px-6 pt-6 pb-20 space-y-2">
            {navItems.map((item) => (
              <div key={item.label}>
                <a
                  href={item.href}
                  className="block px-4 py-4 text-lg font-bold text-emerald-950 border-b border-emerald-50 hover:bg-emerald-50/50 hover:pl-6 transition-all rounded-xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </div>
            ))}
            <div className="pt-8 px-2 space-y-4">
              <a
                href={whatsappProposta}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-slate-900 text-amber-500 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-slate-900/10 flex flex-col items-center justify-center gap-1 active:scale-95 transition-transform border border-amber-500/30 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-blue-900/40 translate-y-full hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                <span className="flex items-center gap-2 relative z-10">
                  <span className="bg-amber-500/10 text-amber-500 px-2 py-0.5 rounded text-[10px] tracking-wider uppercase border border-amber-500/20 hidden sm:inline-block">IRPF 2026</span>
                  Declare seu IR Agora <Send size={18} className="text-amber-500" />
                </span>
                <span className="text-[10px] tracking-wider uppercase font-medium text-amber-500/80 relative z-10 sm:hidden">Imposto de Renda 2026</span>
              </a>
              <a href="tel:4337723887" className="flex items-center justify-center gap-2 text-center font-bold text-slate-800 py-3 hover:text-blue-800 transition-colors">
                <span className="flex items-center justify-center w-5 h-5 bg-green-100 rounded-full">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                </span>
                (43) 3772-3887
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
