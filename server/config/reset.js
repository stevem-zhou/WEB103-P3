import { pool } from "./database.js";

const createSportsEventsTable = async () => {
  const createTableQuery = `
      DROP TABLE IF EXISTS sportsevents;
  
      CREATE TABLE IF NOT EXISTS sportsevents (
          id SERIAL PRIMARY KEY,
          team TEXT NOT NULL,
          date TEXT NOT NULL,
          time TEXT NOT NULL,
          countdown TEXT NOT NULL,
          location TEXT NOT NULL,
          image TEXT NOT NULL,
      )
  `;

  try {
    const res = await pool.query(createTableQuery);
    console.log("🎉 sportsevents table created successfully");
  } catch (err) {
    console.error("⚠️ error creating sportsevents table", err);
  }
};

const createLocationsTable = async () => {
  const createTableQuery = `
      DROP TABLE IF EXISTS locations;
  
      CREATE TABLE IF NOT EXISTS locations (
          id SERIAL PRIMARY KEY,
          name TEXT NOT NULL,
          address TEXT NOT NULL
      )
  `;

  try {
    const res = await pool.query(createTableQuery);
    console.log("🎉 locations table created successfully");
  } catch (err) {
    console.error("⚠️ error creating locations table", err);
  }
};
