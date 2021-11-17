import React, { useState } from 'react'
import { Link } from 'react-router-dom';


function Navig() {
    const [navig, setNavig] = useState(false)

    const togglenavig = () => {
        setNavig(!navig)
    }


    return (
        <div className="navig" data-aos="fade-down">
            <div className="left">
                <a href="/"><img src="logo/logo.png"></img></a>
                {/* <a href="/"><h2>Logo</h2></a> */}
            </div>
            {navig === true && (
                <div className="center">
                    <ul>
                        <a href="/#categories"><li>Gallery</li></a>
                        <Link to="/aboutme"><li>Contact Me</li></Link>
                    </ul>
                </div>)
            }
            <div className="right">
                {navig === true ?
                    <i onClick={() => togglenavig()} className="fa fa-times" aria-hidden="true"></i>
                    : <i onClick={() => togglenavig()} className="fa fa-bars" aria-hidden="true"></i>
                }

            </div>

        </div>
    )
}

export default Navig;