"use client"

import { FormEvent, useState } from "react"

import { joinSubject, primaryEmail } from "@content/site"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const roles = [
  "Ph.D. student",
  "Postdoctoral researcher",
  "Visiting scholar",
  "Undergraduate or master's researcher",
]

export function JoinForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [role, setRole] = useState(roles[0])
  const [interests, setInterests] = useState("")
  const [error, setError] = useState("")

  function onSubmit(event?: FormEvent) {
    event?.preventDefault()
    if (!name.trim() || !interests.trim()) {
      setError("Add your name and a short note on your interests.")
      return
    }
    setError("")
    const body = [
      "Hello Dr. Li,",
      "",
      `My name is ${name.trim()}. I am writing about a ${role} position in the Environmental Risk & Finance Lab.`,
      "",
      interests.trim(),
      "",
      email.trim() ? `You can reach me at ${email.trim()}.` : "",
      "",
      "I will attach my CV before sending.",
    ]
      .filter((line, index, all) => line !== "" || all[index - 1] !== "")
      .join("\n")

    const href = `mailto:${primaryEmail}?subject=${encodeURIComponent(
      joinSubject(role),
    )}&body=${encodeURIComponent(body)}`
    window.location.href = href
  }

  return (
    <form onSubmit={onSubmit} className="flex max-w-xl flex-col gap-4">
      <p className="rounded-md border border-border bg-fiu-wash px-4 py-3 text-sm leading-6 text-foreground">
        Email{" "}
        <a
          className="text-fiu-blue underline decoration-fiu-gold underline-offset-4"
          href={`mailto:${primaryEmail}?subject=${encodeURIComponent(joinSubject(role))}`}
        >
          {primaryEmail}
        </a>
        . Put this exact title line in the subject:{" "}
        <span className="font-medium">
          “{joinSubject(role)}”
        </span>
        . The button below opens your email program with that title already
        filled in. Attach your CV before you send.
      </p>
      <div className="flex flex-col gap-2">
        <Label htmlFor="join-name">Name</Label>
        <Input
          id="join-name"
          value={name}
          onValueChange={(value) => setName(value)}
          autoComplete="name"
          className="h-10"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="join-email">Email</Label>
        <Input
          id="join-email"
          type="email"
          value={email}
          onValueChange={(value) => setEmail(value)}
          autoComplete="email"
          className="h-10"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="join-role">Position</Label>
        <Select value={role} onValueChange={(value) => setRole(value ?? roles[0])}>
          <SelectTrigger id="join-role" className="h-10 w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {roles.map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="join-interests">Interests</Label>
        <Textarea
          id="join-interests"
          value={interests}
          onChange={(event) => setInterests(event.target.value)}
          rows={5}
          placeholder="What would you like to work on, and when could you start?"
        />
      </div>
      {error ? <p className="text-sm text-destructive">{error}</p> : null}
      <div>
        <Button type="button" className="h-10 px-4" onClick={() => onSubmit()}>
          Review before sending
        </Button>
        <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
          The next step opens your email program. Attach your CV there, then
          review and send the message yourself. Nothing is stored on this site.
        </p>
      </div>
    </form>
  )
}
