import joi from 'joi'
const schemaFlights = joi.object({
  origin: joi.number().integer().positive().required(),
  destination: joi.number().integer().positive().required(),
  date: joi.date().required(),
});

export default schemaFlights