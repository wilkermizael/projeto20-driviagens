import db from "../database/database.js";

async function findFlight({ origin, destination}) {
  const result = await db.query(
    `SELECT * FROM cities WHERE id IN ($1, $2);`,[origin, destination]
  );
  return result;
}

async function createFlights({ origin, destination, date }){
    const result = await db.query(`INSERT INTO flights (origin, destination,date)
     VALUES($1,$2,$3);`,[origin,destination,date])
}

export const flightsRepository ={findFlight,createFlights}