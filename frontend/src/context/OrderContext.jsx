import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import axios from "axios";
import Loader from "../components/Loader/Loader";

export const OrderContext = createContext()

const OrderContextProvider = ({ children }) => {

  const { user } = useContext(UserContext)

  const [orderData, setOrderData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchOrders = async () => {
    try {
      if (user) {
        const res = await axios.get('http://localhost:8080/api/orders/allOrders')
        // console.log('Response:', res.data);
        const orders = res.data
        const ordersWithUserNames = await Promise.all(
          orders.map(async (order) => {
            const userRes = await axios.get(`http://localhost:8080/api/user/${order.userId}`)
            const user = userRes.data
            // console.log(user)
            return { ...order, userName: user.displayName }
          })
          );
          setOrderData(ordersWithUserNames)
          setIsLoading(false)
        } else {
        setOrderData([])
        setIsLoading(false)
      }
    } catch (error) {
      console.log('Error fetching orders', error)
    }
  };
  

  useEffect(() => {
    fetchOrders()
  }, [user])

  const value = {
    orderData
  }

  return (
    <OrderContext.Provider value={value}>
      {isLoading ? <Loader /> : children}
    </OrderContext.Provider>
  )
}

export default OrderContextProvider