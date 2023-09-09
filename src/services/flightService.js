import { errors } from "../errors/errors.js";
import { flightsRepository } from "../repositories/flightsRepository.js";
import { resolveDate } from "../schemas/dateSchema.js";
import dayjs from "dayjs";
async function createFlights({ origin, destination, date }) {
  const myflight = await flightsRepository.findFlight({ origin, destination });

  if (origin === destination) throw errors.findConflit("s são iguais");
  if (myflight.rows.length !== 2) throw errors.notFound("não existe");

  await flightsRepository.createFlights({ origin, destination, date });
}
async function getFlights({ origin, destination, smallerDate, biggerDate }) {
  let allFlights = [];

  const smallBigDate = resolveDate({ smallerDate, biggerDate });//validar data input do usuario
  const dataSmall=dayjs(smallBigDate.smallerDate).format("YYYY/DD/MM");
  const dataBigger =dayjs(smallBigDate.biggerDate).format('YYYY/DD/MM');

  const sendDate ={
    dataSmall,
    dataBigger
  }
 
  if (origin === undefined && destination === undefined && !smallerDate) {
   
    allFlights = await flightsRepository.getFlights();
    return allFlights;
  }
  if (origin !== undefined) {
    
    allFlights = await flightsRepository.getFlights( {origin} );
    return allFlights;
  }
  if (destination !== undefined) {
    
    allFlights = await flightsRepository.getFlights( {destination} );
    return allFlights;
  }
  //PASSANDO AS DATAS
  if (origin === undefined && destination === undefined && sendDate) {
    
    allFlights = await flightsRepository.getFlights({sendDate});
    return allFlights;
  }
}
export const flightService = { createFlights, getFlights };
