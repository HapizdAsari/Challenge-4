// schemas.js 
const Joi = require('joi') 
const schemas = { 
  carPOST: Joi.object().keys({ 
    name: Joi.string().alphanum().min(3).required(),
    rent: Joi.number().integer().required(),
    size: Joi.string().required(),
    photo: Joi.string().required(), 
  }) 
  // define all the other schemas below 
}; 
module.exports = schemas;