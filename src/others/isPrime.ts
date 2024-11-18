function getPrime(num: number): "No" | "Yes" {
  if (num > 2) {
    for (let n = 2; n <= Math.sqrt(num); n++) {
      if (num % n === 0) {
        return "No"; // Retorna NO se não for primo
      }
    }
  }
  return num > 1 ? "Yes" : "No"; // Retorna YES se num for maior que 1
}

export const isPrimeExec = () => {
  console.log("Is 11 prime:", getPrime(11)); // Retorna 11 (é primo)
  console.log("Is 10 prime:", getPrime(10)); // Retorna 0 (não é primo)
  console.log("Is 2 prime:", getPrime(2)); // Retorna 2 (é primo)
  console.log("Is 1 prime:", getPrime(1)); // Retorna 1 (não é primo, mas não entra no loop)
};
