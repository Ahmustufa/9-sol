import React from 'react'
import styled from 'styled-components'

const Bounce =(props)=> {
  return (
    <Bounces {...props}>{props.children}</Bounces>
  )
}

export default Bounce
const Bounces = styled.div `
animation: shake 4s ease infinite;
@keyframes shake {
	0%, 100% {transform: translateX(0);}
	10%, 30%, 50%, 70%, 90% {transform: translateX(-10px);}
	20%, 40%, 60%, 80% {transform: translateX(10px);}
}
`