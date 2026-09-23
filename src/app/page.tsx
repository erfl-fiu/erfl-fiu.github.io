import Link from "next/link"

import { approach, hero } from "@content/home"
import { latestNews } from "@content/news"
import { latestPublished } from "@content/publications"
import { ResearchInAction } from "@/components/research-in-action"

export default function HomePage() {
  const papers = latestPublished(3)
  const headlines = latestNews(3)

  return (
    <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-20 px-4 pt-10 pb-24 sm:px-8 lg:px-12">
      <section className="flex flex-col gap-6">
        <div className="flex max-w-4xl flex-col gap-4">
          <h1 className="font-heading text-[clamp(32px,4vw,56px)] leading-[1.05] font-medium tracking-tight text-fiu-blue">
            {hero.title}
          </h1>
          <p className="max-w-3xl text-lg leading-snug tracking-tight text-foreground sm:text-xl">
            {hero.subline}
          </p>
          <p className="text-base tracking-tight text-muted-foreground">
            <span className="text-foreground">{hero.bylineName}</span>{" "}
            {hero.bylineRest}
          </p>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={hero.image.src}
          alt={hero.image.alt}
          className="aspect-3/2 w-full object-cover md:aspect-[1280/412]"
        />
      </section>

      <section className="flex flex-col gap-10">
        <div className="flex max-w-2xl flex-col gap-3">
          <h2 className="font-heading text-[clamp(26px,2.8vw,40px)] leading-tight font-medium tracking-tight text-fiu-blue">
            Research in Action
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Three lines of work that connect hazard models to financial design
            at FIU and beyond.
          </p>
        </div>
        <ResearchInAction />
      </section>

      <section className="border-t border-fiu-gold/40 pt-12">
        <div className="flex max-w-2xl flex-col gap-3">
          <h2 className="font-heading text-[clamp(26px,2.8vw,40px)] leading-tight font-medium tracking-tight text-fiu-blue">
            How we work
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Methods that turn hazard estimates into contracts people can use.
          </p>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-3 md:gap-6">
          {approach.map((item, index) => (
            <div key={item.title} className="flex flex-col gap-3">
              <span className="font-heading text-3xl font-medium text-fiu-gold">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg leading-snug font-semibold tracking-tight text-fiu-blue">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed tracking-tight text-foreground">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-10 border-t border-border pt-12 md:grid-cols-2">
        <div>
          <h2 className="font-heading text-2xl font-medium text-fiu-blue">
            Latest news
          </h2>
          <ul className="mt-5 flex flex-col gap-4">
            {headlines.map((item) => (
              <li key={item.date} className="text-sm leading-6">
                <span className="text-muted-foreground">{item.label}</span>
                <span className="mt-0.5 block">{item.text}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/news"
            className="mt-5 inline-block text-sm text-fiu-blue underline decoration-fiu-gold underline-offset-4"
          >
            All news
          </Link>
        </div>
        <div>
          <h2 className="font-heading text-2xl font-medium text-fiu-blue">
            Recent papers
          </h2>
          <ul className="mt-5 flex flex-col gap-4">
            {papers.map((item) => (
              <li key={item.id} className="text-sm leading-6">
                <Link href="/publications" className="text-foreground">
                  {item.title}
                </Link>
                <span className="mt-0.5 block text-muted-foreground">
                  {item.venue}
                  {item.year ? `, ${item.year}` : ""}
                </span>
              </li>
            ))}
          </ul>
          <Link
            href="/publications"
            className="mt-5 inline-block text-sm text-fiu-blue underline decoration-fiu-gold underline-offset-4"
          >
            All publications
          </Link>
        </div>
      </section>
    </div>
  )
}
