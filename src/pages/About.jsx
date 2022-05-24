import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h1>About us</h1>
      <p>This is a demo website about React-router-dom library.</p>
      <ul>
        <li>
          <Link to='contacts'>Contacts</Link>
        </li>
        <li>
          <Link to='team'>Team</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
