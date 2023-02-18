import React from 'react';
import Submit_Order_Details from './Submit_Order_Details';

const Order_page = () => {
  return (
    <>
      <div className='order_container row'>
        <div className='order_item_box col-12 col-lg-11 col-md-11 m-auto'>
        <Submit_Order_Details/>
        </div>
      </div>
    </>

  )
}

export default Order_page;