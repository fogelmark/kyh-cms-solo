import React, { useContext } from 'react'
import ProductCard from '../components/Products/ProductCard'
import { ProductContext } from '../context/ProductContext'

const Products = () => {

  const { data } = useContext(ProductContext)

  return (
    <div className='my-5'>
      <h1 className='text-center my-5'>Products</h1>
      <div className="d-flex flex-wrap gap-5 justify-content-center">
      {
        data.map((card, index) => (
            <ProductCard key={card._id} card={card} index={index} />
        ))
      }
        </div>
    </div>
  )
}

export default Products