function rotateLeft(d: number, arr: number[]): number[] {
  // Write your code here

  // A quantidade de rotações pode ser reduzida para d % arr.length
  const rotations = d % arr.length;

  // Divide o array em duas partes: antes e depois da posição de rotação
  // slice 1 é pego a partir da posição de rotação até o final do array
  // slice 2 é pego do início(por isso o 0) do array até a posição de rotação
  const rotatedArray = arr.slice(rotations).concat(arr.slice(0, rotations));

  return rotatedArray;
}

function rotateRight(d: number, arr: number[]): number[] {
  const n = arr.length;

  // Calcular o número real de rotações necessárias
  const rotations = d % n;

  // Dividir o array em duas partes e reorganizar
  const rotatedArray = arr
    .slice(n - rotations)
    .concat(arr.slice(0, n - rotations));

  return rotatedArray;
}

export function rotateLeftExec() {
  // Exemplo de uso:
  // const n = 5; // Tamanho do array
  // Algoritmo de rotação à esquerda
  const d1 = 3; // Número de rotações à esquerda
  const arr1 = [1, 2, 3, 4, 5];
  const rotations1 = d1 % arr1.length;

  const result1 = rotateLeft(d1, arr1);

  console.log(`Slice 1: ${rotations1}`); // 4 % 5 = 4
  console.log(`Result 1: ${result1}`); // Saída esperada: [5, 1, 2, 3, 4]

  const d2 = 21; // Número de rotações à esquerda
  const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const rotations2 = d2 % arr2.length;

  const result2 = rotateLeft(d2, arr2);
  console.log(`Slice 2: ${rotations2}`); // 4 % 5 = 4
  console.log(`Result 2: ${result2}`); // Saída esperada: [2, 3, 4, 5, 6, 7, 8, 9, 10, 1]

  // Algoritmo de rotação à direita
  const d3 = 3; // Número de rotações à direita
  const arr3 = [1, 2, 3, 4, 5];
  const rotations3 = d3 % arr3.length;

  const result3 = rotateRight(d3, arr3);
  console.log(`Slice 3: ${rotations3}`); // 4 % 5 = 4
  console.log(`Result 3: ${result3}`); // Saída esperada: [3, 4, 5, 1, 2]
}
