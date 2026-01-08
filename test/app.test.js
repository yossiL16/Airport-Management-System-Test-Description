import test from "node:test";
import assert from "node:assert/strict";

import Airport from "../src/classes/Airport.js";
import StudentPassenger from "../src/classes/Student.js";
import RegularPassenger from "../src/classes/Regular.js";


test("Checking whether the passenger was able to buy a ticket or not", () => {

    const airport = new Airport();
    airport.create3flights();

    const student1 = new StudentPassenger("yossi", 1234, 50, "kodkod");
    assert.equal(airport.flights[0].buyRegularTicket(student1), false)


    const student2 = new StudentPassenger("yossi", 1234, 5000, "kodkod");
    const ticket = airport.flights[0].buyRegularTicket(student2);
    assert.equal(ticket.ownerName, "yossi");
    assert.equal(student2.amountOfMoney, 4910)
    


})


