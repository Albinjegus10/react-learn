import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Checkout.css'; // Optional: Add styles for your checkout form

function Checkout() {
    const { id } = useParams();

    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleConfirmOrder = (e) => {
        e.preventDefault();
        // Handle the order confirmation logic, like sending the data to your server
        console.log('Order confirmed for product ID:', id);
        console.log('Delivery Address:', address, city, state, zipCode, phoneNumber);

        // You can also navigate to a success page or show a confirmation message
        alert('Order Confirmed!');
    };

    return (
        <div>
            <h1>Checkout for Product ID: {id}</h1>
            <form onSubmit={handleConfirmOrder} className="checkout-form">
                <h2>Delivery Address</h2>

                <label>
                    Address:
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </label>

                <label>
                    City:
                    <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                    />
                </label>

                <label>
                    State:
                    <input
                        type="text"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        required
                    />
                </label>

                <label>
                    ZIP Code:
                    <input
                        type="text"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                        required
                    />
                </label>

                <label>
                    Phone Number:
                    <input
                        type="text"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                    />
                </label>

                <button type="submit" className="confirm-button">
                    Confirm Order
                </button>
            </form>
        </div>
    );
}

export default Checkout;

