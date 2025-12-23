const minimumUnorderedColDeletes = (strs: string[]): number => {
  let deletionsCount: number = 0;

  for (let i: number = 0; i < strs.length - 1; i++) {
    const str = strs[i];
    if (!str) throw Error("Invalid strs index: " + i);

    for (let j: number = 0; j < str.length - 1; j++) {
      const currChar: string = strs[i]![j]!;
      if (!currChar) throw Error("Invalid str index: " + i + " " + j);
      const nextColChar: string = strs[i + 1]![j]!;
      if (!nextColChar) throw Error("Invalid str index: " + i + " " + j);
      if (currChar > nextColChar) {
        deletionsCount++;
        continue;
      }
    }
  }

  return deletionsCount;
};

const inputFilePath = Bun.argv[2];
if (!inputFilePath) {
  console.log("Please provide a input file path");
  process.exit();
}

const file = Bun.file(inputFilePath);
const fileJson = await file.json();

const inputs = fileJson.inputs;

const results = inputs.map((strs: string[]) =>
  minimumUnorderedColDeletes(strs),
);
console.log("results:", results);
