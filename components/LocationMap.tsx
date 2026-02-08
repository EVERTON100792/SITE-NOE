
import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const LocationMap: React.FC = () => {
    return (
        <div className="bg-slate-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full text-blue-900 text-xs font-bold tracking-wider uppercase mb-4">
                        <MapPin size={16} />
                        Localização
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                        Visite Nosso Escritório
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Estamos em Rolândia PR, prontos para atender sua empresa com excelência.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-start">
                    {/* Map */}
                    <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 h-[400px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29384.547890123456!2d-51.3686!3d-23.3097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ec5f3e3e3e3e3e%3A0x3e3e3e3e3e3e3e3e!2sRol%C3%A2ndia%2C%20PR!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Localização Noerlis Garcia Contabilidade - Rolândia PR"
                        ></iframe>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-6">Informações de Contato</h3>

                            <div className="space-y-5">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                                        <MapPin size={20} className="text-blue-900" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-900 mb-1">Endereço</p>
                                        <p className="text-slate-600">
                                            Rolândia - PR<br />
                                            <span className="text-sm text-slate-500">(Endereço completo será atualizado em breve)</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center shrink-0">
                                        <Phone size={20} className="text-green-600" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-900 mb-1">Telefone</p>
                                        <a href="tel:43991320453" className="text-slate-600 hover:text-blue-900 transition-colors">
                                            (43) 99132-0453
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center shrink-0">
                                        <Mail size={20} className="text-amber-600" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-900 mb-1">E-mail</p>
                                        <a href="mailto:noerlis.cont@gmail.com" className="text-slate-600 hover:text-blue-900 transition-colors">
                                            noerlis.cont@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center shrink-0">
                                        <Clock size={20} className="text-slate-600" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-900 mb-1">Horário de Atendimento</p>
                                        <p className="text-slate-600">
                                            Segunda a Sexta: 08:00 - 18:00<br />
                                            <span className="text-sm text-slate-500">Sábado e Domingo: Fechado</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <a
                                href="https://www.google.com/maps/dir//Rolândia,PR"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-8 w-full bg-blue-900 text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                            >
                                <MapPin size={20} />
                                Como Chegar
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocationMap;
