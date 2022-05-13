import { useState } from "react";
import { Button } from "../common/wrapper/AppComponents";
import axios from "axios";
import { toast } from "react-toastify";
import "./ContactForm.css";

function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isValidEmail, setEmailValidity] = useState(true);
    const [isEmailTrigger, setEmailTrigger] = useState(false);

    const validateEmail = () => {
        let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let isValid = emailRegex.test(email);

        if (email.trim().length && !isValid)
            setEmailValidity(false);
        else
            setEmailValidity(true);
    }

    const handleSubmit = async () => {
        setEmailTrigger(true);

        if (!name.trim().length || !email.trim().length || !message.trim().length) {
            toast.warn("Please fill in all the input fields");
            return;
        }

        const URL = `https://portfoliosendemailazurefunction.azurewebsites.net/api/SendEmail?name=${name}&email=${email}`;
        const URL_Stage = `https://portfoliosendemailazurefunction-stage.azurewebsites.net/api/SendEmail?name=${name}&email=${email}`;

        try {
            await toast.promise(
                axios.post(URL, { message }),
                {
                    pending: "Sending email...",
                    success: "Email sent",
                    error: {
                        render({ data }) {
                            return data.response.data.message ?? "Something went wrong!";
                        }
                    }
                }
            );
        }
        catch (exception) {
            if (exception.response.data.statusText !== "ERR_INPUT_STR")
                alert('ERR: Exception!');
        }
        finally {
            setEmailTrigger(false);
        }
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
                className={
                    isEmailTrigger && !name.trim().length
                        ? "error"
                        : ""
                }
            />

            <label htmlFor="email">Email</label>
            <input
                id="email"
                name="email"
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onBlur={validateEmail}
                className={
                    !isValidEmail || (isEmailTrigger && !email.trim().length)
                        ? "error"
                        : ""
                }
            />

            <label htmlFor="message">Message</label>
            <textarea
                id="message"
                name="message"
                value={message}
                onChange={e => setMessage(e.target.value)}
                rows="6"
                columns="10"
                className={
                    isEmailTrigger && !message.trim().length
                        ? "error"
                        : ""
                }
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