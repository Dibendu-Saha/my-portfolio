import { Link } from "react-router-dom";
import "./AppComponents.css"

export function Section({ children, id, className, reactRef, bgLinearGradientDegree, theme }) {
    return (
        <section
            id={id ?? id}
            style={{
                minHeight: "100vh",
                // backgroundImage: `linear-gradient(${bgLinearGradientDegree}deg, 
                //         var(--light-bg) 0%, var(--light-bg) 50%, 
                //         var(--primary-color) 50%, var(--primary-color) 100%)`
                background: theme === "dark" ? "var(--secondary-color)" : "var(--primary-color)",
                color: theme === "dark" ? "var(--light-bg)" : "var(--font-color)"
            }}
            className={className ?? ""}
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
            className={className ? `app-container ${className}` : "app-container"}
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
                className={className ? `app-header-light ${className}` : "app-header-light"}
            >
                {children}
            </p>
            : <h1
                ref={reactRef}
                className={className ? `app-header ${className}` : "app-header"}
            >
                {children}
            </h1>
    )
}

export function Highlight({ children, id, className }) {
    return (
        <span
            id={id ?? ""}
            className={className ? `highlight ${className}` : `highlight`}
        >
            {children}
        </span>
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
        <div
            className="app-card"
            style={{
                width: `${width}`,
                height: `${height}`,
                margin: `${margin}`,
                background: style === "dark" ? "var(--primary-shade)" : "",
                color: style === "dark" ? "var(--light-bg)" : "var(--font-color)"
            }}
        >
            <span className="app-card-text">
                {children}
            </span>
        </div >
    )
}



export function IconTile({ icon, title, height, width, className }) {
    return (
        <img
            src={icon}
            title={title}
            alt={`Icon_${icon}`}
            className={className ? `app-icon ${className}` : "app-icon"}
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