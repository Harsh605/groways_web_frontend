import React from 'react'
import Mission from '../Images/OurMission.png'
import Vision from '../videos/vision1.mkv'
import Vision2 from '../Images/OurVision.png'
import blockchain from '../Images/desktop_wallet.png'
import VideoPlayer from './VideoPlayer'

const Missionvision = () => {
  return (
    <div
      id="about"
      className="p-10 md:pt-24 md:px-24 sm:p-10  bg-transparent "
    >
      <section className="about-us container mx-auto">
        <h2
          className='"bigHeading pt-4 font-bold xl:text-5xl lg:text-4xl md:text-4xl text-3xl lg:leading-[2.5rem] 2xl:leading-[3.7rem]"'
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <span className="text-[#f1552c]">
            {' '}
            Know About Us{' '}
          </span>
        </h2>
        <p
          className="text-white pt-8 pb-12"
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          Learn more about our Vision behind HAAWKS and our Mission towards
          greatness.
        </p>

        <br />
        <div
          style={{ maxWidth: '1200px', margin: 'auto' }}
          className="flex flex-wrap"
        >
          <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
            <h2 className="smallHeading text-3xl text-[#4CC9F0] pb-10 font-bold">
              Our Vision
            </h2>
            <p className="text-white text-lg  pb-3">
              Our vision is to transform the education sector into a decentralized, inclusive, and financially empowered ecosystem. Through the "DFI" coin on the Arbitrum Layer 2 network, we aspire to enable students and educational institutions globally to access a wide range of financial services seamlessly. We envision a future where education and finance converge harmoniously, fostering innovation, transparency, and equitable opportunities for all, thereby revolutionizing the way education is financed and accessed around the world.{' '}
            </p>
            <ul>
              <li className="text-gray-100 pb-5">
                <i className="fa-solid fa-check px-1 text-[#4CC9F0]" />Empower Education: Our vision is to empower education through blockchain, enabling transparent, affordable, and inclusive financial solutions for students and institutions.{' '}
              </li>
              <li className="text-gray-100 pb-4">
                <i className="fa-solid fa-check px-1 text-[#4CC9F0]" /> Global Impact: We aspire to have a global impact, bridging financial gaps in education and fostering innovation and accessibility worldwide.
              </li>
            </ul>
            <br />
            {/* <a className="mt-16 px-12 py-3 bg-gradient-to-r from-[#F72585] to-[#7209B7] hover:from-[#7209B7] hover:to-[#F72585] text-xl text-white font-semibold drop-shadow-lg rounded-full"
            href="#">Read More</a>  */}
          </div>

          <div className="lg:w-1/2 pr-4 lg:pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4 f-full md:flex justify-center items-center">
            {/* <VideoPlayer src={Vision} func={true}/> */}
            <img
              className="lg:w-4/5 lg:pl-5 py-8"
              src={Vision2}
              
              style={{ width: '100%',minHeight:"70%" }}
              alt="Vision Image"
            />
          </div>
        </div>
        <br />
        <br />
        <br />
        <div
          style={{ maxWidth: '1200px', margin: 'auto' }}
          className="flex flex-wrap-reverse"
        >
          <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4 md:flex justify-center items-center">
          <img
              className="lg:w-4/5 lg:pr-10 py-8"
              src={Mission}
              
              style={{ width: '100%',minHeight:"70%" }}
              alt="Vision Image"
            />
          </div>

          <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
            <h2 className="smallHeading text-3xl text-[#4CC9F0] pb-10 font-bold">
              Our Mission
            </h2>
            <p className="text-white text-lg  pb-3">
              To revolutionize the education sector through the power of blockchain technology and decentralized finance, our mission is to create and deploy the "DFI" coin on the Arbitrum Layer 2 network. We aim to empower educational institutions and students with seamless, cost-effective financial tools, fostering financial autonomy, transparency, and accessibility within the educational landscape while advancing the broader adoption of DeFi in educational institutions worldwide.{' '}
            </p>
            <ul>
              <li className="text-gray-100 pb-5">
                <i className="fa-solid fa-check px-1 text-[#4CC9F0]"></i> Educational Empowerment: Our mission is to empower educational institutions and students through blockchain-based financial solutions, promoting financial autonomy and transparency.
              </li>
              <li className="text-gray-100 pb-5">
                <i className="fa-solid fa-check px-1 text-[#4CC9F0]"></i>Innovation and Inclusion: We strive to drive innovation in the education sector while fostering financial inclusion, creating a brighter future for learners worldwide.
              </li>
            </ul>
            <br />
            
          </div>
        </div>
        <div
          style={{ maxWidth: '1200px', margin: 'auto' }}
          className="flex flex-wrap"
        >
          <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
            <h2 className="smallHeading text-3xl text-[#4CC9F0] pb-10 font-bold">
              What is ARB Blockchain ?
            </h2>
            <p className="text-white text-lg  pb-10">
              Arbitrum is a Layer 2 scaling solution for the Ethereum blockchain that powers fast smart contract transactions while reducing transaction costs.
              Layer 2 solutions can scale the base Layer 1 blockchain by delegating complex computational tasks, such as transaction processing and data storage to the second chain. In short, the Layer 2 blockchain executes the smart contract, and the Layer 1 blockchain stores the data.

            </p>
          
            <br />
            {/* <a className="mt-16 px-12 py-3 bg-gradient-to-r from-[#F72585] to-[#7209B7] hover:from-[#7209B7] hover:to-[#F72585] text-xl text-white font-semibold drop-shadow-lg rounded-full"
            href="#">Read More</a>  */}
          </div>

          <div className="lg:w-1/2 pr-4 lg:pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
            {/* <VideoPlayer src={Vision} func={true}/> */}
            <img
              className="lg:w-4/5 lg:pl-20 py-8"
              src={blockchain}
              
              style={{ width: '100%' }}
              alt="Vision Image"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Missionvision
