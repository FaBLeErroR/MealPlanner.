import './Header.css'

function HeaderElem ({ children }) {
  return (
    <h2>{children}</h2>
  )
}

export default function Header () {
    return (
        <header className="Header">
          <h1 className="Name">Meal Planner.</h1>
          <HeaderElem>Planner</HeaderElem>
          <HeaderElem>Account</HeaderElem>
          <HeaderElem>Filters</HeaderElem>
          <HeaderElem>Reports</HeaderElem>
          <HeaderElem>Settings</HeaderElem>
        </header>
    )
  }