import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Hi, I'm <span className="text-blue-600">Vatsal Vatsyayan</span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 mb-8">AI Software Engineer</p>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl">
              I'm a MS CS student at the University of Southern California, Los Angeles where I also work part-time as a Student Software Developer at USC Libraries in the Digital Repository team. 
              <br></br>Previously, I worked for two years as a software engineer at UKG, gaining valuable experience in a mission critical backend infrastructure team. 
              These days I am exploring new avenues for automation with AI.
              
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <a href="mailto:vatsyaya@usc.edu" target="_blank" rel="noopener noreferrer">
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </a>
              </Button>

              <Button asChild size="lg" variant="outline">
                <a
                  href="https://drive.google.com/file/d/1QcE1PbvxTyasO86pup-3oY8ffLu4pM1k/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </div>

            <div className="flex gap-6 justify-center lg:justify-start mt-8">
              <a href="https://github.com/vatsalvatsyayan" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-600 transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/in/vatsalvatsyayan" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-600 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:vatsyaya@usc.edu" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-600 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <Image
                  src="/vatsal_ship2.jpg?height=320&width=320"
                  alt="Vatsal Vatsyayan"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl">👋</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
