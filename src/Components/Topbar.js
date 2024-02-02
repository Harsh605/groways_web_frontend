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
                <a href="mailto:contact@dfi.com" target="_blank"><i className="fa-solid fa-envelope"></i></a>
                <a href="https://www.facebook.com/profile.php?id=100093479117440" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://www.linkedin.com/in/buff-goofy-164bb027a" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                <a href="https://www.instagram.com/buff.goofy/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://twitter.com/findoutsoon" target="_blank"><i className="fa-brands fa-twitter"></i></a>
                <a href="http://discordapp.com/users/1118422230804725760" target="_blank"><i className="fa-brands fa-discord"></i></a>
                <a href="https://www.quora.com/profile/Buff-Goofy" target="_blank"><i className="fa-brands fa-quora"></i></a>
                <a href="https://www.reddit.com/user/Buff_Goofy/" target="_blank"><i className="fa-brands fa-reddit"></i></a>
                {/* <a href="https://twitter.com/Metablocktech"   target="_blank"><i className="fa-brands fa-medium"></i></a> */}
                {/* <a href="https://twitter.com/Metablocktech"   target="_blank"><i className="fa-brands fa-youtube"></i></a> */}



            </div>
        </div>
    )
}

export default Footers