import { Project } from "@/types/project";
import { useTranslation } from "react-i18next";
import { FaDocker, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import {
    SiDart,
    SiFlutter,
    SiI18Next,
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
