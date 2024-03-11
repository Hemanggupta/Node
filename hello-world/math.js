function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

// module.exports = add;

//multi export
// module.exports = {
//   add,
//   sub
// };

//expoer anonymous fnc

exports.add1 = (a, b) => a + b;
exports.sub1 = (a, b) => a - b;
