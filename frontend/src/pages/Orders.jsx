import React, { useContext } from 'react'
import { OrderContext } from '../context/OrderContext'
import {Link} from 'react-router-dom'

const Orders = () => {
  const { orderData } = useContext(OrderContext)

  return (
    <div>
      <div className="orders">
        {orderData.map(order => (
          <div key={order._id}>
            <Link to={`/order/${order._id}`}>Order: {order._id}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders
