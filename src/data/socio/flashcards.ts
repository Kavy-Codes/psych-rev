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
      'Colonialism is a practice of domination where one nation exerts control over another territory and its people. It involves not just political control but also economic exploitation and cultural imposition. In India, British colonialism reshaped social structures, markets, and identity formations from the 18th century onwards.',
    keyPoints: [
      'Involves political, economic, and cultural domination',
      'Reshaped traditional Indian social structures',
      'Created new categories of identity and community',
      'Led to both resistance and accommodation',
    ],
    example:
      'The British imposition of land revenue systems like Zamindari altered agrarian relations across India.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch1-2',
    chapter: 1,
    chapterName: 'Introducing Indian Society',
    term: 'Orientalism',
    definition:
      'Orientalism refers to the Western construction and representation of the East (Orient) as fundamentally different, inferior, and static. Edward Said argued that it served as a discourse of power that justified colonial rule. Orientalists studied Indian texts and societies but through a biased lens that reinforced colonial hierarchies.',
    keyPoints: [
      'Coined as a critical concept by Edward Said (1978)',
      'Portrays Eastern societies as exotic, backward, and unchanging',
      'Used to justify colonial civilising mission',
      'Contrasted with Occidentalism (Eastern view of the West)',
    ],
    theorist: 'Edward Said',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch1-3',
    chapter: 1,
    chapterName: 'Introducing Indian Society',
    term: 'Occidentalism',
    definition:
      'Occidentalism is the mirror image of Orientalism — it refers to the ways in which Eastern societies perceive and construct the West. It often involves viewing Western societies as materialistic, morally corrupt, or aggressive. Like Orientalism, it is a reductive and stereotypical representation.',
    keyPoints: [
      'Eastern construction of the Western "Other"',
      'Often portrays the West as materialistic and individualistic',
      'Used in nationalist and anti-colonial discourse',
      'Both Orientalism and Occidentalism are Eurocentric/ethnocentric frameworks',
    ],
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch1-4',
    chapter: 1,
    chapterName: 'Introducing Indian Society',
    term: 'Community Identity',
    definition:
      'Community identity is an identity based on belonging to a social group, shaped by shared culture, religion, language, caste, or region. It is one of the most basic forms of identity but can become exclusionary when used to create rigid boundaries between groups. Colonialism often hardened these identities for administrative purposes.',
    keyPoints: [
      'Based on shared attributes like religion, caste, language',
      'Provides a sense of belonging and security',
      'Can overlap — a person has multiple community identities',
      'Colonial census hardened caste and religious identities',
    ],
    example:
      'A person may simultaneously identify as Tamil, Brahmin, and Hindu — layered community identities.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch1-5',
    chapter: 1,
    chapterName: 'Introducing Indian Society',
    term: 'Sociological Imagination',
    definition:
      'The sociological imagination is the ability to see the connection between personal experience and wider social structures. It allows individuals to understand how their private troubles are shaped by public issues. This concept encourages thinking beyond individual circumstances to grasp the larger social forces at work.',
    keyPoints: [
      'Connects personal biography with historical society',
      'Distinguishes between personal troubles and public issues',
      'Enables critical thinking about social arrangements',
      'Encourages self-reflexivity about one\'s own social position',
    ],
    theorist: 'C. Wright Mills',
    example:
      'Unemployment is a personal trouble for one person but a public issue when millions are jobless due to economic recession.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch1-6',
    chapter: 1,
    chapterName: 'Introducing Indian Society',
    term: 'Social Structure',
    definition:
      'Social structure refers to the relatively stable and patterned arrangements of social relationships and institutions in a society. It includes institutions like family, caste, economy, and religion that shape human behaviour. Understanding social structure helps explain how society reproduces itself over time.',
    keyPoints: [
      'Refers to organised pattern of social relations',
      'Includes institutions like family, caste, religion, economy',
      'More stable than individual behaviour but not static',
      'Shapes and constrains individual action',
    ],
    markWeight: '4-5 अंक',
  },

  // ─── Chapter 2: Demographic Structure ───
  {
    id: 'socio-ch2-1',
    chapter: 2,
    chapterName: 'Demographic Structure',
    term: 'Demography',
    definition:
      'Demography is the scientific study of human population — its size, composition, distribution, and changes over time. It examines births, deaths, migration, and factors like age, sex, and education that shape population characteristics. Census is the primary tool for collecting demographic data in India.',
    keyPoints: [
      'Studies population size, structure, and distribution',
      'Examines birth rate, death rate, and migration',
      'Census is the main data collection method in India',
      'Used for policy planning and resource allocation',
    ],
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch2-2',
    chapter: 2,
    chapterName: 'Demographic Structure',
    term: 'Total Fertility Rate (TFR)',
    definition:
      'TFR is the average number of children a woman would have during her reproductive years based on current birth rates. Replacement level fertility is approximately 2.1, meaning each couple replaces themselves with two children. India\'s TFR has declined from about 5.9 in 1951 to near replacement level.',
    keyPoints: [
      'Replacement level TFR is approximately 2.1',
      'India\'s TFR has declined steadily since independence',
      'Varies across states — Kerala lower, Bihar higher',
      'Key indicator for population growth projections',
    ],
    example:
      'Kerala achieved replacement level TFR (2.1) much earlier than Bihar due to education and healthcare access.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch2-3',
    chapter: 2,
    chapterName: 'Demographic Structure',
    term: 'Infant Mortality Rate (IMR)',
    definition:
      'IMR is the number of deaths of infants (under one year of age) per 1,000 live births in a given year. It is a key indicator of public health and development. High IMR reflects poor healthcare, nutrition, and sanitation. India has made significant progress in reducing IMR since independence.',
    keyPoints: [
      'Measures deaths of infants under one year per 1,000 live births',
      'Indicator of healthcare quality and social development',
      'India\'s IMR has fallen from ~146 (1951) to ~28 (2020)',
      'Rural areas and certain states have higher IMR',
    ],
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch2-4',
    chapter: 2,
    chapterName: 'Demographic Structure',
    term: 'Demographic Dividend',
    definition:
      'Demographic dividend refers to the economic growth potential that arises when a country has a large working-age population relative to dependents (children and elderly). When the dependency ratio is low, societies can invest more in education, health, and economic development. India is currently in a demographic dividend window.',
    keyPoints: [
      'Occurs when working-age population exceeds dependents',
      'Low dependency ratio creates economic potential',
      'Requires investment in education and skill development',
      'India\'s dividend window estimated to last until 2055',
    ],
    example:
      'Countries like South Korea and Japan used their demographic dividend periods to achieve rapid economic growth.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch2-5',
    chapter: 2,
    chapterName: 'Demographic Structure',
    term: 'Demographic Transition',
    definition:
      'Demographic transition theory describes the shift from high birth and death rates to low birth and death rates as a society modernises. It occurs in stages — from pre-industrial high population growth, through declining death rates, to eventual low birth rates. Most developed countries have completed this transition.',
    keyPoints: [
      'Four-stage model of population change',
      'Stage 1: High birth and death rates (stable)',
      'Stage 2: Death rates fall, birth rates remain high (rapid growth)',
      'Stage 3: Birth rates decline (growth slows)',
      'Stage 4: Low birth and death rates (stable)',
    ],
    theorist: 'W.S. Thompson / Notestein',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch2-6',
    chapter: 2,
    chapterName: 'Demographic Structure',
    term: 'Population Pyramid',
    definition:
      'A population pyramid is a graphical representation of the age and sex composition of a population. It shows the proportion of males and females in different age groups. The shape of the pyramid indicates whether a population is young (expansive), stable (stationary), or ageing (constrictive).',
    keyPoints: [
      'Graphical representation of age-sex structure',
      'Expansive pyramid = young population (developing countries)',
      'Constrictive pyramid = ageing population (developed countries)',
      'India has a youthful population with a broad base',
    ],
    example:
      'India\'s population pyramid has a wide base indicating a large young population, while Japan\'s is constrictive showing an ageing society.',
    markWeight: '4-5 अंक',
  },

  // ─── Chapter 3: Social Institutions ───
  {
    id: 'socio-ch3-1',
    chapter: 3,
    chapterName: 'Social Institutions',
    term: 'Caste System',
    definition:
      'The caste system is a hierarchical social stratification based on birth, occupation, and ritual purity. It is characterised by endogamy (marriage within the caste), hereditary occupation, and graded status from Brahmins at the top to Dalits at the bottom. It has been both a mechanism of social order and oppression.',
    keyPoints: [
      'Hierarchical system based on birth, not merit',
      'Characterised by endogamy, hereditary occupation, purity-pollution',
      'Four-fold Varna system: Brahmin, Kshatriya, Vaishya, Shudra',
      'Dalits (untouchables) excluded from the Varna system',
    ],
    example:
      'A weaver family traditionally belonging to the Vaishya caste would continue weaving across generations.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch3-2',
    chapter: 3,
    chapterName: 'Social Institutions',
    term: 'Endogamy',
    definition:
      'Endogamy is the practice of marrying within one\'s own social group — whether defined by caste, class, religion, or community. It is a defining feature of the caste system in India. It reinforces social boundaries and prevents mixing of social groups, thereby maintaining caste hierarchy.',
    keyPoints: [
      'Marriage within the same caste or social group',
      'Core rule of the caste system',
      'Maintains social boundaries and hierarchy',
      'Violations historically met with severe punishment',
    ],
    example:
      'A Tamil Brahmin family insisting their daughter marry only a Tamil Brahmin is practicing endogamy.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch3-3',
    chapter: 3,
    chapterName: 'Social Institutions',
    term: 'Purity and Pollution',
    definition:
      'The concepts of purity and pollution form the ideological basis of caste hierarchy. Upper castes claimed ritual purity while assigning polluting tasks (like cleaning, handling dead animals) to lower castes. These ideas justified social exclusion and occupational segregation.',
    keyPoints: [
      'Upper castes associated with ritual purity',
      'Lower castes assigned "polluting" occupations',
      'Justified segregation in food, water, and social interaction',
      'Dalits faced untouchability due to perceived pollution',
    ],
    example:
      'In many villages, Dalits were historically forbidden from drawing water from the same well as upper castes.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch3-4',
    chapter: 3,
    chapterName: 'Social Institutions',
    term: 'Matriliny',
    definition:
      'Matriliny is a system of descent traced through the mother\'s line, where property, inheritance, and family name pass from mother to daughter. In India, matrilineal societies exist among the Khasi, Garo, and Nair communities. It is distinct from matriarchy, which implies female political dominance.',
    keyPoints: [
      'Descent and inheritance traced through the mother',
      'Property passes from mother to daughter',
      'Found in Khasi, Garo (Meghalaya), and Nair (Kerala)',
      'Does not necessarily mean women hold political power',
    ],
    example:
      'Among the Khasi people of Meghalaya, the youngest daughter inherits the ancestral property.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch3-5',
    chapter: 3,
    chapterName: 'Social Institutions',
    term: 'Gotra and Exogamy',
    definition:
      'Gotra is a clan system among Hindus, especially upper castes, tracing descent from a common ancestor. Exogamy is the rule of marrying outside one\'s gotra. Together, they prevent marriage between individuals who share the same patrilineal lineage, thereby avoiding incest and expanding social networks.',
    keyPoints: [
      'Gotra = patrilineal clan with common mythical ancestor',
      'Exogamy = marriage outside one\'s gotra',
      'Prevents consanguineous marriage within the same lineage',
      'One cannot marry within one\'s own gotra or mother\'s gotra',
    ],
    example:
      'A person belonging to the Bharadwaj gotra must find a spouse from a different gotra, like Kashyap or Vashishtha.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch3-6',
    chapter: 3,
    chapterName: 'Social Institutions',
    term: 'Herbert Risley',
    definition:
      'Herbert Risley was a British colonial ethnographer who conducted extensive surveys of Indian castes and tribes. His work, "The Tribes and Castes of Bengal" (1891), codified caste categories based on occupation and ritual status. His measurements of nasal index were used to create a racial hierarchy of castes.',
    keyPoints: [
      'British ethnographer who surveyed Indian caste system',
      'Author of "The Tribes and Castes of Bengal" (1891)',
      'Used nasal index measurements to rank castes racially',
      'His work hardened colonial understanding of caste',
    ],
    markWeight: '4-5 अंक',
  },

  // ─── Chapter 4: Market as Social Institution ───
  {
    id: 'socio-ch4-1',
    chapter: 4,
    chapterName: 'Market as Social Institution',
    term: 'Invisible Hand',
    definition:
      'The invisible hand is a metaphor for how free markets, through competition and self-interest, tend to allocate resources efficiently without central planning. Individuals pursuing their own economic gain inadvertently contribute to the overall welfare of society. It is a foundational idea of classical economics.',
    keyPoints: [
      'Self-interest leads to efficient resource allocation',
      'No need for government intervention in free markets',
      'Competition ensures fair prices and quality',
      'Markets are self-regulating mechanisms',
    ],
    theorist: 'Adam Smith',
    example:
      'A bakery lowering prices to attract customers unknowingly benefits consumers by making bread affordable.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch4-2',
    chapter: 4,
    chapterName: 'Market as Social Institution',
    term: 'Social Embeddedness',
    definition:
      'Social embeddedness is the idea that economic actions are deeply embedded in social relations, cultural norms, and institutions. Markets do not operate in a vacuum — they are shaped by trust, kinship, religion, and caste. Economic behaviour cannot be understood without its social context.',
    keyPoints: [
      'Economic actions shaped by social relations and norms',
      'Markets influenced by trust, kinship, caste, religion',
      'Opposes the idea of markets as purely rational',
      'Explains why identical goods sell at different prices in different social contexts',
    ],
    theorist: 'Karl Polanyi',
    example:
      'In weekly haats, traders from the same caste community may offer preferential rates based on kinship ties.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch4-3',
    chapter: 4,
    chapterName: 'Market as Social Institution',
    term: 'Commoditisation',
    definition:
      'Commoditisation is the process by which things not previously regarded as goods — like labour, land, culture, or even relationships — become objects of exchange with a monetary value. It transforms social relations into market transactions and can erode traditional social bonds.',
    keyPoints: [
      'Process of turning non-market items into commodities',
      'Labour becomes a commodity under capitalism',
      'Can erode traditional and cultural values',
      'Leads to exploitation when basic needs become commodities',
    ],
    example:
      'Under colonialism, Indian peasants who previously grew food for subsistence were forced to grow indigo for sale as a commodity.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch4-4',
    chapter: 4,
    chapterName: 'Market as Social Institution',
    term: 'Status Symbol',
    definition:
      'A status symbol is a visible marker — such as a luxury car, branded clothing, or large house — that communicates a person\'s social position and prestige. In market societies, consumption becomes a way of displaying status. Different status symbols carry different meanings across cultures and classes.',
    keyPoints: [
      'Visible markers of social prestige and position',
      'Consumption patterns reflect and reinforce class',
      'Status symbols vary across cultures and historical periods',
      'Can create pressure for conspicuous consumption',
    ],
    theorist: 'Max Weber',
    example:
      'Owning an iPhone in India is often perceived as a status symbol signalling economic prosperity.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch4-5',
    chapter: 4,
    chapterName: 'Market as Social Institution',
    term: 'Liberalisation',
    definition:
      'Liberalisation refers to the reduction of government controls and restrictions on the economy, allowing freer trade, investment, and competition. In India, major economic liberalisation began in 1991 with reforms that opened the economy to global markets. It led to growth but also increased inequality.',
    keyPoints: [
      'Reduction of government regulations on economy',
      'India\'s major liberalisation began in 1991',
      'Encouraged foreign investment and private enterprise',
      'Led to economic growth but also rising inequality',
    ],
    example:
      'The 1991 reforms ended the "licence raj" and allowed private companies to expand without government permits.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch4-6',
    chapter: 4,
    chapterName: 'Market as Social Institution',
    term: 'Weekly Haat',
    definition:
      'Weekly haats are traditional rural markets that operate on specific days of the week in Indian villages and small towns. They are sites of economic exchange, social interaction, and cultural bonding. People buy and sell agricultural produce, handicrafts, and daily necessities. They reflect the social embeddedness of markets.',
    keyPoints: [
      'Traditional periodic markets in rural India',
      'Operate on fixed days of the week',
      'Sites of both economic exchange and social interaction',
      'Caste often determines who sells what',
    ],
    example:
      'A village haat on every Wednesday where farmers sell vegetables and artisans sell pottery.',
    markWeight: '4-5 अंक',
  },

  // ─── Chapter 5: Structural Change ───
  {
    id: 'socio-ch5-1',
    chapter: 5,
    chapterName: 'Structural Change',
    term: 'Deindustrialisation',
    definition:
      'Deindustrialisation is the decline of manufacturing and industrial activity in a region or country. In India, colonial policies systematically destroyed indigenous industries — particularly textiles — to create a market for British manufactured goods. Indian raw materials were exported and finished goods were imported.',
    keyPoints: [
      'Decline of indigenous manufacturing under colonialism',
      'British policies favoured importing finished goods',
      'India went from net exporter to net importer of textiles',
      'Caused mass unemployment among artisans and weavers',
    ],
    example:
      'Bengal muslin weavers had their thumbs cut off by the British to prevent them from producing fine textiles.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch5-2',
    chapter: 5,
    chapterName: 'Structural Change',
    term: 'Drain of Wealth',
    definition:
      'The drain of wealth theory argues that colonialism caused a continuous transfer of wealth from India to Britain through taxation, trade surplus, and repatriation of profits. This drained India\'s resources and prevented capital accumulation needed for industrialisation and development.',
    keyPoints: [
      'Continuous transfer of wealth from India to Britain',
      'Tax revenues, trade profits, and salaries repatriated',
      'Prevented capital accumulation in India',
      'Theorised by Indian nationalist economists',
    ],
    theorist: 'Dadabhai Naoroji',
    example:
      'British officials collected taxes in India but spent and invested their earnings in Britain, not India.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch5-3',
    chapter: 5,
    chapterName: 'Structural Change',
    term: 'Industrialisation',
    definition:
      'Industrialisation is the process of transforming an economy from agriculture-based to manufacturing-based, involving the use of machinery, factories, and wage labour. In India, industrialisation began unevenly under colonialism and accelerated after independence with planned economic development.',
    keyPoints: [
      'Shift from agrarian to manufacturing economy',
      'Involves machinery, factories, and wage labour',
      'India\'s industrialisation began under colonialism (Tata Iron)',
      'Post-independence Five Year Plans promoted heavy industry',
    ],
    example:
      'The establishment of Tata Iron and Steel Company in Jamshedpur (1907) was an early milestone in Indian industrialisation.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch5-4',
    chapter: 5,
    chapterName: 'Structural Change',
    term: 'Urbanisation',
    definition:
      'Urbanisation is the increasing proportion of a population living in urban areas (cities and towns). It involves migration from rural to urban areas, growth of cities, and transformation of social life. In India, urbanisation has been steady but slower than in many other developing countries.',
    keyPoints: [
      'Increasing share of population in urban areas',
      'Driven by rural-to-urban migration',
      'Cities become centres of industry, services, and culture',
      'India is about 35% urban (2021) compared to global average of 56%',
    ],
    example:
      'Mumbai grew from a fishing village to a mega-city of over 20 million through sustained urbanisation.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch5-5',
    chapter: 5,
    chapterName: 'Structural Change',
    term: 'Capitalist System',
    definition:
      'The capitalist system is an economic system based on private ownership of the means of production, wage labour, and the pursuit of profit. Production is driven by market demand rather than social need. Under colonialism, capitalism was imposed on India in a distorted form that served British interests.',
    keyPoints: [
      'Private ownership of means of production',
      'Wage labour and profit motive central',
      'Production for market, not for direct use',
      'Colonial capitalism was extractive and exploitative',
    ],
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch5-6',
    chapter: 5,
    chapterName: 'Structural Change',
    term: 'Colonial Cities',
    definition:
      'Colonial cities were urban centres established or developed by the British for administrative, commercial, and military purposes. Cities like Kolkata, Mumbai, and Chennai were redesigned with European-style infrastructure — cantonments, bungalows, and clubs — reflecting colonial power structures.',
    keyPoints: [
      'Cities developed for colonial administration and trade',
      'Kolkata, Mumbai, Chennai were major colonial cities',
      'Featured European-style architecture and infrastructure',
      'Divided into "White Town" (Europeans) and "Black Town" (Indians)',
    ],
    example:
      'Mumbai\'s Fort area was the "White Town" where British officials lived, while Indian areas like Girgaum were "Black Town".',
    markWeight: '4-5 अंक',
  },

  // ─── Chapter 6: Cultural Change ───
  {
    id: 'socio-ch6-1',
    chapter: 6,
    chapterName: 'Cultural Change',
    term: 'Sanskritisation',
    definition:
      'Sanskritisation is a process by which lower castes adopt the rituals, customs, and practices of upper castes to improve their social status. It involves emulation of Brahminical norms — vegetarianism, teetotalism, and performing elaborate rituals. The concept was developed to explain social mobility within the caste system.',
    keyPoints: [
      'Lower castes imitate upper-caste practices',
      'Involves adopting vegetarianism, rituals, sanskritic norms',
      'A strategy for upward social mobility',
      'Does not always lead to actual change in caste position',
    ],
    theorist: 'M.N. Srinivas',
    example:
      'The Dominant Caste in a village may claim Brahmin status by adopting vegetarianism and performing puja.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch6-2',
    chapter: 6,
    chapterName: 'Cultural Change',
    term: 'Westernisation',
    definition:
      'Westernisation refers to the adoption of Western cultural traits — such as dress, food, language, education, and technology — by non-Western societies. In India, it began during colonialism and accelerated after independence. It is not uniform and coexists with indigenous culture in complex ways.',
    keyPoints: [
      'Adoption of Western cultural practices and values',
      'Began during colonialism, accelerated post-independence',
      'Includes dress, food, education, technology',
      'Coexists with traditional culture — not always a replacement',
    ],
    example:
      'English-speaking professionals in Indian metros who wear Western clothes but celebrate Diwali represent westernisation.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch6-3',
    chapter: 6,
    chapterName: 'Cultural Change',
    term: 'Modernisation',
    definition:
      'Modernisation is the process of social transformation involving industrialisation, urbanisation, rationalisation, and the spread of science and technology. It involves a shift from traditional to secular, rational, and individualistic values. In India, modernisation has been selective and uneven.',
    keyPoints: [
      'Involves industrialisation, urbanisation, and rational thought',
      'Shift from traditional to secular values',
      'Associated with democracy, education, and science',
      'In India, modernisation coexists with tradition',
    ],
    example:
      'The expansion of university education and scientific temper in post-independence India is a form of modernisation.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch6-4',
    chapter: 6,
    chapterName: 'Cultural Change',
    term: 'Secularisation',
    definition:
      'Secularisation is the process by which religion loses its social and cultural significance in everyday life. It involves the separation of religion from politics, education, and public institutions. In India, secularisation has been partial — religion continues to play a strong role in politics and social life.',
    keyPoints: [
      'Decline of religion\'s influence in public life',
      'Separation of religion from state and institutions',
      'In India, secularisation has been incomplete',
      'Religion remains politically and socially significant',
    ],
    example:
      'India\'s constitution is secular, but religious identity continues to influence voting patterns and social relations.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch6-5',
    chapter: 6,
    chapterName: 'Cultural Change',
    term: 'Social Reform Movements',
    definition:
      'Social reform movements in 19th and 20th century India sought to challenge oppressive social practices like Sati, child marriage, caste discrimination, and the treatment of women. Led by thinkers and activists, these movements drew from both Indian traditions and Western ideas of liberty and equality.',
    keyPoints: [
      'Challenged Sati, child marriage, caste oppression',
      'Drew from both Indian and Western intellectual traditions',
      'Key figures: Raja Ram Mohan Roy, Jyotirao Phule, Savitribai Phule',
      'Paved the way for independent India\'s social legislation',
    ],
    example:
      'Raja Ram Mohan Roy campaigned against Sati, leading to its abolition by the British in 1829.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch6-6',
    chapter: 6,
    chapterName: 'Cultural Change',
    term: 'De-sanskritisation',
    definition:
      'De-sanskritisation is the reverse process of sanskritisation, where upper castes adopt practices associated with lower castes or folk traditions. It challenges the idea that social change always moves upward towards Brahminical norms. It reflects the complex and non-linear nature of cultural change.',
    keyPoints: [
      'Upper castes adopting lower-caste or folk practices',
      'Opposite of sanskritisation',
      'Shows cultural change is not always unidirectional',
      'Challenges Brahminical norms as the sole standard',
    ],
    example:
      'Upper-caste families in some regions consuming beef or attending folk festivals represents de-sanskritisation.',
    markWeight: '4-5 अंक',
  },

  // ─── Chapter 7: Constitution and Social Change ───
  {
    id: 'socio-ch7-1',
    chapter: 7,
    chapterName: 'Constitution and Social Change',
    term: 'Fundamental Rights',
    definition:
      'Fundamental Rights are the basic rights guaranteed to all citizens by the Indian Constitution (Part III). They include right to equality, freedom, against exploitation, religious freedom, cultural rights, and right to constitutional remedies. They are justiciable — enforceable by courts.',
    keyPoints: [
      'Guaranteed by Part III of the Indian Constitution',
      'Six categories: equality, freedom, exploitation, religion, culture, remedies',
      'Justiciable and enforceable by courts',
      'Can be suspended during national emergency (except Articles 20-21)',
    ],
    example:
      'Article 14 guarantees equality before law — no person can be discriminated against on grounds of religion, race, caste, sex, or place of birth.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch7-2',
    chapter: 7,
    chapterName: 'Constitution and Social Change',
    term: 'Directive Principles of State Policy',
    definition:
      'Directive Principles (Part IV) are guidelines for the government to follow while making laws and policies. They aim to establish a just society by directing the state towards social welfare, economic justice, and international peace. They are non-justiciable but fundamental in governance.',
    keyPoints: [
      'Guidelines for state policy (Part IV of Constitution)',
      'Non-justiciable — cannot be enforced by courts',
      'Aim at social welfare, economic justice, and equality',
      'Inspired by Irish Constitution',
    ],
    example:
      'Article 38 directs the state to secure a social order promoting welfare of the people.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch7-3',
    chapter: 7,
    chapterName: 'Constitution and Social Change',
    term: 'Article 17 — Abolition of Untouchability',
    definition:
      'Article 17 of the Indian Constitution abolishes untouchability in all forms and forbids its practice in any form. The Untouchability (Offences) Act, 1955 (later renamed Protection of Civil Rights Act, 1976) provides penalties for its violation. It was a radical step towards social justice.',
    keyPoints: [
      'Abolishes untouchability in all forms',
      'Enforced by Protection of Civil Rights Act, 1976',
      'Makes discrimination on grounds of untouchability a punishable offence',
      'Aimed at ending centuries of caste-based oppression',
    ],
    example:
      'Denying entry to a Dalit person into a temple or public well is a violation of Article 17.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch7-4',
    chapter: 7,
    chapterName: 'Constitution and Social Change',
    term: 'Reservation',
    definition:
      'Reservation is a system of affirmative action that reserves seats in education, government jobs, and legislative bodies for historically oppressed groups — Scheduled Castes (SC), Scheduled Tribes (ST), and Other Backward Classes (OBC). It aims to correct historical injustices and ensure equal representation.',
    keyPoints: [
      'Affirmative action for SC, ST, and OBC groups',
      'Reserves seats in education, jobs, and legislatures',
      'Enshrined in Articles 15(4), 16(4), and 330-342',
      'Mandal Commission (1990) expanded reservation to OBCs',
    ],
    example:
      'In 2023, the 103rd Constitutional Amendment introduced 10% reservation for Economically Weaker Sections (EWS).',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch7-5',
    chapter: 7,
    chapterName: 'Constitution and Social Change',
    term: 'Dr. B.R. Ambedkar',
    definition:
      'Dr. B.R. Ambedkar was the chief architect of the Indian Constitution and a champion of Dalit rights. Born into a Mahar (Dalit) family, he fought against caste discrimination and untouchability throughout his life. He later converted to Buddhism, leading a mass conversion movement of Dalits.',
    keyPoints: [
      'Chief architect of the Indian Constitution',
      'Champion of Dalit rights and social justice',
      'Fought for abolition of untouchability',
      'Led mass conversion to Buddhism (1956)',
      'First Law and Justice Minister of independent India',
    ],
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch7-6',
    chapter: 7,
    chapterName: 'Constitution and Social Change',
    term: 'Panchayati Raj',
    definition:
      'Panchayati Raj is a system of local self-governance in rural India, institutionalised by the 73rd Constitutional Amendment (1992). It establishes a three-tier structure — Gram Panchayat, Panchayat Samiti, and Zila Parishad — to decentralise power and enable grassroots democracy.',
    keyPoints: [
      'Three-tier local self-governance system',
      'Institutionalised by 73rd Amendment (1992)',
      'Gram Panchayat → Panchayat Samiti → Zila Parishad',
      'One-third seats reserved for women',
      'Aims to decentralise power and promote participation',
    ],
    example:
      'A Gram Sabha in a Maharashtra village deciding on the use of funds under MGNREGA through Panchayati Raj.',
    markWeight: '4-5 अंक',
  },

  // ─── Chapter 8: Rural Society ───
  {
    id: 'socio-ch8-1',
    chapter: 8,
    chapterName: 'Rural Society',
    term: 'Green Revolution',
    definition:
      'The Green Revolution refers to the period of significant increase in agricultural production in India during the 1960s-70s, achieved through the adoption of high-yielding variety (HYV) seeds, chemical fertilisers, pesticides, and improved irrigation. It transformed India from a food-deficit to a food-surplus country.',
    keyPoints: [
      'Introduction of HYV seeds (especially wheat and rice)',
      'Use of chemical fertilisers, pesticides, irrigation',
      'Concentrated in Punjab, Haryana, and Western UP',
      'Increased food production but widened inequality',
    ],
    example:
      'Punjab became India\'s breadbasket, but small farmers who couldn\'t afford HYV technology were left behind.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch8-2',
    chapter: 8,
    chapterName: 'Rural Society',
    term: 'Zamindari Abolition',
    definition:
      'Zamindari abolition was a major land reform measure that sought to end the intermediaries (zamindars) who collected revenue from peasants and transferred a portion to the colonial state. After independence, most states enacted legislation to abolish zamindari and vest land rights in the actual cultivators.',
    keyPoints: [
      'Abolished intermediaries between state and peasant',
      'Enacted by most states after independence',
      'Aimed to give land rights to actual cultivators',
      'Implementation varied — successful in some states, ineffective in others',
    ],
    example:
      'In Uttar Pradesh, the Zamindari Abolition Act, 1950 transferred land from zamindars to cultivators.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch8-3',
    chapter: 8,
    chapterName: 'Rural Society',
    term: 'Tenancy Reforms',
    definition:
      'Tenancy reforms were laws aimed at protecting the rights of tenant farmers who cultivated land owned by others. They included measures like fixing fair rents, providing security of tenure, and giving tenants the right to purchase the land they cultivated. Their implementation was uneven across states.',
    keyPoints: [
      'Protected rights of tenant farmers',
      'Fixed fair rents and provided security of tenure',
      'Gave tenants right to purchase cultivated land',
      'Better implemented in Kerala and West Bengal',
    ],
    example:
      'In West Bengal, Operation Barga (1970s) gave sharecroppers permanent cultivation rights.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch8-4',
    chapter: 8,
    chapterName: 'Rural Society',
    term: 'Land Ceiling',
    definition:
      'Land ceiling laws set a maximum limit on the amount of agricultural land an individual or family could own. The surplus land above the ceiling was to be redistributed to landless peasants. While intended to reduce inequality, these laws were often undermined by loopholes and evasion.',
    keyPoints: [
      'Maximum limit on landholding per individual/family',
      'Surplus land redistributed to landless peasants',
      'Varied across states — lower ceilings in Kerala, higher in UP',
      'Often evaded through benami (proxy) transactions',
    ],
    example:
      'Gujarat\'s land ceiling law was evaded by splitting land among family members to stay below the limit.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch8-5',
    chapter: 8,
    chapterName: 'Rural Society',
    term: 'Bonded Labour',
    definition:
      'Bonded labour is a system where a person is forced to work to repay a debt, often inherited across generations. The labourer receives minimal wages and cannot leave until the debt is repaid — which is rarely possible due to exploitative interest rates. The Bonded Labour System (Abolition) Act, 1976 made it illegal.',
    keyPoints: [
      'Forced labour to repay debt, often hereditary',
      'Minimal wages and exploitative conditions',
      'Abolished by Bonded Labour System Act, 1976',
      'Still persists in parts of India, especially in brick kilns and agriculture',
    ],
    example:
      'Workers in brick kilns of Uttar Pradesh trapped in debt bondage, unable to leave due to advances taken from contractors.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch8-6',
    chapter: 8,
    chapterName: 'Rural Society',
    term: 'Bhoodan Yojana',
    definition:
      'Bhoodan Yojana was a land donation movement launched in 1951 by Vinoba Bhave, where landowners voluntarily donated a portion of their land to landless peasants. It was a Gandhian approach to land redistribution. While it redistributed some land, it could not solve the structural problem of landlessness.',
    keyPoints: [
      'Voluntary land donation movement by Vinoba Bhave',
      'Launched in 1951 in Pochampalli, Telangana',
      'Gandhian approach — voluntary, not coercive',
      'Redistributed some land but limited in scale',
    ],
    theorist: 'Vinoba Bhave',
    example:
      'In Pochampalli, a landlord donated 100 acres of land to 80 landless families, inspiring the Bhoodan movement.',
    markWeight: '4-5 अंक',
  },

  // ─── Chapter 9: Industrial Society ───
  {
    id: 'socio-ch9-1',
    chapter: 9,
    chapterName: 'Industrial Society',
    term: 'Organised Sector',
    definition:
      'The organised sector refers to enterprises and workers that are registered with the government and follow labour laws — including fixed working hours, minimum wages, social security, and union rights. It provides job security and benefits but employs only about 8-10% of India\'s workforce.',
    keyPoints: [
      'Registered enterprises following labour laws',
      'Provides job security, fixed wages, social benefits',
      'Includes government, PSUs, and large private firms',
      'Employs only 8-10% of India\'s workforce',
    ],
    example:
      'A government school teacher with pension, provident fund, and job security works in the organised sector.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch9-2',
    chapter: 9,
    chapterName: 'Industrial Society',
    term: 'Unorganised Sector',
    definition:
      'The unorganised sector comprises enterprises and workers not registered with the government and outside the reach of labour laws. Workers face job insecurity, low wages, no social security, and exploitative conditions. It employs over 90% of India\'s workforce, including agricultural labourers, street vendors, and domestic workers.',
    keyPoints: [
      'Unregistered enterprises outside labour law protection',
      'Low wages, job insecurity, no social security',
      'Employs over 90% of India\'s workforce',
      'Includes agriculture, construction, street vending, domestic work',
    ],
    example:
      'A domestic worker in a city earning daily wages without any written contract works in the unorganised sector.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch9-3',
    chapter: 9,
    chapterName: 'Industrial Society',
    term: 'Home-Based Work',
    definition:
      'Home-based work involves producing goods or providing services from one\'s home, often for contractors or intermediaries. It is common in garment assembly, bangles, agarbatti, and food processing. Workers — mostly women — receive piece-rate wages with no labour protections or social security.',
    keyPoints: [
      'Production or services carried out from home',
      'Common in garment, bangles, agarbatti industries',
      'Predominantly women workers',
      'Piece-rate wages with no labour protections',
    ],
    example:
      'Women in Ludhiana assembling garments at home for export houses, paid per piece completed.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch9-4',
    chapter: 9,
    chapterName: 'Industrial Society',
    term: 'Taylorism and Fordism',
    definition:
      'Taylorism (Scientific Management) introduced systematic study of work processes to maximise efficiency — breaking tasks into small, repetitive steps. Fordism combined Taylorism with mass production on assembly lines, producing standardised goods at low cost. Both transformed industrial labour but also deskilled workers.',
    keyPoints: [
      'Taylorism: scientific study of work for maximum efficiency',
      'Fordism: assembly line mass production of standardised goods',
      'Both increased productivity but deskilled workers',
      'Workers became cogs in a mechanised system',
    ],
    theorist: 'Frederick Taylor / Henry Ford',
    example:
      'Henry Ford\'s assembly line for Model T cars reduced production time from 12 hours to 93 minutes per car.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch9-5',
    chapter: 9,
    chapterName: 'Industrial Society',
    term: 'Bombay Textile Mill Strike (1982)',
    definition:
      'The Bombay Textile Mill Strike of 1982 was one of the largest industrial actions in Indian history. Over 250,000 workers from 65 textile mills went on strike for 18 months demanding better wages and working conditions. The strike led to the permanent closure of many mills and transformed Mumbai\'s economy and landscape.',
    keyPoints: [
      '250,000+ workers from 65 mills on strike for 18 months',
      'Led by Datta Samant under the INTUC',
      'Demanded better wages and working conditions',
      'Many mills never reopened — transformed Mumbai\'s economy',
    ],
    theorist: 'Datta Samant',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch9-6',
    chapter: 9,
    chapterName: 'Industrial Society',
    term: 'Trade Unions',
    definition:
      'Trade unions are organisations of workers formed to protect their interests — negotiating wages, working conditions, and job security with employers. In India, trade unions emerged in the early 20th century and have played a key role in labour movements. Major unions include AITUC, INTUC, and CITU.',
    keyPoints: [
      'Organisations protecting workers\' interests',
      'Negotiate wages, conditions, and job security',
      'Key role in labour movements since early 20th century',
      'Major Indian unions: AITUC, INTUC, CITU, HMS',
    ],
    markWeight: '4-5 अंक',
  },

  // ─── Chapter 10: Globalisation ───
  {
    id: 'socio-ch10-1',
    chapter: 10,
    chapterName: 'Globalisation',
    term: 'Liberalisation 1991',
    definition:
      'The 1991 economic reforms marked India\'s shift from a state-controlled economy to a market-oriented one. Triggered by a severe balance of payments crisis, the reforms dismantled the "licence raj," opened the economy to foreign investment, and reduced trade barriers. They fundamentally reshaped India\'s economy and society.',
    keyPoints: [
      'Triggered by balance of payments crisis (1991)',
      'Dismantled the "licence raj" system',
      'Opened economy to foreign direct investment (FDI)',
      'Reduced trade barriers and deregulated industry',
    ],
    example:
      'The end of industrial licensing allowed companies like Maruti Suzuki to expand production without government approval.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch10-2',
    chapter: 10,
    chapterName: 'Globalisation',
    term: 'Electronic Economy',
    definition:
      'The electronic economy refers to economic transactions conducted through electronic means — internet banking, digital payments, e-commerce, and online trading. Globalisation has accelerated the shift to electronic economy, where vast amounts of capital move across borders instantaneously through digital networks.',
    keyPoints: [
      'Economic transactions conducted electronically',
      'Includes internet banking, digital payments, e-commerce',
      'Capital moves across borders instantly',
      'Transformed how business is conducted globally',
    ],
    example:
      'UPI (Unified Payments Interface) in India enables instant digital transactions, transforming retail commerce.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch10-3',
    chapter: 10,
    chapterName: 'Globalisation',
    term: 'Weightless Economy',
    definition:
      'The weightless economy is an economy where value is created through knowledge, information, and ideas rather than physical goods. IT services, software, finance, and consulting are "weightless" — they generate high value with minimal physical weight. Countries like India benefit through IT and BPO sectors.',
    keyPoints: [
      'Value from knowledge and information, not physical goods',
      'Includes IT, software, finance, consulting',
      'High economic value with minimal physical weight',
      'India is a major player through IT and BPO sectors',
    ],
    example:
      'Infosys and TCS export software services — high value, zero physical weight — generating billions in revenue.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch10-4',
    chapter: 10,
    chapterName: 'Globalisation',
    term: 'MNCs and TNCs',
    definition:
      'Multinational Corporations (MNCs) and Transnational Corporations (TNCs) are companies that operate in multiple countries. MNCs have a home country base while TNCs have no single national identity. They bring investment and technology but can also exploit cheap labour and resources in developing countries.',
    keyPoints: [
      'MNCs: operations in multiple countries with home base',
      'TNCs: no single national identity — truly global',
      'Bring FDI, technology, and employment',
      'Can exploit cheap labour and natural resources',
    ],
    example:
      'Coca-Cola operates in over 200 countries — an MNC with operations in India since 1956.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch10-5',
    chapter: 10,
    chapterName: 'Globalisation',
    term: 'Corporate Culture',
    definition:
      'Corporate culture refers to the shared values, practices, and norms within a corporation. In the context of globalisation, corporate culture has spread globally, promoting values of individualism, competition, efficiency, and consumerism. It can transform workplace norms and social relationships in developing countries.',
    keyPoints: [
      'Shared values and practices within corporations',
      'Promotes individualism, competition, and efficiency',
      'Spreads globally through MNCs and TNCs',
      'Can transform social norms in host countries',
    ],
    example:
      'IT companies in Bangalore promoting casual dress codes, flexible hours, and informal culture represent globalised corporate culture.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch10-6',
    chapter: 10,
    chapterName: 'Globalisation',
    term: 'Chipko Movement',
    definition:
      'The Chipko movement was an environmental movement that began in the 1970s in the Himalayan region of Uttarakhand (then UP). Villagers, mostly women, hugged trees to prevent them from being cut down by commercial contractors. It symbolised grassroots environmental activism and the link between ecology and livelihood.',
    keyPoints: [
      'Environmental movement in Uttarakhand (1970s)',
      'Villagers hugged trees to prevent logging',
      'Led by women — Gaura Devi, Sunderlal Bahuguna',
      'Symbol of grassroots environmental activism',
    ],
    example:
      'In Reni village (1974), women led by Gaura Devi hugged trees to stop contractors, inspiring the national movement.',
    markWeight: '4-5 अंक',
  },

  // ─── Chapter 11: Mass Media ───
  {
    id: 'socio-ch11-1',
    chapter: 11,
    chapterName: 'Mass Media',
    term: 'Mass Communication',
    definition:
      'Mass communication is the process of transmitting messages to a large, heterogeneous, and anonymous audience through media channels like newspapers, radio, television, and the internet. It is characterised by one-to-many communication, speed, and wide reach. It shapes public opinion and cultural norms.',
    keyPoints: [
      'One-to-many communication to large audiences',
      'Uses newspapers, radio, TV, internet',
      'Shapes public opinion and cultural values',
      'Characterised by speed and wide reach',
    ],
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch11-2',
    chapter: 11,
    chapterName: 'Mass Media',
    term: 'Dialectical Relationship',
    definition:
      'The dialectical relationship between mass media and society means that media both shapes and is shaped by society. Media influences social norms, politics, and culture, while social forces — economics, politics, audience preferences — determine what media produces. Neither exists in isolation.',
    keyPoints: [
      'Media shapes society and society shapes media',
      'Mutual influence — neither is purely dominant',
      'Economics and politics determine media content',
      'Audience preferences and feedback influence media',
    ],
    example:
      'News channels cover farmer protests because society demands it, but their coverage also shapes public opinion about the protests.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch11-3',
    chapter: 11,
    chapterName: 'Mass Media',
    term: 'Infotainment',
    definition:
      'Infotainment is a blend of information and entertainment — programming that educates while entertaining. News channels, talk shows, and reality TV increasingly adopt infotainment formats to attract larger audiences. Critics argue it sensationalises news and trivialises important issues.',
    keyPoints: [
      'Blend of information and entertainment',
      'Used by news channels, talk shows, reality TV',
      'Aims to attract larger audiences',
      'Criticised for sensationalising and trivialising issues',
    ],
    example:
      'Crime shows like "Crime Patrol" dramatise real crimes for entertainment while claiming to inform viewers.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch11-4',
    chapter: 11,
    chapterName: 'Mass Media',
    term: 'Transistor Revolution',
    definition:
      'The transistor revolution refers to the widespread adoption of transistor radios in India from the 1960s onwards. Transistor radios were portable, affordable, and could be operated on batteries, making them accessible even in remote rural areas. They transformed information access and cultural consumption.',
    keyPoints: [
      'Widespread adoption of portable transistor radios',
      'Affordable and battery-operated',
      'Made radio accessible in remote rural areas',
      'Transformed information and cultural consumption',
    ],
    example:
      'Farmers in remote villages could listen to All India Radio weather forecasts and market prices on transistor radios.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch11-5',
    chapter: 11,
    chapterName: 'Mass Media',
    term: 'Print Media History in India',
    definition:
      'Print media in India began with the establishment of newspapers in the early 19th century. The first newspaper, "Hicky\'s Gazette," was published in 1780. "Bombay Samachar" (1822) was the first Gujarati newspaper. Print media played a crucial role in the Indian independence movement and social reform.',
    keyPoints: [
      'First newspaper: Hicky\'s Gazette (1780)',
      'Bombay Samachar (1822) — first Gujarati newspaper',
      'Played key role in independence movement',
      'Early print media was often censored by the colonial state',
    ],
    example:
      'Raja Ram Mohan Roy used newspapers like "Mirat-ul-Akhbar" to campaign for social reform in the early 19th century.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch11-6',
    chapter: 11,
    chapterName: 'Mass Media',
    term: 'Doordarshan',
    definition:
      'Doordarshan is India\'s state-owned public television broadcaster, established in 1959. It began as an experimental service in Delhi and expanded nationwide. For decades, it was the only television channel in India. It played a major role in national integration, education, and cultural programming.',
    keyPoints: [
      'India\'s state-owned public TV broadcaster',
      'Established in 1959, expanded nationwide',
      'Only TV channel in India until liberalisation',
      'Major role in national integration and education',
    ],
    example:
      'Doordarshan\'s broadcast of Mahabharata and Ramayana in the late 1980s drew millions of viewers across India.',
    markWeight: '4-5 अंक',
  },

  // ─── Chapter 12: Social Movements ───
  {
    id: 'socio-ch12-1',
    chapter: 12,
    chapterName: 'Social Movements',
    term: 'Reformist Movements',
    definition:
      'Reformist movements seek gradual change within the existing social and political system rather than its overthrow. They work through constitutional means, petitions, and legislation. Examples include the temperance movement, anti-untouchability campaigns, and women\'s suffrage movements.',
    keyPoints: [
      'Seek gradual change within existing system',
      'Work through constitutional and legal means',
      'Do not aim to overthrow the social order',
      'Examples: temperance, anti-untouchability, suffrage movements',
    ],
    example:
      'The movement against Sati led by Raja Ram Mohan Roy was reformist — it sought to change a practice through legal means.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch12-2',
    chapter: 12,
    chapterName: 'Social Movements',
    term: 'Revolutionary Movements',
    definition:
      'Revolutionary movements aim to fundamentally transform the existing social, political, and economic order through radical action. They often involve mass mobilisation, and in extreme cases, armed struggle. Examples include Naxalite movements and anti-colonial revolutions.',
    keyPoints: [
      'Aim to fundamentally transform social order',
      'Involve radical action and mass mobilisation',
      'May include armed struggle in extreme cases',
      'Examples: Naxalite movement, anti-colonial revolutions',
    ],
    example:
      'The Naxalite movement (1967 onwards) sought to overthrow the state through armed peasant revolution.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch12-3',
    chapter: 12,
    chapterName: 'Social Movements',
    term: 'Relative Deprivation',
    definition:
      'Relative deprivation theory explains that social movements arise when people feel deprived relative to others or to their own expectations. It is not absolute poverty but the perception of inequality that drives collective action. When people believe they deserve more than they have, they may mobilise to demand change.',
    keyPoints: [
      'Social movements arise from perceived inequality',
      'Not absolute deprivation — relative to expectations or others',
      'Perception of injustice drives collective action',
      'Explains why even non-poor groups may protest',
    ],
    example:
      'Middle-class youth participating in anti-corruption protests (India Against Corruption, 2011) despite not being impoverished.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch12-4',
    chapter: 12,
    chapterName: 'Social Movements',
    term: 'Collective Action',
    definition:
      'Collective action refers to action taken together by a group to achieve a common goal. In the context of social movements, it involves coordinated efforts to bring about or resist social change. The challenge is overcoming the free-rider problem — individuals benefiting without contributing.',
    keyPoints: [
      'Group action towards a common goal',
      'Central to social movements',
      'Involves coordination and shared identity',
      'Faces free-rider problem — some benefit without contributing',
    ],
    theorist: 'Mancur Olson',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch12-5',
    chapter: 12,
    chapterName: 'Social Movements',
    term: 'Resource Mobilisation',
    definition:
      'Resource mobilisation theory argues that social movements succeed when they effectively mobilise resources — money, labour, media access, political connections, and organisational skills. It shifts focus from grievances to the organisational capacity of movements. Movements with better resources tend to be more successful.',
    keyPoints: [
      'Success depends on mobilising resources',
      'Resources: money, labour, media, political connections',
      'Focus on organisational capacity, not just grievances',
      'Movements with better resources tend to succeed',
    ],
    theorist: 'McCarthy and Zald',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch12-6',
    chapter: 12,
    chapterName: 'Social Movements',
    term: 'Dalit Movements',
    definition:
      'Dalit movements are social movements led by Dalits (formerly "untouchables") to fight against caste discrimination and demand equal rights. They include the self-respect movement, temple entry movements, political mobilisation through BSP, and the Navayana Buddhist movement. They challenge Brahminical social order.',
    keyPoints: [
      'Movements by Dalits against caste discrimination',
      'Include self-respect, temple entry, political mobilisation',
      'Led by leaders like Ambedkar, Jyotiba Phule',
      'Challenge the Brahminical social order',
    ],
    example:
      'The Mahad Satyagraha (1927) led by Ambedkar was a movement for Dalits\' right to access public water tanks.',
    markWeight: '4-5 अंक',
  },
];
