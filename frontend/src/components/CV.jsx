import React from 'react';
import { Briefcase, GraduationCap, Download } from 'lucide-react';
import { cvData } from '../data/mock';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const CV = () => {
  const handleDownloadCV = () => {
    // This will be implemented with backend later
    alert('Download functionality will be available soon for the full CV PDF.');
  };

  return (
    <section id="cv" className="min-h-screen bg-[#1a1a1a] text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">Curriculum Vitae</h2>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-8 h-8 text-[#9370db]" />
            <h3 className="text-3xl font-semibold">Professional Experience</h3>
          </div>
          <div className="space-y-6">
            {cvData.experience.map((exp, idx) => (
              <Card key={idx} className="bg-[#0a0a0a] border-gray-800">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <CardTitle className="text-2xl text-white">{exp.title}</CardTitle>
                    <Badge className="bg-[#90ee90] text-black w-fit">{exp.period}</Badge>
                  </div>
                  <p className="text-[#9370db] text-lg">{exp.company}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-8 h-8 text-[#90ee90]" />
            <h3 className="text-3xl font-semibold">Education</h3>
          </div>
          <div className="space-y-6">
            {cvData.education.map((edu, idx) => (
              <Card key={idx} className="bg-[#0a0a0a] border-gray-800">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <CardTitle className="text-2xl text-white">{edu.degree}</CardTitle>
                    <Badge className="bg-[#9370db] text-white w-fit">{edu.year}</Badge>
                  </div>
                  <p className="text-[#90ee90] text-lg">{edu.institution}</p>
                </CardHeader>
                {edu.details && (
                  <CardContent>
                    <p className="text-gray-300 leading-relaxed">{edu.details}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Download CV Button */}
        <div className="flex justify-center">
          <Button
            onClick={handleDownloadCV}
            className="bg-[#9370db] text-white hover:bg-[#8060c0] transition-colors px-8 py-6 text-lg"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Full CV (PDF)
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CV;
