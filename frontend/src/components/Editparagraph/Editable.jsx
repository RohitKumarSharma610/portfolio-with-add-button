import React from 'react'
import { useState } from 'react'
import './editable.css'

const Editable = ({ value }) => {
    const [text, setText] = useState(value)
    const [editing, setEditing] = useState(false)
    const [newText, setNewText] = useState(text)

    return (
        <>
            <div>
               
                {
                    !editing ?  (  <div className='table-wraper'> 
              <div className='table-para'>{text}</div> <button className='button' onClick={() => setEditing(true)}>Edit Text</button>
                    </div> 
      ) : (
                        <div className='screen' onClick={() => setEditing(false)}>
                            <div className='screen-center' onClick={(e) => e.stopPropagation()}>
                                <div>
                                    <h3>Edit Here</h3>

                                    <textarea className='text-wh' value={newText} onChange={(e) => setNewText(e.target.value)}></textarea>
                                </div>
                                <div>
                                    <button onClick={() => setEditing(false)}>Cancel</button>
                                    <button onClick={() => { setText(newText); setEditing(false) }}>Save</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default Editable