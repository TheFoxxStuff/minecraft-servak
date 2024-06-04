import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Сервак",
  DESCRIPTION: "",
  EMAIL: "foxx_remix@mail.ru",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Главная",
  DESCRIPTION: "",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "Discord",
    HREF: "https://discord.gg/HkH3Nkmeh7",
  },
];
