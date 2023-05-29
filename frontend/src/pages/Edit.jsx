import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../context/ProductContext'
import { UserContext } from '../context/UserContext'
import axios from 'axios'

const Edit = () => {

  const initState = {
    name: '',
    price: '',
    imageURL: '',
    description: ''
  }

  const { user } = useContext(UserContext)
  // console.log(user);

  const { getProductById } = useContext(ProductContext)
  const { productId } = useParams();
  const [product, setProduct] = useState(null)
  const [formData, setFormData] = useState(initState)
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    const fetchProductDetails = async () => {
      const productData = await getProductById(productId)
      setProduct(productData)
      setFormData(productData)
    };

    fetchProductDetails();
  }, [getProductById, productId])

  if (!product) {
    return null
  }


  const handleChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const res = await axios.put(`http://localhost:8080/api/product/${productId}`, formData, {
        headers: {
          Authorization: `Bearer ${user}`
        }
      })
      console.log(res);
      setIsSuccess(true)
      // setTimeout(() => {
      //   window.location.reload();
      // }, 2000);
      if (setIsSuccess) {
        const updateProductRes = await axios.get(`http://localhost:8080/api/product/${productId}`)
        const updateProductData = updateProductRes.data
        setProduct(updateProductData)
        setFormData(updateProductData)
        setIsSuccess(true)
        console.log('re render the product card with the updated values');
      }
    } catch (error) {
      console.log('Error editing product', error);
    }
  }


  return (
    <>
      <h1 className='text-center my-5'>Edit product</h1>
      {isSuccess && (
        <div className="alert alert-success" role="alert">
          Product edited successfully!
        </div>
      )}
      <div className='my-2 d-flex gap-5'>
        <div className="card shadow" style={{width: '16rem', height: 'fit-content'}}>
          <img src={product.imageURL} className="card-img-top object-fit-cover" alt={product.imageURL} />
          <div className="card-header d-flex align-items-center" style={{height: '4rem'}}>
            {product.name}
          </div>
          <div className="accordion accordion-flush" id={`accordionFlushExample`}>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Description
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  {product.description}
                </div>
              </div>
            </div>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{product.price} SEK</li>
          </ul>
        </div>

      <form noValidate className='flex-fill' 
      onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Product Name:</label>
          <input type="text" name='name' className="form-control" id='name' 
          value={formData.name} onChange={handleChange} 
          placeholder={product.name}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Product Price:</label>
          <input type="number" name='price' inputMode='decimal' className="form-control" id='price' 
          value={formData.price} onChange={handleChange} 
          placeholder={product.price}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="imageURL" className="form-label">Image URL:</label>
          <input type="text" name='imageURL' className="form-control" id='imageURL' 
          value={formData.imageURL} onChange={handleChange}
          placeholder={product.imageURL} 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Product Description:</label>
          <textarea className='form-control' name='description' id="description" rows="3" 
          value={formData.description} onChange={handleChange}
          placeholder={product.description}
          ></textarea>
        </div>
          <button className='btn btn-primary' type='submit'>Confirm</button>
      </form>
      </div>
    </>
  )
}

export default Edit
