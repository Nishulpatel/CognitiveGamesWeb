export type Symbol = string;

export interface GridCell {
  value: Symbol | null;
  row: number;
  col: number;
}

export interface Puzzle {
  grid: (Symbol | null)[][];
  emptyCells: { row: number; col: number }[];
  targetCell: { row: number; col: number };
  answer: Symbol;
  options: Symbol[];
}

const SYMBOLS: Symbol[] = [
  "➕", "⭕", "△", "⬜", "★", "♦", "🔷", "🌟", "🔶", "🟡", "🟢", "🔺"
];

// Generate a Latin square (no repeats in row/col)
function generateLatinSquare(size: number, symbols: Symbol[]): (Symbol | null)[][] {
  const grid: (Symbol | null)[][] = Array.from({ length: size }, () => Array(size).fill(null));
  function isSafe(row: number, col: number, symbol: Symbol): boolean {
    for (let i = 0; i < size; i++) {
      if (grid[row][i] === symbol || grid[i][col] === symbol) return false;
    }
    return true;
  }
  function fill(row: number, col: number): boolean {
    if (row === size) return true;
    const nextRow = col === size - 1 ? row + 1 : row;
    const nextCol = col === size - 1 ? 0 : col + 1;
    for (const symbol of symbols) {
      if (isSafe(row, col, symbol)) {
        grid[row][col] = symbol;
        if (fill(nextRow, nextCol)) return true;
        grid[row][col] = null;
      }
    }
    return false;
  }
  fill(0, 0);
  return grid;
}

export function generatePuzzle(level: number): Puzzle {
  const size = Math.min(3 + Math.floor(level / 2), 6); // 3x3 to 6x6
  const availableSymbols = SYMBOLS.slice(0, size);
  const grid = generateLatinSquare(size, availableSymbols);

  // Decide how many cells to remove (2-4 for small, up to 6 for large)
  const numToRemove = Math.min(size + 1, Math.floor(size * 1.5));
  const allCells = [];
  for (let r = 0; r < size; r++) for (let c = 0; c < size; c++) allCells.push({ row: r, col: c });
  // Shuffle and pick cells to remove
  const shuffled = allCells.sort(() => Math.random() - 0.5);
  const emptyCells = shuffled.slice(0, numToRemove);
  // Pick one as the target
  const targetCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
  const answer = grid[targetCell.row][targetCell.col]!;
  // Remove all selected cells
  for (const cell of emptyCells) {
    grid[cell.row][cell.col] = null;
  }
  // Generate options (correct + 3 wrong)
  const options = [
    answer,
    ...availableSymbols.filter(s => s !== answer).sort(() => Math.random() - 0.5).slice(0, 3)
  ].sort(() => Math.random() - 0.5);
  return { grid, emptyCells, targetCell, answer, options };
}

export function checkAnswer(puzzle: Puzzle, symbol: Symbol): boolean {
  return symbol === puzzle.answer;
}
