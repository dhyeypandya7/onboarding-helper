import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface WelcomeMessageProps {
  name: string
  workEmail: string
  workPassword: string
  teamsEmail: string
  teamsPassword: string
  krollUsername: string
  krollPassword: string
}

export function WelcomeMessage({
  name,
  workEmail,
  workPassword,
  teamsEmail,
  teamsPassword,
  krollUsername,
  krollPassword
}: WelcomeMessageProps) {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Welcome Message</CardTitle>
      </CardHeader>
      <CardContent className="prose">
        <p>Hello {name},</p>
        <p>Welcome to the Silver Scripts team! We are excited to have you on board. To help you get started, here are the details for your work email and credentials for accessing our software systems:</p>
        <h3>Work Email Account:</h3>
        <p>
          Email Address: {workEmail}<br />
          Password: {workPassword}
        </p>
        <h3>Software Access:</h3>
        <p>Below are the login details for the key software tools you&apos;ll be using:</p>
        <h4>MS Teams:</h4>
        <p>
          Username: {teamsEmail}<br />
          Password: {teamsPassword}
        </p>
        <h4>Kroll:</h4>
        <p>
          Username: {krollUsername}<br />
          Password: {krollPassword}
        </p>
        <p>If you encounter any issues or have any questions regarding these credentials, feel free to reach out to me directly. I&apos;m here to help! Looking forward to your success at Silver Scripts Ottawa.</p>
      </CardContent>
    </Card>
  )
}

