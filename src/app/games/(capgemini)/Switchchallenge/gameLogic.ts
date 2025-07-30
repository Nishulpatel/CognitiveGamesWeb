import { Puzzle, Symbol } from "@/types/game";
import { shuffle } from "@/utils/gameUtils";

const SYMBOLS: Symbol[] = ["A", "B", "C", "D", "E", "F", "G", "H"];

export interface SwitchPuzzle extends Puzzle {
  input: Symbol[];
  output: Symbol[];
  operators: number[][];
  correctOperatorIndex: number;
  layers: number; // 1 or 2
  options: string[]; // Add this line for linter compatibility
}

function randomOperator(): number[] {
  // Returns a random permutation of [1,2,3,4]
  return shuffle([1, 2, 3, 4]);
}

function applyOperator(input: Symbol[], operator: number[]): Symbol[] {
  // operator: e.g. [3,1,4,2] means output[0]=input[2], output[1]=input[0], etc.
  return operator.map(idx => input[idx - 1]);
}

export function generateSwitchPuzzle(level: number): SwitchPuzzle {
  const layers = level < 3 ? 1 : 2; // Adaptive difficulty
  const input = shuffle(SYMBOLS).slice(0, 4);
  const operator1 = randomOperator();
  let output = applyOperator(input, operator1);

  let operator2: number[] | null = null;
  if (layers === 2) {
    operator2 = randomOperator();
    output = applyOperator(output, operator2);
  }

  // Generate options (correct + 3 wrong)
  const correctOperator = layers === 1 ? operator1 : operator2!;
  let options: number[][] = [correctOperator];
  while (options.length < 4) {
    const op = randomOperator();
    if (!options.some(o => o.join() === op.join())) options.push(op);
  }
  options = shuffle(options);

  return {
    grid: [], // not used
    emptyCells: [],
    targetCell: { row: 0, col: 0 },
    answer: correctOperator.map(String).join(" "),
    options: options.map(op => op.map(String).join(" ")), // string[]
    input,
    output,
    operators: layers === 1 ? [] : [operator1],
    correctOperatorIndex: options.findIndex(op => op.join() === correctOperator.join()),
    layers,
  };
}

export function checkSwitchAnswer(puzzle: SwitchPuzzle, selected: string): boolean {
  return selected === puzzle.answer;
}