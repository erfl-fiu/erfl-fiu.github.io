export type NewsItem = {
  date: string
  label: string
  text: string
}

export const news: NewsItem[] = [
  {
    date: "2026-08-13",
    label: "Aug 13, 2026",
    text: "Joined FIU as an assistant professor.",
  },
  {
    date: "2026-07-24",
    label: "July 24, 2026",
    text: "Panelist, IRMII wildfire and severe convective storms workshop.",
  },
  {
    date: "2026-01-15",
    label: "Jan 15, 2026",
    text: "Talk at the AMS Annual Meeting on wildfire prediction.",
  },
  {
    date: "2025-12-15",
    label: "Dec 15, 2025",
    text: "AGU poster on financial hedging for drought risk.",
  },
  {
    date: "2025-05-22",
    label: "May 22, 2025",
    text: "AEESP presentation.",
  },
  {
    date: "2025-05-14",
    label: "May 14, 2025",
    text: "California Water and Environmental Modeling Forum.",
  },
]

export function newsByYear() {
  const groups = new Map<number, NewsItem[]>()
  for (const item of news) {
    const year = Number(item.date.slice(0, 4))
    const list = groups.get(year) ?? []
    list.push(item)
    groups.set(year, list)
  }
  return [...groups.entries()]
}

export function latestNews(count: number) {
  return news.slice(0, count)
}
