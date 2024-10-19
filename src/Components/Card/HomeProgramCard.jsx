import PropTypes from "prop-types";

const HomeProgramCard = ({ homeprogramdata }) => {
  return (
    <>
      <div className="mt-[4rem] w-[100%] grid grid-cols-3 justify-center ml-auto mr-auto gap-[2rem] max-xl:grid-cols-2 max-sm:grid-cols-1">
        {homeprogramdata.map((e) => {
          return (
            <div
              key={e.id}
              className={`px-[4rem] py-[4rem] w-[100%] h-[100%] border-[1px] border-[white] flex flex-col gap-[1rem] 
              justify-center items-center text-center transition-all duration-[0.2s] ease-linear hover:scale-[1.02] hover:bg-[#e3375a]`}
            >
              <e.icon size={50} className="text-[white]" />
              <p className="text-[white] text-[2rem] font-medium">{e.name}</p>
              <p className="text-[1.6rem] text-[white] font-normal">{e.desc}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

HomeProgramCard.propTypes = {
  homeprogramdata: PropTypes.array.isRequired,
};

export default HomeProgramCard;
