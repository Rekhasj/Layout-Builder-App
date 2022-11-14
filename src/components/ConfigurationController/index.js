import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
        showContent,
        showLeftNavbar,
        showRightNavbar,
      } = value

      const onClickShowContent = event => {
        onToggleShowContent(event.target.value)
      }

      const onClickShowLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const onClickShowRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <nav className="configuration-controller-navbar">
          <h1 className="layout-name">Layout</h1>
          <div className="input-card">
            <input
              id="content-checkbox"
              type="checkbox"
              className="input-checkbox"
              checked={showContent}
              onClick={onClickShowContent}
            />
            <label htmlFor="content-checkbox" className="input-label">
              Content
            </label>
          </div>
          <div className="input-card">
            <input
              id="left-navbar-checkbox"
              type="checkbox"
              className="input-checkbox"
              checked={showLeftNavbar}
              onClick={onClickShowLeftNavbar}
            />
            <label htmlFor="left-navbar-checkbox" className="input-label">
              Left Navbar
            </label>
          </div>
          <div className="input-card">
            <input
              id="right-navbar-checkbox"
              type="checkbox"
              className="input-checkbox"
              checked={showRightNavbar}
              onClick={onClickShowRightNavbar}
            />
            <label htmlFor="right-navbar-checkbox" className="input-label">
              Right Navbar
            </label>
          </div>
        </nav>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
