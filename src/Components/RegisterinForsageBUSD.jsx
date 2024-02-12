import React, { useState } from 'react'
import './RegisterinForsageBUSD.css'
import { useAccount } from 'wagmi'
import { useNavigate } from 'react-router-dom'

const RegisterinForsageBUSD = () => {
    const navigate = useNavigate()

    const { address, isConnected } = useAccount()
    const [open, setOpen] = useState(false)

    const handleOpenBuyPopup = () => {
        setOpen(true)
    }
    return (
        <>

            <div className="welcome-container">
                <div className="welcome-inner-div register-inner-div">
                    <div className="welcome-left-div register-left-div">
                        <h2>Register in GroWays USDT</h2>
                        <p>
                            You can use this Wallet (0xBb3D...150d) to register as a new member. Watch a tutorial to learn more                        </p>
                        <div className='tow-buttons'>
                            <div className='Join-groways'>
                                <a style={{ textDecoration: 'none' }} href="https://user.groways.io">
                                {/* <a style={{ textDecoration: 'none' }} href="#"> */}
                                {/* <button onClick={()=>navigate('./RegisterinForsageBUSDPage')}>Join GroWays</button> */}
                                <button >Join GroWays</button>
                                </a>
                            </div>
                            
                            <div className='watch-now-button-1'>
                                <a style={{textDecoration:'none', listStyle:'none'}} href="https://youtu.be/DZCMExTA7hI?si=GCCTMxjHegg1r0Ll" target="_blank" rel="noopener noreferrer">
                                <button>Watch Tutorial</button>
                                </a>
                            </div>
                           


                        </div>
                    </div>
                    <div className=" register-right-div">
                        <img src="image/UnknownUser.webp" alt="" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default RegisterinForsageBUSD
