import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container py-6">
        <div className="grid gap-4 lg:grid-cols-4">
          <div className="space-y-2">
            <h3 className="mb-1 text-xs font-medium">Effortech</h3>
            <p className="text-xs text-muted-foreground">
              Technology Risk Management solutions for the financial sector in India.
            </p>
            <div className="flex space-x-2">
              
              <Link href="https://www.linkedin.com/company/effortech-technology/posts/?feedView=all" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
          
            </div>
          </div>

          <div>
            <h3 className="mb-1 text-xs font-medium">Services</h3>
            <ul className="space-y-1 text-xs">
              <li>
                <Link href="https://www.effor.tech/observability" className="text-muted-foreground hover:text-primary">
                  Business Service Observability
                </Link>
              </li>
              <li>
                <Link href="https://www.effor.tech/audit-compliance" className="text-muted-foreground hover:text-primary">
                  Audit & Compliance as a Service
                </Link>
              </li>
              <li>
                <Link href="https://www.effor.tech/trik" className="text-muted-foreground hover:text-primary">
                  Internal Risk Management Tool - TRIK
                </Link>
              </li>
              <li>
                <Link href="https://www.effor.tech/automation" className="text-muted-foreground hover:text-primary">
                  Automation
                </Link>
              </li>
              <li>
                <Link href="https://www.effor.tech/program-management" className="text-muted-foreground hover:text-primary">
                  Program Management
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-1 text-xs font-medium">Company</h3>
            <ul className="space-y-1 text-xs">
              <li>
                <Link href="https://www.effor.tech/about-us" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-primary">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-1 text-xs font-medium">Legal</h3>
            <ul className="space-y-1 text-xs">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4 border-t border-border/40 pt-3 text-center">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Effortech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
