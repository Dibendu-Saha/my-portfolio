import { Link } from "react-router-dom";

export const Button = ({ title, type, style, href, link, onClick }) => {
	return (
		link
			? <Link to={link}
				className={
					style !== ""
						? style
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
	style: "",
	link: ""
}
