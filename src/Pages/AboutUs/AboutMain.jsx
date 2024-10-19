import ImageCard from "../../Components/Card/ImageCard";
import Handlers from "../../Services/Handlers";

const AboutMain = () => {
  const { aboutmainimg } = Handlers();

  return (
    <>
      <div className="py-[9rem] px-[20rem] w-[100%] relative object-cover max-xl:px-[5rem] max-md:px-[2rem] max-md:py-[6rem]">
        <div className="flex flex-col justify-center items-center text-center gap-[2rem] w-[100%]">
          <h2 className="text-[3rem] font-normal text-[#212121]">
            Dehradun - The Hospitaility Hub Of India
          </h2>
          <div className="flex flex-col gap-[1rem] justify-center items-center text-center">
            <p className="text-[1.8rem] font-normal text-[#212121]">
              This diploma is designed not just to teach you the fundamentals
              but to immerse you in real-world scenarios through practical
              training and internships. You will gain hands-on experience in
              critical aspects of the hospitality industry, such as guest
              relations, revenue management, and culinary arts, equipping you
              with the skills needed to excel in various roles within the hotel
              industry. From managing day-to-day operations to ensuring
              exceptional customer service, this program prepares you to be a
              key player in any hospitality establishment.
            </p>
            <p className="text-[1.8rem] font-normal text-[#212121]">
              Our curriculum is taught by industry professionals with years of
              experience, ensuring that you are learning the most up-to-date
              practices and trends. Additionally, the program emphasizes
              leadership, communication, and problem-solving, qualities that are
              essential for success in this competitive industry.
            </p>
          </div>
          <ImageCard imageMain={aboutmainimg} />
        </div>
      </div>
    </>
  );
};

export default AboutMain;
