export function gradingStudents(grades: number[]): number[] {
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
