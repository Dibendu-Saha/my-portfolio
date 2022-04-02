import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../header/Header";
import LandingComponent from "../landing-component/LandingComponent";
import Home from "../home/Home";
import AboutMe from "../about/about-me/AboutMe";
import PersonalDetails from "../about-details/personal-details/PersonalDetails";
import "./Main.css"

function Main() {
    return (
        <>
            <main>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        {/* <Route path="/" element={<LandingComponent />} exact />
                        <Route path="/personal" element={<PersonalDetails />} exact /> */}

                        <Route path="/" element={<Home />} exact />
                        <Route path="/about" element={<AboutMe />} exact />
                    </Routes>
                </BrowserRouter>
            </main>
        </>
    );
}

export default Main;