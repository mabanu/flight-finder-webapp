import {Price} from "./Price";

export type Itinerary = {
    flight_id: string
    routID: string
    departureAt: Date
    arrivalAt: Date
    availableSeats: number
    prices: Price
}
