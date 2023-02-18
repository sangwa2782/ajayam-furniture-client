import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getCategoryByID, getSubCategory_ById } from '../../redux/reducers/gallerySlice';

const Update_SubCategory = () => {
  const { category, sub_categories } = useSelector((state) => state.gallery); 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();


  const [input, setInput] = useState({
    category: "",
    sub_category: ""
  });

 useEffect(() => {
  const getAllData = async () => {
   dispatch(getCategoryByID()) 
   dispatch(getSubCategory_ById(id));
    };
    getAllData();
    }, [id]);

  const handleUpdate_subCategory = async (e) => {
    e.preventDefault();
    console.log(input);
    await axios.put(`http://localhost:8000/api/v1/update/sub_category/${id}`, input);
    navigate('/handler/add-category');
  }

  return (
    <>
      <div class='container'>
        <div class='row'>
          <div align='center' className='col-lg-6 col-md-12 col-12'>
            <form onSubmit={handleUpdate_subCategory}>
              <div class='form-group'>
                <label for='exampleInputEmail1'>Category: </label>
                {   sub_categories && 
                    sub_categories.map((item) => {
                      return (
                        <>
                        <input 
                          name='category'
                          type='text'
                          onChange={(e) => setInput({...input, [e.target.name]: e.target.value })}
                          Value={item.category}
                          class='form-control'
                          placeholder='Enter Category'
                        />
                        <input 
                          name='sub_category'
                          type='text'
                          onChange={(e) => setInput({...input, [e.target.name]: e.target.value })}
                          // onChange={(e) => setUpdateCategory(e.target.value)}
                          Value={item.sub_category}
                          class='form-control'
                          placeholder='Enter Category'
                        />
                        </>
                )
              })
          }
              </div>
              <button type='submit' class='btn btn-primary mt-4'>Add Category</button>
            </form>  
          </div>      
        </div>
        
      </div>
    </>
  )
}

export default Update_SubCategory;