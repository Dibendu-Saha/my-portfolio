import { Section, Container, H1, IconTile } from "../common/wrapper/WrapperComponents";
import { Button } from "../common/utils/Button";
import linkedin_icon from "../../assets/images/icon-linkedin.svg";
import fb_icon from "../../assets/images/icon-facebook.svg";
import ig_icon from "../../assets/images/icon-instagram.svg";
import github_icon from "../../assets/images/icon-github.svg";
import "./ContactMe.css"

function ContactMe() {
    return (
        <Section id="contact-me" bgLinearGradientDegree="60">
            <Container>
                <H1 weight="light">Let's talk</H1>
                <div className="flex flex--contact-me">
                    <div className="contact-form-container">
                        <div>
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
                        </div>
                    </div>

                    <div className="contact-social">
                        <p>Follow me</p>
                        <div className="grid grid--cols-4 grid--social-icons">
                            <a href="https://www.linkedin.com/in/dibendu-saha/" target="_blank">
                                <IconTile icon={linkedin_icon} />
                            </a>
                            <a href="https://www.instagram.com/?hl=en" target="_blank">
                                <IconTile icon={ig_icon} />
                            </a>
                            <a href="https://www.facebook.com/dibendu03" target="_blank">
                                <IconTile icon={fb_icon} />
                            </a>
                            <a href="https://github.com/Dibendu-Saha" target="_blank">
                                <IconTile icon={github_icon} />
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default ContactMe;