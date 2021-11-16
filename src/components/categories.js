import React from 'react';


const Category = () => {
    const categories = [
        {
            title: 'Acrylic Pour Painting',
            image: 'categoryimages/bg1.jpg',
        },
        {
            title: 'Acrylic Painting',
            image: 'categoryimages/bg1.jpg',
        },
        {
            title: 'Mixed Media Art',
            image: 'categoryimages/bg1.jpg',
        },
        {
            title: 'Landscape Art',
            image: 'categoryimages/bg1.jpg',
        },
        {
            title: 'Palette Knife Art',
            image: 'categoryimages/bg1.jpg',
        },
        {
            title: 'Italian Fork Art',
            image: 'categoryimages/bg1.jpg',
        },
        {
            title: 'Madhubani Art-Indian Folk',
            image: 'categoryimages/bg1.jpg',
        },
    ]
    return (
        <div className="categories">
            <div className="title">
                <h1 data-aos="fade-down">Collection<div className="hr"></div></h1>
                <p data-aos="fade-down">When inspiration comes to an artist, no matter whatever it is and wherever it comes from,
                    it makes him open up, expose his bare feelings to outsiders. It is exactly this openness
                    expressed by paint on canvas that gets noticed and that touches us.</p>
            </div>
            <div className="content">
                {categories.map((categories, key) => (
                    <div data-aos="fade-up" className="card" key={key}>
                        <div className="image">
                            <img src={categories.image}></img>
                            <div className="button">
                                <a href="#"><i class="fa fa-arrow-right"></i></a>
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