import React from 'react'
import Navbar from './Navbar'
import HomeHero from './HomeHero'
import "./Home.css"
import EcoSystem from './EcoSystem'
import Tokenomics from './Tokenomics'
import HowToBuy from './HowToBuy'
import FAQPresale from './Faq1'
import Footer from './Footer'
import Roadmap from './Roadmap'
import Newsletter from './Newsletter'
import HomeCta from './HomeCta'
import Topbar from './Topbar'
import TokenIntro from './TokenIntro'
import ContactForm from './ContactForm'
import WagmiUtils from '../blockchain/WagmiUtils'
import Missionvision from './MissionVision'
import AllBlockchains from './AllBlockchains'
import AllUniversity from './AllUniversity'
import Faq from './Faq'
import Slider from './Slider'
import OurTeam from './Slider'
import Timeline from './Roadmap2'
import SecondCompo from './SecondCompo'
import WelcomeGroWays from './WelcomeGroWays'
import SimpleSlider from './FRGXTokan'
import Accountpreview from './Accountpreview'
import Dashboard from '.'
import Needhelp from './Needhelp'
import Autoplay from './ReactSlick'
import RegisterinForsageBUSD from './RegisterinForsageBUSD'
import RegisterinForsageBUSDPage from './RegisterinForsageBUSDPage'
import DownloadPDF from './downloadPDF'
import SimpleDialogDemo from './PopUpPDF'

const Home = (props) => {
  return (
    <>
    <div className='background-home'>
    <Navbar/>
    {/* <HomeHero/> */}
    {/* <WelcomeGroWays/> */}
    <RegisterinForsageBUSD/>
    <DownloadPDF/>

    {/* <RegisterinForsageBUSDPage/> */}
    {/* <SimpleSlider/> */}
    {/* <Autoplay/> */}
    <Accountpreview/>
    {/* <Roadmap/> */}
    <TokenIntro/>
    <HowToBuy/>
    <HomeCta/>
    {/* <Dashboard/> */}
    <Needhelp/>

    {/* <SimpleDialogDemo/> */}
    <Topbar/>
    {/* <SecondCompo/> */}
    {/* <EcoSystem/> */}
    {/* <Faq/> */}
    {/* <FAQPresale/> */}
    {/* <Footer/> */}
    </div>
    <WagmiUtils/>
    
    {/* <Missionvision/> */}
    {/* <Tokenomics/> */}
    {/* <Newsletter/> */}
    
    {/* <AllUniversity/> */}
    {/* <AllBlockchains/> */}
    {/* <Roadmap/> */}
    {/* <Timeline/> */}
    {/* <OurTeam/> */}

    {props.outlet}
    </>
    

  )
}

export default Home