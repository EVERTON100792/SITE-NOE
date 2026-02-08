
import React, { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const PracticalSupport: React.FC = () => {
  const [activeTab, setActiveTab] = useState('abrir');

  const content = {
    abrir: {
      title: 'Apoio estratégico na abertura do seu CNPJ.',
      steps: [
        {
          num: 1,
          title: 'Consultoria de Viabilidade',
          desc: 'Analisamos o melhor CNAE e regime tributário para que você já comece economizando impostos.'
        },
        {
          num: 2,
          title: 'Processo Burocrático',
          desc: 'Cuidamos de toda a documentação perante os órgãos, mantendo você informado.'
        },
        {
          num: 3,
          title: 'Empresa Ativa',
          desc: 'Entregamos seu CNPJ pronto para faturar, com todas as orientações iniciais.'
        }
      ]
    },
    mei: {
      title: 'Cresceu? Desenquadrar o MEI é o caminho.',
      steps: [
        {
          num: 1,
          title: 'Diagnóstico Fiscal',
          desc: 'Verificamos se o limite de faturamento foi atingido e o melhor momento para migrar.'
        },
        {
          num: 2,
          title: 'Migração Segura',
          desc: 'Alteramos seu regime no Simples Nacional e atualizamos prefeitura e junta.'
        },
        {
          num: 3,
          title: 'Gestão Completa',
          desc: 'Como ME, sua empresa ganha fôlego e nós cuidamos da nova complexidade.'
        }
      ]
    },
    mudar: {
      title: 'Transição ética e transparente.',
      steps: [
        {
          num: 1,
          title: 'Auditoria de Entrada',
          desc: 'Revisamos o histórico para garantir que você não herde problemas fiscais.'
        },
        {
          num: 2,
          title: 'Transferência de Dados',
          desc: 'Gerenciamos a migração de toda a base de dados do seu antigo escritório.'
        },
        {
          num: 3,
          title: 'Onboarding Especializado',
          desc: 'Apresentamos nosso método e como terá visibilidade total do seu financeiro.'
        }
      ]
    }
  };

  const current = content[activeTab as keyof typeof content];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10 sm:mb-16">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
          Qual é o seu momento atual?
        </h2>
        <p className="text-lg sm:text-xl text-slate-500 font-medium">
          Escolha uma opção e veja como simplificamos sua jornada.
        </p>
      </div>

      <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-10 lg:p-12 shadow-2xl border border-slate-100">
        <div className="flex border-b border-slate-100 mb-10 overflow-x-auto no-scrollbar">
          {['abrir', 'mei', 'mudar'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 sm:flex-none px-6 sm:px-8 py-4 font-bold text-sm sm:text-lg transition-all whitespace-nowrap capitalize ${activeTab === tab ? 'text-slate-900 border-b-4 border-blue-600' : 'text-slate-400 hover:text-blue-900'}`}
            >
              {tab === 'abrir' ? 'Abrir Empresa' : tab === 'mei' ? 'Sair do MEI' : 'Trocar Contador'}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-10 sm:space-y-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight border-l-4 border-blue-600 pl-5 sm:pl-6">
              {current.title}
            </h3>
            <div className="space-y-8 sm:space-y-10">
              {current.steps.map((step) => (
                <div key={step.num} className="flex gap-4 sm:gap-6 group">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-slate-900 text-white rounded-lg sm:rounded-xl flex items-center justify-center font-bold text-lg sm:text-xl shadow-lg group-hover:bg-blue-600 transition-colors">
                    {step.num}
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-slate-800 mb-1">{step.title}</h4>
                    <p className="text-slate-500 leading-relaxed text-xs sm:text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-slate-200 lg:sticky lg:top-28">
            <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-6">Pronto para começar?</h4>
            <div className="space-y-4 mb-8">
              {[
                'Suporte direto com a contadora Noerlis',
                'Planejamento tributário preventivo',
                'Relatórios financeiros claros'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-700 font-medium text-xs sm:text-sm">
                  <CheckCircle className="text-blue-600 shrink-0" size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <button className="w-full bg-blue-900 text-white py-4 sm:py-5 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg hover:bg-blue-800 transition-all shadow-xl shadow-blue-900/20 flex items-center justify-center gap-2 group">
              Iniciar Consultoria
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticalSupport;
