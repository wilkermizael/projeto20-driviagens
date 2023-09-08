import joi from "joi";

const schemaTravels = joi.object({
  passengerId: joi.number().integer().positive().required(),
  flightId: joi.number().integer().positive().required(),
});

export default schemaTravels;
