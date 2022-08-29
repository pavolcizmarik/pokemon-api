import tw from "tailwind-styled-components";

export const Container = tw.div`
  w-full 
  pl-4 
  pr-4 
  mb-8
`;

export const ContainerWrapper = tw.div`
  max-w-[300px]
  m-auto 
  gap-8 
  grid 
  grid-cols-1
  sm:grid-cols-2
  md:grid-cols-3
  lg:grid-cols-4

  sm:max-w-[600px]
  
  md:max-w-7xl 
`;
