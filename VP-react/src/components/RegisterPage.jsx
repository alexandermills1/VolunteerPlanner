// /Users/alexandermills/Documents/personal_projects/VolunteerPlanner/VP-react/src/components/RegisterPage.jsx
// import { useEffect, useState } from "react";
import { useState } from "react";
import { signUp } from "../utilities";

export const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <form
      onSubmit={(e) => [
        e.preventDefault(),
        signUp(firstName, lastName, email, password),
        setEmail(""),
        setPassword(""),
        setFirstName(""),
        setLastName(""),

      ]}
      style={{ display: "flex", flexDirection: "column" }}
        >
        <h3>Register</h3>
        <input
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
        />
        <input
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
        />
        <input
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <input
            placeholder="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Submit!" />
    </form>
  );
};