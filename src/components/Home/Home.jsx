import { Button } from "../../utils/Button";
import "./Home.css";

function Home() {
    return (
        <section className="section-home">
            <div className="container-home">
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

                <div className="explore">
                    <Button title="Let's Explore" type="primary" />
                </div>
            </div>
        </section>
    )
}

export default Home;