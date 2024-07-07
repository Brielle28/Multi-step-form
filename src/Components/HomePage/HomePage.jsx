import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Arcade</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus,
        velit vel consectetur consectetur, justo nunc congue neque, non
        ultricies ligula enim in nunc. Nullam vel diam vel purus dictum
        pulvinar.
      </p>
      <Link to="/personalinfo">
        <button>Start your journey</button>
      </Link>
    </div>
  );
};

export default HomePage;
