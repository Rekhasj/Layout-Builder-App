import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showRightNavbar, showLeftNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <nav className="left-navbar-menu">
              <h1 className="left-navbar-heading">Left Navbar Menu</h1>
              <ul className="navbar-list-container">
                <li className="navbar-list">Item 1</li>
                <li className="navbar-list">Item 2</li>
                <li className="navbar-list">Item 3</li>
                <li className="navbar-list">Item 4</li>
              </ul>
            </nav>
          ) : null}
          {showContent ? (
            <div className="content-container">
              <h1 className="content-heading">Content</h1>
              <p className="content-details">
                Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <nav className="right-navbar-menu">
              <h1 className="left-navbar-heading">Right Navbar </h1>
              <div className="navbar-list-container">
                <p className="right-navbar-list">Ad 1</p>
                <p className="right-navbar-list">Ad 2</p>
              </div>
            </nav>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Body
