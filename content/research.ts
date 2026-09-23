export type ResearchStatus = "current" | "previous"

export type ResearchItem = {
  slug: string
  title: string
  status: ResearchStatus
  application: "catastrophe" | "agriculture" | "finance"
  summary: string
  body: string[]
  people: string[]
  papers: string[]
  /** Optional thumbnail shown on the research index. */
  image?: {
    src: string
    alt: string
  }
  /** Optional link to a project repository in the erfl-fiu organization. */
  repo?: string
  links?: { label: string; href: string }[]
}

export const research: ResearchItem[] = [
  {
    slug: "fphlm-cat-bonds",
    title: "Florida Public Hurricane Loss Model and catastrophe bond pricing",
    status: "current",
    application: "catastrophe",
    summary:
      "Catastrophe-bond pricing design built on FPHLM, the public hurricane catastrophe model based at FIU.",
    image: {
      src: "/images/front/hurricane.jpg",
      alt: "Satellite view of a hurricane over the ocean.",
    },
    body: [
      "The [Florida Public Hurricane Loss Model (FPHLM)](https://fphlm.cs.fiu.edu/) is a publicly developed, state-certified hurricane catastrophe model led by Florida International University and created by a multidisciplinary, multi-university team. Its wind-hazard, engineering-vulnerability, and actuarial components estimate insured losses and probable maximum losses for personal and commercial residential properties. The State of Florida uses FPHLM as a benchmark for evaluating insurers’ windstorm risk estimates and reviewing residential property insurance rates.",
      "Our lab builds on FPHLM loss estimates to study catastrophe-bond structuring and pricing. The project examines how a transparent hurricane-loss distribution can inform the loss metric, trigger, attachment point, payout structure, and risk premium of a catastrophe bond. The specific contract design is currently under development.",
    ],
    people: ["Dan Li"],
    papers: [],
    links: [
      {
        label: "FPHLM",
        href: "https://fphlm.cs.fiu.edu/",
      },
    ],
  },
  {
    slug: "hurricane-agriculture",
    title: "Hurricane risk and agriculture",
    status: "current",
    application: "agriculture",
    summary:
      "How hurricane wind and flood hazard become losses for farms, and how that risk might be financed.",
    image: {
      src: "/images/front/flood-on-farm.jpg",
      alt: "A person looking across a flooded cornfield.",
    },
    body: [
      "Hurricanes damage crops, farm buildings, and the routes that move agricultural products. Wind, rainfall, and flooding do not fall evenly across a region, and one storm can create losses across many operations at the same time.",
      "This project studies how hurricane hazard becomes agricultural risk, and how that risk shows up for growers, insurers, and public programs. Papers and a code repository will be added here as the work is released.",
    ],
    people: ["Dan Li"],
    papers: [],
  },
  {
    slug: "water-futures",
    title: "Drought financial risk and water futures",
    status: "previous",
    application: "finance",
    summary:
      "Using water futures to transfer the financial risk that drought creates for water suppliers.",
    body: [
      "Drought can cut water sales and raise the cost of replacement supplies. This manuscript studies water futures as a contract for transferring that financial risk, so a supplier is less exposed to a single dry period.",
      "The paper is under review. A preprint is posted on Research Square.",
    ],
    people: ["Dan Li"],
    papers: ["water-futures"],
  },
  {
    slug: "parametric-insurance",
    title: "Parametric insurance for irrigation districts",
    status: "previous",
    application: "finance",
    summary:
      "Risk transfer for irrigation districts when drought interrupts deliveries and revenue.",
    body: [
      "Irrigation districts face both a supply shortfall and a financial shortfall when drought cuts deliveries. This manuscript studies parametric insurance as a way to transfer that risk: a contract that pays on a measured index rather than on an adjusted loss.",
      "The paper is under review at Water Resources Research.",
    ],
    people: ["Dan Li"],
    papers: ["parametric-insurance"],
  },
  {
    slug: "water-utility-risk",
    title: "Supply and financial risk for water utilities",
    status: "previous",
    application: "finance",
    summary:
      "Decision making for a water utility when supply risk and financial risk are both uncertain.",
    body: [
      "Water utilities plan under uncertainty in hydrology, demand, and cost. A plan that looks reliable on supply can still strain finances, and a plan that looks inexpensive can fail when drought or growth arrives.",
      "With Christina Petagna and collaborators, including partners at Tampa Bay Water, this paper studies how a utility can weigh supply risk and financial risk together. It was published in the Journal of Water Resources Planning and Management in 2026.",
    ],
    people: ["Dan Li", "Christina Petagna"],
    papers: ["utility-uncertainty"],
  },
  {
    slug: "green-bonds",
    title: "Green bonds and carbon emissions",
    status: "previous",
    application: "finance",
    summary:
      "Causal machine learning estimates of whether municipal green-bond issuance is followed by lower local carbon emissions.",
    body: [
      "Municipal green bonds are issued to fund projects with an environmental purpose. Whether issuance is followed by lower county-scale carbon emissions is a harder question, because counties that issue green bonds also differ in income, infrastructure, and commuting patterns.",
      "This paper uses a causal forest in a double machine learning framework on U.S. municipal green bonds issued from 2009 to 2019. Emission changes are uneven across counties and grow over time. The associated paper in Environmental Science & Technology (2025) reports an implied abatement cost of $192 per ton of CO2, with stronger reductions in counties that have more small and medium-sized employers.",
    ],
    people: ["Dan Li"],
    papers: ["green-bonds"],
  },
  {
    slug: "flood-drought-bond-costs",
    title: "Flood and drought risk in water-utility bond markets",
    status: "previous",
    application: "finance",
    summary:
      "How coastal flood, riverine flood, and drought risk showed up in the cost of municipal water bonds.",
    body: [
      "Floods and droughts change the cost of running a water system. Bond investors can price that exposure into the yield a utility pays.",
      "Using water-bond data from 2009 to 2019, this Environmental Science & Technology paper finds that coastal flood risk was priced at about 3–6 basis points per risk-score unit from 2013 to 2019, and riverine flood risk at about 5–11 basis points per unit from 2009 to 2013. Those effects were concentrated in the Pacific Coast and Great Plains, respectively. Drought pricing was less uniform. Water use and investors’ perception of climate change also channeled how water risk entered the yield.",
    ],
    people: ["Dan Li"],
    papers: ["flood-drought-bonds"],
  },
  {
    slug: "esg-bond-spreads",
    title: "ESG and corporate bond spreads",
    status: "previous",
    application: "finance",
    summary:
      "How ESG ratings, and ESG disclosure, relate to the credit spreads on U.S. corporate bonds.",
    body: [
      "Two papers look at ESG in the U.S. corporate bond market. The 2023 Journal of Management in Engineering paper, selected as Editor’s Choice, uses interpretable machine learning on bonds issued from 2010 to 2021. It finds an average ESG benefit of about 10 basis points. Social and governance scores account for more of that benefit than environmental scores. In architecture, engineering, and construction industries, the discount runs more through environmental and governance scores.",
      "The 2024 Journal of Sustainable Finance and Investment paper uses propensity score matching. Bonds of MSCI-rated ESG leaders issued from 2010 to 2020 were priced about 14.3 basis points tighter than laggards in the primary market. The gap remains in the secondary market. ESG disclosure, as distinct from ESG performance, had little effect on the spread.",
    ],
    people: ["Dan Li"],
    papers: ["esg-sectors", "esg-psm"],
  },
]

export function researchBySlug(slug: string) {
  return research.find((item) => item.slug === slug)
}

export function researchByStatus(status: ResearchStatus) {
  return research.filter((item) => item.status === status)
}
