import React, {  useEffect } from 'react'


import { useDispatch, useSelector } from 'react-redux';
import { get_Order_List } from '../../redux/reducers/gallerySlice';





const New_order_list = () => {

  function Popup(data) {
    return (
      <>
        
      </>
    )
  }

    
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(get_Order_List());
    },[]);

    const { order_list } = useSelector((state) => state.gallery);

    // const Delete_Product = (id) => {
    //     dispatch(Delete_ProductById(id));
    //   }

  return (
    <>
    <div className='container_order_list mt-5 '>
        <div className='row m-auto'>

        {   order_list && 
            order_list.map((item) => {
              return (
                <>
                    <div className='ordered_list_box col-5 col-md-2 col-lg-2'>
                        <div>
                        <img src={`http://localhost:8000/${item.pro_imgname}`} alt='product'/>
                        </div>
                        <p className='pt-4'>{item.name}</p>
                        <p className='time pt-1'>{item.tola}, {item.village}, {item.city}, {item.state}</p>
                        <p className='time'>{item.time}</p>
                    </div>             
                </>
                )
              })
        }
        
        </div> 
    </div>
    </>
  )
}

export default New_order_list;