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


export const errors = {findConflit, notFound}