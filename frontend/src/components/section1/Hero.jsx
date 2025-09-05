import React, { useState } from 'react'
import "./nav.css"
import element from '../../assets/element.png'
import Editable from '../Editparagraph/Editable'
import ImageReplace from '../ImageReplace/ImageReplace'

const Hero = () => {


  return (
<>

        <div className='sec1flex'>
            <div className='section1up' >
                <ImageReplace 
                uploadUrl="http://127.0.0.1:5000/upload"
                defaultImg="https://images.unsplash.com/photo-1623100426599-4f15cb1715f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fG1hbnBob3RvfGVufDB8fDB8fHww" alt="portfolio image.." />
            </div>
            <div className='hero-name'>
                 <h1>
        I’M <br />
        IVAN <br />
        STARK
      </h1>
            </div>
            <div className='position'>
              <img src={element} alt="" />
            </div>
        </div>





        <div className='designer'>
          <div className='flex'>
          <p  className='designername'>// A DIGITAL DESIGNER //</p>
           <div className='circle'></div>
          </div>
          <div className='flex'>
            <div className='circle'></div>
          <p className='designername'>// A DIGITAL DESIGNER //</p>
          </div>
        </div>
         <div className='hero-para'>
          <Editable value={"My approach is to help my clients to visualize and communicate the best of themselves."}/> 
        </div>

</> 
 )
}

export default Hero