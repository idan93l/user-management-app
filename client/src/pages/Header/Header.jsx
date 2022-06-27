import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import ToTable from "../../components/buttons/ToTable/ToTable";
import "./Header.css";

export default function Header({ users }) {
  const [userCount, setUserCount] = useState();
  const activeUsersCount = () => {
    let counter = 0;
    users.forEach((user) => {
      if (user.isActive === true) {
        counter++;
      }
    });
    setUserCount(counter);
  };

  useEffect(() => {
    activeUsersCount();
  });

  return (
    <div>
      {!userCount ? (
        <Loader />
      ) : (
        <div className="Header">
          <div className="container">
            <div className="head">User Management</div>
            <div className="subHead">{userCount} Active users</div>
            <ToTable />
          </div>
        </div>
      )}
    </div>
  );
}
