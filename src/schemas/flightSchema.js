import joi from 'joi'
const schemaFlights = joi.object({
  origin: joi.number().required(),
  destination: joi.number().required(),
  date: joi.date().format("DD/MM/YYYY").required()
});

export default schemaFlights