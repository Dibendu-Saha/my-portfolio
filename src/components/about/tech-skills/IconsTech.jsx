import { useState, useEffect, useRef } from "react";
import { useReveal } from "../../common/hooks/AppHooks";

import html_icon from "../../../assets/images/icon-html.svg";
import css_icon from "../../../assets/images/icon-css3.svg";
import js_icon from "../../../assets/images/icon-javascript.svg";
import jquery_icon from "../../../assets/images/icon-jquery.svg";
import react_icon from "../../../assets/images/icon-react.svg";
import redux_icon from "../../../assets/images/icon-redux.svg";
import netcore_icon from "../../../assets/images/icon-dotnet-core.svg";
import csharp_icon from "../../../assets/images/icon-c-sharp.svg";
import api_icon from "../../../assets/images/icon-api.svg";
import db_icon from "../../../assets/images/icon-database.svg";

import { IconTile } from "../../common/wrapper/AppComponents";

function IconsTech({ sectionRef }) {
    const refHtml = useRef(),
        refCss = useRef(),
        refJs = useRef(),
        refJquery = useRef(),
        refReact = useRef(),
        refRedux = useRef(),
        refNetCore = useRef(),
        refCsharp = useRef(),
        refApi = useRef(),
        refDb = useRef();

    const [_, setDummy] = useState("");

    useEffect(() => setDummy("...to trigger a re-render"), []);

    useReveal(sectionRef, refHtml.current);
    useReveal(sectionRef, refCss.current);
    useReveal(sectionRef, refJs.current);
    useReveal(sectionRef, refJquery.current);
    useReveal(sectionRef, refReact.current);
    useReveal(sectionRef, refRedux.current);
    useReveal(sectionRef, refNetCore.current);
    useReveal(sectionRef, refCsharp.current);
    useReveal(sectionRef, refApi.current);
    useReveal(sectionRef, refDb.current);

    return (
        <>
            <div className="html-wrapper" ref={refHtml}>
                <IconTile icon={html_icon} title="HTML5" className="html-icon" />
            </div>
            <div className="css-wrapper" ref={refCss}>
                <IconTile icon={css_icon} title="CSS3" className="css-icon" />
            </div>
            <div className="js-wrapper" ref={refJs}>
                <IconTile icon={js_icon} title="JavaScript" className="js-icon" />
            </div>
            <div className="jquery-wrapper" ref={refJquery}>
                <IconTile icon={jquery_icon} title="jQuery" className="jquery-icon" />
            </div>

            <div className="react-wrapper" ref={refReact}>
                <IconTile icon={react_icon} title="React" className="react-icon" />
            </div>
            <div className="redux-wrapper" ref={refRedux}>
                <IconTile icon={redux_icon} title="Redux" className="redux-icon" />
            </div>
            <div className="netcore-wrapper grid-item-net-core" ref={refNetCore}>
                <IconTile icon={netcore_icon} title=".NET Core" className="netcore-icon" />
            </div>
            <div className="csharp-wrapper grid-item-c-sharp" ref={refCsharp}>
                <IconTile icon={csharp_icon} title="C#" className="csharp-icon" />
            </div>

            <div className="api-wrapper grid-item-api" ref={refApi}>
                <IconTile icon={api_icon} title="Web API" className="api-icon" />
            </div>
            <div className="db-wrapper grid-item-sql" ref={refDb}>
                <IconTile icon={db_icon} title="SQL Server" className="db-icon" />
            </div>
        </>
    )
}

export default IconsTech;