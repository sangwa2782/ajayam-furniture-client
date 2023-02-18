import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';
import {FiShoppingBag} from 'react-icons/fi';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllImages, getAllCategories, getSingleImage, viewImageById } from '../../redux/reducers/gallerySlice';


const Header2 = () => {
    const { cartItems } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getAllImages());
      dispatch(getAllCategories());
    }, []);
  
    const { categories } = useSelector((state) => state.gallery);

    const handleCategories = (id) => {
      dispatch(getSingleImage(id));
      dispatch(getAllImages());
    }

  return (
    <>
        <div style={{marginBottom: '30px'}}>
        <nav class="navbar bg-light fixed-top " style={{boxSizing: 'border-box'}} >
        <div className="container-fluid">
          
          <div className=' '>
            <Link to='/' className="navbar-brand  ">
              <span>Ajayam.in</span>
            </Link>
          </div>

    

          <div className=''>
          <div className='mr-5  ' style={{marginBottom: '-40px', hieght: '0px', marginLeft: '-45px', color: 'red'}}>
            <Link to='/cart' style={{ textDecoration: 'none'}}>
                  <ShoppingCartIcon style={{color:'#FF5858', marginTop: '10px'}} />
                  <p style={{marginTop: '-35px', hieght: '0px', marginLeft: '7px', color: '#41c47a',}}>{cartItems.length}</p>    
            </Link>
         </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
    </div>



    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{border: '1px solid red', width: '60%'}}>
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
          <Link to='/'>
            Ajayam.in
          </Link>
        </h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
              <Link to='/get/show_users'>
                  <button className='btn btn-info my-3 mx-4'>Show Users Data</button>
              </Link>
              <button onClick={() => dispatch(getAllImages())} class='btn btn-primary filter-button' data-filter='all'>All</button>
            {
              categories && 
              categories.map((item) => {
                return (
                  <button onClick={() => handleCategories(item._id)} class='btn btn-default filter-button border mx-2' data-filter='hdpe'>
                    {item.name}
                  </button>
                )
              })
            }
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">


           
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex mt-3" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
        </div>
    </>
  )
}

export default Header2;