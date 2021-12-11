import React, { useState } from "react";
import UserTable from "./components/UserTable.jsx";
import { v4 as uuidv4 } from "uuid";
import AddUserForm from "./components/AddUserForm.jsx";
import EditUserForm from "./components/EditUserForm.jsx";

const App = () => {
  const usersData = [];

  const [users, setUsers] = useState(usersData);

  const addUser = (user) => {
    user.id = uuidv4();
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const [editing, setEditing] = useState(false);

  const [connect, setConnect] = useState(false);

  const [currentUser, setCurrentUser] = useState({
    id: null,
    name: "",
    username: "",
    status: false,
  });

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username,
      status: user.status,
    });
  };

  const updateUser = (id, updateUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updateUser : user)));
  };

  const connectUser = (user) => {
    user.status = connect;
    setConnect(!connect);
    
  };

  return (
    <div className="container">
      <h1>Ejercicios OB React 7-8-9</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm currentUser={currentUser} updateUser={updateUser} />
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable
            users={users}
            deleteUser={deleteUser}
            editRow={editRow}
            connectUser={connectUser}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
