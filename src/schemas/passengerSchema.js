import joi from 'joi'

const schemaPassenger = joi.object({
  firstName: joi.string().min(2).max(10).required(),
  lastName: joi.string().min(2).max(10).required(),
});

export default schemaPassenger