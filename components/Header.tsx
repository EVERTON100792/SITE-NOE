
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
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Sobre Mim', href: '#sobre' },
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
              <div className="relative flex items-center justify-center h-10 w-12">
                <span className="text-4xl font-serif font-bold text-slate-900 absolute -translate-x-1.5 group-hover:-translate-x-2 transition-transform">N</span>
                <span className="text-4xl font-serif font-bold text-slate-900 absolute translate-x-1.5 translate-y-0.5 group-hover:translate-x-2 transition-transform">D</span>
              </div>
              <span className="text-[7px] tracking-[0.15em] font-black text-slate-700 mt-1 border-t border-slate-900 pt-0.5 leading-none uppercase">Contabilidade</span>
            </div>
            <div className="h-10 w-px bg-slate-200 mx-2 hidden sm:block"></div>
            <div className="flex flex-col opacity-0 sm:opacity-100 transition-opacity">
              <span className="font-bold text-slate-900 text-base leading-tight">NOERLIS GARCIA</span>
              <span className="text-slate-500 font-medium text-[10px] tracking-widest uppercase">CONTADORA</span>
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
            <a href="tel:43991320453" className="text-slate-700 hover:text-blue-900 font-bold text-sm transition-colors flex items-center gap-2 group">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              (43) 99132-0453
            </a>
            <a
              href={whatsappProposta}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 text-white px-7 py-3 rounded-md font-medium hover:bg-blue-900 transition-all shadow-lg hover:shadow-blue-900/20 hover:-translate-y-0.5 flex items-center gap-2 group overflow-hidden relative"
            >
              <span className="relative z-10">Solicitar Contato</span>
              <Send size={16} className="text-blue-200 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-slate-900 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-emerald-900 hover:bg-emerald-50 p-2 rounded-full transition-colors"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
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
                className="w-full bg-emerald-950 text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-emerald-900/20 flex items-center justify-center gap-2 active:scale-95 transition-transform"
              >
                Solicitar Contato <Send size={18} className="text-amber-500" />
              </a>
              <a href="tel:43991320453" className="block text-center font-bold text-emerald-900 py-3 hover:text-amber-600 transition-colors">
                Ligar Agora: (43) 99132-0453
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
