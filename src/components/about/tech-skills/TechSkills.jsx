import { Section, Container, H1 } from "../../common/wrapper/WrapperComponents";
import Content from "./Content";

import html_icon from "../../../assets/images/icon-html.svg";
import css_icon from "../../../assets/images/icon-css3.svg";
import js_icon from "../../../assets/images/icon-javascript.svg";
import jquery_icon from "../../../assets/images/icon-jquery.svg";
import react_icon from "../../../assets/images/icon-react.svg";
import redux_icon from "../../../assets/images/icon-redux.svg";
import csharp_icon from "../../../assets/images/icon-c-sharp.svg";
import db_icon from "../../../assets/images/icon-database.svg";

import IconTile from "./IconTile";
import "./TechSkills.css";

function TechSkills() {
    return (
        <Section bgLinearGradientDegree="120">
            <Container>
                <H1 weight="light">Tech expertise</H1>
                <div className="flex flex--tech-overview">
                    <div className="tech-background">
                        <Content />
                    </div>
                    <div className="grid grid--cols-4 grid--skills">
                        <IconTile icon={html_icon} />
                        <IconTile icon={css_icon} />
                        <IconTile icon={js_icon} />
                        <IconTile icon={jquery_icon} />

                        <IconTile icon={react_icon} />
                        <IconTile icon={redux_icon} />
                        <IconTile icon={csharp_icon} />
                        <IconTile icon={html_icon} />

                        <IconTile icon={db_icon} />
                        <IconTile icon={js_icon} />
                    </div>
                </div>
            </Container>
        </Section >
    )
}

export default TechSkills;