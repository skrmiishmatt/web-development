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

// ## SORT
// 1. Sort by name
// 2. Sort by mass
// 3. Sort by height
// 4. Sort by gender

const byMass = characters.sort((a, b) => { return a.mass - b.mass });
const byHeight = characters.sort((a, b) => { return a.height - b.height });
const byName = characters.sort((a, b) => { 
    if (a.name < b.name) return -1; // -1 for A-Z || 1 for Z-A
    return 1 // 1 for A-Z || -1 for Z-A
});
const byGender = characters.sort((a, b) => {
    if (a.gender === 'female') return -1; // -1 for === value at start, 1 for === value last
    return 1 // 1 for === value at start, -1 for === value last
})

console.log(byMass);
console.log(byHeight);
console.log(byName);
console.log(byGender);
