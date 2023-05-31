import React, { useContext, useState } from 'react'
import { OrderContext } from '../context/OrderContext'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader/Loader'

const OrderDetails = () => {

  const { orderId } = useParams()
  const { orderData } = useContext(OrderContext)

  const order = orderData.find(order => order._id === orderId)
  // console.log(order)

  const [selectedRadio, setSelectedRadio] = useState('btnradio1');

  const handleRadioChange = (e) => {
    setSelectedRadio(e.target.id);
  };

  return (
      <div>
      {order ? (
        <ul className="list-group">
          <li className='list-group-item list-group-item-dark'>Order Details</li>
          <li className='list-group-item'><span className='fw-light'>Order ID:</span> <span>{order._id}</span></li>
          <li className='list-group-item'>Customer: {order.userName}</li>
          <li className='list-group-item list-group-item-dark'>Order Rows</li>
            {order.orderRows.map((row) => (
              <div key={row._id}>
                <li className='list-group-item'>Product ID: {row.product}</li>
                <li className='list-group-item'>Quantity: {row.quantity}</li>
              </div>
            ))}
            <li className='list-group-item list-group-item-dark'>Order Status</li>
            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="radio1"
                autoComplete="off"
                checked={selectedRadio === 'radio1'}
                onChange={handleRadioChange}
              />
              <label className="btn btn-outline-primary" htmlFor="radio1">
                Pending
              </label>

              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="radio2"
                autoComplete="off"
                checked={selectedRadio === 'radio2'}
                onChange={handleRadioChange}
              />
              <label className="btn btn-outline-primary" htmlFor="radio2">
                Shipped
              </label>

              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="radio3"
                autoComplete="off"
                checked={selectedRadio === 'radio3'}
                onChange={handleRadioChange}
              />
              <label className="btn btn-outline-primary" htmlFor="radio3">
                Completed
              </label>

              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="radio4"
                autoComplete="off"
                checked={selectedRadio === 'radio4'}
                onChange={handleRadioChange}
              />
              <label className="btn btn-outline-primary" htmlFor="radio4">
                Cancelled
              </label>
            </div>
          </ul>
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default OrderDetails