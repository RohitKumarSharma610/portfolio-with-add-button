import React, { useState } from 'react'
import axios from 'axios';
import "./imageReplace.css"
import { FaCloudUploadAlt } from "react-icons/fa";

const ImageReplace = ({defaultImg,uploadUrl}) => {

    const [imgUrl,setImageurl] = useState(defaultImg)

    const inputId = `change-image-${Date.now()}-${Math.random()}`;

     const handlesubmit =async(e)=>{
     let file =e.target.files[0]
    //  if(!file) return
       
     let localeurl = URL.createObjectURL(file)
     setImageurl(localeurl)

     let sendback = new FormData()
     sendback.append("image",file)
     sendback.append("image_id",`img_${Date.now()}`)

     try{
        const res = await axios.post(uploadUrl,sendback)
        setImageurl(`${uploadUrl.replace("/upload","")}${res.data.url}`)
   console.log(res.data,"send data in backend")
     } catch(err){
   console.log("data not send in backend ",err)
     }
     }


  return (
    <>
   
        <img src={imgUrl} alt="my-image" className='image-fit' />
        <label className='replace-image' htmlFor={inputId}><FaCloudUploadAlt/></label>
        <input className='hide-input' type="file" id={inputId} onChange={handlesubmit} />
    

    </>
  )
}

export default ImageReplace