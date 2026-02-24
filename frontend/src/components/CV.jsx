import React from 'react';
import { Briefcase, GraduationCap, Download, MapPin } from 'lucide-react';
import { cvData } from '../data/mock';

const CV = () => {
  const handleDownloadCV = () => {
    alert('Download functionality will be available soon for the full CV PDF.');
  };

  return (
    <section id="cv" className="min-h-screen bg-[#141414] text-[#f0f0e8] py-32 px-6 md:px-12 noise-bg relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <p className="font-mono text-[#00ff88] text-sm tracking-[0.3em] uppercase mb-4">Background</p>
          <h2 
            className="font-display text-6xl md:text-7xl lg:text-8xl tracking-tight"
            data-testid="cv-title"
          >
            Curriculum Vitae
          </h2>
          <div className="divider w-32 mt-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Experience Section */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 border-2 border-[#a855f7] flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-[#a855f7]" />
              </div>
              <h3 className="font-display text-3xl">Experience</h3>
            </div>
            
            <div className="space-y-12">
              {cvData.experience.map((exp, idx) => (
                <div 
                  key={idx} 
                  className="relative pl-8 border-l-2 border-[#2a2a2a] hover:border-[#a855f7] transition-colors duration-300 group"
                  data-testid={`experience-${idx}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[-9px] top-0 w-4 h-4 bg-[#141414] border-2 border-[#2a2a2a] group-hover:border-[#a855f7] group-hover:bg-[#a855f7] transition-all duration-300"></div>
                  
                  <div className="mb-3">
                    <span className="font-mono text-xs text-[#00ff88] tracking-wider">{exp.period}</span>
                  </div>
                  <h4 className="text-xl font-semibold text-[#f0f0e8] mb-2">{exp.title}</h4>
                  <p className="text-[#a855f7] font-mono text-sm mb-4">{exp.company}</p>
                  <p className="text-[#a0a0a0] text-sm leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 border-2 border-[#a855f7] flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-[#a855f7]" />
              </div>
              <h3 className="font-display text-3xl">Education</h3>
            </div>
            
            <div className="space-y-10">
              {cvData.education.map((edu, idx) => (
                <div 
                  key={idx} 
                  className="bg-[#1a1a1a] border-2 border-[#2a2a2a] p-6 card-hover"
                  data-testid={`education-${idx}`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-4 h-4 text-[#666]" />
                    <span className="font-mono text-xs text-[#00ff88] tracking-wider">{edu.year}</span>
                  </div>
                  <h4 className="text-xl font-semibold text-[#f0f0e8] mb-2">{edu.degree}</h4>
                  <p className="text-[#a855f7] font-mono text-sm mb-4">{edu.institution}</p>
                  {edu.details && (
                    <p className="text-[#a0a0a0] text-sm leading-relaxed border-t border-[#2a2a2a] pt-4 mt-4">
                      {edu.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Download CV Button */}
        <div className="flex justify-center mt-20">
          <button
            onClick={handleDownloadCV}
            className="btn-filled px-10 py-4 text-sm flex items-center gap-3"
            data-testid="download-cv-btn"
          >
            <Download className="w-5 h-5" />
            Download Full CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default CV;
