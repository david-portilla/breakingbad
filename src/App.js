import React, {useState} from 'react'
import styled from '@emotion/styled'
import Phrase from './components/Phrase'

const Wrapper = styled.div`
 display: flex;
 align-items: center;
 padding: 0 5rem;
 flex-direction: column;
`

const Button = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0% ,#007d35 40%, #07574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size:2rem;
  border: 2px solid black;
`

function App () {
  const [phrase, setPhrase] = useState({})

  const fetchAPI = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    const quote = await api.json()
    setPhrase(quote[0])
  }

  return (
    <Wrapper>
      <Phrase
        phrase={phrase}
      />
      <Button
        onClick={fetchAPI}
      > Get a Quote</Button>
    </Wrapper>
  );
}

export default App;
