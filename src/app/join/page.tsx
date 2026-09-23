import type { Metadata } from "next"

import { primaryEmail } from "@content/site"
import { JoinForm } from "@/components/join-form"

export const metadata: Metadata = {
  title: "Join",
  description:
    "Ph.D., postdoctoral, visiting, and student opportunities in the Environmental Risk & Finance Lab.",
}

export default function JoinPage() {
  return (
    <div className="mx-auto w-full max-w-[1280px] px-4 py-12 pb-24 sm:px-8 lg:px-12">
      <h1 className="text-[clamp(30px,3.33vw,48px)] leading-none font-normal tracking-tight">
        Join the lab
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed">
        The lab recruits people who want to work on environmental hazards,
        data-driven modeling, and risk management. Backgrounds in hydrology,
        meteorology, data science, machine learning, and related fields are
        especially welcome.
      </p>

      <div className="mt-12 flex max-w-3xl flex-col gap-10">
        <section>
          <h2 className="text-[21px] font-semibold">Ph.D. students</h2>
          <p className="mt-3 text-base leading-relaxed">
            Ph.D. students work on hazards, financial risk, and the models that
            connect them. Applicants should also apply to the appropriate
            graduate program at Florida International University and mention
            Dr. Dan Li in the statement. Email a short note on your interests
            and a CV.
          </p>
        </section>
        <section>
          <h2 className="text-[21px] font-semibold">
            Postdoctoral and visiting scholars
          </h2>
          <p className="mt-3 text-base leading-relaxed">
            Inquiries are welcome from postdoctoral researchers and visiting
            scholars whose work fits the lab. Opportunities depend on research
            alignment and funding. Share a CV, a brief description of the
            proposed work, and the dates you have in mind.
          </p>
        </section>
        <section>
          <h2 className="text-[21px] font-semibold">
            Undergraduate and master’s researchers
          </h2>
          <p className="mt-3 text-base leading-relaxed">
            Undergraduate and master’s students can join for part-time research.
            Email a resume and a few sentences on what you hope to learn.
          </p>
        </section>
        <section>
          <h2 className="text-[21px] font-semibold">An inclusive lab</h2>
          <p className="mt-3 text-base leading-relaxed">
            Stronger risk work comes from people with different training and
            experience. Students and researchers from engineering, hydrology,
            computer science, data science, climate science, and policy are
            welcome.
          </p>
        </section>
      </div>

      <section className="mt-16 border-t border-border pt-10">
        <p className="text-xs font-semibold tracking-[0.14em] text-fiu-blue uppercase">
          Actively recruiting
        </p>
        <h2 className="mt-2 text-[clamp(24px,2.5vw,36px)] font-medium tracking-tight">
          Start a conversation.
        </h2>
        <p className="mt-3 max-w-xl text-sm text-muted-foreground">
          Questions? Email{" "}
          <a
            className="text-fiu-blue underline decoration-fiu-gold underline-offset-4"
            href={`mailto:${primaryEmail}`}
          >
            {primaryEmail}
          </a>
          .
        </p>
        <div className="mt-8">
          <JoinForm />
        </div>
      </section>
    </div>
  )
}
