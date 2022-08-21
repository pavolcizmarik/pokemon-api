import React from "react";

import logo from "../../assets/logo.png";

export const Header: React.FC = () => {
  return (
    <>
      <div className="w-full pl-4 pr-4 bg-red-600">
        <div className="max-w-7xl m-auto">
          <img src={logo} alt="logo" className="d-block w-40 py-4" />
        </div>
      </div>
    </>
  );
};
