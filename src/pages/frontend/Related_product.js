import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import {motion} from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getAllCategories, view_Related_product, viewImageById} from '../../redux/reducers/gallerySlice';


const Related_product = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pro_id = props.id;
  const category = props.category;
  const name = props.name;
  const image = props.image;

  useEffect(() => {
    dispatch(view_Related_product(category));
    dispatch(getAllCategories());
  }, []);

  const { related_product} = useSelector((state) => state.gallery);

  const handler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
  }

  const viewSingleImage = (id) => {
    dispatch(viewImageById(id));
    navigate(`/view_image/${id}`);

  }

  return (
    <>
        
        <div className='related_product'>
        <h3></h3>
        <div class='container my-3 '  >
        <div class='row'>
        <p className='top_sell_head ml-5 pl-5'><i>Related Products</i></p>
        <hr className='col-11 m-auto mb-5' />
        <div className='list_top_selling_product col-lg-12 col-md-12 col-12'>
            
            <hr />
            { related_product && 
              related_product.map((items, index) => {
                const id = items._id;
                const img = items.image;
                const name = items.name;
                const price = items.ajayam_price;
                
                    
                        if (items._id !== pro_id) {
                          return (
                            <>
                              <motion.div className=' col-lg-3 col-md-6 col-12'  
                            initial={{ opacity: 0 }}
                            whileInView={{ transition: 5,opacity: 1 }}>
                            <div>
                            <img 
                                onClick={() => viewSingleImage(items._id)}
                                src={`http://localhost:8000/${items.image}`}
                                class='img img-responsive'
                                height='300px'
                                width='300px'
                            />
                            </div>
                            <p className='mt-3'>{items.name}</p>
                            <p>Price: ₹{items.ajayam_price}/- &nbsp;&nbsp; <span style={{color: '#90C67C'}}>off: {items.discount}%</span></p>
                            {/* <button onClick={()=> handler({id,img,name,price,quantity:1})}>Add to Cart</button> */}
                            <Button variant='outlined' className='addToCart col-5' onClick={()=> handler({id,img,name,price,quantity:1})}>Add to Cart</Button>

                        </motion.div>
                            </>
                          )
                        }
              })
            }
            
          </div>

          <br />
          

        </div>
      </div>
        </div>
    </>
  )
}

export default Related_product;