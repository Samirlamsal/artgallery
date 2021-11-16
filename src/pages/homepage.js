import React from 'react';
import Category from '../components/categories';
import Navig from '../components/navig'
import Footer from '../components/footer'


const Homepage = () => {
    return (
        <>
            <div className="homepage">
                <Navig />

                <div className="hometitle">
                    <h2 data-aos="zoom-in">Kavya Kriti</h2>
                </div>
                <div className="homeextra">
                    <h3>By Kavya Pant</h3>
                </div>
            </div>
            <Category />
            <Footer />
        </>
    )
}

export default Homepage;