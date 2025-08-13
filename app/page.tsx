"use client"
import Link from "next/link"
import { Linkedin, Github } from "lucide-react"
import { useState } from "react"

export default function Home() {
  const [activeTab, setActiveTab] = useState("me")

  const renderTabContent = () => {
    switch (activeTab) {
      case "me":
        return (
          <div className="mt-10 space-y-8 leading-8 text-lg">
            <p>
              i&apos;m a software engineer, embedded systems engineer, poker enthusiast, and more.
            </p>

            <p>
              i am currently interning at <span className="bg-muted px-2 py-0.5 rounded-sm">international biomedical</span> and pursuing my bachelors in electrical and computer engineering honors and business honors at ut austin
            </p>

            <p>
              formerly part of research at <Link href="https://ajayan.rice.edu/">rice university</Link>, and nasa / ut center for space research, where i worked on embedded systems, data pipelines, and ml platforms
            </p>

            <p className="space-x-6">
              <Link href="https://linkedin.com/in/rajmhetar" className="flex items-center gap-2">
                <Linkedin className="h-4 w-4" />
                <span>linkedin</span>
              </Link>
              <Link href="https://github.com/rajmhetar" className="flex items-center gap-2">
                <Github className="h-4 w-4" />
                <span>github</span>
              </Link>
            </p>
          </div>
        )

      case "music":
        return (
          <div className="mt-10 space-y-8 leading-8 text-lg">
            <p>music recommendations coming soon...</p>
          </div>
        )
      case "education":
        return (
          <div className="mt-10 space-y-8 leading-8 text-lg">
            <h2 className="text-2xl font-bold mb-6 text-blue-800">education</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <img 
                    src="/images/UTSeal.png" 
                    alt="UT Austin Logo" 
                    className="w-full h-full object-contain p-2"
                  />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex justify-between flex-wrap gap-2">
                    <span className="font-semibold">the university of texas at austin</span>
                    <span>expected gradudation: may 2027</span>
                  </div>
                  <div>b.s. electrical and computer engineering honors</div>
                  <div>b.b.a. canfield business honors</div>
                  <div className="text-sm text-muted-foreground">
                    activities: texas guadaloop (embedded systems), ecba, hba
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 mt-8">
                <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <img 
                    src="/images/academy.png" 
                    alt="Academy of Science and Technology Logo" 
                    className="w-full h-full object-contain p-2"
                  />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex justify-between flex-wrap gap-2">
                    <span className="font-semibold">Academy of Science and Technology</span>
                    <span>august 2020 – may 2024</span>
                  </div>
                  <div className="text-sm text-muted-foreground">activities and societies: science fair, deca</div>
                  <ul className="list-disc ml-5 space-y-1">
                    <li>The Academy of Science and Technology is a four-year magnet program housed within The Woodlands College Park High School.</li>
                    <li>Graduating Rank: 8/782</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )
      case "experience":
        return (
          <div className="mt-10 space-y-8 leading-8 text-lg">
            <h2 className="text-2xl font-bold mb-6 text-blue-800">experience</h2>
            <div className="space-y-8">
              <div>
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <img 
                      src="/images/internationalbiomedical-removebg-preview.png" 
                      alt="International Biomedical Logo" 
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between flex-wrap gap-2">
                      <span className="font-semibold">international biomedical</span>
                      <span>may 2025 – aug 2025, austin, tx</span>
                    </div>
                    <div className="italic text-muted-foreground">software engineer intern</div>
                    <ul className="list-disc ml-5 mt-2 space-y-1">
                      <li>Implemented MISRA-C compliant software library functions for infant life support monitoring systems, developing modular incubator control components.</li>
                      <li>Developed Unity-based hardware testing framework for transport incubator codebase, and validated 150+ critical functions for 70% code coverage on production hardware.</li>
                      <li>Automated technical documentation generation using Python scripts, creating guides to streamline deployment and maintenance of CLI documentation</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <img 
                      src="/images/texas_guadaloop_logo.jpg" 
                      alt="Texas Guadaloop Logo" 
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between flex-wrap gap-2">
                      <span className="font-semibold">texas guadaloop</span>
                      <span>aug 2024 – present, austin, tx</span>
                    </div>
                    <div className="italic text-muted-foreground">embedded systems engineer</div>
                    <ul className="list-disc ml-5 mt-2 space-y-1">
                      <li>Architected CAN bus network connecting 6+ distributed STM32 microcontrollers across hyperloop pod subsystems, enabling real-time data exchange between propulsion, braking, and sensor modules.</li>
                      <li>Developed EHW-compliant embedded control system in C, managing 13 operational states with precise timing requirements and fail-safe mechanisms for pod safety and control.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <img 
                      src="/images/rice-removebg-preview.png" 
                      alt="Rice University Logo" 
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between flex-wrap gap-2">
                      <span className="font-semibold">rice university</span>
                      <span>may 2024 – aug 2024, houston, tx</span>
                    </div>
                    <div className="italic text-muted-foreground">software engineer intern</div>
                    <ul className="list-disc ml-5 mt-2 space-y-1">
                      <li>Developed automated data acquisition system using ESP32 microcontrollers for novel produce coating experiments, enabling the researchers to automatically monitor chamber conditions with 95% accuracy.</li>
                      <li>Built ML model using scikit-learn/TensorFlow achieving 91% accuracy in shelf-life predictions, and automated microscopy analysis pipeline with OpenCV, reducing workload for researchers by over 80%.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <img 
                      src="/images/NASA-removebg-preview.png" 
                      alt="NASA Logo" 
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between flex-wrap gap-2">
                      <span className="font-semibold">nasa / ut center for space research</span>
                      <span>may 2023 – aug 2023, austin, tx</span>
                    </div>
                    <div className="italic text-muted-foreground">software engineer intern</div>
                    <ul className="list-disc ml-5 mt-2 space-y-1">
                      <li>Engineered data processing pipeline to automatically generate radar images from InSAR satellite data in Python.</li>
                      <li>Built REST API endpoints for earthquake monitoring application, enabling other research teams to access processed satellite radar data showing ground movement measurements from seismic events.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      case "skills":
        return (
          <div className="mt-10 space-y-8 leading-8 text-lg">
            <h2 className="text-2xl font-bold mb-6 text-blue-800">technical skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {[
                { label: "C", src: "/images/skills/c.png" },
                { label: "C++", src: "/images/skills/cpp.png" },
                { label: "Python", src: "/images/skills/python.png" },
                { label: "Java", src: "/images/skills/java.png" },
                { label: "Go", src: "/images/skills/go.png" },
                { label: "SQL", src: "/images/skills/sql.png" },
                { label: "TypeScript", src: "/images/skills/typescript.png" },
                { label: "HTML", src: "/images/skills/html5.png" },
                { label: "JavaScript", src: "/images/skills/javascript.png" },
                { label: "GitHub", src: "/images/skills/github.png" },
                { label: "Windows", src: "/images/skills/windows.png" },
                { label: "Linux", src: "/images/skills/linux.png" },
                { label: "Photoshop", src: "/images/skills/photoshop.png" },
                { label: "Excel", src: "/images/skills/excel.png" },
                { label: "PowerPoint", src: "/images/skills/powerpoint.png" },
              ].map((skill) => (
                <div key={skill.label} className="rounded-xl border border-[hsl(0_0%_90%)] bg-white p-6 flex flex-col items-center justify-center gap-4 shadow-sm">
                  <div className="h-12 w-12">
                    <img src={skill.src} alt={`${skill.label} logo`} className="h-full w-full object-contain" />
                  </div>
                  <div className="text-xl font-medium text-gray-700">{skill.label}</div>
                </div>
              ))}
            </div>
          </div>
        )
      case "cv":
        return (
          <div className="mt-10 space-y-8 leading-8 text-lg">
            <p>cv/resume pdf will be added here later...</p>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <main className="min-h-screen font-mono">
      {/* top nav */}
      <header className="container mx-auto px-6 pt-8 flex items-center justify-between">
        <nav className="flex gap-6">
          {["me", "education", "experience", "skills", "music", "cv"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`${
                activeTab === tab 
                  ? "text-blue-800 font-semibold" 
                  : "text-gray-600 hover:text-blue-800"
              } transition-colors`}
            >
              {tab}
            </button>
          ))}
        </nav>

      </header>

      {/* body */}
      <section id="me" className="container mx-auto px-6 pt-16 pb-24 max-w-4xl">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-blue-800 lowercase">raj mhetar</h1>
        {renderTabContent()}
      </section>
    </main>
  )
}

