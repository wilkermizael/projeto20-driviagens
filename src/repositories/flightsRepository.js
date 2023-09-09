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

async function getFlights({origin, destination, sendDate}){
  
  if (!origin && !destination && !sendDate) {
    
    const result = await db.query(`SELECT * FROM flights ORDER BY date`);
    return result;
  }
  if (origin !== undefined) {
    const cityId = await db.query(`SELECT * FROM cities WHERE name =$1 `,[origin]);
    if(cityId.rows.length === 0) return cityId
    const result = await db.query(
      `SELECT * FROM flights WHERE origin=$1
       ORDER BY date;`,
      [cityId.rows[0].id]
    );
    return result;
  }
  if (destination !== undefined) {
    const cityId = await db.query(`SELECT * FROM cities WHERE name=$1 `,[destination]);
    if (cityId.rows.length === 0) return cityId;
    const result = await db.query(
      `SELECT * FROM flights WHERE destination=$1
       ORDER BY date ;`,
       [cityId.rows[0].id]
    );

    return result;
  }
  if (destination === undefined && origin === undefined && sendDate) {
    //console.log(sendDate.dataSmall);
    const result = await db.query(
      `SELECT *
    FROM flights
    WHERE TO_DATE(flights.date, 'DD/MM/YYYY') > $1
    GROUP BY flights.id
    UNION ALL
    SELECT *
    FROM flights
    WHERE TO_DATE(flights.date, 'DD/MM/YYYY') > $2
    GROUP BY flights.id
    ORDER BY date;
    `,
      [sendDate.dataSmall, sendDate.dataBigger]
    );

    return result;
  }
  
}
export const flightsRepository ={findFlight,createFlights,getFlights}