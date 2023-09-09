import joi from "joi";
import dayjs from "dayjs";
import { errors } from "../errors/errors.js";

export const schemaDate = joi.object({
  smallerDate: joi.date().iso().required(),
  biggerDate: joi.date().iso().required(),
});

//export default schemaDate;

export function resolveDate({ smallerDate, biggerDate }) {
  const convertSmallerDate = dayjs(smallerDate, "MM/DD/YYYY").format(
    "YYYY/MM/DD"
  );
  const convertBiggerDate = dayjs(biggerDate, "MM/DD/YYYY").format(
    "YYYY/MM/DD"
  );
  const newDate = {
    smallerDate: convertSmallerDate,
    biggerDate: convertBiggerDate,
  };
  const dateSchema = joi.object({
    smallerDate: joi
      .string()
      .regex(/^\d{4}\/\d{2}\/\d{2}$/)
      .required(),
    biggerDate: joi
      .string()
      .regex(/^\d{4}\/\d{2}\/\d{2}$/)
      .required(),
  });
  function validateDate(newDate) {
    const { error, value } = dateSchema.validate(newDate);
    if(newDate.smallerDate > newDate.biggerDate){
      throw errors.badRequest("ERRO!Data de início maior que a data final!");
    }
  
    if (error) {
      throw errors.invalidDate("Data não existe");
    }
    return value;
  }
  return validateDate(newDate)
}
