import React, { useEffect, useState } from 'react';
import {Box, TextField} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCategories, getSubCatList, post_newProduct } from '../../redux/reducers/gallerySlice';

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const [category, setCategory ] = useState();
  const [subcategory, set_subCategory ] = useState();
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

  const [file1, setFile1 ] = useState();
  const [file2, setFile2 ] = useState();
  const [file3, setFile3 ] = useState();
  const [file4, setFile4 ] = useState();
  
  const formdata = new FormData();
  formdata.append("category", category);
  formdata.append("sub_category", subcategory);
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

  formdata.append("image1", file1);
  formdata.append("image2", file2);
  formdata.append("image3", file3);
  formdata.append("image4", file4);



  const { categories, sub_categories } = useSelector((state) => state.gallery);
  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getSubCatList());
  }, []);

  const getSubCatListById = (id) => {
    dispatch(getSubCatList(id));
  }

  const handle_productSubmit = (e) => {
    e.preventDefault();
    dispatch(post_newProduct(formdata));
    navigate('/handler/add-product');
  }
  return (
    <>

      <div class='container'>
        <div class='row'>
          <div align='center col-lg-6 col-md-12 col-12'>

            <h2 className='col-lg-12 col-12 m-5 p-5'><u>Add Product Page</u></h2>

            <form onSubmit={handle_productSubmit} method='post' encType='multipart/form-data'>
              
              <div class='form-group mt-4'>

                <select class='form-control custom-select' className='col-lg-6 col-12 p-2 mb-3' onChange={(e) => setCategory(e.target.value)} name='category'  >
                  <option value='' selected disabled>
                    Plaese Select Category
                  </option>
                  { categories && 
                    categories.map((item) => {
                    return (
                      <>
                    <option onClick={()=>getSubCatListById(item._id)} value={item._id}>{item.name}</option>
                      </>
                      );
                      })
                  }
                </select>
                  <br />

                <select class='form-control custom-select'  className='col-lg-6 col-12 p-2 mb-3' onChange={(e) => set_subCategory(e.target.value)} name='sub_category'  >
                  <option value='' selected disabled>
                    Plaese Select Sub-Category
                  </option>
                  {sub_categories && 
                    sub_categories.map((item2) => {
                    return (
                        <> 
                        <option key={item2._id} value={item2._id}>{item2.sub_category}</option>
                        </>
                      );
                    })
                  }
                </select>
                <br />

                <TextField 
                  required
                  className='mb-3'
                  name='name'
                  label="Name of Product"
                  variant="outlined"
                  onChange={(e) => setName(e.target.value)}
                />
                <br />

                <TextField 
                  required
                  className='mb-3'
                  name='company_name'
                  label="Company Name"
                  variant="outlined"
                  onChange={(e) => setcompany_name(e.target.value)}
                /><br />

                <TextField 
                  required
                  className='mb-3'
                  name='pro_details'
                  label="Product details : Smeeksha"
                  variant="outlined"
                  onChange={(e) => setpro_details(e.target.value)}
                /><br />

                <TextField 
                  required
                  className='mb-3'
                  name='material_used'
                  label="Material Used"
                  variant="outlined"
                  onChange={(e) => setmaterial_used(e.target.value)}
                /><br />

                                
                <TextField 
                  required
                  className='mb-3'
                  name='life_span'
                  label="life span"
                  variant="outlined"
                  onChange={(e) => setlife_span(e.target.value)}
                /><br />

                <TextField 
                  required
                  className='mb-3'
                  name='warranty'
                  label="Warranty & Guarenty"
                  variant="outlined"
                  onChange={(e) => setwarranty(e.target.value)}
                /><br />

                <TextField 
                  required
                  className='mb-3'
                  name='support'
                  label="Manufacturer Support"
                  variant="outlined"
                  onChange={(e) => setsupport(e.target.value)}
                /><br />

                <TextField 
                  required
                  className='mb-3'
                  name='highlights'
                  label="Highlights: Dimension"
                  variant="outlined"
                  onChange={(e) => sethighlights(e.target.value)}
                /><br /> 

                <TextField 
                  required
                  className='mb-3'
                  name='policy'
                  label="Return Policy"
                  variant="outlined"
                  onChange={(e) => setpolicy(e.target.value)}
                /><br />   

                <TextField 
                  required
                  className='mb-3'
                  name='suitable_for'
                  label="Suitable place for it"
                  variant="outlined"
                  onChange={(e) => setsuitable_for(e.target.value)}
                /><br />

                <TextField 
                  required
                  className='mb-3'
                  name='genre'
                  label="Genre:"
                  variant="outlined"
                  onChange={(e) => setgenre(e.target.value)}
                /><br />

                <TextField 
                  required
                  className='mb-3'
                  name='market_price'
                  label="Market Price of Product"
                  variant="outlined"
                  onChange={(e) => setmarket_price(e.target.value)}
                /><br />

                <TextField 
                  required
                  className='mb-3'
                  name='ajayam_price'
                  label="Ajayam Price"
                  variant="outlined"
                  onChange={(e) => setajayam_price(e.target.value)}
                /><br />

                <TextField 
                  required
                  name='discount'
                  label="Discount %"
                  variant="outlined"
                  onChange={(e) => setdiscount(e.target.value)}
                /><br /> <br />

                <div class='form-group' className='col-lg-6 col-12 p-2 mb-1'>
                    <label for='exampleInputImail1'>Image:</label>
                    <input type='file' onChange={(e) => setFile1(e.target.files[0])} class='form-control' placeholder='Enter email'
                    />  
                </div>

                <div class='form-group'  className='col-lg-6 col-12 p-2 mb-1'>
                    <label for='exampleInputImail1'>Image:</label>
                    <input type='file' onChange={(e) => setFile2(e.target.files[0])} class='form-control' placeholder='Enter email'
                    />  
                </div>

                <div class='form-group'  className='col-lg-6 col-12 p-2 mb-1'>
                    <label for='exampleInputImail1'>Image:</label>
                    <input type='file' onChange={(e) => setFile3(e.target.files[0])} class='form-control' placeholder='Enter email'
                    />  
                </div>

                <div class='form-group'  className='col-lg-6 col-12 p-2 mb-1'>
                    <label for='exampleInputImail1'>Image:</label>
                    <input type='file' onChange={(e) => setFile4(e.target.files[0])} class='form-control' placeholder='Enter email'
                    />  
                </div><br />             




            
                
              </div>

              <button type='submit' class='btn btn-primary mt-4'> Upload Products</button>
            </form>
            <hr />
                  <br />
            <Link to={'/'}>
            <button className='btn btn-primary mb-5'>Go to Home</button>
            </Link>
          </div>
          <br />
        </div>
      </div>
    </>
  )
}

export default AddProduct;