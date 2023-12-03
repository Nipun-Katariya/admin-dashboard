import UsersTable from './components/table/UsersTable';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json", {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);
  
    return (
      <div>
        <UsersTable users = {users}/>
        Icons by <a target="_blank" href="https://icons8.com">Icons8</a>
      </div>
    );
}

export default App;
