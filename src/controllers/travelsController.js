import httpStatus from "http-status";
import { travelService } from "../services/travelsServices.js";

export async function choiceTravels(req,res){
    const {passengerId, flightId} = req.body
    try {
        await travelService.choiceTravels({passengerId, flightId})
        res.sendStatus(httpStatus.CREATED)
    } catch (error) {
       
        if (error.type === "notFound_Passenger_Or_flight"){
            return res.status(httpStatus.NOT_FOUND).send(error.message);
        }
          res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
    }
}