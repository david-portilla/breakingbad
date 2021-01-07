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

  const fetchAPI = () => {
    console.log('getting data...')
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
