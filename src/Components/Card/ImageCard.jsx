import PropTypes from "prop-types";

const ImageCard = ({ imageMain }) => {
  return (
    <>
      <div className="grid grid-cols-3 gap-[2rem] justify-center w-[100%] relative mt-[4rem] max-md:grid-cols-2 max-sm:grid-cols-1">
        {imageMain.map((e) => {
          return (
            <div
              key={e.id}
              className={`flex justify-center w-[100%] h-[100%] transition-all duration-[0.2s] ease-linear ${e.imgclass}`}
            >
              <img
                src={e.img}
                alt="img"
                className={`w-[100%] rounded-sm hover:scale-[0.9] transition-all duration-[0.2s] ease-linear`}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

ImageCard.propTypes = {
  imageMain: PropTypes.array.isRequired,
};

export default ImageCard;
