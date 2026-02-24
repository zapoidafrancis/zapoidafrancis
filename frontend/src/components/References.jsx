import React from 'react';
import { Quote, Download } from 'lucide-react';
import { references } from '../data/mock';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const References = () => {
  const handleDownload = (ref) => {
    // This will be implemented with backend later
    // For now, just show alert
    alert(`Download functionality will be available soon for ${ref.name}'s reference letter.`);
  };

  return (
    <section id="references" className="min-h-screen bg-[#0a0a0a] text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">References</h2>
          <p className="text-xl text-gray-400">What collaborators say about working with me</p>
        </div>

        {/* References Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {references.map((ref, idx) => (
            <Card
              key={idx}
              className="bg-[#1a1a1a] border-gray-800 hover:border-[#9370db] transition-all duration-300"
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-[#9370db] mb-6 opacity-60" />

                {/* Quote Text */}
                <p className="text-gray-300 leading-relaxed mb-8 italic">
                  "{ref.quote}"
                </p>

                {/* Reference Info */}
                <div className="mb-6">
                  <p className="font-semibold text-xl text-white mb-1">{ref.name}</p>
                  <p className="text-[#9370db] text-base">{ref.role}</p>
                  {ref.company && (
                    <p className="text-gray-500 text-sm mt-1">{ref.company}</p>
                  )}
                </div>

                {/* Download Button */}
                <Button
                  onClick={() => handleDownload(ref)}
                  className="w-full bg-[#90ee90] text-black hover:bg-[#7fdf7f] transition-colors"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Reference Letter
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;
