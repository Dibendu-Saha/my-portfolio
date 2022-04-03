function IconTile({ icon, title }) {
    return (
        <img
            src={icon}
            title={title}
            alt={`Icon_${icon}`}
            style={{
                height: "12rem",
                width: "12rem"
            }}
        />
    )
}

export default IconTile;