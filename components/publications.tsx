import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, FileText, Award } from "lucide-react"

export function Publications() {
  const publications = [
    {
    title: "A Detailed Investigation into Popular Attacks on Cyber-Physical Systems",
    authors: "Vatsal Vatsyayan, Agnim Chakraborty, Rajarajan, Leo Fernandez",
    venue: "Cyber-Physical Systems Security (Taylor & Francis, CRC Press)",
    year: "2023",
    type: "Book Chapter",
    status: "Published",
    abstract:
      "This chapter provides a comprehensive study of well-known cyber-attacks on Cyber-Physical Systems (CPS), exploring vulnerabilities, attack strategies, and defense mechanisms. It emphasizes the challenges of securing CPS in the modern era and highlights potential directions for building resilient architectures.",
    pdfUrl: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003203087-1/detailed-investigation-popular-attacks-cyber-physical-systems-vatsal-vatsyayan-agnim-chakraborty-rajarajan-leo-fernandez",
    citations: 7,
    featured: false,
  },
  ]

  const featuredPublications = publications.filter((pub) => pub.featured)
  const otherPublications = publications.filter((pub) => !pub.featured)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Published":
        return "bg-green-100 text-green-800"
      case "Under Review":
        return "bg-yellow-100 text-yellow-800"
      case "Accepted":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <section id="publications" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Publications</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            My research contributions to the scientific community, published in top-tier conferences and journals in
            computer science, machine learning, and related fields.
          </p>
        </div>

        {/* Publication Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">{publications.length}</div>
              <div className="text-slate-600">Total Publications</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {publications.reduce((sum, pub) => sum + (pub.citations || 0), 0)}
              </div>
              <div className="text-slate-600">Total Citations</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {new Set(publications.map((pub) => pub.venue)).size}
              </div>
              <div className="text-slate-600">Venues</div>
            </CardContent>
          </Card>
        </div>

        {/* Featured Publications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
            <Award className="h-6 w-6 text-blue-600" />
            Featured Publications
          </h3>
          <div className="space-y-6">
            {featuredPublications.map((publication, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl text-slate-900 mb-2">{publication.title}</CardTitle>
                      <p className="text-slate-600 mb-2">{publication.authors}</p>
                      <p className="text-slate-700 font-medium">
                        {publication.venue} ({publication.year})
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Badge className={getStatusColor(publication.status)}>{publication.status}</Badge>
                      {publication.citations && <Badge variant="outline">{publication.citations} citations</Badge>}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">{publication.abstract}</p>
                  <div className="flex gap-3">
                    {publication.pdfUrl && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={publication.pdfUrl} target="_blank" rel="noopener noreferrer">
                          <FileText className="mr-2 h-4 w-4" />
                          PDF
                        </a>
                      </Button>
                    )}
                    {/* <Button size="sm" variant="outline">
                      <ExternalLink href="https://www.inderscience.com/info/ingeneral/forthcoming.php?jcode=ijims#124290" className="mr-2 h-4 w-4" />
                      DOI
                    </Button> */}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Publications */}
        <div>
          {/* <h3 className="text-2xl font-bold text-slate-900 mb-8">All Publications</h3> */}
          <div className="space-y-4">
            {otherPublications.map((publication, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-900 mb-1">{publication.title}</h4>
                      <p className="text-sm text-slate-600 mb-1">{publication.authors}</p>
                      <p className="text-sm text-slate-700">
                        {publication.venue} ({publication.year})
                      </p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-2">
                      <Badge className={getStatusColor(publication.status)} variant="secondary">
                        {publication.status}
                      </Badge>
                      {publication.citations && (
                        <span className="text-sm text-slate-600">{publication.citations} citations</span>
                      )}
                    </div>
                  </div>
                  {publication.pdfUrl && (
                    <div className="mt-3">
                      <Button size="sm" variant="outline" asChild>
                        <a href={publication.pdfUrl} target="_blank" rel="noopener noreferrer">
                          <FileText className="mr-2 h-3 w-3" />
                          PDF
                        </a>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
