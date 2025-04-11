import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, organization, message } = body

    // Validate the required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email and message are required" }, { status: 400 })
    }

    // Log the form submission (for debugging)
    console.log("Form submission received:", { name, email, organization, message })

    // In a production environment, you would send this data to an email service or database
    // For now, we'll just simulate a successful submission

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been received. In a production environment, this would be emailed to the team.",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ error: "Failed to process form submission" }, { status: 500 })
  }
}
