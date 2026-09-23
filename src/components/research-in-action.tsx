import Link from "next/link"

import { researchInAction } from "@content/home"

export function ResearchInAction() {
  return (
    <div className="flex flex-col gap-14">
      {researchInAction.map((item) => {
        const imageFirst = item.imageSide === "left"
        return (
          <article
            key={item.id}
            className={
              imageFirst
                ? "grid items-center gap-6 md:grid-cols-[3fr_5fr] md:gap-10"
                : "grid items-center gap-6 md:grid-cols-[5fr_3fr] md:gap-10"
            }
          >
            <div
              className={
                imageFirst
                  ? "relative aspect-[4/3] w-3/4 overflow-hidden md:order-1 md:w-full"
                  : "relative aspect-[4/3] w-3/4 overflow-hidden md:order-2 md:w-full"
              }
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image.src}
                alt={item.image.alt}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div
              className={
                imageFirst
                  ? "flex flex-col gap-3 md:order-2"
                  : "flex flex-col gap-3 md:order-1"
              }
            >
              <p className="text-xs font-semibold tracking-[0.14em] text-fiu-gold uppercase">
                Research
              </p>
              <h3 className="font-heading text-[clamp(22px,2vw,28px)] leading-snug font-medium tracking-tight text-fiu-blue">
                <Link
                  href={item.href}
                  className="underline decoration-transparent underline-offset-4 transition-colors hover:decoration-fiu-gold"
                >
                  {item.title}
                </Link>
              </h3>
              <p className="max-w-xl text-base leading-relaxed tracking-tight text-foreground">
                {item.body}
              </p>
              <Link
                href={item.href}
                className="mt-1 inline-flex w-fit text-sm font-medium text-fiu-blue underline decoration-fiu-gold underline-offset-4"
              >
                Read more
              </Link>
            </div>
          </article>
        )
      })}
    </div>
  )
}
