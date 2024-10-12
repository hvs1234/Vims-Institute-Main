import PropTypes from "prop-types";

const HomeTipsCard = ({ hometipsdata }) => {
  return (
    <>
      <div
        className="grid grid-cols-6 w-[auto] relative gap-[2rem] justify-center items-center mt-[4rem] 
        max-2xl:grid-cols-3 max-sm:grid-cols-2"
      >
        {hometipsdata.map((e) => {
          return (
            <div
              key={e.id}
              className="shadow-2xl flex flex-col gap-[1rem] justify-center items-center text-center px-[2rem] py-[2rem]
              transition-all duration-[0.2s] ease-linear hover:scale-[1.02] h-[100%] w-[100%]"
            >
              <img src={e.img} alt="img" className="w-[50%]" />
            </div>
          );
        })}
      </div>
    </>
  );
};

HomeTipsCard.propTypes = {
  hometipsdata: PropTypes.array.isRequired,
};

export default HomeTipsCard;
