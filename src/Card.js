import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components/macro'

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
      <SubTitle>{name}</SubTitle>{' '}
      <button onClick={() => setIsActive(!isActive)}>Details</button>
      {isActive && (
        <Details>
          <LiEl>📍 {region}</LiEl>
          {currentLord !== '' ? <LiEl>Current Lord: {currentLord}</LiEl> : null}
          {founded !== '' ? <LiEl>Founded: {founded}</LiEl> : null}{' '}
          {coatOfArms !== '' ? <LiEl>Coat of Arms: {coatOfArms}</LiEl> : null}
          {words !== '' ? <LiEl>Words: {words}</LiEl> : null}
          {seats[0] !== '' ? <LiEl>Seats: {seats}</LiEl> : null}
          {diedOut !== '' ? <LiEl>Died Out: {diedOut}</LiEl> : null}
        </Details>
      )}
    </CardWrapper>
  )
}

const CardWrapper = styled.section`
  margin: 10px;
  padding: 10px;
  border: 1px solid white;
  width: 45vh;
  border-radius: 10px;
  background: var(--white);
  box-shadow: var(--light-grey) 0px 2px 5px -1px, var(--black) 0px 1px 3px -1px;
  font-family: inherit;
  font-weight: 200;
  letter-spacing: 0.1em;
  list-style: none;
  display: grid;
  align-items: center;
  grid-template-columns: 7fr 3fr;
  grid-template-rows: 1fr; ;
`

const Details = styled.ul`
  list-style-type: none;
  margin: 0;
`

const SubTitle = styled.h2`
  text-align: left;
  margin: 10px;
`

const LiEl = styled.li`
  font-size: 10px;
  font-weight: 200;
`
