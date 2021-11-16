import React from 'react'


function Footer() {
    const date = new Date()
    return (
        <div className="copyright">
            <h3 >&copy; Kavya Pant {date.getFullYear()}.
            All Rights Reserved. </h3>
        </div>
    )
}

export default Footer
