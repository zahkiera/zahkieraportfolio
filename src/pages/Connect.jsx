import './Connect.css';
import { useState } from 'react';

export function Connect() {
    const [errorMessage, setErrorMessage] = useState(""); // To show error messages

    function Submit(e) {
        e.preventDefault(); // Prevent default form submission
        
        const formElement = e.target;
        const name = formElement.Name.value.trim();
        const email = formElement.Email.value.trim();
        const message = formElement.Message.value.trim();
        const submitButton = formElement.querySelector('input[type="submit"]');

        // Simple email validation using regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validate form fields
        if (!name || !email || !message) {
            setErrorMessage("All fields are required!");
            return;
        }

        if (!emailRegex.test(email)) {
            setErrorMessage("Please enter a valid email address.");
            return;
        }

        // Clear error message if validation passes
        setErrorMessage("");

        submitButton.disabled = true;

        const thankYouMessage = document.createElement('h4');
        thankYouMessage.textContent = 'Thank you!';
        thankYouMessage.style.textAlign = 'center';

        const formData = new FormData(formElement);

        fetch('https://script.google.com/macros/s/AKfycbwHRBD4e2Iq17TeWYPq6In2F3bROa_tRYMaodmcPW2Ysjh9rMgKftO0TCKaCSxVuh3x/exec', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())  
        .then(data => {
            formElement.appendChild(thankYouMessage);
            console.log('Success:', data);
        })
        .catch(error => {
            console.error('Error:', error);
            setErrorMessage("Something went wrong. Please try again.");
        })
        .finally(() => {
            submitButton.disabled = false;
        });
    }

    return (
        <>
        <div className="title">
            <h2 className="fade-in">Connect with Me!</h2>
        </div>

        {errorMessage && <p className="error">{errorMessage}</p>} {/* Display errors */}

        <form className="form" onSubmit={Submit}>
            <input placeholder="Name" name="Name" type="text"/>
            <input placeholder="Email" name="Email" type="text"/>
            <textarea placeholder="Leave a brief message :)" name="Message"/>
            <input className='button' type='Submit' />
        </form>
        </>
    );
}