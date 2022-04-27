import "./App.css";
import Form from "./Components/Form";
import React, { useState } from "react";

// Soccer tryout forms

const playerData = [
  {
    firstName: "Christopher",
    lastName: "Peralta",
    email: "chrisperalta@gmail.com",
    age: 24,
    position: "Foward",
  },
  {
    firstName: "Casey",
    lastName: "Harding",
    email: "BestInstructor@bloomtech.com",
    age: "unknown",
    position: "Midfielder",
  },
];

function App() {
  const [playerForms, setPlayerForms] = useState(playerData);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    position: "",
  });

  const update = (key, value) => {
    setFormValues({ ...formValues, [key]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    setPlayerForms(
      playerForms.concat({
        firstName: formValues.firstName,
        lastName: formValues.lastName,
        email: formValues.email,
        age: formValues.age,
        position: formValues.position,
      })
    );
    setFormValues({
      firstName: "",
      lastName: "",
      email: "",
      age: "",
      position: "",
    });
  };

  return (
    <div className="App">
      <Form
        values={formValues}
        players={playerForms}
        update={update}
        submit={submit}
      />
    </div>
  );
}

export default App;
