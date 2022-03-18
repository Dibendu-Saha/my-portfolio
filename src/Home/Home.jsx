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
                    <div className="flex flex--hobbies intro-about">
                        <p>...and I'm a</p>
                        <p>Full Stack Developer</p>
                        <p>by profession</p>
                        {/* <p>Full Stack Developer</p>
                        <p>&amp;</p>
                        <p>Photography Enthusiast</p> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;