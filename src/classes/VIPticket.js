import Ticket from "./Ticket.js";

export default class VIPticket extends Ticket {
    constructor(price){
        super(price);
        this.benefitsList = ["Free alcohol", "Free food", "Hot towels"]
    }
}
