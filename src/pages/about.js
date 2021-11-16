import React from 'react'
import '../css/aboutme.css'
import img from '../images/aboutimg.jpg'
import Navig from '../components/navig'
// import {AiFillFacebook} from 'react-icons/fa'
import Footer from '../components/footer'

import { SiFacebook, SiTiktok } from 'react-icons/si'
import { GrInstagram } from 'react-icons/gr'
import { RiUser4Line } from 'react-icons/ri'
import { MdOutlineMail, MdOutlineMarkEmailUnread } from 'react-icons/md'
import { RiSendPlaneFill } from 'react-icons/ri'
import { GoLocation } from 'react-icons/go'
import { BsTelephone } from 'react-icons/bs'



const About = () => {
    return (
        <div className="main">
            <Navig />
            <div className="aboutcontact">

                <svg className="svg" height="400" width="400">
                    <circle cx="150" cy="150" r="140" stroke="black" stroke-width="1" fill="#6633995b" />
                    Sorry, your browser does not support inline SVG.
                </svg>
                <svg className="svg1" height="100" width="100">
                    <circle cx="50" cy="50" r="50" stroke="black" stroke-width="1" fill="#663399ad" />
                    Sorry, your browser does not support inline SVG.
                </svg>
                <div className="aboutme">

                    <h1 className='aboutmee'>about me </h1>

                    <h3>HELLO, </h3>
                    <h1>i'm Kavya, Kavya Pant! </h1>
                    {/* <h1>I can give your business a new create start right away. </h1> */}

                    <p className="text">
                        Yes, you’ve found me. And it’s not accidentally, because I’m a talented graphic designer from Moldova, and I’m one of the best. The reason of this is quite simple – I love what I do and I do it with quality, beauty and creativity.
                        I started my career in 2007.
                    </p>
                    <div>
                        <img src={img} alt='logo' />
                    </div>
                </div>
            </div>

            <div className="socialmedia">

                <h1>Connect With Me</h1>
                <span><a href='https://www.facebook.com' target="_blank" rel="noreferrer"><SiFacebook className="icon" /></a>
                    <a href='https://www.instagram.com' target="_blank" rel="noreferrer"><GrInstagram className="icon" /></a>
                    <a href='https://www.tiktok.com' target="_blank" rel="noreferrer"><SiTiktok className="icon" /></a>
                </span>
                <span className="contactmedia">

                    <span><GoLocation className="icon" /> Pokhara 16 Lamachaur </span>
                    <span ><BsTelephone className="icon" /> +9779811122233</span>
                    <span ><MdOutlineMarkEmailUnread className="icon" /><a href="mailto:contact@kavya.com ? {subject} = {Hello There}" > contact@kavya.com  </a>  </span>
                </span>
            </div>

            <div className='contactus'>
                <h1>
                    Keen To Hear From YOU!
                </h1>
                <form>

                    <span className='formtext'>
                        <label>Name</label>
                        <span className="inputField">
                            <RiUser4Line />
                            <input
                                type='text' name="username" placeholder="Enter your full Name" required />
                        </span>
                    </span>
                    <span className='formtext'>
                        <label>Email</label>
                        <span className="inputField">
                            <MdOutlineMail />
                            <input
                                type='email' placeholder="Enter your full Name" required />
                        </span>
                    </span>
                    <span className='formtext'>
                        <label>Message</label>

                        <textarea placeholder="Enter Message"></textarea>
                    </span>
                    <span className="submitField">
                        <RiSendPlaneFill />
                        <button type="submit">Submit</button>
                    </span>
                </form>

            </div>
            <svg className="svg2" height="300" width="300">
                <circle cx="150" cy="150" r="90" stroke="transparent" stroke-width="1" fill="#663399ad" />
                Sorry, your browser does not support inline SVG.
            </svg>
            <Footer />
        </div>
    )
}

export default About
