import React from "react";
import { Link } from "react-scroll";

const Button = ({ text, to }) => {
  return (
    <button className="get-started">
      <Link to={to} smooth={true} duration={500}>
        {text}
      </Link>
    </button>
  );
};

export default Button;
