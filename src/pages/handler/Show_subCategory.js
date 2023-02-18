import React, {  useEffect } from 'react';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import { useDispatch, useSelector } from 'react-redux';
import { Delete_subCategories, getAllCategories, getSubCatList } from '../../redux/reducers/gallerySlice';

const ShowCategory = () => {
  const { categories, sub_categories } = useSelector((state) => state.gallery);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getSubCatList());
  }, []);



  const getSubCatListById = (id) => {
    dispatch(getSubCatList(id));
  }

  const Delete_subCategory = (id) => {
    console.log(id);
    dispatch(Delete_subCategories(id));
  }
  // ------------------------------------

  return (
    <>
    <hr className='mt-5' />
        <div align='center' className='col-lg-12 col-md-12 col-12 '>
        <tr>
            <th><u>Sub-Category List</u></th></tr>
            <br /> <br />
               
            { categories && 
                categories.map((item) => {
                return (
                  <>
                <button onClick={()=>getSubCatListById(item._id)}>{item.name}</button>
                {/* <option onClick={()=>getSubCatListById(item._id)} value={item._id}>{item.name}</option> */}

                </>
                );
                })
            }
          <br /><br />
            {sub_categories && 
              sub_categories.map((item, i) => {
              return (
                  <> 

                      <tr key={i} style={{display:'grid', gridTemplateColumns: '1fr 3fr 2fr 2fr 1fr 1fr', borderBottom: '1px solid #eee', padding: '5px'}}>
                      <td>{i+1}</td>
                      <td style={{}}>{item._id}</td>
                      <td style={{}}>{item.category}</td>
                      <td style={{}}>{item.sub_category}</td>
                      <td style={{color:'blue'}}>
                            <Link to={`/handler/update_subCategory/${item._id}`}>
                              <UpdateIcon />
                            </Link>
                      </td>
                      <td style={{color:'red'}}><DeleteIcon onClick={()=>Delete_subCategory(item._id)} /></td>
                      </tr>

                  </>
                )
              })
          }
         
        
          {/* <table>
            <tr style={{display:'grid', gridTemplateColumns: '1fr 3fr 1fr 1fr', borderBottom: '1px solid #eee', padding: '5px'}}>
              <td>s.no</td>
              <td>Sub Category</td>
              <td>Update</td>
              <td>Delete</td>
            </tr>
          { sub_categories && 
                  sub_categories.map((item2, i) => {
                  return ( 
                  <>
                  <tr key={i} style={{display:'grid', gridTemplateColumns: '1fr 3fr 1fr 1fr', borderBottom: '1px solid #eee', padding: '5px'}}>
                  <td>{i+1}</td>
                  <td>{item2.sub_category}</td>
                  <td><Link to={`/handler/update_subCategory/${item2._id}`}><UpdateIcon /></Link></td>
                  <td><DeleteIcon onClick={()=>Delete_subCategory(item2._id)} /></td>
                  </tr>
                  </>
                  )
                  })
                }
          </table> */}
          </div>  
    </>
  )
}

export default ShowCategory;