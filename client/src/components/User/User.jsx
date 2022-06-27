import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import axios from "axios";
import ToggleActivity from "../ToggleActivity/ToggleActivity";
import "./User.css";

export default function User({ user }) {
  const { _id, isActive, name, company, address } = user;
  const { first, last } = name;
  const [activity, setActivity] = useState(isActive);
  const [digestValue, setDigestValue] = useState([]);
  const navigate = useNavigate();

  const getdigestValue = async () => {
    const { data } = await axios(
      `https://api.hashify.net/hash/md4/hex?value=${first + last}`
    );
    setDigestValue(data.Digest);
  };

  useEffect(() => {
    getdigestValue();
  }, []);

  const handleActivity = async (boolean) => {
    try {
      await axios.post(`http://localhost:3001/${_id}`, { isActive: boolean });
      setActivity(boolean);
    } catch (err) {
      console.log(err);
    }
  };

  const addressFilter = (address) => {
    const addressToArray = address.split(",");
    const filteredAddress = [addressToArray[1], addressToArray[2]];
    return filteredAddress.join(", ");
  };

  const navigateToUserRoute = () => {
    if (activity) {
      navigate(`/customer/${_id}`);
    } else {
      console.log("Can not enter to inactive customer");
    }
  };

  const StyledTableCell = styled(TableCell)({
    color: "whitesmoke",
    padding: 8,
  });

  return (
    <TableRow
      className={!activity ? "notActive" : "active"}
      onDoubleClick={() => {
        navigateToUserRoute();
      }}
    >
      <StyledTableCell align="center">
        <ToggleActivity activity={activity} handleActivity={handleActivity} />
      </StyledTableCell>
      <StyledTableCell align="center">{first}</StyledTableCell>
      <StyledTableCell align="center">{last}</StyledTableCell>
      <StyledTableCell align="center">{company}</StyledTableCell>
      <StyledTableCell align="center">{addressFilter(address)}</StyledTableCell>
      <StyledTableCell align="center">{digestValue}</StyledTableCell>
    </TableRow>
  );
}
