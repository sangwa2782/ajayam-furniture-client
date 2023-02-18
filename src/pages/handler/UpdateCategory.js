import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getCategoryByID } from '../../redux/reducers/gallerySlice';

const UpdateCategory = () => {
  const { category } = useSelector((state) => state.gallery); 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();


  const [input, setInput] = useState({
    name: ""
  });

 useEffect(() => {
  const getAllData = async () => {
   dispatch(getCategoryByID(id));
    };
    getAllData();
    }, [id]);

  const handleUpdateCategory = async (e) => {
    e.preventDefault();
    console.log(input);
    await axios.put(`http://localhost:8000/api/v1/update/category/${id}`, input);
    navigate('/handler/add-category');
  }

  return (
    <>
      <div class='container'>
        <div class='row'>
          <div align='center' className='col-lg-6 col-md-12 col-12'>
            <form onSubmit={handleUpdateCategory}>
              <div class='form-group'>
                <label for='exampleInputEmail1'>Category: </label>
                {   category && 
                    category.map((item) => {
                      return (
                        <>
                        <input 
                          name='_id'
                          type='text'
                          // onChange={(e) => setInput({...input, [e.target.name]: e.target.value })}
                          Value={item._id}
                          class='form-control'
                          placeholder='Enter Category'
                        />
                        <input 
                          name='name'
                          type='category'
                          onChange={(e) => setInput({...input, [e.target.name]: e.target.value })}
                          // onChange={(e) => setUpdateCategory(e.target.value)}
                          Value={item.name}
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

export default UpdateCategory;