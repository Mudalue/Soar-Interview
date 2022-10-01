import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { colors } from "../constants/color";
import MaintainanceModal from "../ui/organisms/MaintainanceModal";
import { equipment } from "../constants/content";

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
  tableCard: {
    backgroundColor: "#fff",
    height: 500,
    borderRadius: 9,
    marginTop: 30,
    padding: 10,
  },
};
const Maintainance = () => {
  //table prop
  const column = [
    { field: "id", headerName: "id", width: 150 },
    { field: "userId", headerName: "UserId", width: 150 },
    { field: "transactionId", headerName: "Transactionid", width: 150 },
    { field: "serialId", headerName: "SerialId", width: 150 },
    { field: "systemTypeId", headerName: "SystemTypeId", width: 150 },
    { field: "equipmentTypeId", headerName: "EquipmentTypeId", width: 150 },
    { field: "locationId", headerName: "LocationId", width: 150 },
    { field: "sbuId", headerName: "SbuId", width: 150 },
    { field: "equipment", headerName: "Equipment", width: 150 },
    { field: "createdAt", headerName: "CreatedAt", width: 150 },
    { field: "updatedAt", headerName: "UpdatedAt", width: 150 },
  ];
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
        <div style={style.tableCard}>
          <DataGrid rows={equipment} columns={column} />
        </div>
        {/* modal */}
        <MaintainanceModal />
      </div>
    </>
  );
};

export default Maintainance;
