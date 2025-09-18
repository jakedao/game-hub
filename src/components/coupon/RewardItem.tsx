"use client";

import { TReward } from "@/types/coupon";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

type TOwnProps = {
  quantity: number;
  type: keyof TReward;
};

const RewardItem = (props: TOwnProps) => {
  const { quantity, type } = props;

  if (!quantity) return null;

  const rewardTypeMapper = {
    manaStone: "/images/mana.png",
    crystals: "/images/crystal.png",
    otherItems: "/images/item.png",
    energies: "/images/energy.png",
    summonStones: "/images/summon-stone.png",
    mysticScrolls: "/images/mystic-scroll.png",
    legendaryScrolls: "/images/mystic-scroll.png",
    windScrolls: "/images/wind-scroll.png",
    fireScrolls: "/images/fire-scroll.png",
    waterScrolls: "/images/water-scroll.png",
    dlScrolls: "/images/dl-scroll.png",
  };

  return (
    <Box display="flex" alignItems="center">
      <Typography marginRight="0.2rem">{quantity}</Typography>
      <Image src={rewardTypeMapper[type]} alt={type} width={20} height={20} />
    </Box>
  );
};

export default RewardItem;
