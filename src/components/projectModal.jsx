import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
const ProjectModal = (props) => {
  const showHideClassName = props.show
    ? "modal  display-block"
    : "modal display-none";
  return (
    <div
      className={showHideClassName}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
      style={{ background: "#f5f5f5" }}
    >
      <div
        className="modal-dialog modal-dialog-scrollable"
        role="document"
        style={{ minWidth: "60%" }}
      >
        <div
          className="modal-content"
          style={{ overflow: "auto", height: "90vh" }}
        >
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalCenterTitle">
              {props.name}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={props.handleClose}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <Carousel>
              <Carousel.Item>
                <img
                  src={require(`${props.imageDetail}`)}
                  alt="Logo"
                  style={{
                    borderRadius: "8px",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={require(`${props.imageDetail2}`)}
                  alt="Logo"
                  style={{
                    borderRadius: "8px",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />
              </Carousel.Item>
            </Carousel>
            <p>{props.detail}</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={props.handleClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
