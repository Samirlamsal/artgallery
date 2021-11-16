import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Gallerylist from '../components/gallerylist';
import Navig from '../components/navig'
import Footer from '../components/footer'

const Gallery = () => {
    const { id } = useParams()
    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    const csrftoken = getCookie('csrftoken');


    const [file, setFile] = useState([])
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/files/')
            .then(response => response.json())
            .then(data =>
                setFile(data)

            )

    }, []);




    return (
        <div className="gallery">
            <Navig />
            <div className="gallerycontent">
                {file.map((file, key) => (
                    file.category == id?(
                    <div className="card" key={key}>
                        <img src={file.image}></img>
                    </div>
                    ):
                    null
                ))}

            </div>
<Footer />
        </div>
    )
}

export default Gallery