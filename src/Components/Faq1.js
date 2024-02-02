import React from 'react'
import { Grid, Container } from '@mui/material'
import signup from '../Images/faq.svg'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import AddIcon from '@mui/icons-material/Add'
const FAQPresale = () => {
  const [expanded, setExpanded] = React.useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }
  return (
    <>

      <section className="join_form_section faq_section">
        <Container maxWidth="xl ">
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={12} className="how_to_buy_top">
              <div className="buy_more_first_col">
                {/* <h2 className='heading_color_light'>The Long-Term Approach</h2> */}
                <h2 className="&quot;bigHeading pt-4 mb-5 font-bold xl:text-5xl lg:text-4xl md:text-4xl text-3xl lg:leading-[2.5rem] 2xl:leading-[3.7rem]&quot; restContent" style={{ display: "flex", justifyContent: "center" }}><span className="text-transparent bg-clip-text bg-gradient-to-br from-[#4361EE] to-[#4361EE] main_headings_center">  FAQs</span></h2>
                {/* <p style={{ marginBottom:"30px",textAlign:"center" }}  className="text-white text-lg font-bold">
                  Use the contract information below to add the Decentralised Finance Institute token to
                  your wallet.
                </p> */}
              </div>
            </Grid>
          </Grid>
          <Grid container className="">
            <Grid item xs={12} sm={12} md={5} className="p_20  join_form_section_flex p-5">
              <img src={signup} alt="" className="img-fluid" />
            </Grid>



            <Grid item xs={12} sm={12} md={7} className="p_20 p-5">
              <div className="new_faq_main">
                <section className="">
                  <div className="faqs">
                    {/* <h1 className="bigHeading  pb-10 font-semibold xl:text-5xl lg:text-4xl md:text-4xl text-3xl text-white lg:leading-[2.5rem] 2xl:leading-[3.7rem]">
                      <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#f1552c] to-[#f1552c]">
                        FAQs
                      </span>
                    </h1> */}

                    <div>
                    <Accordion
                        sx={{ borderRadius: '.25rem', margin: '5px',background:"transparent",border:"1px solid #4361EE" }}
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
                              
                              fontSize:"1rem",
                              lineHeight: 1.5,
                              // color:"#f3f4f6"
                            }}
                          >
                            Q: How do I participate in a Decentralised Finance Institute presale event?
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
                            A: To participate in a Decentralised Finance Institute presale event, you
                            typically need to register and complete a KYC/AML
                            (know your customer/anti-money laundering)
                            verification process. Once approved, you can then
                            purchase tokens using the accepted payment methods.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>

                      <Accordion
                        sx={{ borderRadius: '.25rem', margin: '5px',background:"transparent",border:"1px solid #4361EE" }}
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
                              fontFamily:"Clash Display",
                              fontSize:"1rem",
                              lineHeight: 1.5
                            }}
                          >
                            Q: What are the benefits of investing in a Decentralised Finance Institute
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
                            A: Investing in Decentralised Finance Institute presale can provide benefits
                            such as getting Decentralised Finance Institute tokens at a discounted price,
                            participating in early access to the protocol,
                            whitelisting for hosting a node or becoming a
                            validator in Decentralised Finance Institute Blockchain and potentially
                            earning higher returns when the protocol is
                            successful.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion
                        sx={{ borderRadius: '.25rem', margin: '5px',background:"transparent",border:"1px solid #4361EE" }}
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
                              fontFamily:"Clash Display",
                              fontSize:"1rem",
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
                        sx={{ borderRadius: '.25rem', margin: '5px',background:"transparent",border:"1px solid #4361EE" }}
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
                              fontFamily:"Clash Display",
                              fontSize:"1rem",
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
                        sx={{ borderRadius: '.25rem', margin: '5px',background:"transparent",border:"1px solid #4361EE" }}
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
                              fontFamily:"Clash Display",
                              fontSize:"1rem",
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
                        sx={{ borderRadius: '.25rem', margin: '5px',background:"transparent",border:"1px solid #4361EE" }}
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
                              fontFamily:"Clash Display",
                              fontSize:"1rem",
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
                        sx={{ borderRadius: '.25rem', margin: '5px',background:"transparent",border:"1px solid #4361EE" }}
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
                              fontFamily:"Clash Display",
                              fontSize:"1rem",
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

                      <Accordion
                        sx={{ borderRadius: '.25rem', margin: '5px',background:"transparent",border:"1px solid #4361EE" }}
                        expanded={expanded === 'panel77'}
                        onChange={handleChange('panel77')}
                      >
                        <AccordionSummary
                          expandIcon={<AddIcon />}
                          aria-controls="panel77bh-content"
                          id="panel77bh-header"
                        >
                          <Typography
                            className="smallHeading text-transparent bg-clip-text bg-gradient-to-br from-[#4361EE] to-[#4CC9F0]"
                            sx={{
                              fontFamily: 'Clash Display',
                              fontWeight: '500',
                              fontFamily:"Clash Display",
                              fontSize:"1rem",
                              lineHeight: 1.5
                            }}
                          >
                            Q: Where can I find more information about our project?


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
                            A: You can find more information about a presale event by reviewing the protocol's litepaper, website, and social media channels. You can also reach out to the protocol's team members or community members for more information.
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
    </>
  )
}

export default FAQPresale
