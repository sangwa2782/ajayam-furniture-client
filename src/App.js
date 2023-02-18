import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import AddCategory from './pages/AddCategory';
// import Header from './pages/frontend/Header';
import ShowUsers from './pages/frontend/ShowUsers';
import ViewProducts from './pages/frontend/ViewImages';
import Cart from './pages/frontend/Cart';

// For Handler
import Handler_index from './pages/handler/Handler_index';
import AddCategory from './pages/handler/AddCategory';
import AddImage from './pages/handler/AddImage';
import AddSubCategory from './pages/handler/AddSubCategory';
import UpdateCategory from './pages/handler/UpdateCategory';
import Update_SubCategory from './pages/handler/Update_SubCategory';
import ShowPorduct_List from './pages/handler/ShowPorduct_List';
import Update_Product from './pages/handler/Update_Product';
// import AddProduct from './pages/handler/AddProduct';
import Header2 from './pages/frontend/Header2';
import Order_page from './pages/frontend/Order_page';
import Order_complete from './pages/frontend/Order_complete';
import New_order_list from './pages/handler/New_order_list';

import './styles/app.scss';
import './styles/cart.scss';
import './styles/colors.scss';
import './styles/header.scss';
import './styles/banner_page.scss';
import './styles/viewimages.scss';
import './styles/top_selling_product.scss';
import './styles/order_page.scss';
import './styles/order_complete.scss';
import './styles/backend_order_list.scss';

const App = () => {
  return (
    <>
      <Header2 />
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/get/show_users' element={<ShowUsers />} />
        <Route path='/view_image/:id' element={<ViewProducts />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order_page/:id' element={<Order_page />} />
        <Route path='/order_complete' element={<Order_complete />} />

        {/* <Route path='/add-image' element={<AddImage /> } /> */}
        <Route path='/handler/' element={<Handler_index />} >
          <Route path='add-category' element={<AddCategory />} />
          <Route path='update-category/:id' element={<UpdateCategory />} />
          <Route path='add-subcategory' element={<AddSubCategory />} />
          <Route path='add-image' element={<AddImage />} />
          <Route path='update_subCategory/:id' element={<Update_SubCategory />} />
          <Route path='show_product_list' element={<ShowPorduct_List />} />
          <Route path='update_product/:id' element={<Update_Product />} />
          <Route path='new_order_list' element={<New_order_list />} />
        </Route>  
      </Routes>
    </>
  )
}

export default App