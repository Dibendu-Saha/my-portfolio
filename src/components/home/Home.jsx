import { useEffect, useRef, useState } from "react";
import { useReveal } from "../common/hooks/AppHooks";
import { Section, Container, H1, Flex, Grid, Button } from "../common/wrapper/AppComponents";
import { LogSiteVisit } from "../common/utils/LogSiteVisit";
import "./Home.css";

function Home() {
    const refSection = useRef();
    const refHeader = useRef();
    const refContent = useRef();
    const refButton = useRef();

    const [_, setDummy] = useState("");

    useEffect(() => {
        setDummy("...to trigger a re-render");
        LogSiteVisit("Home");
    }, []);

    useReveal(refSection.current, refHeader.current);
    useReveal(refSection.current, refContent.current);
    useReveal(refSection.current, refButton.current);

    
    return (
        <Section bgLinearGradientDegree="90" reactRef={refSection}>
            <Container>
                <Grid className="grid--intro">
                    <div className="intro-me reveal-header" ref={refHeader}>
                        <H1>Hey there!</H1>
                        <H1
                            weight="light"
                            className="header-home typewriter-home"
                        >
                            I'm Dibendu
                        </H1>
                    </div>
                    <Flex className="flex--profession grid--intro-about reveal-content" reactRef={refContent}>
                        <p>Developer</p>
                        <p>&amp;</p>
                        <p>Design Enthusiast</p>
                    </Flex>
                </Grid>
                <div className="explore-btn-wrapper" ref={refButton}>
                    <Button title="Let's Explore" type="primary" link="about" />
                </div>
            </Container>
        </Section>
    )
}

export default Home;