import { formatValue } from "@/helpers/formatValue";
import { cn } from "@/lib/utils";
import { Skill } from "@/types/skill-card";
import { Card, CardContent, CardDescription } from "../ui/card";
import { Progress } from "../ui/progress";
import { useTranslation } from "react-i18next";
type CardProps = React.ComponentProps<typeof Card>;

export function SkillCard({
    className,
    title,
    description,
    Icon,
    years,
    ...props
}: CardProps & Skill) {
    const { t } = useTranslation();

    return (
        <Card className={cn("w-full h-fit", className)} {...props}>
            <CardContent className="flex flex-col min-h-[16em] justify-center gap-2 px-10 py-14">
                <div className="flex flex-col w-full items-center gap-4">
                    <Icon size={80} className="min-w-14 max-w-fit" />
                    <div className="flex flex-col w-auto gap-3">
                        <h1 className="text-4xl text-center min-h-[80px]">{title}</h1>
                        <CardDescription className="text-justify min-h-[140px]">
                            {description}
                        </CardDescription>
                        <Progress value={(years / 3) * 100} className="w-full" />
                        <CardDescription className="text-center m-0 p-0">{`${t(
                            "experience"
                        )}: ${formatValue(years, { decimalPlace: 1 })} ${years === 1 ? t("year") : t("years")
                            }`}</CardDescription>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
