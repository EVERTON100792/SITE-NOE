
import React from 'react';
import { Users, MessageSquare, PhoneCall, CalendarCheck, CheckCircle2 } from 'lucide-react';

const Differentials: React.FC = () => {
  const items = [
    {
      icon: <Users size={24} className="text-blue-600" />,
      title: "Equipe especializada no seu negócio",
      desc: "Conhecemos os desafios do seu setor para oferecer soluções sob medida."
    },
    {
      icon: <MessageSquare size={24} className="text-blue-600" />,
      title: "WhatsApp para agilidade no atendimento",
      desc: "Respostas rápidas e comunicação fluida, sem burocracias desnecessárias."
    },
    {
      icon: <PhoneCall size={24} className="text-blue-600" />,
      title: "Telefone para falar com nossos especialistas",
      desc: "Atendimento direto e humano sempre que precisar."
    },
    {
      icon: <CalendarCheck size={24} className="text-blue-600" />,
      title: "Reuniões agendadas no seu estabelecimento",
      desc: "Valorizamos a proximidade. Conversaremos pessoalmente onde seu negócio acontece."
    }
  ];

  return (
    <div id="diferenciais" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
      <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl relative border border-slate-100">
        <div className="flex flex-col lg:flex-row items-stretch">

          {/* Lado Esquerdo - Título */}
          <div className="lg:w-[40%] p-8 sm:p-12 lg:p-20 flex flex-col justify-center items-center lg:items-start text-center lg:text-left bg-gradient-to-br from-blue-700 to-blue-900">
            <div className="w-20 h-20 sm:w-28 sm:h-28 bg-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-8 sm:mb-10 shadow-inner border border-blue-500">
              <div className="relative">
                <Users size={36} className="text-white/90 sm:w-12 sm:h-12" />
                <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 border-2 border-blue-700">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full"></div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 sm:mb-6">
              Atendimento<br />
              <span className="text-blue-300">Diferenciado</span>
            </h2>
            <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-white rounded-full"></div>
          </div>

          {/* Lado Direito - Lista */}
          <div className="lg:w-[60%] p-6 sm:p-12 lg:p-20 space-y-8 sm:space-y-10 bg-white">
            {items.map((item, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-blue-50 rounded-lg sm:rounded-xl flex items-center justify-center border border-blue-100 group-hover:bg-blue-600 transition-all shadow-lg">
                  <div className="text-blue-600 group-hover:text-white transition-colors">{item.icon}</div>
                </div>
                <div className="pt-0 sm:pt-1">
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                    <CheckCircle2 size={16} className="text-blue-500 shrink-0 hidden sm:block" />
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base max-w-lg">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Differentials;

