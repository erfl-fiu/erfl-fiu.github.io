import type { Metadata } from "next"
import Link from "next/link"

import { researchByStatus, type ResearchItem } from "@content/research"

export const metadata: Metadata = {
  title: "Research",
  description:
    "Current and earlier research in the Environmental Risk & Finance Lab.",
}

export default function ResearchPage() {
  const current = researchByStatus("current")
  const previous = researchByStatus("previous")

  return (
    <div className="mx-auto w-full max-w-[1280px] px-4 py-12 pb-24 sm:px-8 lg:px-12">
      <h1 className="max-w-3xl text-[clamp(30px,3.33vw,48px)] leading-none font-normal tracking-tight">
        Research
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed">
        Current work comes first. Each project has its own page, and a page can
        point at a repository in the{" "}
        <a
          className="text-fiu-blue underline decoration-fiu-gold underline-offset-4"
          href="https://github.com/erfl-fiu"
        >
          erfl-fiu
        </a>{" "}
        organization when that code is public.
      </p>

      <section id="current" className="mt-14 scroll-mt-8">
        <h2 className="text-[clamp(24px,2.5vw,36px)] font-medium tracking-tight">
          Current
        </h2>
        <div className="mt-6 flex flex-col">
          {current.map((item) => (
            <ResearchCard key={item.slug} item={item} />
          ))}
        </div>
      </section>

      <section id="previous" className="mt-16 scroll-mt-8">
        <h2 className="text-[clamp(24px,2.5vw,36px)] font-medium tracking-tight">
          Previous
        </h2>
        <div className="mt-6 flex flex-col">
          {previous.map((item) => (
            <ResearchCard key={item.slug} item={item} />
          ))}
        </div>
      </section>
    </div>
  )
}

function ResearchCard({ item }: { item: ResearchItem }) {
  return (
    <article className="border-t border-border py-6">
      <div className="flex gap-4 sm:gap-5">
        {item.image ? (
          <div className="relative aspect-[4/3] w-28 shrink-0 overflow-hidden sm:w-36">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.image.src}
              alt={item.image.alt}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ) : null}
        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold tracking-[0.14em] text-fiu-blue uppercase">
            {item.status}
          </p>
          <h3 className="mt-2 text-[21px] leading-snug font-semibold">
            <Link
              href={`/research/${item.slug}`}
              className="text-fiu-blue underline decoration-transparent underline-offset-4 hover:decoration-fiu-blue"
            >
              {item.title}
            </Link>
          </h3>
          <p className="mt-2 max-w-3xl text-base leading-relaxed">
            {item.summary}
          </p>
        </div>
      </div>
    </article>
  )
}
