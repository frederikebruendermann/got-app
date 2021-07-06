import React, { useState } from 'react'
import Card from './Card'
import styled from 'styled-components/macro'

export default function App() {
  const url = 'https://www.anapioficeandfire.com/api/houses'

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
      <SubTitle>- List of Houses -</SubTitle>
      <HouseList>
        {houses &&
          houses.map((house, index) => <Card key={index} house={house} />)}
      </HouseList>
    </>
  )
}

const HouseList = styled.div`
  display: grid;
  justify-items: center;
`
const SubTitle = styled.p`
  text-align: center;
  display: grid;
  justify-items: center;
  font-weight: 100;
`
