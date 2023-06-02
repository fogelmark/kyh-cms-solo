import React from 'react'
import { Navigate } from 'react-router-dom'
function ProtectedRoute({ user, children }) {
  // Redirect to /login if you're not logged in.
  if (!user) {
    return < Navigate to="/login" replace />
  }
  return children
}
export default ProtectedRoute