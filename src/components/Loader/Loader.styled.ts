import tw from "tailwind-styled-components";

// css pokeball

export const LoaderContainer = tw.div`
  absolute
  inset-0
  flex
  h-screen
  w-screen
  items-center
  justify-center
  bg-white/50
`;

export const LoaderIcon = tw.div`
  relative
  h-[250px]
  w-[250px]
  border-[13px]
  border-neutral-800
  rounded-full
  bg-image-pokeball-pattern
  animate-bounce

  before:absolute
  before:conent-[""]
  before:h-[25px]
  before:bg-neutral-800
  before:top-1/2
  before:left-0
  before:right-0
  before:translate-y-[-50%]

  after:transform-gpu
  after:absolute
  after:content-[""]
  after:h-[90px]
  after:w-[90px]
  after:bg-image-pokeball-button
  after:rounded-full
  after:top-1/2
  after:left-1/2
  after:translate-y-[-50%]
  after:translate-x-[-50%]
`;
