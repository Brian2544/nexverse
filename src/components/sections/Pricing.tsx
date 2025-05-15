import React from 'react';
import { motion } from 'framer-motion';

const pricingTiers = [
  {
    title: 'Starter',
    price: '$999',
    description: 'Perfect for small businesses and startups',
    features: [
      'Initial Business Assessment',
      'Basic Strategy Development',
      'Monthly Progress Reports',
      'Email Support',
      '2 Strategy Sessions',
    ],
  },
  {
    title: 'Growth',
    price: '$2,499',
    description: 'Ideal for growing businesses',
    features: [
      'Comprehensive Business Analysis',
      'Advanced Strategy Development',
      'Weekly Progress Reports',
      'Priority Support',
      '4 Strategy Sessions',
      'Process Optimization',
      'Team Training',
    ],
    popular: true,
  },
  {
    title: 'Enterprise',
    price: 'Custom',
    description: 'Tailored solutions for large organizations',
    features: [
      'Full Business Transformation',
      'Custom Strategy Development',
      'Real-time Progress Monitoring',
      '24/7 Dedicated Support',
      'Unlimited Strategy Sessions',
      'Complete Process Overhaul',
      'Executive Coaching',
      'Custom Training Programs',
    ],
  },
];

const Pricing = () => {
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
          <h2 className="heading mb-4 text-black">Pricing Plans</h2>
          <p className="subheading max-w-2xl mx-auto">
            Choose the perfect plan for your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative bg-primary p-8 rounded-lg ${
                tier.popular
                  ? 'ring-2 ring-secondary transform scale-105'
                  : ''
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-primary px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {tier.title}
                </h3>
                <div className="text-4xl font-bold text-secondary mb-2">
                  {tier.price}
                </div>
                <p className="text-secondary-light">{tier.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-white">
                    <svg
                      className="w-5 h-5 text-secondary mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-lg font-medium transition-colors ${
                  tier.popular
                    ? 'bg-secondary text-primary hover:bg-secondary/90'
                    : 'bg-primary-light text-white hover:bg-primary'
                }`}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing; 