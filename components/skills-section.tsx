import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function SkillsSection() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["C", "C++", "Java", "Python", "Assembly", "MATLAB", "Verilog", "R", "SQL", "Rust"],
    },
    {
      category: "Embedded Systems",
      skills: ["RTOS (FreeRTOS, Zephyr)", "Embedded Linux", "STM32", "ARM Cortex", "I2C", "CAN bus", "UART"],
    },
    {
      category: "Tools & Technologies",
      skills: [
        "VSCode",
        "Android Studio",
        "IntelliJ",
        "PyCharm",
        "Eclipse",
        "Jupyter Notebooks",
        "Git",
        "Jenkins",
        "Docker",
      ],
    },
    {
      category: "Hardware & Electronics",
      skills: ["LTSpice", "Altium", "KiCad", "Logic Analyzers", "Oscilloscopes", "Signal Processing"],
    },
    {
      category: "Data Analysis & Visualization",
      skills: ["Pandas", "NumPy", "Matplotlib", "NLTK", "TextBlob", "Excel", "PowerPoint"],
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skillCategories.map((category, index) => (
        <Card key={index} className="hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <h3 className="text-xl font-bold">{category.category}</h3>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <Badge key={skillIndex} variant="outline" className="bg-muted">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

