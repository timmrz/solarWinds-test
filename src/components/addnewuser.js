import { useState } from "react";
import UserInformation from "./UserInformation";

export const AddNewUser = ({ onAddUser }) => {
  const [age, setAge] = useState("");
  const [newName, setName] = useState("");

  const submitForm = () => {
    if (age < 18) {
      alert("You are not old enough to be our employee");
    } else {
      alert("Submiting form for " + newName);
      onAddUser(newName);
      setAge("");
      setName("");
    }
  };

  const userData = { age };

  return (
    <div style={{ background: "#2ab92a", padding: 20 }}>
      <input
        value={newName}
        type="text"
        onChange={(event) => setName(event.target.value)}
        placeholder="Type your name"
      />
      <input
        type="number"
        onChange={(event) => setAge(event.target.value)}
        value={age}
        placeholder="Type your age"
      />
      <button onClick={submitForm}>Submit form</button>
      <UserInformation data={userData} />
    </div>
  );
};
