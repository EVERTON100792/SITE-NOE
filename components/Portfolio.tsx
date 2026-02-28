
import React from 'react';
import { Award, Briefcase, GraduationCap, Phone, Mail, Instagram, CameraOff } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* Placeholder Imagem (Mais limpo e elegante) */}
        <div className="w-full lg:w-[35%] xl:w-[40%] relative max-w-md lg:max-w-none mx-auto lg:mx-0">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-50 w-full aspect-[4/5] flex flex-col items-center justify-center p-8 text-center group transition-all hover:bg-slate-100/50 object-cover lg:ml-auto">
            <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mb-4 text-slate-400 group-hover:scale-110 transition-transform">
              <CameraOff size={32} />
            </div>
            <h4 className="text-slate-900 font-bold text-base mb-1">Imagem Profissional</h4>
            <p className="text-slate-400 text-[10px] font-medium uppercase tracking-widest">Em Desenvolvimento</p>
          </div>

          {/* O bloco de respiro/testemunho pequeno */}
          <div className="absolute -bottom-4 right-0 sm:-right-6 z-20 bg-slate-900 text-white p-4 rounded-xl shadow-xl max-w-[200px] border border-slate-800 hidden sm:block">
            <p className="text-[10px] font-light italic mb-2 leading-relaxed opacity-80">"Transformo números em ferramentas de gestão para o sucesso."</p>
            <div className="flex items-center gap-2">
              <div className="w-4 h-1 bg-yellow-600 rounded-full"></div>
              <p className="font-bold text-yellow-600 uppercase tracking-[0.2em] text-[8px]">Noerlis Garcia</p>
            </div>
          </div>
        </div>

        {/* Conteúdo Texto */}
        <div className="w-full lg:w-[65%] xl:w-[60%] mt-8 lg:mt-0 text-center lg:text-left">
          <h2 className="text-[10px] font-bold tracking-[0.3em] text-blue-900 uppercase mb-3 bg-slate-100 inline-block px-3 py-1 rounded-full">Perfil Profissional</h2>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
            Noerlis D.R.F. Garcia <br className="hidden sm:block" />
            <span className="text-blue-800 font-serif italic font-medium text-xl sm:text-2xl">Especialista em negócios empresariais.</span>
          </h3>

          <div className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0 space-y-3">
            <p>
              Sou <strong>Noerlis D.R.F. Garcia</strong>, Contadora com mais de 20 anos de experiência, atuando em escritórios e grupos empresariais. Atuo com empresas no Lucro Real, Presumido e Simples Nacional, oferecendo suporte estratégico e consultoria para tomada de decisões, incluindo a Reforma Tributária. Atualmente, curso Pós-Graduação em Perícia e Auditoria Contábil.
            </p>
            <p className="hidden sm:block">
              Atuo garantindo segurança fiscal, organização financeira e conformidade tributária, buscando eficiência e redução de riscos. Ofereço suporte aos empresários para manterem suas empresas organizadas e financeiramente estruturadas, apoiando nas melhores decisões.
            </p>
            <p>
              Minha atuação vai além da contabilidade tradicional: entrego análise, orientação e planejamento para gerar clareza sobre números, impostos e resultados.
            </p>

            <div className="pt-4 mt-4 border-t border-slate-200">
              <strong className="block text-slate-900 font-bold font-serif text-lg">Noerlis D.R.F. Garcia</strong>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mt-1">
                <span className="text-blue-800 font-bold text-xs uppercase tracking-wider">Contadora</span>
                <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                <span className="text-slate-500 font-medium text-xs">CRC/PR 071626/O-5</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            {[
              { i: <Briefcase size={18} />, t: 'BPO Financeiro', d: 'Fluxo e gestão.' },
              { i: <Award size={18} />, t: 'Especialista IRPF', d: 'Ganhos de capital.' },
              { i: <GraduationCap size={18} />, t: 'CRC Ativo', d: 'Registro profissional.' },
              { i: <Phone size={18} />, t: 'Personalizado', d: 'Fale com a contadora.' }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 group">
                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-slate-50 rounded-lg flex items-center justify-center text-slate-600 border border-slate-200 group-hover:bg-blue-900 group-hover:text-white transition-all shadow-sm">
                  {item.i}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-[11px] sm:text-xs uppercase">{item.t}</h4>
                  <p className="text-[10px] text-slate-500 hidden sm:block">{item.d}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href="https://wa.me/5543991320453"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-slate-900 text-white px-4 py-3 rounded-lg font-bold text-sm hover:bg-amber-500 transition-colors shadow-md active:scale-95 duration-200"
            >
              <Phone size={16} />
              (43) 99132-0453
            </a>

            <a
              href="mailto:noerlis.cont@gmail.com"
              className="flex-[1.5] flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 px-4 py-3 rounded-lg font-medium text-sm hover:bg-slate-50 transition-colors shadow-sm active:scale-95 duration-200"
            >
              <Mail size={16} className="text-blue-600" />
              <span className="truncate">noerlis.cont@gmail.com</span>
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-slate-100 text-slate-600 p-3 rounded-lg hover:bg-blue-100 hover:text-blue-700 transition-colors active:scale-95 duration-200"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
