import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TextField } from '@mui/material';
import axios from 'axios';
import {  get_Product_List_ById } from '../../redux/reducers/gallerySlice';

const Update_Product = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {id} = useParams();
 

  useEffect(() => {
    const getAllData = async () => {
     dispatch(get_Product_List_ById(id));
      };
      getAllData();
      }, [id]);

    const { products_byid } = useSelector((state) => state.gallery);



    const [input, setInput] = useState({
      category: "",
      sub_category: ""
    });


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

  const handleUpdate_subCategory = async (e) => {
    e.preventDefault();
    console.log(input);
    await axios.put(`http://localhost:8000/api/v1/update/product_byid/${id}`, formdata);
    navigate('/handler/add-category');
  }
  return (
    <>
        <div class='container'>
        <div class='row'>
          <div align='center'>
            <form onSubmit={handleUpdate_subCategory} encType='multipart/form-data'>
              <br />
              <h1>Update Product</h1>
              <br />
              {products_byid && 
                products_byid.map((item) => {
                return (
                  <>
                    <div class='form-group'>
                        <img style={{align:'left', widht: '50px', height: '50px'}} src={`http://localhost:8000/${item.image}`} alt='product'/>
                        <input type='file' onChange={(e) => setFile(e.target.files[0])}  class='form-control' placeholder='Enter email'
                        /> <br/>
                        <img style={{align:'left', widht: '50px', height: '50px'}} src={`http://localhost:8000/${item.image2}`} alt='product'/>
                        <input type='file' onChange={(e) => setFile2(e.target.files[0])}  class='form-control' placeholder='Enter email'
                        /> <br/>
                        <img style={{align:'left', widht: '50px', height: '50px'}} src={`http://localhost:8000/${item.image3}`} alt='product'/>
                        <input type='file' onChange={(e) => setFile3(e.target.files[0])}  class='form-control' placeholder='Enter email'
                        />  <br/>
                        <img style={{align:'left', widht: '50px', height: '50px'}} src={`http://localhost:8000/${item.image4}`} alt='product'/>
                        <input type='file' onChange={(e) => setFile4(e.target.files[0])}  class='form-control' placeholder='Enter email'
                        />  <br/>
                    </div>
                    <div class='form-group mt-4'>
                        <TextField 
                        required
                        type='text'
                        label="Category"
                        variant="standard"
                        defaultValue={item.category}
                        onChange={(e) => setName(e.target.value)}
                        name='category'
                        />
                        
                        <br />
                        <br />

                        <TextField 
                        required
                        id="standard-required"
                        label="Sub-Category"
                        defaultValue={item.sub_category}
                        variant="standard"
                        onChange={(e) => setName(e.target.value)}
                        />
                        <br />
                        <br />
                        
                        <br />
                        <TextField 
                        required
                        id="standard-required"
                        label="Name of Product"
                        defaultValue={item.name}
                        variant="standard"
                        onChange={(e) => setName(e.target.value)}
                        />
                        <br />
                        <br />
                        <TextField 
                        required
                        id="standard-required"
                        label="Enter Company Name"
                        defaultValue={item.company_name}
                        variant="standard"
                        onChange={(e) => setcompany_name(e.target.value)}
                        />
                        <br />
                        <br />
                        <TextField 
                        required
                        id="standard-required"
                        label="Enter Product Details"
                        defaultValue={item.pro_details}
                        variant="standard"
                        onChange={(e) => setpro_details(e.target.value)}
                        />
                        <br />
                        <br />
                        <TextField 
                        required
                        id="standard-required"
                        label="Enter material used"
                        defaultValue={item.material_used}
                        variant="standard"
                        onChange={(e) => setmaterial_used(e.target.value)}
                        />
                        <br />
                        <br />
                        <TextField 
                        required
                        id="standard-required"
                        label="Enter Life span"
                        defaultValue={item.life_span}
                        variant="standard"
                        onChange={(e) => setlife_span(e.target.value)}
                        />
                        <br />
                        <br />
                        <TextField 
                        required
                        id="standard-required"
                        label="Enter warranty"
                        defaultValue={item.warranty}
                        variant="standard"
                        onChange={(e) => setwarranty(e.target.value)}
                        />
                        <br />
                        <br />
                        <TextField 
                        required
                        id="standard-required"
                        label="Enter support"
                        defaultValue={item.support}
                        variant="standard"
                        onChange={(e) => setsupport(e.target.value)}
                        />
                        <br />
                        <br />
                        <TextField 
                        required
                        id="standard-required"
                        label="Highlights: Dimension"
                        defaultValue={item.highlights}
                        variant="standard"
                        onChange={(e) => sethighlights(e.target.value)}
                        />
                        <br />
                        <br />
                        <TextField 
                        required
                        id="standard-required"
                        label="Return Policy"
                        defaultValue={item.policy}
                        variant="standard"
                        onChange={(e) => setpolicy(e.target.value)}
                        />
                        <br />
                        <br />
                        <TextField 
                        required
                        id="standard-required"
                        label="Suitable place for it"
                        defaultValue={item.suitable_for}
                        variant="standard"
                        onChange={(e) => setsuitable_for(e.target.value)}
                        />
                        <br />
                        <br />
                        <TextField 
                        required
                        id="standard-required"
                        label="Genre"
                        defaultValue={item.genre}
                        variant="standard"
                        onChange={(e) => setgenre(e.target.value)}
                        />
                        <br />
                        <br />
                        <TextField 
                        required
                        id="standard-required"
                        label="Market Price of Product"
                        defaultValue={item.market_price}
                        variant="standard"
                        onChange={(e) => setmarket_price(e.target.value)}
                        />
                        <br />
                        <br />
                        <TextField 
                        required
                        id="standard-required"
                        label="Ajayam Price"
                        defaultValue={item.ajayam_price}
                        variant="standard"
                        onChange={(e) => setajayam_price(e.target.value)}
                        />
                        <br />
                        <br />
                        <TextField 
                        required
                        id="standard-required"
                        label="Discount %"
                        defaultValue={item.discount}
                        variant="standard"
                        onChange={(e) => setdiscount(e.target.value)}
                        />

                        
                    </div>
                        </>
                    )
        })
    }

              <button type='submit' class='btn btn-primary mt-4'>
                Update Product
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

export default Update_Product;