import React from 'react';
import logo1 from '../assest/logo1.svg';

const Logo = () => {
  return (
    <div className=" flex items-center">
    
    <div className=" w-14 h-14">
      <img src={logo1} alt="Ecommerce Logo" />
    </div>

    <div>
      <h1 className="font-bold text-3xl">shop here</h1>
    </div>

    </div>
  )
}

export default Logo;