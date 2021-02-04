function techList(tech, name) {
  const technology = tech.sort().map(tech => ({tech, name}));

  return (technology.length === 0) ? 'Vazio!' : technology;
}

module.exports = techList;
