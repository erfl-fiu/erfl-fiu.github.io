export type PersonLink = {
  label: string
  href: string
}

export type Person = {
  id: string
  /** Leave null until a name is confirmed. The page will not invent one. */
  name: string | null
  role: string
  /** Leave null to show “Biography forthcoming.” */
  biography: string | null
  /** Path under public/, for example "/images/people/dan-li.jpg". */
  photo: string | null
  links: PersonLink[]
}

export type PreviousStudent = {
  name: string
  role: string
}

export const currentPeople: Person[] = [
  {
    id: "dan-li",
    name: "Dr. Dan Li",
    role: "Assistant Professor, Department of Earth and Environment and the Environmental Finance and Risk Management Program",
    biography:
      "Dr. Dan Li joined Florida International University in August 2026 as an Assistant Professor in the Department of Earth and Environment and the Environmental Finance and Risk Management Program at the Institute of Environment. Before FIU, she was a Postdoctoral Research Associate at the Institute for Risk Management and Insurance Innovation at the University of North Carolina at Chapel Hill. She received her Ph.D. from the University of Michigan, where she worked with Dr. Peter Adriaens, and she has industry experience in finance. Her research asks how hurricanes, flooding, droughts, and wildfires move through engineered and financial systems, and she builds quantitative tools for catastrophe modeling, parametric insurance, and climate risk financing. The work has been supported by the National Science Foundation and Tampa Bay Water, with collaborators in insurance, reinsurance, and finance.",
    photo: "/images/people/dan-li.jpg",
    links: [
      { label: "Email", href: "mailto:dali@fiu.edu" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/dan-li-a538a2121",
      },
      {
        label: "Google Scholar",
        href: "https://scholar.google.com/citations?user=ooj6ntAAAAAJ",
      },
      { label: "ORCID", href: "https://orcid.org/0000-0002-6843-9250" },
      { label: "Personal site", href: "https://dlkency.github.io/" },
    ],
  },
  {
    id: "postdoc",
    name: null,
    role: "Postdoctoral researcher",
    biography: null,
    photo: null,
    links: [],
  },
]

export const previousStudents: PreviousStudent[] = [
  {
    name: "Christina Petagna",
    role: "Student mentee, water utility risk",
  },
]
