import pg from 'pg'
import dotenv from 'dotenv'

dotenv.config();
const {Pool} = pg

const configDataBase = {
    connectionString: process.env.DATABASE_URL,
    ssl:false,
}

if(process.env.NODE_ENV === 'production') configDataBase.ssl = true;

const db = new Pool(configDataBase);

db.connect((error, client, done) => {
  if (error) {
    console.error("Error connecting to PostgresSQL", error);
  } else {
    console.log("Connected to PostgresSQL");
    done();
  }
});

export default db;