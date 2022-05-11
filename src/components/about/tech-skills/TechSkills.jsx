import { useState, useEffect, useRef } from "react";
import { useReveal } from "../../common/hooks/AppHooks";
import { Section, Container, H1, Flex, Grid, Button } from "../../common/wrapper/AppComponents";
import Content from "./Content";
import IconsTech from "./IconsTech";
import "./TechSkills.css";

function TechSkills() {
    const refSection = useRef();
    const refHeader = useRef();
    const refContent = useRef();
    const refButton = useRef();

    const [_, setDummy] = useState("");

    useEffect(() => setDummy("...to trigger a re-render"), []);

    useReveal(refSection.current, refHeader.current);
    useReveal(refSection.current, refContent.current);
    useReveal(refSection.current, refButton.current);

    return (
        <Section id="work" bgLinearGradientDegree="90" reactRef={refSection}>
            <Container>
                <H1 weight="light" reactRef={refHeader} className="typewriter reveal-header">
                    What I do?
                </H1>

                <Flex className="flex--tech-overview reveal-content" reactRef={refContent}>
                    <div className="tech-background">
                        <Content />
                    </div>
                    <Grid col="4" className="grid--skills">
                        <IconsTech sectionRef={refSection.current} />
                    </Grid>
                </Flex>

                <div className="work-xp-btn-wrapper" ref={refButton}>
                    <Button title="See work history" type="primary" link="/work-xp" />
                </div>
            </Container>
        </Section >
    )
}

export default TechSkills;