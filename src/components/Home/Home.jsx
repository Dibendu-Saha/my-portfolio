import { Section, Container } from "../common/wrapper/WrapperComponents";
import { Button } from "../../utils/Button/Button";
import "./Home.css";

function Home() {
    return (
        <Section linearGradientDegree="120">
            <Container>
                <div className="grid grid--intro">
                    <div className="intro-me">
                        <h1>Hey there!</h1>
                        <p>I'm Dibendu</p>
                    </div>
                    <div className="flex flex--hobbies grid--intro-about">
                        <p>...and I'm a</p>
                        <p>Full Stack Developer</p>
                        <p>by profession</p>
                    </div>
                </div>
                <div className="flex flex--explore">
                    <Button title="Let's Explore" type="primary" href="#section-about" />
                </div>
            </Container>
        </Section>
    )
}

export default Home;