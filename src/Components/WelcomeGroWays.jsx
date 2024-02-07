import React, { useState } from 'react'
import './WelcomeGroWays.css'
import WagmiUtils from '../blockchain/WagmiUtils'
import YourApp from '../blockchain/YourApp'
import BuyPopUp from './BuyNowPopUp'
import { useAccount } from 'wagmi'

const WelcomeGroWays = () => {

    const { address, isConnected } = useAccount()
    const [open, setOpen] = useState(false)

    const handleOpenBuyPopup = () => {
        setOpen(true)
    }
    return (
        <>

            <div className="welcome-container">
                <div className="welcome-inner-div">
                    <div className="welcome-left-div">
                        <h2>Welcome to GroWays </h2>
                        <p>Connect your wallet to start working. First time here? Watch a tutorial to learn more
                        </p>
                        <div className='tow-buttons'>
                            <div>
                                <BuyPopUp open={open} setOpen={setOpen} address={address} />

                                {!isConnected ?
                                    <WagmiUtils comp={<YourApp style={{ borderColor: "#f1552c" }} classes="btn btn-primary bg-transparent border-4  border-color-custom" />} />
                                    : <div className='flex flex-wrap justify-center gap-2'>
                                        <a className="btn btn-primary bg-transparent border-4 border-color-custom" style={{ borderColor: "#f1552c" }}>
                                            {address.slice(0, 6)}...{address.slice(-4)}
                                        </a>

                                    </div>}
                            </div>
                            <div className='watch-now-button'>
                                <button>Watch Tutorial</button>
                            </div>
                            <div className='watch-now-button'>
                                <button>Comming Soon</button>
                            </div>
                            <div>
                                <a className="btn btn-primary bg-transparent border-4  border-color-custom" style={{ borderColor: "#f1552c" }} onClick={handleOpenBuyPopup}>Buy Now</a>

                            </div>
                        </div>
                    </div>
                    <div className="welcome-right-div">
                        <img src="image/wallet_big_min.webp" alt="" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default WelcomeGroWays
