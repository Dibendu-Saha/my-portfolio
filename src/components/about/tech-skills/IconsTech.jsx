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

function IconsTech() {
    return (
        <>
            <div>
                <IconTile icon={html_icon} title="HTML5" />
            </div>
            <div>
                <IconTile icon={css_icon} title="CSS3" />
            </div>
            <div>
                <IconTile icon={js_icon} title="JavaScript" />
            </div>
            <div>
                <IconTile icon={jquery_icon} title="jQuery" />
            </div>

            <div>
                <IconTile icon={react_icon} title="React" />
            </div>
            <div>
                <IconTile icon={redux_icon} title="Redux" />
            </div>
            <div className="grid-item-net-core">
                <IconTile icon={netcore_icon} title=".NET Core" />
            </div>
            <div className="grid-item-c-sharp">
                <IconTile icon={csharp_icon} title="C#" />
            </div>

            <div className="grid-item-api">
                <IconTile icon={api_icon} title="Web API" />
            </div>
            <div className="grid-item-sql">
                <IconTile icon={db_icon} title="SQL Server" />
            </div>
        </>
    )
}

export default IconsTech;