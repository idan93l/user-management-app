import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../../components/Loader/Loader";
import ToggleActivity from "../../components/ToggleActivity/ToggleActivity";
import "./Customer.css";
import BackToCustomers from "../../components/buttons/BackToCustomers/BackToCustomers";

export default function Customer() {
  const params = useParams();
  const [user, setUser] = useState();
  const [activity, setActivity] = useState(!params.isActive);
  // const { name, company, address, email, phone, age, eyeColor, balance, about, registered, picture } = user;
  // const {first, last} = name;

  const getUser = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3001/${params.id}`);
      setUser(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleActivity = async (boolean) => {
    try {
      await axios.post(`http://localhost:3001/${params.id}`, {
        isActive: boolean,
      });
      setActivity(boolean);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <BackToCustomers />
      {!user ? (
        <Loader />
      ) : (
        <div className="Customer">
          <div className="CustomerContainer">
            <div className="upperContainer">
              <div className="imageContainer">
                <img src="https://picsum.photos/300/300" alt={user.picture} />
                <div className="nameContainer">
                  <div className="large">{user.name.first}</div>
                  <div className="large">{user.name.last}</div>
                  <ToggleActivity
                    activity={activity}
                    handleActivity={handleActivity}
                  />
                </div>
              </div>
              <div className="dataContainer">
                <div className="innerDataContainer">
                  <div className="medium">Email: {user.email}</div>
                  <div className="medium">Phone: {user.phone}</div>
                  <div className="medium">Address: {user.address}</div>
                  <div className="medium">Company: {user.company}</div>
                  <div className="medium">Age: {user.age}</div>
                  <div className="medium">Balance: {user.balance}</div>
                  <div className="medium">Eye Color: {user.eyeColor}</div>
                  <div className="medium">Registered: {user.registered}</div>
                  <div className="small">About: {user.about}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
