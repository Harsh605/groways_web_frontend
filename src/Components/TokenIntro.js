import React from 'react'
import police from "../police.jpg"
import EcoSystemImage from '../R.jpg'

const TokenIntro = () => {
  return (
    <div id="ecosystem" className="abc bg-transparent md:mt-10 py-3 px-3 md:px-14 md:pt-24 md:px-28 sm:p-14  pb-0">

      <h2 className='mt-5 mb-5 md:mb-10' style={{ textAlign: 'center', color: "#406AFF", fontWeight: "700" }}>Project Ecosystem</h2>
      <div className="container sm:my-0 mx-auto md:px-6">
        <section className="sm:mb-0">
          <div className="flex flex-wrap">
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12">
              <div className="flex lg:py-12">
                <img
                  src="image/technologyblockchain.jpg"
                  className="w-[100%] h-[280px] rounded-lg shadow-lg dark:shadow-black/20 lg:ml-[50px] z-[10]"
                  alt="image"

                />
              </div>
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
              <div className="flex h-full items-center rounded-lg bg-transparent p-6 text-center text-[#4361EE] lg:pl-12 lg:text-left" style={{ background: "transparent", border: "1px solid #4361EE" }}>
                <div className="lg:pl-12">
                  <p style={{ fontFamily: "revert", fontWeight: "600" }} className='text-xl text-white'>Our What is Groways Technologies Graways Technologies stands at the forefront of technological innovation, dedicated to
                    empowering individuals to transform their
                    dreams into reality.
                  </p> <br />
                  <p style={{ fontFamily: "revert", fontWeight: "600" }} className='text-xl text-white'>In a world where the future
                    is evolving at an unprecedented pace, Graways
                    Technologies serves as a catalyst for positive
                    change. With a commitment to excellence, the
                    company harnesses the latest advancements in
                    technology to create solutions that inspire and
                    elevate. landscape.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

    </div>
  )
}

export default TokenIntro