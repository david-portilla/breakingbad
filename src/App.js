import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div`
 display: flex;
 align-items: center;
 padding-top: 5rem;
 flex-direction: column-reverse;
`

const Button = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0% ,#007d35 40%, #07574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  padding: 1rem 3rem;
  font-size:2rem;
  border: 2px solid black;
`

function App () {

  // const fetchAPI = () => {
  //   const api = fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
  //   const quote = api.then(res => res.json())
  //   quote.then(result => console.log(result))
  // }

  const fetchAPI = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    const quote = await api.json()
    console.log(quote[0])
  }

  return (
    <Wrapper>
      <Button
        onClick={fetchAPI}
      > Get a Quote</Button>
    </Wrapper>
  );
}

export default App;
