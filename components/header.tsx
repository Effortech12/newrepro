"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-[200px]">
            <Image src="/effortechlogo.png" alt="Effortech Logo" width={150} height={48} className="w-full h-auto" />
          </div>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link
            href="/#services"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              isActive("/#services") ? "text-primary" : "text-muted-foreground",
            )}
          >
            Services
          </Link>
          <Link
            href="/about-us"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              isActive("/about-us") ? "text-primary" : "text-muted-foreground",
            )}
          >
            About
          </Link>
          <Link
            href="/careers"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              isActive("/careers") ? "text-primary" : "text-muted-foreground",
            )}
          >
            Careers
          </Link>
          <a
            href="https://www.effor.tech/academy/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground flex items-center gap-1"
          >
            Effortech Academy
            <ExternalLink className="h-3 w-3" />
          </a>
          <Link
            href="/contact"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              isActive("/contact") ? "text-primary" : "text-muted-foreground",
            )}
          >
            Contact
          </Link>
        </nav>
        <Link href="/contact" className="hidden md:inline-flex">
          <Button>Get Started</Button>
        </Link>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className={cn("h-6 w-6", isMenuOpen ? "hidden" : "block")} />
          <X className={cn("h-6 w-6", isMenuOpen ? "block" : "hidden")} />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>
      {isMenuOpen && (
        <div className="container md:hidden">
          <nav className="flex flex-col space-y-3 pb-3">
            <Link
              href="/#services"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive("/#services") ? "text-primary" : "text-muted-foreground",
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about-us"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive("/about-us") ? "text-primary" : "text-muted-foreground",
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/careers"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive("/careers") ? "text-primary" : "text-muted-foreground",
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              Careers
            </Link>
            <a
              href="https://www.effor.tech/academy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground flex items-center gap-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Effortech Academy
              <ExternalLink className="h-3 w-3" />
            </a>
            <Link
              href="/contact"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive("/contact") ? "text-primary" : "text-muted-foreground",
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link href="/contact" className="w-full" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full">Get Started</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
