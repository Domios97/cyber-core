import { GiCyberEye } from "react-icons/gi";

import React from 'react'
import "./AdminDashbord.css";
import DashbordMenuItem from "../../Components/DashbordMenuItem/DashbordMenuItem";
import { LuShoppingCart } from "react-icons/lu";
function AdminDashbord() {
  return (
    <div className='dashbord-container'>
     <section className='dashbord-menu'>
        <div className='dashbord-head'>
          <GiCyberEye className="dashbord-logo"/>
          <p>Cyber <span>Core</span></p>
        </div>
        <DashbordMenuItem>
          <LuShoppingCart className="dashbord-item-icon"/>
          <p>Products</p>
        </DashbordMenuItem>
     </section>
     <section className='dashbord-desplay'></section>
    </div>
  )
}

export default AdminDashbord
