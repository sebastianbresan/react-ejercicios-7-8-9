import React from "react";
import on from '../assets/on.png'
import off from '../assets/off.png'

const UserTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.status ? "Disconnected" : "Connected"} {user.status ? <img src={off} alt=""/> : <img src={on} alt=""/>}</td>
            <td>
              <button
                className="button muted-button"
                onClick={() => props.editRow(user)}
              >
                Edit
              </button>
              <button
                className="button muted-button"
                onClick={() => props.deleteUser(user.id)}
              >
                Delete
              </button>
              <button
                className="button muted-button"
                onClick={() => props.connectUser(user)}
              >
                {user.status ? "Connect" : "Disconnect"}
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users in database</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;
