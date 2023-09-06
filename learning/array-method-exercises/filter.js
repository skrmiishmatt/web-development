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

// ## FILTER
// 1. Get characters with mass greater than 100
// 2. Get characters with height less than 200
// 3. Get all male characters
// 4. Get all female characters

const checkMassGreaterThan100 = characters.filter((character) => character.mass > 100);
const heightLessThan200 = characters.filter((character) => character.height < 200);
const allMaleCharacters = characters.filter((character) => character.gender === 'male');
const allFemaleCharacters = characters.filter((character) => character.gender === 'female');

console.log(`1. Get characters with mass greater than 100: ${checkMassGreaterThan100.length}`);
console.log(`2. Get characters with height less than 200: ${heightLessThan200.length}`);
console.log(`3. Get all male characters: ${allMaleCharacters.length}`);
console.log(`4. Get all female characters: ${allFemaleCharacters.length}`);
