import React from "react";
import "./Main.css"

function Main() {
    return (
        <>
            <header>
                <div className="menu-area">
                    <nav className="nav-bar">
                        <ul className="nav-links-container">
                            <li>
                                <a href="#" className="nav-link">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#section-about" className="nav-link">
                                    About me
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link">
                                    Work
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main>
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
                                    <a href className="btn btn--primary">
                                        Know more
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Main;