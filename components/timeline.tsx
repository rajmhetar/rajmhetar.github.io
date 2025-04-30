"use client"

import Image from "next/image"

interface TimelineItemProps {
  date: string
  title: string
  subtitle?: string
  items: string[]
  logo?: string
}

export function TimelineItem({ date, title, subtitle, items, logo }: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-12 last:pb-0">
      <div className="absolute left-0 top-2 h-full w-px bg-border">
        <div className="absolute -left-1.5 -top-1.5 h-4 w-4 rounded-full border-2 border-[#65B891] bg-background" />
      </div>
      <div>
        <div className="flex items-center gap-3 mb-2">
          {logo && (
            <div className="w-14 h-14 rounded-md overflow-hidden flex-shrink-0 bg-muted/10 border border-border/30 flex items-center justify-center p-1 shadow-md">
              <div className="relative w-full h-full">
                <Image 
                  src={logo} 
                  alt={`${title} logo`} 
                  fill
                  className="object-contain" 
                  sizes="56px"
                />
              </div>
            </div>
          )}
          <div>
            <time className="text-sm text-muted-foreground block">{date}</time>
            <h3 className="text-xl font-semibold">{title}</h3>
            {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
          </div>
        </div>
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
        date="Summer 2025"
        title="International Biomedical"
        subtitle="Incoming Software Engineering Intern"
        logo="/images/internationalbiomedical-removebg-preview.png"
        items={[
          "• Incoming Software Engineering Intern for Summer 2025"
        ]}
      />
      <TimelineItem
        date="Jan 2025 – Present"
        title="Texas Guadaloop"
        subtitle="Embedded Systems Engineer"
        logo="/images/texas_guadaloop_logo.jpg"
        items={[
          "• Engineered real-time communication system for hyperloop pods by integrating RTOS-based STM32 MCUs with I2C and CAN bus protocols, enabling seamless data exchange between sensors and battery management systems",
          "• Developed real-time embedded software in C for STM32 (ARM Cortex) using hardware-in-loop simulations, logic analysis, reducing system errors by 25% and preventing pod failure"
        ]}
      />
      <TimelineItem
        date="May 2024 – Aug 2024"
        title="Rice University - Ajayan Research Group"
        subtitle="Embedded Systems Researcher"
        logo="/images/rice-removebg-preview.png"
        items={[
          "• Built an integrated monitoring system using microcontrollers with Python, C++, and embedded systems programming to track moisture levels, oxidation rates, and microbial growth on coated produce",
          "• Designed a bio-nanocomposite coating by synthesizing mango seed starch and cellulose nanocrystals, enhancing the shelf life of fresh produce through improved barrier properties against moisture and microbial growth"
        ]}
      />
      <TimelineItem
        date="May 2023 – Aug 2023"
        title="NASA"
        subtitle="Software Engineer Intern"
        logo="/images/NASA-removebg-preview.png"
        items={[
          "• Constructed a data processing pipeline using Python and C++ scripts to retrieve, preprocess, and analyze InSAR data for remote sensing applications, integrating APIs for automated satellite data acquisition",
          "• Developed custom visualizations of InSAR data using Python libraries such as Pandas, NumPy, and Matplotlib to analyze spatial patterns and temporal changes, enabling a more intuitive interpretation of geospatial data"
        ]}
      />
    </div>
  )
}

