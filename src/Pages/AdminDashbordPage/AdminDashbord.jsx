import { GiCyberEye } from "react-icons/gi";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineKeyboardArrowRight, MdOutlineLogout } from "react-icons/md";
import { TbCategoryPlus } from "react-icons/tb";
import { LuFilePlus } from "react-icons/lu";
import { sitelogo } from '../../images';
import React, { useState } from 'react';
import "./AdminDashbord.css";
import DashboardProductDisplay from '../../Components/DashboardProductDisplay/DashboardProductDisplay';
import DashboardCategoryDisplay from '../../Components/DashboardCategoryDisplay/DashboardCategoryDisplay';
import DashboardOrdersDisplay from '../../Components/DashboardOrdersDisplay/DashboardOrdersDisplay';
import { useNavigate } from "react-router-dom";
import AuthController from "../../controllers/AuthController";

function AdminDashboard() {
  const navigate = useNavigate();
  const [activeComponent, setActiveComponent] = useState('product');

  const handleManageProductsClick = () => {
    setActiveComponent('product');
  };

  const handleManageCategoriesClick = () => {
    setActiveComponent('category');
  };

  const handleManageOrdersClick = () => {
    setActiveComponent('order');
  };

  return (
    <div className='dashboard-container'>
      <section className='dashboard-left-side'>
        <div className="logo-part">
          <img src={sitelogo} alt="Logo" />
          <span>CyberCore</span>
        </div>
        <div className="dashboard-functionalities">
          <div className="dashboard-functionalities-parts" onClick={handleManageProductsClick}>
            <FiShoppingCart className="dashboard-icons" />
            <span>Manage Products</span>
            <MdOutlineKeyboardArrowRight className="dashboard-right-arrows" />
          </div>
          <div className="dashboard-functionalities-parts" onClick={handleManageCategoriesClick}>
            <TbCategoryPlus className="dashboard-icons" />
            <span>Manage Categories</span>
            <MdOutlineKeyboardArrowRight className="dashboard-right-arrows" />
          </div>
          <div className="dashboard-functionalities-parts" onClick={handleManageOrdersClick}>
            <LuFilePlus className="dashboard-icons" />
            <span>Manage Orders</span>
            <MdOutlineKeyboardArrowRight className="dashboard-right-arrows" />
          </div>
          <div className="admin-logout" onClick={async (e)=>{
            e.preventDefault(); 
            navigate("/login");
            const response= await AuthController.logOut();
            
          }}>
            <MdOutlineLogout className="admin-logout-icon" />
            <span>Logout</span>
          </div>
        </div>
      </section>
      <section className='dashboard-right-side'>
        <div className="dashboard-header">
          <h3 id="admin-dashboard">Admin Dashboard</h3>
        </div>
        <div className="dashboard-item-display-section">
          {activeComponent === 'product' && <DashboardProductDisplay />}
          {activeComponent === 'category' && <DashboardCategoryDisplay />}
          {activeComponent === 'order' && <DashboardOrdersDisplay />}
        </div>
      </section>
    </div>
  );
}

export default AdminDashboard;
