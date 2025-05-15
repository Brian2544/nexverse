import React from 'react';

const steps = [
  {
    title: 'Simple Booking',
    description:
      'Effortlessly schedule a consultation to discuss your business needs and challenges. We streamline the process to get started quickly.',
    image: '/assets/images/hero5.jpg',
    cta: 'Discover More',
  },
  {
    title: 'Tailored Strategy',
    description:
      'We analyze your goals and create a customized strategy designed to drive measurable success for your business needs and exploring more ideas.',
    image: '/assets/images/hero_strategy.jpg',
    cta: 'Discover More',
  },
  {
    title: 'Continuous Support',
    description:
      'From implementation to optimization, we provide ongoing guidance and adjustments to ensure long-term growth for you and you business with stratex.',
    image: '/assets/images/support.jpg',
    cta: 'Discover More',
  },
];

const Process = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-8">
          <span className="inline-flex items-center justify-center gap-2 mb-2 text-[#194D44] text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-[#194D44] inline-block"></span>
            How it works
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-normal mb-6 text-[#232323] leading-tight">
            A proven process to achieve<br className="hidden md:block" />
            your biggest goals
          </h2>
          <button className="bg-[#194D44] text-white rounded-full px-6 py-2 text-base font-medium flex items-center gap-2 mx-auto">
            Get in touch <span className="text-lg">→</span>
          </button>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-0.5 bg-[#D9E3E0] z-0" style={{transform: 'translateX(-50%)'}} />
          <div className="flex flex-col gap-16">
            {steps.map((step, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row items-center md:items-stretch md:gap-8 ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                {/* Image */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end md:pr-8 md:pl-0 mb-6 md:mb-0">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="rounded-[20px] w-[320px] h-[200px] object-cover"
                    style={{background: '#F5F5F5'}}
                  />
                </div>
                {/* Timeline number */}
                <div className="hidden md:flex flex-col items-center justify-center z-10">
                  <div className="w-10 h-10 rounded-full bg-white border-2 border-[#194D44] flex items-center justify-center text-[#194D44] font-semibold text-base shadow" style={{marginTop: idx === 0 ? '0' : '-1.25rem'}}>
                    {`0${idx + 1}`}
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="flex-1 w-0.5 bg-[#D9E3E0]" style={{minHeight: '60px'}}></div>
                  )}
                </div>
                {/* Text */}
                <div className="w-full md:w-1/2 flex flex-col justify-center md:justify-start md:pl-8 md:pr-0">
                  <h3 className="text-xl font-semibold text-[#232323] mb-2">{step.title}</h3>
                  <p className="text-[#232323] text-base mb-4">{step.description}</p>
                  <a href="#" className="text-[#194D44] text-base font-medium flex items-center gap-1 hover:underline">
                    {step.cta} <span>→</span>
                  </a>
                </div>
                {/* Mobile number badge */}
                <div className="md:hidden flex justify-center my-4">
                  <div className="w-10 h-10 rounded-full bg-white border-2 border-[#194D44] flex items-center justify-center text-[#194D44] font-semibold text-base shadow">
                    {`0${idx + 1}`}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process; 