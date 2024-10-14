import about_vims_img from "/Images/9.jpg";

const AboutVims = () => {
  return (
    <>
      <div className="py-[9rem] px-[20rem] w-[100%] relative object-cover bg-[#f2f2f2] max-xl:px-[5rem] max-md:px-[2rem] max-md:py-[6rem]">
        <div className="grid grid-cols-2 gap-[4rem] w-[100%] relative max-2xl:grid-cols-1">
          <div className="flex flex-col gap-[1rem] w-[100%] justify-center">
            <h2 className="text-[3rem] text-[#212121] font-normal">
              About VIMS
            </h2>
            <p className="text-[1.8rem] font-normal text-[#212121]">
              Founded by the illustrious House of Kumars, Verma Institute of
              Management Studies (VIMS) is a testament to a legacy of excellence
              in hospitality, helmed by our visionary president, Mr. Rajender
              Kumar Verma. With over four decades of dedication to the family’s
              distinguished hospitality ventures, Mr. Verma has been a key
              figure in shaping the culinary and hospitality landscape of
              Uttarakhand. His leadership in managing Kumar Foods Restaurant for
              over 30 years has earned it the status of an iconic establishment
              in the region. In 2021, furthering his vision of excellence, Mr.
              Verma expanded the family’s footprint with the launch of Hotel
              Alaya, a boutique hotel in the heart of Dehradun, offering a
              refined blend of luxury and local charm.
            </p>
            <p className="text-[1.8rem] font-normal text-[#212121]">
              At VIMS, we are committed to nurturing the next generation of
              leaders in hospitality management by offering a curriculum that
              seamlessly integrates academic rigor with real-world experience.
              What sets VIMS apart is the unparalleled access to hands-on
              training through our esteemed affiliates, Kumar Caterers and Hotel
              Alaya. From government functions to private weddings, our students
              will have the privilege of engaging in high-profile catering
              events, offering them not only invaluable industry exposure but
              also the opportunity to earn while they learn. Each student will
              graduate with a portfolio of experiences, enriched by an official
              certificate, demonstrating their skills and readiness for the
              dynamic world of hospitality. Additionally, our institute provides a unique learning
              environment, with practical hospitality training at Hotel Alaya,
              conveniently located directly above the campus. This immersive
              approach ensures that students receive an education that extends
              beyond the classroom, blending academic theory with the nuances of
              hands-on management in a live operational setting.
            </p>
          </div>
          <div className="flex justify-center w-[100%] h-[100%]">
            <img
              src={about_vims_img}
              alt="img"
              className="w-[100%] rounded-sm"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutVims;
