import { Section, Container, H1, Card } from "../../common/wrapper/WrapperComponents";
import { Button } from "../../common/utils/Button";
// import myPhoto from "../../../assets/images/portfolio_4_by_3.jpg";
import "./AboutMe.css";

function AboutMe() {
    return (
        <Section bgLinearGradientDegree="120">
            <Container>
                <H1 weight="light">My personal space</H1>
                <div className="flex flex--about-me">
                    <div className="grid grid--cols-3 grid--about-me-content">
                        <Card height="15" width="30" style="dark">
                            <p>My name is Dibendu Saha.</p>
                            <p>But you can just call me Deb.</p>
                        </Card>

                        <Card height="15" width="30">
                            Crash-landed on earth around three decades back,
                            somewhere in the year 1990...
                            {/* Been around on this planet for a while now.. 31 years, 11 months, 10 days to be exact! */}
                        </Card>

                        <Card height="15" width="30" style="dark">
                            ...and the crash site? Far in North-east India, in the state of Assam!
                        </Card>

                        <Card height="15" width="30">
                            I love to Sketch. Capture shots. Ride.
                            Oh and yes. Cook. Big Fan of Jamie Oliver (alright. alright. Gordon Ramsay too!)
                        </Card>

                        <Card height="15" width="30" style="dark">
                            Graduated with a Bachelor's degree in
                            Electronics &amp; Communication, yet landed up in IT
                            (it's still a good thing).
                        </Card>

                        <div className="btn-wrapper">
                            <Card height="15" width="30">
                                <Button
                                    title="Know about my professional experience..."
                                    type="none"
                                    link="/work"
                                />
                            </Card>
                        </div>
                    </div>

                    <div className="profile-picture">
                        <img src="" alt="portfolio" />
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default AboutMe;