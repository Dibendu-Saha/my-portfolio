export const Section = ({ children, id, className, linearGradientDegree }) => {
    const styles = {
        section: {
            height: "100vh",
            backgroundImage: `linear-gradient(${linearGradientDegree}deg, 
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

export const Container = ({ children, id, className }) => {
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