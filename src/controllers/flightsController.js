import httpStatus from "http-status";
import { flightService } from "../services/flightService.js";

 export async function createFlights(req, res) {
  const { origin, destination, date } = req.body;
  
  await flightService.createFlights({ origin, destination, date });
  res.status(httpStatus.CREATED);
  
}

export async function getFlights(req,res){
  const {origin, destination,"smaller-date":smallerDate, "bigger-date":biggerDate} = req.query
  
  const allFlights = await flightService.getFlights({
    origin,
    destination,
    smallerDate,
    biggerDate,
  });
  res.status(httpStatus.OK).send(allFlights.rows);
  
}

