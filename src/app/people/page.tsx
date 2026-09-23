import type { Metadata } from "next"
import Link from "next/link"

import { currentPeople, mentoredStudents, type Person } from "@content/people"

export const metadata: Metadata = {
  title: "People",
  description: "People in the Environmental Risk & Finance Lab.",
}

export default function PeoplePage() {
  return (
    <div className="mx-auto w-full max-w-[1280px] px-4 py-12 pb-24 sm:px-8 lg:px-12">
      <h1 className="sr-only">People</h1>
      <div className="flex flex-col gap-16">
        {currentPeople.map((person) => (
          <PersonRow key={person.id} person={person} />
        ))}
      </div>

      <section id="previous" className="mt-20 scroll-mt-8">
        <h2 className="text-[21px] font-semibold tracking-tight">
          Students Mentored
        </h2>
        <ul className="mt-4 max-w-3xl">
          {mentoredStudents.map((student) => (
            <li
              key={student.name}
              className="grid gap-1 border-t border-border py-3 sm:grid-cols-[minmax(0,16rem)_1fr] sm:items-baseline sm:gap-8"
            >
              <span className="font-medium">{student.name}</span>
              <span className="text-sm text-muted-foreground">
                {student.role}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-12 max-w-xl text-base leading-relaxed">
        Interested in joining the lab?{" "}
        <Link
          href="/join"
          className="text-fiu-blue underline decoration-fiu-gold underline-offset-4"
        >
          See open roles
        </Link>
        .
      </p>
    </div>
  )
}

function PersonRow({ person }: { person: Person }) {
  const heading = person.name ?? person.role
  return (
    <article className="grid items-start gap-6 md:grid-cols-[minmax(0,306px)_minmax(0,1fr)] md:gap-10">
      {person.photo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={person.photo}
          alt=""
          className="aspect-square w-full max-w-[306px] object-cover"
        />
      ) : (
        <div
          className="aspect-square w-full max-w-[306px] border border-border bg-fiu-wash"
          aria-hidden="true"
        />
      )}
      <div className="flex flex-col gap-3">
        <div>
          <h2 className="text-[21px] font-semibold tracking-tight">{heading}</h2>
          {person.name ? (
            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              {person.role.split("\n").map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          ) : null}
        </div>
        <div className="flex max-w-3xl flex-col gap-4">
          {(person.biography ?? "Biography forthcoming.")
            .split(/\n\s*\n/)
            .map((paragraph) => paragraph.trim())
            .filter(Boolean)
            .map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed">
                {paragraph}
              </p>
            ))}
        </div>
        {person.links.length > 0 ? (
          <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {person.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-fiu-blue underline decoration-fiu-gold underline-offset-4"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  )
}
