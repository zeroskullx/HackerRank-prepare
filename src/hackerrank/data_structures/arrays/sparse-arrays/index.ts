/**
 * Complete the 'matchingStrings' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY stringList
 *  2. STRING_ARRAY queries
 */
function matchingStrings(stringList: string[], queries: string[]): number[] {
  // Mapeia as ocorrências de cada string em stringList
  const stringCount = new Map<string, number>();

  // Conta as ocorrências em stringList
  for (const str of stringList) {
    stringCount.set(str, (stringCount.get(str) || 0) + 1);
  }

  // Cria o array de resultados para cada query
  return queries.map((query) => stringCount.get(query) || 0);
}

export const matchingStringsExec = () => {
  // Exemplo de uso:
  const stringList1 = ["a", "aba", "a", "cc"];
  const queries1 = ["a", "aba", "cc"];
  const result1 = matchingStrings(stringList1, queries1);
  console.log(result1); // Output: [2, 1, 1]

  const stringList2 = [
    "abcde",
    "sdaklfj",
    "asdjf",
    "na",
    "basdn",
    "sdaklfj",
    "asdjf",
    "na",
    "asdjf",
    "na",
    "basdn",
    "sdaklfj",
    "asdjf",
  ];

  const queries2 = ["abcde", "sdaklfj", "asdjf", "na", "basdn"];

  const result2 = matchingStrings(stringList2, queries2);
  console.log(result2); // Output: [1, 3, 4, 3, 2]
};
