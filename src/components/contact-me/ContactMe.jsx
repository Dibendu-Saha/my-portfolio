import { Section, Container, H1 } from "../common/wrapper/WrapperComponents";
import { Button } from "../common/utils/Button";
import "./ContactMe.css"

function ContactMe() {
    return (
        <Section id="contact-me" bgLinearGradientDegree="60">
            <Container>
                <H1 weight="light">Contact me</H1>
                <div className="flex contact-me">


                    <div className="contact-form-container">
                        <div className="collab-message">
                            <p>Interested to collaborate &amp; work together?</p>
                            <p>Send me a message</p>
                        </div>
                        <div className="contact-form">
                            <div className="grid grid--cols-2 grid--contact-form-layout">
                                <label htmlFor="name">Name</label>
                                <input id="name" name="name" type="text" />

                                <label htmlFor="email">Email</label>
                                <input id="email" name="email" type="text" />

                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" rows="8" columns="10" />

                                <div className="empty"></div>
                                <div className="send-button-wrapper border">
                                    <Button
                                        title="Send message"
                                        bsPrefix="btn btn--primary btn--send-message"
                                        onClick={() => alert('submit')}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-options">
                    </div>



                </div>
            </Container>
        </Section>
    )
}

export default ContactMe;