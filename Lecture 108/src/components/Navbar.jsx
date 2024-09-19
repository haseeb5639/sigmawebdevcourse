import React from 'react'
import { useEffect } from 'react'

const Navbar = ({color}) => {
  useEffect(() => {
    alert("Color was changed");
  }, [color])
  
  return (
    <div>
      I am navbar of {color} color, hehe!
    </div>
  )
}

export default Navbar
