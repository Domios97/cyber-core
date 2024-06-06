
import React from 'react'
import "./DashbordMenuItem.css";
function DashbordMenuItem({children}) {
  return (
    <div className='dashbord-menu-item'>
      {children}
    </div>
  )
}
export default DashbordMenuItem
