import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SlideAnimation = () => {
  ScrollTrigger.refresh();
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".parent",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
      },
    });
    tl.fromTo(
      ".div_1",
      {
        xPercent: 200,
      },
      {
        xPercent: -50,
      }
    )
      .fromTo(
        ".fill_div",
        {
          width: 0,
        },
        {
          width: "25%",
        },
        "-=.3"
      )
      .fromTo(
        ".div_2",
        {
          xPercent: 200,
        },
        {
          xPercent: -50,
        }
      )
      .fromTo(
        ".fill_div",
        {
          width: "25%",
        },
        {
          width: "50%",
        },
        "-=.3"
      )
      .fromTo(
        ".div_3",
        {
          xPercent: 200,
        },
        {
          xPercent: -50,
        }
      )
      .fromTo(
        ".fill_div",
        {
          width: "50%",
        },
        {
          width: "75%",
        },
        "-=.3"
      )
      .fromTo(
        ".div_4",
        {
          xPercent: 200,
        },
        {
          xPercent: -50,
        }
      )
      .fromTo(
        ".fill_div",
        {
          width: "75%",
        },
        {
          width: "100%",
        },
        "-=.3"
      );
  }, []);
  return (
    <>
      <div className="overflow-hidden">
        {/* <div className="bg-primary vh-100"></div> */}
        <div className="container vh-100 d-flex flex-column justify-content-center parent position_relative">
          <div className="common bg-danger div_1 position-absolute ">
            <div className="row">
              <div className="col-6">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
                iure, tenetur quia et laudantium culpa provident est corporis
                voluptate laborum perferendis neque doloribus cum fugit, error
                eos facilis, labore repellat.
              </div>
              <div className="col-6">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
                iure, tenetur quia et laudantium culpa provident est corporis
                voluptate laborum perferendis neque doloribus cum fugit, error
                eos facilis, labore repellat.
              </div>
            </div>
          </div>
          <div className="common div_2 z_1 bg-primary position-absolute ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse iure,
            tenetur quia et laudantium culpa provident est corporis voluptate
            laborum perferendis neque doloribus cum fugit, error eos facilis,
            labore repellat.
          </div>
          <div className="common div_3 z_2 position-absolute ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse iure,
            tenetur quia et laudantium culpa provident est corporis voluptate
            laborum perferendis neque doloribus cum fugit, error eos facilis,
            labore repellat.
          </div>
          <div className="common div_4 z_1 bg-success position-absolute ">
            <h2>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
              iure, tenetur quia et laudantium culpa provident est corporis
              voluptate laborum perferendis neque doloribus cum fugit, error eos
              facilis, labore repellat.
            </h2>
          </div>
          <div className="fill_div"></div>
        </div>
      </div>
    </>
  );
};
export default SlideAnimation;
