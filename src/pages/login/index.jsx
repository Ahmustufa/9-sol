import Login from '@/components/form/Login'
import React from 'react'
import styled from 'styled-components'

const Dashboard =()=> {
  return (
    <Div>
      <Login/>
    </Div>
  )
}

export default Dashboard
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;