import { useState, useEffect, useRef } from "react";
import { useReveal } from "../../common/hooks/AppHooks";
import { Section, Container, H1, Flex, Grid } from "../../common/wrapper/AppComponents";
import Content from "./Content";
import IconsTech from "./IconsTech";
import "./TechSkills.css";

function TechSkills() {
    const refSection = useRef();
    const refHeader = useRef();
    const refContent = useRef();

    const [_, setDummy] = useState("");

    useEffect(() => setDummy("...to trigger a re-render"), []);

    useReveal(refSection.current, refHeader.current);
    useReveal(refSection.current, refContent.current);

    return (
        <Section id="work" bgLinearGradientDegree="120" reactRef={refSection}>
            <Container>
                <H1
                    weight="light"
                    reactRef={refHeader}
                    className="reveal-skills-header"
                >
                    Tech expertise
                </H1>
                <Flex className="flex--tech-overview reveal-skills-content" reactRef={refContent}>
                    <div className="tech-background">
                        <Content />
                    </div>
                    <Grid col="4" className="grid--skills">
                        <IconsTech />
                    </Grid>
                </Flex>
            </Container>
        </Section >
    )
}

export default TechSkills;