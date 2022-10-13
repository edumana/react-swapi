const baseUrl = 'https://swapi.dev'

export async function getAllStarships() {
  const res = await fetch(`${baseUrl}/api/starships`)
  return res.json()
}

export async function getStarshipDetails(apiUrl) {
  const res = await fetch(`${apiUrl}`)
  return res.json()
}