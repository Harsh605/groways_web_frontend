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
                <a href="https://www.facebook.com/profile.php?id=61557412407453&mibextid=ZbWKwL" ><i className="fa-brands fa-facebook"></i></a>
                <a href="https://whatsapp.com/channel/0029VaU7Ncz5q08ZiDzSaK2I" ><i className="fa-brands fa-whatsapp"></i></a>
                <a href="https://www.instagram.com/growaystechnology20242024?igsh=MTFwZzIwcHFmcGR5cQ==" ><i className="fa-brands fa-instagram"></i></a>
                <a href="https://t.me/+UPe4n9ouKg40YzA1" ><i className="fa-brands fa-telegram"></i></a>
                <a href="https://youtube.com/@growaysio0327?si=lVp7_6bZ2hJ_EGbg" ><i className="fa-brands fa-youtube"></i></a>
               
                {/* <a href="https://twitter.com/Metablocktech"   target="_blank"><i className="fa-brands fa-medium"></i></a> */}
                {/* <a href="https://twitter.com/Metablocktech"   target="_blank"><i className="fa-brands fa-youtube"></i></a> */}



            </div>
        </div>
    )
}

export default Footers