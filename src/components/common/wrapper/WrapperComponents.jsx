export function Section({ children, id, className, bgLinearGradientDegree }) {
    const styles = {
        section: {
            height: "100vh",
            backgroundImage: `linear-gradient(${bgLinearGradientDegree}deg, 
                var(--light-bg) 0%, var(--light-bg) 50%, 
                var(--primary-color) 50%, var(--primary-color) 100%)`
        }
    }

    return (
        <section
            id={id ?? id}
            style={styles.section}
            className={className ?? className}
        >
            {children}
        </section>
    )
}


export function Container({ children, id, className }) {
    const styles = {
        container: {
            margin: "0 auto",
            padding: "10rem 24rem"
        }
    }

    return (
        <div
            id={id ?? id}
            style={styles.container}
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


Section.defaultProps = {
    bgLinearGradientDegree: 0
};

H1.defaultProps = {
    weight: ""
}