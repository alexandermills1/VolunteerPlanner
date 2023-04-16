// /Users/alexandermills/Documents/personal_projects/VolunteerPlanner/VP-react/src/router.jsx
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./components/ErrorPage";
import HomePage from "./components/HomePage";
import UserDashboard from "./components/UserDashboard";
import EventCreationPage from "./components/EventCreationPage";
import EventDetailsPage from "./components/EventDetailsPage";
import EventOrganizerDashboard from "./components/EventOrganizerDashboard";
import RegisterLoginPage from "./components/RegisterLoginPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "user/dashboard",
                element: <UserDashboard />,
            },
            {
                path: "event/create",
                element: <EventCreationPage />,
            },
            {
                path: "event/:eventId",
                element: <EventDetailsPage />,
            },
            {
                path: "organizer/dashboard",
                element: <EventOrganizerDashboard />,
            },
            {
                path: "register-login",
                element: <RegisterLoginPage />,
            },
        ],
    },
]);

export default router;