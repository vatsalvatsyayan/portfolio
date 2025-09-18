import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export function Projects() {
  const projects = [
        {
      title: "Cold Email Automation System",
      description:
        "Built a cold-email automation platform that reduced job application effort by 90% through OCR-based recruiter detail extraction and one-click email delivery. Implemented FastAPI, JWT authentication, Dockerized deployment, and MongoDB Atlas for scalability and security.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["FastAPI", "Python", "MongoDB Atlas", "Docker", "Google Gemini", "Tesseract OCR", "Google Apps Script"],
      githubUrl: "https://github.com/vatsalvatsyayan/Cold-Email-Tool",
      liveUrl: "https://www.youtube.com/watch?v=uVQoUVz-BGQ",
      featured: true,
    },
      {
    title: "Job Application Automation Extension",
    description:
      "Created a Chrome Extension with FastAPI backend to streamline job applications. Enabled one-click workflow that extracts job details, checks H-1B sponsorship eligibility, analyzes skill gaps, and generates customized resumes and cover letters via Gemini API. Cut repetitive manual steps down to ~30 seconds per application, with secure pipelines and robust error handling.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: [
    "Chrome Extension (Manifest V3)",
    "JavaScript (ES6+)",
    "Web Workers",
    "FastAPI (Python 3.9+)",
    "asyncio",
    "NLP Pipelines",
    "Gemini API"
  ],
    githubUrl: "https://github.com/vatsalvatsyayan/kingcold-chrome-extension",
    liveUrl: "https://www.youtube.com/watch?v=toawuQKWNSM",
    featured: true,
  },
  {
  title: "Quantum Hackathon Winner (4th Place, USC QEEE Initiative)",
  description:
    "Applied Python, IBM Qiskit, and Quantum Cloud to model PFAS degradation and optimize traffic flows, showcasing the potential of quantum computing for sustainability and large-scale optimization. Recognized with 4th place among 50+ teams at the USC QEEE Initiative hackathon.",
  image: "/placeholder.svg?height=200&width=400",
  technologies: [
    "Python",
    "IBM Qiskit",
    "Quantum Cloud",
    "Optimization Algorithms",
    "Sustainability Modeling"
  ],
  liveUrl: "https://youtu.be/UVXe-mHUJyY", // replace if you have code/repo
  githubUrl: "https://docs.google.com/presentation/d/1Nikn6CkMUqNEAi1OtIMPKqGFpBejjGBzYHnwnamdSlo/edit?slide=id.g37e2e0f2370_0_0#slide=id.g37e2e0f2370_0_0",   // replace if there's a demo/coverage
  featured: true,
},
    {
  title: "Natural Language to SQL",
  description:
    "Developed a schema-aware Text-to-SQL (T2S) system that enables users to query databases using natural language. Built as a FastAPI service with modular pipelines, it integrates LLMs for SQL generation, SBERT for semantic schema matching, and a multi-layer validation framework. Achieved 81% execution accuracy on the Spider benchmark, bridging research and real-world deployment for scalable, cost-efficient inference.",
  image: "/placeholder.svg?height=200&width=400",
  technologies: [
    "FastAPI",
    "Python",
    "SQLCoder-7B (GGUF)",
    "Sentence-BERT",
    "SQLite",
    "PostgreSQL",
    "Hugging Face Transformers"
  ],
  githubUrl: "https://github.com/vatsalvatsyayan/nlpproject",
  featured: true,
},
{
  title: "Vachary: AI-Powered Tech News Digest & RAG System",
  description:
    "Built an intelligent news aggregation and question-answering system that combines multi-source RSS feed processing, AI-driven summarization, and Retrieval-Augmented Generation (RAG). The platform delivers personalized tech insights through a responsive web interface, integrating Ollama (Mistral), FAISS, and SentenceTransformers to achieve fast, context-aware query responses with 85%+ retrieval accuracy.",
  image: "/placeholder.svg?height=200&width=400",
  technologies: [
    "Python",
    "FastAPI",
    "Ollama (Mistral)",
    "SentenceTransformers",
    "FAISS",
    "Newspaper3k",
    "Feedparser",
    "Vanilla JS",
    "HTML5/CSS3"
  ],
  githubUrl: "https://github.com/vatsalvatsyayan/Vachary",
  featured: true,
}
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Projects</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            A showcase of my recent work, featuring full-stack applications, research projects, and open-source
            contributions that demonstrate my technical skills and problem-solving abilities.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          {/* <h3 className="text-2xl font-bold text-slate-900 mb-8">Projects</h3> */}
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                {/* <div className="aspect-video relative overflow-hidden">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div> */}
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    {project.liveUrl && (
                      <Button size="sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          {/* <h3 className="text-2xl font-bold text-slate-900 mb-8">Other Projects</h3> */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-slate-900">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-1 h-3 w-3" />
                        Code
                      </a>
                    </Button>
                    {project.liveUrl && (
                      <Button size="sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-1 h-3 w-3" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
