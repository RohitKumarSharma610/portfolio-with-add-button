import React, { useState } from 'react'
import './buttonmanager.css'
import { MdEdit } from "react-icons/md";
import axios from 'axios';

const buttonmanager = () => {

    const [buttons, setButton] = useState([])
    const [open, setOpen] = useState(false)
    const [currentindex, setCurrentindex] = useState(null)
    const [text, setText] = useState("")
    const [color, setColor] = useState("#101010ff")
    const [size, setSize] = useState('medium')
    const [url, setUrl] = useState("")
    // const [urltext,setUrltext ] = useState("")

    const openModel = (index = null) => {
        if (index !== null) {
            const btn = buttons[index];
            setCurrentindex(index);
            setUrl(btn.url)
            setText(btn.text);
            setColor(btn.color)
            setSize(btn.size)

        } else {
            setCurrentindex(null);
            setText("")
            setColor("#191919")
            setSize("medium")
            setUrl("")
        }
        setOpen(true)
    }

    const backenddata = async (url, text, color, size) => {
        try {
            const res = await axios.post("http://127.0.0.1:5000/update-section", {
                urlName: url,
                text: text,
                color: color,
                size: size
            })
            console.log("response", res.data)
            console.log("Data received by backend:", res.data.received);
        } catch (err) {
            console.log("Error", err)
        }

    }

    const saveButton = () => {
        if (text.trim() === "" || url.trim() === "") {
            alert("please chek the feild")
            return;
        }
        const pattern = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w-]*)*(\?.*)?(#.*)?$/i;
        if (!pattern.test(url)) {
            alert("Please enter a valid URL!");
            return;
        }
        const newBtn = { text, color, size, url }
        if (currentindex !== null) {
            const update = [...buttons];
            update[currentindex] = newBtn;
            setButton(update)

        } else {
            setButton([...buttons, newBtn])
        }
        backenddata(url, text, color, size)
        setOpen(false)


    }

    const deleteButton = (index) => {
        const update = buttons.filter((_, i) => i !== index);
        setButton(update)
    }



    return (
        <>
            <div className='button-manager'>
                {
                    buttons.length === 0 && (

                        <div className='add-btn' onClick={() => openModel()}>+Button</div>
                    )
                }
                <div className='buttons-list'>
                    {
                        buttons.map((btn, ind) => (
                            <div key={ind} className='button-item'>
                                <div className='main-btn' style={{
                                    backgroundColor: btn.color, padding: btn.size === 'small' ? '2px 6px' : btn.size === 'medium' ? '4px 8px' : '6px 10px',
                                }}><a className='color-url' href={url} target='_blank'>{btn.text}</a>
                                    <div className='edit-btn' onClick={() => openModel(ind)}><MdEdit /></div>
                                <div className='btn-add' onClick={() => openModel()}>+Add</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                {
                    open && (
                        <div className='modal'>
                            <h3>{currentindex !== null ? "Edit Button" : "Add Button"}</h3>
                            <div>
                                <label htmlFor="url">Past your url <br /><span className='span-text'>paste your url</span></label>
                                <input id='url' className='input-url' placeholder='enter the URL' value={url} onChange={(e) => setUrl(e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="button">Button Text<br /><span className='span-text'>Add call to action button</span></label>
                                <input id='button' className='input-text' placeholder='Button Name' value={text} onChange={(e) => setText(e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="color">Color<br /><span className='span-text'> Add button color</span></label>
                                <input id='color' className='input-color' type="color" value={color} onChange={(e) => setColor(e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="size">Button Size <br /><span className='span-text'>Size of button</span></label>
                                <select id='size' className='input-size' value={size} onChange={(e) => setSize(e.target.value)}>
                                    <option value="small">small</option>
                                    <option value="medium">medium</option>
                                    <option value="large">large</option>
                                </select>
                            </div>
                            <div className='modal-actions'>
                                <button className='save-btn' onClick={saveButton}>Save</button>
                                <button className='cancel-btn' onClick={() => setOpen(false)}>Cancel</button>
                                <button className='delete-btn' onClick={() => { deleteButton(currentindex), setOpen(false) }}>Delete</button>
                            </div>
                        </div>
                    )
                }

            </div>
        </>
    )
}

export default buttonmanager