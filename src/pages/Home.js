import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllImages, getAllCategories, getSingleImage, viewImageById } from '../redux/reducers/gallerySlice';

import Banner_page from './frontend/Banner_page';
import Top_selling_product from './frontend/Top_selling_product';

const Home = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllImages());
    dispatch(getAllCategories());
  }, []);

  const { images, categories } = useSelector((state) => state.gallery);

  // const handleCategories = (id) => {
  //   dispatch(getSingleImage(id));
  //   dispatch(getAllImages());
  // }



 
  return (
    <>
        <div>
          <Banner_page />
          <Top_selling_product />
          
        </div>
        
      
    </>
  )
}

export default Home;