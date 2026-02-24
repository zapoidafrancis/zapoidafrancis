import React from 'react';
import { Download } from 'lucide-react';
import { references } from '../data/mock';

const References = () => {
  const handleDownload = (ref) => {
    alert(`Download functionality will be available soon for ${ref.name}'s reference letter.`);
  };

  return (
    <section id="references" className="min-h-screen bg-[#0d0d0d] text-[#f0f0e8] py-32 px-6 md:px-12 noise-bg relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <p className="font-mono text-[#00ff88] text-sm tracking-[0.3em] uppercase mb-4">Testimonials</p>
          <h2 
            className="font-display text-6xl md:text-7xl lg:text-8xl tracking-tight"
            data-testid="references-title"
          >
            References
          </h2>
          <div className="w-32 h-0.5 bg-gradient-to-r from-[#a855f7] to-transparent mt-8"></div>
        </div>

        {/* References Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {references.map((ref, idx) => (
            <div
              key={idx}
              className="relative bg-[#141414] border-2 border-[#2a2a2a] p-8 card-hover group"
              data-testid={`reference-card-${idx}`}
            >
              {/* Large quote mark */}
              <div className="absolute top-4 left-6 font-display text-8xl text-[#a855f7] opacity-10 leading-none select-none">
                "
              </div>

              {/* Quote Text */}
              <p className="text-[#a0a0a0] leading-relaxed mb-8 relative z-10 text-lg italic">
                "{ref.quote}"
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-[#2a2a2a] mb-6"></div>

              {/* Reference Info */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-semibold text-xl text-[#f0f0e8] mb-1">{ref.name}</p>
                  <p className="text-[#a855f7] font-mono text-sm">{ref.role}</p>
                  {ref.company && (
                    <p className="text-[#666] text-sm mt-1">{ref.company}</p>
                  )}
                  <p className="text-[#00ff88] font-mono text-xs mt-2">{ref.date}</p>
                </div>

                {/* Download Button */}
                <button
                  onClick={() => handleDownload(ref)}
                  className="w-12 h-12 border-2 border-[#2a2a2a] flex items-center justify-center hover:border-[#a855f7] hover:bg-[#a855f7] hover:text-[#0d0d0d] transition-all duration-300 flex-shrink-0"
                  title="Download Reference Letter"
                  data-testid={`download-ref-${idx}`}
                >
                  <Download className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;
