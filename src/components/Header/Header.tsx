import React from "react";

import { EXT_IMG } from "../../constants";

export const Header: React.FC = () => {
  return (
    <>
      <div className="w-full pl-4 pr-4 bg-red-600">
        <div className="max-w-7xl m-auto">
          <img src={EXT_IMG.LOGO} alt="logo" className="d-block w-40 py-4" />
        </div>
      </div>
    </>
  );
};
