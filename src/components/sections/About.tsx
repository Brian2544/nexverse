import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">About Nexverse</h2>
            <p className="text-gray-600 mb-6">
              We are a leading consulting firm specializing in digital transformation and business strategy. 
              With over a decade of experience, we help organizations navigate the complexities of the digital age 
              and achieve sustainable growth.
            </p>
            <p className="text-gray-600 mb-8">
              Our team of experts combines deep industry knowledge with innovative thinking to deliver 
              solutions that drive real business value. We believe in building long-term partnerships 
              with our clients, working together to achieve their strategic objectives.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-3xl font-bold text-primary mb-2">10+</h3>
                <p className="text-gray-600">Years of Experience</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary mb-2">200+</h3>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary mb-2">50+</h3>
                <p className="text-gray-600">Expert Consultants</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary mb-2">98%</h3>
                <p className="text-gray-600">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
              <img
                src="/assets/images/about/team.avif"
                alt="Nexverse Team"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-white/90">
                To empower organizations with innovative solutions that drive sustainable growth and success.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 