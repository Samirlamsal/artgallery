import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Navig from '../components/navig'
import { ImCross } from 'react-icons/im';
import Footer from '../components/footer'
import ClockLoader from "react-spinners/ClockLoader";


const Gallery = () => {
    const { id } = useParams()
    // function getCookie(name) {
    //     let cookieValue = null;
    //     if (document.cookie && document.cookie !== '') {
    //         const cookies = document.cookie.split(';');
    //         for (let i = 0; i < cookies.length; i++) {
    //             const cookie = cookies[i].trim();
    //             // Does this cookie string begin with the name we want?
    //             if (cookie.substring(0, name.length + 1) === (name + '=')) {
    //                 cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
    //                 break;
    //             }
    //         }
    //     }
    //     return cookieValue;
    // }
    // const csrftoken = getCookie('csrftoken');
    const [showmodal, setshowmodal] = useState({
        active: false,
        id: '',
        name: '',
        image: '',
        category: '',
        description: '',
        added_on: '',
    })
    const [loading, setLoading] = useState(true);



    const [file, setFile] = useState([])
    const [category, setCategory] = useState([])
    useEffect(() => {
        setLoading(true)

        fetch('https://dashboard.kavyakriti.com/api/data/files/')
            .then(response => response.json())
            .then(data => {
                setFile(data)
                setLoading(false)
            }

            )
        fetch('https://dashboard.kavyakriti.com/api/data/categories/')
            .then(response => response.json())
            .then(data => {
                setCategory(data)
            }

            )

    }, []);

    var category_name
    for (let i = 0; i < category.length; i++) {
        if (category[i].id == id) {
            category_name = category[i].title
        }
    }







    return (
        <div className="gallery">
            <Navig />

            <div data-aos="fade-up" className="gallerycontent">
                {
                    loading === true ? (
                        <div className="loader"><ClockLoader color={'black'} loading={loading} size={40} /></div>)
                        : (
                            file.map((file, key) => (
                                file.category == id ? (
                                    <div className="card" onClick={() => setshowmodal({ active: true, id: file.id, name: file.name, image: file.image, category: file.category, description: file.description, added_on: file.added_on })} key={key}>
                                        <img alt="" src={file.image}></img>
                                    </div>
                                ) :
                                    null
                            ))
                        )


                }
            </div>
            {showmodal.active === true &&
                <div className="bg-modal" data-aos="fade-right">
                    <div className="modal">
                        <div className="left">
                            <div className="image">
                                <img alt="" src={showmodal.image}></img>
                            </div>
                        </div>
                        <div className="right">
                            <div className="content">
                                <div className="title">
                                    <h1>{showmodal.name}</h1>
                                    <h2>Series: <span>{category_name}</span></h2>
                                </div>
                                <div className="detail">
                                    <p>{showmodal.description}</p>
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