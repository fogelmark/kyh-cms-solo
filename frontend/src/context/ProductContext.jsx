import { createContext, useState, useEffect, useContext } from 'react'
import axios from 'axios'
import Loader from '../components/Loader/Loader'
import { UserContext } from './UserContext'

export const ProductContext = createContext()

const ProductContextProvider = ({ children }) => {

  const { user } = useContext(UserContext)

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  

  const fetchData = async () => {
    try {
      if (user) {
        const res = await axios.get('http://localhost:8080/api/product')
        setData(res.data);
        setIsLoading(false);
      } else {
        setData([])
        setIsLoading(false)
      }
    } catch (error) {
      console.log('Error fetching data:', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [user])

  const getProductById = async (productId) => {
    try {
      const res = await axios.get(`http://localhost:8080/api/product/${productId}`);
      return res.data;
    } catch (error) {
      console.log('Error fetching product by ID:', error);
      return null;
    }
  };

  const deleteProduct = async (productId) => {
    try {
      const res = await axios.delete(`http://localhost:8080/api/product/${productId}`, {
        headers: {
          Authorization: `Bearer ${user}`
        }
      })
    } catch (error) {
      console.log('Error deleting product:', error);
    }
  }

  const value = {
    data,
    getProductById,
    fetchData,
    deleteProduct
  }

  return (
   <ProductContext.Provider value={value}>
      {isLoading ? <Loader /> : children }
   </ProductContext.Provider>
  )
}

export default ProductContextProvider