import { useEffect, useRef, useState } from "react";
import { useReveal } from "../../common/hooks/AppHooks";
import { Section, Container, H1, Card, Button } from "../../common/wrapper/AppComponents";
// import myPhoto from "../../../assets/images/portfolio_4_by_3.jpg";
import "./AboutMe.css";

function AboutMe() {
    const refSection = useRef();
    const refHeader = useRef();
    const refContent = useRef();

    const [_, setDummy] = useState("");

    useEffect(() => setDummy("...to trigger a re-render"), []);

    useReveal(refSection.current, refHeader.current);
    useReveal(refSection.current, refContent.current);

    return (
        <Section id="about" bgLinearGradientDegree="60" reactRef={refSection} >
            <Container>
                <div>
                    <H1
                        weight="light"
                        className="reveal-about-header"
                        reactRef={refHeader}
                    >
                        My personal space
                    </H1>

                    <div className="flex flex--about-me reveal-about-content" ref={refContent}>
                        <div className="grid grid--cols-3 grid--about-me-content">
                            <Card height="15rem" width="30rem" style="dark">
                                <p>My name is Dibendu Saha.</p>
                                <p>But you can just call me Deb.</p>
                            </Card>

                            <Card height="15rem" width="30rem">
                                Crash-landed on earth around three decades back,
                                somewhere in the year 1990...
                                {/* Been around on this planet for a while now.. 31 years, 11 months, 10 days to be exact! */}
                            </Card>

                            <Card height="15rem" width="30rem" style="dark">
                                ...and the crash site? Far in North-east India, in the state of Assam!
                            </Card>

                            <Card height="15rem" width="30rem">
                                I love to Sketch. Capture shots. Ride.
                                Oh and yes. Cook. Big Fan of Jamie Oliver (alright. alright. Gordon Ramsay too!)
                            </Card>

                            <Card height="15rem" width="30rem" style="dark">
                                Graduated with a Bachelor's degree in
                                Electronics &amp; Communication, yet landed up in IT
                                (it's still a good thing).
                            </Card>

                            <div className="btn-wrapper">
                                <Card height="15rem" width="30rem">
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
                </div>
            </Container>
        </Section>
    )
}

export default AboutMe;