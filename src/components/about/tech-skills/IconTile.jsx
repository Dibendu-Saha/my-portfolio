function IconTile({ icon }) {
    return (
        <div>
            <img
                src={icon}
                alt={`Icon_${icon}`}
                style={{
                    height: "13rem",
                    width: "13rem"
                }}
            />
        </div>
    )
}

export default IconTile;