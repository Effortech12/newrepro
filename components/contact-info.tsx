import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Clock, Phone } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="space-y-4">
      <Card className="bg-background/50 border-cyan-900/20">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <div className="rounded-lg bg-cyan-900/20 p-2">
              <Mail className="h-4 w-4 text-cyan-400" />
            </div>
            <div>
              <h3 className="font-medium text-sm">Email Us</h3>
              <p className="text-xs text-muted-foreground mt-1">Our friendly team is here to help</p>
              <a href="mailto:info@effor.tech" className="text-xs text-cyan-400 hover:underline mt-1 inline-block">
                info@effor.tech
              </a>
            </div>
          </div>
        </CardContent>
      </Card>

    

      <Card className="bg-background/50 border-cyan-900/20">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <div className="rounded-lg bg-cyan-900/20 p-2">
              <Clock className="h-4 w-4 text-cyan-400" />
            </div>
            <div>
              <h3 className="font-medium text-sm">Business Hours</h3>
              <p className="text-xs text-muted-foreground mt-1">We're available during these hours</p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 mt-1 text-xs">
                <span>Monday - Friday:</span>
                <span>9:00 AM - 6:00 PM IST</span>
                <span>Saturday:</span>
                <span>10:00 AM - 2:00 PM IST</span>
                <span>Sunday:</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-background/50 border-purple-900/20">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <div className="rounded-lg bg-purple-900/20 p-2">
              <MapPin className="h-4 w-4 text-purple-400" />
            </div>
            <div>
              <h3 className="font-medium text-sm">Visit Us</h3>
              <p className="text-xs text-muted-foreground mt-1">Come say hello at our offices</p>

              <div className="mt-2">
                <h4 className="text-xs font-medium">1. Bangalore</h4>
                <p className="text-xs text-muted-foreground mt-0.5">
                  #104, C Block, 2 Arcadia, Krupanidhi College Road, Bengaluru, Karnataka 560035
                </p>
                <div className="mt-2 mb-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7007270342097!2d77.6219!3d12.9244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU1JzI3LjgiTiA3N8KwMzcnMTguOCJF!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
                    width="100%"
                    height="150"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                    title="Effortech Bangalore Office Location"
                  ></iframe>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-medium">2. Noida</h4>
                <p className="text-xs text-muted-foreground mt-0.5">
                  5th Floor, Lets, Connect Business Park, A-57, Sector 136, Noida, Uttar Pradesh 201301
                </p>
                <div className="mt-2">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.5548043259374!2d77.3969!3d28.5356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMyJzA4LjIiTiA3N8KwMjMnNDguOCJF!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
                    width="100%"
                    height="150"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                    title="Effortech Noida Office Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
