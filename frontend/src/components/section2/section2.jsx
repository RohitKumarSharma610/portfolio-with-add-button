import React from 'react'
import './section2.css'
import Editable from '../Editparagraph/Editable'
import ImageReplace from '../ImageReplace/ImageReplace'

const Section2 = () => {
    return (
        <>
            <div className='journey-section'>
                <div className='journey-top'>
                    <div className='journey-left'>
                        <h1 className='journey-title'>
                            MY <br />CREATIVE <br />JOURNEY
                        </h1>
                    </div>

                    <div className='journey-center'>
                        <ImageReplace
                            uploadUrl="http://127.0.0.1:5000/upload"
                            defaultImg="https://images.unsplash.com/photo-1603207757545-de4fffdb404c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvdG8lMjBncmFwaGVyJTIwbWFufGVufDB8fDB8fHww"
                            alt="Creative Journey"
                            // className='journey-img'
                        />
                    </div>

                    <div className='journey-right'>
                        <div className='stats'>
                            <div className='stat'>
                                <div className='number'>8</div>
                                <div className='label'>Years <br />Experience</div>
                            </div>
                            <div className='stat'>
                                <div className='number'>14</div>
                                <div className='label'>Clients <br />Worldwide</div>
                            </div>
                        </div>
                      
                          <div className='journey-desc'>  <Editable value="MY CREATIVE JOURNEY STARTED IN ROME WHERE I STUDIED FOR THE PAST YEARS." /></div>
                        
                    </div>
                </div>

                <div className='journey-bottom'>
                    <div className='journey-para'><Editable value={" I’ve been lucky to work with talented people and unique brands. Growth hacking sales learning curve stealth A/B testing ownership scrum project. Equity paradigm shift channels monetization startup buyer vesting period."}/> </div>       
                    <div className='journey-para'><Editable value={" My approach is to help my clients to visualize and communicate the best of themselves. Conversion prototype crowdfunding influencer early adopters launch party innovator creative niche market low hanging fruit."}/></div>
                </div>
            </div>
        </>
    )
}

export default Section2