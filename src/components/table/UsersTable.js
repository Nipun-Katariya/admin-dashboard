import React from 'react';
import './UsersTable.css';
import { EditIcon } from '../../assets/Icons';
import { DeleteIcon } from '../../assets/Icons';

const UsersTable = ({ users }) => {
  return (
    <div className='users-table'>
      <table>
        <thead>
          <tr>
            <th>
            <input type="checkbox" />
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, id) => (
            <tr key={user.id}>
              <td>
              <input type="checkbox"/>
            </td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td className='actions'>
                <img src = {EditIcon} />
                <img src = {DeleteIcon} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
