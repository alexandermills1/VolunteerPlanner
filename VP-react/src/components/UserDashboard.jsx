// VP-react/src/components/UserDashboard.jsx
import React from "react";
import { CalendarComponent } from './Calendar';

export default function UserDashboard() {
  return (
    <div>
      <h1>User Dashboard1</h1>
      <CalendarComponent />
    </div>
  );
}



// import React from "react";
// import { CalendarComponent } from './Calendar';


// export default function UserDashboard() {
//   const handleDateClick = (date) => {
//     console.log("Date clicked:", date);
//     // Navigate to another page or perform other actions with the selected date
//   };

//   return (
//     <div>
//       <h1>User Dashboard1</h1>
//       {/* <Calendar onDateClick={handleDateClick} /> */}
//       <CalendarComponent onDateClick={handleDateClick} />
//     </div>
//   );
// }

