import { useEffect, useState } from "react";
import { AddNewUser } from "./components/addnewuser";
import Header from "./components/Header";
import USERLIST from "./components/UserList";
import "./styles.css";

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
      res.json().then((bar) => {
        setUsers(bar);
      });
    });
  }, []);

  const handleAddUser = (newUser) => {
    setUsers([...users, { name: newUser }]);
  };

  return (
    <div className="App">
      <div>
        {users.length > 0 && <Header name={users[users.length - 1].name} />}
      </div>
      <div>
        <AddNewUser onAddUser={(user) => handleAddUser(user)} />
      </div>
      <div>
        <USERLIST users={users} />
      </div>
    </div>
  );
}
