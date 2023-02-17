import React from 'react'
const DiabledButton =(props)=> {
  return (
    <button {...props} type="button" className="px-5 py-2 text-white bg-magenta rounded-xl focus:outline-none disabled:opacity-25 w-full">{props.children}</button>
  )
}

export default DiabledButton
