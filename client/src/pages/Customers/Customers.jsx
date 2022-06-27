import React from "react";
import { Outlet } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import User from "../../components/User/User";
import Loader from "../../components/Loader/Loader";
import BackToHeader from "../../components/buttons/BackToHeader/BackToHeader";
import "./Customers.css";

export default function Customers({ users }) {
  const StyledTableCell = styled(TableCell)({
    backgroundColor: "black",
    color: "whitesmoke",
  });

  return (
    <div className="Customers">
      <BackToHeader/>
      {!users ? (
        <Loader />
      ) : (
        <>
          <TableContainer component={Paper} sx={{ maxHeight: "100vh" }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">Activity</StyledTableCell>
                  <StyledTableCell align="center">First Name</StyledTableCell>
                  <StyledTableCell align="center">Last Name</StyledTableCell>
                  <StyledTableCell align="center">Company</StyledTableCell>
                  <StyledTableCell align="center">City, State</StyledTableCell>
                  <StyledTableCell align="center">Digest Value</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => {
                  return <User key={user._id} user={user} />;
                })}
                <Outlet />
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </div>
  );
}
