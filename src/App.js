import React from "react";
import "./argon-dashboard.css";
import Picturecom from "./Picturecom";

function Picture() {
  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12">
          <div className="card mb-4">
            <div className="card-header pb-0">
              <h6 className="w-10 test1" style={{ fontSize: 20 }}>
                사진
              </h6>
              <div className="card-body px-0 pt-0 pb-2">
                <div className="table-responsive p-0">
                  <div className="album py-5 bg-light">
                    <div className="container">
                      <table className="table align-items-center justify-content-center mb-0">
                        <div>
                          <Picturecom />
                          <Picturecom />
                          <Picturecom />
                        </div>
                        <div>
                          <Picturecom />
                          <Picturecom />
                          <Picturecom />
                        </div>
                        <div>
                          <Picturecom />
                          <Picturecom />
                          <Picturecom />
                        </div>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Picture;
