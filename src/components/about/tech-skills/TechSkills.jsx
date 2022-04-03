import { Section, Container, H1 } from "../../common/wrapper/WrapperComponents";
import Content from "./Content";
import IconsTech from "./IconsTech";
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
                    <div className="grid grid--cols-4 grid--skills">
                        <IconsTech />
                    </div>
                </div>
            </Container>
        </Section >
    )
}

export default TechSkills;