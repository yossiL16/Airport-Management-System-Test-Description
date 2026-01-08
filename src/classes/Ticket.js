export default class Ticket {
    
    constructor(price) {
        this.randomTicketNumber = Math.floor(Math.random() * (99999 - 10000) + 10000)
        this.price = price;
        this.ownerName = null;
    }
}