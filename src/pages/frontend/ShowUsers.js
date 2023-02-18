import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Show_users,getAllCategories } from '../../redux/reducers/gallerySlice';



const ShowUsers = () => {
    const dispatch = useDispatch();
    const [ setCategory] = useState();
    const { categories, users } = useSelector((state) => state.gallery);

    useEffect(() => {
      dispatch(Show_users());
      dispatch(getAllCategories());
    }, []);
  return (
    <div>
        <div class='form-group mt-4'>
                <label for='exampleInputEmail1'>Category:</label>
                <select class='form-control custom-select' onChange={(e) => setCategory(e.target.value)} name='category'  >
                  <option value='' selected disabled> Plaese Select </option>
                  {
                    categories && 
                    categories.map((item) => {
                      return <option value={item._id}>{item.name}</option>
                    })
                  }
                </select>

                {
                    users && users.map((items) => {
                        console.log(users);
                        return (
                          <>
                            <h2>{items.name}</h2>
                            <p>{items.username}</p>
                            </>  
                            
                        )
                    })
                }
              </div>
    </div>
  )
}

export default ShowUsers;