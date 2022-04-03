function IconTile({ icon, title, height, width }) {
    return (
        <img
            src={icon}
            title={title}
            alt={`Icon_${icon}`}
            style={{
                height: height ?? "12rem",
                width: width ?? "12rem"
            }}
        />
    )
}

export default IconTile;