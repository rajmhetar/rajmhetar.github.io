import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Nav } from "@/components/nav"
import { GraduationCap, Code, Mail, Linkedin } from "lucide-react"
//import Image from "next/image"
import { Timeline } from "@/components/timeline"
import { TypingAnimation } from "@/components/typing-animation"
import { ProfileImage } from "@/components/profile-image"

export default function Home() {
  const typingPhrases = ["Engineer", "Constant Learner", "Problem Solver", "The Best Spikeball Player", "Self-Starter"]

  return (
    <main className="min-h-screen">
      <Nav />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4">
        <div className="container mx-auto text-center">
          {/* Center Content */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Raj Mhetar</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Pursuing a dual degree in{" "}
              <span className="text-[#65B891] font-semibold">Electrical & Computer Engineering Honors</span> and{" "}
              <span className="text-[#65B891] font-semibold">Business Honors</span> at the University of Texas at Austin
            </p>
            <div className="mb-8">
              <TypingAnimation phrases={typingPhrases} />
            </div>
            <div className="flex gap-4 justify-center">
              <Button variant="outline" asChild>
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden bg-muted">
              <ProfileImage />
            </div>
            <div>
              <p className="text-lg mb-4">
                I am a dedicated student pursuing a challenging dual degree program in{" "}
                <span className="text-[#65B891] font-semibold">Electrical & Computer Engineering Honors</span> and{" "}
                <span className="text-[#65B891] font-semibold">Business Honors</span> at the University of Texas at
                Austin, with concentrations in Computer Architecture and Embedded Systems, and Finance.
              </p>
              <p className="text-lg mb-4">
                As a <span className="text-[#65B891] font-semibold">Technical Program Manager</span> at Texas Convergent
                and member of ECBA and HBA, I combine technical expertise with business acumen to drive innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-6">
              <div className="flex gap-4">
                <GraduationCap className="h-6 w-6 text-[#65B891]" />
                <div>
                  <h3 className="text-xl font-semibold">The University of Texas at Austin</h3>
                  <p className="text-muted-foreground">Expected Graduation: May 2027</p>
                  <ul className="mt-2 space-y-1">
                    <li>B.S. Electrical & Computer Engineering Honors</li>
                    <li>B.B.A. Canfield Business Honors</li>
                    <li>Concentrations: Computer Architecture and Embedded Systems, Finance</li>
                    <li className="mt-2 text-[#65B891] font-semibold">Activities:</li>
                    <li>• Texas Convergent (IoT Technical Program Manager)</li>
                    <li>• Electrical and Computer Engineering and Business Association (ECBA)</li>
                    <li>• Honors Business Association</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
          <Timeline />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <Code className="h-6 w-6 text-[#65B891]" />
                  <div>
                    <h3 className="text-xl font-semibold">BioFresh</h3>
                    <p className="text-muted-foreground mb-2">C++, Python, Raspberry Pi</p>
                    <ul className="mt-2 list-disc list-inside space-y-1">
                      <li>Developed packaging material using styrene block copolymer architecture</li>
                      <li>
                        Optimized C++ scripts, improving prediction accuracy by{" "}
                        <span className="text-[#65B891] font-semibold">30%</span>
                      </li>
                      <li>
                        Increased avocado shelf life by <span className="text-[#65B891] font-semibold">117%</span> using
                        Raspberry Pi-based system
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <Code className="h-6 w-6 text-[#65B891]" />
                  <div>
                    <h3 className="text-xl font-semibold">Investivision</h3>
                    <p className="text-muted-foreground mb-2">Python, BeautifulSoup, Tkinter</p>
                    <ul className="mt-2 list-disc list-inside space-y-1">
                      <li>Developed web scraper for real-time financial news analysis</li>
                      <li>Created sentiment analysis pipeline with automated trend analysis</li>
                      <li>
                        Achieved <span className="text-[#65B891] font-semibold">600% return</span> above S&P 500
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills & Awards</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-[#65B891]">Programming</h4>
                    <p>Python, Java, C++, C, Flutter, Dart, MATLAB, SystemVerilog</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#65B891]">Tools</h4>
                    <p>Android Studio, IntelliJ, PyCharm, Eclipse, Jupyter Notebooks, Git, LTSpice</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Honors & Awards</h3>
                <ul className="space-y-2">
                  <li>• Regeneron International Science and Engineering Fair (ISEF) Finalist</li>
                  <li>
                    • 2nd Place in Securities Industry and Financial Markets Association (SIFMA) Trading Competition
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
          <Card className="max-w-md mx-auto">
            <CardContent className="p-6">
              <div className="flex flex-col items-center gap-6 text-center">
                <Mail className="h-8 w-8 text-[#65B891]" />
                <div>
                  <p className="text-lg mb-2">Let&apos;s Connect!</p>
                  <p className="text-muted-foreground mb-6">
                    Feel free to reach out for opportunities, collaborations, or just to say hello!
                  </p>
                  <div className="flex flex-col gap-4">
                    <Button asChild>
                      <a href="mailto:rajmhetar@gmail.com">rajmhetar@gmail.com</a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="tel:9363331687">(936) 333-1687</a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a
                        href="https://linkedin.com/in/rajmhetar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span>LinkedIn</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Raj Mhetar • Built with Next.js</p>
        </div>
      </footer>
    </main>
  )
}

