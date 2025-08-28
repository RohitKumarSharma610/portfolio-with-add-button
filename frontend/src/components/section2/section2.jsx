import React from 'react'
import './section2.css'
import Editable from '../Editparagraph/Editable'

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
                        <img
                            src="https://images.unsplash.com/photo-1509145844239-0d160c78a06a?w=600&auto=format&fit=crop&q=60"
                            alt="Creative Journey"
                            className='journey-img'
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