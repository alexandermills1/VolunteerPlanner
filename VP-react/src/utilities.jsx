// /Users/alexandermills/Documents/personal_projects/VolunteerPlanner/VP-react/src/utilities.jsx
import axios from 'axios';

export const signUp = async (firstName, lastName, email, password) => {
    let response = await axios.post('/register/', {
        first_name: firstName, // Change this line
        last_name: lastName, // Change this line
        email: email,
        password: password,
    });
    console.log(response.data.success);
    return response.data.success;
  };


// export const logIn = async(email, password, setUser) => {
//     let response = await axios.post('/user/login/', {
//         'email' : email,
//         'password' : password
//     })

//     console.log("Login response data:", response.data); // Add this line to check the response data

//     setUser(response.data)
//     return response.data.success; // Add this line
// }

export const logIn = async(email, password, setUser) => {
    let response = await axios.post('/user/login/', {
        'email' : email,
        'password' : password
    })

    console.log("Login response data:", response.data);

    if (response.data.email) { // Check for the email property in the response data
      setUser(response.data);
      return true; // Return true to indicate a successful login
    }

    return false; // Return false if the login was not successful
}


export const currUser = async() =>{
    let response = await axios.get('/user/curruser/')
    console.log(response.data)
    return response.data
}

export const logOut = async(setUser) => {
    let response = await axios.post('/user/logout/')
    if(response.data.logout){
        setUser(null)
    }
}