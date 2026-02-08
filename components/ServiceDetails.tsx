
import React from 'react';
import { Calculator, PieChart, Landmark, FileCheck } from 'lucide-react';

const ServiceDetails: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-24">

            {/* Contabilidade em Geral */}
            <div id="contabilidade" className="scroll-mt-32">
                <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
                    <div className="p-8 sm:p-12 lg:p-16 flex flex-col md:flex-row gap-10 items-start">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center shrink-0">
                            <Calculator size={40} className="text-blue-900" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">Contabilidade em Geral</h3>
                            <div className="prose prose-slate max-w-none text-slate-600">
                                <p className="text-lg mb-6 leading-relaxed">
                                    Em 2026, a contabilidade vai além do simples cumprimento de obrigações fiscais. Oferecemos uma contabilidade consultiva e digital, preparada para as novas demandas da Reforma Tributária, garantindo que sua empresa esteja 100% segura e otimizada.
                                </p>
                                <ul className="grid sm:grid-cols-2 gap-4">
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 mt-2 bg-blue-600 rounded-full shrink-0"></span>
                                        <span>Análise Tributária Inteligente sob as novas regras de 2026.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 mt-2 bg-blue-600 rounded-full shrink-0"></span>
                                        <span>SPED Fiscal e Contábil com auditoria prévia digital.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 mt-2 bg-blue-600 rounded-full shrink-0"></span>
                                        <span>Balancetes mensais para tomada de decisão ágil.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 mt-2 bg-blue-600 rounded-full shrink-0"></span>
                                        <span>Monitoramento de certidões negativas em tempo real.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* BPO Financeiro */}
            <div id="bpo" className="scroll-mt-32">
                <div className="bg-slate-900 text-white rounded-3xl shadow-2xl overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="p-8 sm:p-12 lg:p-16 flex flex-col md:flex-row gap-10 items-start relative z-10">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center shrink-0">
                            <PieChart size={40} className="text-yellow-500" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">BPO Financeiro Digital</h3>
                            <div className="prose prose-invert max-w-none text-slate-300">
                                <p className="text-lg mb-6 leading-relaxed">
                                    Terceirize o financeiro da sua empresa e foque no core business. Utilizamos tecnologia de ponta para gerir suas contas a pagar e receber, conciliação bancária e fluxo de caixa, com a precisão que o mercado atual exige.
                                </p>
                                <ul className="grid sm:grid-cols-2 gap-4">
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 mt-2 bg-yellow-500 rounded-full shrink-0"></span>
                                        <span>Gestão diária de contas a pagar e receber.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 mt-2 bg-yellow-500 rounded-full shrink-0"></span>
                                        <span>Conciliação bancária automatizada e segura.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 mt-2 bg-yellow-500 rounded-full shrink-0"></span>
                                        <span>Relatórios de fluxo de caixa e DRE gerencial.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 mt-2 bg-yellow-500 rounded-full shrink-0"></span>
                                        <span>Agendamento de pagamentos bancários.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Terceirização ADM */}
            <div id="terceirizacao" className="scroll-mt-32">
                <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
                    <div className="p-8 sm:p-12 lg:p-16 flex flex-col md:flex-row gap-10 items-start">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center shrink-0">
                            <FileCheck size={40} className="text-blue-900" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">Terceirização Administrativa</h3>
                            <div className="prose prose-slate max-w-none text-slate-600">
                                <p className="text-lg mb-6 leading-relaxed">
                                    Reduza custos fixos e aumente a eficiência. Nosso serviço de terceirização administrativa absorve as rotinas burocráticas da sua empresa, garantindo organização documental e emissão correta de notas fiscais.
                                </p>
                                <ul className="grid sm:grid-cols-2 gap-4">
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 mt-2 bg-blue-600 rounded-full shrink-0"></span>
                                        <span>Emissão e gestão de Notas Fiscais (NFS-e, NF-e).</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 mt-2 bg-blue-600 rounded-full shrink-0"></span>
                                        <span>Organização de arquivos digitais e físicos.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 mt-2 bg-blue-600 rounded-full shrink-0"></span>
                                        <span>Gestão de cadastros de clientes e fornecedores.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 mt-2 bg-blue-600 rounded-full shrink-0"></span>
                                        <span>Controle de certidões e alvarás.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServiceDetails;
