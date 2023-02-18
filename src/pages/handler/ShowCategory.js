import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories, DeleteCategories } from '../../redux/reducers/gallerySlice';

const ShowCategory = () => {
  const { categories } = useSelector((state) => state.gallery);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
  });

  const DeleteCategory = (_id) => {
    console.log(_id);
    dispatch(DeleteCategories(_id));
  }
  // ------------------------------------

  return (
    <>
        <div align='center' className='col-lg-6 col-md-12 col-12'>
        <tr><th><u>Category List</u></th></tr>
          <ol>
          {   categories && 
              categories.map((item) => {
              return (
                  <> 
                    <li>
                      <tr style={{display:'grid', gridTemplateColumns: '3fr 1fr 1fr', borderBottom: '1px solid #eee', padding: '5px'}}>
                        <td style={{}}>{item.name}</td>
                        <td style={{color:'blue'}}>
                            <Link to={`/handler/update-category/${item._id}`}>
                              <UpdateIcon />
                            </Link>
                        </td>
                        <td style={{color:'red'}}><DeleteIcon onClick={()=>DeleteCategory(item._id)} /></td>
                      </tr>
                    </li>
                  </>
                )
              })
          }
          </ol>
          </div>  
    </>
  )
}

export default ShowCategory;