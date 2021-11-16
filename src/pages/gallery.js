import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import Gallerylist from '../components/gallerylist';
import Navig from '../components/navig'

const Gallery = () => {
    const { id } = useParams()
    console.log(Gallerylist[0].image)


    return (
        <div className="gallery">
            <Navig />
            <div className="gallerycontent">
                {/* {Gallerylist.map((file, key) => (
                    <div className="card" key={key}>
                        <img src="/categoryimages/bg1.jpg"></img>
                    </div>
                ))} */}
                <div className="gallary-container">
                    <div className="gallery-item">
                        <div className="image">
                        <img src="/categoryimages/bg1.jpg"></img>
                        </div>
                        <div className="text">
                            Image
                        </div>
                    </div>
                </div>
                <div className="gallary-container">
                    <div className="gallery-item">
                        <div className="image">
                        <img src="/categoryimages/bg1.jpg"></img>
                        </div>
                        <div className="text">
                            Image
                        </div>
                    </div>
                </div>
                <div className="gallary-container">
                    <div className="gallery-item">
                        <div className="image">
                        <img src="/categoryimages/bg1.jpg"></img>
                        </div>
                        <div className="text">
                            Image
                        </div>
                    </div>
                </div>
                <div className="gallary-container">
                    <div className="gallery-item">
                        <div className="image">
                        <img src="/categoryimages/bg1.jpg"></img>
                        </div>
                        <div className="text">
                            Image
                        </div>
                    </div>
                </div>
                <div className="gallary-container">
                    <div className="gallery-item">
                        <div className="image">
                        <img src="/categoryimages/bg1.jpg"></img>
                        </div>
                        <div className="text">
                            Image
                        </div>
                    </div>
                </div>
                <div className="gallary-container">
                    <div className="gallery-item">
                        <div className="image">
                        <img src="/categoryimages/bg1.jpg"></img>
                        </div>
                        <div className="text">
                            Image
                        </div>
                    </div>
                </div>
                <div className="gallary-container">
                    <div className="gallery-item">
                        <div className="image">
                        <img src="/categoryimages/bg1.jpg"></img>
                        </div>
                        <div className="text">
                            Image
                        </div>
                    </div>
                </div>        <div className="gallary-container">
                    <div className="gallery-item">
                        <div className="image">
                        <img src="/categoryimages/bg1.jpg"></img>
                        </div>
                        <div className="text">
                            Image
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Gallery