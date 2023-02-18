import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { postNewCategory } from '../../redux/reducers/gallerySlice';
import { useNavigate } from "react-router-dom";
import ShowCategory from './ShowCategory';

const AddCategory = () => {
  
  const [input, setInput] = useState({
    name: "",
  });

  const dispatch = useDispatch();
  const navigate  = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(postNewCategory(input));
    navigate('/handler/add-category');
  }

  return (
    <>
      <div class='container'>
        <div class='row'>
          <div align='center' className='col-lg-6 col-md-12 col-12'>
            <form 
            onClick={handleSubmit}
            >
              <div class='form-group'>
                <label for='exampleInputEmail1'>Category: </label>
                <input 
                  name='name'
                  type='text'
                  value={input.name}
                  onChange={(e) => setInput({...input, [e.target.name]: e.target.value })}
                  class='form-control'
                  placeholder='Enter Category'
                />
              </div>
              <button type='submit' class='btn btn-primary mt-4' >Add Category</button>
            </form>  
          </div>   
          <ShowCategory />  
        </div>
        
        <br />
            <hr />
            <div align='center'>
              <Link to='/'>
                <button className='btn btn-primary'>Go to Home</button>
              </Link>
           </div>
      </div>
    </>
  )
}

export default AddCategory;