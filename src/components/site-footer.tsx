import { site } from "@content/site"

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t-4 border-fiu-gold bg-fiu-blue text-white">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-6 px-4 py-10 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12">
        <div>
          <p className="font-serif text-xl text-white">{site.name}</p>
          <p className="mt-2 max-w-md text-sm leading-6 text-white/80">
            {site.department}
            <br />
            {site.program}
            <br />
            {site.institute}, {site.university}
          </p>
        </div>
        <div className="text-sm leading-6">
          {site.emails.map((email) => (
            <p key={email.address}>
              <a
                className="text-white underline decoration-fiu-gold underline-offset-4"
                href={`mailto:${email.address}`}
              >
                {email.label}
              </a>
            </p>
          ))}
          <p className="mt-2">
            <a
              className="text-white underline decoration-fiu-gold underline-offset-4"
              href={site.github}
            >
              github.com/erfl-fiu
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
