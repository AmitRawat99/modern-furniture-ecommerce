import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import '../styles/Profile.scss';
import UserContext from '../context/UserContext';
import { Link } from 'react-router-dom';
import OrderProduct from '../components/Section/OrderProduct';

function UserAccount() {
  const { User, setUser } = useContext(UserContext)
  const [userInfo, setUserInfo] = useState(null);
  const [activeBtn, setActiveBtn] = useState("Profile")
  const [loadingOrders, setloadingOrders] = useState(false)


  return (
    <Container>
      <div className="user_data_container">
        <div className="user-dashboard">
          <div className="dashborad-title">
            <h2>User Dashboard</h2>
          </div>
          <div className="dashborad-values">
            <li onClick={() => setActiveBtn("Profile")} className={`${activeBtn == "Profile" ? "ActiveBnt" : "NonActiveBtn"}`}>
              <Link>Profile</Link>
            </li>
            <li onClick={() => setActiveBtn("Orders")} className={`${activeBtn == "Orders" ? "ActiveBnt" : "NonActiveBtn"}`}><Link>Orders</Link></li>
          </div>
        </div>
        {
          activeBtn == "Profile" ? (
            <div className="user_Container">
              {!User ? (
                <div className="User_account">
                  <h2>You Are Not Logged In</h2>
                </div>
              ) : (
                <div className="user_data_container1">
                  <div className="user_img">
                    <img
                      src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740" loading="lazy"
                      alt="User"
                    />
                    <h3>{User.userName}</h3>
                  </div>
                  <div className="user_info">
                    <div className="User_Name">
                      <h5>Name:</h5>
                      <a href='#'>{User.userName}</a>
                    </div>
                    <div className="User_Name">
                      <h5>Email:</h5>
                      <a href={`mailto:${User.userEmail}`}>{User.userEmail}</a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <OrderProduct />
          )
        }

      </div>
    </Container >
  );
}

export default UserAccount;
