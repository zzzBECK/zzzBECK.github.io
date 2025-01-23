export interface Project {
  id?: number;
  type: "freelance" | "university";
  title: string;
  image: string;
  description: string;
  repositoryLink?: string;
  projectLink?: string;
  badges?: ProjectBadge[];
}

interface ProjectBadge {
  text: string;
  icon: React.ElementType;
}
