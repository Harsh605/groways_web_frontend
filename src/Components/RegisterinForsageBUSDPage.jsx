import React from 'react'
import './RegisterinForsageBUSDPage.css'

const RegisterinForsageBUSDPage = () => {
    return (
        <>
            <div className="RegisterinForsageBUSDPage-container">
                <div className="RegisterinForsageBUSDPage-inner-container">

                    <div className="RegisterinForsageBUSDPage-left-container">
                        <span className=" Heading inline-block text-two-half text-white mb-10 sm:mb-7.5 sm:text-2xl"> Registration <br /> in <span className="notranslate"> GroWays USDT</span></span>

                        <div className='Upline-input'>
                            <label>Your upline wallet address</label>
                            <div>
                                <input type="text" placeholder='Upline' defaultValue={1} />
                            </div>
                        </div>

                        <div className='five-li'>
                            <ul>
                                <li>Wallet : Connected</li>
                                <li>Network : Smart chain</li>
                                <li>Registration : available</li>
                                <li>Balance : 12 USDT</li>
                                <li>Approved USDT: Connected</li>
                            </ul>
                        </div>

                        <div className='check-again-div'>
                            <button className='check-again-button'>Ckeck Again</button>
                            <div style={{ color: 'gray', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                Registration fee
                                <svg class="w-5 h-5 fill-current text-white-500 group-hover:text-white" viewBox="0 0 20 20" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 10a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-8.07 1.15c.04.04.09.06.15.06h.99c.073 0 .13-.02.17-.06a.547.547 0 0 0 .11-.19c.007-.06.023-.173.05-.34a1.4 1.4 0 0 1 .23-.52c.12-.167.287-.363.5-.59.293-.32.513-.603.66-.85.153-.247.23-.537.23-.87a1.61 1.61 0 0 0-.25-.85c-.16-.273-.42-.497-.78-.67-.353-.18-.807-.27-1.36-.27-.533 0-.997.1-1.39.3-.393.193-.697.45-.91.77-.207.32-.317.663-.33 1.03 0 .073.02.133.06.18.047.047.103.07.17.07h.87c.147 0 .243-.077.29-.23.133-.647.523-.97 1.17-.97.287 0 .53.08.73.24.207.16.297.377.27.65a.864.864 0 0 1-.19.46 5.091 5.091 0 0 1-.5.56c-.293.293-.523.56-.69.8-.167.24-.267.517-.3.83-.007.073-.01.18-.01.32 0 .053.02.1.06.14Zm-.05 2.25c.047.047.103.07.17.07h.99a.244.244 0 0 0 .18-.07.231.231 0 0 0 .07-.17v-.89a.218.218 0 0 0-.08-.17.231.231 0 0 0-.17-.07h-.99a.231.231 0 0 0-.17.07.231.231 0 0 0-.07.17v.89c0 .067.023.123.07.17Z"></path></svg>
                            </div>
                        </div>

                    </div>
                    <div className="RegisterinForsageBUSDPage-right-container">
                        <div className="RegisterinForsageBUSDPage-inner-right-container">

                            <h3> Information  <svg class="inline w-6 h-6 mr-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="12" fill="#fff"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 8a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM10.25 12a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 .75.75v3.25H13a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75v-3.25H11a.75.75 0 0 1-.75-.75Z" fill="#343A4D"></path></svg></h3>
                            <span style={{ color: 'white', paddingBottom: '10px' }}>Insufficient balance for registration.</span>
                            <br />
                            <span style={{ color: '#899FB5', marginBottom: '20px', lineHeight: '25px' }}>Registration requires <span class="text-white notranslate">11 USDT</span> and at least <span class="text-white notranslate">0.005 BNB</span>.  <span>Your wallet balance: <span class="notranslate text-red">0.00 USDT</span> and <span class="notranslate text-red">0.000 BNB</span>.</span></span>

                            <div className='readguied'>
                                <button>Read Guied</button>
                            </div>

                            <div className='whatisGroways'>
                                <a href="https://youtu.be/DZCMExTA7hI?si=GCCTMxjHegg1r0Ll" target="_blank" rel="noopener noreferrer">
                                    <img src="image/whatisGroways.jpg" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default RegisterinForsageBUSDPage
