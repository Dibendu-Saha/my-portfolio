import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../header/Header";
import LandingComponent from "../landing-component/LandingComponent";
import Home from "../home/Home";
import AboutMe from "../about/about-me/AboutMe";
import TechSkills from "../about/tech-skills/TechSkills";
import WorkXp from "../about/work-xp/WorkXp";
import ContactMe from "../contact-me/ContactMe";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./Main.css";

function Main() {
    return (
        <>
            <main>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        {/* <Route path="/" element={<LandingComponent />} exact /> */}

                        <Route path="/" element={<Home />} exact />
                        <Route path="/about" element={<AboutMe />} exact />
                        <Route path="/work" element={<TechSkills />} exact />
                        <Route path="/work-xp" element={<WorkXp />} exact />
                        <Route path="/contact-me" element={<ContactMe />} exact />
                    </Routes>
                </BrowserRouter>
                <ToastContainer />
            </main>
        </>
    );
}

export default Main;