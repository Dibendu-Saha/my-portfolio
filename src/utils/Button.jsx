
export const Button = ({ title, type, style, onClick }) => {
	return (
		<a href
			className={
				style !== ""
					? style
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

Button.defaultProps = {
	title: "Button",
	type: "secondary",
	style: ""
}
