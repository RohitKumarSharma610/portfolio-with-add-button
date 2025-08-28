import React from 'react'
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import './section6.css'
import logo from '../../assets/logo.png'

const Section6 = () => {
    return (
        <>
            <div className="client-section">
                <h1 className="client-title">MY CLIENT</h1>

                <div className="work">
                    <button className="work-btn">
                        <span><MdArrowBackIosNew /></span>
                    </button>
                    <button className="work-btn active">
                        <span><MdArrowForwardIos /></span>
                    </button>
                </div>
            </div>

            <div className="client-content">
                <div className="client-left">
                    <img
                        src="https://media.istockphoto.com/id/1388648617/photo/confident-caucasian-young-man-in-casual-denim-clothes-with-arms-crossed-looking-at-camera.webp?a=1&b=1&s=612x612&w=0&k=20&c=2bcPQjL56HwHlohxLtXS2iSLSztRSG3WIRyyR43v6FM="
                        alt="Client"
                        className="client-img"
                    />
                </div>

                <div className="client-right">
                    <div className="client-wrapper">
                        <div className="client-desc-box">
                            <p className="client-desc">
                                Long tail equity interaction design creative. Deployment paradigm
                                shif rockstar sales supply chain twitter. Monetization succses
                                customer iteration iPad early adopters. Research & development A/B
                                testing gen-z stock ramen creative leverage early adopters branding
                                innovator pivot.
                            </p>
                        </div>

                    <div><img className='client-logo' src={logo} alt="" /></div>
                        <div className="client-info-box">
                            <h3>Roby Gala</h3>
                            <p>President of Sales</p>
                        </div>
                    </div>
                </div>
         
            </div>
        </>
    )
}

export default Section6