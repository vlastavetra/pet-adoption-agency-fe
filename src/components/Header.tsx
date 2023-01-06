import { FC, useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import "./Header.sass"
import Button from "../elements/Button"

interface HeaderProps {
  showLoginModal?: React.Dispatch<React.SetStateAction<boolean>>
  showSignupModal?: React.Dispatch<React.SetStateAction<boolean>>
  setUser?: Function
  setToken?: Function
}

const Header: FC<HeaderProps> = ({ showLoginModal, showSignupModal }) => {
  const { user, setUser, setToken } = useContext(AuthContext)
  const isAdmin = false;

  function onLoginClickHandler() {
    showLoginModal!(true)
  }

  function onSignupClickHandler() {
    showSignupModal!(true)
  }

  function onLogoutClickHandler() {
    localStorage.removeItem("user")
    localStorage.removeItem("token")
    setUser!(false)
    setToken!("")
  }

  return (
    <header className="header-container">
      {
        user ?
          <div className="header-buttons">
            <Link to="/" className="header-link" onClick={() => { onLogoutClickHandler!() }}>
              <Button text="Logout" />
            </Link>
            <Link to="/profile" className="header-link">
              <Button text="Profile" />
            </Link>
            <Link to="/my-pets" className="header-link">
              <Button text="My Pets" />
            </Link>
          </div> :
          <div className="header-buttons">
            <Button
              text="Login"
              onClickHandler={onLoginClickHandler!}
            />
            <Button
              text="Sign up"
              onClickHandler={onSignupClickHandler!}
            />
          </div>
      }
      <Link to="/" className="header-link-logo">
        <svg className="header-logo-icon" width="611" height="831" viewBox="0 0 611 831" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M493.5 389.5C533.667 363 611 296.1 599 240.5L562 215.5C558.667 169.167 521.5 78.3 399.5 85.5V11.5C382.333 7.49999 336.5 12.7 290.5 65.5C244.5 118.3 97.6667 280.833 30 355.5M268 422.5V457.5M478 183V218M444 435.5C316 535 320 744 471.5 718.5C584 699.564 592 534 535 442.5C486.41 364.5 418 345 393.5 336.5C338.412 317.388 236.5 328 205 381C179.8 423.4 181.5 429.5 157.5 435.5L48.5 455C12 468 -0.999924 483.5 22 540.5C55.8945 624.5 134.5 633.5 205 662C275.5 690.5 317.364 770.625 364 821" stroke="black" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
      <div className="header-buttons">
        {
          isAdmin &&
          <div className="header-buttons">
            <Link to="/add-pet" className="header-link">
              <Button text="Add pet" />
            </Link>
            <Link to="/dashboard" className="header-link">
              <Button text="Dashboard" />
            </Link>
          </div>
        }
        <Link to="/search" className="header-link">
          <Button text="Search" color="pink" />
        </Link>
      </div>
    </header>
  )
}

export default Header;