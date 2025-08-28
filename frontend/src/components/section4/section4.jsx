import React from 'react'
import './section4.css'
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

const section4 = () => {
    return (
        <>
            <div className="works">
                <h2 className="works-title">SELECTED WORKS</h2>

                <div className="cards">
                    <div className="card">
                        <div className="card-img"><img src="https://images.unsplash.com/photo-1630686998037-61df0a2d1920?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBob3RvZ3JhcGh5JTIwbWFufGVufDB8fDB8fHww" alt="" /></div>
                        <div className="overlay">GRADIENT OVERLAY</div>
                    </div>

                    <div className="card">
                        <div className="card-img"><img src="https://images.unsplash.com/photo-1630265947548-994d8bf4d895?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBob3RvZ3JhcGh5JTIwbWFufGVufDB8fDB8fHww" alt="" /></div>
                    </div>

                    <div className="card">
                        <div className="card-img"><img src="https://images.unsplash.com/photo-1644595449424-ad32dc66e6e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvdG9ncmFwaHklMjBtYW58ZW58MHx8MHx8fDA%3D" alt="" /></div>
                    </div>
                </div>

                <div className="work">
                    <button className="work-btn">
                        <span>< MdArrowBackIosNew /></span>
                    </button>
                    <button className="work-btn active">
                        <span><MdArrowForwardIos /></span>
                    </button>
                </div>
            </div>

        </>
    )
}

export default section4