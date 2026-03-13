const name = 'Happy Inc.';
const age = 2;
const company1 = { name: name, age: age }; // { name: "happy Inc.", age: 2 }
const company2 = { name, age }; // { name: "happy Inc.", age: 2 }

console.log(company1, company2);