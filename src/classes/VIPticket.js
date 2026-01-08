import Ticket from "./Ticket.js";

export default class VIPticket extends Ticket {
    constructor(randomTicketNumber, price, ownerName){
        super(randomTicketNumber, price, ownerName);
        this.benefitsList = ["Free alcohol", "Free food", "Hot towels"]
    }
}