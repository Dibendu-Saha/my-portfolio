import "./Home.css";

function Home() {
    return (
        <section className="section-home">
            <div className="container-home">
                <div className="grid grid--intro">
                    <div className="intro-me">
                        <h1>Hello</h1>
                        <p>I'm Dibendu</p>
                    </div>
                    <div className="flex flex--hobbies intro-about">
                        <p>Developer</p>
                        <p>&amp;</p>
                        <p>Photography Enthusiast</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;