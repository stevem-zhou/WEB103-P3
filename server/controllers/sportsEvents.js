import { pool } from "../config/database.js";

const getSportsEvents = async (req, res) => {
  try {
    const results = await pool.query(
      "SELECT * FROM sportsevents ORDER BY id ASC"
    );
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getSportsEventByLocation = async (req, res) => {
  try {
    const selectQuery = "SELECT * FROM sportsevents WHERE location=$1";
    const locationId = req.params.locationId;
    const results = await pool.query(selectQuery, [locationId]);
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getSportsEventById = async (req, res) => {
  try {
    const selectQuery = "SELECT * FROM sportsevents WHERE id=$1";
    const id = req.params.id;
    const results = await pool.query(selectQuery, [id]);
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export default {
  getSportsEvents,
  getSportsEventByLocation,
  getSportsEventById
};
