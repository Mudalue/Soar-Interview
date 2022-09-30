import React from "react";
import { colors } from "../../constants/color";
import Location from "../molecules/forms/Location";
import SystemType from "../molecules/forms/SystemType";

const MaintainanceModal = () => {
;
  return (
    <>
      <div
        className="modal fade"
        id="maintainanceModal"
        tabindex="-1"
        aria-labelledby="maintainanceModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="maintainanceModalLabel">
                Maintainance Input
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div
                style={{
                  backgroundColor: colors.grey,
                  paddingTop: 10,
                  display: "flex",
                  justifyContent: "center",
                  margin: "0 60px",
                  borderRadius: 10,
                  alignItems: "center",
                }}
              >
                <ul
                  className="nav nav-pills mb-2"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active "
                      id="location-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#location-home"
                      type="button"
                      role="tab"
                      aria-controls="location-home"
                      aria-selected="true"
                    >
                      Home
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="system-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#systemtype-home"
                      type="button"
                      role="tab"
                      aria-controls="systemtype-home"
                      aria-selected="false"
                    >
                      Profile
                    </button>
                  </li>
                </ul>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="location-home"
                      role="tabpanel"
                      aria-labelledby="location-home-tab"
                    >
                      <Location />
                    </div>
                    <div
                      className="tab-pane fade"
                      id="systemtype-home"
                      role="tabpanel"
                      aria-labelledby="system-home-tab"
                    >
                      <SystemType />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MaintainanceModal;
