// VP-react/src/components/RegisterLoginPage.jsx
import { useContext, useState } from "react";
import { logIn } from "../utilities";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";

export const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const success = await logIn(email, password, setUser);

    if (success) {
      navigate("/user/dashboard");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleLogin}>
      <h3>Log In</h3>
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
      <input type="submit" value="Log In" />
    </form>
  );
};
