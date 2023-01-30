import React from 'react'
import styled from 'styled-components'
const DiabledButton =(props)=> {
  return (
    <button {...props} type="button" class="px-8 py-3 text-white bg-blue-300 rounded focus:outline-none" disabled>{props.children}</button>

  )
}

export default DiabledButton
