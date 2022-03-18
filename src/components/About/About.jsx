import { Button } from "../utils/Button";
import "./About.css"

function About() {
    return (
        <section id="section-about" className="section-about">
            <div className="container">
                <div className="flex flex--about-container">
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
                </div>
            </div>
        </section>
    )
}

export default About;