import { Github, Linkedin, Mail, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ExperienceCard from "@/components/experience-card"
import ProjectCard from "@/components/project-card"
import SkillsSection from "@/components/skills-section"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="site-container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">Raj Mhetar</div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
              Experience
            </Link>
            <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
              Skills
            </Link>
            <Link href="#education" className="text-muted-foreground hover:text-foreground transition-colors">
              Education
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>
          <Button variant="outline" className="hidden md:flex">
            <Link href="#contact">Get in Touch</Link>
          </Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <main>
        <div className="site-container py-8">
          {/* Hero Section */}
          <section className="py-20 flex flex-col-reverse md:flex-row items-center gap-8">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Hi, I&apos;m <span className="text-primary">Raj Mhetar</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Electrical and Computer Engineering student with a passion for embedded systems, software development,
                and finance.
              </p>
              <div className="flex gap-4">
                <Button asChild>
                  <Link href="#contact">Contact Me</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#projects">View Projects</Link>
                </Button>
              </div>
              <div className="flex gap-4 pt-4">
                <Link href="https://linkedin.com/in/rajmhetar" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
                <Link href="mailto:rajmhetar@gmail.com">
                  <Mail className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
                <Image
                  src="/placeholder.svg?height=320&width=320"
                  alt="Raj Mhetar"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-16 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-8 border-b pb-2">About Me</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg mb-4">
                  I&apos;m an Electrical and Computer Engineering Honors student at The University of Texas at Austin, also
                  pursuing a B.B.A in Canfield Business Honors with concentrations in Computer Architecture, Embedded
                  Systems, and Finance.
                </p>
                <p className="text-lg mb-4">
                  My passion lies at the intersection of hardware and software engineering, with a particular focus on
                  embedded systems and financial technology. I enjoy solving complex problems and building innovative
                  solutions that make a real-world impact.
                </p>
                <p className="text-lg">
                  When I&apos;m not coding or working on engineering projects, I&apos;m actively involved in Texas Guadaloop as an
                  Embedded Systems Engineer and Texas Consulting as a Junior Analyst.
                </p>
              </div>
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="font-medium mr-2">📚 Education:</span>
                    <span>UT Austin - ECE Honors & Business Honors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">🔧 Focus:</span>
                    <span>Embedded Systems, Computer Architecture, Finance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">🏆 Achievements:</span>
                    <span>ISEF Finalist, SIFMA Trading Competition 2nd Place</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">📍 Location:</span>
                    <span>Austin, Texas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">🎓 Expected Graduation:</span>
                    <span>May 2027</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="py-16 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-8 border-b pb-2">Experience</h2>
            <div className="space-y-8">
              <ExperienceCard
                title="Embedded Systems Engineer"
                company="Texas Guadaloop"
                period="Sep 2024 – Present"
                location="Austin, Texas"
                logo="/placeholder.svg?height=80&width=80" // Replace with actual logo
                description={[
                  "Engineered real-time communication system for hyperloop pods by integrating RTOS-based STM32 MCUs with I2C and CAN bus protocols, enabling seamless data exchange between sensors and battery management systems.",
                  "Developed real-time embedded software in C for STM32 (ARM Cortex) using hardware-in-loop simulations, logic analysis, and regression tests, reducing system errors by 25% and enhancing fault recovery for robust performance.",
                ]}
              />
              <ExperienceCard
                title="Embedded Systems Researcher"
                company="Rice University - Ajayan Research Group"
                period="May 2024 – Aug 2024"
                location="Houston, Texas"
                logo="/placeholder.svg?height=80&width=80" // Replace with actual logo
                description={[
                  "Built an integrated monitoring system using microcontrollers with Python, C++, and embedded systems programming to track moisture levels, oxidation rates, and microbial growth on coated produce.",
                  "Designed a bio-nanocomposite coating by synthesizing mango seed starch and cellulose nanocrystals, enhancing the shelf life of fresh produce through improved barrier properties against moisture and microbial growth.",
                ]}
              />
              <ExperienceCard
                title="Software Engineer Intern"
                company="NASA"
                period="May 2023 – Aug 2023"
                location="Austin, Texas"
                logo="/placeholder.svg?height=80&width=80" // Replace with actual logo
                description={[
                  "Constructed a data processing pipeline using Python and C++ scripts to retrieve, preprocess, and analyze InSAR data for remote sensing applications, integrating APIs for automated satellite data acquisition.",
                  "Developed custom visualizations of InSAR data using Python libraries such as Pandas, NumPy, and Matplotlib to analyze spatial patterns and temporal changes, enabling a more intuitive interpretation of geospatial data.",
                ]}
              />
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-16 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-8 border-b pb-2">Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <ProjectCard
                title="Smart Food Scale"
                description="A high-precision digital food scale using TI MSPM0 microcontroller, TAL220 load cell, and TLV2372 operational amplifier with 1-gram resolution."
                technologies={["C/C++", "Embedded Systems", "Signal Processing", "UART"]}
                points={[
                  "Engineered and developed a high-precision digital food scale utilizing a TI MSPM0 microcontroller, a TAL220 load cell, and a TLV2372 operational amplifier, optimizing signal processing to achieve 1-gram resolution.",
                  "Developed firmware to process ADC readings from the amplified load cell signal, calibrate weight outputs, and transmit real-time data via UART for serial monitoring at 10Hz, ensuring reliable performance for kitchen use.",
                ]}
              />
              <ProjectCard
                title="Investivision"
                description="A real-time financial sentiment analysis system that scrapes live financial news and predicts market trends."
                technologies={["Python", "NLP", "Web Scraping", "Machine Learning"]}
                points={[
                  "Developed a real-time financial sentiment analysis system by designing a data acquisition pipeline that scrapes live financial news from multiple sources using BeautifulSoup and requests, processing over 10,000 articles daily.",
                  "Implemented a sentiment analysis model leveraging Natural Language Processing (NLP) techniques in Python (NLTK, Vader, TextBlob) to extract sentiment scores from financial headlines.",
                  "Developed and optimized a predictive trading algorithm using historical sentiment trends and technical indicators (e.g., moving averages, RSI) to inform buy/sell decisions, leading to a ~600% return above the S&P 500 and a simulated $60,000 net gain in a virtual trading environment.",
                ]}
              />
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-16 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-8 border-b pb-2">Skills</h2>
            <SkillsSection />
          </section>

          {/* Education Section */}
          <section id="education" className="py-16 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-8 border-b pb-2">Education</h2>
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <h3 className="text-xl font-bold">The University of Texas at Austin</h3>
                <span className="text-muted-foreground">Expected Graduation: May 2027</span>
              </div>
              <div className="space-y-2">
                <p className="font-medium">B.S. in Electrical and Computer Engineering Honors</p>
                <p className="font-medium">B.B.A in Canfield Business Honors</p>
                <p>Concentrations: Computer Architecture and Embedded Systems, Finance</p>
                <p>GPA: 3.7/4.0</p>
                <div className="mt-4">
                  <h4 className="font-medium">Activities:</h4>
                  <ul className="list-disc list-inside ml-4 mt-2">
                    <li>Texas Guadaloop (Embedded Systems Engineer)</li>
                    <li>Texas Consulting (Junior Analyst)</li>
                    <li>Electrical and Computer Engineering and Business Association (Member)</li>
                    <li>Honors Business Association (Member)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Honors and Awards Section */}
          <section id="honors" className="py-16 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-8 border-b pb-2">Honors & Awards</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card rounded-lg p-6 shadow-sm border hover:border-primary transition-colors">
                <h3 className="text-xl font-bold mb-2">ISEF Finalist</h3>
                <p className="text-muted-foreground">Regeneron International Science and Engineering Fair</p>
              </div>
              <div className="bg-card rounded-lg p-6 shadow-sm border hover:border-primary transition-colors">
                <h3 className="text-xl font-bold mb-2">2nd Place</h3>
                <p className="text-muted-foreground">
                  Securities Industry and Financial Markets Association (SIFMA) Trading Competition
                </p>
              </div>
              <div className="bg-card rounded-lg p-6 shadow-sm border hover:border-primary transition-colors">
                <h3 className="text-xl font-bold mb-2">University Honors</h3>
                <p className="text-muted-foreground">The University of Texas at Austin</p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-16 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-8 border-b pb-2">Contact Me</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg mb-6">
                  I&apos;m always open to new opportunities, collaborations, or just a friendly chat about technology and
                  engineering. Feel free to reach out through any of the following channels:
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-primary" />
                    <a href="mailto:rajmhetar@gmail.com" className="hover:text-primary transition-colors">
                      rajmhetar@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-primary" />
                    <a href="tel:+19363331687" className="hover:text-primary transition-colors">
                      (936) 333-1687
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Linkedin className="h-6 w-6 text-primary" />
                    <a
                      href="https://linkedin.com/in/rajmhetar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      linkedin.com/in/rajmhetar
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Send Me a Message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <Button className="w-full">Send Message</Button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t py-8 bg-muted">
        <div className="site-container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-muted-foreground">
                &copy; {new Date().getFullYear()} Raj Mhetar. All rights reserved.
              </p>
            </div>
            <div className="flex gap-4">
              <Link href="https://linkedin.com/in/rajmhetar" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="mailto:rajmhetar@gmail.com">
                <Mail className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

