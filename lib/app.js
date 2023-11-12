const a = 4;
const b = 5;
function sum(a, b) {
  return a + b;
}
console.log(sum(a, b));
const mult = (a, b) => {
  return a * b;
};
class Hero {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    this._name = newName;
  }
}
const h = new Hero('mango');