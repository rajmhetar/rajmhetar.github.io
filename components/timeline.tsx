interface TimelineItemProps {
  date: string
  title: string
  subtitle?: string
  items: string[]
}

export function TimelineItem({ date, title, subtitle, items }: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-12 last:pb-0">
      <div className="absolute left-0 top-2 h-full w-px bg-border">
        <div className="absolute -left-1.5 -top-1.5 h-4 w-4 rounded-full border-2 border-[#65B891] bg-background" />
      </div>
      <div>
        <time className="text-sm text-muted-foreground mb-1 block">{date}</time>
        <h3 className="text-xl font-semibold">{title}</h3>
        {subtitle && <p className="text-muted-foreground mt-1 mb-2">{subtitle}</p>}
        <ul className="mt-2 space-y-2">
          {items.map((item, index) => (
            <li key={index} className="text-sm leading-relaxed">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function Timeline() {
  return (
    <div className="max-w-3xl mx-auto">
      <TimelineItem
        date="May 2024 – Aug 2024"
        title="NASA"
        subtitle="Data Science Intern"
        items={[
          "• Constructed a data processing pipeline using Python and C++ scripts to retrieve, preprocess, and analyze InSAR data for remote sensing applications",
          "• Optimized large-scale data processing workflows with GMTSAR with custom C++ extensions to handle high-volume datasets, reducing overall processing time by approximately 70%",
          "• Developed custom visualizations of InSAR data using Python libraries such as Pandas, NumPy, and Matplotlib to analyze spatial patterns and temporal changes"
        ]}
      />
      <TimelineItem
        date="May 2023 – Aug 2023"
        title="Rice University"
        subtitle="Embedded Systems Intern"
        items={[
          "• Designed a bio-nanocomposite coating by synthesizing mango seed starch and cellulose nanocrystals, enhancing the shelf life of fresh produce",
          "• Built an integrated monitoring system using microcontrollers with Python, C++, and embedded systems programming to track moisture levels, oxidation rates, and microbial growth"
        ]}
      />
      <TimelineItem
        date="Aug 2022 – May 2023"
        title="Kailee Mills Foundation"
        subtitle="Software Engineer Intern"
        items={[
          "• Developed a cross-platform mobile app using Flutter and Dart, aimed at promoting seatbelt safety through interactive content",
          "• Led a team in designing and implementing intuitive user interfaces with a focus on accessibility and engagement, resulting in a ~35% increase in user engagement"
        ]}
      />
    </div>
  )
}

