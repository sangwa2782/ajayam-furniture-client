import React from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Order_complete = () => {
  return (
    <>
    <div className='order_complete row'>
        <div className='col-12 col-md-11 col-lg-11 m-auto'>
        <h3>Order Complete</h3>
        <p>Please Take ScreenShot of your Ordered ID</p>
        <p>Your Request ID: <span style={{color: '#E07B7B'}}>541654131313sfdfs4d1</span></p>
        <Link to={'/'}>
            <h4><Button variant='outlined'>Go to Home</Button></h4>
        </Link>
        </div>
    </div>
    </>

  )
}

export default Order_complete