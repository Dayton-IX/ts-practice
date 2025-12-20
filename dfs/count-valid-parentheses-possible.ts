const countPossibleValidParentheses = (n: number): number => {
  let possibleCount: number = 0;

  const countPossible = (
    openCount: number,
    closedCount: number,
    currentCount: number,
  ): void => {
    if (openCount > n || closedCount > n || openCount < closedCount) {
      return;
    }

    if (closedCount === n && openCount === n) {
      possibleCount++;
      return;
    }

    countPossible(openCount + 1, closedCount, currentCount + 1);
    countPossible(openCount, closedCount + 1, currentCount + 1);
  };

  countPossible(0, 0, 0);

  return possibleCount;
};

const numberInput = process.argv[2];

if (!numberInput) {
  console.log(
    "Please enter a number of parentheses to generate possible count",
  );
  process.exit();
}

const parsedNumber = parseInt(numberInput);
if (isNaN(parsedNumber)) {
  console.log("Invalid input, please enter an integer");
  process.exit();
}

const possibleCount = countPossibleValidParentheses(parsedNumber);
console.log("number of possible valid combos: ", possibleCount);
