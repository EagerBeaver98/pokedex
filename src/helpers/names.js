const nameFormat = (name) => {
  let newName = name[0].toUpperCase() + name.substring(1);
  if (name === 'leafgreen' || name === 'firered' || name === 'soulsilver') {
    newName = newName.slice(0, 4) + " " + nameFormat(name.slice(4));
  } else if (name === 'ultra-sun' || name === 'ultra-moon' || name === 'alpha-sapphire' || name === 'omega-ruby') {
    newName = newName.slice(0, 6) + nameFormat(newName.slice(6))
  } else if (name === 'lets-go-pikachu' || name === 'lets-go-eevee') {
    newName = newName.slice(0, 3) + "'" + newName.slice(3, 5) + nameFormat(newName.slice(5, 8)) + nameFormat(newName.slice(8)) + "!"
  } else if (name === 'heartgold') {
    newName = newName.slice(0, 5) + " " + nameFormat(newName.slice(5))
  }
  return newName;
};

// const generationName = (name) => {

// };

module.exports = {nameFormat}