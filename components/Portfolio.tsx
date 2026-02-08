
import React from 'react';
import { Award, Briefcase, GraduationCap, Phone, Mail, Instagram, CameraOff } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* Placeholder Imagem */}
        <div className="w-full lg:w-1/2 relative max-w-md lg:max-w-none">
          <div className="relative z-10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-[8px] sm:border-[12px] border-slate-50 bg-slate-50 aspect-[4/5] flex flex-col items-center justify-center p-8 sm:p-12 text-center group transition-all hover:bg-slate-100/50">
            <div className="w-16 h-16 sm:w-24 sm:h-24 bg-slate-200 rounded-full flex items-center justify-center mb-6 text-slate-400 group-hover:scale-110 transition-transform">
              <CameraOff size={40} className="sm:w-12 sm:h-12" />
            </div>
            <h4 className="text-slate-900 font-bold text-lg sm:text-xl mb-2">Imagem Profissional</h4>
            <p className="text-slate-400 text-xs sm:text-sm font-medium uppercase tracking-widest">Em Desenvolvimento</p>

            <div className="absolute inset-0 border-2 border-dashed border-slate-200 m-3 sm:m-4 rounded-xl sm:rounded-2xl"></div>
          </div>

          <div className="absolute -bottom-6 right-0 sm:bottom-10 sm:-right-10 z-20 bg-slate-900 text-white p-5 sm:p-8 rounded-xl sm:rounded-2xl shadow-2xl max-w-[240px] sm:max-w-xs border border-slate-800">
            <p className="text-xs sm:text-sm font-light italic mb-4 leading-relaxed opacity-80">"Atendimento humanizado e estratégico. Transformo números em ferramentas de gestão para o seu sucesso."</p>
            <div className="flex items-center gap-3">
              <div className="w-8 sm:w-10 h-1 bg-yellow-600 rounded-full"></div>
              <p className="font-bold text-yellow-600 uppercase tracking-[0.2em] text-[9px] sm:text-[10px]">Noerlis Garcia</p>
            </div>
          </div>
        </div>

        {/* Conteúdo Texto */}
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0 text-center lg:text-left">
          <h2 className="text-[10px] sm:text-xs font-bold tracking-[0.4em] text-blue-900 uppercase mb-4 bg-slate-100 inline-block px-4 py-1.5 rounded-full">Perfil Profissional</h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 lg:mb-8 leading-tight">
            Noerlis DRF Garcia <br className="hidden sm:block" />
            <span className="text-blue-800 font-serif italic font-medium">Sua parceira de negócios.</span>
          </h3>
          <p className="text-base sm:text-lg text-slate-600 mb-8 lg:mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Especialista em contabilidade consultiva e BPO financeiro. Meu foco é dar suporte total ao empreendedor através da **ND Contabilidade**, garantindo que a parte administrativa e fiscal seja um pilar de força.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-10 lg:mb-12">
            {[
              { i: <Briefcase />, t: 'BPO Financeiro', d: 'Fluxo de caixa e gestão profissional.' },
              { i: <Award />, t: 'Especialidade IRPF', d: 'Foco em ganhos de capital.' },
              { i: <GraduationCap />, t: 'CRC Ativo', d: 'Transparência e registro profissional.' },
              { i: <Phone />, t: 'Personalizado', d: 'Fale direto com sua contadora.' }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-slate-600 border border-slate-200 group-hover:bg-blue-900 group-hover:text-white transition-all shadow-sm">
                  {item.i}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">{item.t}</h4>
                  <p className="text-xs sm:text-sm text-slate-500 leading-snug">{item.d}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-700 to-indigo-800 p-6 sm:p-8 rounded-2xl sm:rounded-3xl text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl shadow-blue-900/20">
            <div className="flex flex-col gap-3 w-full sm:w-auto">
              <div className="flex items-center justify-center sm:justify-start gap-3 group">
                <div className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-colors">
                  <Phone size={18} className="text-blue-100 group-hover:text-white" />
                </div>
                <span className="font-bold text-base sm:text-lg">(43) 99132-0453</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-3 group">
                <div className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-colors">
                  <Mail size={18} className="text-blue-100 group-hover:text-white" />
                </div>
                <span className="text-sm opacity-80 break-all">noerlis.cont@gmail.com</span>
              </div>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
              <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all text-white">
                <Instagram size={20} />
              </a>
              <button className="flex-1 sm:flex-none bg-white text-blue-800 px-6 sm:px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-all shadow-lg text-sm sm:text-base whitespace-nowrap">
                Falar com Noerlis
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
