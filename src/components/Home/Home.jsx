import { Section, Container, H1, Flex, Grid, Button } from "../common/wrapper/AppComponents";
import "./Home.css";

function Home() {
    return (
        <Section bgLinearGradientDegree="120">
            <Container>
                <Grid className="grid--intro">
                    <div className="intro-me">
                        <H1>Hey there!</H1>
                        <H1 weight="light">I'm Dibendu</H1>
                    </div>
                    <Flex className="flex--profession grid--intro-about">
                        {/* <p>...and I'm a</p>
                        <p>Full Stack Developer</p>
                        <p>by profession</p> */}
                        <p>Developer.</p>
                        <p>Design Enthusiast.</p>
                    </Flex>
                </Grid>
                <div className="explore-btn-wrapper">
                    <Button title="Let's Explore" type="primary" href="#about" />
                </div>
            </Container>
        </Section>
    )
}

export default Home;