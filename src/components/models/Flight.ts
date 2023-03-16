import {Itinerary} from "./Itinerary";

export type Flight = {
    route_id: string
    departureDestination: string
    arrivalDestination: string
    itineraries: Itinerary[]
}
