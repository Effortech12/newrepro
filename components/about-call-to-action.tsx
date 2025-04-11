import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AboutCallToAction() {
  return (
    <section className="py-12 bg-gradient-to-b from-background/95 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-purple-900/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-24 w-64 h-64 bg-cyan-900/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-4 animate-fade-in">
            Ready to Transform Your Banking Technology?
          </h2>
          <p className="text-muted-foreground mb-8 sm:text-lg animate-fade-in animation-delay-100">
            Partner with Effortech to leverage our expertise in banking technology, AI, ML, and automation to solve your
            most complex challenges efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-200">
            <Link href="/contact">
              <Button size="lg">Contact Us Today</Button>
            </Link>
            <Link href="/#services">
              <Button variant="outline" size="lg">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
