import { Flex } from "../../common/wrapper/AppComponents";

function Org({ children, logo, orgName, startMonth, endMonth }) {
    return (
        <Flex className="flex--org-wrapper border-red1">
            <Flex className="flex--logo-wrapper border1">
                <img src={logo} alt={logo} className="border-green1" />
            </Flex>
            <div className="work-summary">
                <div className="summary-header">
                    {/* <h2 className="org-title">{orgName}</h2> */}
                    <h2 className="org-duration">{`${startMonth} - ${endMonth}`}</h2>
                </div>
                <p>
                    {children}
                </p>
            </div>
        </Flex>
    )
}

export default Org;