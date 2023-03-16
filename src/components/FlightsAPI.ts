const baseUrl = 'https://localhost:7108';
const url = `${baseUrl}/api/flight/all`;
const routeUrl = `${baseUrl}/api/flight/route`

const flightsAPI = {


    async getAll() {
        const response = await fetch(`${url}`)
        return await response.json()
    },

    async getRoute(departure: string, arrival: string) {
        const response = await fetch(`${routeUrl}?` + new URLSearchParams({DepartureRequest: `${departure}`, ArrivalRequest:`${arrival}`}))
        return await response.json();
    },

    /*put(product: MilkModel) {
        return fetch(`${url}/${product.id}`, {
            method: 'PUT', body: JSON.stringify(product), headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(r => r.json())
            .catch((error: TypeError) => {
                console.log('log client error ' + error);
                throw new Error('There was an error updating the product. Please try again.');
            });
    },*/

    find(id: number) {
        return fetch(`${url}/${id}`)
            .then(r => r.json())
    },
};

export {flightsAPI};
