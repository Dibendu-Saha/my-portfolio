export function Section({ children, id, className, bgLinearGradientDegree }) {
    return (
        <section
            id={id ?? id}
            style={{
                height: "100vh",
                backgroundImage: `linear-gradient(${bgLinearGradientDegree}deg, 
                var(--light-bg) 0%, var(--light-bg) 50%, 
                var(--primary-color) 50%, var(--primary-color) 100%)`
            }}
            className={className ?? className}
        >
            {children}
        </section>
    )
}



export function Container({ children, id, className }) {
    return (
        <div
            id={id ?? id}
            style={{
                margin: "0 auto",
                padding: "10rem"
            }}
            className={className ?? className}
        >
            {children}
        </div>
    )
}



export function H1({ children, weight }) {
    return (
        weight === "light"
            ? <p style={{ fontSize: "8rem", fontWeight: "100" }}>
                {children}
            </p>
            : <h1 style={{ fontSize: "8rem", letterSpacing: "-3px" }}>
                {children}
            </h1>
    )
}



export function Card({ children, style }) {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "20rem",
            background: style === "dark" && ("var(--primary-shade)"),
            color: style === "dark" && ("var(--light-bg)")
        }}>
            <span style={{ padding: "20% 0" }}>
                {children}
            </span>
        </div>
    )
}


Section.defaultProps = {
    bgLinearGradientDegree: 0
};

H1.defaultProps = {
    weight: ""
}

Card.defaultProps = {
    style: ""
}