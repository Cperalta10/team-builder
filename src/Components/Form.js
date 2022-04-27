import React from "react";
import { GiSoccerBall } from "react-icons/gi";

export default function Form(props) {
  const { values, players, update, submit } = props;

  const onChange = (e) => {
    const { name, value } = e.target;
    update(name, value);
  };

  return (
    <div>
      <h1>
        <GiSoccerBall /> Soccer Tryout Form
      </h1>
      <h3>
        Players who have successfully submitted their form should appear below.
      </h3>
      {players.map((player, idx) => {
        return (
          <p key={idx}>
            Name: {player.firstName} {player.lastName}, Email: {player.email},
            Date of Birth: {player.age}, Position: {player.position}
          </p>
        );
      })}
      <form onSubmit={submit}>
        <label>
          First Name
          <input
            type="text"
            onChange={onChange}
            value={values.firstName}
            name="firstName"
            id="firstName"
          ></input>
        </label>
        <label>
          Last Name
          <input
            type="text"
            onChange={onChange}
            value={values.lastName}
            name="lastName"
            id="lastName"
          ></input>
        </label>
        <label>
          Email
          <input
            type="email"
            onChange={onChange}
            value={values.email}
            name="email"
            id="email"
          ></input>
        </label>
        <label>
          Age
          <input
            onChange={onChange}
            value={values.age}
            type="age"
            min="1"
            max="5"
            name="dateOfBirth"
            id="dateOfBirth"
          ></input>
        </label>
        <label>
          Position
          <select
            value={values.position}
            onChange={onChange}
            name="position"
            id="position"
          >
            <option value="">-- Select a Position --</option>
            <option value="Defender">Defender</option>
            <option value="Midfielder">Midfielder</option>
            <option value="Foward">Foward</option>
          </select>
        </label>
        <input type="submit"></input>
      </form>
    </div>
  );
}
