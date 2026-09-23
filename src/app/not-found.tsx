import Link from "next/link"

export default function NotFound() {
  return (
    <div className="mx-auto w-full max-w-[1280px] px-4 py-24 sm:px-8 lg:px-12">
      <h1 className="text-[clamp(30px,3.33vw,48px)] leading-none font-normal tracking-tight">
        Page not found
      </h1>
      <p className="mt-4 text-base">
        That address is not on the lab site.{" "}
        <Link
          href="/"
          className="text-fiu-blue underline decoration-fiu-gold underline-offset-4"
        >
          Return home
        </Link>
        .
      </p>
    </div>
  )
}
