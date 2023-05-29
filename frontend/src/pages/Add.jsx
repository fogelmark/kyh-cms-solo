import { useContext, useState } from 'react'
import axios from 'axios'
import { UserContext } from '../context/UserContext'

const Add = () => {

  const { user } = useContext(UserContext)

  const initState = {
    name: '',
    price: '',
    imageURL: '',
    description: ''
  }

  const [formData, setFormData] = useState(initState)
  const [isSuccess, setIsSuccess] = useState(false)

  
  const handleChange = (e) => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }
  
  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const res = await axios.post('http://localhost:8080/api/product/add', formData, {
        headers: {
          Authorization: `Bearer ${user}`
        }
      })
      setFormData(initState)
      setIsSuccess(true)
      console.log(res);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.log('Error adding product', error);
    }
  }

  return (
    <>
      <h1 className='text-center my-5'>Add a new product</h1>

      {isSuccess && (
        <div className="alert alert-success" role="alert">
          Product added successfully!
        </div>
      )}

      <form noValidate onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Product Name:</label>
          <input type="text" name='name' className="form-control" id='name' value={formData.name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Product Price:</label>
          <input type="number" name='price' inputMode='decimal' className="form-control" id='price' value={formData.price} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="imageURL" className="form-label">Image URL:</label>
          <input type="text" name='imageURL' className="form-control" id='imageURL' value={formData.imageURL} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Product Description:</label>
          <textarea className='form-control' name='description' id="description" rows="3" value={formData.description} onChange={handleChange}></textarea>
        </div>
        <button className='btn btn-primary btn-lg' type='submit'>Add Product</button>
      </form>
    </>
  )
}

export default Add