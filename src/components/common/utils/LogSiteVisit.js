import axios from "axios";

export const LogSiteVisit = (path) => {     
    axios.get(
        //process.env.REACT_APP_LOG_VISIT_API_ENDPOINT, {
        "http://localhost:7071/api/LogSiteVisit", {
        params: {
            page: path.pathname.substring(1).trim()
        }
    });
}