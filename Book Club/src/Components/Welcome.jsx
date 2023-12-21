import React from "react";
import { Link, useNavigate } from 'react-router-dom';


export const Welcome = () => {
  return (
    <div className="msg-container">
      <h2 className="welcome-msg">
        Discover the joy of curating your own literary haven with our Personal
        Book Library platform. Here, your love for books takes center stage, and
        we're thrilled to guide you through the wonderful features awaiting you
      </h2>
      <Link className='discover-btn' to={"/Books"}>
        Discover Books
        </Link>
    </div>
  );
};
