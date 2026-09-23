import type { Metadata } from "next"

import { newsByYear } from "@content/news"

export const metadata: Metadata = {
  title: "News",
  description: "Short updates from the Environmental Risk & Finance Lab.",
}

export default function NewsPage() {
  const groups = newsByYear()

  return (
    <div className="mx-auto w-full max-w-[1280px] px-4 py-12 pb-24 sm:px-8 lg:px-12">
      <h1 className="text-[clamp(30px,3.33vw,48px)] leading-none font-normal tracking-tight">
        News
      </h1>
      <div className="mt-10 flex max-w-3xl flex-col gap-12">
        {groups.map(([year, items]) => (
          <section key={year}>
            <h2 className="text-2xl font-medium tracking-tight">{year}</h2>
            <ul className="mt-4">
              {items.map((item) => (
                <li
                  key={item.date}
                  className="grid gap-1 border-t border-border py-3 sm:grid-cols-[9rem_1fr] sm:gap-6"
                >
                  <span className="text-sm text-muted-foreground">
                    {item.label}
                  </span>
                  <span className="text-base">{item.text}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  )
}
