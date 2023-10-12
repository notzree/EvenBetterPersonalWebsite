import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-separator";
type project = {
  title: string;
  description: string;
  link: string;
  image: string;
  tags: string[];
};

export default function ProjectCard({ project }: any) {
  const iterableSkills = project.skills
    .split(",")
    .map((item: string) => item.trim());

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <div className="flex justify-between">
            {project.name}
            {project.link && (
              <Button className="" variant="link">
                <a
                  href={project.link}
                  className=" underline"
                  target="_blank"
                  rel="norefferer"
                >
                  github link
                </a>
              </Button>
            )}
          </div>
        </CardTitle>

        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        {/* <Image
          width={700}
          height={0}
          src={urlFor(project.image[0]).url()}
          alt={project.name}
          loader={() => urlFor(project.image[0]).url()}
        /> */}
      </CardContent>
      <CardFooter>
        <div className="flex flex-wrap h-auto items-center text-sm">
          {iterableSkills.map((skill: string) => (
            <div key={skill} className="px-2 px-1">
              {skill}
            </div>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
