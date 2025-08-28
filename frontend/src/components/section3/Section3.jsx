import React from 'react'
import './section3.css'
import logo  from '../../assets/VictoriLogo.png'
import { FaArrowRight } from "react-icons/fa6";

const Section3 = () => {
    return (
        <>
            <div className="sec3">
                <div>
                    <h1 className="exp-title">EXPERIENCE</h1>
                </div>

                <div className='exp-flex'>
                    <div>
                        <div className="experience">
                            <div className="experience-item">
                    <div className='exp-circle'><img src={logo} alt="" /></div>
                                <div className="exp-left">
                                    <span className="exp-year">2023 - Present</span>
                                    <h2 className="exp-role">ART DIRECTOR</h2>
                                </div>
                                <div className="exp-right exp-right1">Victori</div>
                            </div>

                            <div className="experience-item">
                                <div className="exp-left">
                                    <span className="exp-year">2023 - Present</span>
                                    <h2 className="exp-role exp-role1">UX/UI DESIGNER & DEVELOPER</h2>
                                </div>
                                <div className="exp-right">Acumen</div>
                            </div>

                            <div className="experience-item">
                                <div className="exp-left">
                                    <span className="exp-year">2023 - Present</span>
                                    <h2 className="exp-role exp-role1">CREATIVE DEVELOPER</h2>
                                </div>
                                <div className="exp-right">Designify</div>
                            </div>
                        </div>

                    </div>




                    <div className='exp-resume'>


                        <div>
                            <p>Business plan seed money value proposition startup client direct mailing bootstrapping MVP success hypotheses gen-z pivot iteration ecosystem. Hackathon burn rate influencer business-to-business series A financing metrics low hanging fruit advisor alpha iPhone disruptive seed round.</p>
                        </div>
                        <div>
                            <h3 className='exp-download'>DOWLOAD RESUME < FaArrowRight/></h3>
                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}

export default Section3