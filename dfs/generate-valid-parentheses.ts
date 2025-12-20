const generateValidParentheses = (n: number): string[] => {
  const possibilities: string[] = []
  console.log(n)

  const generatePaths = (openCount: number, closedCount: number, currentString: string): void => {
    if (openCount > n || closedCount > n || openCount < closedCount) {
      return
    }

    if (openCount === n && closedCount === n) {
      possibilities.push(currentString)
      return 
    }

    generatePaths(openCount + 1, closedCount, currentString + "(")
    generatePaths(openCount, closedCount + 1, currentString + ")")
  } 

  generatePaths(0, 0, "")

  return possibilities
}

const numberInput = process.argv[2]
if (!numberInput) throw Error("undefined input")

const parsedNumber = Number(numberInput)
if (isNaN(parsedNumber)) throw Error("invalid number input")
const validParentheses = generateValidParentheses(parsedNumber)

console.log(validParentheses)
