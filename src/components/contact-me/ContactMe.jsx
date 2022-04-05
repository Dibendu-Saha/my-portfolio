import { Section, Container, H1, IconTile } from "../common/wrapper/WrapperComponents";
import linkedin_icon from "../../assets/images/icon-linkedin.svg";
import fb_icon from "../../assets/images/icon-facebook.svg";
import ig_icon from "../../assets/images/icon-instagram.svg";
import github_icon from "../../assets/images/icon-github.svg";
import ContactForm from "./ContactForm";
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
                        <div>
                            <ContactForm />
                        </div>
                    </div>

                    <div className="contact-social">
                        <p>Follow me on</p>
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