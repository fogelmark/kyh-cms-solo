import React, { useContext, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ProductContext } from '../context/ProductContext'

const ProductDetails = () => {

  const { getProductById } = useContext(ProductContext)
  const { productId } = useParams();
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const fetchProductDetails = async () => {
      const productData = await getProductById(productId)
      setProduct(productData)
    };

    fetchProductDetails();
  }, [getProductById, productId])

  if (!product) {
    return null
  }

  return (
    <div className='my-2 d-flex justify-content-center'>
      <div className="card shadow" style={{width: '16rem', height: 'fit-content'}}>
        <img src={product.imageURL} className="card-img-top object-fit-cover" alt={product.imageURL} />
        <div className="card-header d-flex align-items-center" style={{height: '4rem'}}>
          {product.name}
        </div>
        <div className="accordion accordion-flush" id={`accordionFlushExample`}>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapseOne`} aria-expanded="false" aria-controls={`flush-collapseOne`}>
                Description
              </button>
            </h2>
            <div id={`flush-collapseOne`} className="accordion-collapse collapse" data-bs-parent={`#accordionFlushExample`}>
              <div className='card-body'>
                <li className="list-group-item">{product.description}</li>
              </div>
            </div>
          </div>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{product.price} SEK</li>
        </ul>
        <div className='card-body d-grid'>
          <Link to={`/edit/${productId}`} className="btn btn-primary">Edit</Link>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
