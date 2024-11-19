function arrayManipulation(n: number, queries: number[][]): number {
  // Cria um array com zeros, com tamanho n+1 para lidar com os índices de forma eficiente
  const array = new Array(n + 1).fill(0);

  // Processa cada consulta
  for (const [a, b, k] of queries) {
    // Adiciona k no início do intervalo
    array[a - 1] += k;
    // Subtrai k logo após o final do intervalo
    array[b] -= k;
  }

  // Calcula o valor máximo no array resultante
  let max = 0;
  let current = 0;
  for (const value of array) {
    current += value;
    if (current > max) {
      max = current;
    }
  }

  return max;
}

export const arrayManipulationTest = () => {
  const n1 = 5;
  const queries1 = [
    [1, 2, 100],
    [2, 5, 100],
    [3, 4, 100],
  ];

  const result = arrayManipulation(n1, queries1);
  console.log("Result 1:", result);

  const n2 = 10;
  const queries2 = [
    [1, 5, 3],
    [4, 8, 7],
    [6, 9, 1],
  ];

  const result2 = arrayManipulation(n2, queries2);
  console.log("Result 2:", result2);

  const n3 = 10;
  const queries3 = [
    [2, 6, 8],
    [3, 5, 7],
    [1, 8, 1],
    [5, 9, 15],
  ];

  const result3 = arrayManipulation(n3, queries3);
  console.log("Result 3:", result3);
};

//-------------------------------------------------------------------

//BONUS
function arrayManipulationFromQueries(queries: number[][]): number {
  // Determina o tamanho do array necessário com base no maior índice presente nas queries
  let n = 0;
  for (const [_, b] of queries) {
    n = Math.max(n, b);
  }

  // Cria um array com zeros, com tamanho n+1 para lidar com os índices de forma eficiente
  const array = new Array(n + 1).fill(0);

  // Processa cada consulta
  for (const [a, b, k] of queries) {
    // Adiciona k no início do intervalo
    array[a - 1] += k;
    // Subtrai k logo após o final do intervalo
    array[b] -= k;
  }

  // Calcula o valor máximo no array resultante
  let max = 0;
  let current = 0;
  for (const value of array) {
    current += value;
    if (current > max) {
      max = current;
    }
  }

  return max;
}

export const arrayManipulationFromQueriesTest = () => {
  const queries1 = [
    [1, 2, 100],
    [2, 5, 100],
    [3, 4, 100],
  ];
  const result1 = arrayManipulationFromQueries(queries1);
  console.log("Bonus Result 2:", result1);

  const queries2 = [
    [1, 5, 3],
    [4, 8, 7],
    [6, 9, 1],
  ];
  const result2 = arrayManipulationFromQueries(queries2);
  console.log("Bonus Result 2:", result2);

  const queries3 = [
    [2, 6, 8],
    [3, 5, 7],
    [1, 8, 1],
    [5, 9, 15],
  ];
  const result3 = arrayManipulationFromQueries(queries3);
  console.log("Bonus Result 2:", result3);
};
