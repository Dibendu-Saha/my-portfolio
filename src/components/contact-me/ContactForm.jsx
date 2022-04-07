import { Button } from "../common/utils/Button";
import "./ContactForm.css";

function ContactForm() {
    return (
        <div className="grid grid--cols-2 grid--contact-form-layout contact-form">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" />

            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="text" />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="6" columns="10" />

            <div className="empty"></div>
            <div className="send-button-wrapper border">
                <Button
                    title="Send message"
                    bsPrefix="btn btn--primary btn--send-message"
                    onClick={() => alert('submit')}
                />
            </div>
        </div>
    )
}

export default ContactForm;