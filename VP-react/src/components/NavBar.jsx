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
                {/* <Link to="/" className="nav-button">APP</Link> */}
                <Link to="/" className="nav-button" onClick={handleLogout}>LOG OUT</Link>
            </>
            // <button className="nav-button" onClick={handleLogout}>LOG OUT</button>
        ) : (
            <>
            <Link to="/register" className="nav-button">Register</Link>
            <Link to="/login/" className="nav-button">Login</Link>
            </>
        )}
        </div>
    );
};


// export const NavBar = ()=> {
//     const { user, setUser } = useContext(UserContext);
  
//     const handleLogout = () => {
//       logOut(setUser);
//     };
  
//     // Show Register and Login buttons by default
//         const defaultButtons = (
//         <>
//             <Link to="/register" className="nav-button">
//             Register
//             </Link>
//             <Link to="/login/" className="nav-button">
//             Login
//             </Link>
//         </>
//         );
    
//         return (
//         <div className="nav-buttons">
//             {user ? (
//                 // <button className="nav-button" onClick={handleLogout}>
//                 //     LOG OUT
//                 // </button>
//                 defaultButtons
//             ) : (
//                 // defaultButtons
//                 <button className="nav-button" onClick={handleLogout}>
//                     LOG OUT
//                 </button>
//             )}
//         </div>
//         );
//     };
  
  