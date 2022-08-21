import tw from "tailwind-styled-components";

export const Container = tw.div`
  w-full 
  pl-4 
  pr-4 
  my-8
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

export const LoadMore = tw.div`
  m-auto
  my-10
  p-2
  text-center
  block
  text-align: center;
  w-[150px]
  bg-red-600
  text-white
  font-bold
  rounded-full
  cursor-pointer
  transition-all
  duration-200
  border-2
  border-white
  outline-2
  outline-red-600

  hover:scale-105
`;
