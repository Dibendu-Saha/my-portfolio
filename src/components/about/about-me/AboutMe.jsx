import { useEffect, useRef, useState } from "react";
import { useReveal } from "../../common/hooks/AppHooks";
import { Section, Container, H1, Flex, Grid, Card, Button } from "../../common/wrapper/AppComponents";
import Content from "./Content";
// import myPhoto from "../../../assets/images/portfolio_4_by_3.jpg";
import "./AboutMe.css";

function AboutMe() {
    const refSection = useRef();
    const refHeader = useRef();
    const refContent = useRef();

    const [_, setDummy] = useState("");

    useEffect(() => setDummy("...to trigger a re-render"), []);

    useReveal(refSection.current, refHeader.current);
    useReveal(refSection.current, refContent.current);

    return (
        <Section id="about" bgLinearGradientDegree="60" reactRef={refSection} >
            <Container>
                <div>
                    <H1
                        weight="light"
                        className="reveal-about-header"
                        reactRef={refHeader}
                    >
                        My personal space
                    </H1>

                    <Flex className="flex--about-me reveal-about-content" reactRef={refContent}>
                        <div className="about-me-content">
                            <Content />
                        </div>

                        <div className="profile-picture">
                            <img src="" alt="portfolio" />
                        </div>
                    </Flex>
                </div>
            </Container>
        </Section>
    )
}

export default AboutMe;