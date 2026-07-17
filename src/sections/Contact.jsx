import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, Send, Sparkles, CheckCircle2, Phone } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setError('');
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "f13de481-a566-47d0-bfa7-303673f74872",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        
        // Auto reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        console.error("Form submission failed:", result);
        setError('Message could not be sent. Please try again or email directly.');
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden bg-black-pure">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-sm uppercase tracking-[0.5em] text-accent-blue mb-4">Inquiry</h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tighter">
            Get In <span className="text-white/20">Touch</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Social details - Left side */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-accent-cyan text-sm font-semibold tracking-wider">
                <Sparkles size={16} />
                <span>Let's collaborate</span>
              </div>
              <h4 className="text-3xl font-extrabold tracking-tight text-white">
                Connect & Consult
              </h4>
              <p className="text-white/50 text-base font-light leading-relaxed max-w-md">
                I am interested in internship pathways, technical roles, or research collaborations in Deep Learning, Data Analytics, and predictive workflows. Let's discuss how we can build something smart.
              </p>
            </div>

            {/* List links */}
            <div className="space-y-4 pt-4">
              {[
                { 
                  icon: <Phone className="text-accent-cyan" size={20} />, 
                  label: "Phone Number", 
                  value: "+91 7561826862", 
                  href: "tel:+917561826862" 
                },
                { 
                  icon: <Mail className="text-accent-blue" size={20} />, 
                  label: "Email Address", 
                  value: "aparnarajeshapzz@gmail.com", 
                  href: "mailto:aparnarajeshapzz@gmail.com" 
                },
                { 
                  icon: <Linkedin className="text-accent-purple" size={20} />, 
                  label: "LinkedIn Profile", 
                  value: "linkedin.com/in/aparnarajesh25", 
                  href: "https://linkedin.com/in/aparnarajesh25" 
                },
                { 
                  icon: <Github className="text-accent-cyan" size={20} />, 
                  label: "GitHub Repositories", 
                  value: "github.com/Aparnarajes", 
                  href: "https://github.com/Aparnarajes" 
                }
              ].map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-4 group p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white/40 block mb-0.5">
                      {item.label}
                    </span>
                    <span className="text-white/85 text-sm font-medium group-hover:text-white transition-colors duration-300">
                      {item.value}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Form - Right side */}
          <div className="lg:col-span-7">
            <GlassCard className="border border-white/5 relative">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-white/50 text-xs font-semibold uppercase tracking-wider ml-1">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. John Doe"
                          className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all text-white text-sm placeholder:text-white/20"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-white/50 text-xs font-semibold uppercase tracking-wider ml-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. name@company.com"
                          className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all text-white text-sm placeholder:text-white/20"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-white/50 text-xs font-semibold uppercase tracking-wider ml-1">
                        Message Content
                      </label>
                      <textarea
                        rows="5"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Detail your inquiry or collaboration idea here..."
                        className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all text-white text-sm placeholder:text-white/20 resize-none"
                      ></textarea>
                    </div>

                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="w-full py-4 font-bold rounded-xl flex items-center justify-center gap-2 text-white bg-gradient-to-r from-accent-blue to-accent-purple shadow-lg shadow-indigo-500/10 hover:shadow-indigo-500/20 transition-all border border-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send size={16} />
                          <span>Transmit Message</span>
                        </>
                      )}
                    </motion.button>

                    {error && (
                      <motion.p
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm text-center mt-2 px-2"
                      >
                        ⚠️ {error}
                      </motion.p>
                    )}
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 text-center flex flex-col items-center justify-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-accent-cyan/15 flex items-center justify-center text-accent-cyan border border-accent-cyan/30 animate-bounce">
                      <CheckCircle2 size={32} />
                    </div>
                    <h4 className="text-2xl font-bold text-white">Transmission Successful</h4>
                    <p className="text-white/50 text-sm max-w-sm">
                      Thank you! Your message was sent successfully. Aparna will respond shortly.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassCard>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;