import React from 'react';
import contact from "../Web3.0-1.jpg"

const ContactForm = () => {
  return (
    <div className="container  md:py-20 mx-auto md:px-6">
      <h1 className="text-center mb-4 fs-1 sm:mb-5 text-[#4361EE]">Contact Us</h1>
      <section className="mb-0">
        <div className="flex flex-wrap-reverse">
          <div className="sm:mb-12 mt-5 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
            <form>
              <div style={{ border: "1px solid #4361EE" }} className="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="text"
                  className="text-white peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleInput90"
                  placeholder="Name"
                />
                <label
                  className="text-white pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  htmlFor="exampleInput90"
                >
                  Name
                </label>
              </div>
              <div style={{ border: "1px solid #4361EE" }} className="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="email"
                  className="text-white bg-[#4361ee] peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleInput91"
                  placeholder="Email address"
                />
                <label
                  className="text-white pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  htmlFor="exampleInput91"
                >
                  Email address
                </label>
              </div>
              <div style={{ border: "1px solid #4361EE" }} className="relative mb-6" data-te-input-wrapper-init>
                <textarea
                  className="text-white peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Your message"
                ></textarea>
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="text-white pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                >
                  Message
                </label>
              </div>

              <button
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                style={{ border: "1px solid #4361EE" }}
                className="mb-6 inline-block w-full rounded bg-transparent px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-[#4361EE] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] active:ring-0"
              >
                Submit
              </button>

            </form>
          </div>
          <div className="w-full md:w-[50%] md:mt-5 lg:mt-0 p-2 sm:p-20 rounded-sm">
            <img className="rounded-lg" src="https://traditionalmedicine.prideconferences.com/wp-content/uploads/2019/04/contact-us-Mod-3.jpg" alt="" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactForm