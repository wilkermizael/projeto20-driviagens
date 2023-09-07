import httpStatus from "http-status"
import { citiesService } from "../services/citiesServices.js"

export default async function choiceCities(req,res){

    const {name} =req.body
    try {
        await citiesService.choiceCities({name})
        res.status(httpStatus.CREATED)
    }catch (error) {
        //console.log(error)
        if (error.type === "conflit") {
           return res.status(httpStatus.CONFLICT).send(error.message);
         }
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message)
    }
}