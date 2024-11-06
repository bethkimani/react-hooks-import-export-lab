// components/Home.js
import React from "react";
import { username, city } from "../data/user"; // Correct import

function Home() {
  return (
    <div id="home">
      <h1>
        Welcome, {username} from {city}!
      </h1>
    </div>
  );
}

export default Home;
