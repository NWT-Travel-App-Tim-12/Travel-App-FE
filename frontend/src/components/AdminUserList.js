import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import { UserApi } from "../api/userApi";

export function AdminUserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = (await UserApi.getAllUsers()).data;
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="table-container">
      <h3>Users</h3>
      {loading && <Loader />}

      <table className="bs">
        <thead>
          <tr>
            <th>User Id:</th>
            <th>Role:</th>
            <th>Agency Ref:</th>
            <th>First Name:</th>
            <th>Last Name:</th>
            <th>Address:</th>
            <th>Email:</th>
            <th>Administrator Agency:</th>
            <th>Password:</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td data-label="User Id:">{user.id}</td>
              <td data-label="Role:">{user.role}</td>
              <td data-label="Agency ID:">{user.agencyRef || "None"}</td>
              <td data-label="First Name:">{user.firstName}</td>
              <td data-label="Last Name:">{user.lastName}</td>
              <td data-label="Address:">{user.address}</td>
              <td data-label="Email:">{user.email}</td>
              <td data-label="Administrator Agency:">
                {user.administratorAgency || "None"}
              </td>
              <td data-label="Password:">{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <br />
    </div>
  );
}
export default AdminUserList;
