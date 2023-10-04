import express from 'express'
import sportsEventsController from '../controllers/sportsEvents.js'
// import controllers for events and locations


const sportsEventsRouter = express.Router()

sportsEventsRouter.get("/", sportsEventsController.getSportsEvents)
sportsEventsRouter.get("/:locationId", sportsEventsController.getSportsEventByLocation)
sportsEventsRouter.get("/current/:id", sportsEventsController.getSportsEventById)
// define routes to get events and locations


export default sportsEventsRouter