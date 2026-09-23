import type { Metadata } from "next"

import { PublicationList } from "@/components/publication-list"

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Journal articles and manuscripts from the Environmental Risk & Finance Lab.",
}

export default function PublicationsPage() {
  return (
    <div className="mx-auto w-full max-w-[1280px] px-4 py-12 pb-24 sm:px-8 lg:px-12">
      <h1 className="text-[clamp(30px,3.33vw,48px)] leading-none font-normal tracking-tight">
        Publications
      </h1>
      <div className="mt-8">
        <PublicationList />
      </div>
    </div>
  )
}
