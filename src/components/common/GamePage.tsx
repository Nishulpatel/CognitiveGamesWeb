import React from "react";

interface GamePageProps {
  title: string;
  level: number;
  timer: string | number;
  children: React.ReactNode;
  extraHeaderContent?: React.ReactNode;
}

const GamePage: React.FC<GamePageProps> = ({
  title,
  level,
  timer,
  children,
  extraHeaderContent,
}) => {
  return (
    <div className="mt-8 w-full max-w-2xl mx-auto flex flex-col items-center justify-center bg-gradient-to-br">
      <div className="w-full max-w-2xl flex justify-between items-center px-8 mb-8">
        <div className="flex items-center space-x-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/30">
            <span className="text-gray-700 font-semibold text-lg">Level {level}</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/30">
            <span className="text-gray-700 font-mono text-lg font-semibold">{timer}</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/30">
            <span className="text-gray-700 font-semibold text-lg">{title}</span>
          </div>
          {extraHeaderContent}
        </div>
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
};

export default GamePage;
