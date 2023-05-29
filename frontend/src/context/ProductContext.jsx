import { createContext, useState, useEffect, useContext } from 'react'
import axios from 'axios'
import Loader from '../components/Loader/Loader'
import { UserContext } from './UserContext'

export const ProductContext = createContext()

const ProductContextProvider = ({ children }) => {

  const { user } = useContext(UserContext)

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (user) {
          const result = await axios.get('http://localhost:8080/api/product')
          setData(result.data);
          console.log(result.data);
          setIsLoading(false);
        } else {
          setData([])
          setIsLoading(false)
        }
      } catch (error) {
        console.log('Error fetching data:', error)
      }
    }

    fetchData()
  }, [user])

  const getProductById = async (productId) => {
    try {
      const result = await axios.get(`http://localhost:8080/api/product/${productId}`);
      return result.data;
    } catch (error) {
      console.log('Error fetching product by ID:', error);
      return null;
    }
  };

  const value = {
    data,
    getProductById
  }

  return (
   <ProductContext.Provider value={value}>
      {isLoading ? <Loader /> : children }
   </ProductContext.Provider>
  )
}

export default ProductContextProvider