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

export const errors = {findConflit, notFound, notPassengerOrFlight}