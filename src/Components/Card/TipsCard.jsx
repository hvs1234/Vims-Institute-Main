import PropTypes from "prop-types";

const TipsCard = ({ tipsdata }) => {
  return (
    <>
      <div
        className={`grid grid-cols-3 w-[auto] relative gap-[2rem] justify-center items-center max-[500px]:grid-cols-1`}
      >
        {tipsdata.map((e) => {
          return (
            <div
              key={e.id}
              className="shadow-2xl flex flex-col gap-[1rem] justify-center items-center text-center px-[2rem] py-[2rem]
              transition-all duration-[0.2s] ease-linear hover:scale-[1.02] h-[100%] w-[100%]"
            >
              <img src={e.img} alt="img" className={`${e.imgclass}`} />
            </div>
          );
        })}
      </div>
    </>
  );
};

TipsCard.propTypes = {
  tipsdata: PropTypes.array.isRequired,
};

export default TipsCard;
