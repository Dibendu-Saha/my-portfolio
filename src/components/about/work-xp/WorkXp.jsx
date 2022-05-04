import { Section, Container, H1, Flex, Grid } from "../../common/wrapper/AppComponents";
import hpe_logo from "../../../assets/images/hpe_logo.svg";
import wf_logo from "../../../assets/images/wf_logo.svg";
import "./WorkXp.css";
import Org from "./Org";

function WorkXp() {
    return (
        <Section id="work-xp" bgLinearGradientDegree="90">
            <Container>
                <H1 weight="light" className="reveal-header1111" >
                    Work experience
                </H1>

                <div>
                    <Org
                        logo={hpe_logo}
                        orgName="Hewlett Packard Enterprise"
                        startMonth="October 2021"
                        endMonth="Present"
                    >
                        Deputed to client location &#8212; Hewlett Packard Enterprise, working as a full-stack developer on an
                        internal application responsible for creating and managing “Statements of Work” that captures all projects
                        related details including but not limited to resources, costing and billing required for various clients.
                        The application is based on React and Redux for its frontend tech stack while the API is based on the .NET
                        core framework.
                    </Org>

                    <Org
                        logo={wf_logo}
                        orgName="Wells Fargo"
                        startMonth="April 2018"
                        endMonth="August 2021"
                    >
                        Primarily worked on the front-end tech stack on a trading-based application, responsible for
                        designing and developing the UI/UX components based on Wells Fargo&#39;s proprietary web
                        framework along with React, JavaScript, HTML and CSS. Prior to this, I've mainly worked as a
                        back-end developer, developing app codes using C#, ASP.NET MVC, LINQ, Entity Framework and Web API.
                    </Org>
                </div>

            </Container>
        </Section>
    )
}

export default WorkXp;