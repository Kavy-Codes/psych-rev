export interface SocioGlossaryTerm {
  id: string;
  term: string;
  definition: string;
  category:
    | 'demography'
    | 'social-institution'
    | 'inequality'
    | 'social-change'
    | 'media'
    | 'economy'
    | 'theory';
  example?: string;
}

export const socioGlossary: SocioGlossaryTerm[] = [
  // Chapter 1: Introducing Indian Society
  {
    id: 'glos-1-1',
    term: 'Colonialism',
    definition:
      'A practice of domination involving the subjugation of one people to another through political, economic, and cultural control. British colonialism in India lasted nearly two centuries and fundamentally restructured Indian social, economic, and political life.',
    category: 'theory',
    example:
      'The British East India Company\'s transition from a trading entity to a ruling power after the Battle of Plassey (1757) exemplifies political colonialism.',
  },
  {
    id: 'glos-1-2',
    term: 'Orientalism',
    definition:
      'A Western construction of the "Orient" as inherently different, exotic, inferior, and static. Edward Said\'s seminal work argues that Orientalism served as a discursive justification for colonial domination by portraying Eastern societies as backward and needing Western guidance.',
    category: 'theory',
    example:
      'Colonial ethnographies that depicted Indian customs as "timeless" and "unchanged" reflected Orientalist frameworks.',
  },
  {
    id: 'glos-1-3',
    term: 'Occidentalism',
    definition:
      'The reverse of Orientalism — the construction of the West by non-Western societies, often through stereotyping, idealisation, or rejection. It represents how colonised peoples sometimes constructed narratives about Western civilisation.',
    category: 'theory',
    example:
      'Nineteenth-century Indian reformers sometimes idealised Western rationality while simultaneously critiquing indigenous social evils.',
  },
  {
    id: 'glos-1-4',
    term: 'Sociological Imagination',
    definition:
      'Concept introduced by C. Wright Mills — the ability to connect personal troubles with broader public issues and see how biography intersects with history and social structure.',
    category: 'theory',
    example:
      'Understanding that an individual\'s unemployment is linked to structural economic shifts rather than personal failure.',
  },
  {
    id: 'glos-1-5',
    term: 'Community Identity',
    definition:
      'A sense of belonging derived from membership in a larger collective — based on religion, caste, language, ethnicity, or region. It shapes social solidarity and collective action but can also produce exclusivist politics.',
    category: 'social-institution',
    example:
      'Linguistic identities formed around the demand for states on the basis of language after Independence.',
  },
  {
    id: 'glos-1-6',
    term: 'Individual Identity',
    definition:
      'A person\'s sense of self formed through personal experiences, socialisation, and unique life trajectory. In sociology, it is always understood as shaped by social structures and cultural contexts.',
    category: 'theory',
    example:
      'A first-generation college graduate developing a professional identity distinct from their rural agricultural background.',
  },
  {
    id: 'glos-1-7',
    term: 'Ascribed Status',
    definition:
      'A social position assigned at birth or involuntarily later in life, based on characteristics like caste, race, gender, or family lineage. It carries fixed social expectations and limited mobility.',
    category: 'inequality',
    example:
      'Being born into a Dalit family or as a woman in a patriarchal household assigns ascribed statuses that shape life chances.',
  },
  {
    id: 'glos-1-8',
    term: 'Achieved Status',
    definition:
      'A social position acquired through individual effort, choices, and merit. It contrasts with ascribed status and is central to modern, open societies.',
    category: 'social-change',
    example:
      'An IAS officer achieving a bureaucratic position through competitive examination rather than birthright.',
  },
  {
    id: 'glos-1-9',
    term: 'Nationalism',
    definition:
      'An ideology and movement promoting loyalty to a nation-state. Indian nationalism was a composite force that united diverse communities against colonial rule, though it also harboured internal tensions.',
    category: 'social-change',
    example:
      'The Indian National Congress evolved from an elite debating forum into a mass anti-colonial nationalist movement under Gandhi.',
  },
  {
    id: 'glos-1-10',
    term: 'Self-reflexivity',
    definition:
      'The capacity to examine one\'s own assumptions, biases, and social location. In sociology, it is essential for understanding how personal perspective shapes analysis of social phenomena.',
    category: 'theory',
  },
  {
    id: 'glos-1-11',
    term: 'Social Structure',
    definition:
      'The relatively enduring pattern of social relationships and institutions that constitute a society. It includes the family, caste, economy, polity, and religion as interconnected subsystems.',
    category: 'theory',
    example:
      'The caste system as a hierarchical social structure that organised labour, ritual, and marriage for centuries.',
  },
  {
    id: 'glos-1-12',
    term: 'Social Stratification',
    definition:
      'The hierarchical arrangement of individuals into different layers or strata based on wealth, power, status, and access to resources. India\'s stratification is uniquely shaped by caste, class, gender, and region.',
    category: 'inequality',
    example:
      'The stark contrast between urban elites in gated communities and slum dwellers without basic sanitation.',
  },
  {
    id: 'glos-1-13',
    term: 'Pluralism',
    definition:
      'A condition where diverse groups — linguistic, religious, ethnic, and cultural — coexist within a single political framework with mutual recognition and respect for differences.',
    category: 'social-institution',
    example:
      'India\'s linguistic pluralism reflected in the constitutional recognition of 22 scheduled languages.',
  },
  {
    id: 'glos-1-14',
    term: 'Secularism',
    definition:
      'In the Indian context, not the strict separation of religion and state, but equal respect and non-interference of the state in all religious practices (Sarva Dharma Sama Bhava). It is enshrined in the Preamble.',
    category: 'social-institution',
    example:
      'The Indian state\'s refusal to adopt a national religion while maintaining personal law systems for different communities.',
  },
  {
    id: 'glos-1-15',
    term: 'Communalism',
    definition:
      'The exploitation of religious identity for political mobilisation, leading to social conflict. It manifests as competitive majoritarianism and threatens the secular fabric of a plural society.',
    category: 'social-institution',
    example:
      'The Partition of 1947 and recurring communal riots in Indian cities reflect communal tensions.',
  },

  // Chapter 2: Demographic Structure
  {
    id: 'glos-2-1',
    term: 'Demography',
    definition:
      'The statistical study of human populations — their size, structure, distribution, density, and changes over time through birth, death, and migration. It provides the quantitative foundation for social policy.',
    category: 'demography',
  },
  {
    id: 'glos-2-2',
    term: 'Birth Rate',
    definition:
      'The number of live births per 1,000 people in a population during a given year. India\'s crude birth rate declined from 40.7 in 1951 to 17.5 in 2020.',
    category: 'demography',
  },
  {
    id: 'glos-2-3',
    term: 'Death Rate',
    definition:
      'The number of deaths per 1,000 people in a population during a given year. Declining death rates due to improved healthcare have been a key driver of population growth.',
    category: 'demography',
  },
  {
    id: 'glos-2-4',
    term: 'Total Fertility Rate',
    definition:
      'The average number of children a woman would bear during her reproductive years, assuming current age-specific fertility rates. A TFR of 2.1 indicates replacement level fertility.',
    category: 'demography',
    example:
      'India\'s TFR dropped to 2.0 in 2020, falling below replacement level for the first time nationally.',
  },
  {
    id: 'glos-2-5',
    term: 'Infant Mortality Rate',
    definition:
      'The number of deaths of children under one year of age per 1,000 live births. IMR is a key indicator of healthcare quality and socioeconomic conditions.',
    category: 'demography',
    example:
      'India\'s IMR was 30 per 1,000 live births in 2020, down from 146 in 1951, reflecting improved neonatal care.',
  },
  {
    id: 'glos-2-6',
    term: 'Maternal Mortality Rate',
    definition:
      'The number of maternal deaths per 100,000 live births, reflecting access to obstetric care, nutrition, and women\'s health services.',
    category: 'demography',
    example:
      'India\'s MMR declined from 556 in 1990 to 97 in 2018–20 under the National Health Mission.',
  },
  {
    id: 'glos-2-7',
    term: 'Sex Ratio',
    definition:
      'The number of females per 1,000 males in a population. India\'s sex ratio has historically been skewed, reflecting gender discrimination through son preference and neglect of girl children.',
    category: 'demography',
    example:
      'The child sex ratio (0–6 years) was 927 girls per 1,000 boys in Census 2011, down from 945 in 2001.',
  },
  {
    id: 'glos-2-8',
    term: 'Age Structure',
    definition:
      'The distribution of a population across different age groups. India\'s age structure shows a large young population — a demographic feature with both opportunities and challenges.',
    category: 'demography',
  },
  {
    id: 'glos-2-9',
    term: 'Dependency Ratio',
    definition:
      'The ratio of dependents (population below 15 and above 65) to the working-age population (15–64). A low dependency ratio is favourable for economic growth.',
    category: 'demography',
  },
  {
    id: 'glos-2-10',
    term: 'Demographic Dividend',
    definition:
      'The economic growth potential resulting from a large working-age population relative to dependents. India is currently experiencing this window, expected to last until 2055.',
    category: 'economy',
    example:
      'India\'s working-age population (15–64) is projected to reach 70% by 2030, offering a productivity dividend.',
  },
  {
    id: 'glos-2-11',
    term: 'Replacement Level',
    definition:
      'The total fertility rate at which a population exactly replaces itself from one generation to the next, typically 2.1 children per woman in low-mortality settings.',
    category: 'demography',
  },
  {
    id: 'glos-2-12',
    term: 'Population Explosion',
    definition:
      'The rapid and dramatic increase in population size, particularly after independence. India\'s population grew from 361 million (1951) to 1.4 billion (2023).',
    category: 'demography',
    example:
      'Post-1947, declining mortality rates without a corresponding decline in fertility led to exponential population growth.',
  },
  {
    id: 'glos-2-13',
    term: 'Malthusian Theory',
    definition:
      'Thomas Malthus argued that population grows geometrically while food supply increases arithmetically, leading to inevitable scarcity. Critics argue this ignores technological innovation and carrying capacity.',
    category: 'theory',
    example:
      'The Green Revolution of the 1960s–70s contradicted Malthusian predictions by dramatically increasing food grain output.',
  },
  {
    id: 'glos-2-14',
    term: 'Demographic Transition Theory',
    definition:
      'A model describing how societies move from high birth and death rates to low ones through four stages of development. India is currently in Stage 3 — low death rates and declining birth rates.',
    category: 'theory',
    example:
      'Kerala, with low fertility and mortality, exemplifies an advanced demographic transition compared to Bihar.',
  },
  {
    id: 'glos-2-15',
    term: 'Epidemiological Transition',
    definition:
      'A shift in the pattern of diseases from infectious and communicable diseases to chronic and lifestyle diseases as societies develop. Accompanies demographic transition.',
    category: 'theory',
    example:
      'The rising prevalence of diabetes and cardiovascular disease in urban India alongside declining tuberculosis mortality.',
  },
  {
    id: 'glos-2-16',
    term: 'Migration',
    definition:
      'The permanent or semi-permanent movement of people from one place to another. Internal migration in India is driven by employment, marriage, education, and environmental displacement.',
    category: 'demography',
    example:
      'Seasonal migration of agricultural labourers from Bihar and UP to Punjab and Haryana during harvest seasons.',
  },
  {
    id: 'glos-2-17',
    term: 'Rural-Urban Migration',
    definition:
      'The movement of people from rural areas to cities, driven by agrarian distress, employment opportunities, and access to services. It is the largest component of internal migration in India.',
    category: 'demography',
    example:
      'The mass exodus of migrant workers from cities during the 2020 COVID-19 lockdown exposed the vulnerability of rural-urban migrants.',
  },
  {
    id: 'glos-2-18',
    term: 'Census',
    definition:
      'A systematic enumeration of the population, conducted every ten years in India since 1872 (first complete census in 1881). It provides data essential for policy planning and resource allocation.',
    category: 'demography',
    example:
      'Census 2011 revealed that Uttar Pradesh was the most populous state with 199 million people.',
  },
  {
    id: 'glos-2-19',
    term: 'NREGA',
    definition:
      'The National Rural Employment Guarantee Act (2005) guarantees 100 days of wage employment per year to every rural household willing to do unskilled manual work. It addresses rural unemployment and distress migration.',
    category: 'economy',
    example:
      'NREGA has generated over 300 crore person-days of employment annually, functioning as a social safety net for rural labourers.',
  },
  {
    id: 'glos-2-20',
    term: 'PNDT Act',
    definition:
      'The Pre-Conception and Pre-Natal Diagnostic Techniques (Prohibition of Sex Selection) Act, 1994, aims to prevent female foeticide by banning sex determination tests before birth.',
    category: 'demography',
    example:
      'Despite the PNDT Act, states like Haryana and Punjab continue to show highly skewed child sex ratios due to illegal sex selection.',
  },

  // Chapter 3: Social Institutions
  {
    id: 'glos-3-1',
    term: 'Caste',
    definition:
      'A hereditary, endogamous social group with prescribed ritual status, occupation, and social hierarchy. The caste system organises Indian society into a graded hierarchy of purity and pollution.',
    category: 'social-institution',
    example:
      'The traditional occupation-based division — Brahmins (priesthood), Kshatriyas (warriors), Vaishyas (merchants), Shudras (labourers) — with Dalits outside the system.',
  },
  {
    id: 'glos-3-2',
    term: 'Varna',
    definition:
      'The four-fold theoretical division of Hindu society — Brahmin, Kshatriya, Vaishya, and Shudra — described in ancient texts like the Rigveda. Varna is an idealised model, distinct from the lived reality of Jati.',
    category: 'social-institution',
  },
  {
    id: 'glos-3-3',
    term: 'Jati',
    definition:
      'The actual endogamous group that functions as the unit of caste in daily life. India has thousands of jatis, each with specific customary rules regarding occupation, marriage, and social interaction.',
    category: 'social-institution',
    example:
      'The Yadav community is a jati classified as OBC, traditionally associated with dairy and cattle rearing.',
  },
  {
    id: 'glos-3-4',
    term: 'Sanskritisation',
    definition:
      'A concept by M.N. Srinivas describing how lower castes adopt upper-caste rituals, customs, and lifestyle to claim higher status within the caste hierarchy. It reflects mobility within the caste system.',
    category: 'social-institution',
    example:
      'The Nadar community of Tamil Nadu claimed Kshatriya status through ritual emulation in the nineteenth century.',
  },
  {
    id: 'glos-3-5',
    term: 'Westernisation',
    definition:
      'The adoption of Western cultural traits — in dress, food, education, and values — particularly by the upper and middle classes during and after colonialism. Often associated with modernity and secular outlook.',
    category: 'social-institution',
    example:
      'The spread of English-language education and the adoption of parliamentary democratic institutions reflect Westernisation.',
  },
  {
    id: 'glos-3-6',
    term: 'Tribe',
    definition:
      'A community with a distinct language, culture, and territorial identity, typically outside the caste system, often with a subsistence economy and egalitarian social organisation. Tribes constitute 8.6% of India\'s population.',
    category: 'social-institution',
    example:
      'The Gond, Santhal, and Bhil are among India\'s largest tribal communities.',
  },
  {
    id: 'glos-3-7',
    term: 'Scheduled Tribes',
    definition:
      'Constitutionally recognised tribal communities listed in the Fifth and Sixth Schedules of the Constitution, entitled to protective safeguards in education, employment, and land rights.',
    category: 'social-institution',
    example:
      'The Fifth Schedule protects land and resources of tribal areas in states like Jharkhand, Chhattisgarh, and Odisha.',
  },
  {
    id: 'glos-3-8',
    term: 'Family',
    definition:
      'A basic social institution formed through marriage, kinship, and cohabitation, responsible for reproduction, socialisation, and economic cooperation. Indian families vary widely across regions and communities.',
    category: 'social-institution',
  },
  {
    id: 'glos-3-9',
    term: 'Nuclear Family',
    definition:
      'A family unit consisting of a married couple and their dependent children. Urbanisation, industrialisation, and changing values have contributed to the increasing prevalence of nuclear families in India.',
    category: 'social-institution',
    example:
      'Young IT professionals in Bengaluru and Hyderabad typically form nuclear families separate from their parental households.',
  },
  {
    id: 'glos-3-10',
    term: 'Joint Family',
    definition:
      'A multigenerational family structure where three or more generations live together under a common household head, sharing resources and decision-making. It is traditionally associated with Hindu undivided families.',
    category: 'social-institution',
    example:
      'The Hindu Undivided Family (HUF) has legal and tax implications, reflecting the institutionalisation of joint family norms.',
  },
  {
    id: 'glos-3-11',
    term: 'Matrilineal',
    definition:
      'A kinship system where descent and inheritance are traced through the mother\'s line. Among Indian societies, the Khasi and Nair communities are notable examples of matrilineal descent.',
    category: 'social-institution',
    example:
      'Among the Khasi of Meghalaya, children take the mother\'s surname and property passes from mother to daughter.',
  },
  {
    id: 'glos-3-12',
    term: 'Patrilineal',
    definition:
      'A kinship system where descent and inheritance are traced through the father\'s line. The majority of Indian societies follow patrilineal descent, linking property, name, and caste status to the male line.',
    category: 'social-institution',
    example:
      'Hindu succession laws historically favoured male heirs in property inheritance, reflecting patrilineal norms.',
  },
  {
    id: 'glos-3-13',
    term: 'Kinship',
    definition:
      'The system of social relationships based on blood ties (consanguineal) or marriage (affinal). Kinship determines roles, obligations, inheritance, and marriage rules in all societies.',
    category: 'social-institution',
  },
  {
    id: 'glos-3-14',
    term: 'Consanguineal',
    definition:
      'Kinship relations based on blood or biological descent — parents, siblings, grandparents, uncles, and aunts. These form the core of most Indian family and kinship systems.',
    category: 'social-institution',
  },
  {
    id: 'glos-3-15',
    term: 'Affinal',
    definition:
      'Kinship relations established through marriage — in-laws, spouse\'s relatives. In Indian society, affinal ties play a crucial role in expanding social networks and strategic alliances.',
    category: 'social-institution',
  },
  {
    id: 'glos-3-16',
    term: 'Exogamy',
    definition:
      'The rule that requires marriage outside one\'s own group — clan, gotra, or village. It prevents inbreeding and expands inter-group alliances.',
    category: 'social-institution',
    example:
      'Hindu gotra exogamy forbids marriage between individuals sharing the same patrilineal clan name.',
  },
  {
    id: 'glos-3-17',
    term: 'Endogamy',
    definition:
      'The rule that requires marriage within one\'s own group — caste, sub-caste, or community. Caste endogamy is a fundamental feature of the Indian caste system.',
    category: 'social-institution',
    example:
      'Matrimonial advertisements specifying caste, sub-caste, and community preferences reflect endogamous norms.',
  },
  {
    id: 'glos-3-18',
    term: 'Panchayati Raj',
    definition:
      'A three-tier system of local self-governance in rural India, comprising Gram Panchayat, Panchayat Samiti, and Zila Parishad. It decentralises power to grassroots democratic institutions.',
    category: 'social-institution',
    example:
      'Over 3 million elected representatives, including a significant number of women, serve in Panchayati Raj Institutions.',
  },
  {
    id: 'glos-3-19',
    term: '73rd Amendment',
    definition:
      'The 73rd Constitutional Amendment Act (1992) constitutionally mandated Panchayati Raj institutions, with provisions for reservation of seats for SC, ST, and women, and regular elections.',
    category: 'social-institution',
    example:
      'One-third reservation for women in Panchayats led to over 1.4 million women elected to local governance positions.',
  },
  {
    id: 'glos-3-20',
    term: 'Dominant Caste',
    definition:
      'A concept by M.N. Srinivas referring to a caste that is numerically large, economically prosperous, and politically powerful in a local area, wielding influence over other castes.',
    category: 'inequality',
    example:
      'The Jats of western UP and Haryana, the Marathas of Maharashtra, and the Patidars of Gujarat function as dominant castes in their regions.',
  },

  // Chapter 5: Structural Change
  {
    id: 'glos-5-1',
    term: 'Structural Change',
    definition:
      'Fundamental alterations in the social, economic, and political structures of a society. In India, colonialism initiated structural changes that transformed land relations, industries, and class formation.',
    category: 'social-change',
  },
  {
    id: 'glos-5-2',
    term: 'Colonialism',
    definition:
      'British colonial rule fundamentally restructured Indian society — transforming agrarian relations through new land revenue systems, deindustrialising the textile sector, and introducing modern administration and law.',
    category: 'social-change',
    example:
      'The systematic destruction of India\'s handloom industry through tariff policies to benefit British mill manufacturers.',
  },
  {
    id: 'glos-5-3',
    term: 'Railway Network',
    definition:
      'The colonial railway system, the fourth largest in the world by 1947, served extractive economic purposes but also inadvertently facilitated national integration, labour mobility, and the spread of nationalist ideas.',
    category: 'social-change',
    example:
      'Ram Mohan Roy travelled to England by ship, but by 1857, railways connected major Indian cities, enabling rapid communication.',
  },
  {
    id: 'glos-5-4',
    term: 'Print Technology',
    definition:
      'The introduction of the printing press in India (1780, Hicky\'s Gazette) revolutionised the spread of ideas, enabling newspapers, pamphlets, and books to circulate nationalist, reformist, and subaltern voices.',
    category: 'social-change',
    example:
      'Kesari, edited by Tilak, and Maratha, used print media to mobilise anti-colonial sentiment in Maharashtra.',
  },
  {
    id: 'glos-5-5',
    term: 'Factory System',
    definition:
      'The capitalist mode of production involving wage labour, division of labour, and mechanised production in enclosed factories. Colonial policy promoted factories in port cities while stifling indigenous industry.',
    category: 'economy',
    example:
      'Cotton textile mills in Bombay (1854) and Ahmedabad emerged as the factory system replaced artisanal production.',
  },
  {
    id: 'glos-5-6',
    term: 'Cottage Industry',
    definition:
      'Small-scale, household-based production typically involving artisanal skills — weaving, spinning, pottery. Colonial policies devastated cottage industries by flooding markets with cheap British manufactured goods.',
    category: 'economy',
    example:
      'Gandhi\'s charkha (spinning wheel) movement was a symbolic and practical resistance to the destruction of India\'s cottage textile industry.',
  },
  {
    id: 'glos-5-7',
    term: 'Commercial Agriculture',
    definition:
      'The shift from subsistence farming to cash crop cultivation for market sale. Colonial policies forced farmers to grow indigo, cotton, and jute for export, undermining food security.',
    category: 'economy',
    example:
      'The indigo revolt of 1859–60 in Bengal was a peasant uprising against forced indigo cultivation for European markets.',
  },
  {
    id: 'glos-5-8',
    term: 'Zamindari System',
    definition:
      'The Permanent Settlement (1793) in Bengal created hereditary landlords (zamindars) responsible for collecting revenue from peasants. It created a parasitic intermediary class and intensified peasant exploitation.',
    category: 'economy',
    example:
      'The absentee landlordism of Bengal zamindars, who extracted rent without investing in land improvement.',
  },
  {
    id: 'glos-5-9',
    term: 'Ryotwari System',
    definition:
      'Introduced by Thomas Munro in Madras Presidency (1820), it placed the peasant (ryot) in direct contact with the state for revenue collection. Despite being fairer in theory, high revenue demands caused distress.',
    category: 'economy',
    example:
      'Ryots in Tamil Nadu faced devastating debt and land alienation due to inflexible revenue demands during crop failures.',
  },
  {
    id: 'glos-5-10',
    term: 'Mahalwari System',
    definition:
      'Introduced in the North-Western Provinces (1833), it collected revenue from the village community (mahal) as a collective unit. Administered by Henry Sleeman, it covered parts of present-day UP and Punjab.',
    category: 'economy',
  },
  {
    id: 'glos-5-11',
    term: 'Social Reform Movement',
    definition:
      'Nineteenth and early twentieth-century movements aimed at eliminating social evils like sati, child marriage, caste discrimination, and promoting education, especially for women and lower castes.',
    category: 'social-change',
    example:
      'The campaigns against sati, led by Raja Ram Mohan Roy, resulted in the Bengal Sati Regulation of 1829.',
  },
  {
    id: 'glos-5-12',
    term: 'Brahmo Samaj',
    definition:
      'Founded by Raja Ram Mohan Roy in 1828 in Calcutta, it promoted monotheism, rationalism, and social reform — opposing idolatry, sati, and caste discrimination while synthesising Hindu and Western thought.',
    category: 'social-change',
    example:
      'The Brahmo Samaj advocated for women\'s rights, including widow remarriage and female education.',
  },
  {
    id: 'glos-5-13',
    term: 'Prarthana Samaj',
    definition:
      'Founded in 1867 in Bombay by Atmaram Pandurang, influenced by the Brahmo Samaj. It focused on social reform in Maharashtra — opposing caste discrimination, promoting widow remarriage, and encouraging rational worship.',
    category: 'social-change',
    example:
      'Justice M.G. Ranade, a prominent member, worked for legal reforms and the upliftment of lower castes.',
  },
  {
    id: 'glos-5-14',
    term: 'Arya Samaj',
    definition:
      'Founded by Swami Dayananda Saraswati in 1875 in Bombay, it rejected caste by birth, idolatry, and untouchability, advocating a return to Vedic authority. It ran educational institutions and initiated the Shuddhi reconversion movement.',
    category: 'social-change',
    example:
      'The D.A.V. (Dayanand Anglo-Vedic) schools and colleges established across northern India reflected Arya Samaj\'s educational mission.',
  },
  {
    id: 'glos-5-15',
    term: 'Nationalism',
    definition:
      'Structural changes under colonialism — railways, print, and shared grievance — forged a composite Indian nationalism that united diverse castes, classes, and regions against a common colonial oppressor.',
    category: 'social-change',
    example:
      'The Swadeshi movement (1905) united students, workers, peasants, and elites in a common anti-colonial economic boycott.',
  },

  // Chapter 6: Cultural Change
  {
    id: 'glos-6-1',
    term: 'Cultural Change',
    definition:
      'Transformation in the cultural elements of a society — values, norms, beliefs, customs, and practices. In India, cultural change has been driven by colonialism, modernisation, and social reform movements.',
    category: 'social-change',
  },
  {
    id: 'glos-6-2',
    term: 'Modernisation',
    definition:
      'A comprehensive process of social transformation involving industrialisation, urbanisation, rationalisation, and the spread of science and technology. It reshapes traditional values towards individualism, equality, and progress.',
    category: 'social-change',
    example:
      'The spread of English education and urban professional classes in post-Independence India accelerated modernisation.',
  },
  {
    id: 'glos-6-3',
    term: 'Westernisation',
    definition:
      'The adoption of Western cultural patterns — in dress, food, language, and social norms — associated with modernity. In India, it is often mediated through class, education, and urbanisation.',
    category: 'social-change',
    example:
      'The growing popularity of Western-style education, corporate culture, and consumption patterns among India\'s urban middle class.',
  },
  {
    id: 'glos-6-4',
    term: 'Secularisation',
    definition:
      'The decline of religious authority in social and political life, and the separation of religious institutions from the state. In India, it is a contested and incomplete process.',
    category: 'social-change',
    example:
      'The Supreme Court\'s intervention in religious practices (e.g., Shah Bano case, Sabarimala verdict) reflects secularisation of law.',
  },
  {
    id: 'glos-6-5',
    term: 'Rationalisation',
    definition:
      'A concept by Max Weber describing the process of replacing traditional customs and emotions with calculated, efficient, and rule-bound decision-making. It pervades modern bureaucracy, law, and education.',
    category: 'theory',
    example:
      'The shift from caste-based occupation selection to merit-based recruitment in government services.',
  },
  {
    id: 'glos-6-6',
    term: 'Sanskritisation',
    definition:
      'M.N. Srinivas\'s concept describing how lower castes adopt upper-caste practices to claim higher ritual status. It is a form of cultural mobility within — rather than against — the caste hierarchy.',
    category: 'social-change',
    example:
      'The forgotten Maratha sub-castes claiming Kshatriya status through the adoption of vegetarianism and Vedic rituals.',
  },
  {
    id: 'glos-6-7',
    term: 'Syncretism',
    definition:
      'The blending of different cultural, religious, or social traditions to create new hybrid forms. Indian civilisation is marked by centuries of syncretism between Hindu, Islamic, Buddhist, and local traditions.',
    category: 'social-change',
    example:
      'The architectural and culinary traditions of Lucknow, blending Mughal and Awadhi cultures.',
  },
  {
    id: 'glos-6-8',
    term: 'Social Reform',
    definition:
      'Organised efforts to change social customs, institutions, and practices considered unjust or oppressive. Indian social reform has been driven by both indigenous thinkers and colonial-era legislation.',
    category: 'social-change',
  },
  {
    id: 'glos-6-9',
    term: 'Sati Abolition',
    definition:
      'The practice of widow self-immolation on the husband\'s funeral pyre was abolished by Lord William Bentinck in 1829, following campaigns by Raja Ram Mohan Roy. It was one of the first major colonial interventions in Hindu social practice.',
    category: 'social-change',
    example:
      'Roop Kanwar\'s sati in 1987 in Rajasthan reignited debates about the persistence of this practice.',
  },
  {
    id: 'glos-6-10',
    term: 'Self-Respect Movement',
    definition:
      'Founded by Periyar E.V. Ramasamy in 1925 in Tamil Nadu, it challenged Brahminical hegemony, caste hierarchy, and untouchability, promoting rationalism, social equality, and Dravidian identity.',
    category: 'social-change',
    example:
      'The movement organised inter-caste marriages and temple entry campaigns to challenge caste norms.',
  },
  {
    id: 'glos-6-11',
    term: 'Left Movement',
    definition:
      'Communist and socialist political movements in India, including trade unions, peasant struggles, and electoral politics. The Left has historically been influential in Kerala, West Bengal, and Tripura.',
    category: 'social-change',
    example:
      'The Telangana Rebellion (1946–51) was one of the largest armed peasant struggles led by communists.',
  },
  {
    id: 'glos-6-12',
    term: 'Naxalite',
    definition:
      'A radical Maoist movement originating from the 1967 Naxalbari uprising in West Bengal, advocating armed revolution and land redistribution for the landless. It continues in parts of central and eastern India.',
    category: 'social-change',
    example:
      'The ongoing Maoist insurgency in the "Red Corridor" spanning parts of Chhattisgarh, Jharkhand, and Odisha.',
  },
  {
    id: 'glos-6-13',
    term: 'Trade Union',
    definition:
      'An organised association of workers formed to protect and advance their economic and social interests through collective bargaining and political action.',
    category: 'social-change',
    example:
      'The All India Trade Union Congress (AITUC), founded in 1920, was India\'s first national trade union federation.',
  },
  {
    id: 'glos-6-14',
    term: 'Peasant Movement',
    definition:
      'Collective action by farmers and agricultural labourers against exploitation by landlords, moneylenders, and the state. Peasant movements have shaped Indian politics from colonial times to the present.',
    category: 'social-change',
    example:
      'The Mappila Rebellion (1921) in Malabar was a peasant uprising against colonial and landlord oppression.',
  },
  {
    id: 'glos-6-15',
    term: 'Kudumbam',
    definition:
      'A community-based organisation and network of neighbourhood groups in Kerala, originally formed for women\'s empowerment and poverty alleviation. It represents a grassroots model of collective self-governance and economic self-reliance.',
    category: 'social-change',
    example:
      'Kudumbam runs community enterprises, manages affordable restaurants (Janakeeyas), and implements local development projects across Kerala.',
  },
];
