import axios from "axios";

export const LogSiteVisit = (page) => {
    axios.get(
        process.env.REACT_APP_LOG_VISIT_API_ENDPOINT, {
        params: { page }
    });
}