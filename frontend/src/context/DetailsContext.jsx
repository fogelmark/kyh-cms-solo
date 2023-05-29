// import { createContext, useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// export const DetailsContext = createContext();

// const DetailsProvider = ({ children }) => {
//   const [data, setData] = useState([]);

//   const { productId } = useParams();

//   useEffect(() => {
//     const getProductById = async () => {
//       try {
//         const result = await axios.get(`http://localhost:8080/api/product/${productId}`);
//         setData(result.data);
//       } catch (error) {
//         console.log('Error fetching data:', error);
//       }
//     };

//     getProductById();
//   }, [productId]);

//   const value = {
//     data
//   }

//   return (
//     <DetailsContext.Provider value={value}>
//       {children}
//     </DetailsContext.Provider>
//   )
// }

// export default DetailsProvider