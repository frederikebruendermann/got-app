import React, { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Card.propTypes = {
  houses: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      region: PropTypes.string,
      coatOfArms: PropTypes.string,
      currentLord: PropTypes.string,
      word: PropTypes.string,
      founded: PropTypes.string,
      seats: PropTypes.string,
      diedOut: PropTypes.string,
      index: PropTypes.string,
    })
  ),
}

export default function Card({ house }) {
  const {
    name,
    region,
    coatOfArms,
    currentLord,
    founded,
    words,
    seats,
    diedOut,
    index,
  } = house
  const [isActive, setIsActive] = useState(false)

  return (
    <CardWrapper index={index}>
      <h2>{name}</h2>{' '}
      <button onClick={() => setIsActive(!isActive)}>Details</button>
      {isActive && (
        <ul>
          <li>📍 {region}</li>
          {currentLord !== '' ? <li>Current Lord: {currentLord}</li> : null}
          {founded !== '' ? <li>Founded: {founded}</li> : null}{' '}
          {coatOfArms !== '' ? <li>Coat of Arms: {coatOfArms}</li> : null}
          {words !== '' ? <li>Words: {words}</li> : null}
          {seats[0] !== '' ? <li>Seats: {seats}</li> : null}
          {diedOut !== '' ? <li>Died Out: {diedOut}</li> : null}
        </ul>
      )}
    </CardWrapper>
  )
}

const CardWrapper = styled.section`
  margin: 3px;
  padding: 10px;
  border: 1px solid white;
  width: 50vh;
  border-radius: 10px;
  background: var(--white);
  box-shadow: var(--light-grey) 0px 2px 5px -1px, var(--black) 0px 1px 3px -1px;
  font-family: inherit;
  font-weight: 200;
  letter-spacing: 0.1em;
  list-style: none;
  display: grid;
  grid-template-columns: 7fr 3fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'Text Image';
`
