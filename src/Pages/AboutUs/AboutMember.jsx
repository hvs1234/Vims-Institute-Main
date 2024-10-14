import TipsCard from "../../Components/Card/TipsCard";
import Handlers from "../../Services/Handlers";

const AboutMember = () => {
  const { abouttipsdata } = Handlers();

  return (
    <>
      <div className="py-[9rem] px-[20rem] w-[100%] relative object-cover max-xl:px-[5rem] max-md:px-[2rem] max-md:py-[6rem]">
        <div className="flex flex-col gap-[2rem] justify-center items-center text-center w-[100%]">
          <h2 className="text-[3rem] font-normal mb-[2rem]">Members of</h2>
          <TipsCard tipsdata={abouttipsdata} />
        </div>
      </div>
    </>
  );
};

export default AboutMember;
