import httpStatus from "http-status";
import passengerRepository from "../repositories/passengerRepository.js";


export async function createPassenger(req,res){
    const {firstName, lastName} = req.body
    if(!firstName || !lastName) return res.sendStatus(httpStatus.BAD_REQUEST)
    
    await passengerRepository({ firstName, lastName });
    res.sendStatus(httpStatus.CREATED);
    
}
