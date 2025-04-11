import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export function AboutExpertise() {
  return (
    <section className="py-12 bg-gradient-to-b from-background/95 to-background">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="w-full animate-slide-in-right animation-delay-300">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-4 text-center">
              First-Hand Experience with Banking Technology Challenges
            </h2>
            <p className="text-muted-foreground mb-6 text-center max-w-3xl mx-auto">
              Our team has spent over 15 years building technology stacks for banks across different geographies and
              driving digital transformation initiatives. This hands-on experience has given us unique insights into the
              challenges faced at the ground level, enabling us to develop solutions that address real-world problems
              efficiently.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 max-w-4xl mx-auto">
              <Card className="bg-background/50 border-purple-900/20">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-purple-400 mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-medium text-base mb-1">Core Banking Expertise</h3>
                      <p className="text-xs text-muted-foreground">
                        Deep understanding of core banking systems, integration challenges, and modernization approaches
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-background/50 border-cyan-900/20">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-cyan-400 mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-medium text-base mb-1">Digital Transformation</h3>
                      <p className="text-xs text-muted-foreground">
                        Proven track record in guiding banks through successful digital transformation journeys
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-background/50 border-purple-900/20">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-purple-400 mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-medium text-base mb-1">Regulatory Compliance</h3>
                      <p className="text-xs text-muted-foreground">
                        Extensive knowledge of banking regulations and compliance requirements across markets
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-background/50 border-cyan-900/20">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-cyan-400 mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-medium text-base mb-1">Risk Management</h3>
                      <p className="text-xs text-muted-foreground">
                        Specialized knowledge in technology risk assessment and mitigation for financial institutions
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
