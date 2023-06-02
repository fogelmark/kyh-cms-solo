import React, { useContext } from 'react'
import { OrderContext } from '../context/OrderContext'
import {Link} from 'react-router-dom'

const Orders = () => {
  const { orderData } = useContext(OrderContext)
  console.log(orderData)

  return (
    <div className='my-5 d-flex justify-content-center'>
      <ul className="list-group" style={{ width: 'fit-content'}}>
        <li className='list-group-item list-group-item-dark'>Orders</li>
        {orderData.map(order => (
          <li className='list-group-item' key={order._id}>
            <Link to={`/order/${order._id}`}>{order._id}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Orders
