let lines = ['7 2 3']
let [N, X, Y] = lines[0].split(" ").map(Number);
let result = (N / X) * Y;
console.log(result);