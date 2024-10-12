// import React from 'react'
import PropTypes from "prop-types";

const HomeValuesCard = ({ homevaluesdata }) => {
  return (
    <>
      <div className="grid grid-cols-3 gap-[4rem] w-[100%] h-[100%] mt-[3rem] max-xl:grid-cols-2 max-[500px]:grid-cols-1">
        {homevaluesdata.map((e) => {
          return (
            <div
              key={e.id}
              className="flex flex-col gap-[1.5rem] justify-start items-center text-center"
            >
              <img src={e.img} alt="img" className="w-[15%]" />
              <p className="text-[2rem] font-normal">{e.name}</p>
              <p className="text-[1.6rem] font-normal">{e.desc}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

HomeValuesCard.propTypes = {
  homevaluesdata: PropTypes.array.isRequired,
};

export default HomeValuesCard;
