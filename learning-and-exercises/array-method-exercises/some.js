const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

// ## SOME
// 1. Is there at least one male character?
// 2. Is there at least one character with blue eyes?
// 3. Is there at least one character taller than 200?
// 4. Is there at least one character that has mass less than 50?

const maleCharacter = characters.some(character => character.gender === 'male');
const blueEyes = characters.some(character => character.eye_color === 'blue');
const tallerThan200 = characters.some(character => character.height > 200);
const massLessThan50 = characters.some(character => character.mass < 50);

console.log(`1. Is there at least one male character? ${maleCharacter}`);
console.log(`2. Is there at least one character with blue eyes? ${blueEyes}`);
console.log(`3. Is there at least one character taller than 200? ${tallerThan200}`);
console.log(`4. Is there at least one character that has mass less than 50? ${massLessThan50}`);
