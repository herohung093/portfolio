import React from "react";
import "../App.css";
import resume from "../resume/Resume.pdf";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.sectionRef = null;
  }

  componentDidMount() {
    if (this.sectionRef) {
      console.log(this.sectionRef.clientHeight);
    }
  }
  render() {
    return (
      <section
        ref={ref => (this.sectionRef = ref)}
        id="about"
        className="py-80"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <div className="about-image">
                <img
                  src={require("../img/about.jpg")}
                  style={{ width: "100%", maxHeight: "500px" }}
                ></img>
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="about-details">
                <div className="inner-title pb-30">
                  <h4 className="inner-top-title color-primary m-0 letter-spacing-1">
                    About
                  </h4>
                  <h2 className="inner-bottom-title color-black">
                    Something about my selft
                  </h2>
                </div>
                <p className="mb-15" style={{ color: "#6c757d" }}>
                  I am passionate about building excellent software that
                  improves the lives of those around me. I specialize in
                  creating software for clients ranging from individuals and
                  businesses. I have done works in software development, Android
                  app creation, front-end/back-end web, database/server
                  management.
                </p>
                <ul className="py-15">
                  <li>
                    <span className="spanAbout">Name</span> : Mai Hung Vu
                  </li>
                  <li>
                    <span className="spanAbout">Email</span> :
                    hung.vm2574@gmail.com
                  </li>
                  <li>
                    <span className="spanAbout">Mobile</span> : +61 401 070 232
                  </li>
                  <li>
                    <span className="spanAbout">Address</span> : Stevenston St,
                    Deer Park, Victoia
                  </li>
                  <li>
                    <div className="block-content">
                      <span className="spanAbout">
                        <a
                          className="button button-icon"
                          title="Github: herohung093"
                          href="https://github.com/herohung093"
                        >
                          <i className="fa fa-github-square fa-2x"></i>
                        </a>
                      </span>
                      <span className="spanAbout">
                        <a
                          className="button button-icon"
                          title="LinkedIn: mai hung vu"
                          href="https://www.linkedin.com/in/mai-hung-vu-565b1bb2/"
                        >
                          <i className="fa fa-linkedin-square fa-2x"></i>
                        </a>
                      </span>
                      <span className="spanAbout">
                        <a
                          className="button button-icon"
                          title="Facebook: Hector Vu"
                          href="https://www.facebook.com/hectorvu093"
                        >
                          <i className="fa fa-facebook-square fa-2x"></i>
                        </a>
                      </span>
                      <span className="spanAbout">
                        <a
                          className="button button-icon"
                          title="Mail: hung.vm2574@gmail.com"
                          href="mailto:hung.vm2574@gmail.com"
                        >
                          <i className="fa fa-envelope fa-2x"></i>
                        </a>
                      </span>
                    </div>
                  </li>
                </ul>
                <div className="mt-15">
                  <a className="btn btn-primary mr-3" href={resume} download>
                    Download CV
                  </a>
                  <a className="btn btn-primary" href="aa">
                    Send Message
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
