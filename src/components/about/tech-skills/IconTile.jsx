function IconTile({ icon, title, height, width }) {
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

export default IconTile;