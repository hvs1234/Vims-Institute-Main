// import React from 'react'
import Handlers from "../../Services/Handlers";

const ContactForm = () => {
  const { admissionformdata } = Handlers();

  return (
    <>
      <div className="py-[6rem] px-[20rem] w-[100%] relative object-cover max-xl:px-[5rem] max-md:px-[2rem]">
        <div className="relative grid grid-cols-2 gap-[4rem] w-[100%] justify-center max-md:grid-cols-1">
          <div className="flex flex-col gap-[1rem] w-[100%] justify-start">
            <h2 className="text-[3rem] font-normal text-[#212121]">Contact</h2>
            <p className="text-[1.6rem] font-normal text-[#212121]">
              If you have any queries regarding our courses, the institute or
              want to get in touch with the management - Complete the form and
              ensure that you fill your purpose in the comments section. We will
              get in touch with you.
            </p>
            <p className="text-[2rem] font-normal capitalize mt-[1rem]">
              Address
            </p>
            <p className="text-[1.6rem] font-normal text-[#212121]">
              Verma Institute Of Management Studies, Dehradun Uttarakhand
              248008, India
              <div className="flex flex-col gap-[1rem]">
                <p className="text-[1.6rem] text-[#212121]">
                  Fax: <a href="tel:0101010101">+910101010101</a>{" "}
                </p>
                <p className="text-[1.6rem] text-[#212121]">
                  Phone: <a href="tel:0101010101">+910101010101</a>{" "}
                </p>
                <p className="text-[1.6rem] text-[#212121]">
                  For Admission Call: <a href="tel:0101010101">+910101010101</a>{" "}
                  &nbsp;/ <a href="tel:0101010101">+910101010101</a>{" "}
                </p>

                <div className="">
                  or email &nbsp;
                  <a href="mailto:info@vims.edu.in">info@vims.edu.in</a>
                </div>
              </div>
            </p>
          </div>
          <div className="flex justify-center items-start w-[100%] ml-auto mr-auto h-[100%]">
            <form
              action="#"
              className="flex flex-col gap-[1rem] px-[4rem] py-[4rem] w-[100%] h-[100%] bg-[white] border-[1px] border-[grey]"
            >
              {admissionformdata.map((e) => {
                return (
                  <div className="flex flex-col gap-[1rem] w-[100%]" key={e.id}>
                    <label
                      htmlFor={e.label}
                      className="text-[2rem] text-[#212121] font-normal"
                    >
                      {e.label}
                    </label>
                    <input
                      type={e.inputType}
                      placeholder={e.placeHolder}
                      required={e.required}
                      autoComplete="off"
                      name={e.label}
                      className="w-[100%] border-[1px] bg-transparent border-[grey] text-[2rem] text-[#212121] 
                  font-normal px-[2rem] py-[0.5rem] outline-none"
                    />
                  </div>
                );
              })}
              <div className="flex flex-col gap-[1rem] w-[100%]">
                <label
                  htmlFor="Course Interested *"
                  className="text-[2rem] text-[#212121] font-normal"
                >
                  Message *
                </label>
                <textarea
                  className="w-[100%] border-[1px] bg-transparent border-[grey] text-[2rem] text-[grey] 
              font-normal px-[2rem] py-[0.5rem] outline-none resize-none"
                  rows={3}
                  cols={30}
                  name="Message"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="mt-[2rem] w-[100%]">
                <button
                  type="submit"
                  className="bg-[#9e3046] text-[white] font-normal text-[2rem] px-[4rem] py-[1rem]"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
