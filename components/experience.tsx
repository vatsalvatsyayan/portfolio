import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, MapPin } from "lucide-react"

export function Experience() {
  const workExperience = [
    {
      title: "Software Developer",
      company: "USC Libraries - Digital Repository",
      location: "Los Angeles, CA",
      period: "Apr 2025 - Present",
      type: "Part-time",
      description:
        "Contributing to the digital preservation efforts and enhancing user accessbility of the entire website",
      technologies: ["C#", ".NET Framework", "ASP.NET", "Vue.js", "Razor pages", "Angular"],
    },
    {
      title: "Senior Software Engineer",
      company: "Ultimate Kronos Group (UKG)",
      location: "Noida, India",
      period: "Jan 2024 - Jul 2024",
      type: "Full-time",
      description:
        "I was leading features and certain initatives, getting involved in design conversations, managing on-call rotations and mentoring college and new hires",
      technologies: ["C#", ".NET Framework", "ASP.NET", "MS-SQL","Grafana", "InfluxDB", "TeamCity", "Jira", "OpenTelemetry", "Kafka", "Angular", "IIS Server"],
    },
    {
      title: "Software Engineer",
      company: "Ultimate Kronos Group (UKG)",
      location: "Noida, India",
      period: "Jul 2022 - Dec 2023",
      type: "Full-time",
      description:
        "Joined UKG right after undergrad. Learnt enterprise-level programming and design. Exposed to major backend domains.",
      technologies: ["Python", "JavaScript", "Django", "Flask", "MySQL"],
    }
  ]

  // const internships = [
  //   {
  //     title: "Software Engineering Intern",
  //     company: "Google",
  //     location: "Mountain View, CA",
  //     period: "Summer 2019",
  //     description: "Worked on search infrastructure optimization. Improved query processing performance by 15%.",
  //     technologies: ["Java", "C++", "Protocol Buffers"],
  //   },
  //   {
  //     title: "Research Intern",
  //     company: "Microsoft Research",
  //     location: "Redmond, WA",
  //     period: "Summer 2018",
  //     description:
  //       "Contributed to machine learning research projects. Developed novel approaches for natural language processing.",
  //     technologies: ["Python", "PyTorch", "Azure ML"],
  //   },
  // ]

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Experience</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            My professional journey 
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">Work Experience</h3>
          <div className="space-y-6">
            {workExperience.map((job, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-slate-900">{job.title}</CardTitle>
                      <div className="flex items-center gap-2 text-slate-600 mt-1">
                        <Building className="h-4 w-4" />
                        <span className="font-medium">{job.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1">
                      <div className="flex items-center gap-2 text-slate-600">
                        <Calendar className="h-4 w-4" />
                        <span>{job.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">{job.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-8">Internships</h3>
          <div className="space-y-6">
            {internships.map((internship, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-slate-900">{internship.title}</CardTitle>
                      <div className="flex items-center gap-2 text-slate-600 mt-1">
                        <Building className="h-4 w-4" />
                        <span className="font-medium">{internship.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1">
                      <div className="flex items-center gap-2 text-slate-600">
                        <Calendar className="h-4 w-4" />
                        <span>{internship.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <MapPin className="h-4 w-4" />
                        <span>{internship.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">{internship.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {internship.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  )
}
