import React from 'react'

const Footers = () => {
    return (
        <div className="top-bar">
            <div className="top-bar-left">
                <div className="top-bar-email">
                    <i className=" fa-solid fa-envelope"></i>
                    <a className=" " target="_blank">contact@Groways.com</a>
                </div>
                {/* <div className="top-bar-contact">
                    <i className="hidden sm:inline fa-sharp fa-solid fa-phone"></i>
                    <a className='hidden sm:inline ' href="tel:+919358593003" target="_blank">+91 987 654 3210</a>
                </div> */}
            </div>
            <div className="top-bar-right md:flex sm:justify-center sm:mx-0">
                <a href="mailto:contact@Groways.com" target="_blank"><i className="fa-solid fa-envelope"></i></a>
                <a href="" ><i className="fa-brands fa-facebook"></i></a>
                <a href="" ><i className="fa-brands fa-linkedin"></i></a>
                <a href="" ><i className="fa-brands fa-instagram"></i></a>
                <a href="" ><i className="fa-brands fa-twitter"></i></a>
                <a href="" ><i className="fa-brands fa-discord"></i></a>
                <a href="" ><i className="fa-brands fa-quora"></i></a>
                <a href=""><i className="fa-brands fa-reddit"></i></a>
                {/* <a href="https://twitter.com/Metablocktech"   target="_blank"><i className="fa-brands fa-medium"></i></a> */}
                {/* <a href="https://twitter.com/Metablocktech"   target="_blank"><i className="fa-brands fa-youtube"></i></a> */}



            </div>
        </div>
    )
}

export default Footers