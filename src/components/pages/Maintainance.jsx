import React from "react";
import { colors } from "../constants/color";
import MaintainanceModal from "../ui/organisms/MaintainanceModal";
const style = {
  header: {
    display: "flex",
  },
  headerText: {
    fontSize: 14,
  },
  statusCard: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 150,
    borderRadius: 9,
  },
  statusCardText: {
    fontSize: 14,
    fontWeight: 300,
  },
  statusCardHeader: {
    fontSize: 35,
  },
  button: {
    borderRadius: "50%",
    height: 50,
    width: 50,
    backgroundColor: colors.red,
    textAlign: "center",
    border: "none",
  },
};
const Maintainance = () => {
  const status = [
    { id: 1, name: "Total Available Equipment", amount: 10 },
    { id: 2, name: "Total Maintainance Equipment", amount: 153 },
    { id: 3, name: "Total Breakdown Equipment", amount: 3 },
  ];
  return (
    <>
      <div className="container-fluid">
        <div className="row" style={{ marginTop: 20 }}>
          <div className="col-md-12">
            <div style={style.header}>
              <p>
                <i className="fa fa-chevron-left"></i>
              </p>
              <p className="fw-bold mx-2">Maintainance</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div style={style.statusCard}>
              <div
                className="d-flex"
                data-bs-toggle="modal"
                data-bs-target="#maintainanceModal"
              >
                <button style={style.button}>
                  <i className="fa fa-plus text-light"></i>
                </button>
                <p className="py-3 mx-2" style={style.statusCardText}>
                  Maintainance
                </p>
              </div>
            </div>
          </div>
          {status.map((stat) => (
            <div className="col-md-3">
              <div style={style.statusCard}>
                <div>
                  <p style={style.statusCardText}>{stat.name}</p>
                  <h5 className="fw-bold" style={style.statusCardHeader}>
                    {stat.amount}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* modal */}
        <MaintainanceModal />
      </div>
    </>
  );
};

export default Maintainance;
