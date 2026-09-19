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
  // ─── Chapter 1: SC Ch1: Structural Change ───
  {
    id: 'socio-ch1-1',
    chapter: 1,
    chapterName: 'SC Ch1: Structural Change',
    term: 'Colonialism',
    definition:
      'Colonialism is the practice of political, economic, and cultural domination by one nation over another territory and its people. In India, British colonialism fundamentally restructured social institutions, land relations, and identity formations from the 18th century onwards. It introduced new systems of governance, revenue, and trade that disrupted traditional Indian society. The colonial state used administrative tools like census and codified law to entrench hierarchical social categories for easier control.',
    keyPoints: [
      'Involves political control, economic exploitation, and cultural imposition',
      'Reshaped Indian land relations through Zamindari, Ryotwari, and Mahalwari systems',
      'Introduced railways, print technology, and factory system',
      'Census operations rigidified caste and religious identities for administrative convenience',
    ],
    example:
      'The Permanent Settlement (1793) in Bengal created zamindars as revenue intermediaries, turning land into a commodity and creating a class of absentee landlords.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch1-2',
    chapter: 1,
    chapterName: 'SC Ch1: Structural Change',
    term: 'Railway Network',
    definition:
      'The British introduced the railway network in India from the 1850s to facilitate the movement of raw materials to ports and manufactured goods into the interior. It was the largest infrastructure project of colonial India, connecting distant regions into a single economic and administrative unit. While it served British commercial interests, railways inadvertently enabled nationalist leaders to travel across India and build an all-India political movement. Railways also facilitated migration and cultural exchange between regions.',
    keyPoints: [
      'Introduced from the 1850s — largest colonial infrastructure project',
      'Facilitated extraction of raw materials and import of British manufactured goods',
      'Enabled all-India travel and nationalist political mobilisation',
      'Connected regional markets and facilitated internal migration',
    ],
    example:
      'The railway allowed Dadabhai Naoroji to travel from Bombay to London and back, and enabled Congress leaders to organise sessions across different cities.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch1-3',
    chapter: 1,
    chapterName: 'SC Ch1: Structural Change',
    term: 'Print Technology',
    definition:
      'The introduction of the printing press in India was a transformative structural change that enabled mass production and dissemination of texts, newspapers, and pamphlets in Indian languages. It created a new public sphere for debate on social reform, nationalism, and modern ideas of liberty and equality. The colonial state attempted to censor radical publications through the Vernacular Press Act (1878), but print continued to fuel reform and nationalist movements. Print created a reading public that was essential for the emergence of modern Indian society.',
    keyPoints: [
      'Enabled mass production of texts, newspapers, and pamphlets in Indian languages',
      'Created a public sphere for debate on reform, nationalism, and modern ideas',
      'Colonial censorship (Vernacular Press Act 1878) tried to control radical press',
      'Created a reading public essential for modern Indian society and nationalism',
    ],
    example:
      'Raja Ram Mohan Roy published "Sambad Kaumudi" to campaign against Sati — print was his weapon against oppressive social practices.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch1-4',
    chapter: 1,
    chapterName: 'SC Ch1: Structural Change',
    term: 'Factory System',
    definition:
      'The factory system was a new form of production introduced by colonialism that concentrated workers under one roof with wage labour and machinery, replacing traditional artisan-based production. It created a new industrial working class while destroying the livelihoods of traditional artisans like weavers, carpenters, and blacksmiths. Factories were owned by British and later Indian capitalists and produced goods primarily for colonial markets. This structural shift from craft production to factory production was violent and socially disruptive.',
    keyPoints: [
      'Concentrated workers under one roof with wage labour and machinery',
      'Destroyed livelihoods of traditional artisans (weavers, carpenters, blacksmiths)',
      'Created a new industrial working class',
      'Production oriented towards colonial markets, not domestic needs',
    ],
    example:
      'The Tata Iron and Steel Company (1907) in Jamshedpur was among the first modern Indian factories — workers migrated from villages to earn wages in the factory system.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch1-5',
    chapter: 1,
    chapterName: 'SC Ch1: Structural Change',
    term: 'Cottage Industry Decline',
    definition:
      'Cottage industries — small-scale, household-based production of textiles, pottery, and other goods — were destroyed under colonial rule due to competition from cheap British machine-made goods. Indian weavers and artisans who once produced world-famous textiles were reduced to poverty as their products could not compete with factory-produced cloth. This deindustrialisation forced millions back into agriculture, increasing rural distress and landlessness. Dadabhai Naoroji theorised this as the "Drain of Wealth" from India to Britain.',
    keyPoints: [
      'Small-scale household production destroyed by cheap British machine-made goods',
      'Indian weavers and artisans lost livelihoods — deindustrialisation',
      'Millions forced back into agriculture, increasing rural distress',
      'Dadabhai Naoroji theorised this as "Drain of Wealth" theory',
    ],
    example:
      'Bengal muslin weavers, once famous worldwide, were ruined as cheap British machine-made cloth flooded Indian markets through tariff manipulation.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch1-6',
    chapter: 1,
    chapterName: 'SC Ch1: Structural Change',
    term: 'Commercial Agriculture',
    definition:
      'Commercial agriculture refers to farming practices oriented towards producing crops for sale in markets rather than for subsistence consumption. Under colonialism, Indian peasants were compelled to shift from growing food crops to cash crops like indigo, cotton, jute, and tea for export to Britain. This made peasants dependent on volatile market prices and vulnerable to famines when cash crop earnings could not buy food. The indigo cultivation system in Bengal forced peasants to grow indigo instead of food crops.',
    keyPoints: [
      'Shift from subsistence food crops to cash crops for colonial export',
      'Indigo, cotton, jute, tea grown for British markets',
      'Made peasants dependent on market prices and vulnerable to famines',
      'Indigo Revolt (1859-60) was a peasant uprising against forced commercial cultivation',
    ],
    example:
      'Indigo planters in Bengal forced peasants to cultivate indigo on fertile land — the resulting Indigo Revolt led to the Indigo Commission (1860) and abolition of forced cultivation.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch1-7',
    chapter: 1,
    chapterName: 'SC Ch1: Structural Change',
    term: 'Zamindari, Ryotwari, Mahalwari Systems',
    definition:
      'These were the three major land revenue systems introduced by the British colonial state. The Zamindari system (Permanent Settlement, 1793) made zamindars intermediaries who collected revenue from peasants and paid a fixed amount to the British. The Ryotwari system (introduced in Madras and Bombay) made the ryot (peasant) directly responsible for revenue payment to the state. The Mahalwari system (introduced in North India) collected revenue from the village community (mahal) as a collective unit. All three systems extracted maximum revenue without investing in agricultural improvement.',
    keyPoints: [
      'Zamindari: intermediaries (zamindars) collected revenue — Permanent Settlement 1793',
      'Ryotwari: direct revenue from peasants (ryots) to the colonial state',
      'Mahalwari: collective revenue from village community (mahal)',
      'All three extracted maximum revenue without agricultural improvement',
    ],
    example:
      'Under the Ryotwari system, the revenue demand was often higher than the productive capacity of land, leading to peasant indebtedness and land alienation.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch1-8',
    chapter: 1,
    chapterName: 'SC Ch1: Structural Change',
    term: 'Census Rigidified Caste',
    definition:
      'The colonial census, conducted every ten years from 1871, systematically classified Indian society into rigid caste, religious, and tribal categories for administrative purposes. Before the census, caste categories were fluid and locally defined — the same caste had different status in different regions. The census imposed a uniform hierarchical framework on these diverse practices, making caste a more politically significant and rigid identity. This rigidification made caste boundaries sharper and more exclusionary than they had been historically.',
    keyPoints: [
      'Colonial census classified society into rigid caste, religious, and tribal categories',
      'Before census, caste was fluid and locally defined — different status in different regions',
      'Imposed uniform hierarchical framework on diverse local practices',
      'Made caste politically significant and more rigid than historically',
    ],
    example:
      'Before the census, the term "Brahmin" meant different things in different regions — the census created a single pan-Indian Brahmin category with fixed hierarchical status.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch1-9',
    chapter: 1,
    chapterName: 'SC Ch1: Structural Change',
    term: 'Social Reform Movements',
    definition:
      'Social reform movements in 19th century India challenged oppressive practices like Sati, child marriage, caste discrimination, and denial of women\'s education. Brahmo Samaj (Ram Mohan Roy) campaigned against Sati and for women\'s rights. Prarthana Samaj (Atmaram Pandurang) worked against caste discrimination in Maharashtra. Arya Samaj (Swami Dayanand Saraswati) promoted Vedic learning and challenged Brahminical orthodoxy through the Shuddhi movement. These movements drew from both Indian traditions and Western liberal ideas of liberty.',
    keyPoints: [
      'Brahmo Samaj: Ram Mohan Roy — abolition of Sati, women\'s education',
      'Prarthana Samaj: Atmaram Pandurang — anti-caste reform in Maharashtra',
      'Arya Samaj: Dayanand Saraswati — Vedic revival, Shuddhi movement, challenging orthodoxy',
      'Drew from Indian traditions and Western liberal ideas of liberty and equality',
    ],
    example:
      'Ram Mohan Roy\'s campaign led to the Bengal Sati Regulation Act (1829) — the first major legislative reform against an oppressive social practice.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch1-10',
    chapter: 1,
    chapterName: 'SC Ch1: Structural Change',
    term: 'Nationalism',
    definition:
      'Nationalism in India emerged as an ideology demanding self-governance and freedom from colonial rule, based on shared culture, history, and opposition to British exploitation. The urban middle classes were the primary social carriers of nationalism — they had access to English education, print media, and professional occupations that enabled them to articulate anti-colonial ideas. Nationalism drew from both Western liberal ideas of liberty and Indian cultural traditions. The Indian National Congress (1885) became the primary platform for nationalist mobilisation.',
    keyPoints: [
      'Urban middle classes were primary carriers — had English education and print access',
      'Drew from Western liberal ideas and Indian cultural traditions',
      'Indian National Congress (1885) was primary platform for nationalist mobilisation',
      'Newspapers, pamphlets, and associations spread nationalist ideas across India',
    ],
    example:
      'Dadabhai Naoroji\'s "Poverty and Un-British Rule in India" used economic data to demonstrate how colonialism impoverished India — this was nationalist critique rooted in modern education.',
    markWeight: '4-5 अंक',
  },

  // ─── Chapter 2: IS Ch2: Demographic Structure ───
  {
    id: 'socio-ch2-1',
    chapter: 2,
    chapterName: 'IS Ch2: Demographic Structure',
    term: 'Demography',
    definition:
      'Demography is the scientific study of human population — its size, composition, distribution, and changes over time. Formal demography focuses on statistical measurement of population parameters like birth rate, death rate, and migration patterns. Social demography examines the social, economic, and cultural factors that influence demographic processes. Census is the primary tool for collecting demographic data in India, conducted every ten years.',
    keyPoints: [
      'Formal demography: statistical measurement of population parameters',
      'Social demography: social, economic, and cultural factors behind demographic change',
      'Studies birth rate, death rate, migration, age-sex structure, and fertility',
      'Census is the main data collection method in India (every 10 years)',
    ],
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch2-2',
    chapter: 2,
    chapterName: 'IS Ch2: Demographic Structure',
    term: 'Malthusian Theory',
    definition:
      'Thomas Malthus argued that population grows geometrically (2, 4, 8, 16...) while food supply grows arithmetically (1, 2, 3, 4...), leading to inevitable food crisis. He proposed "positive checks" (war, famine, disease) that naturally reduce population, and "preventive checks" (moral restraint, delayed marriage) that humans can voluntarily adopt. His theory predicted that population growth would always outstrip food production, leading to misery. The theory has been widely criticised for ignoring technological advancement.',
    keyPoints: [
      'Population grows geometrically; food supply grows arithmetically',
      'Positive checks: natural forces (famine, disease, war) that increase death rate',
      'Preventive checks: human restraint (late marriage, celibacy) that reduce birth rate',
      'Criticism: ignored technology (Green Revolution), unequal distribution, and women\'s education',
    ],
    theorist: 'Thomas Malthus',
    example:
      'The Irish Potato Famine (1845-52) was cited by Malthus as an example of his "positive check" — disease reducing population that had outgrown its food supply.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch2-3',
    chapter: 2,
    chapterName: 'IS Ch2: Demographic Structure',
    term: 'Demographic Transition Theory',
    definition:
      'Demographic Transition Theory describes the shift from high birth and death rates to low birth and death rates as a society modernises through distinct stages. Stage 1 (primitive) has high birth and death rates with stable population. Stage 2 (transitional) sees falling death rates due to healthcare but high birth rates, causing rapid population growth. Stage 3 (industrial) has declining birth rates as fertility control spreads, slowing growth. Stage 4 (post-industrial) reaches low birth and death rates with stable or declining population.',
    keyPoints: [
      'Stage 1: High birth rate + high death rate = stable population (primitive societies)',
      'Stage 2: Death rate falls + high birth rate = rapid population growth (developing)',
      'Stage 3: Birth rate declines as fertility control spreads (developing → developed)',
      'Stage 4: Low birth rate + low death rate = stable or declining population (developed)',
    ],
    theorist: 'W.S. Thompson / Notestein',
    example:
      'India is currently in Stage 3 — death rates have fallen due to healthcare improvements, and birth rates are declining due to family planning and women\'s education.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch2-4',
    chapter: 2,
    chapterName: 'IS Ch2: Demographic Structure',
    term: 'Birth Rate, Death Rate, TFR, IMR, MMR, Sex Ratio',
    definition:
      'Birth Rate is the number of live births per 1,000 population per year. Death Rate is the number of deaths per 1,000 population per year. Total Fertility Rate (TFR) is the average number of children born per woman — replacement level is 2.1. Infant Mortality Rate (IMR) is deaths of infants under one year per 1,000 live births. Maternal Mortality Ratio (MMR) is deaths of women per 100,000 live births due to pregnancy-related causes. Sex Ratio is the number of females per 1,000 males in the population.',
    keyPoints: [
      'Birth Rate and Death Rate: per 1,000 population per year',
      'TFR: average children per woman; replacement level = 2.1',
      'IMR: infant deaths per 1,000 live births — key child health indicator',
      'MMR: maternal deaths per 100,000 live births; Sex Ratio: females per 1,000 males',
    ],
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch2-5',
    chapter: 2,
    chapterName: 'IS Ch2: Demographic Structure',
    term: 'Age Structure and Dependency Ratio',
    definition:
      'Age structure refers to the distribution of population across different age groups — children (0-14), working-age (15-64), and elderly (65+). The dependency ratio measures the proportion of dependents (children and elderly) to the working-age population. A low dependency ratio means more workers relative to dependents, creating potential for economic growth. A high dependency ratio burdens the working population with supporting more dependents. India\'s age structure is currently favourable with a large working-age population.',
    keyPoints: [
      'Age structure: distribution across children (0-14), working-age (15-64), elderly (65+)',
      'Dependency ratio: proportion of dependents to working-age population',
      'Low dependency ratio = more workers = potential for economic growth',
      'High dependency ratio = working population burdened with supporting dependents',
    ],
    example:
      'Japan has a high dependency ratio due to its aging population, while India has a low dependency ratio due to its young population — creating demographic dividend potential.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch2-6',
    chapter: 2,
    chapterName: 'IS Ch2: Demographic Structure',
    term: 'Demographic Dividend',
    definition:
      'Demographic dividend refers to the economic growth potential that arises when a country has a large working-age population (15-64 years) relative to dependents (children and elderly). When the dependency ratio is low, societies can invest more in education, health, and economic development rather than spending on dependents. India is currently in a demographic dividend window estimated to last until 2055. However, this dividend can only be realised through investment in education, skill development, and job creation.',
    keyPoints: [
      'Occurs when working-age population (15-64) exceeds dependents',
      'Low dependency ratio creates economic growth potential',
      'Requires investment in education, health, and skill development to be realised',
      'India\'s dividend window estimated to last until 2055',
    ],
    example:
      'South Korea and Japan used their demographic dividend periods (1960s-1990s) to achieve rapid economic growth — India aims to replicate this with proper investment.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch2-7',
    chapter: 2,
    chapterName: 'IS Ch2: Demographic Structure',
    term: 'Population Explosion',
    definition:
      'Population explosion refers to the rapid and dramatic increase in population when the death rate falls due to improved healthcare, sanitation, and food supply while the birth rate remains high. This gap between declining mortality and sustained high fertility creates exponential population growth. India experienced this from the 1950s onwards as modern medicine reduced death rates while cultural norms kept birth rates high. India\'s population grew from 361 million (1951) to over 1.4 billion (2021).',
    keyPoints: [
      'Caused by gap between falling death rate and sustained high birth rate',
      'Modern medicine, sanitation, and food supply reduced mortality rapidly',
      'Cultural norms and lack of family planning kept birth rates high',
      'India grew from 361 million (1951) to 1.4 billion (2021) — classic population explosion',
    ],
    example:
      'India added more people between 2001-2011 (181 million) than the entire population of most countries — demonstrating the scale of population explosion.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch2-8',
    chapter: 2,
    chapterName: 'IS Ch2: Demographic Structure',
    term: 'PNDT Act and NFPP 1952',
    definition:
      'The Pre-Natal Diagnostic Techniques (PNDT) Act (1994, amended 2003) banned sex determination of foetus and sex-selective abortion to address the declining sex ratio caused by son preference and female foeticide. The National Family Planning Programme (NFPP, 1952) was the first national family planning programme in the world, initially promoting sterilisation. During the Emergency (1975-77), forced sterilisation camps caused massive public backlash. The National Population Policy (2000) adopted a voluntary, target-free approach.',
    keyPoints: [
      'PNDT Act 1994/2003: banned prenatal sex determination and sex-selective abortion',
      'NFPP 1952: first national family planning programme in the world',
      'Emergency sterilisation camps (1975-77) caused public backlash against family planning',
      'NFP 2000: voluntary, target-free approach to population stabilisation',
    ],
    example:
      'The backlash from forced sterilisation during Emergency made subsequent governments cautious about coercive population control measures — voluntary approach became the norm.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch2-9',
    chapter: 2,
    chapterName: 'IS Ch2: Demographic Structure',
    term: 'Rural-Urban Migration',
    definition:
      'Rural-urban migration is the movement of people from villages to cities in search of better employment, education, healthcare, and living conditions. Push factors from rural areas include poverty, unemployment, lack of amenities, and agrarian distress. Pull factors from cities include jobs, education, healthcare, and modern lifestyle. This migration creates metropolis (large cities) and megapolis (cities over 10 million) like Mumbai and Delhi. It also leads to slums, overcrowding, and pressure on urban infrastructure.',
    keyPoints: [
      'Push factors: rural poverty, unemployment, lack of amenities, agrarian distress',
      'Pull factors: urban jobs, education, healthcare, modern lifestyle',
      'Creates metropolis (large cities) and megapolis (over 10 million population)',
      'Leads to slums, overcrowding, and pressure on urban infrastructure',
    ],
    example:
      'Mumbai attracts millions from Maharashtra, Bihar, and UP seeking jobs in textiles, construction, and services — many end up in Dharavi, one of Asia\'s largest slums.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch2-10',
    chapter: 2,
    chapterName: 'IS Ch2: Demographic Structure',
    term: 'Epidemiological Transition',
    definition:
      'Epidemiological transition is the shift in disease patterns from infectious and communicable diseases (malaria, tuberculosis, cholera) to degenerative and lifestyle diseases (heart disease, diabetes, cancer) as a society develops. In early stages, most deaths are caused by infections due to poor sanitation and healthcare. As development improves healthcare and nutrition, people live longer but face new health challenges from chronic, non-communicable diseases. India is currently in transition — both types coexist, creating a "double burden."',
    keyPoints: [
      'Shift from infectious diseases to degenerative/lifestyle diseases',
      'Early stage: deaths from malaria, TB, cholera due to poor sanitation',
      'Later stage: deaths from heart disease, diabetes, cancer due to longer lifespan',
      'India faces "double burden" — both infectious and degenerative diseases coexist',
    ],
    example:
      'India now faces a "double burden" — malaria and TB still kill thousands, while diabetes and heart disease are the leading causes of death in urban areas.',
    markWeight: '4-5 अंक',
  },

  // ─── Chapter 3: IS Ch3: Social Institutions ───
  {
    id: 'socio-ch3-1',
    chapter: 3,
    chapterName: 'IS Ch3: Social Institutions',
    term: 'Caste — Varna vs Jati',
    definition:
      'The caste system is a hierarchical social stratification based on birth, occupation, and ritual purity. Varna is the broad four-fold classification mentioned in ancient texts: Brahmins (priests), Kshatriyas (warriors), Vaishyas (merchants), and Shudras (labourers), with Dalits (untouchables) excluded entirely. Jati is the actual operational caste — thousands of endogamous groups defined by occupation, region, and social status. Varna is a theoretical framework while Jati is the lived reality of caste in India.',
    keyPoints: [
      'Varna: 4-fold theoretical classification (Brahmin, Kshatriya, Vaishya, Shudra)',
      'Jati: thousands of actual endogamous groups based on occupation and region',
      'Dalits (untouchables) excluded from the Varna system entirely',
      'Varna is theoretical; Jati is the lived reality of caste in everyday life',
    ],
    example:
      'A goldsmith (Sonar) and a potter (Kumbhar) may both be Shudra in Varna terms, but belong to different Jatis with different status, customs, and marriage rules.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch3-2',
    chapter: 3,
    chapterName: 'IS Ch3: Social Institutions',
    term: 'Sanskritisation',
    definition:
      'Sanskritisation is a process by which lower castes or groups adopt the rituals, customs, and practices of upper castes (especially Brahmins) to improve their social status. It involves emulation of Brahminical norms — vegetarianism, teetotalism, wearing sacred thread, performing elaborate life-cycle rituals. It is a strategy for upward social mobility within the caste system, though it does not always lead to actual change in caste position as upper castes often resist such claims. Sanskritisation does not challenge the caste hierarchy itself.',
    keyPoints: [
      'Lower castes imitate upper-caste (especially Brahminical) practices',
      'Involves adopting vegetarianism, rituals, sacred thread, sanskritic norms',
      'Strategy for upward social mobility within the caste hierarchy',
      'Does not challenge the hierarchy itself — accepts Brahminical norms as superior',
    ],
    theorist: 'M.N. Srinivas',
    example:
      'The Nadar community in Tamil Nadu adopted Brahminical practices like wearing sacred threads and performing fire rituals to claim higher caste status.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch3-3',
    chapter: 3,
    chapterName: 'IS Ch3: Social Institutions',
    term: 'Westernisation',
    definition:
      'Westernisation refers to the adoption of Western cultural traits — dress, food, language, education, technology, and lifestyle — by non-Western societies. In India, it began during colonialism with English education and modern professions, and accelerated after independence with urbanisation and globalisation. It is not uniform and coexists with indigenous culture in complex ways. English-speaking professionals who wear Western clothes but celebrate Diwali represent this coexistence of modern and traditional.',
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
    id: 'socio-ch3-4',
    chapter: 3,
    chapterName: 'IS Ch3: Social Institutions',
    term: 'Tribe (Scheduled Tribes)',
    definition:
      'Tribes are communities with distinct cultural identity, often living in geographically isolated areas like forests, hills, and deserts with their own language, customs, and social organisation. They are officially called "Scheduled Tribes" in the Indian Constitution and receive special protections including reservation in education and jobs. Tribes constitute approximately 8.6% of India\'s population. Many face displacement from mining, dams, deforestation, and development projects that threaten their traditional lands and livelihoods.',
    keyPoints: [
      'Communities with distinct culture, often geographically isolated',
      'Officially called "Scheduled Tribes" — receive constitutional protections',
      'Constitute approximately 8.6% of India\'s total population',
      'Many face displacement from mining, dams, deforestation, and development projects',
    ],
    example:
      'The Irula tribe in Tamil Nadu, traditionally snake-catchers, were marginalised and displaced from forest lands due to conservation projects and mining operations.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch3-5',
    chapter: 3,
    chapterName: 'IS Ch3: Social Institutions',
    term: 'Family (Nuclear vs Joint)',
    definition:
      'Family is a basic social institution that provides emotional support, socialisation, and economic cooperation. Nuclear family consists of a married couple and their unmarried children. Joint family includes multiple generations — parents, married sons, their wives and children — living together with shared property and共同 kitchen. In India, the joint family is idealised but nuclear families are increasing due to urbanisation, migration, and changing occupational patterns. Both forms coexist in contemporary India.',
    keyPoints: [
      'Nuclear: couple + unmarried children; Joint: multiple generations with shared property',
      'Joint family is idealised but nuclear families are increasing due to urbanisation',
      'Family functions: economic production, socialisation, emotional support, reproductive',
      'Both forms coexist — trend towards nuclear due to migration and occupational change',
    ],
    example:
      'A young IT professional in Bangalore living in a nuclear family while sending money to parents in a village illustrates the transition from joint to nuclear family.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch3-6',
    chapter: 3,
    chapterName: 'IS Ch3: Social Institutions',
    term: 'Matrilineal and Patrilineal Kinship',
    definition:
      'Kinship systems trace descent and inheritance through either the mother (matrilineal) or father (patrilineal). Matrilineal systems are found among Khasi and Garo of Meghalaya and Nair of Kerala, where property passes from mother to daughter and the youngest daughter (Ka Khadduh) maintains the family lineage. Patrilineal systems dominate across most of India, tracing descent through the father. Consanguineal kin are related by blood; affinal kin are related through marriage. Exogamy means marrying outside one\'s group; endogamy means marrying within.',
    keyPoints: [
      'Matrilineal: descent through mother (Khasi, Garo, Nair) — property to daughter',
      'Patrilineal: descent through father — dominant across most of India',
      'Consanguineal kin: related by blood; Affinal kin: related through marriage',
      'Exogamy: marry outside group; Endogamy: marry within group (caste, religion)',
    ],
    example:
      'Among the Khasi of Meghalaya, the youngest daughter (Ka Khadduh) inherits ancestral property and maintains the family lineage — a matrilineal system.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch3-7',
    chapter: 3,
    chapterName: 'IS Ch3: Social Institutions',
    term: 'Panchayati Raj (73rd Amendment)',
    definition:
      'Panchayati Raj is a system of local self-governance in rural India, institutionalised by the 73rd Constitutional Amendment (1992). It establishes a three-tier structure — Gram Panchayat (village level), Panchayat Samiti (block level), and Zila Parishad (district level) — to decentralise power and enable grassroots democracy. One-third seats are reserved for women, and seats are reserved for SCs and STs in proportion to their population. It aims to empower local communities to participate in governance and development.',
    keyPoints: [
      'Three-tier structure: Gram Panchayat → Panchayat Samiti → Zila Parishad',
      'Institutionalised by 73rd Constitutional Amendment (1992)',
      'One-third seats reserved for women; seats reserved for SCs and STs',
      'Aims to decentralise power and promote democratic participation at grassroots',
    ],
    example:
      'In Rajasthan, women sarpanches (village heads) under Panchayati Raj have brought issues like water supply and girls\' education to the local governance agenda.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch3-8',
    chapter: 3,
    chapterName: 'IS Ch3: Social Institutions',
    term: 'Dominant Caste',
    definition:
      'Dominant caste is a caste that is numerically large, economically powerful, and politically influential in a particular village or region, irrespective of its ritual position in the caste hierarchy. A dominant caste may not be high in Varna status but controls land, resources, and political power at the local level. They often act as patrons to lower castes and mediate between the village and outside world. The concept highlights that caste power is not always determined by ritual purity alone.',
    keyPoints: [
      'Numerically large, economically powerful, politically influential at local level',
      'May not be high in Varna status — power not always determined by ritual purity',
      'Controls land, resources, and political power in village or region',
      'Acts as patron to lower castes and mediates between village and outside world',
    ],
    theorist: 'M.N. Srinivas',
    example:
      'The Jat community in Haryana is a dominant caste — numerically large, land-owning, and politically influential despite being classified as Shudra in Varna terms.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch3-9',
    chapter: 3,
    chapterName: 'IS Ch3: Social Institutions',
    term: 'Kinship — Exogamy and Endogamy',
    definition:
      'Exogamy is the rule of marrying outside one\'s group — clan, gotra, village, or lineage. It prevents consanguineous marriage within the same lineage and expands social networks across groups. Endogamy is the rule of marrying within one\'s group — caste, religion, or community. Most Indian communities follow caste endogamy but gotra/clan exogamy. Together, these rules determine marriage patterns and social boundaries. Violation of endogamy (inter-caste marriage) was traditionally punished with social ostracism.',
    keyPoints: [
      'Exogamy: marry outside one\'s group (gotra, clan, village) — prevents inbreeding',
      'Endogamy: marry within one\'s group (caste, religion, community)',
      'Most Indian communities: caste endogamy + gotra exogamy',
      'Inter-caste marriage was traditionally punished with social ostracism',
    ],
    example:
      'A Brahmin family insisting their daughter marry only a Tamil Brahmin (endogamy) but within a different gotra (exogamy) illustrates both rules simultaneously.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch3-10',
    chapter: 3,
    chapterName: 'IS Ch3: Social Institutions',
    term: 'Gotra System',
    definition:
      'Gotra is a patrilineal clan system among Hindus, especially upper castes, tracing descent from a common mythical ancestor — usually a Vedic sage. A person belongs to the gotra of their father and cannot marry within their own gotra or their mother\'s gotra. The gotra system enforces exogamy to prevent consanguineous marriage within the same lineage. It expands social networks by forcing marriage across different groups. Gotra identity remains important in marriage negotiations even in modern India.',
    keyPoints: [
      'Patrilineal clan with common mythical ancestor (usually a Vedic sage)',
      'Cannot marry within own gotra or mother\'s gotra — enforces exogamy',
      'Prevents consanguineous marriage within the same lineage',
      'Expands social networks by forcing marriage across different groups',
    ],
    example:
      'A person belonging to the Bharadwaj gotra must find a spouse from a different gotra — like Kashyap or Vashishtha — even within the same caste.',
    markWeight: '4-5 अंक',
  },

  // ─── Chapter 5: IS Ch5: Social Inequality & Exclusion ───
  {
    id: 'socio-ch5-1',
    chapter: 5,
    chapterName: 'IS Ch5: Social Inequality & Exclusion',
    term: 'Social Stratification',
    definition:
      'Social stratification is the systematic ranking of individuals into hierarchical layers based on wealth, power, prestige, and social status. It is a universal feature of societies but takes different forms — class (economic), caste (ascribed), status (prestige), and party (power). In India, caste-based stratification has been historically dominant, but class-based stratification is growing with modernisation. Stratification determines life chances — access to education, healthcare, employment, and political participation.',
    keyPoints: [
      'Universal feature of societies — ranking into hierarchical layers',
      'Forms: class (economic), caste (ascribed), status (prestige), party (power)',
      'In India, caste-based stratification historically dominant; class growing',
      'Determines life chances — access to education, healthcare, employment',
    ],
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch5-2',
    chapter: 5,
    chapterName: 'IS Ch5: Social Inequality & Exclusion',
    term: 'Social Inequality (Economic, Social, Cultural Capital)',
    definition:
      'Social inequality refers to the unequal distribution of resources, opportunities, and life chances among different social groups. Economic capital is material wealth — money, property, assets. Social capital is networks of relationships and connections that provide access to opportunities. Cultural capital is knowledge, skills, education, and cultural competencies that confer advantage. In India, upper castes historically monopolised all three forms of capital, while lower castes were denied access to education, property, and social networks.',
    keyPoints: [
      'Economic capital: material wealth — money, property, assets',
      'Social capital: networks of relationships providing access to opportunities',
      'Cultural capital: knowledge, skills, education, cultural competencies',
      'Upper castes historically monopolised all three; lower castes denied access',
    ],
    theorist: 'Pierre Bourdieu',
    example:
      'A wealthy upper-caste family passes down property (economic), social connections (social), and English education (cultural) to children — perpetuating inequality across generations.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch5-3',
    chapter: 5,
    chapterName: 'IS Ch5: Social Inequality & Exclusion',
    term: 'Prejudice, Stereotype, Discrimination',
    definition:
      'Prejudice is a preconceived negative opinion about a group formed without adequate evidence — it is an attitude. Stereotype is a fixed, overgeneralised belief about a particular group — it is a cognitive shortcut. Discrimination is the actual practice of treating people unequally based on their group membership — it is behaviour. Prejudice (attitude) + stereotype (belief) often lead to discrimination (action). In India, caste prejudice manifests as stereotypes about lower castes being "unclean" or "inferior," leading to discriminatory practices.',
    keyPoints: [
      'Prejudice: preconceived negative attitude formed without adequate evidence',
      'Stereotype: fixed, overgeneralised belief about a particular group',
      'Discrimination: actual practice of treating people unequally based on group membership',
      'Prejudice + stereotype often lead to discrimination — attitude + belief → action',
    ],
    example:
      'A landlord refusing to rent to a Dalit family (discrimination) based on the belief that they are "unclean" (prejudice) and the stereotype that Dalits are "inferior."',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch5-4',
    chapter: 5,
    chapterName: 'IS Ch5: Social Inequality & Exclusion',
    term: 'Social Exclusion and Untouchability',
    definition:
      'Social exclusion is the process by which certain groups are systematically denied access to resources, opportunities, and participation in society. Untouchability is the extreme form of social exclusion in India, where Dalits (formerly "untouchables") were historically denied access to common resources like wells, temples, and public spaces due to the ideology of ritual pollution. The practice persists in various forms despite constitutional abolition. Article 17 of the Indian Constitution abolishes untouchability, and the Prevention of Atrocities Act (1989) provides legal protection.',
    keyPoints: [
      'Social exclusion: systematic denial of access to resources and participation',
      'Untouchability: extreme exclusion — Dalits denied wells, temples, public spaces',
      'Article 17 abolishes untouchability; Prevention of Atrocities Act 1989 provides protection',
      'Persists in various forms despite constitutional and legal provisions',
    ],
    example:
      'In many villages, Dalits were historically forbidden from drawing water from the same well or entering temples — this exclusion persists in subtle forms today.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch5-5',
    chapter: 5,
    chapterName: 'IS Ch5: Social Inequality & Exclusion',
    term: 'Caste System as Discriminatory',
    definition:
      'The caste system is inherently discriminatory as it assigns social status, occupation, and life chances based on birth rather than merit. It restricts occupational mobility — a cobbler\'s son must be a cobbler, a priest\'s son must be a priest. It enforces endogamy — marriage within caste — restricting personal choice. It denies lower castes access to education, property, and social resources. The ideology of purity-pollution justified these restrictions as divinely ordained, making them appear natural and inevitable.',
    keyPoints: [
      'Assigns status, occupation, and life chances based on birth, not merit',
      'Restricts occupational mobility — caste determines what you can do',
      'Enforces endogamy — restricts marriage choice to within caste',
      'Denies lower castes access to education, property, and social resources',
    ],
    example:
      'A talented Dalit artisan who could become a doctor is forced into leather work because caste dictates occupation — discrimination embedded in social structure.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch5-6',
    chapter: 5,
    chapterName: 'IS Ch5: Social Inequality & Exclusion',
    term: 'Exploitation, Humiliation, Subordination',
    definition:
      'Exploitation is the act of using someone\'s labour or resources for one\'s own benefit without fair compensation — in caste terms, lower castes performed polluting tasks for minimal or no wages. Humiliation is the experience of being treated as inferior, worthless, or less than human — Dalits face daily humiliations like being denied entry to temples or forced to sit separately. Subordination is the systematic placement of a group in a lower social position with restricted access to power and resources. These three processes reinforce each other in maintaining caste hierarchy.',
    keyPoints: [
      'Exploitation: using someone\'s labour without fair compensation',
      'Humiliation: treating someone as inferior or less than human',
      'Subordination: systematic placement in lower social position with restricted power',
      'These three processes reinforce each other in maintaining caste hierarchy',
    ],
    example:
      'Manual scavenging — Dalits cleaning human excrement for minimal wages (exploitation), facing social stigma (humiliation), and being denied alternative occupations (subordination).',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch5-7',
    chapter: 5,
    chapterName: 'IS Ch5: Social Inequality & Exclusion',
    term: 'OBC and Mandal Commission',
    definition:
      'Other Backward Classes (OBCs) are castes that are socially and educationally backward — between the forward castes and Scheduled Castes. The Mandal Commission (1980) recommended 27% reservation for OBCs in government jobs and educational institutions based on the "creamy layer" concept. Its implementation in 1990 by Prime Minister V.P. Singh triggered massive protests, including self-immolations. The Supreme Court upheld the reservation in Indra Sawhney case (1992) but introduced the creamy layer criterion to exclude economically advanced OBCs.',
    keyPoints: [
      'OBCs: socially and educationally backward castes between forward castes and SCs',
      'Mandal Commission (1980): recommended 27% reservation for OBCs',
      'Implemented in 1990 — triggered massive protests and self-immolations',
      'Indra Sawhney case (1992): upheld reservation but introduced creamy layer criterion',
    ],
    example:
      'The implementation of Mandal Commission recommendations in 1990 led to student protests across India — Rajiv Goswami\'s self-immolation became a symbol of anti-reservation agitation.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch5-8',
    chapter: 5,
    chapterName: 'IS Ch5: Social Inequality & Exclusion',
    term: 'Adivasi Struggles',
    definition:
      'Adivasis (Scheduled Tribes) face multiple forms of inequality and exclusion — displacement from traditional lands due to mining, dams, and deforestation; denial of forest rights; exploitation by moneylenders and traders; and cultural marginalisation. The Forest Rights Act (2006) recognised tribal rights over forest land and resources. However, implementation remains weak and many Adivasis continue to face land alienation, bonded labour, and denial of basic services. Their struggles are for both material resources and cultural survival.',
    keyPoints: [
      'Displacement from traditional lands due to mining, dams, deforestation',
      'Denial of forest rights and exploitation by moneylenders and traders',
      'Forest Rights Act (2006) recognised tribal rights — implementation remains weak',
      'Struggles are for both material resources and cultural survival',
    ],
    example:
      'The Narmada Bachao Andolan (Save Narmada Movement) opposed the Sardar Sarovar Dam that displaced thousands of Adivasi communities from their ancestral lands.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch5-9',
    chapter: 5,
    chapterName: 'IS Ch5: Social Inequality & Exclusion',
    term: 'Women\'s Inequality',
    definition:
      'Women face systematic inequality in India through patriarchal social structures that restrict their access to education, employment, property, and political power. The sex ratio decline (females per 1,000 males) reflects son preference and sex-selective abortion. Women face domestic violence, dowry deaths, and sexual harassment. Constitutional provisions include equal rights (Article 14), prohibition of discrimination (Article 15), and reservation in Panchayats (73rd Amendment). However, gaps between legal provisions and ground reality remain significant.',
    keyPoints: [
      'Patriarchal structures restrict access to education, employment, property',
      'Sex ratio decline reflects son preference and sex-selective abortion',
      'Women face domestic violence, dowry deaths, and sexual harassment',
      'Constitutional provisions exist but gaps between law and ground reality remain',
    ],
    example:
      'Despite constitutional equality, women constitute only about 14% of Lok Sabha members — patriarchal structures limit their political representation.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch5-10',
    chapter: 5,
    chapterName: 'IS Ch5: Social Inequality & Exclusion',
    term: 'Reservation Provisions and Constitutional Safeguards',
    definition:
      'The Indian Constitution provides reservation (affirmative action) for historically oppressed groups in education, employment, and political representation. Article 15(4) and 16(4) enable reservation for SCs, STs, and OBCs. Article 17 abolishes untouchability. The Prevention of Atrocities Act (1989) penalises caste-based violence. Reservation is intended as a temporary measure to achieve substantive equality — but debates continue about its continuation, creamy layer, and sub-categorisation. The 73rd Amendment reserves seats for SCs, STs, and women in Panchayats.',
    keyPoints: [
      'Article 15(4) and 16(4): enable reservation for SCs, STs, and OBCs',
      'Article 17: abolishes untouchability',
      'Prevention of Atrocities Act 1989: penalises caste-based violence',
      'Debates: continuation, creamy layer, sub-categorisation — temporary or permanent?',
    ],
    example:
      'The reservation system has enabled millions of Dalits and Adivasis to access education and government jobs — but debates continue about creamy layer and sub-categorisation.',
    markWeight: '4-5 अंक',
  },

  // ─── Chapter 6: IS Ch6: Cultural Diversity ───
  {
    id: 'socio-ch6-1',
    chapter: 6,
    chapterName: 'IS Ch6: Cultural Diversity',
    term: 'Cultural Diversity vs Inequality',
    definition:
      'Cultural diversity refers to the coexistence of different cultural groups — with distinct languages, religions, customs, and traditions — within a society. It is a source of richness and creativity. Cultural inequality, however, occurs when some cultures are valued more than others and some groups face discrimination because of their cultural practices. In India, cultural diversity (multiple languages, religions, festivals) coexists with cultural inequality (dominance of Hindu culture, marginalisation of tribal and minority cultures).',
    keyPoints: [
      'Cultural diversity: coexistence of different cultural groups — languages, religions, customs',
      'Cultural inequality: some cultures valued more, some groups face discrimination',
      'India: diversity (multiple languages, religions) coexists with inequality',
      'Challenge: celebrating diversity while ensuring equality of all cultures',
    ],
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch6-2',
    chapter: 6,
    chapterName: 'IS Ch6: Cultural Diversity',
    term: 'Nation vs Nation-State',
    definition:
      'A nation is a cultural community united by shared language, history, religion, or ethnicity — it is an identity. A nation-state is a political entity where the boundaries of the state coincide with the boundaries of the nation — it is a political reality. India is a nation-state with tremendous cultural diversity — it is a multi-national state where many nations (linguistic, ethnic, religious groups) coexist within one political framework. The Indian nation is held together by constitutional values rather than cultural homogeneity.',
    keyPoints: [
      'Nation: cultural community — shared language, history, religion, ethnicity',
      'Nation-state: political entity where state boundaries = nation boundaries',
      'India: multi-national state — many nations within one political framework',
      'Held together by constitutional values, not cultural homogeneity',
    ],
    example:
      'India is a nation-state where Tamils, Bengalis, Punjabis, and others are distinct nations culturally but share one political identity — unity in diversity.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch6-3',
    chapter: 6,
    chapterName: 'IS Ch6: Cultural Diversity',
    term: 'Communalism',
    definition:
      'Communalism is the belief that religious identity is the primary basis for political and social organisation, often leading to conflict between religious communities. It manifests as communal riots, demand for separate religious states, and polarisation of society along religious lines. In India, communalism has been a persistent problem — Partition (1947), riots (1984, 2002), and demand for uniform civil code vs religious personal laws. It threatens national unity by replacing civic nationalism with religious nationalism.',
    keyPoints: [
      'Belief that religious identity is primary basis for political/social organisation',
      'Manifests as communal riots, demand for separate states, religious polarisation',
      'India: Partition (1947), riots (1984, 2002), personal laws vs uniform civil code debate',
      'Threatens national unity — replaces civic nationalism with religious nationalism',
    ],
    example:
      'The demand for a separate Muslim state (Pakistan) based on the Two-Nation Theory was the ultimate expression of communalism — leading to Partition and massive violence.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch6-4',
    chapter: 6,
    chapterName: 'IS Ch6: Cultural Diversity',
    term: 'Regionalism',
    definition:
      'Regionalism is the assertion of regional identity and demand for regional autonomy, often based on language, culture, or economic grievances. It can take constructive forms (demand for regional development) or destructive forms (secessionist movements). In India, regionalism has produced linguistic states (States Reorganisation Act, 1956), regional political parties (DMK, AIADMK, TDP), and sometimes separatist movements (Khalistan, Naga insurgency). The challenge is accommodating regional aspirations within national unity.',
    keyPoints: [
      'Assertion of regional identity and demand for regional autonomy',
      'Can be constructive (development demands) or destructive (secessionism)',
      'India: linguistic states (1956), regional parties (DMK, TDP), separatist movements',
      'Challenge: accommodating regional aspirations within national unity',
    ],
    example:
      'The States Reorganisation Act (1956) redrew state boundaries along linguistic lines — responding to regional demands while maintaining national unity.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch6-5',
    chapter: 6,
    chapterName: 'IS Ch6: Cultural Diversity',
    term: 'Linguistic Chauvinism',
    definition:
      'Linguistic chauvinism is the aggressive assertion of the superiority of one\'s own language and attempts to impose it on others. In India, it manifests as Hindi imposition on non-Hindi speaking states or regional resistance to Hindi (Anti-Hindi agitation in Tamil Nadu). The Official Languages Act (1963) and Eighth Schedule (22 scheduled languages) attempt to balance linguistic diversity. Linguistic chauvinism threatens national integration by alienating non-dominant linguistic groups.',
    keyPoints: [
      'Aggressive assertion of one language\'s superiority and attempt to impose it',
      'India: Hindi imposition vs Anti-Hindi agitation in Tamil Nadu',
      'Official Languages Act (1963) and Eighth Schedule (22 languages) balance diversity',
      'Threatens national integration by alienating non-dominant linguistic groups',
    ],
    example:
      'The Anti-Hindi agitation in Tamil Nadu (1965) forced the central government to continue English as an associate official language — resisting linguistic chauvinism.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch6-6',
    chapter: 6,
    chapterName: 'IS Ch6: Cultural Diversity',
    term: 'Secularism',
    definition:
      'Secularism in the Indian context means equal respect for all religions (Sarva Dharma Sambhava) — not the Western model of separation of religion from state. The Indian Constitution does not establish any state religion and guarantees freedom of religion (Articles 25-28). The state can regulate religious practices for social reform (Article 17 abolishing untouchability). Indian secularism is about maintaining equidistance from all religions while ensuring equal treatment. However, debates continue about its implementation.',
    keyPoints: [
      'Indian secularism: equal respect for all religions (Sarva Dharma Sambhava)',
      'Not Western separation of religion from state — more inclusive approach',
      'Constitution guarantees freedom of religion (Articles 25-28)',
      'State can regulate religious practices for social reform (Article 17)',
    ],
    example:
      'The Supreme Court\'s Shairo Bano case (2017) instant triple talaq ruling showed Indian secularism — protecting women\'s rights within religious personal law.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch6-7',
    chapter: 6,
    chapterName: 'IS Ch6: Cultural Diversity',
    term: 'Multilingualism and Federalism',
    definition:
      'India is a multilingual nation with 22 scheduled languages and hundreds of dialects. The Eighth Schedule of the Constitution recognises 22 languages. The Official Languages Act (1963) provides for Hindi and English as official languages of the central government. Federalism in India accommodates linguistic diversity through linguistic states — each major language has its own state. This linguistic federalism is both a strength (accommodating diversity) and a challenge (managing inter-state language disputes).',
    keyPoints: [
      '22 scheduled languages in Eighth Schedule; hundreds of dialects',
      'Official Languages Act: Hindi and English as central government official languages',
      'Linguistic states: each major language has its own state — linguistic federalism',
      'Strength: accommodates diversity; Challenge: inter-state language disputes',
    ],
    example:
      'The demand for a separate Telangana state (2014) was partly linguistic — Telugu speakers wanted their own state separate from Andhra Pradesh.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch6-8',
    chapter: 6,
    chapterName: 'IS Ch6: Cultural Diversity',
    term: 'National Integration',
    definition:
      'National integration is the process of unifying diverse cultural, linguistic, religious, and regional groups into a cohesive national identity. India faces challenges to national integration from communalism, regionalism, linguistic chauvinism, and secessionist movements. The National Integration Council was established to promote communal harmony and national unity. The Preamble of the Constitution declares India as "secular" and "socialist" — values that should promote integration while respecting diversity.',
    keyPoints: [
      'Process of unifying diverse groups into cohesive national identity',
      'Challenges: communalism, regionalism, linguistic chauvinism, secessionism',
      'National Integration Council promotes communal harmony and unity',
      'Preamble declares India "secular" and "socialist" — values promoting integration',
    ],
    example:
      'National Integration Council was established in 1962 to address challenges to unity — it brings together leaders from all communities to promote harmony.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch6-9',
    chapter: 6,
    chapterName: 'IS Ch6: Cultural Diversity',
    term: 'Syncretism',
    definition:
      'Syncretism is the blending of different cultural traditions, beliefs, and practices into a new, hybrid form. In India, syncretism has produced rich cultural traditions — Sufi-Bhakti movements, Mughal-Rajput architectural fusion, shared festivals, and composite cuisine. It represents creative interaction between different cultures rather than dominance of one over another. Syncretic traditions challenge rigid cultural boundaries and show how cultures evolve through mutual influence. The Dargah of Ajmer is a syncretic space.',
    keyPoints: [
      'Blending of different cultural traditions into new hybrid forms',
      'Sufi-Bhakti movements, Mughal-Rajput fusion, shared festivals, composite cuisine',
      'Represents creative interaction, not dominance of one culture over another',
      'Challenges rigid cultural boundaries and shows cultural evolution',
    ],
    example:
      'The Dargah of Khwaja Moinuddin Chishti in Ajmer attracts Hindus and Muslims alike — a syncretic space where both traditions coexist and merge.',
    markWeight: '4-5 अंक',
  },
  {
    id: 'socio-ch6-10',
    chapter: 6,
    chapterName: 'IS Ch6: Cultural Diversity',
    term: 'Uniform Civil Code and Minorities',
    definition:
      'The Uniform Civil Code (UCC) debate concerns whether India should have a common set of personal laws for all citizens regardless of religion, replacing religious personal laws (Muslim personal law, Hindu personal law, etc.). Supporters argue it promotes national integration and gender justice. Opponents argue it threatens minority cultural identity and religious freedom (Article 25). Minorities — religious (Muslims, Christians, Sikhs), linguistic, and cultural — are protected by Articles 29-30 and the National Commission for Minorities. Identity politics around minority rights remains contentious.',
    keyPoints: [
      'UCC: common personal laws for all citizens vs religious personal laws',
      'Supporters: national integration and gender justice; Opponents: minority cultural identity',
      'Minorities protected by Articles 29-30 and National Commission for Minorities',
      'Identity politics around minority rights remains politically contentious',
    ],
    example:
      'The Shah Bano case (1985) — Supreme Court granted alimony to a Muslim woman, but Parliament overturned it to appease Muslim orthodoxy — illustrates the UCC controversy.',
    markWeight: '4-5 अंक',
  },
];
