import React from 'react';
import { motion } from 'framer-motion';

const clients = [
  { src: '/assets/images/clients/client1.avif', alt: 'Client 1' },
  { src: '/assets/images/clients/client2.avif', alt: 'Client 2' },
  { src: '/assets/images/clients/client3.avif', alt: 'Client 3' },
  { src: '/assets/images/clients/client4.avif', alt: 'Client 4' },
  { src: '/assets/images/clients/client5.avif', alt: 'Client 5' },
  { src: '/assets/images/clients/client6.avif', alt: 'Client 6' },
];

const ClientLogos = () => {
  return (
    <section className="py-16 bg-primary-light">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-semibold text-black mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-secondary-light">
            We partner with forward-thinking organizations worldwide
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="flex space-x-12 animate-marquee">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={client.src}
                  alt={client.alt}
                  className="h-12 w-auto filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos; 