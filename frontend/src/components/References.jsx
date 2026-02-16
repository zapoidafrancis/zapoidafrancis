import React from 'react';
import { Quote } from 'lucide-react';
import { references } from '../data/mock';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

const References = () => {
  return (
    <section id="references" className="min-h-screen bg-[#0a0a0a] text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">References</h2>
          <p className="text-xl text-gray-400">What collaborators say about working with me</p>
        </div>

        {/* References Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {references.map((ref, idx) => (
            <Card
              key={idx}
              className="bg-[#1a1a1a] border-gray-800 hover:border-[#d4af37] transition-all duration-300 hover:transform hover:scale-105"
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-[#d4af37] mb-6 opacity-60" />

                {/* Quote Text */}
                <p className="text-gray-300 leading-relaxed mb-8 italic">
                  "{ref.quote}"
                </p>

                {/* Reference Info */}
                <div className="flex items-center gap-4">
                  <Avatar className="w-14 h-14 border-2 border-[#d4af37]">
                    <AvatarImage src={ref.image} alt={ref.name} />
                    <AvatarFallback className="bg-[#d4af37] text-black font-semibold">
                      {ref.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-lg">{ref.name}</p>
                    <p className="text-[#d4af37] text-sm">{ref.role}</p>
                    <p className="text-gray-500 text-sm">{ref.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;
