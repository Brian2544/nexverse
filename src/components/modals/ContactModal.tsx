import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useDragControls } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  anchorRect?: DOMRect | null;
  source?: 'navbar' | 'process';
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5 text-[#009FE3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Phone',
    value: '+254 757344002',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-[#009FE3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'drmuchiriconsulting@gmail.com',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-[#009FE3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Address',
    value: (
      <span>
        123 Business Avenue<br />Westlands<br />Nairobi, Kenya
      </span>
    ),
  },
];

const socials = [
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" fill="none" />
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  ) },
  { name: 'Twitter', url: 'https://twitter.com', icon: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" fill="none" />
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    </svg>
  ) },
  { name: 'Facebook', url: 'https://facebook.com', icon: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" fill="none" />
      <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.405 24 24 23.408 24 22.674V1.326C24 .592 23.405 0 22.675 0" />
    </svg>
  ) },
];

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, anchorRect, source = 'navbar' }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const dragControls = useDragControls();
  const constraintsRef = useRef(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          to: 'drmuchiriconsulting@gmail.com',
        }),
      });

      if (response.ok) {
        // Show success message
        alert('Thank you for your message. We will get back to you soon!');
        setFormData({ name: '', email: '', subject: '', message: '' });
        onClose();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Sorry, there was an error sending your message. Please try again later.');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Calculate modal style for anchor
  let modalStyle: React.CSSProperties = {};
  if (source === 'navbar' && anchorRect && window.innerWidth >= 768) {
    // Desktop: position just below the Get in Touch button, aligned left, but prevent right overflow
    const modalWidth = 420;
    let left = anchorRect.left;
    if (left + modalWidth > window.innerWidth - 16) { // 16px margin from right
      left = window.innerWidth - modalWidth - 16;
    }
    modalStyle = {
      position: 'fixed',
      left,
      top: anchorRect.bottom + 8, // 8px gap below button
      zIndex: 9999,
      width: modalWidth,
      maxWidth: '95vw',
    };
  } else {
    // Centered position for process section or mobile
    modalStyle = {
      position: 'fixed',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 9999,
      width: '95%',
      maxWidth: 420,
    };
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            onClick={onClose}
            ref={constraintsRef}
          />
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            style={modalStyle}
            className="bg-[#101A2A] rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col"
            drag
            dragControls={dragControls}
            dragMomentum={false}
            dragConstraints={constraintsRef}
            dragElastic={0.1}
            whileDrag={{ cursor: 'grabbing' }}
          >
            {/* Drag Handle */}
            <div
              className="h-8 cursor-grab active:cursor-grabbing bg-[#17213a] flex items-center justify-center"
              onPointerDown={(e) => dragControls.start(e)}
            >
              <div className="w-8 h-1 rounded-full bg-[#22304d]"></div>
            </div>
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-400 hover:text-[#009FE3] transition-colors z-10"
              aria-label="Close modal"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
            {/* Content */}
            <div className="p-4">
              <h2 className="text-xl font-extrabold text-white mb-1">Get in Touch</h2>
              <p className="text-[#b0b8c9] mb-4 text-xs">Ready to transform your business? Let's start the conversation.</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 md:col-span-1">
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-[#b0b8c9] mb-0.5">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-2 py-1.5 bg-[#17213a] border border-[#22304d] rounded-lg text-white focus:ring-2 focus:ring-[#009FE3] focus:border-transparent transition-all placeholder-[#b0b8c9] text-xs"
                        required
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-[#b0b8c9] mb-0.5">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-2 py-1.5 bg-[#17213a] border border-[#22304d] rounded-lg text-white focus:ring-2 focus:ring-[#009FE3] focus:border-transparent transition-all placeholder-[#b0b8c9] text-xs"
                        required
                        placeholder="you@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-xs font-medium text-[#b0b8c9] mb-0.5">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-2 py-1.5 bg-[#17213a] border border-[#22304d] rounded-lg text-white focus:ring-2 focus:ring-[#009FE3] focus:border-transparent transition-all placeholder-[#b0b8c9] text-xs"
                        required
                        placeholder="Subject"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-xs font-medium text-[#b0b8c9] mb-0.5">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={2}
                        className="w-full px-2 py-1.5 bg-[#17213a] border border-[#22304d] rounded-lg text-white focus:ring-2 focus:ring-[#009FE3] focus:border-transparent transition-all placeholder-[#b0b8c9] text-xs"
                        required
                        placeholder="Type your message..."
                      />
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full px-3 py-1.5 rounded-lg font-semibold text-white bg-[#FF6F61] hover:bg-[#FFA500] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#009FE3]/40 text-xs"
                      style={{ background: 'linear-gradient(90deg, #FF6F61 0%, #FFA500 100%)' }}
                    >
                      Send Message
                    </motion.button>
                  </form>
                </div>
                <div className="col-span-2 md:col-span-1">
                  <div className="border-t md:border-t-0 md:border-l border-[#22304d] pt-3 md:pt-0 md:pl-4">
                    <h3 className="text-sm font-bold text-white mb-2">Contact Information</h3>
                    <div className="space-y-2 mb-3">
                      {contactInfo.map((info) => (
                        <div className="flex items-start space-x-2" key={info.label}>
                          <div className="mt-0.5">{info.icon}</div>
                          <div>
                            <h4 className="text-white font-medium text-xs mb-0.5">{info.label}</h4>
                            <p className="text-[#b0b8c9] text-xs whitespace-nowrap">{info.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <h4 className="text-white font-medium mb-1.5 text-xs">Follow Us</h4>
                    <div className="flex space-x-2">
                      {socials.map((social) => (
                        <motion.a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-6 h-6 rounded-full flex items-center justify-center border-2 border-[#009FE3] text-[#009FE3] hover:bg-[#009FE3] hover:text-white transition-colors"
                          aria-label={social.name}
                        >
                          {social.icon}
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactModal; 