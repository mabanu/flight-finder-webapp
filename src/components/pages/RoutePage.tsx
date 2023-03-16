import {useEffect, useState} from "react";
import {flightsAPI} from "../FlightsAPI";
import {RouteItinerary} from "../models/RouteItinerary";

function RoutePage () {
    const [itineraries, setItineraries] = useState<RouteItinerary[]>([]);

    useEffect(() => {
        function loadFlights() {
            try {
                flightsAPI.getRoute('Oslo', 'Stockholm')
                    .then(res => setItineraries(res));
            }
            catch (error) {
                if (error instanceof Error) {
                    console.log(error.message);
                }
            }
        }

        loadFlights();
    }, [])

    console.log(itineraries);

    return (
        <div>

        </div>
    )
}

export default RoutePage;
