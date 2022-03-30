import { Section, Container, H1 } from "../../common/wrapper/WrapperComponents";
import myPhoto from "../../../assets/images/portfolio_4_by_3.jpg";
import "./PersonalDetails.css";

function PersonalDetails() {
    return (
        <Section bgLinearGradientDegree="120">
            <Container>
                <div className="flex flex--about-personal border-red">
                    <div className="info">
                        <H1 weight="light">My personal space</H1>
                        <p className="welcome-back">Hey! Welcome Back<span className="ellipsis">...</span></p>
                        <p className="about-me-content"></p>
                    </div>
                    <div className="profile-picture">
                        <img src="" alt="portfolio photo" />
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default PersonalDetails;