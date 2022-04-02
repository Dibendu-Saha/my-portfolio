import { Section, Container, H1 } from "../../common/wrapper/WrapperComponents";
import Content from "./Content";
import "./TechSkills.css";

function TechSkills() {
    return (
        <Section bgLinearGradientDegree="120">
            <Container>
                <H1 weight="light">Tech expertise</H1>
                <div className="flex flex--tech-overview">
                    <div className="tech-background">
                        <Content />
                    </div>
                    <div className="skill-icon border-green"></div>
                </div>
            </Container>
        </Section>
    )
}

export default TechSkills;