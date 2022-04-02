import { Section, Container, H1 } from "../../common/wrapper/WrapperComponents";
import "./TechSkills.css";

function TechSkills() {
    return (
        <Section bgLinearGradientDegree="120">
            <Container>
                <H1 weight="light">Tech expertise</H1>
                <div className="flex flex--tech-overview">
                    <div className="tech-background">
                        <p>
                            I'm a full-stack developer, by profession. I've around 8 years of industry experience,
                            working on both the frontend and backend technnology.
                        </p>
                        <br />
                        <p>
                            I started off my career in 2014 with a backend skillset in the Mirosoft .NET Framework &#8212; working
                            in C# and ASP.NET web forms for the initial 6 months, post which I started learning and working on
                            the ASP.NET MVC framework and soon enough, with ASP.NET Web API (still using C#, for people not
                            familiar with .NET) and using jQuery for the UI (at that time, pages were still getting generated
                            from server-side codes and sent back as a response).
                        </p>
                        <br />
                        <p>
                            Fast forward to 2018, when the world was already moving at lightning speed, I was finally
                            able to catch up &#8212; working excluively on the frontend tech stack &#8212; HTML5, CSS3,
                            JavaScript and React.js. Yes, I was finally a part of the exclusive club where pages
                            were not getting generated from server-side codes anymore!
                        </p>
                        <br />
                        <p>
                            At present, I'm working again as a full-stack developer since Oct'21 working on the modern
                            tech stack &#8212; <strong>HTML5, CSS3</strong> and <strong>React</strong> for the UI/UX and
                            <strong>C#, ASP.NET Core</strong> and <strong>Web API</strong> for the server-side.
                        </p>
                    </div>
                    <div className="skill-icon border-green"></div>
                </div>
            </Container>
        </Section>
    )
}

export default TechSkills;