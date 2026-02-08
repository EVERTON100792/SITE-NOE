
import React from 'react';
import { Calendar, FileText, TrendingUp, HelpCircle, Flame, Clock, ShieldCheck } from 'lucide-react';

const IRPFHighlight: React.FC = () => {
  const whatsappUrl = "https://wa.me/5543991320453?text=Olá Noerlis, gostaria de garantir minha vaga para a declaração do IRPF 2025.";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <style>
        {`
          @keyframes pulse-amber {
            0% { box-shadow: 0 0 0 0 rgba(245, 158, 11, 0.7); }
            70% { box-shadow: 0 0 0 15px rgba(245, 158, 11, 0); }
            100% { box-shadow: 0 0 0 0 rgba(245, 158, 11, 0); }
          }
          
          @keyframes shimmer {
            0% { transform: translateX(-150%) skewX(-20deg); }
            100% { transform: translateX(150%) skewX(-20deg); }
          }

          .animate-pulse-cta {
            animation: pulse-amber 2.5s infinite;
          }

          .cta-shimmer {
            position: relative;
            overflow: hidden;
          }

          .cta-shimmer::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 50%;
            height: 100%;
            background: linear-gradient(
              to right,
              rgba(255, 255, 255, 0) 0%,
              rgba(255, 255, 255, 0.3) 50%,
              rgba(255, 255, 255, 0) 100%
            );
            animation: shimmer 2s infinite linear;
          }
        `}
      </style>

      <div className="relative bg-slate-950 rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-16 overflow-hidden shadow-2xl border border-slate-900">
        <div className="absolute top-0 right-0 p-8 text-white/5 pointer-events-none hidden lg:block">
          <FileText size={400} />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
          <div className="flex-1 text-center lg:text-left w-full">
            <div className="inline-flex items-center gap-2 bg-amber-500 text-white px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-6 shadow-lg">
              <Flame size={14} className="animate-bounce" />
              Sazonal: IRPF 2025
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-[1.2]">
              Sua declaração <br className="hidden sm:block" />
              <span className="text-yellow-600 italic font-serif">sem preocupações.</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed opacity-90">
              Evite a malha fina e otimize sua restituição. Analisamos cada detalhe para que você tenha tranquilidade total perante o fisco.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-left">
              <div className="bg-slate-900/40 backdrop-blur-md p-4 rounded-lg border border-slate-800 flex items-center gap-3 text-white">
                <TrendingUp className="text-yellow-600 shrink-0" size={20} />
                <span className="font-semibold text-xs sm:text-sm">Restituição no 1º Lote</span>
              </div>
              <div className="bg-slate-900/40 backdrop-blur-md p-4 rounded-lg border border-slate-800 flex items-center gap-3 text-white">
                <ShieldCheck className="text-yellow-600 shrink-0" size={20} />
                <span className="font-semibold text-xs sm:text-sm">Checkup de Malha Fina</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-shimmer animate-pulse-cta bg-amber-500 text-white w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 rounded-full font-bold text-lg sm:text-xl hover:bg-amber-600 transition-all shadow-2xl flex items-center justify-center gap-3 group"
              >
                Garantir minha vaga
                <Clock size={20} className="group-hover:rotate-12 transition-transform" />
              </a>

              <div className="flex items-center gap-2 text-emerald-200 text-xs sm:text-sm font-medium">
                <div className="w-2 h-2 bg-amber-400 rounded-full animate-ping"></div>
                Vagas limitadas por período
              </div>
            </div>
          </div>

          {/* Card Processo */}
          <div className="w-full lg:w-1/3 bg-white p-6 sm:p-8 rounded-lg sm:rounded-xl shadow-2xl border border-slate-100">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mb-6 flex items-center gap-2">
              <Calendar className="text-blue-900" /> Fluxo IRPF
            </h3>

            <div className="space-y-5">
              {[
                { n: 1, t: 'Coleta Digital', d: 'Envio rápido e seguro de documentos.' },
                { n: 2, t: 'Análise Detalhada', d: 'Cruzamento de dados para dedução legal.' },
                { n: 3, t: 'Protocolo Imediato', d: 'Envio prioritário ao fisco.' }
              ].map((step) => (
                <div key={step.n} className="flex items-start gap-4 p-2 rounded-lg hover:bg-slate-50 transition-colors">
                  <div className="w-7 h-7 rounded-md bg-slate-900 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-md">{step.n}</div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">{step.t}</h4>
                    <p className="text-slate-500 text-[11px] sm:text-[12px] leading-tight">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-blue-900 font-bold flex items-center justify-center gap-2 text-sm hover:text-blue-700 transition-colors"
              >
                Falar com a Contadora <HelpCircle size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IRPFHighlight;
