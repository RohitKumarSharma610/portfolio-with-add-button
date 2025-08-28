import React from 'react'
import './section5.css'

const Section5 = () => {
  return (
    <>
<div className="services">
   <div className="img-box">
  <img src="https://media.istockphoto.com/id/1303206644/photo/portrait-of-smiling-caucasian-man-pose-in-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=akRiOpll6XSlduMj09n9Zm11SsRpAjtdr85GbGJ99uM=" alt="GRAPHIC DESIGNER" />
</div>
       
  <div className="service num-border">
    <span className="num num-color">01</span>
    <h2 className="title num-color">GRAPHIC DESIGN</h2>
  </div>

  <div className="service">
    <span className="num">02</span>
    <h2 className="title">ART DIRECTION</h2>
  </div>

  <div className="service">
    <span className="num">03</span>
    <h2 className="title">BRAND STRATEGY</h2>
  </div>

  <div className="service">
    <span className="num">04</span>
    <h2 className="title">MOTION</h2>
  </div>
</div>

    </>
  )
}

export default Section5