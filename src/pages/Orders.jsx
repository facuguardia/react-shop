import React from "react";
import OrderItem from "@components/OrderItem";
import "@styles/Orders.scss";

function Orders() {
  return (
    <div class="Orders">
      <div class="Orders-container">
        <h1 class="title">My orders</h1>
        <div class="Orders-content">
          <OrderItem />
        </div>
      </div>
    </div>
  );
}

export default Orders;
