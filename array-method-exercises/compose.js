const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;


compose(sum, sum)(5);
// Translates to roughly
// sum(sum(5)) = sum(5 + 1) = sum(6) = 6 + 1 = 7

