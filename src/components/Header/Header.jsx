import "./Header.css"

function Header() {
  return (
    <>
      <header>
        <div className="menu-area">
          <nav className="nav-bar">
            <ul className="nav-links-container">
              <li>
                <a href="#" className="nav-link">
                  Home
                </a>
              </li>
              <li>
                <a href="#section-about" className="nav-link">
                  About me
                </a>
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