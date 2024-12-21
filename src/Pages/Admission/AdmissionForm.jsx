// import React, { useState } from 'react';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Handlers from "../../Services/Handlers";

const AdmissionForm = () => {
  const { admissionformdata } = Handlers();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast.success("Form submitted successfully!");
  };

  const handlePayFees = (e) => {
    e.preventDefault();

    const isEmptyField = admissionformdata.some(
      (field) => field.required && !formData[field.label]
    );

    if (isEmptyField) {
      toast.error("Please fill out all the fields");
      return;
    }

    if (!isSubmitted) {
      toast.error("Please submit the form first");
      return;
    }

    navigate("/fee");
  };

  return (
    <>
      <div
        className="flex justify-center items-start w-[100%] ml-auto mr-auto h-[100%] px-[4rem] py-[4rem] 
        max-md:px-[2rem] max-md:py-[2rem]"
      >
        <ToastContainer />
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-[1rem] px-[4rem] py-[4rem] w-[100%] h-[100%] bg-[white] rounded-sm border-[1px] border-[grey]"
        >
          {admissionformdata.map((e) => (
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
                disabled={isSubmitted}
                onChange={handleInputChange}
                className="w-[100%] border-[1px] bg-transparent border-[grey] text-[2rem] text-[#212121] 
                  font-normal px-[2rem] py-[0.5rem] outline-none"
              />
            </div>
          ))}
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
              disabled={isSubmitted}
              name="Course Interested"
              onChange={handleInputChange}
              className="w-[100%] border-[1px] bg-transparent border-[grey] text-[2rem] text-[grey] 
              font-normal px-[2rem] py-[0.5rem] outline-none cursor-pointer"
            >
              <option value="">Select a course</option>
              <option value="Diploma">Diploma In Hotel Management</option>
              <option value="Diploma">Diploma In Tourism Management</option>
              <option value="Diploma">
                Short Term Personality Development
              </option>
              <option value="Diploma">Short Term Course in Mass Media.</option>
            </select>
          </div>
          <div className="flex flex-col gap-[1rem] w-[100%]">
            <label
              htmlFor="Message"
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
              required
              disabled={isSubmitted}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="mt-[2rem] flex items-center gap-[2rem] w-[100%]">
            <button
              type="submit"
              disabled={isSubmitted}
              className="bg-[#9e3046] text-[white] font-normal text-[2rem] px-[4rem] py-[1rem] transition-all duration-[0.2s] ease-linear hover:opacity-[0.8] 
              max-[400px]:px-[2rem]"
            >
              Submit
            </button>
            <Link
              to="/fee"
              onClick={handlePayFees}
              className="bg-[#9e3046] text-[white] font-normal text-[2rem] px-[4rem] py-[1rem] transition-all duration-[0.2s] ease-linear hover:opacity-[0.8] 
              max-[400px]:px-[2rem]"
            >
              Pay Fees
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default AdmissionForm;
