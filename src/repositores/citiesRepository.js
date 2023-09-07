import db from "../database/database.js";

async function findCities({name} ) {
  const result = await db.query(`SELECT * FROM cities WHERE name=$1;`, [name]);
  return result;
}

async function choiceCities({name} ) {
const result = await db.query(`INSERT INTO cities (name) VALUES($1);`, [name]);
return result;
}

export const citiesRepository = { choiceCities, findCities };
