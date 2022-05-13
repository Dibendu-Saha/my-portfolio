import { Highlight } from "../../common/wrapper/AppComponents";
import icon_new_window from "../../../assets/images/icon-new-window.png";

function Content() {
    return (
        <>
            <p>
                I'm a <Highlight>full-stack developer</Highlight> by profession. I design web user interfaces
                and hook them up with backend API's to build complete data-driven solutions for end-clients.
            </p>

            <p>
                I was mainly into backend programming developing Web API's in C# and ASP.NET other
                than the usual jQuery but since I'm passionate about web design, graphics and design in general,
                I managed to get my hands dirty into the world of UI and UX &#8212; working exclusively on the
                frontend tech stack &#8212; HTML5, CSS3, JavaScript and React.
            </p>

            <p>
                I also hold a certification in <a href="https://www.credly.com/badges/3c6991e8-43ec-4dc5-8006-d19ec9a456e6" target="_blank" rel="noreferrer">
                    <span className="link-text">
                        Azure Fundamentals
                    </span>
                    <span> <img src={icon_new_window} alt="Open in new window icon" className="icon-new-window" /></span>
                </a> from Microsoft.
            </p>

            <p>
                At present, I'm a <Highlight>Technical Consultant</Highlight> at <Highlight>Hewlett Packard Enterprise</Highlight>,
                where I work as a full-stack developer, developing user interface components with <Highlight>HTML5, CSS3, React</Highlight> and
                connect it via the Web API using <Highlight>C#, ASP.NET Core</Highlight> and <Highlight>SQL Server</Highlight>.
            </p>
        </>
    )
}

export default Content;