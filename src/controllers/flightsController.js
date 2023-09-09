import httpStatus from "http-status";
import { flightService } from "../services/flightService.js";

 export async function createFlights(req, res) {
  const { origin, destination, date } = req.body;

  try {
    await flightService.createFlights({ origin, destination, date });
    res.status(httpStatus.CREATED);
  } catch (error) {
    if (error.type === "conflit") {
      return res.status(httpStatus.CONFLICT).send(error.message);
    }
    if (error.type === "notFound") {
      return res.status(httpStatus.NOT_FOUND).send(error.message);
    }
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
  }
}

export async function getFlights(req,res){
  const {origin, destination,"smaller-date":smallerDate, "bigger-date":biggerDate} = req.query
  
  try {
   const allFlights = await flightService.getFlights({
     origin,
     destination,
     smallerDate,
     biggerDate
   });
   
   res.status(httpStatus.OK).send(allFlights.rows)
  } catch (error) {
    console.log(error);
    if (error.type === "invalidDate"){
      return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);
    }
    if (error.type === "badRequest") {
      return res.status(httpStatus.BAD_REQUEST).send(error.message);
    }
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
  }
}

