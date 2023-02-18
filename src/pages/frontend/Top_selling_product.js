import React, {useEffect} from 'react';
import {motion} from 'framer-motion';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllImages, getAllCategories, getSingleImage, viewImageById } from '../../redux/reducers/gallerySlice';

const Top_selling_product = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getAllImages());
        dispatch(getAllCategories());
      }, []);
    
      const { images, categories } = useSelector((state) => state.gallery);

    const viewSingleImage = (id) => {
        dispatch(viewImageById(id));
        navigate(`/view_image/${id}`);
    
      }
      const handler = (options) => {
        dispatch({ type: "addToCart", payload: options });
        dispatch({ type: "calculatePrice" });
      }

  return (
    <> 
        <div class='container my-3 '  >
        <div class='row'>
        <p className='top_sell_head ml-5 pl-5'><i>Top Selling Product</i></p>
        <hr className='col-11 m-auto mb-5' />
        <div className='list_top_selling_product col-lg-12 col-md-12 col-12'>
            
            <hr />
            { images && 
              images.map((items) => {
                const id = items._id;
                const img = items.image;
                const name = items.name;
                const price = items.ajayam_price;
                return(
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
                })
            }
            
          </div>

          <br />
          {/* {
            images && 
              images.map((items) => {
                const id = items._id;
                const img = items.image;
                const name = items.name;
                const price = items.ajayam_price;
                return(
                  <motion.div   
                  initial={{ opacity: 0 }}
                  whileInView={{ transition: 5,opacity: 1 }}
                  className='gallery_produc con-lg-4 col-md-4 col-sm-12 col-xs-12 mt-5 filter  my-4'>
                      <img 
                        onClick={() => viewSingleImage(items._id)}
                        src={`http://localhost:8000/${items.image}`}
                        class='img img-responsive'
                        height='300px'
                        width='300px'
                      />
                      <p style={{padding:'10px'}}>{items.name}</p>
                      <button onClick={()=> handler({id,img,name,price,quantity:1})}>Add to Cart</button>

                  </motion.div>
                )
              })
          } */}

        </div>
      </div>
    </>
  )
}

export default Top_selling_product;