function toFloat(moneyString) {
  if (typeof moneyString === "number") {
    return moneyString;
  }
  // comma replacement is necessary to not drop things post-comma
  // negation and dollar sign replacement get it to numeric
  const floatCleanString = parseFloat(
    moneyString.trim().replace(/[-$,:;'"=\sA-z]|[#&]\d*/g, "")
  );
  if (Number.isNaN(floatCleanString)) {
    throw new Error("toFloat parameter can`t be converted to number!");
  }
  return floatCleanString;
}

export { toFloat };
