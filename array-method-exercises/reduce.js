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

// ## REDUCE
// 1. Get the total mass of all characters
// 2. Get the total height of all characters
// 3. Get the total number of characters in all the character names
// 4. Get the total number of characters by eye color (hint. a map of eye color to count)

const totalMass = characters.reduce((acc, character) => acc + Number(character.mass), 0);
const totalHeight = characters.reduce((acc, character) => acc + Number(character.height), 0);
const totalCharInNames = characters.reduce((acc, character) =>  acc + character.name.length, 0);
const eyeColor = characters.reduce((acc, character) => {
    const color = character.eye_color;
    if (acc[color]) {
        acc[color]++;
    }
    else {
        acc[color] = 1;
    }
    return acc;
}, {});


console.log(`1. Get the total mass of all characters: ${totalMass}`);
console.log(`2. Get the total height of all characters: ${totalHeight}`);
console.log(eyeColor);
console.log(`3. Get the total number of characters in all the character names: ${totalCharInNames}`)
