import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postNew_SubCategory } from '../../redux/reducers/gallerySlice';
import { useNavigate } from "react-router-dom";

import Show_subCategory from './Show_subCategory';

const AddSubCategory = () => {
  const { categories } = useSelector((state) => state.gallery);
  const dispatch = useDispatch();
  const navigate  = useNavigate();

  // useEffect(() => {
  //   dispatch(getAllCategories());
  // });

  // for category submit
  const [input, setInput ] = useState({
    category: "",
    sub_category: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(postNew_SubCategory(input));
    navigate('/handler/add-subcategory');
  }



  // ------------------------------------

  return (
    <>
      <div class='container'>
        <div class='row'>
          <div align='center' className='col-lg-6 col-md-12 col-12'>
            <form onSubmit={handleSubmit}>
              <div class='form-group'>
                <label for='exampleInputEmail1'>Category:</label>
                <select class='form-control custom-select' 
                  onChange={(e) => setInput({...input, [e.target.name]: e.target.value })}
                  name='category'  >
                  <option value='' selected disabled>
                    Plaese Select
                  </option>
                        { categories && 
                          categories.map((item) => {
                            return <option value={item._id}>{item.name}</option>
                          })
                        }
                </select>


                <label for='exampleInputEmail1'>Sub-Category: </label>
                <input 
                  name='sub_category'
                  type='text'
                  value={input.sub_category}
                  onChange={(e) => setInput({...input, [e.target.name]: e.target.value })}
                  class='form-control'
                  placeholder='Enter Category'
                />
              </div>
              <button type='submit' class='btn btn-primary mt-4'>Add Category</button>
            </form>  
          </div>

          <Show_subCategory />
     
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

export default AddSubCategory;