import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../header/Header";
import LandingComponent from "../landing-component/LandingComponent";
import Home from "../home/Home";
import AboutMe from "../about/about-me/AboutMe";
import PersonalDetails from "../xx-about-details/personal-details/PersonalDetails";
import TechSkills from "../about/tech-skills/TechSkills";
import "./Main.css"

function Main() {
    return (
        <>
            <main>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={<LandingComponent />} exact />

                        {/* <Route path="/" element={<Home />} exact />
                        <Route path="/about" element={<AboutMe />} exact />
                        <Route path="/work" element={<TechSkills />} exact /> */}
                    </Routes>
                </BrowserRouter>
            </main>
        </>
    );
}

export default Main;