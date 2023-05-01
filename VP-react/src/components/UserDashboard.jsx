// VP-react/src/components/UserDashboard.jsx
import React from "react";
import { CalendarComponent } from './Calendar';

export default function UserDashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <CalendarComponent />
      <p>Currently signed up for:</p>
      <p>Date 1 ... button to Unregister, plus/minus amount of guests</p>
      <p>Date 2 ... button to unregister, plus/minus amount of guests</p>
    </div>
  );
}
