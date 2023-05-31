import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import 'bootstrap/dist/js/bootstrap.js'
import ProductContextProvider from './context/ProductContext.jsx'
import UserContextProvider from './context/UserContext.jsx'
import OrderContextProvider from './context/OrderContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <UserContextProvider>
      <ProductContextProvider>
        <OrderContextProvider>
          <App />
        </OrderContextProvider>
      </ProductContextProvider>
    </UserContextProvider>
  // </React.StrictMode>,
)
