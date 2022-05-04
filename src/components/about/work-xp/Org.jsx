import { Flex } from "../../common/wrapper/AppComponents";

function Org({ children, logo, orgName, startMonth, endMonth }) {
    return (
        <Flex className="flex--org-wrapper">
            <Flex className="flex--logo-wrapper">
                <img src={logo} alt={logo} />
            </Flex>
            <div className="work-summary">
                <div className="summary-header">
                    <h2 className="org-title">{orgName}</h2>
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