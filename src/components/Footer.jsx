import React from 'react';
import '../styles/Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <InstagramIcon />
            <FacebookIcon />
        </div>
        <p>&copy; 2023 food&taste.com</p>
    </div>
  )
}

export default Footer