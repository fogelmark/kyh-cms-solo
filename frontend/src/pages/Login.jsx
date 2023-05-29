import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserContext } from '../context/UserContext'

const Login = () => {

  const { setUser, storedUser } = useContext(UserContext)

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await axios.post('http://localhost:8080/api/admin/login', formData)
      const user = res.data.token
      localStorage.setItem('token', JSON.stringify(res.data.token))
      setUser(user)
      navigate('/')
    } catch (error) {
      console.error('Login error:', error)
    }
  };

  return (
    <>
    <h1 className='my-5 text-center'>Please login</h1>
    <form onSubmit={handleSubmit} className='my-5 w-50 mx-auto'>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" name='email' className="form-control" id="email" value={formData.email} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" name='password' className="form-control" id="password" value={formData.password} onChange={handleChange} />
      </div>
      <div className="d-grid col-12 mx-auto">
        <button className="btn btn-primary" type="submit">Login</button>
      </div>
    </form>
    </>
  )
}

export default Login