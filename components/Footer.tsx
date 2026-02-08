
import React from 'react';

const Footer: React.FC = () => {
  const whatsappProposta = "https://wa.me/5543991320453?text=Olá Noerlis, gostaria de solicitar um contato para falar sobre minha empresa.";

  return (
    <footer className="bg-slate-950 text-white pt-16 sm:pt-20 pb-8 sm:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-16 text-center sm:text-left">
          <div className="flex flex-col items-center sm:items-start space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex flex-col items-center">
                <div className="relative flex items-center justify-center h-10 w-12">
                  <span className="text-4xl font-serif font-bold text-white absolute -translate-x-1.5">N</span>
                  <span className="text-4xl font-serif font-bold text-white absolute translate-x-1.5 translate-y-0.5">D</span>
                </div>
                <span className="text-[7px] tracking-[0.15em] font-black text-white mt-1 border-t border-white pt-0.5 leading-none uppercase">Contabilidade</span>
              </div>
              <div className="h-10 w-px bg-slate-800 mx-2 hidden sm:block"></div>
              <div className="flex flex-col text-left">
                <span className="font-bold text-white text-sm leading-tight uppercase tracking-widest">NOERLIS GARCIA</span>
                <span className="text-blue-500 font-bold text-[8px] tracking-[0.3em] uppercase">CONTADORA</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Soluções contábeis de alto impacto, unindo a precisão dos dados com um atendimento humano para seu sucesso.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-blue-500">Serviços</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#servicos" className="hover:text-blue-400 transition-colors">Contabilidade Especializada</a></li>
              <li><a href="#servicos" className="hover:text-blue-400 transition-colors">BPO Financeiro Digital</a></li>
              <li><a href="#irpf" className="hover:text-blue-400 transition-colors">Declaração de IRPF 2025</a></li>
              <li><a href="#servicos" className="hover:text-blue-400 transition-colors">Terceirização Adm</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-blue-500">Links Úteis</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#home" className="hover:text-blue-400 transition-colors">Início</a></li>
              <li><a href="#diferenciais" className="hover:text-blue-400 transition-colors">Diferenciais</a></li>
              <li><a href="#sobre" className="hover:text-blue-400 transition-colors">Sobre a Noerlis</a></li>
              <li><a href={whatsappProposta} className="hover:text-blue-400 font-bold transition-colors">Solicitar Contato</a></li>
            </ul>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <h4 className="font-bold text-lg mb-6 text-blue-500">Contato Direto</h4>
            <ul className="space-y-5 text-slate-400">
              <li className="flex flex-col">
                <span className="text-blue-400 font-bold text-[9px] uppercase tracking-widest mb-1">WhatsApp Business</span>
                <a href="tel:43991320453" className="hover:text-white transition-colors text-lg font-bold">(43) 99132-0453</a>
              </li>
              <li className="flex flex-col">
                <span className="text-blue-400 font-bold text-[9px] uppercase tracking-widest mb-1">E-mail Profissional</span>
                <a href="mailto:noerlis.cont@gmail.com" className="hover:text-white transition-colors text-sm break-all">noerlis.cont@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-center">
          <p className="text-slate-600 text-[9px] sm:text-[10px] tracking-[0.2em] uppercase font-bold">
            © 2025 Noerlis Garcia - Contabilidade e BPO.
          </p>
          <div className="flex gap-6 sm:gap-8 text-slate-600 text-[9px] sm:text-[10px] tracking-widest uppercase font-bold">
            <a href="#" className="hover:text-blue-500 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
