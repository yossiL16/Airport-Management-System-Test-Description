import Ticket from "./Ticket.js";
import VIPticket from "./VIPticket.js";
import buyAnyTicket from '../utils/buyTicket.js'


 export default class Flight {
    constructor(fliteName, airline, fliteNumber,
    MaximumNumberOfPassengers,RegularTicketPrice, VIPticketsPrice) {

        this.fliteName = fliteName;
        this.airline = airline;
        this.fliteNumber = fliteNumber;
        this.MaximumNumberOfPassengers = MaximumNumberOfPassengers;
        this.RegularTicketPrice = RegularTicketPrice;
        this.VIPticketsPrice = VIPticketsPrice;
        this.ticketsList = [];

     }


     createTicckets(){
        const sumVIPticket = Math.floor(this.MaximumNumberOfPassengers / 10);
        const sumRegularTicket = this.MaximumNumberOfPassengers - sumVIPticket;

        for (let i = 0; i < sumVIPticket; i++) {
            const ticketVip = new VIPticket(this.VIPticketsPrice);
            this.ticketsList.push(ticketVip);
        }
        for (let i = 0; i < sumRegularTicket; i++) {
            const ticket = new Ticket(this.RegularTicketPrice);
            this.ticketsList.push(ticket);
        }
     }


     buyRegularTicket(passenger){

        if("schoolName" in passenger) {
            const discountPrice = this.RegularTicketPrice * 0.90
            return buyAnyTicket(passenger, discountPrice, this.ticketsList, Ticket);
        }
        
        if("knowsAnAirportEmployee" in passenger){
            const discountPrice = this.RegularTicketPrice * 0.80;
            return buyAnyTicket(passenger, discountPrice, this.ticketsList, Ticket);
        }

        return buyAnyTicket(passenger, this.RegularTicketPrice, this.ticketsList, Ticket)
    }


    buyVIPticket(passenger){
        if("knowsAnAirportEmployee" in passenger){
            const discountPrice = this.VIPticketsPrice * 0.85;
            return buyAnyTicket(passenger, discountPrice, this.ticketsList, VIPticket)
        }
        return buyAnyTicket(passenger, this.VIPticketsPrice, this.ticketsList, VIPticket)
        }
}








    
