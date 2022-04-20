import { useEffect, useRef, useState } from "react";
import { useReveal } from "../common/hooks/AppHooks";
import { Section, Container, H1, Flex, Grid, Button } from "../common/wrapper/AppComponents";
import "./Home.css";

function Home() {
    const refSection = useRef();
    const refHeader = useRef();
    const refContent = useRef();

    const [_, setDummy] = useState("");

    useEffect(() => setDummy("...to trigger a re-render"), []);

    useReveal(refSection.current, refHeader.current);
    useReveal(refSection.current, refContent.current);

    return (
        <Section bgLinearGradientDegree="120" reactRef={refSection}>
            <Container>
                <Grid className="grid--intro">
                    <div className="intro-me reveal-header" ref={refHeader}>
                        <H1>Hey there!</H1>
                        <H1 weight="light">I'm Dibendu</H1>
                    </div>
                    <Flex className="flex--profession grid--intro-about reveal-content" reactRef={refContent}>
                        {/* <p>...and I'm a</p>
                        <p>Full Stack Developer</p>
                        <p>by profession</p> */}
                        <p>Developer.</p>
                        <p>Design Enthusiast.</p>
                    </Flex>
                </Grid>
                <div className="explore-btn-wrapper">
                    <Button title="Let's Explore" type="primary" link="about" />
                </div>
            </Container>
        </Section>
    )
}

export default Home;