import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='home'>
      <div className='container'>
        <h1>Food & Taste Pizzeria</h1>
        <p>PIZZA O FIT ANY TASTE</p>
        <Link to='/menu'>
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  )
}

export default Home