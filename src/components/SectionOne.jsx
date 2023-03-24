import React from "react";
import Lottie from "react-lottie-player";
import pie_lottie_1 from "../assets/lottie/pie-animation-green-diaganol-mobile.json";

const SectionOne = () => {
  return (
    <>
      <div className="min-vh-100 d-flex flex-column align-items-center justify-content-center section_one">
        <p className="fs-1 text-white fw-semibold">Section One</p>
        <Lottie
          loop
          animationData={pie_lottie_1}
          play
          className="w-100 h-100"
        />
      </div>
    </>
  );
};

export default SectionOne;
