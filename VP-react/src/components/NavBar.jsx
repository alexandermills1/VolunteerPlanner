// /Users/alexandermills/Documents/personal_projects/VolunteerPlanner/VP-react/src/components/NavBar.jsx
import { Link } from "react-router-dom"
import { logOut } from "../utilities";
import { UserContext } from "../App";
import { useContext } from 'react';



export const NavBar = ()=> {

    const { user, setUser } = useContext(UserContext);

    const handleLogout = () => {
    logOut(setUser);
    };
    return (
        <div>
        <h1>NAVBAR....</h1>

        {user ? (
            <button onClick={handleLogout}>LOG OUT</button>
        ) : (
            <>
            <Link to="/register">Register</Link>
            <Link to="/login/">Login</Link>
            </>
        )}
        </div>
    );
};
