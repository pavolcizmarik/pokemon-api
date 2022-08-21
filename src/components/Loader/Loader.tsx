import React from "react";

import { LoaderContainer } from "./Loader.styled";
import { LoaderIcon } from "./Loader.styled";

export const Loader: React.FC = () => {
  return (
    <>
      <LoaderContainer>
        <LoaderIcon />
      </LoaderContainer>
    </>
  );
};
