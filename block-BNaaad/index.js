console.log('welcome to Node.js');

function add() {
  let total = 0;
  for (let i = 1; i <= 10; i++) {
    total += i;
  }
  return total;
}

console.log(add());
