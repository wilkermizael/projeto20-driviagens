import httpStatus from "http-status";
import passengerRepository from "../repositores/passengerRepository.js";


export async function createPassenger(req,res){
    const {firstName, lastName} = req.body
    if(!firstName || !lastName) return res.sendStatus(httpStatus.BAD_REQUEST)

    try {
    await passengerRepository({firstName, lastName})
    res.sendStatus(httpStatus.CREATED);
    } catch (error) {
      console.log(error);
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
    }
}
