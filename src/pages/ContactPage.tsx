import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Mail, 
  MapPin, 
  Copy, 
  Check, 
  Clock, 
  Send, 
  ExternalLink, 
  ChevronRight, 
  CheckCircle2, 
  Building,
  User
} from 'lucide-react';
import { LinkedInIcon } from '../components/icons/LinkedInIcon';
import { personalInfo } from '../data/portfolioData';

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get('service');
  const programParam = searchParams.get('program');

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    service: serviceParam === 'training' ? 'Corporate Training Workshop' : 'MIS & Power BI Consulting',
    timeline: 'Within 2-4 Weeks',
    message: programParam ? `Hi Pooja, I would like to inquire regarding the "${programParam}" program.` : '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (serviceParam === 'training') {
      setFormData(prev => ({ ...prev, service: 'Corporate Training Workshop' }));
    }
  }, [serviceParam]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in your name, email, and message.');
      return;
    }
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      organization: '',
      service: 'MIS & Power BI Consulting',
      timeline: 'Within 2-4 Weeks',
      message: '',
    });
  };

  const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(`Inquiry: ${formData.service} - ${formData.name}`)}&body=${encodeURIComponent(
    `Name: ${formData.name}\nOrganization: ${formData.organization}\nService Interest: ${formData.service}\nTimeline: ${formData.timeline}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <div className="pt-28 pb-20 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-24 right-1/3 w-[600px] h-[600px] bg-orange-500/10 dark:bg-orange-500/15 rounded-full blur-3xl pointer-events-none -z-10 animate-float-slow" />

      {/* ================= BREADCRUMB & HEADER ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <nav className="flex items-center gap-2 text-xs font-mono font-medium text-slate-500 dark:text-slate-400 mb-6">
          <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-orange-600 dark:text-orange-400 font-bold">Contact & Bookings</span>
        </nav>

        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Let's Collaborate on Your Training or MIS Strategy
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Whether organizing a corporate bootcamp, university analytics accelerator, executive Power BI dashboard rollout, or freight audit reconciliation, I am ready to partner with you.
          </p>
        </div>
      </div>

      {/* ================= MAIN CONTENT: FORM + DIRECT CONTACT ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Interactive Inquiry Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 shadow-xl relative">
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-3xl bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                    Inquiry Received!
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Your details have been formatted. To ensure instant delivery to my inbox, click below to open your preferred email client or copy the message.
                  </p>

                  <div className="pt-4 flex flex-wrap justify-center gap-3">
                    <a
                      href={mailtoLink}
                      className="px-6 py-3 rounded-xl theme-btn-gradient text-white text-xs sm:text-sm font-bold shadow-md hover:scale-105 transition-all flex items-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Direct via Email Client</span>
                    </a>

                    <button
                      onClick={resetForm}
                      className="px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-bold hover:border-orange-500"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                    <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                      Executive Inquiry Form
                    </h3>
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                      Response within 24h
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-slate-600 dark:text-slate-400 mb-1.5">
                        Your Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-slate-600 dark:text-slate-400 mb-1.5">
                        Corporate / Academic Email *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. rahul@company.com"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-slate-600 dark:text-slate-400 mb-1.5">
                        Organization / University
                      </label>
                      <div className="relative">
                        <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          placeholder="e.g. ABC Enterprises or University"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-slate-600 dark:text-slate-400 mb-1.5">
                        Service Interest
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                      >
                        <option value="Corporate Training Workshop">Corporate Training & Bootcamps</option>
                        <option value="MIS & Power BI Consulting">Executive MIS & Power BI Consulting</option>
                        <option value="Freight & Carrier Billing Audit">Freight & Carrier Billing Audit (FedEx / UPS)</option>
                        <option value="University Placement Accelerator">University Placement Accelerator</option>
                        <option value="General Consultation">General Discussion / Speaking</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-slate-600 dark:text-slate-400 mb-1.5">
                      Target Timeline
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Immediate (1-2 wks)', 'Within 2-4 Weeks', 'Planning Ahead'].map((time) => (
                        <button
                          type="button"
                          key={time}
                          onClick={() => setFormData({ ...formData, timeline: time })}
                          className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${
                            formData.timeline === time
                              ? 'border-orange-500 bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400'
                              : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-slate-600 dark:text-slate-400 mb-1.5">
                      Project Details or Objectives *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline batch size, reporting requirements, carrier audit scope, or student cohort details..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl theme-btn-gradient text-white font-extrabold text-sm shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Direct Contact & Verified SLA (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Email Card */}
            <div className="p-7 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 shadow-lg hover:border-orange-500/40 transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-100 dark:bg-orange-500/15 text-orange-600 dark:text-orange-400 flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-orange-500 transition-all text-xs font-mono font-bold flex items-center gap-1.5 border border-slate-200 dark:border-slate-700"
                  title="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <h4 className="text-base font-extrabold text-slate-900 dark:text-white mb-1">
                Official Direct Email
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                For corporate proposals, RFPs, guest lecture invites & audit queries:
              </p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="font-mono text-sm font-bold text-orange-600 dark:text-orange-400 hover:underline break-all"
              >
                {personalInfo.email}
              </a>
            </div>

            {/* LinkedIn Card */}
            <div className="p-7 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 shadow-lg hover:border-[#0A66C2]/50 transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0A66C2]/15 text-[#0A66C2] flex items-center justify-center">
                  <LinkedInIcon className="w-6 h-6 text-[#0A66C2] dark:text-[#38bdf8]" />
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 text-[10px] font-mono font-bold uppercase">
                  Active Daily
                </span>
              </div>

              <h4 className="text-base font-extrabold text-slate-900 dark:text-white mb-1">
                LinkedIn Professional Network
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                Connect for professional updates, pedagogy discussions & industry insights:
              </p>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 text-xs font-bold flex items-center justify-center gap-2 hover:border-[#0A66C2] hover:text-[#0A66C2] transition-colors shadow-sm"
              >
                <span>View LinkedIn Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Location & Response SLA */}
            <div className="p-7 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 shadow-lg space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 dark:text-white">Base Location & Availability</h5>
                  <p className="text-slate-600 dark:text-slate-400 mt-0.5">
                    {personalInfo.location}. Open to Global Remote consulting (US/UK/Gulf timezones) and On-Site delivery across Pan-India.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                <div className="p-2 rounded-xl bg-amber-100 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 dark:text-white">Response Turnaround SLA</h5>
                  <p className="text-slate-600 dark:text-slate-400 mt-0.5">
                    All inquiries are reviewed personally. Guaranteed response within 24 hours on business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= COMPREHENSIVE FAQ SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Consulting & Training FAQ
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
              <h4 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                <span>Can workshops be customized around our company's datasets?</span>
              </h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Yes. Under mutual NDA, I sanitize and structure your company's actual operational files, ensuring employees learn solutions directly applicable to their day-to-day workflow.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
              <h4 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                <span>What is the optimal cohort size for university/corporate bootcamps?</span>
              </h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                For hands-on interactive lab sessions, 25 to 45 learners per cohort ensures individualized assistance with formulas, DAX modeling, and case study debugging.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
              <h4 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                <span>How do carrier billing audits (FedEx/UPS) operate?</span>
              </h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Billing EDI/PDF files or portal extracts are audited against contracted tariff schedules to identify dimensional weight surcharges, duplicate manifests, and accessorial discrepancies.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
              <h4 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                <span>Are sessions delivered remotely or on-site?</span>
              </h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Both modes are fully supported. On-site multi-day intensive bootcamps are conducted across India, and remote sessions are delivered via Teams/Zoom globally with screen recordings.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
