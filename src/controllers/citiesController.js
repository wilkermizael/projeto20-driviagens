import httpStatus from "http-status"
import { citiesService } from "../services/citiesServices.js"

export default async function choiceCities(req,res){

    const {name} =req.body
     await citiesService.choiceCities({ name });
     res.status(httpStatus.CREATED);

}