import { useEffect, useState } from "react"
import { getAllStarships } from "../../services/sw-appi"
import { Link } from "react-router-dom"

const StarshipList = () => {
  
  const [starships, setStarships] = useState([])

  useEffect(() => {
    const fetchStarshipData = async () => {
      const starshipData = await getAllStarships()
      setStarships( starshipData.results )
    }
    fetchStarshipData()
  }, [])
  
  return (
    <>
      <main>
        <div className="wrapper" >
          {starships.map(starship =>
            <Link
            key={starship.index} 
            to='/starship' 
            state={{ starship }} >
            < div className="card" >
              {starship.name}
            </div>
          </Link>
          )}
        </div>
      </main>
    </>
  )
}

export default StarshipList;