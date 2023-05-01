// /Users/alexandermills/Documents/personal_projects/VolunteerPlanner/VP-react/src/App.jsx

// import { createContext, useEffect, useState } from "react";
// import "./App.css";
// // import { SignUp } from "./components/SignUp";
// // import { LogIn } from "./components/LogIn";
// // import { LogIn } from "./components/LoginPage";
// // import { Register } from "./components/RegisterPage";
// // import { currUser, logOut } from "./utilities"; 
// import { currUser } from "./utilities";
// import { getToken } from "./components/CsrfToken";
// import { Outlet } from "react-router-dom";
// import { NavBar } from "./components/NavBar";

// export const UserContext = createContext(null)

// function App() {
//   const [user, setUser] = useState(null);

//   getToken()

//   useEffect(() => {
//     const getCurrUser = async () => {
//       setUser(await currUser());
//     };
//     getCurrUser();
//   }, []);



//   return (
//     <div className="App">
//       <button onClick={()=>logOut(setUser)}>LOG OUT</button>
//       <h1>HELLO {user && user.name}</h1>

//       <NavBar />

//       <UserContext.Provider value={{user, setUser}} >
//         <Outlet />
//       </UserContext.Provider>
//       <footer>© Alex Mills1</footer>
//     </div>
//   );
// }

// export default App;


// import { createContext, useEffect, useState } from "react";
// import "./App.css";
// import { currUser, logOut } from "./utilities"; 
// import { getToken } from "./components/CsrfToken";
// import { Outlet } from "react-router-dom";
// import { NavBar } from "./components/NavBar";

// export const UserContext = createContext(null);

// function App() {
//   const [user, setUser] = useState(null);

//   getToken();

//   useEffect(() => {
//     const getCurrUser = async () => {
//       setUser(await currUser());
//     };
//     getCurrUser();
//   }, []);

//   // const handleLogout = () => {
//   //   logOut(setUser);
//   // };

//   return (
//     <div className="App">
//       {/* <button onClick={handleLogout}>LOG OUT</button> */}
//       <UserContext.Provider value={{ user, setUser }}>
//         <NavBar />
//         <h1>HELLO {user && user.name}</h1>
//         {/* add image here */}
//         <Outlet />
//       </UserContext.Provider>

//       <footer></footer>
//     </div>
//   );
// }

// export default App;



// import { createContext, useEffect, useState } from "react";
// import "./App.css";
// import { currUser, logOut } from "./utilities"; 
// import { getToken } from "./components/CsrfToken";
// import { Outlet } from "react-router-dom";
// import { NavBar } from "./components/NavBar";

// export const UserContext = createContext(null);

// function App() {
//   const [user, setUser] = useState(null);

//   getToken();

//   useEffect(() => {
//     const getCurrUser = async () => {
//       setUser(await currUser());
//     };
//     getCurrUser();
//   }, []);

//   return (
//     <div className="App">
//       <UserContext.Provider value={{ user, setUser }}>
//         <NavBar />
//         <h1>HELLO {user && user.name}</h1>
//         <Outlet />
//       </UserContext.Provider>

//       <footer></footer>
//     </div>
//   );
// }

// export default App;


import { createContext, useEffect, useState } from "react";
import "./App.css";
import { currUser, logOut } from "./utilities"; 
import { getToken } from "./components/CsrfToken";
import { Outlet } from "react-router-dom";
import { NavBar } from "./components/NavBar";

export const UserContext = createContext(null);

function App() {
  const [user, setUser] = useState(null);

  getToken();

  useEffect(() => {
    const getCurrUser = async () => {
      setUser(await currUser());
    };
    getCurrUser();
  }, []);

  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>
        <NavBar />
        {/* <h1>Hello {user && user.name && user.name.toUpperCase()}</h1> */}
        <Outlet />
      </UserContext.Provider>

      <footer></footer>
    </div>
  );
}

export default App;
