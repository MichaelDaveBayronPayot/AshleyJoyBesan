import { useState } from 'react';

function EventTicket() {
    const [ticket, setTicket] = useState(0);
    const price = 2000;


    const incrementTicket = () => {
        if (ticket < 5) {
            setTicket(ticket + 1);
        }
    };


    const decrementTicket = () => {
        if (ticket > 0) {
            setTicket(ticket - 1);
        }
    };

    const confirmReservation = () => {
        if (ticket > 0 &&  ticket <= 5) {
            alert(`${ticket} Tickets Reserved! $ ${price * ticket}`);
        } else {
            alert("Please reserve your tickets!");
        }
    };

    return (
        <div>
            <h1>Sample Counter</h1>
            <h3>Concert: Coldplay Live (${price} Each)</h3>
            <p>Tickets Reserved: {ticket}</p>
            <p>Total price: ${price * ticket}</p>

            <button onClick={incrementTicket}>+</button>
            <button onClick={decrementTicket}>-</button>
            <button onClick={confirmReservation}>Confirm Reservation</button>
        </div>
    );
}

export default EventTicket;
    