import { Link } from "react-router-dom";

export function Section({ children, id, className, reactRef, bgLinearGradientDegree }) {
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
            ref={reactRef}
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
                padding: "10rem 10rem 0rem 10rem"
            }}
            className={className ?? className}
        >
            {children}
        </div>
    )
}



export function H1({ children, className, reactRef, weight }) {
    return (
        weight === "light"
            ? <p
                ref={reactRef}
                className={className}
                style={{
                    fontSize: "8rem",
                    fontWeight: "100"
                }}>
                {children}
            </p>
            : <h1
                ref={reactRef}
                className={className}
                style={{
                    fontSize: "8rem", letterSpacing: "-3px"
                }}>
                {children}
            </h1>
    )
}


export function Flex({ children, id, className, reactRef }) {
    return (
        <div
            id={id}
            className={className ? `flex ${className}` : "flex"}
            ref={reactRef}
        >
            {children}
        </div>
    )
}


export function Grid({ children, id, className, col, reactRef }) {
    return (
        <div
            id={id}
            className={className ? `grid grid--cols-${col} ${className}` : `grid grid--cols-${col}`}
            ref={reactRef}
        >
            {children}
        </div>
    )
}



export function Card({ children, style, height, width, margin }) {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: `${width}`,
            height: `${height}`,
            maxHeight: "20rem",
            margin: `${margin}`,
            background: style === "dark" ? "var(--primary-shade)" : "",
            color: style === "dark" ? "var(--light-bg)" : "var(--font-color)"
        }}>
            <span style={{
                padding: "4.4rem 2rem",
                textAlign: "center",
                fontWeight: "200",
                letterSpacing: "0.5px"
            }}>
                {children}
            </span>
        </div >
    )
}



export function IconTile({ icon, title, height, width }) {
    return (
        <img
            src={icon}
            title={title}
            alt={`Icon_${icon}`}
            style={{
                height: height ?? "11rem",
                width: width ?? "11rem"
            }}
        />
    )
}



export function Button({ title, type, bsPrefix, href, link, onClick }) {
    return (
        link
            ? <Link to={link}
                className={
                    bsPrefix !== ""
                        ? bsPrefix
                        : `btn${type === "primary"
                            ? " btn--primary"
                            : type === "none"
                                ? ""
                                : " btn--secondary"}`
                }
            >
                {title}
            </Link>


            : <a href={href}
                className={
                    bsPrefix !== ""
                        ? bsPrefix
                        : `btn${type === "primary"
                            ? " btn--primary"
                            : type === "none"
                                ? ""
                                : " btn--secondary"}`
                }
                onClick={onClick}
            >
                {title}
            </a>
    )
}


Section.defaultProps = {
    bgLinearGradientDegree: 0
};

H1.defaultProps = {
    weight: ""
}

Grid.defaultProps = {
    col: "2"
}

Card.defaultProps = {
    style: "",
    height: "10rem",
    width: "20rem",
    margin: "0"
}

Button.defaultProps = {
    title: "Button",
    type: "secondary",
    bsPrefix: "",
    link: ""
}