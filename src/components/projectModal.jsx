import React, { Component } from "react";

const ProjectModal = props => {
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
    >
      <div
        className="modal-dialog modal-dialog-scrollable"
        role="document"
        style={{ minWidth: "630px" }}
      >
        <div className="modal-content">
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
            <img
              src={require(`${props.imageDetail}`)}
              alt="Logo"
              style={{
                borderRadius: "8px",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto"
              }}
            />
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
