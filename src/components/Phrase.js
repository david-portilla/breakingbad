import React from 'react'

const Phrase = ({phrase}) => {
  return (
    <>
      <h2>{phrase.quote}</h2>
      <p>{phrase.author}</p>
    </>
  )
}

export default Phrase
