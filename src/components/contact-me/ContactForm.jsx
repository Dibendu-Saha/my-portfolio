import { useState } from "react";
import { Grid, Button } from "../common/wrapper/AppComponents";
import axios from "axios";
import "./ContactForm.css";

function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async () => {
        const URL = `https://portfoliosendemailazurefunction.azurewebsites.net/api/SendEmail?name=${name}&email=${email}`;
        const response = await axios.post(URL, { message });

        if (response.status === 200)
            alert('Email sent');
    }

    return (
        <div className="grid grid--contact-form-layout contact-form">
            <label htmlFor="name">Name</label>
            <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
            />

            <label htmlFor="email">Email</label>
            <input
                id="email"
                name="email"
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />

            <label htmlFor="message">Message</label>
            <textarea
                id="message"
                name="message"
                value={message}
                onChange={e => setMessage(e.target.value)}
                rows="6"
                columns="10"
            />

            <div className="empty"></div>
            <div className="send-button-wrapper border">
                <Button
                    title="Send message"
                    bsPrefix="btn btn--primary btn--send-message"
                    onClick={handleSubmit}
                />
            </div>
        </div>
    )
}

export default ContactForm;