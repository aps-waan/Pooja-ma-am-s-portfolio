import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Copy, Check, Sparkles, Clock } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Corporate Training Program',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Quick Connect */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 dark:bg-orange-500/10 border border-orange-300 dark:border-orange-500/25 mb-4">
                <Sparkles className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                <span className="text-xs font-mono font-bold tracking-wide text-orange-700 dark:text-orange-400 uppercase">
                  Let's Connect
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Discuss Your Training or MIS Project
              </h2>
              <p className="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Whether you want to organize an enterprise Excel / Power BI bootcamp, optimize your billing reconciliation, or consult on a strategic reporting overhaul, Pooja is ready to collaborate.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              {/* Email Card */}
              <div className="p-4 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-orange-100 dark:bg-orange-500/15 text-orange-600 dark:text-orange-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block font-semibold">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm font-bold text-slate-900 dark:text-white hover:text-orange-500 transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-orange-500 transition-all text-xs flex items-center gap-1"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4 text-slate-500" />}
                </button>
              </div>

              {/* WhatsApp & Phone Card */}
              <div className="p-4 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-emerald-100 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block font-semibold">
                      Phone & WhatsApp
                    </span>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-sm font-bold text-slate-900 dark:text-white hover:text-orange-500 transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <a
                  href={personalInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-md"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat</span>
                </a>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 flex items-center gap-3.5 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-amber-100 dark:bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block font-semibold">
                    Base Location
                  </span>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    {personalInfo.location}
                  </p>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">
                    Open to online pan-India training & corporate consultations
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Response Promise */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center gap-3">
              <Clock className="w-5 h-5 text-orange-500 shrink-0" />
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                Guaranteed response within <strong className="text-slate-900 dark:text-white">24 business hours</strong> for corporate workshops and enterprise inquiries.
              </p>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 shadow-xl">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/40">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                    Message Prepared!
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    Thank you, <strong className="text-slate-900 dark:text-white">{formData.name}</strong>. Connect directly via email or WhatsApp below for the fastest response:
                  </p>
                  <div className="flex flex-wrap justify-center gap-3 pt-4">
                    <a
                      href={`mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.service + ' - ' + formData.name)}&body=${encodeURIComponent(formData.message + '\n\nPhone: ' + formData.phone)}`}
                      className="theme-btn-gradient px-5 py-2.5 rounded-xl text-white text-xs font-bold flex items-center gap-2 shadow-md"
                    >
                      <Mail className="w-4 h-4" /> Open In Email Client
                    </a>
                    <a
                      href={personalInfo.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-2 shadow-md"
                    >
                      <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                    </a>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-slate-200"
                    >
                      Send Another
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Dr. Rajesh Sharma"
                        className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase">
                        Work Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@university.edu / company.com"
                        className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase">
                        Phone / WhatsApp (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase">
                        Service / Inquiry Area
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all font-medium"
                      >
                        <option value="Corporate Training Program">Corporate Training Program</option>
                        <option value="University Faculty / Workshop">University Guest Faculty / Workshop</option>
                        <option value="Power BI & MIS Consultation">Power BI & MIS Consultation</option>
                        <option value="Billing & Freight Audit">Billing & Freight Audit</option>
                        <option value="Executive Career Discussion">Executive Career Discussion</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase">
                      Requirements & Scope *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share cohort size, target dates, tool stack (Excel, Power BI, DAX), or MIS project details..."
                      className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all font-medium"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full theme-btn-gradient py-4 rounded-2xl text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-md transition-all"
                  >
                    <span>Submit Consultation Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
