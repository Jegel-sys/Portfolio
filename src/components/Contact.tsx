import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Loader2, Github, Linkedin, Copy, Check, MessageCircle, ArrowUpRight } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolioData';

// Web3Forms access key — tied to jeljelcabuso@gmail.com. Safe to expose client-side;
// Web3Forms is designed to have this key embedded directly in frontend forms.
const WEB3FORMS_ACCESS_KEY = '70939de9-77c1-400d-86f5-942dfc2db22d';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'default' | 'loading' | 'success' | 'error'>('default');
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Honeypot check — real visitors never fill this hidden field; bots often do
    const honeypot = new FormData(e.target as HTMLFormElement).get('botcheck');
    if (honeypot) {
      return;
    }

    // Form Validation
    if (!formData.name.trim()) {
      setStatus('error');
      setErrorMessage('Please provide your name.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    if (!formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please enter a message.');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `New portfolio message from ${formData.name}`,
          message: formData.message,
          from_name: 'Portfolio Contact Form'
        })
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setStatus('error');
        setErrorMessage(result.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Unable to send your message right now. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-b border-[#141c2e] relative">
      {/* Background glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-blue-600/8 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-5 text-left space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400">
                <span className="text-blue-500 font-bold">›</span> GET IN TOUCH
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                Let's build something great.
              </h2>
              <p className="text-base text-gray-400 font-normal">
                Have a project in mind or want to work together? I'd love to hear from you.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3 pt-2">
              {/* Messenger Quick-Chat Card */}
              <a
                href={socialLinks.find((s) => s.platform === 'Messenger')?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#0c1220] border border-[#1b2842] hover:border-blue-500/40 transition-all duration-200 flex items-center justify-between cursor-pointer group shadow-xs"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#121a2d] border border-[#1e2a44] flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block font-mono">Quick chat</span>
                    <span className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                      Message me on Messenger
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              </a>

              {/* Email Card */}
              <div
                onClick={handleCopyEmail}
                className="p-4 rounded-xl bg-[#0c1220] border border-[#1b2842] hover:border-blue-500/40 transition-all duration-200 flex items-center justify-between cursor-pointer group shadow-xs"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#121a2d] border border-[#1e2a44] flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block font-mono">Send me an email</span>
                    <span className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {personalInfo.email}
                    </span>
                  </div>
                </div>
                <div className="text-xs text-gray-400 group-hover:text-white flex items-center gap-1">
                  {copiedEmail ? (
                    <span className="text-emerald-400 font-medium flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> Copied
                    </span>
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </div>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-[#0c1220] border border-[#1b2842] flex items-center gap-3.5 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-[#121a2d] border border-[#1e2a44] flex items-center justify-center text-cyan-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 block font-mono">Based in</span>
                  <span className="text-sm font-semibold text-white">
                    {personalInfo.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="pt-2 space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 block">
                Connect Online
              </span>
              <div className="flex items-center gap-3">
                {socialLinks.map((item) => (
                  <a
                    key={item.platform}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="w-10 h-10 rounded-xl bg-[#0f1627] border border-[#1a263d] text-gray-400 hover:text-white hover:border-blue-500/50 hover:bg-[#142036] flex items-center justify-center transition-all duration-200"
                  >
                    {item.platform === 'GitHub' && <Github className="w-4 h-4" />}
                    {item.platform === 'LinkedIn' && <Linkedin className="w-4 h-4" />}
                    {item.platform === 'Email' && <Mail className="w-4 h-4" />}
                    {item.platform === 'Messenger' && <MessageCircle className="w-4 h-4" />}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 w-full">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0c1220]/95 border border-[#1a273f] shadow-xl text-left">
              {status === 'success' ? (
                <div className="py-12 px-4 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. I have received your inquiry and will get back to you promptly at {personalInfo.email}.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('default')}
                    className="mt-4 px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot field — hidden from real visitors, tempting for bots */}
                  <input
                    type="text"
                    name="botcheck"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="absolute w-0 h-0 opacity-0 pointer-events-none -z-10"
                  />

                  {status === 'error' && (
                    <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs sm:text-sm flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name Input */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="text-xs font-medium text-gray-300 block">
                        Name <span className="text-blue-500">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#080d16] border border-[#1c283f] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm text-white placeholder-gray-500 outline-none transition-all"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="text-xs font-medium text-gray-300 block">
                        Email <span className="text-blue-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#080d16] border border-[#1c283f] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm text-white placeholder-gray-500 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="text-xs font-medium text-gray-300 block">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      placeholder="Project discussion, collaboration, etc."
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#080d16] border border-[#1c283f] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm text-white placeholder-gray-500 outline-none transition-all"
                    />
                  </div>

                  {/* Message Textarea */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-xs font-medium text-gray-300 block">
                      Message <span className="text-blue-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      placeholder="Your message..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#080d16] border border-[#1c283f] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm text-white placeholder-gray-500 outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 disabled:opacity-60 transition-all duration-200 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/40 cursor-pointer"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
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
