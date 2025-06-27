// components/Profile/OrderProduct.jsx

import React, { useEffect, useState } from 'react';
import '../../styles/Profile.scss';
import Base_Url from '../../config/Base_Url';

const OrderProduct = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchUserOrders = async () => {
      try {
        const response = await fetch(`${Base_Url}/all-order-proudct/${userId}`);
        const data = await response.json();

        if (Array.isArray(data.userOrders)) {
          setOrders(data.userOrders);
        } else {
          setOrders([]);
        }
      } catch (error) {
        console.error("Something went wrong while fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchUserOrders();
    } else {
      setLoading(false);
    }
  }, [userId]);

  return (
    <div className="user-order">
      <h2 className="order-title">Your Orders</h2>

      {
        loading ? (
          <p className="loading-text">Loading your orders...</p>
        ) : orders.length === 0 ? (
          <p className="no-orders-text">You have no orders yet.</p>
        ) : (
          <div className="order-table-wrapper">
            <table className="order-table">
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>Product ID</th>
                  <th>User Name</th>
                  <th>Product Amount</th>
                  <th>State</th>
                  <th>Status</th>
                  <th>Address</th>
                  <th>Phone</th>
                  <th>paymentMethod</th>
                  <th>Quantity</th>
                  <th>Order Date</th>
                </tr>
              </thead>
              <tbody>
                {
                  orders.map((item, index) => (
                    <tr key={index}>
                      <td>{item.userId}</td>
                      <td>{item.productId}</td>
                      <td>{item.fullName}</td>
                      <td>₹{item.productAmount}</td>
                      <td>{item.state}</td>
                      <td><span className="status delivered">Delivered</span></td>
                      <td className='address'>{item.address}</td>
                      <td>{item.phone}</td>
                      <td><p  className='cod'>{item.paymentMethod}</p></td>
                      <td>{item.productQty}</td>
                      <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        )
      }
    </div>
  );
};

export default OrderProduct;
