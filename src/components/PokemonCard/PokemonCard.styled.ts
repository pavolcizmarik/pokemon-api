import tw from "tailwind-styled-components";

import { handleColorType } from "../../utils";

interface IPokeType {
  type: string;
}

export const Card = tw.div<IPokeType>`
    ${({ type }: IPokeType) => handleColorType(type)}
    relative
    flex
    items-center
    justify-center
    flex-col
    w-full
    max-w-[300px]
    relative
    py-[20px]
    px-[20px]
    rounded-lg
    shadow-lg
    ease-in-out
    duration-200
    cursor-pointer

    hover:scale-105
    hover:shadow-xl
    hover:z-50

    after:content=['']
    after:absolute
    after:block
    after:bg-white/10
    after:top-0
    after:right-0
    after:left-1/2
    after:bottom-0
    after:transition-all
    after:ease-in-out

    hover:after:left-full
`;

export const CardHealth = tw.div`
    w-[80px]
    bg-white
    text-center
    py-2
    rounded-full
    ml-auto
    font-semibold
`;

export const CardImgWrapper = tw.div`
    flex
    justify-center
    align-center
    w-full
    h-[200px]
`;

export const CardImg = tw.img`
    block
    max-w-[200px]
    max-h-[200px]
    w-full
    h-auto
`;

export const CardName = tw.div`
    text-center
    font-bold
    my-4
    capitalize
    text-xl
`;

export const CardBadge = tw.div`
    text-center
    font-bold
    text-sm
    capitalize
    px-4
    text-slate-500
    mx-2
    rounded-full
    border-2
    radius-full
`;

export const CardType = tw.div`
    flex
    justify-around
    mb-4
`;

export const CardStats = tw.div`
    text-slate-500
    flex
    flex-col
    align-center
    justify-between
    text-center
    w-full
`;

export const CardStatsAttr = tw.span`
    font-bold
`