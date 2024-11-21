function getTotalX(a: number[], b: number[]): number {
  const gcd = (x: number, y: number): number => (y === 0 ? x : gcd(y, x % y));

  const lcm = (x: number, y: number): number => (x * y) / gcd(x, y);

  const lcmOfA = a.reduce((acc, val) => lcm(acc, val));

  const gcdOfB = b.reduce((acc, val) => gcd(acc, val));

  let count = 0;

  for (let i = lcmOfA; i <= gcdOfB; i += lcmOfA) {
    if (gcdOfB % i === 0) {
      count++;
    }
  }

  return count;
}

export const getTotalXExec = () => {
  // Testando
  const a1 = [2, 4];
  const b1 = [16, 32, 96];
  console.log(getTotalX(a1, b1)); // Saída: 3

  const a2 = [3, 4];
  const b2 = [24, 48];
  console.log(getTotalX(a2, b2)); // Saída: 2
};
