import { Card, CardContent } from "@/components/ui/card"

export function AboutTeam() {
  return (
    <section className="py-12 bg-gradient-to-b from-background to-background/95">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-10 animate-fade-in">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-3">Our Team</h2>
          <p className="max-w-[42rem] text-muted-foreground sm:text-lg">
            A young, energetic team of banking technology experts eager to disrupt the status quo
          </p>
        </div>

        <div className="max-w-3xl mx-auto text-center animate-slide-up animation-delay-200">
          <Card className="bg-background/50 border-purple-900/20">
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-6">
                Our team combines seasoned banking technology professionals with over 15 years of experience with young,
                innovative minds eager to challenge conventional approaches. This unique blend of deep industry
                knowledge and fresh perspectives enables us to develop solutions that are both practical and
                forward-thinking.
              </p>

              <p className="text-muted-foreground">
                We're united by our passion for technology and our commitment to helping financial institutions navigate
                the complex landscape of digital transformation. Our diverse backgrounds and expertise allow us to
                approach challenges from multiple angles, ensuring comprehensive and effective solutions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
