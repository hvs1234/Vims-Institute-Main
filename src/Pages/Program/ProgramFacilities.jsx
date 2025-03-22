import ImageCard from "../../Components/Card/ImageCard";
import Handlers from "../../Services/Handlers";

const ProgramFacilities = () => {
  const { programimg } = Handlers();

  return (
    <>
      <div className="py-[6rem] px-[20rem] w-[100%] relative object-cover max-xl:px-[5rem] max-md:px-[2rem] max-md:py-[6rem]">
        {/* <div className="h-[1px] w-[100%] bg-[#9f9f9f] mb-[6rem]"></div> */}
        <div className="flex flex-col justify-center items-center text-center gap-[2rem] w-[100%] mb-[6rem]">
          <h2 className="text-[4rem] font-normal text-[#212121] max-md:text-[3rem]">
            Why Hospitality Management ?
          </h2>
          <div className="flex flex-col gap-[1rem] justify-center items-center text-center">
            <p className="text-[1.8rem] font-normal text-[#212121]">
              Upon completing a Diploma in Hotel Management, graduates are
              equipped with the skills and knowledge necessary for a diverse
              range of exciting career opportunities in the hospitality
              industry. They may pursue roles such as Hotel Managers, where they
              oversee entire hotel operations, or specialize as Front Office
              Managers, ensuring efficient handling of guest services and
              reservations. Career opportunities are abound in food and beverage
              management, where graduates can manage dining establishments
              within hotels.
            </p>
            <p className="text-[1.8rem] font-normal text-[#212121]">
              For those with an interest in the meticulous aspects of
              hospitality, a position as Housekeeping Manager ensures high
              standards of cleanliness and guest comfort. Graduates with a flair
              for event planning can thrive as Event and Banquet Coordinators,
              orchestrating memorable experiences. Additionally, the diploma
              paves the way for careers in customer service, sales and marketing
              within the hotel industry, and human resources, focusing on staff
              management and training.
            </p>
          </div>
        </div>
        <div className="h-[1px] w-[100%] bg-[#9f9f9f] mb-[6rem]"></div>
        <div className="relative w-[100%] flex flex-col gap-[1rem] justify-center items-center text-center">
          <h2 className="text-[4rem] text-[#212121] text-center max-md:text-[3rem]">
            Our In-House Training Facilities
          </h2>
          <ImageCard imageMain={programimg} />
        </div>
      </div>
    </>
  );
};

export default ProgramFacilities;
