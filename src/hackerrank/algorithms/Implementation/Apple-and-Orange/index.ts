/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s | ponto inicial da localização da casa de Sam
 *  2. INTEGER t | ponto final da localização da casa de Sam
 *  3. INTEGER a | localização da macieira
 *  4. INTEGER b | localização da laranjeira
 *  5. INTEGER_ARRAY apples | distâncias em que cada maçã cai da árvore
 *  6. INTEGER_ARRAY oranges | distâncias em que cada laranja cai da árvore
 */
function countApplesAndOranges(
  s: number,
  t: number,
  a: number,
  b: number,
  apples: number[],
  oranges: number[]
): void {
  // Write your code here
  const appleCount = apples.filter(
    (apple) => a + apple >= s && a + apple <= t
  ).length;

  const orangeCount = oranges.filter(
    (orange) => b + orange >= s && b + orange <= t
  ).length;

  console.log("Total de maça:", appleCount);

  console.log("Total de laranja:", orangeCount);

  return;
}
/**
 * Teste 1, esperado [1, 1]
 */
export const countApplesAndOrangesExec = () => {
  console.log("Teste 1");
  countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]); // [1, 1]

  console.log("Teste 2");
  countApplesAndOranges(7, 11, 5, 15, [2, 3, 1, 4], [5, -8, 7, -6]); // [3, 2]
};
