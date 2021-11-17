import React, { useEffect, useState } from 'react';
import Category from '../components/categories';
import Navig from '../components/navig'
import Footer from '../components/footer'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";



const Homepage = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 4000)
    }, [])

    return (
        <>
            {loading === true ? (
                <div className="homeloader"><ClimbingBoxLoader color={'#435752'} loading={loading} size={10} /></div>)
                : (
                    <>
                        <div data-aos="fade-right" className="homepage">
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
                    </>)
            }
        </>


    )
}

export default Homepage;