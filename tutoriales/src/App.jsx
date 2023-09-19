import React, { useState } from "react";
import "./App.css";
import UserTable from "./components/UserTables";
import AddUserForm from "./components/AddUserForm";
import EditUserForm from "./components/EditUserForm";

function App() {
  const usersData = [
    { id: 1, name: "Tania", username: "floppy" },
    { id: 2, name: "craig", username: "silppy" },
    { id: 3, name: "Ben", username: "artpy" },
  ];

  const [users, SetUsers] = useState(usersData);
  const addUser = (user) => {
    user.id = users.length + 1;
    SetUsers([...users, user]);
  };
  const deleteUSer = (id) => {
    SetUsers(users.filter((user) => user.id !== id));
  };
  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, name: "", username: "" };
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };
  const updateUser = (id, updateUser) => {
    setEditing(false);
    SetUsers(users.map((user) => (user.id === id ? updateUser : user)));
  };

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <EditUserForm
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div className="">
              <h2>Add user</h2>
              <AddUserForm addUser={addUser}></AddUserForm>
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUSer} />
        </div>
      </div>
    </div>
  );
}

export default App;
