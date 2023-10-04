const baseUrl = "http://localhost:3000";
const locationMap = {
  0: "chasecenter",
  1: "levistadium",
  3: "staplescenter",
  2: "sapcenter",
};

const getAllEvents = async () => {
  try {
    const response = await fetch(`${baseUrl}/events`);
    const data = response.json()
    return data
} catch (err) {
    console.log(err);
  }
};

const getEventsById = async (id) => {
  try {
    const response = await fetch(`${baseUrl}/events/current/${id}`);
    const data = await response.json();
    return data[0];
  } catch (err) {
    console.log(err);
  }
};

const getEventsByLocation = async (id) => {
  try {
    const response = await fetch(`${baseUrl}/events/${locationMap[id]}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default {
  getAllEvents,
  getEventsByLocation,
  getEventsById,
};
