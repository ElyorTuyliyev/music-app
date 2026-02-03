"use client";
import Image from "next/image";
import { IconName, icons } from "./icons";

type Props = {
  name: IconName;
  size?: number;
  className?: string;
};

export const AppIcon = ({ name, size = 24, className }: Props) => {
  const icon = icons[name];
  return (
    <Image
      src={icon.toString()}
      alt={name}
      width={size}
      height={size}
      className={className}
    />
  );
};
