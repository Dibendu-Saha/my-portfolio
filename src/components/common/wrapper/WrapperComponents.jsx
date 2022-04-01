export function Section({ children, id, className, bgLinearGradientDegree }) {
    return (
        <section
            id={id ?? id}
            style={{
                height: "100vh",
                backgroundImage: `linear-gradient(${bgLinearGradientDegree}deg, 
                var(--light-bg) 0%, var(--light-bg) 50%, 
                var(--primary-color) 50%, var(--primary-color) 100%)`,
                // border: "2px solid red"
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
                padding: "10rem 10rem 0rem 10rem",
                // border: "1px solid green"
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



export function Card({ children, style, height, width, margin }) {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: `${width}rem`,
            height: `${height}rem`,
            maxHeight: "20rem",
            margin: `${margin}rem`,
            background: style === "dark" ? ("var(--primary-shade)") : ("var(--medium-bg)"),
            color: style === "dark" ? ("var(--light-bg)") : ("var(--font-color)")
        }}>
            <span style={{ padding: "4.4rem 2rem", textAlign: "center" }}>
                {children}
            </span>
        </div >
    )
}


Section.defaultProps = {
    bgLinearGradientDegree: 0
};

H1.defaultProps = {
    weight: ""
}

Card.defaultProps = {
    style: "",
    height: "10",
    width: "20",
    margin: "0"
}