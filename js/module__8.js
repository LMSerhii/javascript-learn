// const Joi = require('joi');
// const schema = Joi.string().alphanum().min(3).max(10);

// console.log(schema.validate('qwqweqw'));

const shortId = require('shortid');

console.log(shortId.generate());

const dog = {
  name: 'Jack',
  type: 'dog',
  breed: 'haski',
};

console.log(JSON.stringify(dog));

// localStorage.setItem('dogs', JSON.stringify(dog));

// const dogs = localStorage.getItem('dogs');

// console.log(dogs);
