import db from "../database/database.js";

export default async function passengerRepository({firstName, lastName}){
    const result = await db.query(`INSERT INTO passengers ("firstName", "lastName") VALUES ($1,$2);`,[firstName,lastName])
    return result
}