import { cn } from "@/lib/utils";
import { Skill } from "@/types/skill-card";
import {
    Card,
    CardContent,
    CardDescription
} from "../ui/card";
import { Progress } from "../ui/progress";
type CardProps = React.ComponentProps<typeof Card>;

export function SkillCard({ className, title, description, Icon, ...props }: CardProps & Skill) {

    return (
        <Card className={cn("w-full h-fit", className)} {...props}>
            <CardContent className="flex flex-col min-h-[16em] justify-center gap-2 px-10 py-14">
                <div className="flex flex-col 2xl:flex-row w-full items-center gap-4">
                    <Icon size={80} className="min-w-14 max-w-fit" />
                    <div className="flex flex-col w-auto gap-3">
                        <h1 className="text-4xl text-center 2xl:text-start">{title}</h1>
                        <CardDescription className="text-justify">{description}</CardDescription>
                        <Progress value={13} className="w-full" />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
