import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ClockLoader from "react-spinners/ClockLoader";



const Category = () => {
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
    const [loading, setLoading] = useState(true);


    const [category, setCategory] = useState([])
    useEffect(() => {
        setLoading(true)
        fetch('https://bibekchalise.pythonanywhere.com/api/categories/')
            .then(response => response.json())
            .then(data => {
                setCategory(data)
                setLoading(false)
            }

            )
    }, []);
    console.log(category)

    return (
        <div className="categories" id="categories">
            <div className="title">
                <h1 data-aos="fade-down">Collection<div className="hr"></div></h1>
                <p data-aos="fade-down">When inspiration comes to an artist, no matter whatever it is and wherever it comes from,
                    it makes him open up, expose his bare feelings to outsiders. It is exactly this openness
                    expressed by paint on canvas that gets noticed and that touches us.</p>
            </div>
            <div className="content">
                {
                    loading === true ? (
                        <div className="loader"><ClockLoader color={'black'} loading={loading} size={40} /></div>)
                        : (

                            category.map((categories, key) => (
                                <div data-aos="fade-up" className="card" key={key}>
                                    <div className="image">
                                        <img alt="" src={categories.image}></img>

                                    </div>
                                    <div className="button">
                                        <Link to={`/gallery/${categories.id}`}><i class="fa fa-arrow-right"></i></Link>
                                    </div>
                                    <div className="detail">
                                        <h2 data-aos="fade-right">{categories.title}<div className="titlehr"></div></h2>
                                    </div>
                                </div>))

                        )}
            </div>
        </div>
    )
}


export default Category;