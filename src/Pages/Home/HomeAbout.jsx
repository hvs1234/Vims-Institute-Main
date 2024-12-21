import PropTypes from "prop-types";

const HomeAbout = ({ twocolsdata }) => {
  return (
    <>
      <div className={`w-[100%] relative h-[100%] grid grid-cols-2 justify-start max-xl:grid-cols-1`}>
        {twocolsdata.map((e) => {
          return (
            <div key={e.id} className={`${e.mainclass}`}>
              <h2 className="text-[3rem] font-normal text-[white]">
                {e.title}
              </h2>
              <p className="text-[1.8rem] font-normal text-[white]">{e.desc}</p>
              <p className="text-[1.8rem] font-normal text-[white]">{e.desc2}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

HomeAbout.propTypes = {
  twocolsdata: PropTypes.array.isRequired,
};

export default HomeAbout;
