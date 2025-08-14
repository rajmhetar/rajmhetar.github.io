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
              I&apos;m a software engineer, embedded systems engineer, poker enthusiast, and more.
            </p>

            <p>
              I am currently interning at <span className="bg-muted px-2 py-0.5 rounded-sm">International Biomedical</span> and pursuing my bachelors in electrical and computer engineering honors and business honors at UT Austin.
            </p>

            <p>
              Formerly part of research at Rice University, and NASA / UT Center for Space Research, where I worked on embedded systems, data pipelines, and ML platforms.
            </p>

            <p>
              Check out my <button onClick={() => setActiveTab("experience")} className="text-blue-800 hover:underline cursor-pointer">work experience</button>, <button onClick={() => setActiveTab("education")} className="text-blue-800 hover:underline cursor-pointer">education</button>, and <button onClick={() => setActiveTab("skills")} className="text-blue-800 hover:underline cursor-pointer">technical skills</button>.
            </p>

            <p className="space-x-6">
              <Link href="https://linkedin.com/in/rajmhetar" className="flex items-center gap-2">
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </Link>
              <Link href="https://github.com/rajmhetar" className="flex items-center gap-2">
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </Link>
            </p>
          </div>
        )

      case "education":
        return (
          <div className="mt-10 space-y-8 leading-8 text-lg">
            <h2 className="text-2xl font-bold mb-6 text-blue-800">Education</h2>
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
                    <span className="font-semibold">The University of Texas at Austin</span>
                    <span>Expected Graduation: May 2027</span>
                  </div>
                  <div>B.S. Electrical and Computer Engineering Honors</div>
                  <div>B.B.A. Canfield Business Honors</div>
                  <div className="text-sm text-muted-foreground">
                    Activities: Texas Guadaloop (embedded systems), ECBA, HBA
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
                    <span>August 2020 – May 2024</span>
                  </div>
                  <div className="text-sm text-muted-foreground">Activities and societies: Science Fair, DECA</div>
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
            <h2 className="text-2xl font-bold mb-6 text-blue-800">Experience</h2>
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
                      <span className="font-semibold">International Biomedical</span>
                      <div className="text-right">
                        <div>May 2025 – Aug 2025</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="italic text-muted-foreground">Software Engineer Intern</div>
                      <div className="italic text-muted-foreground">Austin, TX</div>
                    </div>
                    <ul className="list-disc ml-5 mt-1 space-y-1">
                      <li>Implemented MISRA-C compliant software library functions for infant life support monitoring systems, developing modular incubator control components.</li>
                      <li>Developed Unity-based hardware testing framework for transport incubator codebase, and validated 150+ critical functions for 70% code coverage on production hardware.</li>
                      <li>Automated technical documentation generation using Python scripts, creating guides to streamline deployment and maintenance of CLI documentation.</li>
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
                      <span className="font-semibold">Texas Guadaloop</span>
                      <div className="text-right">
                        <div>Aug 2024 – Present</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="italic text-muted-foreground">Embedded Systems Engineer</div>
                      <div className="italic text-muted-foreground">Austin, TX</div>
                    </div>
                    <ul className="list-disc ml-5 mt-1 space-y-1">
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
                      <span className="font-semibold">Rice University</span>
                      <div className="text-right">
                        <div>May 2024 – Aug 2024</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="italic text-muted-foreground">Software Engineer Intern</div>
                      <div className="italic text-muted-foreground">Houston, TX</div>
                    </div>
                    <ul className="list-disc ml-5 mt-1 space-y-1">
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
                      <span className="font-semibold">NASA / UT Center for Space Research</span>
                      <div className="text-right">
                        <div>May 2023 – Aug 2023</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="italic text-muted-foreground">Software Engineer Intern</div>
                      <div className="italic text-muted-foreground">Austin, TX</div>
                    </div>
                    <ul className="list-disc ml-5 mt-1 space-y-1">
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
            <h2 className="text-2xl font-bold mb-6 text-blue-800">Technical Skills</h2>
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
      
      default:
        return null
    }
  }

  return (
    <main className="min-h-screen font-mono">
      {/* top nav */}
      <header className="container mx-auto px-6 pt-8 flex items-center justify-between">
        <nav className="flex gap-6">
          {["me", "education", "experience", "skills"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`${
                activeTab === tab 
                  ? "text-blue-800 font-semibold" 
                  : "text-gray-600 hover:text-blue-800"
              } transition-colors`}
            >
              {tab === "me" ? "Me" : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </nav>
      </header>

      {/* body */}
      <section id="me" className="container mx-auto px-6 pt-16 pb-24 max-w-4xl">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-blue-800">Raj Mhetar</h1>
        {renderTabContent()}
      </section>
    </main>
  )
}

