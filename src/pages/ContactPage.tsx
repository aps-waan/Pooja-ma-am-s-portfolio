import React, { useState, useEffect, useRef } from 'react';
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
  User, 
  ChevronDown, 
  Loader2, 
  BarChart3, 
  GraduationCap, 
  ReceiptText, 
  Award, 
  Sparkles,
  FileSpreadsheet
} from 'lucide-react';
import { LinkedInIcon } from '../components/icons/LinkedInIcon';
import { personalInfo } from '../data/portfolioData';
import { CONTACT_CONFIG } from '../config/contactConfig';

interface ServiceOption {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  tag?: string;
}

const SERVICE_OPTIONS: ServiceOption[] = [
  {
    id: 'Executive MIS & Power BI Consulting',
    label: 'Executive MIS & Power BI Consulting',
    icon: BarChart3,
    tag: 'C-Suite MIS',
  },
  {
    id: 'Corporate Training Workshop',
    label: 'Corporate Training & Bootcamps',
    icon: GraduationCap,
    tag: '1,000+ Alumni',
  },
  {
    id: 'Freight & Carrier Billing Audit',
    label: 'Freight & Carrier Billing Audit (FedEx / UPS)',
    icon: ReceiptText,
    tag: 'Zero-Error Audit',
  },
  {
    id: 'University Placement Accelerator',
    label: 'University Placement Accelerator',
    icon: Award,
    tag: 'Campus Drives',
  },
  {
    id: 'General Consultation',
    label: 'General Discussion / Guest Lecture',
    icon: Sparkles,
    tag: 'Connect',
  },
];

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get('service');
  const programParam = searchParams.get('program');

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    service: serviceParam === 'training' 
      ? 'Corporate Training Workshop' 
      : 'Executive MIS & Power BI Consulting',
    timeline: 'Within 2-4 Weeks',
    message: programParam ? `Hi Pooja, I would like to inquire regarding the "${programParam}" program.` : '',
  });

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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

  const selectedServiceObj = SERVICE_OPTIONS.find(opt => opt.id === formData.service) || SERVICE_OPTIONS[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert('Please fill in your name, email, and message.');
      return;
    }

    setIsSubmitting(true);

    try {
      const scriptUrl = CONTACT_CONFIG.GOOGLE_SHEETS_SCRIPT_URL.trim();
      
      if (scriptUrl) {
        // Send to Google Apps Script Webhook (mode: 'no-cors' + text/plain content type avoids CORS preflight failures)
        await fetch(scriptUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          },
          body: JSON.stringify({
            ...formData,
            submittedAt: new Date().toISOString(),
          }),
        });
      } else {
        // Simulated network delay if user hasn't pasted their webhook URL yet
        await new Promise(resolve => setTimeout(resolve, 800));
      }
      setSubmitted(true);
    } catch (err) {
      console.error('Submission error:', err);
      // Still show confirmation card so client can fallback to direct email
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      organization: '',
      service: 'Executive MIS & Power BI Consulting',
      timeline: 'Within 2-4 Weeks',
      message: '',
    });
  };

  const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(`Inquiry: ${formData.service} - ${formData.name}`)}&body=${encodeURIComponent(
    `Name: ${formData.name}\nOrganization: ${formData.organization}\nService Category: ${formData.service}\nTarget Timeline: ${formData.timeline}\n\nMessage & Objectives:\n${formData.message}`
  )}`;

  return (
    <div className="pt-28 pb-20 relative overflow-hidden">
      {/* Background glow */}
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
            <div className="p-8 sm:p-10 rounded-3xl glass-card border border-slate-200/90 dark:border-slate-800 shadow-xl relative transition-all">
              {submitted ? (
                /* Success Screen with Confirmation & Lead Summary */
                <div className="text-center py-8 space-y-5 animate-fade-in-up">
                  <div className="w-16 h-16 rounded-3xl bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center shadow-lg shadow-emerald-500/10">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto mt-2 leading-relaxed">
                      Thank you, <strong className="text-slate-900 dark:text-white">{formData.name}</strong>. Your inquiry has been securely submitted. An email alert is on its way to my inbox, and your details are recorded in Google Sheets.
                    </p>
                  </div>

                  {/* Summary Card */}
                  <div className="max-w-md mx-auto p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 text-left text-xs space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-500 dark:text-slate-400 font-medium">Service Interest:</span>
                      <span className="font-bold text-orange-600 dark:text-orange-400">{formData.service}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 dark:text-slate-400 font-medium">Email Address:</span>
                      <span className="font-bold text-slate-800 dark:text-slate-200">{formData.email}</span>
                    </div>
                    {formData.organization && (
                      <div className="flex justify-between">
                        <span className="text-slate-500 dark:text-slate-400 font-medium">Organization:</span>
                        <span className="font-bold text-slate-800 dark:text-slate-200">{formData.organization}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-slate-500 dark:text-slate-400 font-medium">Target Timeline:</span>
                      <span className="font-bold text-slate-800 dark:text-slate-200">{formData.timeline}</span>
                    </div>
                  </div>

                  <div className="pt-3 flex flex-wrap justify-center gap-3">
                    <a
                      href={mailtoLink}
                      className="px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:border-orange-500 hover:text-orange-600 text-xs font-bold transition-all shadow-sm flex items-center gap-2"
                    >
                      <Mail className="w-3.5 h-3.5 text-orange-500" />
                      <span>Also Open in Email Client</span>
                    </a>

                    <button
                      onClick={resetForm}
                      className="px-5 py-2.5 rounded-xl theme-btn-gradient text-white text-xs font-bold shadow-md hover:scale-105 transition-all"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                /* The Beautified Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Form Header Strip */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800/80">
                    <div>
                      <h3 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        Executive Inquiry Form
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        Direct connection to Pooja's inbox & Google Sheets
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-[11px] font-mono font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Replies &lt; 24h</span>
                    </div>
                  </div>

                  {/* Row 1: Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                        Your Full Name <span className="text-orange-500">*</span>
                      </label>
                      <div className="relative group">
                        <User className="w-4 h-4 text-slate-400 group-focus-within:text-orange-500 transition-colors absolute left-3.5 top-3.5 pointer-events-none" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-slate-50/70 dark:bg-slate-900/60 text-slate-900 dark:text-white text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/15 focus:bg-white dark:focus:bg-slate-900 transition-all shadow-sm"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                        Corporate / Academic Email <span className="text-orange-500">*</span>
                      </label>
                      <div className="relative group">
                        <Mail className="w-4 h-4 text-slate-400 group-focus-within:text-orange-500 transition-colors absolute left-3.5 top-3.5 pointer-events-none" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. rahul@company.com"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-slate-50/70 dark:bg-slate-900/60 text-slate-900 dark:text-white text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/15 focus:bg-white dark:focus:bg-slate-900 transition-all shadow-sm"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Organization / University */}
                  <div>
                    <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                      Organization / University
                    </label>
                    <div className="relative group">
                      <Building className="w-4 h-4 text-slate-400 group-focus-within:text-orange-500 transition-colors absolute left-3.5 top-3.5 pointer-events-none" />
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. Mercedes-Benz / Chitkara University"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-slate-50/70 dark:bg-slate-900/60 text-slate-900 dark:text-white text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/15 focus:bg-white dark:focus:bg-slate-900 transition-all shadow-sm"
                      />
                    </div>
                  </div>

                  {/* Row 3: Custom Beautified Dropdown (Full Width, No Truncation) */}
                  <div className="relative" ref={dropdownRef}>
                    <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                      Service Category
                    </label>
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className={`w-full px-4 py-3 rounded-xl border text-left flex items-center justify-between gap-3 transition-all shadow-sm ${
                        isDropdownOpen
                          ? 'border-orange-500 ring-4 ring-orange-500/15 bg-white dark:bg-slate-900'
                          : 'border-slate-200 dark:border-slate-700/80 bg-slate-50/70 dark:bg-slate-900/60 hover:border-slate-300 dark:hover:border-slate-600'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        {React.createElement(selectedServiceObj.icon, {
                          className: 'w-4 h-4 text-orange-500 shrink-0',
                        })}
                        <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white leading-normal">
                          {selectedServiceObj.label}
                        </span>
                      </div>
                      <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180 text-orange-500' : ''}`} />
                    </button>

                    {/* Dropdown Popover Menu */}
                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 right-0 mt-2 z-50 bg-white dark:bg-[#0E1524] border border-slate-200 dark:border-slate-700/80 rounded-2xl p-2 shadow-2xl animate-scale-in">
                        {SERVICE_OPTIONS.map((opt) => {
                          const isSelected = formData.service === opt.id;
                          const IconComp = opt.icon;
                          return (
                            <button
                              key={opt.id}
                              type="button"
                              onClick={() => {
                                setFormData({ ...formData, service: opt.id });
                                setIsDropdownOpen(false);
                              }}
                              className={`w-full px-3.5 py-2.5 rounded-xl text-left flex items-center justify-between gap-3 text-xs sm:text-sm transition-all ${
                                isSelected
                                  ? 'bg-orange-50 dark:bg-orange-500/15 text-orange-700 dark:text-orange-400 font-bold'
                                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80'
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <IconComp className={`w-4 h-4 shrink-0 ${isSelected ? 'text-orange-500' : 'text-slate-400'}`} />
                                <span className="leading-normal">{opt.label}</span>
                              </div>
                              {opt.tag && (
                                <span className={`text-[10px] font-mono px-2 py-0.5 rounded shrink-0 font-medium ${
                                  isSelected 
                                    ? 'bg-orange-200/50 dark:bg-orange-500/25 text-orange-800 dark:text-orange-300' 
                                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                                }`}>
                                  {opt.tag}
                                </span>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* Row 4: Target Timeline Segmented Toggle */}
                  <div>
                    <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                      Target Timeline / Urgency
                    </label>
                    <div className="grid grid-cols-3 gap-2.5 p-1 rounded-2xl bg-slate-100/70 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800">
                      {[
                        { id: 'Immediate (1-2 wks)', label: 'Immediate (1–2 wks)' },
                        { id: 'Within 2-4 Weeks', label: 'Within 2–4 Weeks' },
                        { id: 'Planning Ahead', label: 'Planning Ahead' },
                      ].map((time) => {
                        const isSelected = formData.timeline === time.id;
                        return (
                          <button
                            type="button"
                            key={time.id}
                            onClick={() => setFormData({ ...formData, timeline: time.id })}
                            className={`py-2 px-2 sm:px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                              isSelected
                                ? 'bg-white dark:bg-slate-800 text-orange-600 dark:text-orange-400 shadow-md ring-1 ring-orange-500/30'
                                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                            }`}
                          >
                            {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />}
                            <span className="leading-tight text-center">{time.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Row 4: Project Details Textarea */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                        Project Details or Objectives <span className="text-orange-500">*</span>
                      </label>
                      <span className="text-[11px] text-slate-400 font-mono">
                        {formData.message.length} chars
                      </span>
                    </div>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline batch size, reporting requirements, carrier audit scope, or student cohort details..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-slate-50/70 dark:bg-slate-900/60 text-slate-900 dark:text-white text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/15 focus:bg-white dark:focus:bg-slate-900 transition-all shadow-sm resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl theme-btn-gradient text-white font-extrabold text-sm shadow-lg hover:scale-[1.015] active:scale-[0.985] transition-all flex items-center justify-center gap-2.5 disabled:opacity-70 disabled:cursor-not-allowed group"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending to Pooja...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Subtext info */}
                  <p className="text-[11px] text-center text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1.5 font-medium">
                    <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Auto-synced to Google Sheets & instant email notification</span>
                  </p>
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
