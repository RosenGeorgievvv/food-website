import React from 'react'
import MultiplePizzas from '../assets/multiplePizzas.jpeg'

function About() {
    return (
        <div className='about'>
            <div className='aboutTop' style={{ backgroundImage: `url(${MultiplePizzas})` }}></div>
            <div className='aboutBottom'>
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Animi, fuga id rerum facilis ut cum harum consectetur cupiditate ex impedit?
                    Sint corrupti, nulla molestiae odio illo neque cupiditate in sequi!</p>
            </div>
        </div>
    )
}

export default About