import React from 'react';
import './UsersTable.css';
import { EditIcon } from '../../assets/Icons';
import { DeleteIcon } from '../../assets/Icons';

const UsersTable = ({ users }) => {
  return (
    <div className='container'>
      <div className="search-container">
            <input className='search' type='text' placeholder="Search" />
            <img src = {DeleteIcon} className="master-delete"/>
          </div>

      <div className='table-container'>
      <table className='users-table'>
        <thead className='table-header'>
          <tr>
            <th>
            <input type="checkbox" />
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th className='actions'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, id) => (
            <tr key={user.id} className='table-row'>
              <td>
              <input type="checkbox"/>
            </td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <img src = {EditIcon} className='edit'/>
                <img src = {DeleteIcon} className='delete'/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    
  );
};

export default UsersTable;
