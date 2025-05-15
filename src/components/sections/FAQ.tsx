import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: 'What types of businesses does Nexverse work with?',
    answer:
      'We work with businesses of all sizes, from startups to enterprise organizations, across various industries. Our expertise spans technology, finance, healthcare, manufacturing, and more.',
  },
  {
    question: 'How long do projects take?',
    answer:
      'Project timelines vary depending on scope and complexity. A typical engagement can range from 3-6 months for strategy development to 6-12 months for full implementation. We provide detailed timelines during our initial consultation.',
  },
  {
    question: 'Are your consultants certified?',
    answer:
      'Yes, our consultants hold industry-recognized certifications in project management, business analysis, and various technology platforms. We maintain high standards of professional development and continuous learning.',
  },
  {
    question: 'Do you offer custom packages?',
    answer:
      'Absolutely. We understand that each business has unique needs. We offer tailored solutions and can customize our services to match your specific requirements and objectives.',
  },
  {
    question: "What's the first step?",
    answer:
      'The first step is a complimentary consultation where we discuss your business challenges and goals. This helps us understand your needs and determine how we can best support your success.',
  },
  {
    question: 'Do you offer post-project support?',
    answer:
      'Yes, we provide ongoing support and maintenance services to ensure continued success. Our team remains available for guidance, optimization, and addressing any new challenges that arise.',
  },
];

const FAQ = () => {
  return (
    <section className="section bg-primary-light">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading mb-4 text-black">Frequently Asked Questions</h2>
          <p className="subheading max-w-2xl mx-auto">
            Find answers to common questions about our services
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Disclosure>
                {({ open }) => (
                  <div className="mb-4">
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-primary px-6 py-4 text-left text-white hover:bg-primary/90 transition-colors">
                      <span className="font-medium">{faq.question}</span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-secondary transition-transform`}
                      />
                    </Disclosure.Button>
                    <AnimatePresence>
                      {open && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Disclosure.Panel className="px-6 py-4 text-secondary-light bg-primary/50 rounded-b-lg">
                            {faq.answer}
                          </Disclosure.Panel>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </Disclosure>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 