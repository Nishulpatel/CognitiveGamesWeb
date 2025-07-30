import { SwitchPuzzle } from "@/app/games/(capgemini)/Switchchallenge/gameLogic";
import React from "react";

interface Props {
  puzzle: SwitchPuzzle | null;
  isAnswered: boolean;
  isCorrect: boolean | null;
  selected: string | null;
  handleSelect: (op: string) => void;
  timeLeft: number;
  gameStatus: "playing" | "results";
  correct: number;
  resetGame: () => void;
}

const SwitchChallengeUI: React.FC<Props> = ({
  puzzle, isAnswered, isCorrect, selected, handleSelect,
  timeLeft, gameStatus, correct, resetGame
}) => {
  if (!puzzle) return null;
  const options: string[] = puzzle.options;
  return (
    <>
      {gameStatus === "results" ? (
        <div className="text-center space-y-8">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Session Complete!</h2>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-emerald-50 p-6 rounded-2xl border-2 border-emerald-200 shadow-lg">
                <div className="text-emerald-600 text-sm font-semibold mb-2">Correct</div>
                <div className="text-3xl font-bold text-emerald-700">{correct}</div>
              </div>
            </div>
            <button
              onClick={resetGame}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              Play Again
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="mb-4 text-center">
            <div>Input: {puzzle.input.join(" ")}</div>
            {puzzle.layers === 2 && (
              <div>First Operator: {puzzle.operators[0].join(" ")}</div>
            )}
            <div>Output: {puzzle.output.join(" ")}</div>
          </div>
          <div className="mb-4 text-center">Which operator produces this output?</div>
          <div className="flex gap-4 justify-center">
            {options.map((op: string, idx: number) => (
              <button
                key={op}
                onClick={() => handleSelect(op)}
                disabled={isAnswered}
                className={`px-4 py-2 border rounded ${selected === op && isAnswered ? (isCorrect ? 'bg-green-200' : 'bg-red-200') : 'bg-white'}`}
              >
                {op}
              </button>
            ))}
          </div>
          <div className="mt-4 text-center text-gray-500">Time left: {timeLeft}s</div>
        </div>
      )}
    </>
  );
};

export default SwitchChallengeUI;