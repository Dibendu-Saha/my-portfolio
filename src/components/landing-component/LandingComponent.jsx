import Home from "../home/Home";
import AboutMe from "../about/about-me/AboutMe";
import TechSkills from "../about/tech-skills/TechSkills";
import ContactMe from "../contact-me/ContactMe";

function LandingComponent() {
    return (
        <>
            <Home />
            <AboutMe />
            <TechSkills />
            <ContactMe />
        </>
    )
}

export default LandingComponent;