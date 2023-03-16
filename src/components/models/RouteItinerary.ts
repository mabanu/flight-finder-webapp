import {Price} from "./Price";

export type RouteItinerary = {
    flight_id: string
    routeId: string
    departureAt: Date
    arrivalAt: Date
    awaitingTime: string
    availableSeats: number
    prices: Price
}
