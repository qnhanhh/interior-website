import { StaticImageData } from "next/image";

export type blogType = {
  info: {
    imageIndex: number;
    title: string;
    date: string;
    tag: string;
  };
};

export type buttonType = {
  content: string;
  type: string;
};

export type projectType = {
  src: StaticImageData;
};

export type testimonialType = {
  username: string;
  location: string;
  content: string;
  avatarIndex: number;
};

export type workType = {
  title: string;
  content: string;
};