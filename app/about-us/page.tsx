import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { AboutMission } from "@/components/about-mission"
import { AboutExpertise } from "@/components/about-expertise"
import { AboutTechnology } from "@/components/about-technology"
import { AboutValues } from "@/components/about-values"
import { AboutTeam } from "@/components/about-team"
import { AboutCallToAction } from "@/components/about-call-to-action"

export const metadata = {
  title: "About Us - Effortech",
  description:
    "Learn about Effortech's team of banking technology professionals with 15+ years of experience driving digital transformation in the financial sector.",
}

export default function AboutUsPage() {
  return (
    <div className="dark flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <AboutHero />
        <AboutMission />
        <AboutExpertise />
        <AboutTechnology />
        <AboutValues />
        <AboutTeam />
        <AboutCallToAction />
      </main>
      <Footer />
    </div>
  )
}
