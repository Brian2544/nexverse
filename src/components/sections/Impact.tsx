import React from 'react';
import OptimizedImage from '../common/OptimizedImage';

const statsLeft = [
  { label: 'Revenue', value: '$7M+' },
  { label: 'Growth', value: '72%' },
  { label: 'Skills', value: '65%' },
];
const statsRight = [
  { label: 'Impact', value: '78%' },
  { label: 'Designers', value: '1%' },
  { label: 'Consultants', value: '10+' },
];

const Impact: React.FC = () => {
  return (
    <section id="impact" className="py-20 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <span className="inline-flex items-center justify-center gap-2 mb-2 pb-3 font-bold tracking-wide text-[#0F2D52] text-lg">
            <span className="w-2 h-2 rounded-full bg-[#0F2D52] inline-block" aria-hidden="true"></span>
            <span className="text-[#0F2D52] text-lg font-bold">Impact</span>
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-900 leading-tight">
            Real results that drive lasting<br className="hidden md:block" />
            impact for everyone
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-4">
            We deliver tailored strategies, innovative solutions,<br />
            and dedicated support to drive lasting growth
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between md:gap-0 relative">
            {/* Left Stats */}
            <div className="hidden md:flex flex-col gap-16 items-end flex-1 pr-2">
              {statsLeft.map((stat, idx) => (
                <div key={stat.label} className="flex items-center min-w-[260px] relative">
                  <span className="bg-gradient-to-r from-[#009FE3] to-[#FFA500] text-white font-bold px-6 py-2 rounded-full text-lg shadow-md min-w-[90px] text-center mr-3">
                    {stat.value}
                  </span>
                  <span className="text-gray-800 text-lg font-semibold whitespace-nowrap mr-3">{stat.label}</span>
                  {/* Line from label to image */}
                  <span className="flex-1 h-0.5 bg-gray-200" style={{ minWidth: '40px', maxWidth: '120px' }} aria-hidden="true"></span>
                </div>
              ))}
            </div>
            {/* Center Image */}
            <div className="z-10 flex-shrink-0 flex flex-col items-center mx-0 md:mx-12 my-8 md:my-0">
              <div className="transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl rounded-[32px]">
                <OptimizedImage
                  src="/assets/images/ceo.png"
                  alt="CEO"
                  className="rounded-[32px] w-[340px] h-[380px] mx-auto shadow-lg object-cover"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjgyPj4+Oj4+Oj4+Oj4+Oj4+Oj4+Oj4+Oj7/2wBDAR4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
            </div>
            {/* Right Stats */}
            <div className="hidden md:flex flex-col gap-16 items-start flex-1 pl-2">
              {statsRight.map((stat, idx) => (
                <div key={stat.label} className="flex items-center min-w-[260px] relative justify-end">
                  {/* Line from label to image */}
                  <span className="flex-1 h-0.5 bg-gray-200" style={{ minWidth: '40px', maxWidth: '120px' }} aria-hidden="true"></span>
                  <span className="text-gray-800 text-lg font-semibold whitespace-nowrap ml-3">{stat.label}</span>
                  <span className="bg-gradient-to-r from-[#009FE3] to-[#FFA500] text-white font-bold px-6 py-2 rounded-full text-lg shadow-md min-w-[90px] text-center ml-3">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
            {/* Mobile Stats */}
            <div className="flex md:hidden flex-col w-full gap-6 mt-8">
              {[...statsLeft, ...statsRight].map((stat, idx) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-3 justify-center"
                >
                  <span className="bg-gradient-to-r from-[#009FE3] to-[#FFA500] text-white font-bold px-6 py-2 rounded-full text-lg shadow-md min-w-[90px] text-center">
                    {stat.value}
                  </span>
                  <span className="text-gray-800 text-lg font-semibold">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact; 