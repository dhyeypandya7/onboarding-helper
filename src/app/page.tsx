'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { generateEmailContent } from './utils/generateEmailContent';
import { WelcomeMessage } from '@/components/WelcomeMessage'
import { registerTeam } from './actions'

export default function Home() {
  const [isPending, setIsPending] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    teamName: '',
    workEmail: '',
    workPassword: '',
    teamsEmail: '',
    teamsPassword: '',
    krollUsername: '',
    krollPassword: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [successMessage, setSuccessMessage] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsPending(true)
    setErrors({})
    setSuccessMessage('')

    const result = await registerTeam(formData)
    setIsPending(false)

    if (result && result.success && result.data) {
      setSuccessMessage(result.message || "")
      const mailtoLink = generateEmailContent(result.data);
      window.open(mailtoLink, '_blank');
    } else {
      setErrors(result.errors as Record<string, string>)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Team Registration</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">User&apos;s Name</Label>
                <Input id="name" name="name" required value={formData.name} onChange={handleInputChange} />
                {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Personal Email</Label>
                <Input id="email" name="email" type="email" required value={formData.email} onChange={handleInputChange} />
                {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="teamName">Team Name</Label>
                <Input id="teamName" name="teamName" required value={formData.teamName} onChange={handleInputChange} />
                {errors.teamName && <p className="text-sm text-red-500">{errors.teamName}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="workEmail">Work Email</Label>
                <Input id="workEmail" name="workEmail" type="email" required value={formData.workEmail} onChange={handleInputChange} />
                {errors.workEmail && <p className="text-sm text-red-500">{errors.workEmail}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="workPassword">Work Password</Label>
                <Input id="workPassword" name="workPassword" type="password" required value={formData.workPassword} onChange={handleInputChange} />
                {errors.workPassword && <p className="text-sm text-red-500">{errors.workPassword}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="teamsEmail">Teams Email</Label>
                <Input id="teamsEmail" name="teamsEmail" type="email" required value={formData.teamsEmail} onChange={handleInputChange} />
                {errors.teamsEmail && <p className="text-sm text-red-500">{errors.teamsEmail}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="teamsPassword">Teams Password</Label>
                <Input id="teamsPassword" name="teamsPassword" type="password" required value={formData.teamsPassword} onChange={handleInputChange} />
                {errors.teamsPassword && <p className="text-sm text-red-500">{errors.teamsPassword}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="krollUsername">Kroll Username</Label>
                <Input id="krollUsername" name="krollUsername" required value={formData.krollUsername} onChange={handleInputChange} />
                {errors.krollUsername && <p className="text-sm text-red-500">{errors.krollUsername}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="krollPassword">Kroll Password</Label>
                <Input id="krollPassword" name="krollPassword" type="password" required value={formData.krollPassword} onChange={handleInputChange} />
                {errors.krollPassword && <p className="text-sm text-red-500">{errors.krollPassword}</p>}
              </div>
              <Button type="submit" className="w-full" disabled={isPending}>
                {isPending ? 'Registering...' : 'Register Team'}
              </Button>
            </form>
            {successMessage && (
              <Alert className="mt-4">
                <AlertDescription>{successMessage}</AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>
        <WelcomeMessage {...formData} />
      </div>
    </main>
  )
}

