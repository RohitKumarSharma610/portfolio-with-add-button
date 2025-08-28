import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <>
      <div >
        <div className='footer'>HOW TO REACH ME</div>


        <div className="footer-section">
          <div className="footer-about">
            Advisor leverage infographic influencer. Equity business plan virality
            monetization lean startup validation conversion seed round hackathon
            crowdsource entrepreneur low hanging fruit ecosystem buzz.
          </div>

          <div className="footer-contact">
            <p className="footer-label">Address</p>
            <h3 className="footer-text">
              Via Francesco Del Giudice 86 <br />
              Rome, Italy
            </h3>
            <p className="footer-label">Call</p>
            <h3 className="footer-text">(862) 258-1210</h3>
          </div>

          <div className="footer-social">
            <p className="footer-label">Follow Me</p>
            <h3 className="footer-text">
              behance <br />
              dribbble <br />
              linkedin <br />
              instagram
            </h3>
          </div>
        </div>

     <div className='footer-copy'>
      <p>© Ivan Stark. All rights reserved </p>
      <p>Privacy Policy</p>
     </div>

      </div>
    </>
  )
}

export default Footer