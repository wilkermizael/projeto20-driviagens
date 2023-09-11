import { errors } from "../errors/errors.js";
import { flightsRepository } from "../repositories/flightsRepository.js";
import { resolveDate } from "../schemas/dateSchema.js";

async function createFlights({ origin, destination, date }) {
  const myflight = await flightsRepository.findFlight({ origin, destination });

  if (origin === destination) throw errors.findConflit("s são iguais");
  if (myflight.rows.length !== 2) throw errors.notFound("não existe");

  await flightsRepository.createFlights({ origin, destination, date });
}
async function getFlights({ origin, destination, smallerDate, biggerDate }) {
  let allFlights = [];

  if (
    origin === undefined &&
    destination === undefined &&
    smallerDate === undefined &&
    biggerDate === undefined
  ) {
    
    allFlights = await flightsRepository.getAllFlights();
    return allFlights;
  }
  if (
    origin !== undefined &&
    smallerDate === undefined &&
    biggerDate === undefined
  ) {
    allFlights = await flightsRepository.getFlights({ origin });
    return allFlights;
  }
  if (
    destination !== undefined &&
    smallerDate === undefined &&
    biggerDate === undefined
  ) {
    allFlights = await flightsRepository.getFlights({ destination });
    return allFlights;
  }
  //PASSANDO AS DATAS

  if (
    origin === undefined &&
    destination === undefined &&
    (smallerDate !== undefined || biggerDate !== undefined)
  ) {
    if (smallerDate === undefined || biggerDate === undefined)
      throw errors.invalidDate("Passe as duas datas");

    const smallBigDate = resolveDate({ smallerDate, biggerDate }); //validar data input do usuario
    const dataSmall = smallBigDate.smallerDateConvert;
    const dataBigger = smallBigDate.biggerDateConvert;

    const sendDate = {
      dataSmall,
      dataBigger,
    };

    allFlights = await flightsRepository.getFlights({ sendDate });
    return allFlights;
  }

  //SE TODAS AS QUERYS FOREM PASSADAS JUNTAS
 
  if(origin !== undefined && destination !== undefined
    && smallerDate!== undefined && biggerDate!== undefined){
        
        allFlights = await flightsRepository.getByQueryFlights({origin, destination, smallerDate, biggerDate});
        return allFlights;
    }
}
export const flightService = { createFlights, getFlights };
