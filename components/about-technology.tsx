import { Card, CardContent } from "@/components/ui/card"
import { Cpu, Brain, Workflow, Zap } from "lucide-react"

export function AboutTechnology() {
  return (
    <section className="py-12 bg-gradient-to-b from-background to-background/95">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-10 animate-fade-in">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-3">Leveraging Cutting-Edge Technology</h2>
          <p className="max-w-[42rem] text-muted-foreground sm:text-lg">
            We harness the power of AI, ML, and automation to deliver smarter, more efficient solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-bold mb-4 text-center">Intelligent Solutions for Complex Banking Challenges</h3>
          <p className="text-muted-foreground mb-6 text-center">
            At Effortech, we believe in the transformative power of emerging technologies. We integrate artificial
            intelligence, machine learning, and automation into our solutions to help financial institutions streamline
            operations, enhance decision-making, and deliver exceptional customer experiences.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="bg-background/50 border-purple-900/20">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-purple-900/10 p-2 h-fit">
                    <Brain className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-base mb-1">AI-Powered Analytics</h3>
                    <p className="text-xs text-muted-foreground">
                      Advanced analytics solutions that transform raw data into actionable insights, enabling
                      data-driven decision making
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/50 border-cyan-900/20">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-cyan-900/10 p-2 h-fit">
                    <Cpu className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-base mb-1">Machine Learning Models</h3>
                    <p className="text-xs text-muted-foreground">
                      Custom ML models for risk assessment, fraud detection, and customer behavior prediction
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/50 border-purple-900/20">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-purple-900/10 p-2 h-fit">
                    <Workflow className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-base mb-1">Intelligent Automation</h3>
                    <p className="text-xs text-muted-foreground">
                      End-to-end automation solutions that reduce manual effort, minimize errors, and accelerate
                      processes
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/50 border-cyan-900/20">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-cyan-900/10 p-2 h-fit">
                    <Zap className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-base mb-1">Predictive Capabilities</h3>
                    <p className="text-xs text-muted-foreground">
                      Proactive identification of potential issues before they impact business operations
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
