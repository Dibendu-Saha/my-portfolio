import { NavLink } from "react-router-dom";
import "./Header.css"

function Header() {
	return (
		<>
			<header>
				<div className="menu-area">
					<nav>
						<ul className="nav-links-container">
							<li>
								<NavLink to="/" className={navData => navData.isActive ? "nav-link active" : "nav-link"}>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink to="/about" className={navData => navData.isActive ? "nav-link active" : "nav-link"}>
									About me
								</NavLink>
							</li>
							<li>
								<NavLink to="/work" className={navData => navData.isActive ? "nav-link active" : "nav-link"}>
									Work
								</NavLink>
							</li>
							<li>
								<NavLink to="/contact-me" className={navData => navData.isActive ? "nav-link active" : "nav-link"}>
									Contact
								</NavLink>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		</>
	)
}

export default Header;