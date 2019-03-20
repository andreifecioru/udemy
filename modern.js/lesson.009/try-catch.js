const getTip = amount => {
  const argType = typeof amount;

  if (argType !== "number") {
    throw Error(`Argument must be number. Got: ${argType}`);
  }

  return amount * 0.25;
};

try {
  const tip = getTip("Andrei");
  console.log(tip);
} catch (e) {
  console.log(`Error detected: ${e}`);
}

const gradeCalc = function(score, totalScore = 100) {
  let percent = Math.round((score / totalScore) * 100);

  if (typeof score !== "number" || typeof totalScore !== "number") {
    throw Error("Please provide numbers");
  }

  let letter = "F";
  if (percent >= 90) {
    letter = "A";
  } else if (percent >= 80) {
    letter = "B";
  } else if (percent >= 70) {
    letter = "C";
  } else if (percent >= 60) {
    letter = "D";
  }

  return `You got a ${letter} (${percent}%)`;
};

console.log(gradeCalc(95));

try {
  console.log(gradeCalc("Andrei"));
} catch (e) {
  console.log(e.message);
}
