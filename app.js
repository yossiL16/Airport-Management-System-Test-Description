import Airport from "./src/classes/Airport.js";
import StudentPassenger from "./src/classes/Student.js";
import RegularPassenger from "./src/classes/Regular.js";


const airport = new Airport();
airport.create3flights()

const student = new StudentPassenger("yossi", 1234, 500, "kodkod");
const regular = new RegularPassenger("avi", 5678, 800, "apple", true);

airport.flights[0].buyRegularTicket(regular);
airport.flights[0].buyVIPticket(student)






