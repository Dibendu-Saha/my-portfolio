import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useReveal } from "../../common/hooks/AppHooks";
import { Section, Container, H1, Flex } from "../../common/wrapper/AppComponents";
import { LogSiteVisit } from "../../common/utils/LogSiteVisit";
import natwest_logo from "../../../assets/images/natwest_logo.svg";
import wf_logo from "../../../assets/images/wf_logo.svg";
import tek_logo from "../../../assets/images/tek_logo.svg";
import iqss_logo from "../../../assets/images/iqss_logo.svg";
import expand from "../../../assets/images/icon-expand.png";
import collapse from "../../../assets/images/icon-collapse.png";
import download_cv from "../../../assets/images/icon-resume.png";
import icon_chat from "../../../assets/images/icon-chat.png";
import Org from "./Org";
import "./WorkXp.css";

function WorkXp() {
    const refSection = useRef();
    const refHeader = useRef();
    const refOrgNatwest = useRef();
    const refOrgWf = useRef();
    const refDownloadCv = useRef();

    const refSectionNext = useRef();
    const refOrgTek1 = useRef();
    const refOrgTek2 = useRef();
    const refOrgIq = useRef();
    const refContact = useRef();

    const [isSeeMore, setSeeMore] = useState(true);
    const [seeMoreIcon, setSeeMoreIcon] = useState(expand);
    const [_, setDummy] = useState("");

    const URL = process.env.REACT_APP_CV_API_ENDPOINT;
    const URL_STAGE = process.env.REACT_APP_CV_API_ENDPOINT_STAGE;


    useEffect(() => {
        setDummy("...to trigger a re-render");
        setTimeout(() => {
            if (refDownloadCv.current)
                refDownloadCv.current.classList.add("active");
        }, 1800);

        LogSiteVisit("Work - Work experience");
    }, []);

    useReveal(refSection.current, refHeader.current);
    useReveal(refSection.current, refOrgNatwest.current);
    useReveal(refSection.current, refOrgWf.current);
    useReveal(refSectionNext.current, refOrgTek1.current);
    useReveal(refSectionNext.current, refOrgTek2.current);
    useReveal(refSectionNext.current, refOrgIq.current);
    useReveal(refSectionNext.current, refContact.current);

    let options = { root: null, threshold: 0.7 };
    const obs = new IntersectionObserver(entries => {
        entries.forEach(param => {
            if (param.isIntersecting)
                setSeeMoreIcon(collapse);
            else
                setSeeMoreIcon(expand)
        });
    }, options);

    if (refSectionNext.current)
        obs.observe(refSectionNext.current);


    return (
        <>
            <Section id="home" bgLinearGradientDegree="90" reactRef={refSection}>
                <Container>
                    <H1 weight="light" className="typewriter reveal-header" reactRef={refHeader} >
                        Experience highlights
                    </H1>

                    <div>
                        <Org
                            logo={natwest_logo}
                            orgName="NatWest Group"
                            startMonth="December 2022"
                            endMonth="Present"
                            className="reveal-org-nw"
                            reactRef={refOrgNatwest}
                        >
                            Working on the bank's internal application from inception, leveraging Webpack, React.js and Redux 
                            for developing the web components, embracing a modular-approach and a dynamic and responsive user 
                            interface with HTML5 and native CSS3. 
                        </Org>

                        <Org
                            logo={wf_logo}
                            orgName="Wells Fargo"
                            startMonth="April 2018"
                            endMonth="August 2021"
                            className="reveal-org-wf"
                            reactRef={refOrgWf}
                        >
                            Primarily worked on the front-end tech stack for Wells Fargo&#39;s investment application, responsible
                            for designing and developing the UI/UX components based on Wells Fargo&#39;s proprietary web framework
                            along with React.js, Redux and JavaScript. Prior to this, mainly worked as a back-end developer,
                            developing app codes using C#, ASP.NET MVC, LINQ, Entity Framework and Web API.
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
                            startMonth="October 2021"
                            endMonth="November 2022"
                            className="reveal-org-tek"
                            reactRef={refOrgTek1}
                        >
                            Built and contributed to replace Hewlett Packard Enterprise&#39;s manual workflow for creation
                            and management of statement of works, employing React.js and Redux for the frontend of the tool
                            while interfacing with the backend APIs using C#, ASP.NET Core and Entity Framework Core.
                        </Org>

                        <Org
                            logo={tek_logo}
                            orgName="TEKsystems"
                            startMonth="April 2016"
                            endMonth="March 2018"
                            className="reveal-org-tek-2"
                            reactRef={refOrgTek2}
                        >
                            Deputed to client location, Hewlett Packard Enterprise, worked mainly on C#, ASP.NET, MVC 5,
                            LINQ, Entity Framework 6.0 and Web API 2.0 on an all-round HPE&#39;s Consulting Business Management
                            tool &#8212; a platform for resource-onboarding and remote-consulting, starting from project initiation,
                            resource engagement and timesheet, travel plans, approvals and estimations to billing and project closure.
                        </Org>

                        {/* <Org
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
                        </Org> */}
                    </div>

                    <Flex className="flex--contact-wrapper reveal-contact-icon" reactRef={refContact}>
                        <Link to="/contact-me" className="chat-icon-wrapper">
                            <img src={icon_chat} alt="Chat icon" className="chat-icon" />
                        </Link>
                        <Flex className="talk-helper-text">
                            <p>Let's talk?</p>
                        </Flex>
                    </Flex>
                </Container>
            </Section>

            <div className="download-cv-wrapper reveal-cv" ref={refDownloadCv}>
                <a href={URL} target="_blank" rel="noreferrer" onClick={() => LogSiteVisit("download_CV")}>
                    <img src={download_cv} alt="Download CV icon" className="cv-icon" />
                    <p className="download-text">Download CV</p>
                </a>
            </div>

            <div className="more-btn-wrapper">
                <a href={isSeeMore ? "#home" : "#next"} onClick={() => setSeeMore(!isSeeMore)}>
                    <img src={seeMoreIcon} alt="See more work experience" />
                </a>
            </div>
        </>
    )
}

export default WorkXp;