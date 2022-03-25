import { Button } from "../../utils/Button";
import "./About.css"

function About() {
    return (
        <section id="section-about" className="section-about">
            <div className="container-about">
                {/* Commented code | Previous design */}
                <>
                    {/* <div className="flex flex--about-container">
                    <div className="flex flex--personal-info">
                        <div className="info-card">
                            <p>Myself,</p>
                            <p>Dibendu Saha</p>
                        </div>
                        <div className="info-card">
                            <p>Born in Assam, India</p>
                        </div>
                        <div className="info-card">
                            <p>17th April, 1990</p>
                        </div>
                        <div className="info-card">
                            <p>Graduate in Electronics &amp; Comm.</p>
                        </div>
                        <div className="info-card">
                            <p>7+ years in the IT industry</p>
                        </div>
                        <div className="info-card">
                            <p>Developer &amp; Photography Enthusiast</p>
                        </div>
                        <div className="info-card">
                            <p>Currently living in Bangalore, India</p>
                        </div>
                    </div>
                    <div className="know-more">
                        <div className="flex flex--know-more">
                            <p>Here's a peek at my professional background . . .</p>
                            <Button title="Know more" type="primary" />
                        </div>
                    </div>
                </div> */}
                </>

                <div className="grid grid--cols-3 grid--about">
                    <div className="flex flex--about-section personal-info">
                        <Button
                            title="Personal"
                            type="none"
                            // onClick={() => alert('Personal')}
                            link="/personal"
                        />
                    </div>
                    <div className="flex flex--about-section education-info">
                        <Button
                            title="Education"
                            type="none"
                            link=""
                        />
                    </div>
                    <div className="flex flex--about-section professional-info">
                        <Button
                            title="Professional"
                            type="none"
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About;