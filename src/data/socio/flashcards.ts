export interface SocioFlashcard {
  id: string;
  chapter: number;
  chapterName: string;
  term: string;
  definition: string;
  keyPoints: string[];
  example?: string;
  theorist?: string;
  markWeight: string;
}

export const socioFlashcards: SocioFlashcard[] = [
  // ─── Chapter 1: Introducing Indian Society ───
  {
    id: 'socio-ch1-1',
    chapter: 1,
    chapterName: 'Introducing Indian Society',
    term: 'Colonialism',
    definition:
      'Colonialism is a practice of domination where one nation exerts control over another territory and its people, involving political control, economic exploitation, and cultural imposition. In India, British colonialism reshaped social structures, markets, and identity formations from the 18th century onwards. It introduced new land revenue systems — Zamindari, Ryotwari, and Mahalwari — that fundamentally altered agrarian relations. The colonial state used census operations to rigidify caste categories for administrative convenience.',
    keyPoints: [
      'Involves political, economic, and cultural domination',
      'Three land revenue systems: Zamindari (intermediaries), Ryotwari (direct with peasants), Mahalwari (village collective)',
      'Census operations rigidified caste and religious identities',
      'Reshaped traditional Indian social structures and created new identity categories',
    ],
    example:
      'The Zamindari system made zamindars intermediaries who collected revenue from peasants, while the British received a fixed share — turning land into a commodity.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch1-2',
    chapter: 1,
    chapterName: 'Introducing Indian Society',
    term: 'Sociological Imagination',
    definition:
      'The sociological imagination is the ability to see the connection between personal experience and wider social structures, distinguishing between personal troubles and public issues. It allows individuals to understand how their private troubles are shaped by public issues and historical forces. This concept encourages thinking beyond individual circumstances to grasp the larger social forces at work. It is the capacity to shift from one frame of reference to another — from the personal to the historical.',
    keyPoints: [
      'Connects personal biography with historical society',
      'Distinguishes between personal troubles (private) and public issues (structural)',
      'Enables critical thinking about social arrangements',
      'Encourages self-reflexivity about one\'s own social position',
    ],
    theorist: 'C. Wright Mills',
    example:
      'Unemployment is a personal trouble for one person but a public issue when millions are jobless due to economic recession — the sociological imagination links the two.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch1-3',
    chapter: 1,
    chapterName: 'Introducing Indian Society',
    term: 'Orientalism',
    definition:
      'Orientalism refers to the Western construction and representation of the East (Orient) as fundamentally different, inferior, and static. Edward Said argued that it served as a discourse of power that justified colonial rule by portraying Eastern societies as exotic, backward, and unchanging. Orientalists studied Indian texts and societies but through a biased lens that reinforced colonial hierarchies. It created a binary where the West was rational, progressive, and civilised while the East was irrational, stagnant, and barbaric.',
    keyPoints: [
      'Coined as a critical concept by Edward Said (1978)',
      'Portrays Eastern societies as exotic, backward, and unchanging',
      'Used to justify colonial "civilising mission"',
      'Creates a binary: West = rational/progressive, East = irrational/stagnant',
    ],
    theorist: 'Edward Said',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch1-4',
    chapter: 1,
    chapterName: 'Introducing Indian Society',
    term: 'Occidentalism',
    definition:
      'Occidentalism is the mirror image of Orientalism — it refers to the ways in which Eastern societies perceive and construct the West. It often involves viewing Western societies as materialistic, morally corrupt, aggressive, or spiritually empty. Like Orientalism, it is a reductive and stereotypical representation that creates a simplistic "Other." Both frameworks are ethnocentric and fail to capture the complexity of either culture.',
    keyPoints: [
      'Eastern construction of the Western "Other"',
      'Often portrays the West as materialistic, individualistic, and morally corrupt',
      'Used in nationalist and anti-colonial discourse to resist Western dominance',
      'Both Orientalism and Occidentalism are reductive and ethnocentric frameworks',
    ],
    example:
      'Indian nationalists who dismissed all Western ideas as "materialistic" while glorifying Eastern spirituality were engaging in Occidentalism.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch1-5',
    chapter: 1,
    chapterName: 'Introducing Indian Society',
    term: 'Community Identity',
    definition:
      'Community identity is an identity based on belonging to a social group, shaped by shared culture, religion, language, caste, or region. It is one of the most basic forms of identity that provides a sense of belonging and security. However, it can become exclusionary when used to create rigid boundaries between groups. Colonialism often hardened these identities for administrative purposes — the census classified people into fixed categories of caste, religion, and tribe.',
    keyPoints: [
      'Based on shared attributes like religion, caste, language, region',
      'Provides a sense of belonging and security',
      'Can overlap — a person has multiple community identities simultaneously',
      'Colonial census hardened caste and religious identities into rigid categories',
    ],
    example:
      'A person may simultaneously identify as Tamil, Brahmin, and Hindu — layered community identities that may sometimes conflict with each other.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch1-6',
    chapter: 1,
    chapterName: 'Introducing Indian Society',
    term: 'Self-Reflexivity',
    definition:
      'Self-reflexivity in sociology is the ability to reflect upon one\'s own position, biases, and assumptions as a social being. It requires sociologists to examine how their own social location — caste, class, gender, religion — shapes their understanding of society. It is essential for producing objective and critical social knowledge rather than reproducing personal prejudice.',
    keyPoints: [
      'Critical examination of one\'s own social position and biases',
      'Essential for producing objective sociological knowledge',
      'Recognises that the sociologist is also a social being',
      'Helps avoid imposing personal values on research findings',
    ],
    example:
      'A upper-caste sociologist studying caste discrimination must reflect on how their own caste position may influence their interpretation of data.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch1-7',
    chapter: 1,
    chapterName: 'Introducing Indian Society',
    term: 'Nationalism and Social Carriers',
    definition:
      'Nationalism is an ideology that emphasises loyalty and devotion to a nation, often based on shared culture, language, or history. In India, the urban middle classes were the primary social carriers of nationalism — they had access to English education, print media, and professional occupations. They used these resources to articulate anti-colonial ideas and mobilise mass movements against British rule.',
    keyPoints: [
      'Urban middle classes were primary carriers of Indian nationalism',
      'Had access to English education, print media, and professional occupations',
      'Used newspapers, pamphlets, and associations to spread nationalist ideas',
      'Nationalism drew from both Western liberal ideas and Indian cultural traditions',
    ],
    example:
      'The Indian National Congress was founded in 1885 largely by educated urban professionals like Dadabhai Naoroji and W.C. Bonnerjee.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch1-8',
    chapter: 1,
    chapterName: 'Introducing Indian Society',
    term: 'British Unification of India',
    definition:
      'The British created an administrative and infrastructural unity in India that did not exist before colonial rule. They introduced railways (1850s), postal systems, legal codes, and a unified bureaucracy that connected distant regions. While this served British economic and political interests, it inadvertently created the infrastructure for national consciousness and anti-colonial mobilisation.',
    keyPoints: [
      'Railways (1850s) connected markets and enabled movement of people and goods',
      'Postal system and telegraph facilitated communication across distances',
      'Uniform legal codes and bureaucracy created administrative unity',
      'Inadvertently created infrastructure for national consciousness and mobilisation',
    ],
    example:
      'The railway network enabled nationalist leaders to travel across India and build an all-India political movement — something impossible in the pre-colonial era.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch1-9',
    chapter: 1,
    chapterName: 'Introducing Indian Society',
    term: 'Sociology vs Common Sense',
    definition:
      'Sociology differs from common sense knowledge in that it uses systematic methods of data collection and analysis, while common sense relies on informal, everyday knowledge passed through tradition and experience. Common sense is often based on stereotypes, unexamined assumptions, and personal experience, while sociology subjects these assumptions to rigorous empirical scrutiny. Sociology seeks generalisable explanations rather than accepting folk wisdom at face value.',
    keyPoints: [
      'Common sense is informal, based on tradition and personal experience',
      'Sociology uses systematic methods: surveys, interviews, participant observation',
      'Common sense often relies on stereotypes; sociology questions assumptions',
      'Sociology seeks generalisable patterns and causal explanations',
    ],
    example:
      'Common sense says "Indian families are always joint families," but sociological research shows increasing diversity — nuclear, single-parent, and reconstituted families are growing.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch1-10',
    chapter: 1,
    chapterName: 'Introducing Indian Society',
    term: 'Ascriptive vs Achieved Identity',
    definition:
      'Ascriptive identity is assigned at birth based on characteristics like caste, religion, gender, or ethnicity — individuals have no control over it. Achieved identity is acquired through personal effort, choice, and accomplishment — such as educational degree, profession, or political office. In traditional Indian society, ascriptive identities (especially caste) were dominant, but modernisation has expanded the scope for achieved identities.',
    keyPoints: [
      'Ascriptive: assigned at birth — caste, religion, gender, ethnicity',
      'Achieved: acquired through effort — education, profession, merit',
      'Traditional Indian society heavily emphasised ascriptive identity (caste)',
      'Modernisation and democracy have expanded opportunities for achieved identity',
    ],
    example:
      'A Dalit person born into a "low" caste (ascriptive) who becomes a judge through education and hard work (achieved) illustrates the tension between the two.',
    markWeight: '4-5 अंक',
  },

  // ─── Chapter 2: Demographic Structure ───
  {
    id: 'socio-ch2-1',
    chapter: 2,
    chapterName: 'Demographic Structure',
    term: 'Demography',
    definition:
      'Demography is the scientific study of human population — its size, composition, distribution, and changes over time. Formal demography focuses on statistical measurement of population parameters like birth rate, death rate, and migration. Social demography examines the social, economic, and cultural factors that influence demographic processes. Census is the primary tool for collecting demographic data in India.',
    keyPoints: [
      'Formal demography: statistical measurement of population parameters',
      'Social demography: social, economic, and cultural factors behind demographic change',
      'Studies birth rate, death rate, migration, age-sex structure',
      'Census is the main data collection method in India (every 10 years)',
    ],
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch2-2',
    chapter: 2,
    chapterName: 'Demographic Structure',
    term: 'Malthusian Theory',
    definition:
      'Thomas Malthus argued that population grows geometrically (2, 4, 8, 16...) while food supply grows arithmetically (1, 2, 3, 4...), leading to inevitable food crisis. He proposed "positive checks" (war, famine, disease) that naturally reduce population, and "preventive checks" (moral restraint, delayed marriage) that humans can voluntarily adopt. His theory predicted that population growth would always outstrip food production.',
    keyPoints: [
      'Population grows geometrically; food supply grows arithmetically',
      'Positive checks: natural forces (famine, disease, war) that increase death rate',
      'Preventive checks: human restraint (late marriage, celibacy) that reduce birth rate',
      'Predicted inevitable food crisis and misery',
    ],
    theorist: 'Thomas Malthus',
    example:
      'Malthus predicted that the Irish Potato Famine (1845-52) would naturally reduce population — an example of his "positive check" in action.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch2-3',
    chapter: 2,
    chapterName: 'Demographic Structure',
    term: 'Criticism of Malthus',
    definition:
      'Malthus\'s theory has been widely criticised for ignoring technological advancement — the Green Revolution disproved his prediction by dramatically increasing food production through HYV seeds, fertilisers, and irrigation. He also overlooked unequal distribution of resources, which causes hunger even when food is abundant. His moral restraint advice was impractical for the poor, and he failed to account for declining fertility rates with development and women\'s education.',
    keyPoints: [
      'Technology (Green Revolution) disproved geometric vs arithmetic prediction',
      'Unequal distribution, not shortage, causes hunger',
      'Moral restraint was impractical and elitist',
      'Failed to predict fertility decline with development and education',
    ],
    example:
      'India\'s food grain production increased from 51 million tonnes (1951) to over 300 million tonnes (2020) — technology defeated Malthusian pessimism.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch2-4',
    chapter: 2,
    chapterName: 'Demographic Structure',
    term: 'Demographic Transition Theory',
    definition:
      'Demographic Transition Theory describes the shift from high birth and death rates to low birth and death rates as a society modernises through distinct stages. Stage 1 (primitive) has high birth and death rates with stable population. Stage 2 (developing) sees falling death rates but high birth rates, causing rapid population growth. Stage 3 (developed) has declining birth rates as fertility control spreads, slowing growth. Stage 4 reaches low birth and death rates with stable or declining population.',
    keyPoints: [
      'Stage 1: High birth rate + high death rate = stable population (primitive societies)',
      'Stage 2: Death rate falls + high birth rate = rapid population growth (developing)',
      'Stage 3: Birth rate declines as fertility control spreads (developing → developed)',
      'Stage 4: Low birth rate + low death rate = stable or declining population (developed)',
    ],
    theorist: 'W.S. Thompson / Notestein',
    example:
      'India is currently in Stage 3 — death rates have fallen due to healthcare, and birth rates are declining due to family planning and education.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch2-5',
    chapter: 2,
    chapterName: 'Demographic Structure',
    term: 'Key Demographic Indicators',
    definition:
      'Birth Rate is number of live births per 1,000 population per year. Death Rate is number of deaths per 1,000 population per year. Total Fertility Rate (TFR) is average number of children per woman. Infant Mortality Rate (IMR) is deaths of infants under one year per 1,000 live births. Maternal Mortality Ratio (MMR) is deaths of women per 100,000 live births due to pregnancy causes. Sex Ratio is number of females per 1,000 males.',
    keyPoints: [
      'Birth Rate and Death Rate: per 1,000 population per year',
      'TFR: average children per woman; replacement level = 2.1',
      'IMR: infant deaths per 1,000 live births — key health indicator',
      'MMR: maternal deaths per 100,000 live births; Sex Ratio: females per 1,000 males',
    ],
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch2-6',
    chapter: 2,
    chapterName: 'Demographic Structure',
    term: 'Demographic Dividend',
    definition:
      'Demographic dividend refers to the economic growth potential that arises when a country has a large working-age population (15-64 years) relative to dependents (children and elderly). When the dependency ratio is low, societies can invest more in education, health, and economic development rather than spending on dependents. India is currently in a demographic dividend window that is estimated to last until 2055, but it requires investment in skill development to be realised.',
    keyPoints: [
      'Occurs when working-age population (15-64) exceeds dependents',
      'Low dependency ratio creates economic potential',
      'Requires investment in education, health, and skill development',
      'India\'s dividend window estimated to last until 2055',
    ],
    example:
      'South Korea and Japan used their demographic dividend periods (1960s-1990s) to achieve rapid economic growth — India aims to replicate this.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch2-7',
    chapter: 2,
    chapterName: 'Demographic Structure',
    term: 'Sex Ratio Decline',
    definition:
      'India\'s sex ratio has declined due to son preference, sex-selective abortion facilitated by technology (sonography), female foeticide, and neglect of girl children. The PNDT Act (Pre-Natal Diagnostic Techniques Act, 1994, amended 2003) banned sex determination of foetus and sex-selective abortion. Despite legal provisions, cultural preference for sons continues due to patrilineal inheritance, dowry, and old-age security concerns.',
    keyPoints: [
      'Son preference + technology (sonography) = sex-selective abortion',
      'Female foeticide and neglect of girl children reduce female population',
      'PNDT Act 1994/2003 banned prenatal sex determination and sex-selective abortion',
      'Root causes: patrilineal inheritance, dowry, old-age security concerns',
    ],
    example:
      'States like Haryana and Punjab have among the worst sex ratios (below 850 females per 1,000 males) due to deep-rooted son preference.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch2-8',
    chapter: 2,
    chapterName: 'Demographic Structure',
    term: 'Population Explosion',
    definition:
      'Population explosion refers to the rapid and dramatic increase in population that occurs when the death rate falls due to improved healthcare, sanitation, and food supply, while the birth rate remains high. This gap between declining mortality and sustained high fertility creates exponential population growth. India experienced this from the 1950s onwards as modern medicine reduced death rates while cultural norms kept birth rates high.',
    keyPoints: [
      'Caused by gap between falling death rate and sustained high birth rate',
      'Modern medicine, sanitation, and food supply reduced mortality',
      'Cultural norms and lack of family planning kept birth rates high',
      'India\'s population grew from 361 million (1951) to 1.4 billion (2021)',
    ],
    example:
      'India added more people between 2001-2011 (181 million) than the entire population of most countries — a classic population explosion.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch2-9',
    chapter: 2,
    chapterName: 'Demographic Structure',
    term: 'Rural-Urban Migration',
    definition:
      'Rural-urban migration is the movement of people from villages to cities in search of better employment, education, healthcare, and living conditions. Push factors from rural areas include poverty, unemployment, lack of amenities, and agrarian distress. Pull factors from cities include jobs, education, healthcare, and modern lifestyle. This migration creates metropolis (large cities) and megapolis (cities over 10 million) like Mumbai and Delhi.',
    keyPoints: [
      'Push factors: rural poverty, unemployment, lack of amenities, agrarian distress',
      'Pull factors: urban jobs, education, healthcare, modern lifestyle',
      'Creates metropolis (large cities) and megapolis (over 10 million population)',
      'Leads to slums, overcrowding, and pressure on urban infrastructure',
    ],
    example:
      'Mumbai attracts millions from Maharashtra, Bihar, and UP seeking jobs in textiles, construction, and services — many end up in Dharavi slum.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch2-10',
    chapter: 2,
    chapterName: 'Demographic Structure',
    term: 'Population Policy and Safety Nets',
    definition:
      'India\'s population policies include the National Family Planning Programme (NFPP, 1952) — the first in the world — which initially promoted sterilisation. During the Emergency (1975-77), forced sterilisation camps caused massive public backlash. The National Population Policy (NFP, 2000) adopted a target-free, voluntary approach. NREGA (National Rural Employment Guarantee Act, 2005) provides an employment safety net by guaranteeing 100 days of wage employment to rural households.',
    keyPoints: [
      'NFPP 1952: first national family planning programme in the world',
      'Emergency sterilisation camps (1975-77) caused public backlash against family planning',
      'NFP 2000: voluntary, target-free approach to population stabilisation',
      'NREGA 2005: employment safety net — 100 days guaranteed wage employment',
    ],
    example:
      'The backlash from forced sterilisation during Emergency made subsequent governments cautious about coercive population control measures.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch2-11',
    chapter: 2,
    chapterName: 'Demographic Structure',
    term: 'Epidemiological Transition',
    definition:
      'Epidemiological transition is the shift in disease patterns from infectious and communicable diseases (malaria, tuberculosis, cholera) to degenerative and lifestyle diseases (heart disease, diabetes, cancer) as a society develops. In early stages, most deaths are caused by infections due to poor sanitation and healthcare. As development improves healthcare and nutrition, people live longer but face new health challenges from chronic, non-communicable diseases.',
    keyPoints: [
      'Shift from infectious diseases to degenerative/lifestyle diseases',
      'Early stage: deaths from malaria, TB, cholera due to poor sanitation',
      'Later stage: deaths from heart disease, diabetes, cancer due to longer lifespan',
      'India is in transition — both infectious and degenerative diseases coexist',
    ],
    example:
      'India now faces a "double burden" — malaria and TB still kill thousands, while diabetes and heart disease are the leading causes of death in urban areas.',
    markWeight: '4-5 अंक',
  },

  // ─── Chapter 3: Social Institutions ───
  {
    id: 'socio-ch3-1',
    chapter: 3,
    chapterName: 'Social Institutions',
    term: 'Caste System — Varna vs Jati',
    definition:
      'The caste system is a hierarchical social stratification based on birth, occupation, and ritual purity. Varna is the broad four-fold classification mentioned in ancient texts: Brahmins (priests), Kshatriyas (warriors), Vaishyas (merchants), and Shudras (labourers), with Dalits (untouchables) excluded entirely. Jati is the actual operational caste — thousands of endogamous groups defined by occupation, region, and social status. Brahmanical ideology provided religious legitimation for this hierarchy through the doctrine of ritual purity and pollution.',
    keyPoints: [
      'Varna: 4-fold theoretical classification (Brahmin, Kshatriya, Vaishya, Shudra)',
      'Jati: thousands of actual endogamous groups based on occupation and region',
      'Dalits (untouchables) excluded from the Varna system entirely',
      'Brahmanical ideology legitimised hierarchy through purity-pollution doctrine',
    ],
    example:
      'A goldsmith (Sonar) and a potter (Kumbhar) may both be Shudra in Varna terms, but belong to different Jatis with different status and customs.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch3-2',
    chapter: 3,
    chapterName: 'Social Institutions',
    term: 'Sanskritisation',
    definition:
      'Sanskritisation is a process by which lower castes or groups adopt the rituals, customs, and practices of upper castes (especially Brahmins) to improve their social status. It involves emulation of Brahminical norms — vegetarianism, teetotalism, wearing sacred thread, performing elaborate life-cycle rituals. It is a strategy for upward social mobility within the caste system, though it does not always lead to actual change in caste position as upper castes often resist such claims.',
    keyPoints: [
      'Lower castes imitate upper-caste (especially Brahminical) practices',
      'Involves adopting vegetarianism, rituals, sanskritic norms, sacred thread',
      'A strategy for upward social mobility within the caste hierarchy',
      'Upper castes often resist such claims — mobility is not always accepted',
    ],
    theorist: 'M.N. Srinivas',
    example:
      'The Nadar community in Tamil Nadu claimed Kshatriya status by adopting upper-caste practices like wearing sacred threads and performing fire rituals.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch3-3',
    chapter: 3,
    chapterName: 'Social Institutions',
    term: 'Caste Mobility and Westernisation',
    definition:
      'Caste mobility refers to the movement of castes up or down the social hierarchy over time. Apart from sanskritisation, westernisation is another route to mobility — English education, modern professions, and urban living allow individuals to gain status independent of traditional caste occupation. The colonial period created new avenues for mobility through administration, law, medicine, and modern education that were not bound by traditional caste hierarchies.',
    keyPoints: [
      'Sanskritisation: mobility by adopting upper-caste rituals and practices',
      'Westernisation: mobility through English education, modern professions, urban life',
      'Colonial period created new avenues (law, medicine, administration) outside caste hierarchy',
      'Reservation (post-independence) became a major mechanism for caste mobility',
    ],
    example:
      'Dalits who became educated professionals in cities gained social status that challenged traditional caste hierarchies — Ambedkar himself exemplified this.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch3-4',
    chapter: 3,
    chapterName: 'Social Institutions',
    term: 'Tribe Concept',
    definition:
      'Tribes are communities with distinct cultural identity, often living in geographically isolated areas (forest, hills, desert) with their own language, customs, and social organisation. They are officially called "Scheduled Tribes" in the Indian Constitution and receive special protections including reservation in education and jobs. Tribes were often described as "isolates" — communities that remained outside the mainstream caste-based Hindu society. Many face displacement from mining, dams, and deforestation.',
    keyPoints: [
      'Communities with distinct culture, often geographically isolated',
      'Officially called "Scheduled Tribes" — receive constitutional protections',
      'Described as "isolates" outside mainstream caste-based Hindu society',
      'Many face displacement from mining, dams, and deforestation',
    ],
    example:
      'The Irula tribe in Tamil Nadu, traditionally snake-catchers, were marginalised and displaced from forest lands due to conservation projects.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch3-5',
    chapter: 3,
    chapterName: 'Social Institutions',
    term: 'Family Types',
    definition:
      'Family types include nuclear family (couple and their children), joint family (multiple generations living together with shared property), and extended family. Matrilineal families trace descent through the mother — found among Khasi, Garo (Meghalaya), and Nair (Kerala) communities where property passes from mother to daughter. Patrilineal families trace descent through the father and are dominant across most of India. Family functions include economic production, socialisation of children, emotional support, and reproductive roles.',
    keyPoints: [
      'Nuclear: couple + children; Joint: multiple generations with shared property',
      'Matrilineal: descent through mother (Khasi, Garo, Nair) — property to daughter',
      'Patrilineal: descent through father — dominant across most of India',
      'Family functions: economic, educational, emotional, reproductive, recreational',
    ],
    example:
      'Among the Khasi of Meghalaya, the youngest daughter (Ka Khadduh) inherits ancestral property and maintains the family lineage.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch3-6',
    chapter: 3,
    chapterName: 'Social Institutions',
    term: 'Kinship — Consanguineal and Affinal',
    definition:
      'Kinship refers to the social relationship between individuals based on blood (consanguineal) or marriage (affinal). Consanguineal kin are related by birth — parents, siblings, cousins. Affinal kin are related through marriage — spouse, in-laws. Exogamy is the rule of marrying outside one\'s group (clan, gotra, village), while endogamy is the rule of marrying within one\'s group. Most Indian communities follow caste endogamy but gotra/clan exogamy.',
    keyPoints: [
      'Consanguineal: kin related by blood (parents, siblings, cousins)',
      'Affinal: kin related through marriage (spouse, in-laws)',
      'Exogamy: marry outside one\'s group (gotra, clan, village)',
      'Endogamy: marry within one\'s group (caste, religion, community)',
    ],
    example:
      'A Brahmin family insisting their daughter marry only a Tamil Brahmin (endogamy) but within a different gotra (exogamy) illustrates both rules simultaneously.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch3-7',
    chapter: 3,
    chapterName: 'Social Institutions',
    term: 'Panchayati Raj',
    definition:
      'Panchayati Raj is a system of local self-governance in rural India, institutionalised by the 73rd Constitutional Amendment (1992). It establishes a three-tier structure — Gram Panchayat (village level), Panchayat Samiti (block level), and Zila Parishad (district level) — to decentralise power and enable grassroots democracy. One-third seats are reserved for women, and seats are also reserved for SCs and STs in proportion to their population.',
    keyPoints: [
      'Three-tier local self-governance: Gram Panchayat → Panchayat Samiti → Zila Parishad',
      'Institutionalised by 73rd Constitutional Amendment (1992)',
      'One-third seats reserved for women; seats reserved for SCs and STs',
      'Aims to decentralise power and promote democratic participation at grassroots',
    ],
    example:
      'In Rajasthan, women sarpanches (village heads) under Panchayati Raj have brought issues like water supply and girls\' education to the agenda.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch3-8',
    chapter: 3,
    chapterName: 'Social Institutions',
    term: 'Herbert Risley and Colonial Ethnography',
    definition:
      'Herbert Risley was a British colonial ethnographer who conducted extensive surveys of Indian castes and tribes. His work "The Tribes and Castes of Bengal" (1891) codified caste categories based on occupation and ritual status. He used nasal index measurements to create a racial hierarchy of castes, arguing that caste was determined by race. His work hardened colonial understanding of caste and contributed to the rigidification of caste categories through census operations.',
    keyPoints: [
      'British ethnographer who surveyed and codified Indian caste system',
      'Author of "The Tribes and Castes of Bengal" (1891)',
      'Used nasal index measurements to rank castes racially',
      'Contributed to rigidification of caste categories through colonial census',
    ],
    example:
      'Risley\'s nasal index theory claimed that higher castes had narrower noses (closer to Europeans) — a pseudoscientific justification for caste hierarchy.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch3-9',
    chapter: 3,
    chapterName: 'Social Institutions',
    term: 'Gotra and Exogamy',
    definition:
      'Gotra is a clan system among Hindus, especially upper castes, tracing descent from a common mythical ancestor (usually a sage). Exogamy is the rule of marrying outside one\'s gotra — a person cannot marry within their own gotra or their mother\'s gotra. Together, they prevent marriage between individuals who share the same patrilineal lineage, thereby avoiding consanguineous marriage and expanding social networks across groups.',
    keyPoints: [
      'Gotra: patrilineal clan with common mythical ancestor (usually a sage)',
      'Exogamy: marriage outside one\'s gotra — also cannot marry in mother\'s gotra',
      'Prevents consanguineous marriage within the same lineage',
      'Expands social networks by forcing marriage across different groups',
    ],
    example:
      'A person belonging to the Bharadwaj gotra must find a spouse from a different gotra — like Kashyap or Vashishtha — even within the same caste.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch3-10',
    chapter: 3,
    chapterName: 'Social Institutions',
    term: 'Purity and Pollution',
    definition:
      'The concepts of purity and pollution form the ideological basis of the caste hierarchy. Upper castes claimed ritual purity while assigning polluting tasks — cleaning, handling dead animals, leather work, sanitation — to lower castes and Dalits. These ideas justified social exclusion, occupational segregation, and untouchability. Dalits were forbidden from accessing common resources like wells, temples, and public spaces due to perceived ritual pollution.',
    keyPoints: [
      'Upper castes associated with ritual purity; lower castes with pollution',
      'Polluting occupations (cleaning, leather, sanitation) assigned to lower castes',
      'Justified segregation in food, water, and social interaction',
      'Dalits faced untouchability — denied access to wells, temples, public spaces',
    ],
    example:
      'In many villages, Dalits were historically forbidden from drawing water from the same well or entering temples used by upper castes.',
    markWeight: '4-5 अंक',
  },

  // ─── Chapter 5: Structural Change ───
  {
    id: 'socio-ch5-1',
    chapter: 5,
    chapterName: 'Structural Change',
    term: 'Colonialism as Structural Change',
    definition:
      'Colonialism brought fundamental structural changes to Indian society — new markets, communication networks, print technology, and administrative reorganisation. The British created railway networks (from 1850s) that connected markets across India, enabled movement of goods and people, and inadvertently facilitated nationalist mobilisation. Print technology and newspapers spread new ideas of liberty, equality, and nationalism. New forms of production like the factory system emerged alongside the decline of traditional artisan crafts.',
    keyPoints: [
      'Railways (1850s) connected markets and enabled movement across India',
      'Print technology and newspapers spread nationalist and reform ideas',
      'New factory system replaced traditional artisan production',
      'Administrative reorganisation: provinces, districts, unified bureaucracy',
    ],
    example:
      'The railway network enabled nationalist leaders to travel across India and build an all-India political movement — something impossible in the pre-colonial era.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch5-2',
    chapter: 5,
    chapterName: 'Structural Change',
    term: 'Deindustrialisation',
    definition:
      'Deindustrialisation is the systematic destruction of indigenous manufacturing industries under colonial rule. British policies deliberately destroyed Indian textile industry — one of the world\'s largest — to create a market for British manufactured goods. India was transformed from a net exporter of finished textiles to a net exporter of raw materials and importer of British cloth. This caused mass unemployment among artisans and weavers and drained wealth from India.',
    keyPoints: [
      'Destruction of Indian textile industry under colonial trade policies',
      'India went from net exporter of textiles to exporter of raw materials',
      'Mass unemployment among artisans and weavers',
      'Dadabhai Naoroji theorised this as "Drain of Wealth"',
    ],
    theorist: 'Dadabhai Naoroji',
    example:
      'Bengal muslin weavers, once famous worldwide, were ruined as cheap British machine-made cloth flooded Indian markets.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch5-3',
    chapter: 5,
    chapterName: 'Structural Change',
    term: 'Impact on Agriculture',
    definition:
      'Colonial policies transformed Indian agriculture from subsistence farming to commercial crop production for export. Zamindari exploitation left peasants with minimal surplus while British planters and traders profited. The introduction of commercial crops (indigo, cotton, jute, tea) made peasants dependent on market prices and vulnerable to fluctuations. Land revenue systems extracted maximum revenue without investment in agricultural improvement, leading to frequent famines.',
    keyPoints: [
      'Shift from subsistence farming to commercial crop production for export',
      'Zamindari exploitation extracted revenue without investment',
      'Commercial crops (indigo, cotton, jute) made peasants market-dependent',
      'Frequent famines due to revenue extraction and lack of investment',
    ],
    example:
      'Indigo planters in Bengal forced peasants to grow indigo instead of food crops — the Indigo Revolt (1859-60) was a peasant uprising against this exploitation.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch5-4',
    chapter: 5,
    chapterName: 'Structural Change',
    term: 'Changes in Caste under Colonialism',
    definition:
      'Colonial census operations rigidified caste categories that were previously more fluid and locally defined. The British classified castes into hierarchical lists for administrative purposes, imposing a uniform framework on diverse local practices. This hardened caste boundaries and made caste a more politically significant identity. The colonial state used caste for recruitment into army, administration, and police, making caste identity central to access to power and resources.',
    keyPoints: [
      'Colonial census rigidified fluid local caste categories into fixed lists',
      'Imposed uniform hierarchical framework on diverse local practices',
      'Made caste a politically significant identity for administration',
      'Used caste for army, police, and administrative recruitment',
    ],
    example:
      'Before colonial census, the term "Brahmin" meant different things in different regions — the census created a single pan-Indian Brahmin category.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch5-5',
    chapter: 5,
    chapterName: 'Structural Change',
    term: 'Social Reform Movements',
    definition:
      'Social reform movements in 19th century India challenged oppressive practices like Sati, child marriage, caste discrimination, and denial of women\'s education. Brahmo Samaj (Ram Mohan Roy) campaigned against Sati and for women\'s rights. Prarthana Samaj (Atmaram Pandurang) worked against caste discrimination in Maharashtra. Arya Samaj (Swami Dayanand Saraswati) promoted Vedic learning and challenged Brahminical orthodoxy. These movements drew from both Indian traditions and Western liberal ideas.',
    keyPoints: [
      'Brahmo Samaj: Ram Mohan Roy — abolition of Sati, women\'s education',
      'Prarthana Samaj: Atmaram Pandurang — anti-caste reform in Maharashtra',
      'Arya Samaj: Dayanand Saraswati — Vedic revival, challenging orthodoxy',
      'Drew from both Indian traditions and Western liberal ideas of liberty',
    ],
    example:
      'Ram Mohan Roy\'s campaign led to the Bengal Sati Regulation Act (1829) — the first major legislative reform against an oppressive social practice.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch5-6',
    chapter: 5,
    chapterName: 'Structural Change',
    term: 'Print Technology and Nationalism',
    definition:
      'The introduction of print technology (printing press) in India was a structural change that enabled the spread of ideas, debates, and nationalist consciousness. Newspapers, pamphlets, and books in Indian languages became powerful tools for social reform and political mobilisation. The colonial state attempted to censor radical publications through laws like the Vernacular Press Act (1878), but print continued to fuel nationalist and reform movements across India.',
    keyPoints: [
      'Print technology enabled mass spread of ideas in Indian languages',
      'Newspapers and pamphlets became tools for reform and nationalist mobilisation',
      'Colonial censorship (Vernacular Press Act 1878) tried to control radical press',
      'Print created a "public sphere" for debate and political consciousness',
    ],
    example:
      'Raja Ram Mohan Roy published "Mirat-ul-Akhbar" (1822) in Persian to campaign for social reform — print was his weapon against Sati.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch5-7',
    chapter: 5,
    chapterName: 'Structural Change',
    term: 'New Forms of Production',
    definition:
      'Colonialism introduced new forms of production — the factory system, plantation agriculture, and mining — that replaced traditional artisan-based production. The factory system concentrated workers under one roof with wage labour and machinery, creating a new industrial working class. Traditional artisans like weavers, carpenters, and blacksmiths lost their livelihoods as machine-made goods flooded the market. This structural shift from craft production to factory production was violent and disruptive.',
    keyPoints: [
      'Factory system replaced artisan-based production',
      'Wage labour and machinery concentrated under one roof',
      'Traditional artisans (weavers, carpenters) lost livelihoods',
      'New industrial working class emerged alongside displaced artisans',
    ],
    example:
      'The Tata Iron and Steel Company (1907) in Jamshedpur was one of the first modern factories — workers migrated from villages to work in the factory system.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch5-8',
    chapter: 5,
    chapterName: 'Structural Change',
    term: 'Administrative Reorganization',
    definition:
      'The British reorganised Indian administration into provinces, districts, and tehsils with a uniform bureaucratic structure. This replaced the diverse administrative systems of pre-colonial kingdoms and empires. The Indian Civil Service (ICS) became the backbone of colonial administration, staffed mostly by British officers. This reorganisation created a unified administrative framework but also concentrated power in a small elite, alienating the majority of the population.',
    keyPoints: [
      'Replaced diverse pre-colonial administrative systems with uniform structure',
      'Provinces, districts, and tehsils created for administrative convenience',
      'Indian Civil Service (ICS) — backbone of colonial administration',
      'Created unified framework but concentrated power in British elite',
    ],
    example:
      'The district collector became the most powerful administrative figure in colonial India — combining revenue, judicial, and executive functions.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch5-9',
    chapter: 5,
    chapterName: 'Structural Change',
    term: 'Capitalist System under Colonialism',
    definition:
      'Colonialism imposed a distorted form of capitalism on India that served British interests. Private ownership of means of production, wage labour, and profit motive were introduced, but production was oriented towards export to Britain rather than domestic development. Raw materials were extracted cheaply and finished goods were imported, preventing indigenous capital accumulation. This "colonial capitalism" was extractive rather than developmental.',
    keyPoints: [
      'Private ownership, wage labour, profit motive introduced under colonialism',
      'Production oriented towards British export, not domestic development',
      'Raw materials extracted cheaply, finished goods imported',
      'Prevented indigenous capital accumulation — extractive, not developmental',
    ],
    example:
      'Indian cotton was exported raw to Britain, processed into cloth, and re-exported to India — colonial capitalism enriched Britain at India\'s expense.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch5-10',
    chapter: 5,
    chapterName: 'Structural Change',
    term: 'Urbanisation under Colonialism',
    definition:
      'Colonial cities like Kolkata, Mumbai, and Chennai were developed for administrative, commercial, and military purposes. They were redesigned with European-style infrastructure — cantonments, bungalows, clubs, and railway stations — reflecting colonial power. Cities were divided into "White Town" (European residential area) and "Black Town" (Indian residential area). These cities became centres of colonial power, trade, and later, nationalist mobilisation.',
    keyPoints: [
      'Colonial cities developed for administration, trade, and military',
      'Kolkata, Mumbai, Chennai redesigned with European-style infrastructure',
      'Divided into "White Town" (Europeans) and "Black Town" (Indians)',
      'Became centres of colonial power and later nationalist mobilisation',
    ],
    example:
      'Mumbai\'s Fort area was "White Town" where British officials lived, while Indian areas like Girgaum and Mahim were "Black Town."',
    markWeight: '4-5 अंक',
  },

  // ─── Chapter 6: Cultural Change ───
  {
    id: 'socio-ch6-1',
    chapter: 6,
    chapterName: 'Cultural Change',
    term: 'Sanskritisation',
    definition:
      'Sanskritisation is a process by which lower castes or groups adopt the rituals, customs, and practices of upper castes (especially Brahmins) to improve their social status. It involves emulation of Brahminical norms — vegetarianism, teetotalism, wearing sacred thread, performing elaborate life-cycle rituals. It is a strategy for upward social mobility within the caste system. However, upper castes often resist such claims, and the adopted practices may not lead to actual change in caste position.',
    keyPoints: [
      'Lower castes imitate upper-caste (especially Brahminical) practices',
      'Involves vegetarianism, rituals, sacred thread, sanskritic norms',
      'Strategy for upward social mobility within caste hierarchy',
      'Upper castes resist such claims — mobility is contested',
    ],
    theorist: 'M.N. Srinivas',
    example:
      'The Nadar community in Tamil Nadu adopted Brahminical practices like wearing sacred threads and performing fire rituals to claim higher caste status.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch6-2',
    chapter: 6,
    chapterName: 'Cultural Change',
    term: 'Westernisation',
    definition:
      'Westernisation refers to the adoption of Western cultural traits — dress, food, language, education, technology, and lifestyle — by non-Western societies. In India, it began during colonialism with English education and modern professions, and accelerated after independence with urbanisation and globalisation. It is not uniform and coexists with indigenous culture in complex ways. English-speaking professionals who wear Western clothes but celebrate Diwali represent this coexistence.',
    keyPoints: [
      'Adoption of Western cultural practices: dress, food, education, technology',
      'Began during colonialism, accelerated post-independence with urbanisation',
      'Not uniform — coexists with traditional culture in complex ways',
      'Creates new hybrid cultural forms rather than replacing indigenous culture',
    ],
    example:
      'Indian IT professionals in Bangalore who code in English, wear jeans, eat pizza, but celebrate Onam and Diwali represent westernisation coexisting with tradition.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch6-3',
    chapter: 6,
    chapterName: 'Cultural Change',
    term: 'Secularisation',
    definition:
      'Secularisation is the process by which religion loses its social and cultural significance in public life. It involves the separation of religion from politics, education, and public institutions. In India, secularisation has been partial — while the Constitution is secular, religion continues to play a strong role in politics, social relations, and daily life. Religion remains a powerful force in voting patterns, marriage, and community identity.',
    keyPoints: [
      'Decline of religion\'s influence in public life and institutions',
      'Separation of religion from state, politics, and education',
      'In India, secularisation has been incomplete and partial',
      'Religion remains politically and socially significant in daily life',
    ],
    example:
      'India\'s Constitution is secular, but religious identity continues to influence voting patterns, marriage choices, and social relations.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch6-4',
    chapter: 6,
    chapterName: 'Cultural Change',
    term: 'Rationalisation',
    definition:
      'Rationalisation is the process by which traditional ways of thinking and doing are replaced by calculation, efficiency, and systematic organisation. In modern societies, decisions are increasingly based on rational calculation rather than tradition, emotion, or custom. Bureaucracy is the quintessential example of rationalisation — rules, procedures, and hierarchy replace personal authority. In India, modernisation has brought rationalisation in education, law, and governance.',
    keyPoints: [
      'Replacement of traditional thinking with calculation and efficiency',
      'Decisions based on rational analysis rather than tradition or emotion',
      'Bureaucracy is the quintessential example — rules replace personal authority',
      'Modernisation in India brought rationalisation in education, law, governance',
    ],
    example:
      'The Indian legal system replaced traditional panchayat justice with codified laws, courts, and procedures — a rationalisation of dispute resolution.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch6-5',
    chapter: 6,
    chapterName: 'Cultural Change',
    term: 'R.K. Narayan — "A Horse and Two Goats"',
    definition:
      'R.K. Narayan\'s story "A Horse and Two Goats" illustrates cultural misunderstanding and miscommunication across cultures. An American tourist and an Indian villager try to communicate about buying a horse, but their completely different cultural frameworks lead to hilarious misinterpretation. The story shows that communication requires shared cultural context, and that superficial contact between cultures often leads to misunderstanding rather than genuine understanding.',
    keyPoints: [
      'Illustrates cultural misunderstanding across different cultural frameworks',
      'Communication requires shared cultural context to be effective',
      'Superficial contact leads to misinterpretation, not genuine understanding',
      'Highlights the gap between Western and Indian worldviews',
    ],
    example:
      'The American thinks he is bargaining for the horse while the Indian thinks he is describing his goat — neither understands the other\'s perspective.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch6-6',
    chapter: 6,
    chapterName: 'Cultural Change',
    term: 'Partial Reconstruction of Tradition',
    definition:
      'Partial reconstruction of tradition is the idea that modern Indian society does not simply accept or reject tradition but selectively reconstructs it to suit contemporary needs. T.N. Madan argued that Indians selectively reinterpret traditions — keeping some elements, modifying others, and discarding rest — to navigate between tradition and modernity. This process is not a simple continuation of the past but an active, creative reinterpretation of cultural heritage.',
    keyPoints: [
      'Selective reinterpretation of tradition — not simple acceptance or rejection',
      'Indians keep some elements, modify others, discard rest',
      'Active, creative process rather than passive continuation of the past',
      'Navigates between tradition and modernity in contemporary India',
    ],
    theorist: 'T.N. Madan',
    example:
      'Hindu families performing wedding rituals with modern elements (DJ music, LED lights) while maintaining core ceremonies like saptapadi illustrates partial reconstruction.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch6-7',
    chapter: 6,
    chapterName: 'Cultural Change',
    term: 'Syncretism',
    definition:
      'Syncretism is the blending of different cultural traditions, beliefs, and practices into a new, hybrid form. In India, syncretism has produced rich cultural traditions — Sufi-Bhakti movements, Mughal-Rajput architectural fusion, shared festivals, and composite cuisine. It represents the creative interaction between different cultures rather than the dominance of one over another. Syncretic traditions challenge rigid cultural boundaries and show how cultures evolve through mutual influence.',
    keyPoints: [
      'Blending of different cultural traditions into new hybrid forms',
      'Sufi-Bhakti movements, Mughal-Rajput fusion, shared festivals',
      'Represents creative interaction, not dominance of one culture',
      'Challenges rigid cultural boundaries and shows cultural evolution',
    ],
    example:
      'The Dargah of Khwaja Moinuddin Chishti in Ajmer attracts Hindus and Muslims alike — a syncretic space where both traditions coexist and merge.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch6-8',
    chapter: 6,
    chapterName: 'Cultural Change',
    term: 'Social Reform Leaders',
    definition:
      'Social reform leaders challenged oppressive practices through intellectual critique, organisation, and activism. Raja Ram Mohan Roy campaigned against Sati and for women\'s education (Brahmo Samaj). Jyotirao Phule and Savitribai Phule fought caste discrimination and opened schools for lower castes and girls. Pandita Ramabai advocated for women\'s rights and widow remarriage. Periyar led the Self-Respect Movement in Tamil Nadu challenging Brahminical dominance and caste hierarchy.',
    keyPoints: [
      'Raja Ram Mohan Roy: abolition of Sati, women\'s education (Brahmo Samaj)',
      'Jyotirao & Savitribai Phule: caste emancipation, schools for lower castes/girls',
      'Pandita Ramabai: women\'s rights, widow remarriage',
      'Periyar: Self-Respect Movement, challenging Brahminical dominance in Tamil Nadu',
    ],
    example:
      'Savitribai Phule opened the first school for girls in Pune (1848) — she faced stones and dung thrown at her while walking to school.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch6-9',
    chapter: 6,
    chapterName: 'Cultural Change',
    term: 'Left Movement in India',
    definition:
      'The Left movement in India encompasses communist and socialist political movements, trade unions, peasant movements, and Naxalite insurgency. The Naxalite movement (1967 onwards, originating in Naxalbari, West Bengal) sought armed peasant revolution against the state. Trade unions (AITUC, CITU) organised industrial workers for better wages and conditions. Peasant movements fought against landlord exploitation and landlessness. The Kudumbam movement in Kerala organised women into self-help groups for economic empowerment.',
    keyPoints: [
      'Naxalite movement (1967, Naxalbari): armed peasant revolution against the state',
      'Trade unions (AITUC, CITU): organised industrial workers for wages and rights',
      'Peasant movements: fought landlord exploitation and landlessness',
      'Kudumbam movement (Kerala): women\'s self-help groups for economic empowerment',
    ],
    example:
      'The Naxalite movement began in Naxalbari village (1967) when tribal peasants seized land from landlords — it spread across rural India.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch6-10',
    chapter: 6,
    chapterName: 'Cultural Change',
    term: 'De-sanskritisation',
    definition:
      'De-sanskritisation is the reverse process of sanskritisation, where upper castes or dominant groups adopt practices associated with lower castes or folk traditions. It challenges the idea that social change always moves upward towards Brahminical norms. Upper-caste families consuming beef, attending folk festivals, or adopting non-vegetarian diets in some regions represent this trend. It shows that cultural change is complex, non-linear, and does not always follow a single direction.',
    keyPoints: [
      'Upper castes adopting lower-caste or folk practices',
      'Opposite of sanskritisation — challenges upward-only movement',
      'Shows cultural change is complex and non-linear',
      'Challenges Brahminical norms as the sole standard of cultural value',
    ],
    example:
      'In some regions of Kerala, upper-caste families consume beef and attend Theyyam performances — practices traditionally associated with lower castes.',
    markWeight: '4-5 अंक',
  },
];
