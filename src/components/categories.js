import React from 'react';
import Categories from './categorylist';
import { Link } from 'react-router-dom';


const Category = () => {

    return (
        <div className="categories" id="categories">
            <div className="title">
                <h1 data-aos="fade-down">Collection<div className="hr"></div></h1>
                <p data-aos="fade-down">When inspiration comes to an artist, no matter whatever it is and wherever it comes from,
                    it makes him open up, expose his bare feelings to outsiders. It is exactly this openness
                    expressed by paint on canvas that gets noticed and that touches us.</p>
            </div>
            <div className="content">
                {Categories.map((categories, key) => (
                    <div data-aos="fade-up" className="card" key={key}>
                        <div className="image">
                            <img src={categories.image}></img>
                            <div className="button">
                                <Link to={`/gallery/${categories.id}`}><i class="fa fa-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div className="detail">
                            <h2 data-aos="fade-right">{categories.title}<div className="titlehr"></div></h2>
                        </div>
                    </div>))}
            </div>
        </div>
    )
}


export default Category;