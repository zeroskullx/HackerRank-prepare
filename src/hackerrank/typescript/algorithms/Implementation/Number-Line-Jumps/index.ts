/*
 * Complete the 'kangaroo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1 | posição inicial do canguru 1
 *  2. INTEGER v1 | metros por salto do canguru 1
 *  3. INTEGER x2 | posição inicial do canguru 2
 *  4. INTEGER v2 | metros por salto do canguru 2
 */

export function kangaroo(
  x1: number,
  v1: number,
  x2: number,
  v2: number
): string {
  // Write your code here

  if (v1 === v2) {
    return "NO";
  }

  const numberOfJumps = (x2 - x1) / (v1 - v2);

  if (numberOfJumps >= 0 && Number.isInteger(numberOfJumps)) {
    return "YES";
  }

  return "NO";
}
