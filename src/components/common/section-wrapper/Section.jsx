export function Section({ children, id, className, linearGradientDegree }) {
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