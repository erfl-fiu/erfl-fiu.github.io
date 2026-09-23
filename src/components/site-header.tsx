"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"

import { site } from "@content/site"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const nav = [
  { href: "/", label: "Home" },
  { href: "/research", label: "Research" },
  { href: "/people", label: "People" },
  { href: "/publications", label: "Publications" },
  { href: "/news", label: "News" },
  { href: "/join", label: "Join" },
]

function normalize(path: string) {
  if (path.length > 1 && path.endsWith("/")) return path.slice(0, -1)
  return path
}

function isActive(pathname: string, href: string) {
  const path = normalize(pathname)
  const target = normalize(href)
  if (target === "/") return path === "/"
  return path === target || path.startsWith(`${target}/`)
}

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="bg-fiu-blue text-white">
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between gap-6 px-4 py-4 sm:px-8 lg:px-12">
        <Link href="/" className="min-w-0">
          <span className="font-serif text-2xl leading-none tracking-tight text-white">
            {site.shortName}
          </span>
          <span className="mt-1 block text-xs tracking-wide text-white/80">
            Earth and Environment · FIU
          </span>
        </Link>
        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = isActive(pathname, item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  active
                    ? "text-sm text-fiu-gold"
                    : "text-sm text-white hover:text-fiu-gold"
                }
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="outline"
                size="icon"
                className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white lg:hidden"
              />
            }
          >
            <Menu />
            <span className="sr-only">Open menu</span>
          </SheetTrigger>
          <SheetContent side="right" className="bg-fiu-blue text-white">
            <SheetHeader>
              <SheetTitle className="font-serif text-white">
                {site.shortName}
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4" aria-label="Mobile">
              {nav.map((item) => {
                const active = isActive(pathname, item.href)
                return (
                  <SheetClose
                    key={item.href}
                    render={
                      <Link
                        href={item.href}
                        className={
                          active
                            ? "py-2 text-base text-fiu-gold"
                            : "py-2 text-base text-white"
                        }
                      />
                    }
                  >
                    {item.label}
                  </SheetClose>
                )
              })}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
