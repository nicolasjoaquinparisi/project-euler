export default function fiboEvenSum(n) {
  let secondPrevTerm = 0;
  let firstPrevTerm = 1;
  let actualTerm = 2;

  let sum = 0;

  while (actualTerm <= n) {
    if (actualTerm % 2 === 0) {
      sum += actualTerm;
    }

    secondPrevTerm = firstPrevTerm;
    firstPrevTerm = actualTerm;
    actualTerm = secondPrevTerm + firstPrevTerm;
  }

  return sum;
}
