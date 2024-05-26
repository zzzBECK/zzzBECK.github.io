import { Skill } from "@/types/skill-card";
import { useTranslation } from "react-i18next";
import {
    SiBootstrap,
    SiDocker,
    SiExpress,
    SiFigma,
    SiFlutter,
    SiJavascript,
    SiJest,
    SiMongodb,
    SiNestjs,
    SiNodedotjs,
    SiPostgresql,
    SiReact,
    SiStyledcomponents,
    SiTailwindcss,
    SiTypescript,
} from "react-icons/si";

export function useGetSkillsData() {
    const { t } = useTranslation();

    function calculateYearsOfExperience(startDate: string): number {
        const currentDate = new Date();
        const years = (currentDate.getTime() - new Date(startDate).getTime()) / (1000 * 60 * 60 * 24 * 365.25);
        return parseFloat(years.toFixed(1));
    }

    const skillsData: Skill[] = [
        {
            Icon: SiReact,
            title: "React.js",
            description: t("skillsData.react"),
            years: calculateYearsOfExperience('2022-03-01'),
        },
        {
            Icon: SiTailwindcss,
            title: "Tailwind CSS",
            description: t("skillsData.tailwind"),
            years: calculateYearsOfExperience('2023-10-01'),
        },
        {
            Icon: SiStyledcomponents,
            title: "Styled Components",
            description: t("skillsData.styled"),
            years: calculateYearsOfExperience('2022-03-01'),
        },
        {
            Icon: SiBootstrap,
            title: "Bootstrap",
            description: t("skillsData.bootstrap"),
            years: calculateYearsOfExperience('2023-06-01'),
        },
        {
            Icon: SiJest,
            title: "Jest",
            description: t("skillsData.jest"),
            years: calculateYearsOfExperience('2022-03-01'),
        },
        {
            Icon: SiDocker,
            title: "Docker",
            description: t("skillsData.docker"),
            years: calculateYearsOfExperience('2023-06-01'),
        },
        {
            Icon: SiJavascript,
            title: "JavaScript",
            description: t("skillsData.javascript"),
            years: calculateYearsOfExperience('2021-08-01'),
        },
        {
            Icon: SiTypescript,
            title: "TypeScript",
            description: t("skillsData.typescript"),
            years: calculateYearsOfExperience('2022-03-01'),
        },
        {
            Icon: SiPostgresql,
            title: "PostgreSQL",
            description: t("skillsData.postgree"),
            years: calculateYearsOfExperience('2023-01-01'),
        },
        {
            Icon: SiNodedotjs,
            title: "Node.js",
            description: t("skillsData.node"),
            years: calculateYearsOfExperience('2023-01-01'),
        },
        {
            Icon: SiExpress,
            title: "Express.js",
            description: t("skillsData.express"),
            years: calculateYearsOfExperience('2023-10-01'),
        },
        {
            Icon: SiNestjs,
            title: "Nest.js",
            description: t("skillsData.nest"),
            years: calculateYearsOfExperience('2023-12-01'),
        },
        {
            Icon: SiMongodb,
            title: "MongoDB",
            description: t("skillsData.mongo"),
            years: calculateYearsOfExperience('2024-01-01'),
        },
        {
            Icon: SiFigma,
            title: "Figma",
            description: t("skillsData.figma"),
            years: calculateYearsOfExperience('2023-01-01'),
        },
        {
            Icon: SiFlutter,
            title: "Flutter",
            description: t("skillsData.flutter"),
            years: 0.4,
        },
    ];

    return { skillsData };
}
