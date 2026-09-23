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

export type MentoredStudent = {
  name: string
  role: string
}

export const currentPeople: Person[] = [
  {
    id: "dan-li",
    name: "Dr. Dan Li",
    role: "Assistant Professor, Department of Earth and Environment\nEnvironmental Finance and Risk Management Program, Institute of Environment",
    biography:
      "Dr. Dan Li is an Assistant Professor at Florida International University whose research connects climate hazards with infrastructure, economic, and financial risk.\n\nHer research examines how hurricanes, floods, droughts, and wildfires affect communities, infrastructure systems, and financial stability. She develops physics-informed machine learning methods that connect hazard forecasting, vulnerability assessment, and economic loss modeling with practical risk-management strategies, including catastrophe modeling, parametric insurance, and climate-risk financing. Her work has been supported by the National Science Foundation (NSF), Tampa Bay Water, and TIAA, and includes collaborations across the public sector, insurance, reinsurance, and finance.\n\nBefore joining FIU in August 2026, Dr. Li was a Postdoctoral Research Associate at the Institute for Risk Management and Insurance Innovation at the University of North Carolina at Chapel Hill, where she worked with Professor Greg Characklis. She received her Ph.D. in Civil and Environmental Engineering from the University of Michigan, where she worked with Professor Peter Adriaens. Before entering academia, she also worked in the financial industry.",
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

export const mentoredStudents: MentoredStudent[] = [
  {
    name: "Christina Petagna",
    role: "Student mentee, water utility risk",
  },
  {
    name: "Collin Elliott",
    role: "Undergraduate student, UNC",
  },
  {
    name: "Weicheng Xu",
    role: "Undergraduate student, UNC",
  },
  {
    name: "Alyson Ficca",
    role: "M.S. student, UNC",
  },
  {
    name: "Jingran Wang",
    role: "Undergraduate student, UNC",
  },
]
