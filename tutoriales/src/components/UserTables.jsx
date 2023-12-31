import React from "react";

const UserTable = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {props.users.length > 0 ? (
          props.users.map((users) => (
            <tr>
              <td>{users.name}</td>
              <td>{users.username}</td>
              <td>
                <button
                  className="button muted-button"
                  onClick={() => {
                    props.editRow(users);
                  }}
                >
                  Edit
                </button>
                <button
                  className="button muted-button"
                  onClick={() => props.deleteUser(users.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No users</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default UserTable;
