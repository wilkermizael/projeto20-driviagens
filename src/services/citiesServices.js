import { errors} from "../errors/errors.js"
import { citiesRepository } from "../repositories/citiesRepository.js"


async function choiceCities ({name}){
    
    const yourCity = await citiesRepository.findCities({name})//VERIFICA SE A CIDADE EXISTE
    if(yourCity.rowCount ===1) throw errors.findConflit(" já existe")

    await citiesRepository.choiceCities({name})
}

export const citiesService ={choiceCities}