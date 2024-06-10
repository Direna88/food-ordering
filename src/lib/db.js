import Database from 'better-sqlite3';

const databaseFile = process.env.MY_DATABASE
const db = new Database(databaseFile, {fileMustExist: false, verbose: console.log})


const createUserTable = `
CREATE TABLE IF NOT EXISTS "USER" (
      "id" INTEGER,
      "email" TEXT NOT NULL,
      "password" TEXT NOT NULL,
      PRIMARY KEY("id")
    )
`
const t = db.exec(createUserTable);
console.log(t);
export default db;
