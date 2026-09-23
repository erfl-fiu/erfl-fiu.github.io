import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { publicationById } from "@content/publications"
import { research, researchBySlug } from "@content/research"

export function generateStaticParams() {
  return research.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const item = researchBySlug(slug)
  if (!item) return { title: "Research" }
  return { title: item.title, description: item.summary }
}

export default async function ResearchDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const item = researchBySlug(slug)
  if (!item) notFound()

  const papers = item.papers
    .map((id) => publicationById(id))
    .filter((paper) => paper !== undefined)

  return (
    <article className="mx-auto w-full max-w-[1280px] px-4 py-12 pb-24 sm:px-8 lg:px-12">
      <p className="text-xs font-semibold tracking-[0.14em] text-fiu-blue uppercase">
        <Link href="/research" className="hover:underline">
          Research
        </Link>
        <span className="px-2 text-muted-foreground">/</span>
        {item.status}
      </p>
      <h1 className="mt-4 max-w-4xl text-[clamp(30px,3.33vw,48px)] leading-none font-normal tracking-tight">
        {item.title}
      </h1>
      <p className="mt-5 max-w-3xl text-lg leading-relaxed">{item.summary}</p>
      <div className="mt-8 flex max-w-3xl flex-col gap-4">
        {item.body.map((paragraph) => (
          <p key={paragraph} className="text-base leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-12 grid gap-10 border-t border-border pt-8 md:grid-cols-3">
        <div>
          <h2 className="text-lg font-semibold">People</h2>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            {item.people.map((person) => (
              <li key={person}>
                <Link
                  href={person === "Dan Li" ? "/people" : "/people#previous"}
                  className="text-fiu-blue underline decoration-fiu-gold underline-offset-4"
                >
                  {person}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Papers</h2>
          {papers.length === 0 ? (
            <p className="mt-3 text-sm text-muted-foreground">
              Papers will be listed here as they are released.
            </p>
          ) : (
            <ul className="mt-3 flex flex-col gap-3 text-sm">
              {papers.map((paper) => (
                <li key={paper.id}>
                  {paper.href ? (
                    <a
                      href={paper.href}
                      className="text-fiu-blue underline decoration-fiu-gold underline-offset-4"
                    >
                      {paper.title}
                    </a>
                  ) : (
                    <span>{paper.title}</span>
                  )}
                  <span className="mt-1 block text-muted-foreground">
                    {paper.venue}
                    {paper.status === "in-review" ? " · In review" : ""}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <h2 className="text-lg font-semibold">Links</h2>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            {item.repo ? (
              <li>
                <a
                  href={item.repo}
                  className="text-fiu-blue underline decoration-fiu-gold underline-offset-4"
                >
                  Project repository
                </a>
              </li>
            ) : (
              <li className="text-muted-foreground">
                No public repository yet.
              </li>
            )}
            {item.links?.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-fiu-blue underline decoration-fiu-gold underline-offset-4"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}
