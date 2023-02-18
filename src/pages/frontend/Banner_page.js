import React from 'react';

import Button from '@mui/material/Button';


const Banner_page = () => {
  return (
    <>
        <div className='container ajayam_banner'>
            <div className='  row'>
            <div className='col-lg-8 col-md-8 col-12'>
                <img src='./assetes/banner2_1.jpg' alt='banner' />
            </div>
            <div className='col-lg-4 col-md-4 col-12  pt-2'>
              <center>
              <h2>You are not cool <br />untill you are <br /> modern</h2>                
                <Button className='col-11 m-auto' variant="outlined">Shopp Now</Button>
              </center>
            </div>
            </div>
        </div>
    </>
  )
}

export default Banner_page;