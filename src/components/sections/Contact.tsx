import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import OptimizedImage from '../common/OptimizedImage';

interface FormData {
  name: string;
  email: string;
  date: string;
  service: string;
  budget: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    date: '',
    service: '',
    budget: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="section bg-[#0e254a] scroll-mt-20 min-h-[400px] w-full z-0" style={{ contain: 'layout paint', backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="heading mb-4 text-white">Get in Touch</h2>
          <p className="subheading max-w-2xl mx-auto text-secondary-light">
            Ready to transform your business? Let's start the conversation.
          </p>
        </motion.div>

        <motion.div
          className="w-full flex flex-col lg:flex-row items-center justify-center gap-12 bg-transparent"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-xl bg-[#0e254a] rounded-2xl p-8 flex flex-col gap-4 shadow-xl"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="flex-1 px-4 py-3 rounded-lg bg-[#0e254a] border border-white/20 text-white placeholder-white/70 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="flex-1 px-4 py-3 rounded-lg bg-[#0e254a] border border-white/20 text-white placeholder-white/70 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                required
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="date"
                name="date"
                placeholder="dd/mm/yyyy"
                value={formData.date}
                onChange={handleChange}
                className="flex-1 px-4 py-3 rounded-lg bg-[#0e254a] border border-white/20 text-white placeholder-white/70 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                required
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="flex-1 px-4 py-3 rounded-lg bg-[#0e254a] border border-white/20 text-white placeholder-white/70 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                required
              >
                <option value="">Service...</option>
                <option value="Strategy Consulting">Strategy Consulting</option>
                <option value="Technology Consulting">Technology Consulting</option>
                <option value="Business Consulting">Business Consulting</option>
                <option value="Corporate Training">Corporate Training</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="flex-1 px-4 py-3 rounded-lg bg-[#0e254a] border border-white/20 text-white placeholder-white/70 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                required
              >
                <option value="">Budget...</option>
                <option value="<$5,000">&lt;$5,000</option>
                <option value="$5,000-$20,000">$5,000-$20,000</option>
                <option value=">$20,000">&gt;$20,000</option>
              </select>
            </div>
            <textarea
              name="message"
              placeholder="How Can We Help?"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-[#0e254a] border border-white/20 text-white placeholder-white/70 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
              required
            />
            <motion.button
              whileHover={{ scale: 1.06, boxShadow: '0 4px 24px 0 rgba(14,37,74,0.18)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300, damping: 18 }}
              type="submit"
              className="flex items-center gap-2 self-start mt-2 px-7 py-3 rounded-full font-semibold bg-gradient-to-r from-[#0e254a] to-[#009FE3] text-white shadow-lg hover:from-[#009FE3] hover:to-[#0e254a] focus:outline-none focus:ring-2 focus:ring-[#009FE3]/40 text-base"
            >
              Submit your Form
              <ArrowRightIcon className="w-5 h-5" />
            </motion.button>
          </form>

          {/* Image Side */}
          <div className="w-full max-w-xl flex justify-center items-center">
            <OptimizedImage
              src="/assets/images/support2.jpg"
              alt="Support Team"
              className="rounded-2xl w-full h-[400px] md:h-[480px] shadow-xl"
              loading="lazy"
              fallbackColor="#F5F5F5"
              onError={e => { (e.target as HTMLImageElement).src = '/images/support2.png'; }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 