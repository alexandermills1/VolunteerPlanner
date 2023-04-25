// /Users/alexandermills/Documents/personal_projects/VolunteerPlanner/VP-react/src/components/NavBar.jsx
import { Link } from "react-router-dom"
import { logOut } from "../utilities";
import { UserContext } from "../App";
import { useContext } from 'react';
// import { currUser, logOut } from "./utilities";


// const { setUser } = useContext(UserContext);


export const NavBar = ()=> {
    // const [user, setUser] = useState(null);

    // getToken()
  
    // useEffect(() => {
    //   const getCurrUser = async () => {
    //     setUser(await currUser());
    //   };
    //   getCurrUser();
    // }, []);

//     return (
//         <div>
//             <h1>NAVBAR....</h1>
//             {/* <Link to="/" onClick={() => logOut(setUser)}>LOG OUT</Link> */}
//             <Link to={'/register'}>Register</Link>
//             <Link to={'/login/'}>Login</Link>
//         </div>
//     )
// }
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



// // import { Link } from "react-router-dom";
// import { logOut } from "../utilities";
// import { UserContext } from "../App";
// import { useContext } from "react";
// import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap";

// export const NavBar = () => {
//   const { user, setUser } = useContext(UserContext);

//   const handleLogout = () => {
//     logOut(setUser);
//   };
//   return (
//     <Navbar bg="light" expand="lg">
//       <Container>
//         <LinkContainer to="/">
//           <Navbar.Brand>Volunteer Planner</Navbar.Brand>
//         </LinkContainer>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             {user ? (
//               <>
//                 <Nav.Link onClick={handleLogout}>LOG OUT</Nav.Link>
//               </>
//             ) : (
//               <>
//                 <LinkContainer to="/register">
//                   <Nav.Link>Register</Nav.Link>
//                 </LinkContainer>
//                 <LinkContainer to="/login">
//                   <Nav.Link>Login</Nav.Link>
//                 </LinkContainer>
//               </>
//             )}
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };
