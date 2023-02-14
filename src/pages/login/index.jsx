import Login from '@/components/form/Login'
import React from 'react'
import styled from 'styled-components'

const Index =()=> {
  return (
    <Div>
      <Login/>
    </Div>
  )
}

export default Index
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;