export type ResearchHighlight = {
  id: string
  title: string
  body: string
  href: string
  image: {
    src: string
    alt: string
  }
  /** Place the image on the left or right on desktop. */
  imageSide: "left" | "right"
}

export const hero = {
  title: "Environmental Risk & Finance Lab (ERFL)",
  subline:
    "Modeling environmental risk. Understanding system impacts. Designing financial resilience.",
  bylineName: "Dr. Dan Li,",
  bylineRest: "Earth and Environment, FIU",
  image: {
    src: "/images/front/powerful-storm.avif",
    alt: "Coastal homes and debris along the shore after a storm.",
  },
}

export const researchInAction: ResearchHighlight[] = [
  {
    id: "catastrophe",
    title: "Public hurricane models and cat bonds",
    body: "Dr. Dan Li is a member of the multi-university Florida Public Hurricane Loss Model (FPHLM) team, which develops and maintains the FIU-led public hurricane catastrophe model. Her lab uses FPHLM-generated loss distributions to investigate how catastrophe bonds can be structured and priced so that pre-arranged capital can be released following hurricanes that produce severe insured losses.",
    href: "/research/fphlm-cat-bonds/",
    image: {
      src: "/images/front/hurricane.jpg",
      alt: "Satellite view of a hurricane over the ocean.",
    },
    imageSide: "left",
  },
  {
    id: "agriculture",
    title: "Hurricane risk and agriculture",
    body: "Hurricanes damage crops, farm structures, and the routes that move food to market. This work follows wind and flood hazard into agricultural loss, and asks where financial tools can share a risk that hits many operations at once.",
    href: "/research/hurricane-agriculture/",
    image: {
      src: "/images/front/flood-on-farm.jpg",
      alt: "A person looking across a flooded cornfield.",
    },
    imageSide: "right",
  },
  {
    id: "finance",
    title: "Water systems and climate finance",
    body: "Earlier work follows flood, drought, and sustainability signals into water-utility decisions, municipal and corporate bond markets, green bonds, and parametric insurance for irrigation districts.",
    href: "/research/#previous",
    image: {
      src: "/images/plate-reservoir.svg",
      alt: "Abstract reservoir and intake.",
    },
    imageSide: "left",
  },
]

export const approach = [
  {
    title: "Public catastrophe modeling",
    body: "The Florida Public Hurricane Loss Model gives a public account of hurricane wind loss, open to scientific scrutiny where commercial catastrophe models stay proprietary. We treat that loss field as the starting point for financial design.",
  },
  {
    title: "Causal machine learning",
    body: "Hazard, exposure, and local economic conditions are tangled in the historical record. Causal machine learning, including causal forests, separates what a financial instrument changes from what a place would have done anyway. That is the approach behind the lab’s green-bond and carbon-emissions work.",
  },
  {
    title: "Financial risk-transfer design",
    body: "A hazard estimate is useful when it becomes a contract. The lab connects loss and revenue shortfalls to catastrophe bonds, parametric insurance, and water futures for utilities, irrigation districts, insurers, and public agencies.",
  },
]
