import { Grid, Button } from "../common/wrapper/AppComponents";
import "./ContactForm.css";

function ContactForm() {
    return (
        <Grid className="grid--contact-form-layout contact-form">
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
        </Grid>
    )
}

export default ContactForm;