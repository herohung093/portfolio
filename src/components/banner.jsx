import React from "react";
import "../App.css";
import resume from "../resume/Resume.pdf";
const Banner = () => {
  return (
    <section className="main-banner banner-image" id="top">
      <div className="container h-100" style={{ marginTop: "10%" }}>
        <div className="row h-100 align-items-center">
          <div className="col-lg-12 col-lg-12" style={{ maxWidth: "75%" }}>
            <div className="banner-content color-black">
              <h4 className="color-black letter-spacing-1">
                Welcome to my website
              </h4>

              <h1 className="banner-title color-black my-15">
                Hello! I'm Mai Hung Vu (Hector)
              </h1>
              <h5 align="justify">
                I'm a software engineer living in Melbourne, Australia.
              </h5>
              <a className="btn btn-primary mt-30" href={resume} download>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
