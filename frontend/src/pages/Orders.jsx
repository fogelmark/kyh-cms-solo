import React, { useContext } from 'react'
import { OrderContext } from '../context/OrderContext'

const Orders = () => {

  const { orderData } = useContext(OrderContext)
  console.log(orderData);

  return (
    <div>
      <div className="orders">
      {orderData.map(order => (
        <div key={order._id}>
          <h2>{order.userId}</h2>
          <h2>Order ID: {order._id}</h2>
          <h4>Order Rows:</h4>
          <ul>
            {order.orderRows.map(row => (
              <li key={row._id}>
                <p>Product: {row.product}</p>
                <p>Quantity: {row.quantity}</p>
               </li>
             ))}
           </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders