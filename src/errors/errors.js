export function findConflit(resource){
    return {
        type: "conflit",
        message: `Cidade${resource}`
    }
}
export function notFound(resource) {
  return {
    type: "notFound",
    message: `Cidade ${resource} existe`,
  };
}

export function notPassengerOrFlight(resource){
   return {
     type: "notFound_Passenger_Or_flight",
     message: `${resource} não existe`,
   };
}
export function invalidDate(resource){
    return {
      type: "invalidDate",
      message: `${resource}`,
    };
}
export function badRequest(resource) {
  return {
    type: "badRequest",
    message: `${resource}`,
  };
}
export function limit(resource){
   return {
     type: "limit",
     message: `${resource}`,
   };
}
export const errors = {findConflit, notFound, notPassengerOrFlight, invalidDate,badRequest,limit}