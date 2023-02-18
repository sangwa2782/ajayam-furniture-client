import React, { useEffect, useState } from 'react';
import {Box, TextField} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCategories, postNewImage } from '../../redux/reducers/gallerySlice';

const AddImage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [file, setFile ] = useState();
  const [file2, setFile2 ] = useState();
  const [file3, setFile3 ] = useState();
  const [file4, setFile4 ] = useState();
  const [category, setCategory ] = useState();
  const [name, setName ] = useState();
  const [company_name, setcompany_name] = useState();
  const [pro_details, setpro_details] = useState();
  const [material_used, setmaterial_used] = useState();
  const [life_span, setlife_span] = useState();
  const [warranty, setwarranty] = useState();
  const [support, setsupport] = useState();
  const [highlights, sethighlights] = useState();
  const [policy, setpolicy] = useState();
  const [suitable_for, setsuitable_for] = useState();
  const [genre, setgenre] = useState();
  const [market_price, setmarket_price] = useState();
  const [ajayam_price, setajayam_price] = useState();
  const [discount, setdiscount] = useState();
  const [delivery_charge, setdelivery_charge] = useState();

  
  const formdata = new FormData();
  formdata.append("image", file);
  formdata.append("image2", file2);
  formdata.append("image3", file3);
  formdata.append("image4", file4);
  formdata.append("category", category);
  formdata.append("name", name);
  formdata.append("company_name", company_name);
  formdata.append("pro_details", pro_details);
  formdata.append("material_used", material_used);
  formdata.append("life_span", life_span); 
  formdata.append("warranty", warranty);
  formdata.append("support", support);
  formdata.append("highlights", highlights);
  formdata.append("policy", policy);
  formdata.append("suitable_for", suitable_for);
  formdata.append("genre", genre);
  formdata.append("market_price", market_price);
  formdata.append("ajayam_price", ajayam_price);
  formdata.append("discount", discount);
  formdata.append("delivery_charge", delivery_charge);

  useEffect(() => {
    dispatch(getAllCategories());
  })
  const { categories } = useSelector((state) => state.gallery);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postNewImage(formdata));
    navigate('/');
  }
  return (
    <>
      <div class='container'>
        <div class='row'>
          <div align='center'>
            <form onSubmit={handleSubmit} encType='multipart/form-data'>
              <br />
              <h1>Add Products</h1>
              <br />
              <div class='form-group'>
                <input type='file' onChange={(e) => setFile(e.target.files[0])}  class='form-control' placeholder='Enter email'/> <br/>
                <input type='file' onChange={(e) => setFile2(e.target.files[0])}  class='form-control' placeholder='Enter email'/> <br/>
                <input type='file' onChange={(e) => setFile3(e.target.files[0])}  class='form-control' placeholder='Enter email'/>  <br/>
                <input type='file' onChange={(e) => setFile4(e.target.files[0])}  class='form-control' placeholder='Enter email'/>  <br/>
              </div>
              <div class='form-group mt-4'>
                <label for='exampleInputEmail1'>Category:</label>
                <select class='form-control custom-select' onChange={(e) => setCategory(e.target.value)} name='category'  >
                  <option value='' selected disabled>
                    Plaese Select
                  </option>
                  {
                    categories && 
                    categories.map((item) => {
                      return <option value={item._id}>{item.name}</option>
                    })
                  }
                </select>
                <br />
                <TextField 
                  required
                  id="standard-required"
                  label="Name of Product"
                  variant="standard"
                  onChange={(e) => setName(e.target.value)}
                />
                <br />
                <br />
                <TextField 
                  id="standard-required"
                  label="Enter Company Name"
                  variant="standard"
                  onChange={(e) => setcompany_name(e.target.value)}
                />
                <br />
                <br />
                <TextField 
                  id="standard-required"
                  label="Enter Product Details"
                  variant="standard"
                  onChange={(e) => setpro_details(e.target.value)}
                />
                <br />
                <br />
                <TextField 
                  id="standard-required"
                  label="Enter material used"
                  variant="standard"
                  onChange={(e) => setmaterial_used(e.target.value)}
                />
                <br />
                <br />
                <TextField 
                  id="standard-required"
                  label="Enter Life span"
                  variant="standard"
                  onChange={(e) => setlife_span(e.target.value)}
                />
                <br />
                <br />
                <TextField 
                  id="standard-required"
                  label="Enter warranty"
                  variant="standard"
                  onChange={(e) => setwarranty(e.target.value)}
                />
                <br />
                <br />
                <TextField 
                  id="standard-required"
                  label="Enter support"
                  variant="standard"
                  onChange={(e) => setsupport(e.target.value)}
                />
                <br />
                <br />
                <TextField 
                  id="standard-required"
                  label="Highlights: Dimension"
                  variant="standard"
                  onChange={(e) => sethighlights(e.target.value)}
                />
                <br />
                <br />
                <TextField 
                  id="standard-required"
                  label="Return Policy"
                  variant="standard"
                  onChange={(e) => setpolicy(e.target.value)}
                />
                <br />
                <br />
                <TextField 
                  id="standard-required"
                  label="Suitable place for it"
                  variant="standard"
                  onChange={(e) => setsuitable_for(e.target.value)}
                />
                <br />
                <br />
                <TextField 
                  id="standard-required"
                  label="Genre"
                  variant="standard"
                  onChange={(e) => setgenre(e.target.value)}
                />
                <br />
                <br />
                <TextField 
                  id="standard-required"
                  label="Market Price of Product"
                  variant="standard"
                  onChange={(e) => setmarket_price(e.target.value)}
                />
                <br />
                <br />
                <TextField 
                  id="standard-required"
                  label="Ajayam Price"
                  variant="standard"
                  onChange={(e) => setajayam_price(e.target.value)}
                />
                <br />
                <br />
                <TextField 
                  id="standard-required"
                  label="Discount %"
                  variant="standard"
                  onChange={(e) => setdiscount(e.target.value)}
                />
                <br />
                <br />
                <TextField 
                  id="standard-required"
                  label="Delivery Charge"
                  variant="standard"
                  onChange={(e) => setdelivery_charge(e.target.value)}
                />


                
              </div>

              <button type='submit' class='btn btn-primary mt-4'>
                Upload New Product
              </button>
            </form>
                  <br />
                  <hr />
            <Link to={'/'}>
            <button className='btn btn-primary'>Go to Home</button>
            </Link>
            <br />
          <br />
          </div>
          
        </div>
      </div>
    </>
  )
}

export default AddImage;