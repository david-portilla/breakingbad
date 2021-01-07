import React from 'react'
import styled from '@emotion/styled'

const WrapperPhrase = styled.div`
  padding: 3rem;
  border-radius: 0.3rem;
  background-color: #fff;
  max-width: 800px;
  @media (min-width: 992px) {
    margin-top: 13rem;
  }

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    position: relative;
    padding-left: 4rem;

    &::before {
      content: open-quote;
      position: absolute;
      font-size: 10rem;
      color: black;
      left: -1rem;
      top: -2rem;
    }
  }

  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.3rem;
    font-weight: 900;
    text-align: right;
    color: #666;
    margin-top: 2rem;
  }
`

const Phrase = ({phrase}) => {
  return (
    <>
      {phrase.quote ?
        <WrapperPhrase>
          <h1> {phrase.quote}</h1>
          <p> - {phrase.author}</p>
        </WrapperPhrase >
        : null
      }
    </>
  )
}

export default Phrase
