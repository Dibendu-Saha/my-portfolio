import { Link } from "react-router-dom";
import "./Header.css"

function Header() {
	return (
		<>
			<header>
				<div className="menu-area">
					<nav>
						<ul className="nav-links-container">
							<li>
								<Link to="/" className="nav-link">
									Home
								</Link>
							</li>
							<li>
								<Link to="/about" className="nav-link">
									About me
								</Link>
							</li>
							<li>
								<a href="#" className="nav-link">
									Work
								</a>
							</li>
							<li>
								<a href="#" className="nav-link">
									Contact
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		</>
	)
}

export default Header;