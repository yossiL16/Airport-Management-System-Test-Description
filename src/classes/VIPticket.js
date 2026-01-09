import Ticket from "./Ticket.js";

export default class VIPticket extends Ticket {
    constructor(price){
        super(price);
        this.randomTicketNumber = Math.floor(Math.random() * (99999 - 10000) + 10000)
        this.ownerName = null;
        this.benefitsList = ["Free alcohol", "Free food", "Hot towels"]
    }
}
