import { Skill } from "@/types/skill-card";
import { useTranslation } from "react-i18next";
import { FaDocker, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { SiBootstrap, SiExpress, SiFigma, SiFlutter, SiJest, SiMongodb, SiNestjs, SiPostgresql, SiStyledcomponents, SiTailwindcss, SiTypescript } from "react-icons/si";

export function useGetSkillsData() {
    const { t } = useTranslation();

    const skillsData: Skill[] = [
        {
            Icon: FaReact,
            title: "React.js",
            description: t("skillsData.react"),
            years: 2.2
        },
        {
            Icon: SiTailwindcss,
            title: "Tailwind CSS",
            description: t("skillsData.tailwind"),
            years: 0.6
        },
        {
            Icon: SiStyledcomponents,
            title: "Styled Components",
            description: t("skillsData.styled"),
            years: 1.2
        },
        {
            Icon: SiBootstrap,
            title: "Bootstrap",
            description: t("skillsData.bootstrap"),
            years: 1.6
        },
        {
            Icon: SiJest,
            title: "Jest",
            description: t("skillsData.jest"),
            years: 1.2
        },
        {
            Icon: FaDocker,
            title: "Docker",
            description: t("skillsData.docker"),
            years: 0.5
        },
        {
            Icon: FaJs,
            title: "JavaScript",
            description: t("skillsData.javascript"),
            years: 2.8
        },
        {
            Icon: SiTypescript,
            title: "TypeScript",
            description: t("skillsData.typescript"),
            years: 2.4
        },
        {
            Icon: SiPostgresql,
            title: "PostgreSQL",
            description: t("skillsData.postgree"),
            years: 1.4
        },
        {
            Icon: FaNodeJs,
            title: "Node.js",
            description: t("skillsData.node"),
            years: 0.6
        },
        {
            Icon: SiExpress,
            title: "Express.js",
            description: t("skillsData.express"),
            years: 0.4
        },
        {
            Icon: SiNestjs,
            title: "Nest.js",
            description: t("skillsData.nest"),
            years: 0.4
        },
        {
            Icon: SiMongodb,
            title: "MongoDB",
            description: t("skillsData.mongo"),
            years: 0.6
        },
        {
            Icon: SiFigma,
            title: "Figma",
            description: t("skillsData.figma"),
            years: 0.6
        },
        {
            Icon: SiFlutter,
            title: "Flutter",
            description: t("skillsData.flutter"),
            years: 0.4
        },
    ];

    return { skillsData };
}
