import React from 'react';
import { HiPhone } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import { MdOutlineMail } from "react-icons/md";
import { IoMdTime } from "react-icons/io";

const FooterComponent = () => {
  return (
    <>
      <div className='footer'>
      <div className="container flex justify-between pt-4 pb-4 mr-auto ml-auto">
    <div className="footer-left">
    Copyright ©️ Your Salon - Powered By Appointimize 2024
    </div>
    <div className="footer-right flex gap-2">
    <NavLink className="navlink-top" to='tel:9878787878'><HiPhone/> +91-9878787878</NavLink>
    <NavLink className="navlink-top" to='tel:9878787878'><MdOutlineMail/> yoursalon@example.com</NavLink>
    <NavLink className="navlink-top" to=''><IoMdTime/> 08:00 to 22:00</NavLink>
    </div>
        </div>
      </div>
    </>
  )
}

export default FooterComponent
