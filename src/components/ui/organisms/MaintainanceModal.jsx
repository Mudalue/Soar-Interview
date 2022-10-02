import React, { useState } from "react";
import { colors } from "../../constants/color";
import {
  equipment,
  equipmentType,
  location,
  sbu,
  systemTypes,
} from "../../constants/content";
import Select from "react-select";
import Button from "../atoms/general/Button";

const MaintainanceModal = () => {
  const [locations, setLocation] = useState("");
  const [equipments, setEquipment] = useState("");
  const [equipmentTypes, setEquipmentType] = useState("");
  const [sbus, setSbu] = useState("");
  const [systemType, setSystemType] = useState("");

  //location
  const options = location.map((item) => {
    return { label: item.name, value: item.id };
  });
  //Equipment
  const equipmentOptions = equipment.map((item) => {
    return { label: item.equipment, value: item.equipment };
  });
  // equpiment type
  const equipmentTypeOptions = equipmentType.map((item) => {
    return { label: item.name, value: item.id };
  });
  //sbulb
  const sbulbOptions = sbu.map((item) => {
    return { label: item.name, value: item.name };
  });
  //system types
  const systemTypesOptions = systemTypes.map((item) => {
    return { label: item.name, value: item.id };
  });
  console.log(locations.value)
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
                  margin: "0 50px",
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
                      className="nav-link active"
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
                  <div className="tab-content p-3" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="location-home"
                      role="tabpanel"
                      aria-labelledby="location-home-tab"
                    >
                      <div className="row mb-2">
                        <div className="col-md-12">
                          <label htmlFor="location">Location</label>
                          <Select
                            options={options}
                            name="Location"
                            placeholder=""
                            defaultValue={locations}
                            onChange={(selectedOption)=> {setLocation(selectedOption);}}
                          />
                        </div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-md-12">
                          <label htmlFor="equipment">Equipment</label>
                          <Select
                            options={equipmentOptions}
                            name="Equipment"
                            placeholder=""
                            value={equipments}
                            onChange={(selectedOption)=> setEquipment(selectedOption)}
                          />
                        </div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-md-12">
                          <label htmlFor="equipment type">Equipment Type</label>
                          <Select
                            options={equipmentTypeOptions}
                            name="Equipment Type"
                            placeholder=""
                            value={equipmentTypes}
                            onChange={(selectedOption)=> setEquipmentType(selectedOption)}
                          />
                        </div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-md-12">
                          <label htmlFor="sbulb">Sbulb</label>
                          <Select
                            options={sbulbOptions}
                            name="Sbulb"
                            placeholder=""
                            value={sbus}
                            onChange={(selectedOption)=> setSbu(selectedOption)}
                          />
                        </div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-md-12">
                          <label htmlFor="status">Status</label>
                          <Select
                            options={sbulbOptions}
                            name="status"
                            placeholder=""
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="systemtype-home"
                      role="tabpanel"
                      aria-labelledby="system-home-tab"
                    >
                      <div className="row mb-2">
                        <div className="col-md-12">
                          <label htmlFor="system">System Types</label>
                          <Select
                            options={systemTypesOptions}
                            name="system types"
                            placeholder=""
                            value={systemType}
                            onChange={(selectedOption)=> setSystemType(selectedOption)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row my-2">
                <div className="col-md-12">
                  <Button
                    color="#fff"
                    solid={true}
                    text="Submit"
                    width="100%"
                    background="#000"
                    size="lg"
                    disabled={
                      locations.value &&
                      equipments.value &&
                      equipmentTypes.value &&
                      systemType.value &&
                      sbus.value !== ""
                        ? false
                        : true
                    }
                  />
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
