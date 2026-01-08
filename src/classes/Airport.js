import Flight from "./Flight.js";

export default class Airport {

    static flightname = ["dubay", "JFK", "London"]
    static airline = ["elal", "delta", "airbulgaria"]
    static numFlight = ["yl-1232", "dm-5678","ab-0987"]
    static max = 20
    static regPrice = 100
    static vipPrice = 1000

    constructor(){
    this.flights = [];
    }

    create3flights(){
        for(let i = 0; i < 3; i++){
            const flight = new Flight(Airport.flightname[i], Airport.airline[i], Airport.numFlight[i],Airport.max, Airport.regPrice, Airport.vipPrice);
            flight.createTicckets()
            this.flights.push(flight)
        }
    }
}