function techList(tech, name) {
  let technology = [];
  let result;

  for (let index in tech.sort()) {
    technology.push({
      tech: tech[index],
      name,
    });
  }
  if (technology.length === 0) {
    result = 'Vazio!';
  } else {
    result = technology;
  }
  return result;
}
