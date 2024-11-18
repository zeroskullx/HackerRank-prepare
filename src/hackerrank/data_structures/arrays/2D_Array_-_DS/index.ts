export function hourglassSum(arr: number[][]): number {
  let maxSum = -Infinity; // Define o menor valor inicial possível para comparar.

  // Percorre as linhas e colunas, considerando as ampulhetas válidas
  for (let i = 0; i < 4; i++) {
    // Limite de 4 para evitar sair da matriz 6x6
    for (let j = 0; j < 4; j++) {
      // Limite de 4 para evitar sair da matriz 6x6
      // Calcula a soma da ampulheta
      const sum =
        arr[i][j] +
        arr[i][j + 1] +
        arr[i][j + 2] + // Linha superior
        arr[i + 1][j + 1] + // Meio
        arr[i + 2][j] +
        arr[i + 2][j + 1] +
        arr[i + 2][j + 2]; // Linha inferior

      // Atualiza a soma máxima, se necessário
      maxSum = Math.max(maxSum, sum);
    }
  }

  return maxSum;
}

// Exemplo de uso:
/**
 *  2 4 4
 *    2
 *  1 2 4
 *  Saída esperada: 19
 */
export const mock001 = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];
/**
 *  0 1 0
 *    1
 *  0 9 2
 *  Saída esperada: 13
 */
export const mock002 = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 9, 2, -4, -4, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, -1, -2, -4, 0],
];

/**
 *  0 4 3
 *    1
 *  8 6 6
 *  Saída esperada: 28
 */
export const mock003 = [
  [-9, -9, -9, 1, 1, 1],
  [0, -9, 0, 4, 3, 2],
  [-9, -9, -9, 1, 2, 3],
  [0, 0, 8, 6, 6, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

//console.log(hourglassSum(inputArray)); // Saída esperada: 19
