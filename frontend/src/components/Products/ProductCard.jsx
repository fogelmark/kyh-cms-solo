import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ card, index }) => {

  return (
    <div className="card shadow" style={{width: '16rem', height: 'fit-content'}}>
      <Link to={`/products/${card._id}`} key={card._id}>
        <img src={card.imageURL} className="card-img-top" alt={card.imageURL} />
      </Link>
      <div className="card-header d-flex align-items-center" style={{height: '4rem'}}>
        {card.name}
      </div>
      

      <div className="accordion accordion-flush" id={`accordionFlushExample-${index}`}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapseOne-${index}`} aria-expanded="false" aria-controls={`flush-collapseOne-${index}`}>
              Description
            </button>
          </h2>
          <div id={`flush-collapseOne-${index}`} className="accordion-collapse collapse" data-bs-parent={`#accordionFlushExample-${index}`}>
            <div className='card-body'>
              <li className="list-group-item">{card.description}</li>
            </div>
          </div>
        </div>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{card.price} SEK</li>
      </ul>
      <div className='card-body d-grid'>
        <Link to={`/edit/${card._id}`} key={card._id} className="btn btn-primary">Edit</Link>
      </div>
    </div>
  )
}

export default ProductCard