/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import GalleryImages from "../../APIs/GalleryImgData";

const GalleryMain = () => {
  const [galleryImages] = useState(GalleryImages);

  return (
    <>
      <div className="py-[6rem] px-[5rem] w-full relative object-cover max-md:px-[2rem]">
        <div className="grid grid-cols-4 gap-[2rem] w-auto h-auto justify-center max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
          {galleryImages.map((e) => (
            <div
              key={e?.id}
              className="break-inside-avoid overflow-hidden rounded-xl"
            >
              <img
                src={e?.img}
                alt={`Image ${e?.id}`}
                className="w-full h-auto object-cover rounded-xl transition duration-300 ease-in-out hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GalleryMain;
