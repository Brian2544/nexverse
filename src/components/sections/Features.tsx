import React from 'react';
import { motion } from 'framer-motion';
import { ChatBubbleLeftRightIcon, ArrowPathIcon, GlobeAltIcon, ClipboardDocumentListIcon, PhoneIcon, LinkIcon } from '@heroicons/react/24/outline';

const features = [
  {
    iconBg: 'bg-[#E6F4FF]',
    icon: <ChatBubbleLeftRightIcon className="w-7 h-7 text-[#009FE3]" />,
    title: 'Collaboration',
    points: [
      'Unlimited strategy sessions with your team',
      'Shareable workspaces for seamless teamwork',
      'Permission controls for secure access',
    ],
  },
  {
    iconBg: 'bg-[#FFF8E1]',
    icon: <ArrowPathIcon className="w-7 h-7 text-[#FFA500]" />,
    title: 'Automation',
    points: [
      'Automate repetitive business tasks',
      'Integrate with 200+ business tools',
      'Custom workflows for your unique needs',
    ],
  },
  {
    iconBg: 'bg-[#E8F5E9]',
    icon: <GlobeAltIcon className="w-7 h-7 text-[#00C853]" />,
    title: 'Security',
    points: [
      'Enterprise-grade data protection',
      'SSO & 2FA authentication',
      'Compliance with global standards',
    ],
  },
  {
    iconBg: 'bg-[#F3E8FF]',
    icon: <ClipboardDocumentListIcon className="w-7 h-7 text-[#7B6EF6]" />,
    title: 'Insightful Analytics',
    points: [
      'Real-time performance dashboards',
      'Actionable business intelligence',
      'Track ROI and key metrics easily',
    ],
  },
  {
    iconBg: 'bg-[#FFF3E0]',
    icon: <PhoneIcon className="w-7 h-7 text-[#FF7043]" />,
    title: 'Dedicated Support',
    points: [
      '24/7 expert assistance',
      'Personalized onboarding',
      'Proactive issue resolution',
    ],
  },
  {
    iconBg: 'bg-[#E0F7FA]',
    icon: <LinkIcon className="w-7 h-7 text-[#26C6DA]" />,
    title: 'Seamless Integration',
    points: [
      'Connect with your favorite tools',
      'Effortless data migration',
      'Unified workflow experience',
    ],
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white min-h-[400px] w-full z-0 scroll-mt-20" style={{ contain: 'layout paint', backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center justify-center gap-2 mb-2 pb-3 font-bold tracking-wide text-[#0e254a] text-lg">
            <span className="w-2 h-2 rounded-full bg-[#0e254a] inline-block"></span>
            <span className="text-[#0e254a] text-lg font-bold">Features</span>
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-900 leading-tight">
            Key benefits that set us apart<br className="hidden md:block" />
            from other firms
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, idx) => {
            // Determine hover border color based on icon color
            let hoverBorder = '';
            if (feature.icon.props.className.includes('#009FE3')) hoverBorder = 'hover:border-[#009FE3]';
            else if (feature.icon.props.className.includes('#FFA500')) hoverBorder = 'hover:border-[#FFA500]';
            else if (feature.icon.props.className.includes('#00C853')) hoverBorder = 'hover:border-[#00C853]';
            else if (feature.icon.props.className.includes('#7B6EF6')) hoverBorder = 'hover:border-[#7B6EF6]';
            else if (feature.icon.props.className.includes('#FF7043')) hoverBorder = 'hover:border-[#FF7043]';
            else if (feature.icon.props.className.includes('#26C6DA')) hoverBorder = 'hover:border-[#26C6DA]';
            return (
            <motion.div
              key={feature.title}
                className={`flex flex-col items-start text-left gap-6 bg-[#F7F8FA] rounded-2xl p-7 min-h-[260px] shadow-lg border border-[#F0F1F3] transition-colors duration-300 ${hoverBorder}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.12 }}
              whileHover={{ scale: 1.045, boxShadow: '0 8px 32px 0 rgba(0,159,227,0.10), 0 4px 16px 0 rgba(255,165,0,0.10)' }}
            >
                <span className={`${feature.iconBg} rounded-xl p-3 flex items-center justify-center mb-2`}>
                {feature.icon}
              </span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <ul className="flex flex-col gap-2">
                  {feature.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#4B5563] text-base">
                      <span className="mt-1">
                        <svg width="18" height="18" fill="none" viewBox="0 0 18 18"><path d="M6.75 12.75L3.75 9.75L2.75 10.75L6.75 14.75L15.25 6.25L14.25 5.25L6.75 12.75Z" fill={feature.icon.props.className.includes('#009FE3') ? '#009FE3' : feature.icon.props.className.includes('#FFA500') ? '#FFA500' : feature.icon.props.className.includes('#00C853') ? '#00C853' : feature.icon.props.className.includes('#7B6EF6') ? '#7B6EF6' : feature.icon.props.className.includes('#FF7043') ? '#FF7043' : '#26C6DA'} /></svg>
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features; 