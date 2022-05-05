import { useEffect, useRef, useState } from "react";
import { useReveal } from "../../common/hooks/AppHooks";
import { useNavigate, useLocation } from "react-router-dom";
import { Section, Container, H1, Button } from "../../common/wrapper/AppComponents";
import hpe_logo from "../../../assets/images/hpe_logo.svg";
import wf_logo from "../../../assets/images/wf_logo.svg";
import tek_logo from "../../../assets/images/tek_logo.svg";
import iqss_logo from "../../../assets/images/iqss_logo.svg";
import expand from "../../../assets/images/icon-expand.png";
import collapse from "../../../assets/images/icon-collapse.png";
import "./WorkXp.css";
import Org from "./Org";

function WorkXp() {
    let location = useLocation();
    let navigate = useNavigate();

    const refSection = useRef();
    const refHeader = useRef();
    const refOrgHpe = useRef();
    const refOrgWf = useRef();

    const refSectionNext = useRef();
    const refOrgTek = useRef();
    const refOrgIq = useRef();

    const [isSeeMore, setSeeMore] = useState(true);
    const [_, setDummy] = useState("");

    useEffect(() => {
        console.log(location);
        // navigate("/home", { replace: true });
    }, []);

    useEffect(() => setDummy("...to trigger a re-render"), []);

    useReveal(refSection.current, refHeader.current);
    useReveal(refSection.current, refOrgHpe.current);
    useReveal(refSection.current, refOrgWf.current);
    useReveal(refSectionNext.current, refOrgTek.current);
    useReveal(refSectionNext.current, refOrgIq.current);

    return (
        <>
            <Section id="home" bgLinearGradientDegree="90" reactRef={refSection}>
                <Container>
                    <H1 weight="light" className="reveal-header" reactRef={refHeader} >
                        Work experience
                    </H1>

                    <div>
                        <Org
                            logo={hpe_logo}
                            orgName="Hewlett Packard Enterprise"
                            startMonth="October 2021"
                            endMonth="Present"
                            className="reveal-org-hpe"
                            reactRef={refOrgHpe}
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
                            className="reveal-org-wf"
                            reactRef={refOrgWf}
                        >
                            Primarily worked on the front-end tech stack on a trading-based application, responsible for
                            designing and developing the UI/UX components based on Wells Fargo&#39;s proprietary web
                            framework along with React, JavaScript, HTML and CSS. Prior to this, I've mainly worked as a
                            back-end developer, developing app codes using C#, ASP.NET MVC, LINQ, Entity Framework and Web API.
                        </Org>
                    </div>
                </Container>
            </Section>

            <Section id="next" bgLinearGradientDegree="90" reactRef={refSectionNext}>
                <Container>
                    <div className="next-page-wrapper">
                        <Org
                            logo={tek_logo}
                            orgName="TEKsystems"
                            startMonth="April 2016"
                            endMonth="March 2018"
                            className="reveal-org-tek"
                            reactRef={refOrgTek}
                        >
                            Placed at Hewlett Packard Enterprise, a client of TEKsystems, working mainly on C#, ASP.NET, MVC 5,
                            LINQ, Entity Framework 6.0 and Web API 2.0 on an all-round HPE&#39;s Consulting Business Management
                            tool &#8212; RCMS &#8212; a platform for resource-onboarding and remote-consulting, starting from
                            Project initiation, Resource Engagement and Timesheet, Travel Plans, Approvals and Estimations to
                            Billing and Project Closure.
                        </Org>

                        <Org
                            logo={iqss_logo}
                            orgName="IQ Software Services"
                            startMonth="March 2014"
                            endMonth="April 2016"
                            className="reveal-org-iq"
                            reactRef={refOrgIq}
                        >
                            My launch platform where hands-on was the mantra. Starting from C#, ASP.NET web forms &#8212;
                            to working on MSI package for bundling a Java application &#8212; to JavaScript, jQuery, AJAX &#8212; to
                            ASP.NET MVC, Entity Framework and SQL Server &#8212; the opportunity to work on multiple
                            projects and clients &#8212; the organization taught me all.
                        </Org>
                    </div>

                </Container>
            </Section>

            <div className="more-btn-wrapper">
                <a href={isSeeMore ? "#home" : "#next"} onClick={() => setSeeMore(!isSeeMore)}>
                    <img
                        src={isSeeMore ? expand : collapse}
                        alt="See more work experience"
                    />
                </a>
            </div>
        </>
    )
}

export default WorkXp;