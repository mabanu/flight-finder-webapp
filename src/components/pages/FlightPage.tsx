import {useEffect, useState} from "react";
import {flightsAPI} from "../FlightsAPI";
import {Flight} from "../models/Flight";
import FlightCard from "../flight/FlightCard";

function FlightPage() {
    const [flights, setFlights] = useState<Flight[]>([]);

    useEffect(() => {
        function loadFlights() {
            try {
                flightsAPI.getAll()
                    .then(res => setFlights(res));
            } catch (error) {
                if (error instanceof Error) {
                    console.log(error.message);
                }
            }
        }

        loadFlights();
    }, [])

    return (
        <div>
            {flights.map(flight => <FlightCard flight={flight} key={flight.route_id}/>)}
        </div>
    )
}

export default FlightPage;
