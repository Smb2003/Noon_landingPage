import React from 'react'
import MainLogo from '/src/assets/Images/favicon_v2.ico'
const Logo = () => {
  return (
    <div style={{display:"flex"}} >
        <img src={MainLogo} alt="Logo" width={30} style={{margin:3}}/>
        <h4>noon</h4>
    </div>
  )
}
export default Logo;