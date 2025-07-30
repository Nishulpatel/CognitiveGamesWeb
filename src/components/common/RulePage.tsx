'use client';

import { useState } from 'react';
import { Play, BookOpen, ChevronRight } from 'lucide-react';

export interface RuleData {
  title: string;
  description: string;
  howToPlay: string[];
  playLink: string;
}

export default function RulePage({ data }: { data: RuleData }) {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#efe9d5' }}>
      <div className="max-w-4xl mx-auto px-6 py-12">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#3B3024] mb-4">
            {data.title}
          </h1>
        </div>

        <div className="rounded-xl shadow-lg border border-[#D6CDBE] overflow-hidden bg-white">

          <div className="p-8 border-b border-[#D6CDBE]">
            <p className="text-[#756b60] text-lg leading-relaxed text-center">
              {data.description}
            </p>
          </div>

          <div className="p-8">
            <div className="flex items-center mb-6">
              <BookOpen className="text-[#C08457] mr-3" size={24} />
              <h2 className="text-2xl font-semibold text-[#3B3024]">
                How to Play
              </h2>
            </div>

            <div className="space-y-3">
              {data.howToPlay.map((step, index) => (
                <div
                  key={index}
                  className={`group p-4 rounded-lg border transition-all duration-200 cursor-pointer ${
                    hoveredStep === index
                      ? 'border-[#C08457] bg-[#f5f0e3]'
                      : 'border-[#D6CDBE] hover:border-[#C08457] hover:bg-[#f5f0e3]'
                  }`}
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-semibold transition-colors duration-200 ${
                        hoveredStep === index
                          ? 'bg-[#8B5E3C] text-white'
                          : 'bg-[#D6CDBE] text-[#3B3024]'
                      }`}
                    >
                      {index + 1}
                    </div>
                    <p className="text-[#3B3024] flex-1 leading-relaxed">{step}</p>
                    <ChevronRight
                      className={`transition-transform duration-200 ${
                        hoveredStep === index ? 'translate-x-1 text-[#C08457]' : 'text-[#B0AFA5]'
                      }`}
                      size={18}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <a
                href={data.playLink}
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-[#A35C2D] text-white rounded-lg font-semibold shadow-md hover:bg-[#8C471B] hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                <Play className="mr-2" size={20} />
                Start Playing
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
