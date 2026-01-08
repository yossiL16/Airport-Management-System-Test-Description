export default function buyAnyTicket(passenger, price, listOfTickets, obj){
    if(passenger.amountOfMoney < price){
        return false
    }
    for(const ticket of listOfTickets){
        if(ticket instanceof obj){
            if(ticket.ownerName === null){
                ticket.ownerName = passenger.name
                passenger.amountOfMoney -= price
                return ticket
            }
        }
    }
    return "The flight is full"
}