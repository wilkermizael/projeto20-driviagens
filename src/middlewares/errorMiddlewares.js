import httpStatus from "http-status";

export default function errorHandler(error, req, res, next){
    if (error.type === "conflit") {
      return res.status(httpStatus.CONFLICT).send(error.message);
    }
    if (error.type === "notFound") {
      return res.status(httpStatus.NOT_FOUND).send(error.message);
    }
     if (error.type === "invalidDate") {
       return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);
     }
     if (error.type === "badRequest") {
       return res.status(httpStatus.BAD_REQUEST).send(error.message);
     }
     if(error.type === "limit"){
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
     }

    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
  
}