function gradingStudents(grades: number[]): number[] {
  // Write your code here

  const result = grades.map((grade) => {
    if (grade < 38) {
      return grade;
    }

    const nextMultipleOfFive = Math.ceil(grade / 5) * 5;

    if (nextMultipleOfFive - grade < 3) {
      return nextMultipleOfFive;
    }

    return grade;
  });

  return result;
}

/**
 * Teste 01 esperado [75, 67, 40, 33]
 *
 * Teste 02 esperado [75, 67, 40, 33, 40]
 */
export const gradingStudentsExec = () => {
  console.log("Teste 01:", gradingStudents([73, 67, 38, 33]));

  console.log("Teste 02:", gradingStudents([73, 67, 38, 33, 40]));
};
