export type PublicationStatus = "published" | "in-review"

export type Publication = {
  id: string
  title: string
  authors: string
  venue: string
  year: number | null
  status: PublicationStatus
  href?: string
  hrefLabel?: string
  note?: string
  abstract?: string
}

export const publicationNote =
  "* indicates a student mentee; † indicates the corresponding author."

export const publications: Publication[] = [
  {
    id: "water-futures",
    title: "Managing Drought Related Financial Risks with Water Futures.",
    authors: "Li, D.; Gupta, R.; Zeff, H.; Characklis, G.",
    venue: "Under review",
    year: null,
    status: "in-review",
    href: "https://www.researchsquare.com/article/rs-8275145/v1",
    hrefLabel: "Preprint",
  },
  {
    id: "parametric-insurance",
    title:
      "Increasing Financial Resiliency of Irrigation Districts through Risk Transfer via Parametric Insurance.",
    authors: "Li, D.; Zeff, H.; Characklis, G.",
    venue: "Water Resources Research",
    year: null,
    status: "in-review",
  },
  {
    id: "utility-uncertainty",
    title:
      "Balancing Supply and Financial Risks in Water Utility Decision Making under Uncertainty.",
    authors:
      "Petagna, C.*; Li, D. †; Gorelick, D.; Amestoy, T.; Lau, L.; Asefa, T.; Wang, H.; Svrdlin, S.; Reed, P.; Characklis, G.",
    venue: "Journal of Water Resources Planning and Management",
    year: 2026,
    status: "published",
    href: "https://doi.org/10.1061/JWRMD5.WRENG-7164",
    hrefLabel: "DOI",
  },
  {
    id: "green-bonds",
    title:
      "Green Bond Issuance and Carbon Emissions: Can Causal Machine Learning Inform Forward-Looking Policy Decisions?",
    authors: "Li, D. †; Adriaens, P.",
    venue: "Environmental Science & Technology",
    year: 2025,
    status: "published",
    href: "https://doi.org/10.1021/acs.est.5c04966",
    hrefLabel: "DOI",
    abstract:
      "Green bonds finance projects intended to deliver environmental benefits, including reductions in greenhouse gas emissions. However, evidence that municipal green bond issuance lowers local carbon emissions remains limited and lacks the spatial and temporal granularity that municipalities need to make informed decisions. This study investigates the impact of U.S. municipal green bonds issued between 2009 and 2019 on carbon emissions while accounting for the confounding effects of local socioeconomic conditions. We employ a causal forest model within a double-biased machine learning framework to estimate the effects of issuance volume on emission trends. The analysis reveals substantial spatial and temporal heterogeneity: the largest reductions occur in specific counties and increase over time, with an implied abatement cost of $192 per ton of CO2. Counties with higher concentrations of small and medium enterprises exhibit the strongest benefits. Comparisons between counties with and without prior issuance suggest that new green bonds generally reduce emissions, although magnitudes vary with local economic and infrastructure characteristics. These findings provide evidence on the effectiveness of municipal green finance, with implications for policy implementation and forecasting environmental outcomes, particularly for first-time issuers.",
  },
  {
    id: "esg-psm",
    title:
      "Impact of ESG Performance and Disclosure on Premiums in the Corporate Bond Market: Evidence from Propensity Score Matching.",
    authors: "Li, D. †; Adriaens, P.",
    venue: "Journal of Sustainable Finance and Investment",
    year: 2024,
    status: "published",
    href: "https://doi.org/10.1080/20430795.2024.2426485",
    hrefLabel: "DOI",
    abstract:
      "This study explores the connection between ESG scores and corporate bond performance, particularly credit spreads, by adopting a propensity score matching approach. That design enables a balanced comparison between a control group and one exposed to the ESG treatment effect. Bonds issued between 2010 and 2020 by MSCI-rated ESG leaders across industry sectors were priced at an average lower credit spread of 14.3 basis points relative to laggards in the primary market. This credit-spread difference persists in the secondary market and increases further when bonds of financial issuers are separated from non-financial sectors. In contrast, the impact of ESG disclosure on bond credit spreads is negligible. The willingness of investors to accept a discount on the credit spreads of a bond issued by highly rated companies offers a potential incentive for broader adoption of ESG performance assessment.",
  },
  {
    id: "flood-drought-bonds",
    title:
      "Impact of Flooding and Drought Risks on the Cost of Bond Financing for Water Utilities.",
    authors: "Li, D.; Saigal, R.; Adriaens, P.",
    venue: "Environmental Science & Technology",
    year: 2024,
    status: "published",
    href: "https://doi.org/10.1021/acs.est.4c01863",
    hrefLabel: "DOI",
    abstract:
      "The global water cycle has experienced significant changes due to the interplay of climate shifts and human activities, resulting in more frequent and severe droughts and floods. These shifts have started to affect the operational efficiency of water treatment and delivery systems, with implications for the economic performance of these assets and the climate-affected cost of financing them through municipal bonds. Analyzing a decade of water bond data (2009–2019), this study offers empirical evidence for the impact of flood and drought risks on bond investor demand to offset water risks. Bond markets factored in coastal flood risks between 2013 and 2019, adjusting by 3–6 basis points per risk score unit, and riverine flood risks from 2009 to 2013, with a 5–11 basis point increase per risk score unit. These effects were primarily driven by bonds issued in the Pacific Coast and Great Plains regions, respectively. The pricing of drought risks followed a more nuanced pattern. The study also shows channeling effects of water consumption and investor perceptions of climate change on water-risk pricing. Regions with heightened water-risk exposure are perceived as riskier by market participants, leading to a higher cost of capital for municipalities and water agencies.",
  },
  {
    id: "esg-sectors",
    title:
      "Deconstruction of ESG Impact on US Corporate Bond Pricing: An Assessment of Cost of Capital Benefits Across Industry Sectors.",
    authors: "Li, D. †; Adriaens, P.",
    venue: "Journal of Management in Engineering",
    year: 2023,
    status: "published",
    href: "https://doi.org/10.1061/JMENEA.MEENG-5521",
    hrefLabel: "DOI",
    note: "Editor’s choice",
    abstract:
      "Using an interpretable machine learning technique and U.S. corporate bonds from 2010 to 2021, this study estimates the impact of ESG ratings on corporate bond issuance spreads. The results show an average ESG benefit of 10 basis points across sectors, with effects that vary by sector and by the individual environmental, social, and governance scores. Social and governance ratings are the primary drivers of issuance costs, while the impact of environmental scores is smaller. Within architecture, engineering, and construction industries, discounted pricing is channeled in particular through environmental and governance scores. The findings point to a financially material link between ESG performance and the cost of debt used to finance construction and infrastructure.",
  },
  {
    id: "blockchain-infrastructure",
    title:
      "Technology-enabled financing of sustainable infrastructure: A case for blockchains and decentralized oracle networks.",
    authors: "Chung, K.; Li, D.; Adriaens, P.",
    venue: "Technological Forecasting and Social Change",
    year: 2023,
    status: "published",
    href: "https://doi.org/10.1016/j.techfore.2022.122258",
    hrefLabel: "DOI",
  },
]

export function publicationById(id: string) {
  return publications.find((item) => item.id === id)
}

export function latestPublished(count: number) {
  return publications
    .filter((item) => item.status === "published")
    .slice(0, count)
}
