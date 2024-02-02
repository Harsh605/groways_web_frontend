import React from 'react';

const HowToBuy = () => {
    return (
        <section className="page-how-to-buy container content-box mt-5 mb-5" id="howToBuy">
            <div className="box ">

                <div className="flex flex-wrap ">
                    <div className="sm:mb-12 mt-5 p-3 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
                        <h2 className='text-[#406AFF] mb-5 text-center'>
                            Business Plan
                        </h2>
                        <p className='text-[#ffffff] fs-5 mx-3' style={{ lineHeight: "30px" }}>
                          1.  The System follows the principal of 2 By 11 Bynarical matrix
                        </p>
                        <p className='text-[#ffffff] fs-5 mx-3' style={{ lineHeight: "30px" }}>
                          2.  The System follows the principal of 2 By 11 Bynarical matrix.
                            The Entries are placed from top to bottom, Left to Right in a
                            Sequential manner in multiples of 2.                        </p>
                        <p className='text-[#ffffff] fs-5 mx-3' style={{ lineHeight: "30px" }}>
                          3.  This is a just 11 level structure and to have maximum achievement.                        </p>
                        <p className='text-[#ffffff] fs-5 mx-3' style={{ lineHeight: "30px" }}>
                         4.   Every entry In Slot World Wide Left To right                        </p>
                    </div>
                    <div className=" sm:mb-12 mt-5 p-3 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
                        <h3 className="text-[#fcd227] fs-5 text-center mb-5">QUICK START GUIDE</h3>
                        <ol className="steps">
                            <li className="step">
                                <h4 className='text-[#406AFF]'>Create Web3 wallets</h4>
                                <p className="text-[#ffffff] fs-6">Register on Mata Mask or other Wallets through app or browser</p>
                            </li>
                            <li className="step">
                                <h4 className='text-[#406AFF]'>Send BNB to your wallet</h4>
                                <p className="text-[#ffffff] fs-6"> Add BNB to your Wallet</p>
                            </li>
                            <li className="step">
                                <h4 className='text-[#406AFF]'>Connect your wallet to Metamask</h4>
                                <p className="text-[#ffffff] fs-6">Browse your wallet and connect it with Metamask.org</p>
                            </li>
                            <li className="step">
                                <h4 className='text-[#406AFF]'>Swap BNB </h4>
                                <p className="text-[#ffffff] fs-6 " >
                                    Now go to trade and exchange BNB 
                                    <br />
                                    {/* You will get LP tokens through staking BFGY / BNB tokens in Liquidity Pools. Stake BFGY / BNB pair to
                                    earn tokens in Metamask */}
                                </p>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default HowToBuy;
