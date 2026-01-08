import Passenger from "./Passenger.js";

export default class RegularPassenger extends Passenger {
    constructor(name, idNumber, amountOfMoney, Workplace, knowsAnAirportEmployee){
        super(name, idNumber, amountOfMoney);
        this.Workplace = Workplace;
        this.knowsAnAirportEmployee = knowsAnAirportEmployee;
    }
}