import { Project } from "@/types/project";
import { useTranslation } from "react-i18next";
import { FaDocker, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import {
  SiDart,
  SiExpo,
  SiFlutter,
  SiI18Next,
  SiMongodb,
  SiNestjs,
  SiPostgresql,
  SiStyledcomponents,
  SiTailwindcss,
} from "react-icons/si";
import {
  TbBrandFigma,
  TbBrandJavascript,
  TbBrandTypescript,
} from "react-icons/tb";

export function useGetProjectsData() {
  const { t } = useTranslation();

  const projectsData: Project[] = [
    {
      id: 1,
      type: "university",
      title: t("projectsData.songz.title"),
      image: "songz.png",
      description: t("projectsData.songz.description"),
      projectLink: "https://grafos-songz.vercel.app",
      repositoryLink: "https://github.com/zzzBECK/grafos-songz",
      badges: [
        {
          text: "Next.js",
          icon: FaReact,
        },
        {
          text: "Typescript",
          icon: TbBrandTypescript,
        },
        {
          text: "Tailwind",
          icon: SiTailwindcss,
        },
      ],
    },
    {
      id: 2,
      type: "freelance",
      title: t("projectsData.minamualanon.title"),
      image: "minamualanon.png",
      description: t("projectsData.minamualanon.description"),
      projectLink: "https://www.minamualanon.com",
      badges: [
        {
          text: "Next.js",
          icon: FaReact,
        },
        {
          text: "Typescript",
          icon: TbBrandTypescript,
        },
        {
          text: "Tailwind",
          icon: SiTailwindcss,
        },
      ],
    },
    {
      id: 3,
      type: "university",
      title: t("projectsData.echoeasy.title"),
      image: "echoeasy.png",
      description: t("projectsData.echoeasy.description"),
      projectLink: "https://mdsreq-fga-unb.github.io/2024.1-Echoeasy/#/",
      repositoryLink: "https://github.com/mdsreq-fga-unb/2024.1-Echoeasy",
      badges: [
        {
          text: "Next.js",
          icon: FaReact,
        },
        {
          text: "Nest.js",
          icon: SiNestjs,
        },
        {
          text: "Native",
          icon: FaReact,
        },
        {
          text: "Expo",
          icon: SiExpo,
        },
        {
          text: "MongoDB",
          icon: SiMongodb,
        },
        {
          text: "Firebase",
          icon: IoLogoFirebase,
        },
      ],
    },
    {
      id: 4,
      type: "freelance",
      title: t("projectsData.iucai.title"),
      image: "iucai.png",
      description: t("projectsData.iucai.description"),
      projectLink: "https://iucai.info",
      badges: [
        {
          text: "Next.js",
          icon: FaReact,
        },
        {
          text: "Typescript",
          icon: TbBrandTypescript,
        },
        {
          text: "i18next",
          icon: SiI18Next,
        },
        {
          text: "Tailwind",
          icon: SiTailwindcss,
        },
      ],
    },
    {
      id: 5,
      type: "freelance",
      title: t("projectsData.mec.title"),
      image: "mec.png",
      description: t("projectsData.mec.description"),
      repositoryLink: "https://github.com/zzzBECK/validation-forms",
      projectLink: "https://zzzbeck.github.io/validation-forms",
      badges: [
        {
          text: "Vite.js",
          icon: FaReact,
        },
        {
          text: "Typescript",
          icon: TbBrandTypescript,
        },
        {
          text: "Tailwind",
          icon: SiTailwindcss,
        },
      ],
    },
    {
      id: 6,
      type: "freelance",
      title: t("projectsData.brasequip.title", "Brasequip"),
      image: "brasequip.png",
      description: t(
        "projectsData.brasequip.description",
        "Development of an Institutional Website for Brasequip using React.js/Vite.js with TypeScript and Figma for prototyping, with RAD methodology."
      ),
      projectLink: "https://brasequip.com.br",
      badges: [
        {
          text: "Vite.js",
          icon: FaReact,
        },
        {
          text: "Typescript",
          icon: TbBrandTypescript,
        },
        {
          text: "Figma",
          icon: TbBrandFigma,
        },
        {
          text: "Styled",
          icon: SiStyledcomponents,
        },
      ],
    },
    {
      id: 7,
      type: "university",
      title: t("projectsData.fearAndHunger.title", "Fear & Hunger"),
      image: "fear-hunger.png",
      description: t(
        "projectsData.fearAndHunger.description",
        "Development of a web MMORPG by a team of 4 developers using Vite.js for the frontend, Express.js for the backend with PostgreSQL database management, and Docker."
      ),
      repositoryLink: "https://github.com/SBD1/2023.2_Fear_and_Hunger",
      projectLink: "https://sbd1.github.io/2023.2_Fear_and_Hunger/#/",
      badges: [
        {
          text: "Vite.js",
          icon: FaReact,
        },
        {
          text: "Typescript",
          icon: TbBrandTypescript,
        },
        {
          text: "Express",
          icon: FaNodeJs,
        },
        {
          text: "Postgre",
          icon: SiPostgresql,
        },
        {
          text: "JavaScript",
          icon: TbBrandJavascript,
        },
        {
          text: "Docker",
          icon: FaDocker,
        },
      ],
    },
    {
      id: 8,
      type: "university",
      title: t("projectsData.guiaUnB.title", "Guia UnB"),
      image: "guia-unb.png",
      description: t(
        "projectsData.guiaUnB.description",
        "Development of a mobile app in Dart with Flutter and Firebase by a team of 6 developers to inform UnB students about student rights."
      ),
      repositoryLink: "https://github.com/zzzBECK/2023.1-GuiaUnB",
      projectLink: "https://fga-eps-mds.github.io/2023.1-GuiaUnB/",
      badges: [
        {
          text: "Dart",
          icon: SiDart,
        },
        {
          text: "Flutter",
          icon: SiFlutter,
        },
        {
          text: "Firebase",
          icon: IoLogoFirebase,
        },
      ],
    },
  ];

  return { projectsData };
}
