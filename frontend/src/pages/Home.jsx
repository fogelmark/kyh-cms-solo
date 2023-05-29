import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsArrowRight } from "react-icons/bs";
import { VscSmiley } from "react-icons/vsc";

const Home = () => {
  return (
    <div className='container'>
      <h1 className='my-5 text-center'>CMS</h1>
      <div className='d-flex align-items-center justify-content-center gap-5'>
        <div className='card text-center'>
          <div className='card-body'>
            Please login with your admin account to gain access to all features.
          </div>
        </div>
          <BsArrowRight size={40} />
        <div className='card text-center'>
          <div className='card-body'>
            Happy product managing! <VscSmiley size={30} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home