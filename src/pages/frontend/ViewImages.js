import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import toast from "react-hot-toast";
import { useSelector, useDispatch } from 'react-redux';
import { getAllCategories, viewImageById} from '../../redux/reducers/gallerySlice';

import Related_product from './Related_product';

const ViewProducts = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(viewImageById(id));
    dispatch(getAllCategories());
  }, []);

  const { images} = useSelector((state) => state.gallery);

  const handler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
    toast.success("Added To Cart");
  } 

  const Order_page = (id) => {
    navigate(`/order_page/${id}`);

  }
  
  const [img, setImg] = useState();
  const IncNum = (data) => {
    setImg(data);
  }


  return (
    <>
      <div class='container viewImages my-3'>
        <div class='row'>
          <div >
          {
            images && 
              images.map((items) => {
                const id = items._id;
                const category = items.category;
                const sub_cat = items.sub_category;
                const name = items.name;
                const price = items.price;

                
                return(
                  <div class='gallery_product row filter hdpe my-4'>
                      
                      <div className='left col-lg-6 col-md-4 col-12 '>
                          <div className='sm_images col-2'>
                              {
                                items.image !== "" ? 
                                <img onClick={()=>IncNum(items.image)}
                                src={`http://localhost:8000/${items.image}`}
                                alt="images"
                                class='img img-responsive'
                              />  
                              : <img style={{display: 'none'}} />
                              }
                              {/* {unreadMessages.length > 0 &&       
                               <h2>          
                                You have {unreadMessages.length} unread messages.        
                                </h2>      
                              } */}
                              {
                              items.image2.length === 0 ? 
                              <img style={{display: 'none'}} />
                              :  
                              <img onClick={()=>IncNum(items.image2)}
                                src={`http://localhost:8000/${items.image2}`}
                                alt="images"
                                class='img img-responsive'
                              />
                             
                              }
                              {/* <img onClick={()=>IncNum(items.image2)}
                                src={`http://localhost:8000/${items.image2}`}
                                alt="images"
                                class='img img-responsive'
                              />   */}
                              <img onClick={()=>IncNum(items.image3)}
                                src={`http://localhost:8000/${items.image3}`}
                                alt="images"
                                class='img img-responsive'
                              />  
                              <img onClick={()=>IncNum(items.image4)}
                                src={`http://localhost:8000/${items.image4}`}
                                alt="images"
                                class='img img-responsive'
                              />  
                           
                          </div>
                          <div className='big_images col-8'>
                              <img 
                                src={`http://localhost:8000/${ 
                                  img === items.image || img === items.image2 || img === items.image3 || img === items.image4 ? img : items.image }`}
                                alt="images"
                                class='img img-responsive'
                              />   
                          </div> 
                      </div>     

                      <div className='right col-lg-6 col-md-8 col-12'>
                          
                          <div className='product_name col-lg-10 col-md-10 col-11 p-2 pt-4'>
                              <h2>{items.name}</h2>
                          </div>

                          <div className='product_details col-lg-11 col-md-10 col-11 p-2'>
                              <p>{items.pro_details}</p>
                          </div>
                          
                          <div className='product_price p-2'>
                            <p>Price: &nbsp;&nbsp;&nbsp; ₹{items.ajayam_price} /-</p>
                          </div>

                          <div className='product_discount p-2'>
                            <s><label>Market rice: ₹{items.market_price}</label></s>
                            <p className='offer'>off: {items.discount}%</p>
                          </div>
                          
                          <div className='buttons col-12 p-1'>
                            <Button className='addToCart'  onClick={()=> handler({id,name,price,quantity:1})}>Add to Cart</Button>
                            <Button  className='orderNow' onClick={() => Order_page(items._id)} >Order Now</Button>
                          </div>

                        <div className='other_details p-2'>
                            <u><h5>Product Details</h5></u>
                            <div>
                              <label>Material Used By:</label>
                              <p>{items.material_used}</p>
                            </div>
                            <div>
                              <label>Life Span</label>
                              <p>{items.life_span}</p>
                            </div>
                            <div>
                              <label>Warranty</label>
                              <p>{items.warranty}</p>
                            </div>
                            <div>
                              <label>Manufacturer Support:</label>
                              <p>{items.support}</p>
                            </div>
                            <div>
                              <label>Dimension Highlights:</label>
                              <p>{items.highlights}</p>
                            </div>
                            <div>
                              <label>Suitabale Place:</label>
                              <p>{items.suitable_for}</p>
                            </div>
                            
                        </div>
                      </div>
                      <Related_product id={items._id} category={items.category} name={items.name} image={items.image} />
                    </div>
                    
                )
              })
          } 
          </div>
        </div>
      </div>
      

    </>
  )
}

export default ViewProducts;