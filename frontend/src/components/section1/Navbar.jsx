import React from 'react'
import './nav.css'
import navimage from '../../assets/side.png'
import victor from '../../assets/vector.png'
import Hero from './Hero'
import Buttonmanager from '../buttonmanager'


const Navbar = () => {
  return (
    <>
      <nav>
        <button className='navbutton'>
          <img src={navimage} alt=" Nav image" className='navimage' />
        </button>

        <div>
          <img src={victor} alt="" />
        </div>

        <div className='divbutton'>


                    <Buttonmanager />
          <button>CONTACT</button>
        </div>

      </nav>
      <Hero />
    </>
  )
}

export default Navbar