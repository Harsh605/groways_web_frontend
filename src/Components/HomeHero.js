import React, { useEffect, useState } from 'react'
import "./Hero.css"
import ConnectBtn from './ConnectBtn'
import WagmiUtils from '../blockchain/WagmiUtils'
import YourApp from '../blockchain/YourApp'
import { useAccount } from 'wagmi'
import BuyPopUp from './BuyNowPopUp'
import { buyToken } from '../blockchain/Contract'


const HomeHero = () => {
  const { address, isConnected } = useAccount()
  const [open,setOpen]= useState(false)

  const handleOpenBuyPopup=()=>{
    setOpen(true)
  }




  return (
    <section className="page-frontpage container content-box mt-5 pl-2 pr-2">
      <BuyPopUp open={open} setOpen={setOpen} address={address}/>
      
      <p>&nbsp;</p>

      <div className="container flex flex-wrap justify-center">
     
        <p>&nbsp;</p>
        <p className='' style={{ flexWrap: "wrap", textAlign: 'center', display: "flex", justifyContent: "center", gap: "10px", marginBottom: "10px" }}>
         
          {!isConnected ?
            <WagmiUtils comp={<YourApp style={{ borderColor: "#f1552c" }} classes="btn btn-primary bg-transparent border-4  border-color-custom" />} />
            : <div className='flex flex-wrap justify-center gap-2'>
              <a className="btn btn-primary bg-transparent border-4 border-color-custom" style={{ borderColor: "#f1552c" }}>
                {address.slice(0, 6)}...{address.slice(-4) }
              </a>
             
            </div>}
          <a className="btn btn-primary bg-transparent border-4  border-color-custom" style={{ borderColor: "#f1552c" }} onClick={handleOpenBuyPopup}>Buy Now</a>
        </p>
      </div>
    </section>
  )
}

export default HomeHero