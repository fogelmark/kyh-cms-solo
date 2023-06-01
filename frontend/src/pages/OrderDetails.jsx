import React, { useContext, useState, useEffect } from 'react'
import { OrderContext } from '../context/OrderContext'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader/Loader'

const OrderDetails = () => {

  const { orderId } = useParams()
  const { orderData, updateStatus } = useContext(OrderContext)
  const order = orderData.find(order => order._id === orderId);
  const [selectedRadio, setSelectedRadio] = useState(order?.status || 'radio1');


  const handleRadioChange = (e) => {
    setSelectedRadio(e.target.value);
  };

  useEffect(() => {
    const handleStatus = async () => {
      try {
        console.log('Updating status: orderId=', orderId, 'selectedRadio=', selectedRadio);
        await updateStatus(orderId, selectedRadio);
      } catch (error) {
        console.log('Error updating status:', error);
      }
    };
    handleStatus()
  }, [selectedRadio])
  

  console.log(orderData);

  return (
      <div className='my-5 d-flex justify-content-center'>
      {order ? (
        <ul className="list-group w-50">
          <li className='list-group-item list-group-item-dark'>Order Details</li>
          <li className='list-group-item'><span className='fw-light'>Order ID:</span> <span>{order._id}</span></li>
          <li className='list-group-item list-group-item-dark'>Order Rows</li>
            {order.orderRows.map((row) => (
              <div key={row._id}>
                <li className='list-group-item'>Product ID: {row.product}</li>
                <li className='list-group-item'>Quantity: {row.quantity}</li>
              </div>
            ))}
            <li className='list-group-item list-group-item-dark'>Order Status</li>
            <li className='list-group-item'>
              <div className="btn-group w-100" role="group" aria-label="Basic radio toggle button group">
              <input
                type="radio"
                className="btn-check rounded-bottom"
                name="btnradio"
                id="radio1"
                value='pending'
                autoComplete="off"
                checked={selectedRadio === 'pending'}
                onChange={handleRadioChange}
                // onClick={handleStatus}
              />
              <label className="btn btn-outline-primary" htmlFor="radio1">
                pending
              </label>

              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="radio2"
                value='shipped'
                autoComplete="off"
                checked={selectedRadio === 'shipped'}
                onChange={handleRadioChange}
                // onClick={handleStatus}
              />
              <label className="btn btn-outline-primary" htmlFor="radio2">
                shipped
              </label>

              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="radio3"
                value='completed'
                autoComplete="off"
                checked={selectedRadio === 'completed'}
                onChange={handleRadioChange}
                // onClick={handleStatus}
              />
              <label className="btn btn-outline-primary" htmlFor="radio3">
                completed
              </label>

              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="radio4"
                value='cancelled'
                autoComplete="off"
                checked={selectedRadio === 'cancelled'}
                onChange={handleRadioChange}
                // onClick={handleStatus}
              />
              <label className="btn btn-outline-primary" htmlFor="radio4">
                cancelled
              </label>
            </div>
            </li>
          </ul>
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default OrderDetails