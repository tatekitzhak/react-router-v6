import React from "react";
import { Routes, NavLink, Route, useParams, useNavigate } from "react-router-dom";

function Dashboard(){
  return (
    <div>
      <ul>
        <li>
          <NavLink to="profile">Profile</NavLink>
        </li>
        <li>
          <NavLink to="orders">Orders</NavLink>
        </li>
        <li>
          <NavLink to="quotes">Quotes</NavLink>
        </li>
      </ul>
      <div className="dashboard">
        <Routes>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="orders" element={<Orders />}></Route>
          <Route path="quotes" element={<Quotes />}></Route>
          <Route path="order_details/:orderId" element={<OrderDetails />} />
        </Routes>
      </div>
    </div>
  );
};

export function Profile(){
  return <h2>Profile</h2>;
};

export function Orders(){
  const orderIds = ["10001", "10002", "10003"];
  return (
    <>
      <h2>Orders</h2>
      <ul className="orders">
        {orderIds.map((orderId) => {
          return (
            <li key={orderId}>
              <NavLink to={`/dashboard/order_details/${orderId}`}>
                View Order {orderId}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export function Quotes(){
  return <h2>Quotes</h2>;
};
export function OrderDetails(){
  const params = useParams();
  const navigate = useNavigate();

  const onBackClick = (e) => {
    e.preventDefault();
    // navigate(-1);
    navigate("/dashboard/orders");
  };

  return (
    <>
      <h2>Details of order {params.orderId}</h2>
      <a href="#" onClick={onBackClick}>
        Back to Orders
      </a>
    </>
  );
};

export default Dashboard;
