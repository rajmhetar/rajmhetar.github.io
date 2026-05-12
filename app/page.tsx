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
           <div className="mt-10 flex items-start gap-8">
                           {/* Text content - left side */}
              <div className="flex-1 space-y-8 leading-8 text-lg">
               <p>
                 I&apos;m a software engineer, embedded systems engineer, poker enthusiast, and more.
               </p>
 
               <p>
                 I am currently pursuing my bachelor&apos;s in electrical and computer engineering honors and business honors at UT Austin. My dual background in engineering and business allows me to approach technical problems with both depth and strategic perspective.
               </p>
 
               <p>
                 Incoming software engineer intern at SpaceX (Direct to Cell Engineering). Formerly at AMD (EPYC Server CPU Firmware), International Biomedical, Rice University, and NASA / UT Center for Space Research.
               </p>
 
               <p>
                 Check out my <button onClick={() => setActiveTab("experience")} className="text-blue-800 hover:underline cursor-pointer">work experience</button>, <button onClick={() => setActiveTab("education")} className="text-blue-800 hover:underline cursor-pointer">education</button>, and <button onClick={() => setActiveTab("skills")} className="text-blue-800 hover:underline cursor-pointer">technical skills</button>.
               </p>
 
               <div className="flex space-x-8 pt-4">
                 <Link href="https://linkedin.com/in/rajmhetar" className="flex items-center gap-2 text-blue-800 hover:text-blue-600 transition-colors">
                   <Linkedin className="h-5 w-5" />
                   <span>LinkedIn</span>
                 </Link>
                 <Link href="https://github.com/rajmhetar" className="flex items-center gap-2 text-blue-800 hover:text-blue-600 transition-colors">
                   <Github className="h-5 w-5" />
                   <span>GitHub</span>
                 </Link>
               </div>
             </div>
             
             {/* Headshot - right side */}
             <div className="flex-shrink-0">
               <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-800 shadow-lg">
                 <img 
                   src="/images/Raj_mhetar_headshot.png" 
                   alt="Raj Mhetar Headshot" 
                   className="w-full h-full object-cover"
                 />
               </div>
             </div>
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
                    <span>Expected Graduation: May 2028</span>
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
                      src="/images/spacex.png"
                      alt="SpaceX Logo"
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between flex-wrap gap-2">
                      <span className="font-semibold">SpaceX</span>
                      <div className="text-right">
                        <div>May 2026 – Present</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="italic text-muted-foreground">Incoming Software Engineer Intern</div>
                      <div className="italic text-muted-foreground">Sunnyvale, CA</div>
                    </div>
                    <ul className="list-disc ml-5 mt-1 space-y-1">
                      <li>Summer 2026 – Direct to Cell Engineering</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src="/images/amd-logo-black-and-white.png"
                      alt="AMD Logo"
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between flex-wrap gap-2">
                      <span className="font-semibold">AMD</span>
                      <div className="text-right">
                        <div>Jan 2026 – May 2026</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="italic text-muted-foreground">Software Engineer Intern</div>
                      <div className="italic text-muted-foreground">Austin, TX</div>
                    </div>
                    <ul className="list-disc ml-5 mt-1 space-y-1">
                      <li>Spring 2026 – EPYC Server CPU Firmware</li>
                    </ul>
                  </div>
                </div>
              </div>

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
                { label: "Poker", src: "/images/skills/poker.png" },
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
       
       case "projects":
         return (
           <div className="mt-10 space-y-8 leading-8 text-lg">
             <h2 className="text-2xl font-bold mb-6 text-blue-800">Projects</h2>
             <div className="space-y-8">
               <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
                 <div className="flex items-start gap-4">
                   <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-blue-100 flex items-center justify-center">
                     <svg className="w-8 h-8 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                     </svg>
                   </div>
                   <div className="flex-1">
                     <div className="flex justify-between items-start mb-2">
                       <h3 className="text-xl font-semibold text-gray-900">ARM-Based Real-Time Operating System</h3>
                       <a href="https://github.com/rajmhetar/rajos" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-600 transition-colors">
                         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                           <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 4.624-5.479 4.92.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                         </svg>
                       </a>
                     </div>
                     <ul className="list-disc ml-5 space-y-2 text-gray-700">
                       <li>Implemented a custom RTOS for ARM (versatilepb/ARM926) with reset/vector table, SysTick timer interrupts, PL011 UART driver with printf, TCB-based task management, and a custom memory/linker layout.</li>
                       <li>Built a cross-platform build/test pipeline (Python + Make) producing ELF/BIN/HEX artifacts and automated QEMU runners; authored setup and hardware-porting documentation for simplified configuration.</li>
                     </ul>
                   </div>
                 </div>
               </div>

               <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
                 <div className="flex items-start gap-4">
                   <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-green-100 flex items-center justify-center">
                     <svg className="w-8 h-8 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                     </svg>
                   </div>
                   <div className="flex-1">
                     <div className="flex justify-between items-start mb-2">
                       <h3 className="text-xl font-semibold text-gray-900">Smart Nutrition Analytics System</h3>
                       <a href="https://github.com/rajmhetar/NutriScan" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-600 transition-colors">
                         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                           <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.03-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 4.624-5.479 4.92.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                         </svg>
                       </a>
                     </div>
                     <div className="text-sm text-gray-600 mb-3">ESP32, C++, React, Firebase, TensorFlow | 2025</div>
                     <ul className="list-disc ml-5 space-y-2 text-gray-700">
                       <li>Built distributed IoT prototype with ESP32 microcontrollers, integrating computer vision API and load cell sensors to demonstrate food identification with 94% accuracy across multiple connected devices.</li>
                       <li>Engineered full-stack architecture with embedded C++ firmware, React web dashboard, and Firebase real-time database, implementing WebSocket connections for sub-200ms latency nutrition data visualization.</li>
                     </ul>
                   </div>
                 </div>
               </div>
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
          {["me", "education", "experience", "skills", "projects"].map((tab) => (
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
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-blue-800">Raj Mhetar</h1>
        {renderTabContent()}
      </section>
    </main>
  )
}

