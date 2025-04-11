import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Target, Rocket } from "lucide-react"

export function AboutMission() {
  return (
    <section className="py-12 bg-gradient-to-b from-background to-background/95">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-10 animate-fade-in">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-3">Our Mission & Vision</h2>
          <p className="max-w-[42rem] text-muted-foreground sm:text-lg">
            Redefining technology services for the financial sector through innovation, expertise, and partnership
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          <Card className="bg-background/50 border-purple-900/20 animate-slide-up animation-delay-100">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="rounded-full bg-purple-900/10 p-3 w-14 h-14 mb-4 flex items-center justify-center">
                <Lightbulb className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Our Mission</h3>
              <p className="text-sm text-muted-foreground">
                To empower financial institutions with innovative technology solutions that address real-world
                challenges efficiently, enabling them to deliver exceptional services to their customers.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background/50 border-cyan-900/20 animate-slide-up animation-delay-200">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="rounded-full bg-cyan-900/10 p-3 w-14 h-14 mb-4 flex items-center justify-center">
                <Target className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Our Vision</h3>
              <p className="text-sm text-muted-foreground">
                To become the next generation of technology service providers, recognized for our speed of execution,
                quality of deliverables, and disruptive approaches to solving complex banking technology challenges.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background/50 border-purple-900/20 animate-slide-up animation-delay-300">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="rounded-full bg-purple-900/10 p-3 w-14 h-14 mb-4 flex items-center justify-center">
                <Rocket className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Our Approach</h3>
              <p className="text-sm text-muted-foreground">
                We function as an extended arm of our clients, building relationships based on mutual trust and
                delivering solutions that drive tangible business outcomes through innovative technology implementation.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
