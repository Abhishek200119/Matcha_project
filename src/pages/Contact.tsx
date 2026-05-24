import { useState } from 'react'
import MainLayout from '../layouts/MainLayout'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [focusedField, setFocusedField] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 3000)
    }, 1500)
  }

  return (
    <MainLayout>
      <section className="relative min-h-screen overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f0a] via-[#111a11] to-[#0d140d]" />

        {/* Ambient glow effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#355E3B]/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#355E3B]/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-emerald-900/5 rounded-full blur-[100px]" />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Floating particles */}
        <div className="absolute top-20 left-[15%] w-1 h-1 bg-[#355E3B]/40 rounded-full animate-pulse" />
        <div className="absolute top-40 right-[20%] w-1.5 h-1.5 bg-emerald-500/20 rounded-full animate-pulse delay-700" />
        <div className="absolute bottom-32 left-[30%] w-1 h-1 bg-[#355E3B]/30 rounded-full animate-pulse delay-1000" />
        <div className="absolute top-60 right-[35%] w-0.5 h-0.5 bg-emerald-400/30 rounded-full animate-pulse delay-500" />

        <div className="relative z-10 pt-32 pb-24">
          <div className="max-w-7xl mx-auto px-6">

            {/* Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#355E3B]/20 bg-[#355E3B]/5 backdrop-blur-sm mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <p className="uppercase tracking-[5px] text-emerald-400/80 text-xs font-medium">
                  Get in Touch
                </p>
              </div>

              <h1 className="text-6xl md:text-8xl font-semibold tracking-tighter text-white leading-[0.9]">
                Let's Talk
                <span className="block mt-1 bg-gradient-to-r from-emerald-300 via-[#355E3B] to-emerald-600 bg-clip-text text-transparent">
                  Matcha
                </span>
              </h1>

              <p className="mt-8 text-lg text-white/40 max-w-lg mx-auto leading-relaxed font-light">
                Have a question, collaboration idea, or just want to say hello?
                We'd love to hear from you.
              </p>

              {/* Decorative line */}
              <div className="mt-10 flex items-center justify-center gap-3">
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#355E3B]/40" />
                <div className="w-2 h-2 rounded-full border border-[#355E3B]/40" />
                <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#355E3B]/40" />
              </div>
            </div>

            {/* Main Content */}
            <div className="grid lg:grid-cols-5 gap-6 items-start">

              {/* Left Column - Contact Info */}
              <div className="lg:col-span-2 space-y-6">

                {/* Info Card */}
                <div className="group relative rounded-[28px] overflow-hidden">
                  {/* Card border glow */}
                  <div className="absolute inset-0 rounded-[28px] border border-white/[0.06] group-hover:border-[#355E3B]/20 transition-colors duration-700" />
                  <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-xl" />

                  <div className="relative p-10">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-10 h-10 rounded-2xl bg-[#355E3B]/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-semibold tracking-tight text-white">
                        Contact Info
                      </h2>
                    </div>

                    <div className="space-y-8">
                      {/* Email */}
                      <a href="mailto:hello@matcha.com" className="group/item flex items-start gap-4 p-4 -m-4 rounded-2xl hover:bg-white/[0.03] transition-all duration-300">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#355E3B]/15 to-emerald-600/10 flex items-center justify-center shrink-0 group-hover/item:from-[#355E3B]/25 group-hover/item:to-emerald-600/15 transition-all duration-300">
                          <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-[3px] text-white/30 mb-1.5">Email</p>
                          <p className="text-white/80 group-hover/item:text-emerald-300 transition-colors font-light">
                            hello@matcha.com
                          </p>
                        </div>
                      </a>

                      {/* Phone */}
                      <a href="tel:+919876543210" className="group/item flex items-start gap-4 p-4 -m-4 rounded-2xl hover:bg-white/[0.03] transition-all duration-300">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#355E3B]/15 to-emerald-600/10 flex items-center justify-center shrink-0 group-hover/item:from-[#355E3B]/25 group-hover/item:to-emerald-600/15 transition-all duration-300">
                          <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.556-1.21.413a12.787 12.787 0 01-7.288-7.288c-.142-.441.037-.928.413-1.21l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-[3px] text-white/30 mb-1.5">Phone</p>
                          <p className="text-white/80 group-hover/item:text-emerald-300 transition-colors font-light">
                            +91 98765 43210
                          </p>
                        </div>
                      </a>

                      {/* Location */}
                      <div className="flex items-start gap-4 p-4 -m-4">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#355E3B]/15 to-emerald-600/10 flex items-center justify-center shrink-0">
                          <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-[3px] text-white/30 mb-1.5">Studio</p>
                          <p className="text-white/80 font-light leading-relaxed">
                            Matcha Wellness Studio<br />
                            Bangalore, India
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hours Card */}
                <div className="group relative rounded-[28px] overflow-hidden">
                  <div className="absolute inset-0 rounded-[28px] border border-white/[0.06] group-hover:border-[#355E3B]/20 transition-colors duration-700" />
                  <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-xl" />

                  <div className="relative p-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-2xl bg-[#355E3B]/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-semibold tracking-tight text-white">Hours</h3>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-3 border-b border-white/[0.04]">
                        <span className="text-white/40 text-sm font-light">Mon — Fri</span>
                        <span className="text-white/80 text-sm font-light">9:00 AM — 6:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-white/[0.04]">
                        <span className="text-white/40 text-sm font-light">Saturday</span>
                        <span className="text-white/80 text-sm font-light">10:00 AM — 4:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center py-3">
                        <span className="text-white/40 text-sm font-light">Sunday</span>
                        <span className="text-emerald-400/60 text-sm font-light">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="group relative rounded-[28px] overflow-hidden">
                  <div className="absolute inset-0 rounded-[28px] border border-white/[0.06] group-hover:border-[#355E3B]/20 transition-colors duration-700" />
                  <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-xl" />

                  <div className="relative p-10">
                    <p className="text-xs uppercase tracking-[3px] text-white/30 mb-5">Follow Us</p>
                    <div className="flex gap-3">
                      {['Instagram', 'Twitter', 'LinkedIn'].map((social) => (
                        <button
                          key={social}
                          className="px-5 py-2.5 rounded-xl border border-white/[0.06] hover:border-[#355E3B]/30 hover:bg-[#355E3B]/5 text-white/50 hover:text-emerald-300 text-sm font-light transition-all duration-300"
                        >
                          {social}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="lg:col-span-3">
                <div className="group relative rounded-[28px] overflow-hidden">
                  {/* Card effects */}
                  <div className="absolute inset-0 rounded-[28px] border border-white/[0.06] group-hover:border-[#355E3B]/15 transition-colors duration-700" />
                  <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-xl" />

                  {/* Top accent line */}
                  <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-[#355E3B]/20 to-transparent" />

                  <div className="relative p-10 md:p-14">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-2xl bg-[#355E3B]/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-semibold tracking-tight text-white">
                        Send a Message
                      </h2>
                    </div>

                    <p className="text-white/30 text-sm font-light mb-10 ml-[52px]">
                      Fill out the form and we'll get back within 24 hours.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name & Email Row */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="relative">
                          <label className={`absolute left-5 transition-all duration-300 pointer-events-none ${
                            focusedField === 'name' || formData.name
                              ? 'top-2.5 text-[10px] uppercase tracking-[2px] text-emerald-400/70'
                              : 'top-1/2 -translate-y-1/2 text-sm text-white/25'
                          }`}>
                            Full Name
                          </label>
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            onFocus={() => setFocusedField('name')}
                            onBlur={() => setFocusedField(null)}
                            className={`w-full bg-white/[0.03] border rounded-2xl px-5 pt-7 pb-3 text-[15px] text-white/90 outline-none transition-all duration-300 font-light ${
                              focusedField === 'name'
                                ? 'border-[#355E3B]/40 bg-white/[0.05] shadow-[0_0_30px_rgba(53,94,59,0.08)]'
                                : 'border-white/[0.06] hover:border-white/[0.1]'
                            }`}
                          />
                        </div>

                        <div className="relative">
                          <label className={`absolute left-5 transition-all duration-300 pointer-events-none ${
                            focusedField === 'email' || formData.email
                              ? 'top-2.5 text-[10px] uppercase tracking-[2px] text-emerald-400/70'
                              : 'top-1/2 -translate-y-1/2 text-sm text-white/25'
                          }`}>
                            Email Address
                          </label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            onFocus={() => setFocusedField('email')}
                            onBlur={() => setFocusedField(null)}
                            className={`w-full bg-white/[0.03] border rounded-2xl px-5 pt-7 pb-3 text-[15px] text-white/90 outline-none transition-all duration-300 font-light ${
                              focusedField === 'email'
                                ? 'border-[#355E3B]/40 bg-white/[0.05] shadow-[0_0_30px_rgba(53,94,59,0.08)]'
                                : 'border-white/[0.06] hover:border-white/[0.1]'
                            }`}
                          />
                        </div>
                      </div>

                      {/* Subject */}
                      <div className="relative">
                        <label className={`absolute left-5 transition-all duration-300 pointer-events-none ${
                          focusedField === 'subject' || formData.subject
                            ? 'top-2.5 text-[10px] uppercase tracking-[2px] text-emerald-400/70'
                            : 'top-1/2 -translate-y-1/2 text-sm text-white/25'
                        }`}>
                          Subject
                        </label>
                        <input
                          type="text"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          onFocus={() => setFocusedField('subject')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full bg-white/[0.03] border rounded-2xl px-5 pt-7 pb-3 text-[15px] text-white/90 outline-none transition-all duration-300 font-light ${
                            focusedField === 'subject'
                              ? 'border-[#355E3B]/40 bg-white/[0.05] shadow-[0_0_30px_rgba(53,94,59,0.08)]'
                              : 'border-white/[0.06] hover:border-white/[0.1]'
                          }`}
                        />
                      </div>

                      {/* Message */}
                      <div className="relative">
                        <label className={`absolute left-5 transition-all duration-300 pointer-events-none ${
                          focusedField === 'message' || formData.message
                            ? 'top-3 text-[10px] uppercase tracking-[2px] text-emerald-400/70'
                            : 'top-5 text-sm text-white/25'
                        }`}>
                          Your Message
                        </label>
                        <textarea
                          rows={6}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          onFocus={() => setFocusedField('message')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full bg-white/[0.03] border rounded-2xl px-5 pt-8 pb-4 text-[15px] text-white/90 outline-none transition-all duration-300 resize-none font-light ${
                            focusedField === 'message'
                              ? 'border-[#355E3B]/40 bg-white/[0.05] shadow-[0_0_30px_rgba(53,94,59,0.08)]'
                              : 'border-white/[0.06] hover:border-white/[0.1]'
                          }`}
                        />
                      </div>

                      {/* Submit Button */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="group/btn relative w-full overflow-hidden rounded-2xl transition-all duration-500 active:scale-[0.985]"
                        >
                          {/* Button background */}
                          <div className={`absolute inset-0 transition-all duration-500 ${
                            submitted
                              ? 'bg-emerald-500'
                              : 'bg-gradient-to-r from-[#355E3B] to-emerald-700 group-hover/btn:from-emerald-600 group-hover/btn:to-[#355E3B]'
                          }`} />

                          {/* Shimmer effect */}
                          <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500">
                            <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                          </div>

                          <div className="relative flex items-center justify-center gap-3 py-5">
                            {isSubmitting ? (
                              <div className="flex items-center gap-3">
                                <svg className="w-5 h-5 animate-spin text-white/80" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                </svg>
                                <span className="text-white/90 text-sm font-medium tracking-wide">Sending...</span>
                              </div>
                            ) : submitted ? (
                              <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                <span className="text-white text-sm font-medium tracking-wide">Message Sent!</span>
                              </div>
                            ) : (
                              <>
                                <span className="text-white text-sm font-medium tracking-wide">Send Message</span>
                                <svg className="w-4 h-4 text-white/70 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                              </>
                            )}
                          </div>
                        </button>
                      </div>

                      <p className="text-center text-white/20 text-xs font-light pt-2">
                        By submitting, you agree to our privacy policy. We'll never share your data.
                      </p>
                    </form>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Marquee / Trust strip */}
            <div className="mt-20 pt-12 border-t border-white/[0.04]">
              <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
                {['Premium Quality', 'Ethically Sourced', 'Lab Tested', 'Carbon Neutral', 'Japan Origin'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <div className="w-1 h-1 rounded-full bg-[#355E3B]/50" />
                    <span className="text-white/20 text-sm font-light tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </MainLayout>
  )
}

export default Contact