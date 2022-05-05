import { Flex } from "../../common/wrapper/AppComponents";

function Org({ children, className, logo, orgName, startMonth, endMonth, reactRef }) {
    return (
        <Flex
            className={className ? `flex--org-wrapper ${className}` : "flex--org-wrapper"}
            reactRef={reactRef}
        >
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