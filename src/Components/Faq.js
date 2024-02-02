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
                    Use the contract information below to add the DFI token to
                    your wallet.
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
                              Q: What Is ARB Blockchain?
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
                              A: Arbitrum is a Layer 2 scaling solution for the Ethereum blockchain that powers fast smart contract transactions while reducing transaction costs. Layer 2 solutions can scale the base Layer 1 blockchain by delegating complex computational tasks, such as transaction processing and data storage to the second chain. In short, the Layer 2 blockchain executes the smart contract, and the Layer 1 blockchain stores the data.
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
                              Q: How do I participate in a DFI presale event?
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
                              A: To participate in a DFI presale event, you
                              typically need to register and complete a KYC/AML
                              (know your customer/anti-money laundering)
                              verification process. Once approved, you can then
                              purchase tokens using the accepted payment methods.
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
                              Q: What are the benefits of investing in a DFI
                              presale?
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
                              A: Investing in DFI presale can provide benefits
                              such as getting DFI tokens at a discounted price,
                              participating in early access to the protocol,
                              whitelisting for hosting a node or becoming a
                              validator in DFI Blockchain and potentially
                              earning higher returns when the protocol is
                              successful.
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
                              Q: What are the risks of investing in a presale?
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
                              A: The risks of investing in a presale include
                              regulatory uncertainty, market volatility, technical
                              challenges, and the possibility that the protocol
                              may not meet its goals.
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
                              Q: What is the minimum investment amount for a
                              presale?
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
                              A: The minimum investment amount for a presale can
                              vary depending on the protocol. Some presales may
                              have a high minimum investment amount, while others
                              may have a lower minimum to allow smaller investors
                              to participate.
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
                              Q: How are presale funds typically used?
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
                              A: Presale funds are typically used to fund the
                              development and launch of the protocol. This can
                              include expenses such as salaries for the
                              development team, marketing costs, and legal fees.
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
                              Q: When will presale investors receive their tokens?

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
                              A: The timeline for receiving presale tokens can vary depending on the protocol. Some protocols may distribute tokens immediately after the presale, while others may have a vesting schedule or lock-up period.
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
                              Q: Can presale investors sell their tokens?

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
                              A: Presale tokens may be subject to lock-up periods or vesting schedules, which restrict the ability to sell the tokens immediately. Once the lock-up period or vesting schedule has ended, investors may be able to sell their tokens on a cryptocurrency exchange.
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
