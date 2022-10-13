import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import { getStarshipDetails } from "../../services/sw-appi"

const StarshipDetails = () => {
  
  const [starships, setStarshipDetails] = useState([])
  const location = useLocation()
  
  useEffect(() => {
    const fetchDetails = async () => {
      const starDetails = await getStarshipDetails(location.state.starship.url)
      setStarshipDetails(starDetails)
    }
    fetchDetails()
  }, [location.state.starship.url])

  return (
    <>
      <main>
        <div className="starshipCard">
          {starships.name ?
        <>
        <table>
          <thead>
            <tr>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Name:</th>
              <td><p>{starships.name}</p></td>
            </tr>
            <tr>
            <th>Model:</th>
              <td><p>{starships.model}</p></td>
            </tr>
            <tr>
              <th><Link to='/' className="link" >Return</Link></th>
            </tr>     
          </tbody>
        </table>
          </>
          :
          <>
            <p>Loading...</p>
          </>
        }
        </div>
    </main>  
  </>
  )
}

export default StarshipDetails;