import { errors } from "../errors/errors.js";
import { travelsRepository } from "../repositories/travelsRepository.js";

async function choiceTravels({passengerId, flightId  }) {
  const mytravel = await travelsRepository.findTravel({
    passengerId,
    flightId,
  });
  
  if (mytravel.rows[0].exists_in_flights === false)throw errors.notPassengerOrFlight("Vôo");
  if (mytravel.rows[1].exists_in_flights === false)throw errors.notPassengerOrFlight("Passageiro");

  await travelsRepository.createTravel({ passengerId,flightId });
}
async function getTravels(name){
  const infoFlight = await travelsRepository.findTravelByName(name)
  if(infoFlight.rowCount >10) throw errors.limit("Too many results");
  const infoPassengerByName = infoFlight.rows.map( item =>({
    passenger:`${item.firstName} ${item.lastName}`,
    travels: item.travels
  }))
  return infoPassengerByName
 
  
}
export const travelService = { choiceTravels,getTravels };