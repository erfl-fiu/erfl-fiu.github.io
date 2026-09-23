"use client"

import { useMemo, useState } from "react"

import {
  publicationNote,
  publications,
  type PublicationStatus,
} from "@content/publications"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type Filter = "all" | PublicationStatus

export function PublicationList() {
  const [query, setQuery] = useState("")
  const [status, setStatus] = useState<Filter>("all")

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase()
    return publications.filter((item) => {
      if (status !== "all" && item.status !== status) return false
      if (!needle) return true
      const haystack = `${item.title} ${item.authors} ${item.venue}`.toLowerCase()
      return haystack.includes(needle)
    })
  }, [query, status])

  const inReview = filtered.filter((item) => item.status === "in-review")
  const years = [
    ...new Set(
      filtered
        .filter((item) => item.status === "published" && item.year)
        .map((item) => item.year as number),
    ),
  ].sort((a, b) => b - a)

  return (
    <div>
      <p className="text-sm text-muted-foreground">{publicationNote}</p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <label className="sr-only" htmlFor="publication-search">
          Search publications
        </label>
        <Input
          id="publication-search"
          value={query}
          onValueChange={(value) => setQuery(value)}
          placeholder="Search title, author, or journal"
          className="h-10 sm:max-w-sm"
        />
        <Select
          value={status}
          onValueChange={(value) => setStatus(value as Filter)}
        >
          <SelectTrigger className="h-10 w-full sm:w-48" aria-label="Status">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="published">Published</SelectItem>
            <SelectItem value="in-review">In review</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 text-base text-muted-foreground">
          No publications match that search.
        </p>
      ) : (
        <div className="mt-10 flex flex-col gap-12">
          {inReview.length > 0 ? (
            <section>
              <h2 className="text-2xl font-medium tracking-tight">In review</h2>
              <ol className="mt-6 flex flex-col gap-8">
                {inReview.map((item, index) => (
                  <PublicationEntry
                    key={item.id}
                    index={index + 1}
                    item={item}
                  />
                ))}
              </ol>
            </section>
          ) : null}
          {years.map((year) => (
            <section key={year}>
              <h2 className="text-2xl font-medium tracking-tight">{year}</h2>
              <ol className="mt-6 flex flex-col gap-8">
                {filtered
                  .filter((item) => item.year === year)
                  .map((item, index) => (
                    <PublicationEntry
                      key={item.id}
                      index={index + 1}
                      item={item}
                    />
                  ))}
              </ol>
            </section>
          ))}
        </div>
      )}
    </div>
  )
}

function PublicationEntry({
  item,
  index,
}: {
  item: (typeof publications)[number]
  index: number
}) {
  const number = String(index).padStart(2, "0")
  return (
    <li className="grid gap-3 border-t border-border pt-6 md:grid-cols-[4rem_1fr]">
      <p className="font-sans text-sm font-semibold text-fiu-blue">{number}</p>
      <div>
        <h3 className="text-[21px] leading-snug font-semibold tracking-tight">
          {item.title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          {item.authors}
        </p>
        <p className="mt-1 text-base leading-relaxed">
          <span className="italic">{item.venue}</span>
          {item.year ? `, ${item.year}` : ""}
          {item.note ? ` · ${item.note}` : ""}
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-4 text-sm">
          {item.href ? (
            <a
              href={item.href}
              className="text-fiu-blue underline decoration-fiu-gold underline-offset-4"
            >
              {item.hrefLabel ?? "Link"}
            </a>
          ) : null}
          {item.abstract ? (
            <details className="w-full">
              <summary className="cursor-pointer text-fiu-blue">
                Abstract
              </summary>
              <p className="mt-3 max-w-3xl text-base leading-relaxed text-foreground">
                {item.abstract}
              </p>
            </details>
          ) : null}
        </div>
      </div>
    </li>
  )
}
