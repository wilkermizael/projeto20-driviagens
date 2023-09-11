import db from "../database/database.js";

async function findTravel({passengerId,flightId }) {
  const result = await db.query(
    `SELECT 'flights' AS table_name, EXISTS(SELECT 1 FROM flights WHERE id = $1) AS exists_in_flights
    UNION ALL
    SELECT 'passengers' AS table_name, EXISTS(SELECT 1 FROM passengers WHERE id = $2) AS exists_in_passengers;
`,[flightId,passengerId]
  );
  return result;
}

async function createTravel({ passengerId,flightId }) {
  await db.query(`INSERT INTO travels ("passengerId","flightId")
  VALUES ($1,$2) `,[passengerId,flightId]
  );
}
async function findTravelByName({name}){
  if(!name){
    const result = await db.query(`select passengers.*, count(travels) as "travels" from passengers join travels on passengers.id = travels."passengerId"
    group by passengers.id limit 10;`);

    return result;
  }
  const result = await db.query(
    `select passengers.*, count(travels) as "travels" from passengers join travels on passengers.id = travels."passengerId"
    where  passengers."firstName" ILIKE $1 OR passengers."lastName" ILIKE $2
    group by passengers.id
    limit 10;`,[`%${name}%`, `%${name}%`]
  );

    return result
}
export const travelsRepository = { findTravel, createTravel,findTravelByName };
