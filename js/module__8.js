// const Joi = require('joi');
// const schema = Joi.string().alphanum().min(3).max(10);

// console.log(schema.validate('qwqweqw'));

const shortId = require('shortid');

console.log(shortId.generate());
