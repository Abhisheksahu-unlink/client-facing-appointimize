import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiMap } from "react-icons/fi";
import { HiPhone } from "react-icons/hi";
import { Button } from 'antd';
import { FaOpencart } from "react-icons/fa";

const HeaderComponent = ({showDrawer}:any) => {
  return (
    <div className='header'>
      <div className="container flex justify-between pt-4 pb-4 mr-auto ml-auto">
      <div className="logo-div"><NavLink to="/">Your Logo</NavLink></div>
      <div className="header-right flex gap-4">
    <NavLink className="navlink-top" to='tel:9878787878'><HiPhone/> Call Now</NavLink>
    <NavLink className="navlink-top" to=''><FiMap/> Get Directions</NavLink>
    <Button className="navlink-top" onClick={showDrawer}><FaOpencart/> Cart</Button>
      </div>
      </div>
    </div>
  )
}

export default HeaderComponent
