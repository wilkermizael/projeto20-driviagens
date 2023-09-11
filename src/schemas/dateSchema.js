import joi from "joi";
import dayjs from "dayjs";
import { errors } from "../errors/errors.js";

export const schemaDate = joi.object({
  smallerDate: joi.date().iso().required(),
  biggerDate: joi.date().iso().required(),
});

//export default schemaDate;

export function resolveDate({ smallerDate, biggerDate }) {
    function convertIsoDate(date){
    //ANTES DE CONVERTER VERIFICA SE A DATA QUE O USUARIO FORNECEU ESTÁ DE ACORDO "DD/MM/YYYY"
    const part = date.split("/");
    const day = part[0];
    const month = part[1];
    const year = part[2];

    if (
      day < 1 ||
      day > 31 ||
      month < 1 ||
      month > 12 ||
      year < 1000
    ) throw errors.invalidDate("Forneça uma data válida no formato DD/MM/YYYY");
    //TRANSFORMANDO A DATA DO BODY EM UMA DATA VALIDA
    const formattedDate = `${year}/${month}/${day}`;
    const parsedDate = dayjs(formattedDate);
    return parsedDate.format();
  
  }
    const smallerDateConvert =convertIsoDate(smallerDate)
    const biggerDateConvert=convertIsoDate(biggerDate)
  

  const newDate = {
    smallerDateConvert,
    biggerDateConvert,
  };

  const dateSchema = joi.object({
    smallerDateConvert: joi.date().iso().required(),
    biggerDateConvert: joi.date().iso().required()
  })
  function validateDate(newDate) {
   
    if (newDate.smallerDateConvert > newDate.biggerDateConvert) {
      throw errors.badRequest("ERRO!Data de início maior que a data final!");
    }
    const { error, value } = dateSchema.validate(newDate);
 
    if (error) {
      throw errors.invalidDate("Data não existe ou inválida");
    }
    return value;
  }
  return validateDate(newDate);
}
