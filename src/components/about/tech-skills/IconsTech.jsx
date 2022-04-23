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
                <IconTile icon={html_icon} className="html-icon" />
                <p>HTML 5</p>
            </div>
            <div className="css-wrapper" ref={refCss}>
                <IconTile icon={css_icon} className="css-icon" />
                <p>CSS 3</p>
            </div>
            <div className="js-wrapper" ref={refJs}>
                <IconTile icon={js_icon} className="js-icon" />
                <p>JavaScript</p>
            </div>
            <div className="jquery-wrapper" ref={refJquery}>
                <IconTile icon={jquery_icon} className="jquery-icon" />
                <p>jQuery</p>
            </div>

            <div className="react-wrapper" ref={refReact}>
                <IconTile icon={react_icon} className="react-icon" />
                <p>React</p>
            </div>
            <div className="redux-wrapper" ref={refRedux}>
                <IconTile icon={redux_icon} className="redux-icon" />
                <p>Redux</p>
            </div>
            <div className="netcore-wrapper grid-item-net-core" ref={refNetCore}>
                <IconTile icon={netcore_icon} className="netcore-icon" />
                <p>.NET Core</p>
            </div>
            <div className="csharp-wrapper grid-item-c-sharp" ref={refCsharp}>
                <IconTile icon={csharp_icon} className="csharp-icon" />
                <p>C#</p>
            </div>

            <div className="api-wrapper grid-item-api" ref={refApi}>
                <IconTile icon={api_icon} className="api-icon" />
                <p>Web API</p>
            </div>
            <div className="db-wrapper grid-item-sql" ref={refDb}>
                <IconTile icon={db_icon} className="db-icon" />
                <p>SQL Server</p>
            </div>
        </>
    )
}

export default IconsTech;