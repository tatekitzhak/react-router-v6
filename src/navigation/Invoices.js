import React from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";

export function Invoices(){
  const invoiceIds = ["50001", "50002", "50003"];
  return (
    <>
      <h2>Invoices</h2>
      <ul className="invoices">
        {invoiceIds.map((invoiceId) => {
          return (
            <li key={invoiceId}>
              <NavLink to={`/invoices/${invoiceId}`}>
                View Invoice {invoiceId}
              </NavLink>
            </li>
          );
        })}
        <Outlet />
      </ul>
    </>
  );
};

export function Invoice(){
  const params = useParams();

  return (
    <>
      <h2>Details of invoice {params.invoiceId}</h2>
    </>
  );
};

export default Invoices;
