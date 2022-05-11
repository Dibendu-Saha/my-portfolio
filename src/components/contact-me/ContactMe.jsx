import { useEffect, useRef, useState } from "react";
import { useReveal } from "../common/hooks/AppHooks";
import { Section, Container, H1, Flex, Grid, IconTile } from "../common/wrapper/AppComponents";
import linkedin_icon from "../../assets/images/icon-linkedin.svg";
import fb_icon from "../../assets/images/icon-facebook.svg";
import ig_icon from "../../assets/images/icon-instagram.svg";
import github_icon from "../../assets/images/icon-github.svg";
import ContactForm from "./ContactForm";
import "./ContactMe.css"

function ContactMe() {
    const refSection = useRef();
    const refHeader = useRef();
    const refContent = useRef();
    const refLinkedIn = useRef();
    const refInstagram = useRef();
    const refFacebook = useRef();
    const refGithub = useRef();

    const [_, setDummy] = useState("");

    useEffect(() => setDummy("...to trigger a re-render"), []);

    useReveal(refSection.current, refHeader.current);
    useReveal(refSection.current, refContent.current);
    useReveal(refSection.current, refLinkedIn.current);
    useReveal(refSection.current, refInstagram.current);
    useReveal(refSection.current, refFacebook.current);
    useReveal(refSection.current, refGithub.current);

    return (
        <Section id="contact-me" bgLinearGradientDegree="90" reactRef={refSection}>
            <Container>
                <H1
                    weight="light"
                    className="typewriter reveal-header"
                    reactRef={refHeader}
                >
                    Let's talk
                </H1>
                <Flex className="flex--contact-me reveal-content" reactRef={refContent}>
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
                        <Grid col="4" className="grid--social-icons">
                            <a href="https://www.linkedin.com/in/dibendu-saha/" target="_blank" className="linkedin-wrapper" ref={refLinkedIn}>
                                <IconTile icon={linkedin_icon} className="linkedin-icon" />
                            </a>
                            <a href="https://www.instagram.com/dibendu.s/" target="_blank" className="ig-wrapper" ref={refInstagram}>
                                <IconTile icon={ig_icon} className="ig-icon" />
                            </a>
                            <a href="https://www.facebook.com/dibendu03" target="_blank" className="fb-wrapper" ref={refFacebook}>
                                <IconTile icon={fb_icon} className="fb-icon" />
                            </a>
                            <a href="https://github.com/Dibendu-Saha" target="_blank" className="github-wrapper" ref={refGithub}>
                                <IconTile icon={github_icon} className="github-icon" />
                            </a>
                        </Grid>
                    </div>
                </Flex>
            </Container>
        </Section>
    )
}

export default ContactMe;