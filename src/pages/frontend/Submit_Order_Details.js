import React, { useEffect, useState } from 'react';

import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCategories, viewImageById, postNewOrder} from '../../redux/reducers/gallerySlice';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const Submit_Order_Details = (props) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
      dispatch(viewImageById(id));
      dispatch(getAllCategories());
    }, []);
    const { images} = useSelector((state) => state.gallery);

    const [quantity, setquantity] = useState(1);

    const [input, setInput] = useState({
      pro_id: "",
      proname: "",
      pro_imgname: "",
      pro_price: "",
      pro_quantity: "",
      pro_total: "",
      pro_delivery_charge: "",
      pro_amount: "",
      name: "",
      contact1: "",
      contact2: "",
      tola: "",
      village: "",
      block: "",
      pincode: "",
      city: "",
      state: "",
      time: ""
    });



     function parentCatch(data)
    {
      setInput({...input, 
        "pro_id": data.id, 
        "proname": data.proname, 
        "pro_imgname": data.imgname,
        "pro_price": data.price,
        "pro_quantity": data.quantity,
        "pro_total": data.total,
        "pro_delivery_charge": data.deliveryCharge,
        "pro_amount": data.amount,
        "time": data.time
      });
    }

    const handle_product_order_Submit = (e) => {
      e.preventDefault();
      dispatch(postNewOrder(input));
      navigate('/order_complete');
    }

  return (
    <>
         {
            images && 
              images.map((items) => {

                const data={
                    id:items._id, 
                    proname:items.name, 
                    imgname: items.image, 
                    price:items.ajayam_price, 
                    quantity:quantity, 
                    total:quantity*items.ajayam_price, 
                    // extraCharge: 10, 
                    deliveryCharge: 50,
                    amount: quantity*items.ajayam_price+50,
                    time: new Date().toLocaleString(),
                }

                return(
                  <>
                    <div className='order_left col-lg-4 col-md-4 col-12'>
                      <img 
                        src={`http://localhost:8000/${ items.image }`}
                        alt="images"
                        class='img img-responsive'
                      />
                      <p>{items.name}</p>
                    </div>
                    <div className='order_right col-lg-7 col-md-7 col-12'>
                      <div className='col-12 col-md-4 col-lg-4'>
                          <p>Price: ₹{items.ajayam_price}</p>
                      </div>
                      <div className='col-12 col-md-4 col-lg-4'>
                          <div>
                          <Button variant='outlined'   onClick={()=>setquantity(quantity > 1 ? quantity - 1 : 1  )}>-</Button>
                          <input  value={quantity} />
                          <Button variant='outlined' onClick={()=>setquantity(quantity + 1)}>+</Button>
                          </div>
                      </div>
                      <div  className='col-12 col-md-4 col-lg-4'>
                          <p>₹{quantity*items.ajayam_price}</p>
                          <p> </p>
                      </div>
                    </div>
                    <div className='calculate col-12 col-md-8 col-lg-12 '>
                      <div className='row col-12 col-md-7 col-lg-7'>
                          <Table className=' col-12 col-md-7 col-lg-7' aria-label="simple table">
                              <TableHead>
                                <TableRow>
                                  <TableCell>Calculation</TableCell>
                                  <TableCell align="right"></TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                  <TableRow className='col-12 col-md-11 col-lg-11 m-auto' sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">Total</TableCell>
                                    <TableCell align="right">₹{quantity*items.ajayam_price}</TableCell>
                                  </TableRow>
                                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">Extra Charges: ₹10 =</TableCell>
                                    <TableCell align="right">₹{quantity*items.ajayam_price + 10}</TableCell>
                                  </TableRow>
                                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">Delivary Charge: + ₹50 =</TableCell>
                                    <TableCell align="right">₹{quantity*items.ajayam_price+50 + 10}</TableCell>
                                  </TableRow>
                                  <TableRow  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row"><b>Net payble Amount :</b></TableCell>
                                    <TableCell align="right"  className='bb' >
                                      ₹{quantity*items.ajayam_price+50 + 10} /-
                                    </TableCell>
                                  </TableRow>
                              </TableBody>
                            </Table>

                            <hr />

                            <div className='order_form col-12 col-md-12 col-lg-12'>
                                <h4>Order Form</h4>
                                <div>
                                <form onSubmit={handle_product_order_Submit} encType='multipart/form-data'>
                                      
                                        
                                        <br />
                                        <TextField 
                                          required
                                          label="Name"
                                          variant="standard"
                                          defaultValue={input.name}
                                          name='name'
                                          onChange={(e) => setInput({...input, [e.target.name]: e.target.value })}
                                        />
                                        <br />
                                        <br />
                                        <TextField 
                                          required
                                          label="Contact 1"
                                          variant="standard"
                                          defaultValue={input.name}
                                          name='contact1'
                                          onChange={(e) => setInput({...input, [e.target.name]: e.target.value })}
                                        />
                                        <br />
                                        <br />
                                        <TextField 
                                          required
                                          label="Contact 2"
                                          variant="standard"
                                          defaultValue={input.name}
                                          name='contact2'
                                          onChange={(e) => setInput({...input, [e.target.name]: e.target.value })}
                                        />
                                        <br />
                                        <br />
                                        <TextField 
                                          required
                                          label="Tola"
                                          variant="standard"
                                          defaultValue={input.name}
                                          name='tola'
                                          onChange={(e) => setInput({...input, [e.target.name]: e.target.value })}
                                        />
                                        <br />
                                        <br />
                                        <TextField 
                                          required
                                          label="Village"
                                          variant="standard"
                                          defaultValue={input.name}
                                          name='village'
                                          onChange={(e) => setInput({...input, [e.target.name]: e.target.value })}
                                        />
                                        <br />
                                        <br />
                                        <TextField 
                                          required
                                          label="Block"
                                          variant="standard"
                                          defaultValue={input.name}
                                          name='block'
                                          onChange={(e) => setInput({...input, [e.target.name]: e.target.value })}
                                        />
                                        <br />
                                        <br />
                                        <TextField 
                                          required
                                          label="Pincode"
                                          variant="standard"
                                          defaultValue={input.name}
                                          name='pincode'
                                          onChange={(e) => setInput({...input, [e.target.name]: e.target.value })}
                                        />
                                        <br />
                                        <br />
                                        <TextField 
                                          required
                                          label="City"
                                          variant="standard"
                                          defaultValue={input.name}
                                          name='city'
                                          onChange={(e) => setInput({...input, [e.target.name]: e.target.value })}
                                        />
                                        <br />
                                        <br />
                                        <TextField 
                                          required
                                          label="State"
                                          variant="standard"
                                          defaultValue={input.name}
                                          name='state'
                                          onChange={(e) => setInput({...input, [e.target.name]: e.target.value })}
                                        />
                                        <br />
                                        <br />
                                      <button type='submit'  onClick={()=>parentCatch(data)} class='btn btn-primary mt-4'>
                                        Order Now
                                      </button>
                                    </form>
                                </div>
                            </div>
                      </div>
                    </div>
          
          </>
          )
        })
      }
    </>
  )
}

export default Submit_Order_Details;