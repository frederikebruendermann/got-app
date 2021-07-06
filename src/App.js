import React, { useState } from 'react'
import Card from './Card'

export default function App() {
  const url = 'https://www.anapioficeandfire.com/api/houses?pageSize=10'
  const [houses, setHouses] = useState(null)

  React.useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setHouses(data)
      })
      .catch(error => console.error(error))
  })

  return (
    <>
      <h1>Game of Thrones</h1>
      <h2>House</h2>
      <div>
        {houses &&
          houses.map((house, index) => <Card key={index} house={house} />)}
      </div>
    </>
  )
}
