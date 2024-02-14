import React from 'react';
import './Sidebar.css'; // You can create a CSS file for styling
import {useNavigate} from 'react-router-dom'

const Sidebar = ({address}) => {
    const navigate = useNavigate();
  return (
    <div className="sidebar open">
      <div className="sidebar-content">
        <button className="sidebar-btn" onClick={()=>navigate('/allusers')}>All users</button>
        <button className="sidebar-btn" onClick={()=>navigate(`/referrals/${address}`)}>Referrals</button>
      </div>
    </div>
  );
};

export default Sidebar;