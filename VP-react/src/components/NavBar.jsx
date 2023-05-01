// /Users/alexandermills/Documents/personal_projects/VolunteerPlanner/VP-react/src/components/NavBar.jsx
import { Link } from "react-router-dom"
import { logOut } from "../utilities";
import { UserContext } from "../App";
import { useContext } from 'react';
import "./Button.css";

export const NavBar = ()=> {

    const { user, setUser } = useContext(UserContext);

    const handleLogout = () => {
        logOut(setUser);
    };

    return (
        <div className="nav-buttons">
        {user ? (

            <>
                <h1>Hello {user && user.name && user.name.toUpperCase()}</h1>
                <Link to="/">
                    <button className="nav-button" onClick={handleLogout}>LOG OUT</button>
                </Link>
                <Link to="/user/dashboard">
                    <button className="nav-button">Dashboard</button>
                </Link>
            </>
        ) : (
            <>
                <Link to="/register">
                        <button className="nav-button">Register</button>
                </Link>
                <Link to="/login/">
                        <button className="nav-button">Login</button>
                </Link>
            </>
        )}
        </div>
    );
};

// // /Users/alexandermills/Documents/personal_projects/VolunteerPlanner/VP-react/src/components/NavBar.jsx
// import { Link } from "react-router-dom"
// import { logOut } from "../utilities";
// import { UserContext } from "../App";
// import { useContext } from 'react';
// import "./Button.css";

// export const NavBar = () => {

//     const { user, setUser } = useContext(UserContext);

//     const handleLogout = () => {
//         logOut(setUser);
//     };

//     return (
//         <div className="nav-buttons">
//         {user ? (
//             <>
//                 <Link to="/user/dashboard">
//                     <button className="nav-button">Dashboard</button>
//                 </Link>
//                 <button to="/" className="nav-button" onClick={handleLogout}>Log Out</button>
//             </>
//         ) : (
//             <>
//                 <Link to="/login">
//                     <button className="nav-button">Log In</button>
//                 </Link>
//                 <Link to="/register">
//                     <button className="nav-button">Register</button>
//                 </Link>
//             </>
//         )}
//         </div>
//     );
// };
