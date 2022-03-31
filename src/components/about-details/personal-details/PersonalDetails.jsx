import { Section, Container, H1, Card } from "../../common/wrapper/WrapperComponents";
import myPhoto from "../../../assets/images/portfolio_4_by_3.jpg";
import "./PersonalDetails.css";

function PersonalDetails() {
    return (
        <Section bgLinearGradientDegree="120">
            <Container>
                <H1 weight="light">My personal space</H1>
                <div className="flex flex--about-personal border-red">
                    <div className="info">
                        {/* <H1 weight="light">My personal space</H1> */}
                        <p className="welcome-back">
                            <span className="first-letter">G</span>rrreeetings<span className="ellipsis">!!!</span>
                        </p>
                        <div className="about-me-content">
                            <div>
                                <Card style="dark">I'm Dibendu Saha</Card>

                            </div>
                        </div>
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