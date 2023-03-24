import React from "react";
import Lottie from "react-lottie-player";
import pie_lottie_1 from "../assets/lottie/pie-animation-green-diaganol-mobile.json";
import pie_lottie_2 from "../assets/lottie/pie-animation-orange-diagonal.json";
import pie_lottie_3 from "../assets/lottie/pie-animation-pink-pie-chart-mobile.json";

const SectionOne = () => {
  return (
    <>
      <div className="min-vh-100 d-flex flex-column align-items-center justify-content-center section_one">
        <h1 className="text-dark fw-semibold">Investor Deck 2023</h1>
        <Lottie
          loop
          animationData={pie_lottie_1}
          play
          className="w-100 h-100"
        />
        <Lottie
          loop
          animationData={pie_lottie_2}
          play
          className="w-100 h-100"
        />
        <Lottie
          loop
          animationData={pie_lottie_3}
          play
          className="w-100 h-100"
        />
      </div>
    </>
  );
};

export default SectionOne;
