import { errors} from "../errors/errors.js"
import { citiesRepository } from "../repositores/citiesRepository.js"


async function choiceCities ({name}){
    
    const yourCity = await citiesRepository.findCities({name})//VERIFICA SE A CIDADE EXISTE
    if(yourCity.rowCount ===1) throw errors.findConflit()

    await citiesRepository.choiceCities({name})
}

export const citiesService ={choiceCities}