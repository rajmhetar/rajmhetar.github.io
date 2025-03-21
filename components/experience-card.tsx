import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface ExperienceCardProps {
  title: string
  company: string
  period: string
  location: string
  description: string[]
  logo?: string // Optional logo URL
}

export default function ExperienceCard({
  title,
  company,
  period,
  location,
  description,
  logo = "/placeholder.svg?height=80&width=80", // Default placeholder if no logo provided
}: ExperienceCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
          <div className="flex items-center gap-4">
            <div className="relative h-16 w-16 flex-shrink-0 rounded-md overflow-hidden border">
              <img src={logo || "/placeholder.svg"} alt={`${company} logo`} className="object-contain w-full h-full" />
            </div>
            <div>
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="text-lg text-primary">{company}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-muted-foreground">{period}</p>
            <p className="text-muted-foreground">{location}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="list-disc list-inside space-y-2">
          {description.map((item, index) => (
            <li key={index} className="text-muted-foreground">
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

