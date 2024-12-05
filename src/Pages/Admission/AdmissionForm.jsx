// import React from 'react'

import Handlers from "../../Services/Handlers";

const AdmissionForm = () => {
  const { admissionformdata } = Handlers();

  return (
    <>
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
              Course Interested *
            </label>
            <select
              required
              autoComplete="off"
              className="w-[100%] border-[1px] bg-transparent border-[grey] text-[2rem] text-[grey] 
              font-normal px-[2rem] py-[0.5rem] outline-none"
            >
              <option value={"Diploma"}>Diploma In Hotel Management</option>
            </select>
          </div>
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
              rows={5}
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
    </>
  );
};

export default AdmissionForm;
