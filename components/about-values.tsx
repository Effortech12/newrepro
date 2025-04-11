import { Card, CardContent } from "@/components/ui/card"
import { Zap, Users, Lightbulb, RefreshCw, Shield, Award } from "lucide-react"

export function AboutValues() {
  return (
    <section className="py-12 bg-gradient-to-b from-background/95 to-background">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-10 animate-fade-in">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-3">Our Core Values</h2>
          <p className="max-w-[42rem] text-muted-foreground sm:text-lg">
            The principles that guide our approach to solving complex banking technology challenges
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <Card
              key={index}
              className={`bg-background/50 ${
                index % 2 === 0 ? "border-purple-900/20" : "border-cyan-900/20"
              } animate-slide-up animation-delay-${100 * (index + 1)}`}
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div
                  className={`rounded-full ${
                    index % 2 === 0 ? "bg-purple-900/10" : "bg-cyan-900/10"
                  } p-3 w-14 h-14 mb-4 flex items-center justify-center`}
                >
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

const values = [
  {
    icon: <Zap className="h-6 w-6 text-purple-400" />,
    title: "Speed of Execution",
    description:
      "We believe in rapid delivery without compromising quality, helping our clients gain competitive advantage through faster time-to-market.",
  },
  {
    icon: <Award className="h-6 w-6 text-cyan-400" />,
    title: "Quality Excellence",
    description:
      "We maintain the highest standards in everything we do, delivering solutions that are robust, secure, and built to last.",
  },
  {
    icon: <Lightbulb className="h-6 w-6 text-purple-400" />,
    title: "Innovative Thinking",
    description:
      "We approach challenges with fresh perspectives, constantly seeking disruptive solutions that challenge the status quo.",
  },
  {
    icon: <Users className="h-6 w-6 text-cyan-400" />,
    title: "Client Partnership",
    description:
      "We function as an extended arm of our clients, building relationships based on mutual trust and shared success.",
  },
  {
    icon: <RefreshCw className="h-6 w-6 text-purple-400" />,
    title: "Continuous Learning",
    description:
      "We view each project and client as a source of learning, constantly evolving our knowledge and capabilities.",
  },
  {
    icon: <Shield className="h-6 w-6 text-cyan-400" />,
    title: "Integrity & Trust",
    description:
      "We operate with complete transparency and accountability, earning the trust of our clients through our actions.",
  },
]
