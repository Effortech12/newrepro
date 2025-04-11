import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Skeleton } from "@/components/ui/skeleton"

export default function AboutUsLoading() {
  return (
    <div className="dark flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <Skeleton className="h-6 w-32 mb-3 rounded-full" />
              <Skeleton className="h-12 w-full max-w-xl mb-3" />
              <Skeleton className="h-12 w-3/4 max-w-lg mb-3" />
              <Skeleton className="h-5 w-full max-w-md mb-2" />
              <Skeleton className="h-5 w-5/6 max-w-md mb-6" />
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="container">
            <Skeleton className="h-8 w-64 mx-auto mb-6" />
            <div className="grid gap-4 md:grid-cols-2 max-w-4xl mx-auto">
              <Skeleton className="h-48 w-full rounded-lg" />
              <div className="space-y-3">
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-4/5" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="container">
            <Skeleton className="h-8 w-64 mx-auto mb-6" />
            <div className="grid gap-4 md:grid-cols-3 max-w-5xl mx-auto">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-64 w-full rounded-lg" />
              ))}
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="container">
            <Skeleton className="h-8 w-64 mx-auto mb-6" />
            <div className="grid gap-4 md:grid-cols-2 max-w-4xl mx-auto">
              <Skeleton className="h-48 w-full rounded-lg" />
              <div className="space-y-3">
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-4/5" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
