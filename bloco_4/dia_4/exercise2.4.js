function mostChar (names) {
  let longName = names[0];
  for (let index in names) {
    if (longName.length < names[index].length){
    longName = names[index];
    }
  }
  return longName;
}

console.log(mostChar(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));