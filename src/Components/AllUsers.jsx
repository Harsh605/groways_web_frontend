import React, { Fragment, useEffect, useRef, useState } from "react";
// import { Breadcrumbs } from '../../../../AbstractElements';
// import { FaSortUp, FaSortDown } from 'react-icons/fa';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';
import { Button, Input, Modal, Container } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";
import { Fade } from "react-reveal";
import { fetchTeamInfo, fetchUsersList } from "../api";
// import { useAccount } from 'wagmi'
// import { fetchUsersList } from '../../../../api/integrateConfig';
import "./table.css";

const AllUsers = () => {
  const { address } = useParams();
  //   const { address} = useAccount();
  const [startDate, setStartDate] = useState(new Date("2000-01-01"));
  const [endDate, setEndDate] = useState(new Date("3000-01-01"));
  const [data, setData] = useState([]);

  //   const [searchTerm, setSearchTerm] = useState('');
  const [searchFromUserName, setSearchFromUserName] = useState("");
  // const [fromDate, setFromDate] = useState('');
  // const [toDate, setToDate] = useState('');
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedWallet, setSelectedWallet] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editedRow, setEditedRow] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      // console.log(endDate)
      try {
        let data1 = {
          address:address,
        };
        const response = await fetchTeamInfo(data1);
        console.log(response)
        setData(response.usersDetails);
      } catch (error) {
        console.log(`error in index file of the table `);
      }
    };
    fetchUserDetails();
  }, [startDate, endDate]);
console.log(data)
  // let filteredData = data;
  // if (searchFromUserName !== "") {
  //   filteredData = data.filter((user) =>
  //     user.name.toLowerCase().includes(searchFromUserName.toLowerCase())
  //   );
  // }

  return (
    <Fragment>
      {/* <Breadcrumbs mainTitle='All User' parent='UserSection' title='All User' /> */}
      <Container fluid={true}>
        <Fade top distance="2%" duration={700}>
          <div className="table-responsive">
            <div style={{ background: "transparent" }} className="card">
                <p style={{ fontSize: "25px", color: "white" }}>All Users</p>
              <div style={{ background: "white" }} className="card-body">
                <hr />
                <div className="table-responsive">
                  <table
                    id="myTable"
                    className="table table-striped table-bordered"
                    style={{ width: "100%" }}
                  >
                    <thead>
                      <tr>
                        <th>S.NO</th>
                        <th> User Name</th>
                        <th> User ID</th>
                        <th>User Wallet Address</th>
                        <th>Sponser Wallet Address</th>
                        {/* <th>Sponser ID</th> */}
                        {/* <th>Wallet Address</th> */}
                        {/* <th>Wallet Amount</th> */}
                        {/* <th>Time</th> */}
                        <th>Referral Income</th>
                        <th>Level Income</th>
                        <th>Package Upgrade Income</th>
                        <th>Slot Income</th>
                        <th>Total Income</th>
                        <th>Date & Time</th>
                        {/* <th>Action</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {data.map(
                        (
                          row,
                          index // to be edited  ....index+1 is set as td for S.no
                        ) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{row.user.name}</td>
                            <td><a  target="_blank"
                            href={`https://groways.io/users/${row.user.userId}`}>{row.user.userId}</a></td>
                            <td>{row?.user?.address}</td>
                            <td>{row?.user?.referBy}</td>
                            {/* <td>row.SponserIDfill later</td> */}
                            {/* <td>{row.wallet}</td> */}
                            {/* <td
                            style={{ cursor: 'pointer' }}
                            onClick={() => handleWalletClick(row.WalletAddress)}
                          >
                            {row.WalletAddress}
                          </td> */}
                            {/* <td>{row.time}</td> */}
                            <td>{row.user.refferalIncome}{row.user.refferalIncome >0 && "$"}</td>
                            <td>{row.user.levelIncome}{row.user.levelIncome  >0 && "$"}</td>
                            <td>{row.user.packageIncome}{row.user.packageIncome >0 && "$"}</td>
                            <td>{row.user.slotIncome}{row.user.slotIncome >0 && "$"}</td>
                            <td>
                              {row.user.slotIncome +
                                row.user.packageIncome +
                                row.user.levelIncome +
                                row.user.refferalIncome}{(row.user.slotIncome +
                                  row.user.packageIncome +
                                  row.user.levelIncome +
                                  row.user.refferalIncome)>0 && "$"}
                            </td>
                            <td>{new Date(row.user.createdAt).toLocaleString()}</td>
                            {/* <td>
                            <Button color='primary' onClick={() => handleEditClick(row)}>
                              Edit
                            </Button>
                          </td> */}
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
                {selectedWallet && (
                  <Modal isOpen={true} toggle={() => setSelectedWallet(null)}>
                    <div className="modal-header">
                      <h5 className="modal-title">Wallet Details</h5>
                      <button
                        type="button"
                        className="close"
                        onClick={() => setSelectedWallet(null)}
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <p>Details for Wallet: {selectedWallet}</p>
                    </div>
                    <div className="modal-footer">
                      <Button
                        color="secondary"
                        onClick={() => setSelectedWallet(null)}
                      >
                        Close
                      </Button>
                    </div>
                  </Modal>
                )}
              </div>
            </div>
          </div>
        </Fade>
      </Container>
    </Fragment>
  );
};

export default AllUsers;
