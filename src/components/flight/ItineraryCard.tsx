import {Itinerary} from "../models/Itinerary";
import React from "react";

interface IItinerary {
    itinerary: Itinerary
}

function ItineraryCard(props: IItinerary) {
    const { itinerary } = props

    const departure = new Date(itinerary.departureAt).toLocaleString();
    const arrival = new Date(itinerary.arrivalAt).toLocaleString();

    return (
        <div className="flex justify-center">
            <div
                className="block max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700">
                <h5
                    className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    Departure: {departure}
                </h5>
                <h5
                    className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    Arrival: {arrival}
                </h5>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    Currency: {itinerary.prices.currency}
                </p>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">Adult: {itinerary.prices.adult}</p>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">Child: {itinerary.prices.child}</p>
                <button
                    type="button"
                    className="inline-block rounded bg-red-900 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                    data-te-ripple-init=""
                    data-te-ripple-color="light">
                    Book
                </button>
            </div>
        </div>
    )
}

export default ItineraryCard;
