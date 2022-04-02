function IconTile({ icon }) {
    return (
        <div>
            <img
                src={icon}
                alt={`Icon_${icon}`}
                style={{
                    height: "12rem",
                    width: "12rem"
                }}
            />
        </div>
    )
}

export default IconTile;