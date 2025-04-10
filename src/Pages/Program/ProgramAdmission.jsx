import ProgramAdmissionCard from "../../Components/Card/ProgramAdmissionCard";

const ProgramAdmission = () => {
  return (
    <>
      <div className="py-[6rem] px-[20rem] w-[100%] relative object-cover max-xl:px-[5rem] max-md:px-[2rem] bg-[#f2f2f2]">
        <div className="relative w-[100%] flex flex-col gap-[1rem] justify-center items-center text-center">
          <h2 className="text-[3rem] font-normal text-[#212121]">
            The Application Process
          </h2>
          <p className="text-[1.6rem] font-normal text-[#212121] max-w-[50%] max-md:max-w-[80%] max-sm:max-w-[100%]">
            The minimum qualification for enrollment in the Diploma in Hotel
            Management program is a pass certificate in the final examination of
            12th Grade or its equivalent.
          </p>
        </div>
        <ProgramAdmissionCard />
        <div className="w-[100%] h-[1px] bg-[#bebebe]"></div>
        <div className="flex flex-col gap-[2rem] w-[100%] relative py-[4rem]">
          <h2 className="text-[3rem] font-normal text-[#212121] text-center">
            Eligibility And Fee
          </h2>
          <div className="grid grid-cols-2 w-[100%] relative gap-[4rem] mt-[2rem] max-md:grid-cols-1">
            <div className="flex justify-start gap-[2rem] w-[100%]">
              <div className="flex">
                <p className="text-[2.5rem] text-[green] font-medium">1</p>
              </div>
              <div className="flex flex-col gap-[2rem] w-[100%]">
                <p className="text-[2rem] font-normal">
                  Diploma Eligibility Process
                </p>
                <div className="w-[100%] flex flex-col gap-[1rem]">
                  <p className="text-[1.6rem] font-normal text-[#515151]">
                    <i className="fa-solid fa-arrows-to-dot text-[green]"></i>
                    &nbsp; 10/10+2 Examination passed in any stream
                  </p>
                  <p className="text-[1.6rem] font-normal text-[#515151]">
                    <i className="fa-solid fa-arrows-to-dot text-[green]"></i>
                    &nbsp; Min. 50% marks for General and 45% marks in case of
                    SC/ST category
                  </p>
                  <p className="text-[1.6rem] font-normal text-[#515151]">
                    <i className="fa-solid fa-arrows-to-dot text-[green]"></i>
                    &nbsp; The following Scholarships* are available:
                  </p>
                  <div className="flex flex-col gap-[1rem] w-[100%]">
                    <p className="text-[1.6rem] font-normal text-[#515151]">
                      <i className="fa-regular fa-hand-point-right text-[darkgreen]"></i>
                      &nbsp; 10% scholarship to female Candidate for the
                      complete programme
                    </p>
                    <p className="text-[1.6rem] font-normal text-[#515151]">
                      <i className="fa-regular fa-hand-point-right text-[darkgreen]"></i>
                      &nbsp; 5% scholarship on Net Academic Fee to wards of
                      Defence personnel for the complete programme
                    </p>
                    <p className="text-[1.6rem] font-normal text-[#515151]">
                      <i className="fa-regular fa-hand-point-right text-[darkgreen]"></i>
                      &nbsp; 10% scholarship on Net Academic Fee to Uttarakhand
                      domicile
                    </p>
                    <p className="text-[1.6rem] font-normal text-[#515151]">
                      <i className="fa-regular fa-hand-point-right text-[darkgreen]"></i>
                      &nbsp; 5% fees waiver to candidates scoring above 75% and
                      10% fee waiver to candidates scoring above 85% in Class
                      12th
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-start gap-[2rem] w-[100%]">
              <div className="flex">
                <p className="text-[2.5rem] text-[green] font-medium">2</p>
              </div>
              <div className="flex flex-col gap-[2rem] w-[100%]">
                <p className="text-[2rem] font-normal text-[black]">
                  *List Of Documents To Be Submitted For Admission
                </p>
                <div className="flex flex-col gap-[1rem] w-[100%]">
                  <p className="text-[1.6rem] font-normal text-[#212121]">
                    <i className="fa-solid fa-arrows-to-dot text-[green]"></i>
                    &nbsp; Class 12th Pass Certificate & Marksheet{" "}
                  </p>
                  <p className="text-[1.6rem] font-normal text-[#212121]">
                    <i className="fa-solid fa-arrows-to-dot text-[green]"></i>
                    &nbsp; I.D. Proof - Aadhar Card or Voter ID{" "}
                  </p>
                  <p className="text-[1.6rem] font-normal text-[#212121]">
                    <i className="fa-solid fa-arrows-to-dot text-[green]"></i>
                    &nbsp; 2 passport-sized photo
                  </p>
                  <p className="text-[1.6rem] font-normal text-[#212121]">
                    *Self-attested copies of the above mentioned documents
                    should be submitted along with the complete form at the
                    institute
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgramAdmission;
