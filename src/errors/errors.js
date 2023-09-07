export function findConflit(){
    return {
        type: "conflit",
        message: "Cidade já existe"
    }
}

export const errors = {findConflit}