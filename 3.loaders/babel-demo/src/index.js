import utilFn from './utils.js';

const arr = [2, 3, 4, 4, 3, 2, 8, 10];
const {x, y, z: {...q}} = {x: 'x', y: 'y', z: {a: 'a', b: 'b'}};

console.log('x:', x, ' y: ', y, ' q: ', q);
console.log(arr.includes(10));
console.log([...new Set(arr)]);

new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(111)
  });
}).then(data => console.log(data));

console.log('foo'.includes('o'));

async function deal() {
  let result = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 400);
  }).then(data => data);
  console.log(result);
}

deal();


function* foo() {}

utilFn();