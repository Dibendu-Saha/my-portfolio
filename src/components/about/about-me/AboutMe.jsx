import { useEffect, useRef, useState } from "react";
import { useReveal } from "../../common/hooks/AppHooks";
import { Section, Container, H1, Flex, Grid, Card, Button } from "../../common/wrapper/AppComponents";
import Content from "./Content";
import profilePhoto from "../../../assets/images/portfolio_4_by_3.jpg";
import "./AboutMe.css";

function AboutMe() {
    const refSection = useRef();
    const refHeader = useRef();
    const refContent = useRef();
    const refProfilePhoto = useRef();
    const refButton = useRef();

    const [_, setDummy] = useState("");

    useEffect(() => setDummy("...to trigger a re-render"), []);

    useReveal(refSection.current, refHeader.current);
    useReveal(refSection.current, refContent.current);
    useReveal(refSection.current, refProfilePhoto.current);
    useReveal(refSection.current, refButton.current);

    return (
        <Section id="about" bgLinearGradientDegree="120" reactRef={refSection} >
            <Container>
                <H1
                    weight="light"
                    className="reveal-header"
                    reactRef={refHeader}
                >
                    My personal space
                </H1>

                <Flex className="flex--about-me reveal-content" reactRef={refContent}>
                    <div className="about-me-content">
                        <Content />
                    </div>

                    <div className="profile-picture" ref={refProfilePhoto}>
                        <img src={profilePhoto} alt="portfolio" />
                    </div>
                </Flex>

                <div className="know-work-btn-wrapper" ref={refButton}>
                    <Button title="Know more" type="primary" link="/work" />
                </div>
            </Container>
        </Section>
    )
}

export default AboutMe;