
import React, { useEffect, useState } from 'react';
import { Phone, Send, TrendingUp } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import StatsCounter from './StatsCounter';

const Hero: React.FC = () => {
  const whatsappProposta = "https://wa.me/5543991320453?text=Olá Noerlis, gostaria de solicitar um contato para falar sobre minha empresa.";
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const { ref: heroRef, style: heroStyle } = useScrollReveal({ threshold: 0.0, delay: 100 });
  const { ref: imageRef, style: imageStyle } = useScrollReveal({ direction: 'left', delay: 300 });

  return (
    <div className="relative pt-20 overflow-hidden bg-white">
      {/* Dynamic Background */}
      <div
        className="absolute top-0 right-0 -z-10 w-full lg:w-1/2 h-full bg-slate-50 rounded-none transform skew-x-[-12deg] origin-top right-[-10%] transition-transform duration-100 ease-out will-change-transform"
        style={{ transform: `translate(${mousePosition.x * -0.5}px, ${mousePosition.y * -0.5}px)` }}
      ></div>

      {/* Decorative Elements */}
      <div className="absolute top-32 left-10 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-slate-100/30 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-32 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

        {/* Content Section */}
        <div className="flex-1 text-center lg:text-left order-2 lg:order-1" ref={heroRef} style={heroStyle}>
          <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 px-4 py-1.5 rounded-full text-slate-600 text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-8 shadow-sm cursor-default">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            Noerlis DRF Garcia • Contabilidade Consultiva
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8 tracking-tight">
            Gestão Contábil <br className="hidden sm:block" />
            <span className="relative inline-block text-slate-700">
              de Excelência
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-900/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
            Unindo <strong className="font-semibold text-blue-900">tradição</strong> e <strong className="font-semibold text-blue-900">tecnologia</strong> para oferecer um suporte estratégico que impulsiona o crescimento real do seu patrimônio.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start px-4 sm:px-0 mb-12">
            <a
              href={whatsappProposta}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-blue-900 text-white px-8 py-4 sm:px-10 sm:py-5 rounded-md font-medium text-base sm:text-lg flex items-center justify-center gap-3 shadow-xl shadow-blue-900/20 hover:shadow-blue-900/40 transition-all hover:-translate-y-1"
            >
              <span className="relative z-10">Falar com Especialista</span>
              <Send size={20} className="relative z-10 text-white/80 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>

            <a href="tel:43991320453" className="border border-slate-200 text-slate-700 px-8 py-4 sm:px-10 sm:py-5 rounded-md font-medium text-base sm:text-lg hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2">
              <Phone size={20} />
              (43) 99132-0453
            </a>
          </div>

          {/* Stats Row */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 sm:gap-12 border-t border-slate-200 pt-8 mt-8">
            <StatsCounter end={15} suffix="+" label="Anos de Experiência" />
            <div className="hidden sm:block w-px h-10 bg-slate-200"></div>
            <StatsCounter end={500} suffix="+" label="Empresas Atendidas" />
            <div className="hidden sm:block w-px h-10 bg-slate-200"></div>
            <StatsCounter end={100} suffix="%" label="Foco em Resultados" />
          </div>
        </div>

        {/* Visual Section with Parallax */}
        <div className="flex-1 relative order-1 lg:order-2 w-full max-w-lg lg:max-w-none perspective-1000">
          <div
            className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/20 border-4 border-white ring-1 ring-slate-100 bg-slate-50 transition-transform duration-300 ease-out will-change-transform"
            style={{ transform: `rotateY(${mousePosition.x * 0.5}deg) rotateX(${mousePosition.y * -0.5}deg)` }}
            ref={imageRef}
          >
            <img
              src="/accounting-office.png"
              alt="Escritório de Contabilidade Noerlis Garcia em Rolândia PR - Mesa profissional com calculadora, laptop e documentos fiscais"
              className="w-full h-[500px] object-cover scale-105 hover:scale-110 transition-transform duration-700"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-90"></div>

            <div className="absolute bottom-8 left-8 right-8 text-white">
              <div className="inline-block bg-blue-900 text-white text-[10px] font-bold px-3 py-1.5 rounded mb-3 tracking-wider">PREMIUM OFFICE</div>
              <p className="text-sm font-medium text-slate-100/90 leading-relaxed max-w-sm">
                Um espaço pensado para o conforto e privacidade das suas decisões estratégicas.
              </p>
            </div>
          </div>

          {/* Floating Premium Card - Changed from 'Portal do Cliente' to 'Economia Tributária' */}
          <div
            className="absolute -bottom-8 -left-8 z-20 bg-white/95 backdrop-blur-xl p-6 rounded-lg shadow-xl border border-slate-100 max-w-[260px] animate-float hidden sm:block"
            style={{ animation: 'float 6s ease-in-out infinite' }}
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center text-green-600">
                <TrendingUp size={20} />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Foco no Lucro</p>
                <p className="text-sm font-bold text-slate-900">Economia Tributária</p>
              </div>
            </div>
            {/* Fake Chart Line */}
            <div className="h-8 w-full flex items-end justify-between gap-1 mt-2 px-1">
              <div className="w-[10%] bg-blue-100 h-[30%] rounded-t-sm"></div>
              <div className="w-[10%] bg-blue-100 h-[45%] rounded-t-sm"></div>
              <div className="w-[10%] bg-blue-200 h-[40%] rounded-t-sm"></div>
              <div className="w-[10%] bg-blue-300 h-[60%] rounded-t-sm"></div>
              <div className="w-[10%] bg-blue-400 h-[55%] rounded-t-sm"></div>
              <div className="w-[10%] bg-blue-500 h-[75%] rounded-t-sm"></div>
              <div className="w-[10%] bg-blue-600 h-[90%] rounded-t-sm"></div>
            </div>
          </div>

          <style>{`
            @keyframes float {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-10px); }
            }
            @keyframes progress-indeterminate {
              0% { width: 30%; margin-left: -30%; }
              50% { width: 60%; margin-left: 30%; }
              100% { width: 30%; margin-left: 100%; }
            }
            .animate-progress-indeterminate {
              animation: progress-indeterminate 2s infinite linear;
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};

export default Hero;
