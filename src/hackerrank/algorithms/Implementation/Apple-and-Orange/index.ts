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
export function countApplesAndOranges(
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

  console.log(appleCount);

  console.log(orangeCount);

  return;
}
