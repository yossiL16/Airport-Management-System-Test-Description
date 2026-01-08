import Passenger from "./Passenger.js";

export default class StudentPassenger extends Passenger {
    constructor(name, idNumber, amountOfMoney, schoolName){
        super(name, idNumber, amountOfMoney);
        this.schoolName = schoolName;
    }
}