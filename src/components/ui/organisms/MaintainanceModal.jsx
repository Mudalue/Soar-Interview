import React, { useState } from "react";
import { colors } from "../../constants/color";
import Button from "../atoms/general/Button";
import Location from "../molecules/forms/Location";
import SystemType from "../molecules/forms/SystemType";

const MaintainanceModal = () => {
  const [isLocation, setIsLocation] = useState(false);
  const [isSystem, setIsSystem] = useState(false);

  //handle location
  const handlelocation = () => {
    setIsLocation(true);
    setIsSystem(false)
  };
  //handle system type
  const handlesystemtype = () => {
    setIsSystem(true);
    setIsLocation(false)
  };
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
                  padding: 10,
                  display: "flex",
                  justifyContent: "center",
                  margin: "0 60px",
                  borderRadius: 10,
                }}
              >
                <div className="d-flex">
                  <div>
                    <Button
                      text="Location"
                      color={colors.red}
                      background={colors.white}
                      solid={true}
                      onclick={handlelocation}
                    />
                  </div>
                  <div className="mx-2">
                    <Button
                      text="System Type"
                      color={colors.red}
                      background={colors.white}
                      solid={true}
                      onclick={handlesystemtype}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  {isLocation && <Location />}
                  {isSystem && <SystemType />}
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
