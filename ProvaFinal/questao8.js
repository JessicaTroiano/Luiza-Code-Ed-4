const f = x => y => x % 2 === 0 ? x + y : x -y;
const g = f(3);
const k = g(1);

console.log(k);