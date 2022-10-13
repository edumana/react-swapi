import { Link } from "react-router-dom"


const NavBar = () => {
  return (
    <h1>
      <Link className="link" to="/" >
      <div className="navbar">
        <h1 className="title">
          Star Wars Starships
        </h1>
        
      </div>
      </Link>
    </h1>
  )
}

export default NavBar