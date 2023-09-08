import httpStatus from "http-status";
import { flightService } from "../services/flightService.js";

async function createFlights(req, res) {
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
export default createFlights;
