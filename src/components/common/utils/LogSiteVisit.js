import axios from "axios";

export const LogSiteVisit = async (page) => {
    const loc_data = await GetIPAddress();
    axios.get(
        process.env.REACT_APP_LOG_VISIT_API_ENDPOINT, {        
        params: { page, loc_data }
    });
}

const GetIPAddress = async () => await (await axios.get(process.env.REACT_APP_IP_URL)).data;    