"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Send, CheckCircle } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          message: `Service of Interest: ${formData.service}\nPhone: ${formData.phone || "Not provided"}\n\n${formData.message}`,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong")
      }

      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        organization: "",
        phone: "",
        service: "",
        message: "",
      })
    } catch (error) {
      setError((error as Error).message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="bg-background/50 border-purple-900/20">
      <CardHeader className="pb-2 space-y-1">
        <CardTitle className="text-lg flex items-center gap-2">
          <Send className="h-4 w-4 text-purple-400" />
          Send us a message
        </CardTitle>
        <CardDescription className="text-xs">
          Fill out the form below and our team will get back to you shortly
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="rounded-full bg-green-500/10 p-3 mb-4">
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
            <h3 className="text-xl font-medium mb-2">Message Sent!</h3>
            <p className="text-sm text-muted-foreground mb-6 max-w-md">
              Thank you for reaching out. Our team will review your message and get back to you within 24-48 hours.
            </p>
            <Button variant="outline" onClick={() => setIsSubmitted(false)}>
              Send Another Message
            </Button>
          </div>
        ) : (
          <form className="grid gap-3" onSubmit={handleSubmit}>
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <Input
                  placeholder="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="text-sm h-9"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <Input
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="text-sm h-9"
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>
            <div>
              <Input
                placeholder="Organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                className="text-sm h-9"
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <Input
                placeholder="Phone Number (Optional)"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="text-sm h-9"
                disabled={isSubmitting}
              />
            </div>
            <div>
              <select
                className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                defaultValue=""
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              >
                <option value="" disabled>
                  Select Service of Interest
                </option>
                <option value="observability">Business Service Observability</option>
                <option value="compliance">Audit & Compliance as a Service</option>
                <option value="trik">Internal Risk Management Tool (TRIK)</option>
                <option value="automation">Automation</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="min-h-[120px] text-sm resize-none"
                required
                disabled={isSubmitting}
              />
            </div>
            {error && <div className="text-sm text-red-500 mt-1">{error}</div>}
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  )
}
