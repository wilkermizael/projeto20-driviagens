import { errors } from "../errors/errors.js";
import { flightsRepository } from "../repositories/flightsRepository.js"

async function createFlights({origin, destination, date}){
    const myflight = await flightsRepository.findFlight({origin, destination})
    console.log(myflight.rows)
    if (origin === destination) throw errors.findConflit("s são iguais");
    if(myflight.rows.length !== 2) throw errors.notFound("não existe");
    
    //await flightsRepository.createFlights({ origin, destination, date });
}

export const flightService ={createFlights}