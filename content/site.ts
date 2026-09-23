export const site = {
  name: "Environmental Risk & Finance Lab",
  shortName: "ERFL",
  university: "Florida International University",
  department: "Department of Earth and Environment",
  program: "Environmental Finance & Risk Management Program",
  institute: "Institute of Environment",
  emails: [{ address: "dali@fiu.edu", label: "dali@fiu.edu" }],
  /** Subject line used by the Join form and shown as an instruction on that page. */
  joinEmailSubject: "ERFL Application",
  scholar: "https://scholar.google.com/citations?user=ooj6ntAAAAAJ",
  orcid: "https://orcid.org/0000-0002-6843-9250",
  personalSite: "https://dlkency.github.io/",
  github: "https://github.com/erfl-fiu",
  websiteRepo: "https://github.com/erfl-fiu/erfl-fiu.github.io",
} as const

export const primaryEmail = site.emails[0].address

export function joinSubject(role: string) {
  return `${site.joinEmailSubject}: ${role}`
}
