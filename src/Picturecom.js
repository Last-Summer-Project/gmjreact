import React from "react";
import "./argon-dashboard.css";

function Picturecom() {
  return (
    <div className="col-md-4" style={{ float: "left" }}>
      <div className="card mb-4 shadow-sm">
        <svg
          className="bd-placeholder-img card-img-top"
          width="100"
          height="225"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
          aria-label="Placeholder: Thumbnail"
        >
          <title>Placeholder</title>
          <rect width="500" height="500" fill="#55595c"></rect>
          <text
            x="30"
            y="50"
            fill="#eceeef"
            dy=".3em"
            /*className="w-10 test1"*/
            style={{ fontSize: 20 }}
          >
            해당 일자 마지막 사진
          </text>
        </svg>
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <small className="text-muted test1" style={{ fontSize: 20 }}>
              6월 16일
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Picturecom;
