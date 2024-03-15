import React from 'react'
import { Grid, Container } from '@mui/material'
import signup from '../Images/faq.svg'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import AddIcon from '@mui/icons-material/Add'
const Faq = () => {
  const [expanded, setExpanded] = React.useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }
  return (
    <>

      <div className="bg_gradient lg:my-10">
        <section id='faq' className="join_form_section faq_section container">
          <Container maxWidth="xl">
            <Grid container spacing={1}>
              <Grid item xs={12} sm={12} md={12} className="how_to_buy_top">
                <div className="buy_more_first_col">
                  {/* <h2 className='heading_color_light'>The Long-Term Approach</h2> */}
                  <h2 className="&quot;bigHeading pt-4 font-bold xl:text-5xl lg:text-4xl md:text-4xl text-3xl lg:leading-[2.5rem] 2xl:leading-[3.7rem]&quot; restContent" style={{ display: "flex", justifyContent: "center" }}><span className="text-transparent bg-clip-text bg-gradient-to-br from-[#4361EE] to-[#4CC9F0] main_headings_center">  FAQs</span></h2>
                  <p style={{ marginBottom: "30px" }} className="text-white text-center mb-5 text-lg font-bold">
                    Use the Company information below to Invest in us.
                  </p>
                </div>
              </Grid>
            </Grid>
            <Grid container className="">
              <Grid item xs={12} sm={12} md={5} className="p_20 join_form_section_flex lg:flex justify-center items-center h-full">
                <img src={signup} alt="" className="img-fluid " width="90%" />
              </Grid>



              <Grid item xs={12} sm={12} md={7} className="p_20 ">
                <div className="new_faq_main">
                  <section className="">
                    <div className="faqs">
                      {/* <h1 className="bigHeading  pb-10 font-semibold xl:text-5xl lg:text-4xl md:text-4xl text-3xl text-white lg:leading-[2.5rem] 2xl:leading-[3.7rem]">
                      <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#4361EE] to-[#4CC9F0]">
                        FAQs
                      </span>
                    </h1> */}

                      <div>
                        <Accordion
                          sx={{ borderRadius: '.25rem', margin: '5px', background: "transparent", border: "1px solid #4361EE" }}
                          expanded={expanded === 'panel12'}
                          onChange={handleChange('panel12')}
                        >
                          <AccordionSummary
                            expandIcon={<AddIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                          >
                            <Typography
                              className="smallHeading text-transparent bg-clip-text bg-gradient-to-br from-[#4361EE] to-[#4CC9F0] "

                              sx={{
                                fontFamily: 'Clash Display',
                                fontWeight: '500',
                                fontFamily: "Clash Display",
                                fontSize: "1rem",
                                lineHeight: 1.5,
                                // color:"#f3f4f6"
                              }}
                            >
                              Q: What is Groways Technology (groways.io) ? 
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography
                              className="restContent text-transparent bg-clip-text bg-gradient-to-br from-[#4361EE] to-[#4CC9F0] "
                              sx={{
                                fontWeight: 400,
                                fontSize: "1rem",
                                lineHeight: 1.5,
                                letterSpacing: "0.00938em",
                                fontSize: "14px",
                                fontFamily: "Cabin"
                              }}
                            >
                              Groways is a decentralized, blockchain-based platform that enables peer-to-peer transactions of cryptocurrencies by linking users' wallets to wallets without the use of smart contracts like other systems.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                        <Accordion
                          sx={{ borderRadius: '.25rem', margin: '5px', background: "transparent", border: "1px solid #4361EE" }}
                          expanded={expanded === 'panel1'}
                          onChange={handleChange('panel1')}
                        >
                          <AccordionSummary
                            expandIcon={<AddIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                          >
                            <Typography
                              className="smallHeading text-transparent bg-clip-text bg-gradient-to-br from-[#4361EE] to-[#4CC9F0] "

                              sx={{
                                fontFamily: 'Clash Display',
                                fontWeight: '500',
                                fontFamily: "Clash Display",
                                fontSize: "1rem",
                                lineHeight: 1.5,
                                // color:"#f3f4f6"
                              }}
                            >
                              Q: ग्रोवेज़ टेक्नोलॉजी क्या है ?
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography
                              className="restContent text-transparent bg-clip-text bg-gradient-to-br from-[#4361EE] to-[#4CC9F0] "
                              sx={{
                                fontWeight: 400,
                                fontSize: "1rem",
                                lineHeight: 1.5,
                                letterSpacing: "0.00938em",
                                fontSize: "14px",
                                fontFamily: "Cabin"
                              }}
                            >
                             ग्रोवेज़ एक विकेन्द्रीकृत, ब्लॉकचेन-आधारित प्लेटफ़ॉर्म है जो अन्य सिस्टम की तरह स्मार्ट कॉन्ट्रैक्ट के उपयोग के बिना उपयोगकर्ताओं के वॉलेट को वॉलेट से जोड़कर क्रिप्टोकरेंसी के पीयर-टू-पीयर लेनदेन को सक्षम बनाता है।
                            </Typography>
                          </AccordionDetails>
                        </Accordion>

                        <Accordion
                          sx={{ borderRadius: '.25rem', margin: '5px', background: "transparent", border: "1px solid #4361EE" }}
                          expanded={expanded === 'panel2'}
                          onChange={handleChange('panel2')}
                        >
                          <AccordionSummary
                            expandIcon={<AddIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                          >
                            <Typography
                              className="smallHeading text-transparent bg-clip-text bg-gradient-to-br from-[#4361EE] to-[#4CC9F0]"
                              sx={{
                                fontFamily: 'Clash Display',
                                fontWeight: '500',
                                fontFamily: "Clash Display",
                                fontSize: "1rem",
                                lineHeight: 1.5
                              }}
                            >
                              Q: Groways প্রযুক্তি কি ?

                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography className="restContent text-transparent bg-clip-text bg-gradient-to-br from-[#4361EE] to-[#4CC9F0]" sx={{
                              fontWeight: 400,
                              fontSize: "1rem",
                              lineHeight: 1.5,
                              letterSpacing: "0.00938em",
                              fontSize: "14px",
                              fontFamily: "Cabin"
                            }}>
                              Groways হলো বিকেন্দ্রীকৃত, ব্লকচেইন-ভিত্তিক প্ল্যাটফর্ম যা ক্রিপ্টোকারেন্সির পিয়ার-টু-পিয়ার লেনদেনের সুবিধার্থে অন্যান্য সিস্টেম এর মত স্ম্যার্ট কন্ট্রাক্ট ব্যাবহার না করে ব্যবহারকারীদের ওয়ালেট টু ওয়ালেট ডিস্ট্রিবিউশন করে যেটা অন্যান্য সিস্টেম থেকে সবচাইতে সুরক্ষিত।এটি  ব্লকচেইনে কাজ করে এবং ব্যবহারকারীদের একটি নেটওয়ার্ক মার্কেটিং সিস্টেমে অংশগ্রহণ করে ক্রিপ্টোকারেন্সি উপার্জন করতে সক্ষম করে।
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                        <Accordion
                          sx={{ borderRadius: '.25rem', margin: '5px', background: "transparent", border: "1px solid #4361EE" }}
                          expanded={expanded === 'panel5'}
                          onChange={handleChange('panel5')}
                        >
                          <AccordionSummary
                            expandIcon={<AddIcon />}
                            aria-controls="panel5bh-content"
                            id="panel5bh-header"
                          >
                            <Typography
                              className="smallHeading text-transparent bg-clip-text bg-gradient-to-br from-[#4361EE] to-[#4CC9F0]"
                              sx={{
                                fontFamily: 'Clash Display',
                                fontWeight: '500',
                                fontFamily: "Clash Display",
                                fontSize: "1rem",
                                lineHeight: 1.5
                              }}
                            >
                              Q: Can there be cheating in Groways ?
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography className="restContent text-transparent bg-clip-text bg-gradient-to-br from-[#4361EE] to-[#4CC9F0]" sx={{
                              fontWeight: 400,
                              fontSize: "1rem",
                              lineHeight: 1.5,
                              letterSpacing: "0.00938em",
                              fontSize: "14px",
                              fontFamily: "Cabin"
                            }}>
                             You cannot be cheated in Groways because here there is 100% income distribution, there is no withdrawal condition and there is direct wallet to wallet transfer of income and it is in everyone's wallets.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                        <Accordion
                          sx={{ borderRadius: '.25rem', margin: '5px', background: "transparent", border: "1px solid #4361EE" }}
                          expanded={expanded === 'panel3'}
                          onChange={handleChange('panel3')}
                        >
                          <AccordionSummary
                            expandIcon={<AddIcon />}
                            aria-controls="panel3bh-content"
                            id="panel3bh-header"
                          >
                            <Typography
                              className="smallHeading text-transparent bg-clip-text bg-gradient-to-br from-[#4361EE] to-[#4CC9F0]"
                              sx={{
                                fontFamily: 'Clash Display',
                                fontWeight: '500',
                                fontFamily: "Clash Display",
                                fontSize: "1rem",
                                lineHeight: 1.5
                              }}
                            >
                              Q: How to make money in Groways ?
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography className="restContent text-transparent bg-clip-text bg-gradient-to-br from-[#4361EE] to-[#4CC9F0]" sx={{
                              fontWeight: 400,
                              fontSize: "1rem",
                              lineHeight: 1.5,
                              letterSpacing: "0.00938em",
                              fontSize: "14px",
                              fontFamily: "Cabin"
                            }}>
                              In Groways you can generate good income by making your partners and referrals, you can generate good income by building a team and here you also get support from your upline team.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>

                        <Accordion
                          sx={{ borderRadius: '.25rem', margin: '5px', background: "transparent", border: "1px solid #4361EE" }}
                          expanded={expanded === 'panel4'}
                          onChange={handleChange('panel4')}
                        >
                          <AccordionSummary
                            expandIcon={<AddIcon />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                          >
                            <Typography
                              className="smallHeading text-transparent bg-clip-text bg-gradient-to-br from-[#4361EE] to-[#4CC9F0]"
                              sx={{
                                fontFamily: 'Clash Display',
                                fontWeight: '500',
                                fontFamily: "Clash Display",
                                fontSize: "1rem",
                                lineHeight: 1.5
                              }}
                            >
                              Q: How much does it cost to join Groways ?
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography className="restContent text-transparent bg-clip-text bg-gradient-to-br from-[#4361EE] to-[#4CC9F0]" sx={{
                              fontWeight: 400,
                              fontSize: "1rem",
                              lineHeight: 1.5,
                              letterSpacing: "0.00938em",
                              fontSize: "14px",
                              fontFamily: "Cabin"
                            }}>
                             You can join Groways with just 11 USDT, along with that you have to charge a gas piece, you have to keep a minimum of 60 cents as a gas piece and you can earn lifetime income by joining here.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>

                        <Accordion
                          sx={{ borderRadius: '.25rem', margin: '5px', background: "transparent", border: "1px solid #4361EE" }}
                          expanded={expanded === 'panel55'}
                          onChange={handleChange('panel55')}
                        >
                          <AccordionSummary
                            expandIcon={<AddIcon />}
                            aria-controls="panel55bh-content"
                            id="panel55bh-header"
                          >
                            <Typography
                              className="smallHeading text-transparent bg-clip-text bg-gradient-to-br from-[#4361EE] to-[#4CC9F0]"
                              sx={{
                                fontFamily: 'Clash Display',
                                fontWeight: '500',
                                fontFamily: "Clash Display",
                                fontSize: "1rem",
                                lineHeight: 1.5
                              }}
                            >
                              Q: Can you earn money in Groways even without referrals ? 

                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography className="restContent text-transparent bg-clip-text bg-gradient-to-br from-[#4361EE] to-[#4CC9F0]" sx={{
                              fontWeight: 400,
                              fontSize: "1rem",
                              lineHeight: 1.5,
                              letterSpacing: "0.00938em",
                              fontSize: "14px",
                              fontFamily: "Cabin"
                            }}>
                              Yes, Slots is a program of Groways which generates global income and gives us global income even without referral.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>

                        <Accordion
                          sx={{ borderRadius: '.25rem', margin: '5px', background: "transparent", border: "1px solid #4361EE" }}
                          expanded={expanded === 'panel66'}
                          onChange={handleChange('panel66')}
                        >
                          <AccordionSummary
                            expandIcon={<AddIcon />}
                            aria-controls="panel66bh-content "
                            id="panel66bh-header"
                          >
                            <Typography
                              className="smallHeading text-transparent bg-clip-text bg-gradient-to-br from-[#4361EE] to-[#4CC9F0]"
                              sx={{
                                fontFamily: 'Clash Display',
                                fontWeight: '500',
                                fontFamily: "Clash Display",
                                fontSize: "1rem",
                                lineHeight: 1.5
                              }}
                            >
                              Q: Can Groways be closed ?

                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography className="restContent text-transparent bg-clip-text bg-gradient-to-br from-[#4361EE] to-[#4CC9F0]" sx={{
                              fontWeight: 400,
                              fontSize: "1rem",
                              lineHeight: 1.5,
                              letterSpacing: "0.00938em",
                              fontSize: "14px",
                              fontFamily: "Cabin"
                            }}>
                              Groways can't stop. Because Groways is a smart contract.And smart contracts are developed on blockchain.And whatever transactions happen here are from wallet to wallet and 100% distribution.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>





                      </div>
                    </div>
                  </section>
                </div>
              </Grid>
            </Grid>
          </Container>
        </section>

      </div>


    </>
  )
}

export default Faq
