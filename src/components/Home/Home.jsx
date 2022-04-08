import { Section, Container, H1 } from "../common/wrapper/AppComponents";
import { Button } from "../common/utils/Button";
import "./Home.css";

function Home() {
    return (
        <Section bgLinearGradientDegree="120">
            <Container>
                <div className="grid grid--intro">
                    <div className="intro-me">
                        <H1>Hey there!</H1>
                        <H1 weight="light">I'm Dibendu</H1>
                    </div>
                    <div className="flex flex--hobbies grid--intro-about">
                        <p>...and I'm a</p>
                        <p>Full Stack Developer</p>
                        <p>by profession</p>
                    </div>
                </div>
                <div className="flex flex--explore">
                    <Button title="Let's Explore" type="primary" href="#about" />
                </div>
            </Container>
        </Section>
    )
}

export default Home;