import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../header/Header";
import LandingComponent from "../landing-component/LandingComponent";
import PersonalDetails from "../about-details/personal-details/PersonalDetails";
import "./Main.css"

function Main() {
    return (
        <>
            <Header />

            <main>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LandingComponent />} exact />
                        <Route path="/personal" element={<PersonalDetails />} exact />
                    </Routes>
                </BrowserRouter>
            </main>
        </>
    );
}

export default Main;