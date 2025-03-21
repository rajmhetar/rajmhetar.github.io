import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  points: string[]
}

export default function ProjectCard({ title, description, technologies, points }: ProjectCardProps) {
  return (
    <Card className="h-full hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
        <ul className="list-disc list-inside space-y-2">
          {points.map((point, index) => (
            <li key={index} className="text-muted-foreground text-sm">
              {point}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

