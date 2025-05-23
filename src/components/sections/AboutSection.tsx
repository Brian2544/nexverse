import React from 'react';

interface AboutSectionProps {
  badgeText?: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt?: string;
  storyTitle: string;
  story: string;
  highlights: { color: string; text: string }[];
  ctaText: string;
  ctaHref?: string;
  ctaSubText?: React.ReactNode;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  badgeText = 'ABOUT',
  title,
  subtitle,
  image,
  imageAlt = 'Team',
  storyTitle,
  story,
  highlights,
  ctaText,
  ctaHref = '#',
  ctaSubText,
}) => (
  <section className="relative w-full max-w-3xl mx-auto bg-gradient-to-b from-[#172554]/90 via-[#13151A]/95 to-[#090A0D]/95 border border-[#24304b] rounded-2xl shadow-2xl ring-glow shine overflow-hidden py-14 px-6 md:px-14 z-10 my-16">
    <div className="absolute top-0 left-0 w-full h-1.5 gradient-bar"></div>
    <div className="relative z-10 flex flex-col items-center text-center">
      <span className="inline-flex items-center px-3 py-1 bg-blue-700/10 text-blue-400 font-semibold text-xs rounded-full mb-4 pulse-animation">
        <svg className="w-3 h-3 mr-1.5" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"/></svg>
        {badgeText}
      </span>
      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-100 drop-shadow-lg mb-5">
        {title}
      </h2>
      <p className="text-base md:text-lg text-slate-300 max-w-2xl mb-8">
        {subtitle}
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Team Image or Logo */}
        <div className="flex-shrink-0 mb-6 md:mb-0">
          <img src={image} alt={imageAlt} className="w-28 h-28 rounded-2xl shadow-lg border-2 border-blue-700/30 object-cover bg-[#151725]/70" />
        </div>
        {/* About Details */}
        <div className="text-left md:text-left max-w-md">
          <h3 className="text-xl font-bold text-slate-100 mb-2 flex items-center">
            <svg className="w-5 h-5 text-blue-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8a9 9 0 100-18 9 9 0 000 18z"/>
            </svg>
            {storyTitle}
          </h3>
          <p className="text-slate-400 text-sm mb-5">
            {story}
          </p>
          <ul className="space-y-3">
            {highlights.map((h, i) => (
              <li key={i} className="flex items-center text-slate-300 text-sm">
                <span className={`w-2 h-2 rounded-full mr-2 ${h.color} ${h.color.includes('green') ? 'pulse-animation' : ''}`}></span>
                {h.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-10 flex flex-col items-center">
        <a href={ctaHref} className="inline-block px-7 py-3 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400 hover:from-blue-700 hover:to-indigo-500 text-white font-bold rounded-lg text-base shadow-lg focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-200">
          {ctaText}
        </a>
        {ctaSubText && <span className="mt-4 text-xs text-slate-400 text-center">{ctaSubText}</span>}
      </div>
    </div>
    <div className="absolute bottom-0 left-0 w-full h-1 gradient-bar"></div>
    <style>{`
      .ring-glow {
        box-shadow: 0 0 0 1.5px rgba(59,130,246,0.09), 0 12px 48px 0 rgba(59,130,246,0.07);
      }
      .shine::before {
        content: "";
        position: absolute;
        top: -30%;
        left: -30%;
        width: 160%;
        height: 160%;
        background: linear-gradient(120deg, rgba(59,130,246,0.08) 0%, rgba(255,255,255,0.10) 100%);
        filter: blur(36px);
        z-index: 0;
        border-radius: 32px;
        pointer-events: none;
      }
      .gradient-bar {
        background: linear-gradient(90deg, #2563eb 0%, #60a5fa 50%, #a5b4fc 100%);
      }
      .pulse-animation {
        animation: pulse 2s ease-in-out infinite;
      }
      @keyframes pulse {
        0%, 100% { opacity: 0.8; }
        50% { opacity: 1; }
      }
    `}</style>
  </section>
);

export default AboutSection; 