import React, { useState } from 'react';
import { Briefcase, GraduationCap, Download, MapPin, X, Eye } from 'lucide-react';
import { cvData } from '../data/mock';

const CV = () => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <section id="cv" className="min-h-screen bg-[#141414] text-[#f0f0e8] py-32 px-6 md:px-12 noise-bg relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <h2 
            className="font-display text-6xl md:text-7xl lg:text-8xl tracking-tight"
            data-testid="cv-title"
          >
            Curriculum Vitae
          </h2>
          <div className="w-32 h-0.5 bg-gradient-to-r from-[#a855f7] to-transparent mt-8"></div>
        </div>

        {/* Experience Section */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 border-2 border-[#a855f7] flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-[#a855f7]" />
            </div>
            <h3 className="font-display text-3xl">Experience</h3>
          </div>
          
          <div>
            {cvData.experience.map((exp, idx) => (
              <div 
                key={idx} 
                className="relative pl-8 border-l-2 border-[#2a2a2a] hover:border-[#a855f7] transition-colors duration-300 group mb-12 last:mb-0"
                data-testid={`experience-${idx}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-[-9px] top-0 w-4 h-4 bg-[#141414] border-2 border-[#2a2a2a] group-hover:border-[#a855f7] group-hover:bg-[#a855f7] transition-all duration-300"></div>
                
                <div className="space-y-0.5">
                  <span className="text-xs text-[#a855f7] tracking-wider block">{exp.period}</span>
                  <h4 className="text-xl font-semibold text-[#f0f0e8]">{exp.title}</h4>
                  <p className="text-[#a855f7] text-sm">{exp.company}</p>
                  <p className="text-[#a0a0a0] text-sm leading-relaxed pt-1">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-20">
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
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-[#666]" />
                  <span className="text-xs text-[#a855f7] tracking-wider">{edu.year}</span>
                </div>
                <h4 className="text-xl font-semibold text-[#f0f0e8]">{edu.degree}</h4>
                <p className="text-[#a855f7] text-sm mt-1">{edu.institution}</p>
                {edu.details && (
                  <p className="text-[#a0a0a0] text-sm leading-relaxed border-t border-[#2a2a2a] pt-4 mt-4">
                    {edu.details}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* View CV Button */}
        <div className="flex justify-center">
          <button
            onClick={() => setShowPreview(true)}
            className="btn-filled px-10 py-4 text-sm flex items-center gap-3"
            data-testid="view-cv-btn"
          >
            <Eye className="w-5 h-5" />
            View Full CV
          </button>
        </div>
      </div>

      {/* CV Preview Modal */}
      {showPreview && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          onClick={() => setShowPreview(false)}
        >
          {/* Backdrop with blur */}
          <div className="absolute inset-0 bg-[#0d0d0d]/80 backdrop-blur-md"></div>
          
          {/* Modal Content */}
          <div 
            className="relative z-10 w-full max-w-4xl max-h-[90vh] flex flex-col bg-[#141414] border-2 border-[#2a2a2a]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-[#2a2a2a]">
              <h3 className="font-display text-xl text-[#f0f0e8]">Curriculum Vitae</h3>
              <button 
                onClick={() => setShowPreview(false)}
                className="text-[#a0a0a0] hover:text-[#a855f7] transition-colors"
                data-testid="close-cv-modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* PDF Viewer */}
            <div className="flex-1 overflow-hidden bg-white">
              <iframe
                src={`${cvData.pdfUrl}#toolbar=0`}
                className="w-full h-[60vh] md:h-[70vh] bg-white"
                title="CV Preview"
              />
            </div>
            
            {/* Modal Footer */}
            <div className="p-4 border-t border-[#2a2a2a] flex justify-center">
              <a
                href={cvData.pdfUrl}
                download="CV_Francesco_M_De_Lucia.pdf"
                className="btn-filled px-8 py-3 text-sm flex items-center gap-2"
                data-testid="download-cv-btn"
              >
                <Download className="w-5 h-5" />
                Download PDF
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CV;
