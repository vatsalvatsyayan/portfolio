import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  const skillCategories = {
    Languages: "Java, Python, C#, JavaScript, TypeScript, SQL",
    "Frameworks & Web": "Angular, Node.js, Spring Boot, ASP.NET, FastAPI, REST",
    "Databases & Cloud": "AWS, MySQL, MongoDB, GCP, Kafka, NoSQL",
    "Tools & DevOps": "Docker, Kubernetes, CI/CD, A/B Testing, System Design, Machine Learning, Artificial Intelligence",
  }

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Skills & Expertise</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            A categorized overview of my technical skills acquired through professional experience and continuous learning.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skillCategories).map(([category, skills], index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.split(", ").map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="text-sm py-2 px-3">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}