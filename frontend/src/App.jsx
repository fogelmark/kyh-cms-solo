import React, { useContext } from 'react'
import './App.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import Add from './pages/Add'
import Edit from './pages/Edit'
import Delete from './pages/Delete'
import Login from './pages/Login'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import { UserContext } from './context/UserContext'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {

  const { user } = useContext(UserContext)

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'add',
          element: <ProtectedRoute user={user}>
            <Add />
          </ProtectedRoute>
        },
        {
          path: 'edit/:productId',
          element: <ProtectedRoute user={user}>
            <Edit />
          </ProtectedRoute>
        },
        {
          path: 'delete',
          element: <ProtectedRoute user={user}>
            <Delete />
          </ProtectedRoute>
        },
        {
          path: 'login',
          element: <Login />
        },
        {
          path: 'products',
          element: <ProtectedRoute user={user}>
            <Products />
          </ProtectedRoute>
        },
        {
          path: 'products/:productId',
          element: <ProtectedRoute user={user}>
            <ProductDetails />
          </ProtectedRoute>
        },
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App