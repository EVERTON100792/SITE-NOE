
import React from 'react';
import { Calculator, Users, ShieldCheck, Landmark, CheckCircle2 } from 'lucide-react';

const ServicesOverview: React.FC = () => {
  const essentialServices = [
    "Contabilidade, demonstração e pareceres",
    "Gestão de folha de pagamento",
    "Processamento fiscal e Legislação",
    "BPO Financeiro e Societário"
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl shadow-slate-200 overflow-hidden border border-slate-100">
        <div className="flex flex-col lg:flex-row">
          {/* Lado Texto */}
          <div className="lg:w-1/2 p-6 sm:p-10 lg:p-12 bg-white">
            <div className="flex items-center gap-4 mb-8 sm:mb-10">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-50 rounded-lg flex items-center justify-center text-blue-900">
                <Landmark size={28} className="sm:w-8 sm:h-8" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">O essencial da sua <br /><span className="text-blue-900">Gestão Contábil</span></h2>
            </div>

            <ul className="space-y-4 sm:space-y-6">
              {essentialServices.map((service, idx) => (
                <li key={idx} className="flex items-start gap-4 group cursor-default">
                  <div className="mt-2 w-2 h-2 rounded-full bg-blue-200 group-hover:bg-blue-600 transition-all group-hover:scale-150 shrink-0"></div>
                  <span className="text-lg sm:text-xl text-slate-600 font-medium group-hover:text-slate-900 transition-colors">
                    {service}
                  </span>
                </li>
              ))}
            </ul>

            <button className="mt-10 sm:mt-12 text-slate-900 font-bold flex items-center gap-2 hover:gap-4 transition-all group">
              Consultar todos os serviços <CheckCircle2 size={20} className="text-blue-600 group-hover:scale-125 transition-transform" />
            </button>
          </div>

          {/* Lado Dark Grid */}
          {/* Lado Gradient/Light Grid */}
          <div className="lg:w-1/2 bg-slate-50 p-6 sm:p-10 lg:p-12 text-slate-900 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none hidden sm:block">
              <Calculator size={160} className="text-blue-900" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold mb-8 relative z-10 border-l-4 border-blue-600 pl-4">Excelência ND Contabilidade</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 relative z-10">
              <div className="space-y-2 sm:space-y-3 group">
                <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                  <Calculator className="text-blue-600 group-hover:text-white transition-colors" size={20} />
                </div>
                <h4 className="font-bold text-base sm:text-lg">Tecnologia</h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Integração e automação para processos ágeis e sem erros.</p>
              </div>
              <div className="space-y-2 sm:space-y-3 group">
                <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                  <ShieldCheck className="text-blue-600 group-hover:text-white transition-colors" size={20} />
                </div>
                <h4 className="font-bold text-base sm:text-lg">Compliance</h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Segurança total com as obrigações fiscais e jurídicas.</p>
              </div>
              <div className="space-y-2 sm:space-y-3 group">
                <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                  <Users className="text-blue-600 group-hover:text-white transition-colors" size={20} />
                </div>
                <h4 className="font-bold text-base sm:text-lg">Consultoria</h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Atendimento humano, focado na realidade do seu negócio.</p>
              </div>
              <div className="space-y-2 sm:space-y-3 group">
                <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                  <Landmark className="text-blue-600 group-hover:text-white transition-colors" size={20} />
                </div>
                <h4 className="font-bold text-base sm:text-lg">Planejamento</h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Estratégias para elisão fiscal e maior lucratividade.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesOverview;
