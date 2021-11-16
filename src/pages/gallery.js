import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Navig from '../components/navig'
import { ImCross } from 'react-icons/im';
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
    const [showmodal, setshowmodal] = useState({
        active: false,
        id: '',
        name: '',
        image: '',
        category: '',
    })


    const [file, setFile] = useState([])
    const [category, setCategory] = useState([])
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/files/')
            .then(response => response.json())
            .then(data =>
                setFile(data)

            )
        fetch('http://127.0.0.1:8000/api/categories/')
            .then(response => response.json())
            .then(data => {
                setCategory(data)
                console.log(data)
            }

            )

    }, []);
    console.log(showmodal)
    console.log(category)
    console.log(file)
    var category_name
    for (let i = 0; i < category.length; i++) {
        if (category[i].id == id) {
            category_name = category[i].title
        }
    }

    console.log(category_name)






    return (
        <div className="gallery">
            <Navig />
            <div className="gallerycontent">
                {file.map((file, key) => (
                    file.category == id ? (
                        <div className="card" onClick={() => setshowmodal({ active: true, id: file.id, name: file.name, image: file.image, category: file.category })} key={key}>
                            <img src={file.image}></img>
                        </div>
                    ) :
                        null
                ))}
            </div>
            {showmodal.active === true &&
                <div className="bg-modal" data-aos="fade-right">
                    <div className="modal">
                        <div className="left">
                            <div className="image">
                                <img src={showmodal.image}></img>
                            </div>
                        </div>
                        <div className="right">
                            <div className="content">
                                <div className="title">
                                    <h1>{showmodal.name}</h1>
                                    <h2>Series: <span>{category_name}</span></h2>
                                </div>
                                <div className="detail">
                                    <p>When inspiration comes to an artist, no matter whatever it is and wherever it comes from,
                                        it makes him open up, expose his bare feelings to outsiders. It is exactly this openness
                                        expressed by paint on canvas that gets noticed and that touches us.</p>
                                </div>
                            </div>
                            <div className="cross" onClick={() => { setshowmodal({ active: false }) }}><ImCross /></div>
                        </div>
                    </div>

                </div>}

            <Footer />
        </div >
    )
}

export default Gallery