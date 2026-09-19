export interface SocioGlossaryTerm {
  id: string;
  chapter: number;
  term: string;
  definition: string;
  category: 'demography' | 'social-institution' | 'inequality' | 'social-change' | 'media' | 'economy' | 'theory';
  example?: string;
}

export const socioGlossary: SocioGlossaryTerm[] = [
  // Chapter 1: SC Ch1 — Structural Change
  {
    id: 'glos-1-1',
    chapter: 1,
    term: 'Structural Change',
    definition:
      'Fundamental alterations in the social, economic, and political structures of a society. In India, colonialism initiated structural changes that transformed land relations, industries, and class formation.',
    category: 'social-change',
    example:
      'The shift from a largely agrarian economy to one integrated into global capitalist markets under British rule.',
  },
  {
    id: 'glos-1-2',
    chapter: 1,
    term: 'Colonialism',
    definition:
      'A practice of domination involving the subjugation of one people to another through political, economic, and cultural control. British colonialism in India lasted nearly two centuries and fundamentally restructured Indian social, economic, and political life.',
    category: 'social-change',
    example:
      'The British East India Company\'s transition from a trading entity to a ruling power after the Battle of Plassey (1757).',
  },
  {
    id: 'glos-1-3',
    chapter: 1,
    term: 'Railway Network',
    definition:
      'The colonial railway system, the fourth largest in the world by 1947, served extractive economic purposes but also inadvertently facilitated national integration, labour mobility, and the spread of nationalist ideas.',
    category: 'economy',
    example:
      'By 1857, railways connected major Indian cities, enabling rapid communication and movement of goods across regions.',
  },
  {
    id: 'glos-1-4',
    chapter: 1,
    term: 'Print Technology',
    definition:
      'The introduction of the printing press in India (1780, Hicky\'s Gazette) revolutionised the spread of ideas, enabling newspapers, pamphlets, and books to circulate nationalist, reformist, and subaltern voices.',
    category: 'media',
    example:
      'Kesari, edited by Tilak, and Maratha used print media to mobilise anti-colonial sentiment in Maharashtra.',
  },
  {
    id: 'glos-1-5',
    chapter: 1,
    term: 'Factory System',
    definition:
      'The capitalist mode of production involving wage labour, division of labour, and mechanised production in enclosed factories. Colonial policy promoted factories in port cities while stifling indigenous industry.',
    category: 'economy',
    example:
      'Cotton textile mills in Bombay (1854) and Ahmedabad emerged as the factory system replaced artisanal production.',
  },
  {
    id: 'glos-1-6',
    chapter: 1,
    term: 'Cottage Industry',
    definition:
      'Small-scale, household-based production typically involving artisanal skills — weaving, spinning, pottery. Colonial policies devastated cottage industries by flooding markets with cheap British manufactured goods.',
    category: 'economy',
    example:
      'Gandhi\'s charkha (spinning wheel) movement was a symbolic and practical resistance to the destruction of India\'s cottage textile industry.',
  },
  {
    id: 'glos-1-7',
    chapter: 1,
    term: 'Commercial Agriculture',
    definition:
      'The shift from subsistence farming to cash crop cultivation for market sale. Colonial policies forced farmers to grow indigo, cotton, and jute for export, undermining food security.',
    category: 'economy',
    example:
      'The indigo revolt of 1859–60 in Bengal was a peasant uprising against forced indigo cultivation for European markets.',
  },
  {
    id: 'glos-1-8',
    chapter: 1,
    term: 'Zamindari System',
    definition:
      'The Permanent Settlement (1793) in Bengal created hereditary landlords (zamindars) responsible for collecting revenue from peasants. It created a parasitic intermediary class and intensified peasant exploitation.',
    category: 'economy',
    example:
      'The absentee landlordism of Bengal zamindars, who extracted rent without investing in land improvement.',
  },
  {
    id: 'glos-1-9',
    chapter: 1,
    term: 'Ryotwari System',
    definition:
      'Introduced by Thomas Munro in Madras Presidency (1820), it placed the peasant (ryot) in direct contact with the state for revenue collection. Despite being fairer in theory, high revenue demands caused distress.',
    category: 'economy',
    example:
      'Ryots in Tamil Nadu faced devastating debt and land alienation due to inflexible revenue demands during crop failures.',
  },
  {
    id: 'glos-1-10',
    chapter: 1,
    term: 'Mahalwari System',
    definition:
      'Introduced in the North-Western Provinces (1833), it collected revenue from the village community (mahal) as a collective unit. Administered by Henry Sleeman, it covered parts of present-day UP and Punjab.',
    category: 'economy',
    example:
      'The collective responsibility of the village community under the Mahalwari System often led to communal debt and land alienation.',
  },
  {
    id: 'glos-1-11',
    chapter: 1,
    term: 'Social Reform Movement',
    definition:
      'Nineteenth and early twentieth-century movements aimed at eliminating social evils like sati, child marriage, caste discrimination, and promoting education, especially for women and lower castes.',
    category: 'social-change',
    example:
      'The campaigns against sati, led by Raja Ram Mohan Roy, resulted in the Bengal Sati Regulation of 1829.',
  },
  {
    id: 'glos-1-12',
    chapter: 1,
    term: 'Brahmo Samaj',
    definition:
      'Founded by Raja Ram Mohan Roy in 1828 in Calcutta, it promoted monotheism, rationalism, and social reform — opposing idolatry, sati, and caste discrimination while synthesising Hindu and Western thought.',
    category: 'social-change',
    example:
      'The Brahmo Samaj advocated for women\'s rights, including widow remarriage and female education.',
  },
  {
    id: 'glos-1-13',
    chapter: 1,
    term: 'Prarthana Samaj',
    definition:
      'Founded in 1867 in Bombay by Atmaram Pandurang, influenced by the Brahmo Samaj. It focused on social reform in Maharashtra — opposing caste discrimination, promoting widow remarriage, and encouraging rational worship.',
    category: 'social-change',
    example:
      'Justice M.G. Ranade, a prominent member, worked for legal reforms and the upliftment of lower castes.',
  },
  {
    id: 'glos-1-14',
    chapter: 1,
    term: 'Arya Samaj',
    definition:
      'Founded by Swami Dayananda Saraswati in 1875 in Bombay, it rejected caste by birth, idolatry, and untouchability, advocating a return to Vedic authority. It ran educational institutions and initiated the Shuddhi reconversion movement.',
    category: 'social-change',
    example:
      'The D.A.V. (Dayanand Anglo-Vedic) schools and colleges established across northern India reflected Arya Samaj\'s educational mission.',
  },
  {
    id: 'glos-1-15',
    chapter: 1,
    term: 'Nationalism',
    definition:
      'An ideology and movement promoting loyalty to a nation-state. Indian nationalism was a composite force that united diverse communities against colonial rule, though it also harboured internal tensions.',
    category: 'social-change',
    example:
      'The Swadeshi movement (1905) united students, workers, peasants, and elites in a common anti-colonial economic boycott.',
  },

  // Chapter 2: IS Ch2 — Demographic Structure
  {
    id: 'glos-2-1',
    chapter: 2,
    term: 'Demography',
    definition:
      'The statistical study of human populations — their size, structure, distribution, density, and changes over time through birth, death, and migration. It provides the quantitative foundation for social policy.',
    category: 'demography',
    example:
      'Census data on population growth rates helps governments plan infrastructure, education, and healthcare.',
  },
  {
    id: 'glos-2-2',
    chapter: 2,
    term: 'Birth Rate',
    definition:
      'The number of live births per 1,000 people in a population during a given year. India\'s crude birth rate declined from 40.7 in 1951 to 17.5 in 2020.',
    category: 'demography',
    example:
      'Declining birth rates in southern states like Kerala and Tamil Nadu reflect higher female literacy and healthcare access.',
  },
  {
    id: 'glos-2-3',
    chapter: 2,
    term: 'Death Rate',
    definition:
      'The number of deaths per 1,000 people in a population during a given year. Declining death rates due to improved healthcare have been a key driver of population growth in India.',
    category: 'demography',
    example:
      'India\'s death rate fell from 27.4 in 1951 to 7.0 in 2020 due to vaccination, antibiotics, and public health measures.',
  },
  {
    id: 'glos-2-4',
    chapter: 2,
    term: 'Total Fertility Rate',
    definition:
      'The average number of children a woman would bear during her reproductive years, assuming current age-specific fertility rates. A TFR of 2.1 indicates replacement level fertility.',
    category: 'demography',
    example:
      'India\'s TFR dropped to 2.0 in 2020, falling below replacement level for the first time nationally.',
  },
  {
    id: 'glos-2-5',
    chapter: 2,
    term: 'Infant Mortality Rate',
    definition:
      'The number of deaths of children under one year of age per 1,000 live births. IMR is a key indicator of healthcare quality and socioeconomic conditions.',
    category: 'demography',
    example:
      'India\'s IMR was 30 per 1,000 live births in 2020, down from 146 in 1951, reflecting improved neonatal care.',
  },
  {
    id: 'glos-2-6',
    chapter: 2,
    term: 'Maternal Mortality Rate',
    definition:
      'The number of maternal deaths per 100,000 live births, reflecting access to obstetric care, nutrition, and women\'s health services.',
    category: 'demography',
    example:
      'India\'s MMR declined from 556 in 1990 to 97 in 2018–20 under the National Health Mission.',
  },
  {
    id: 'glos-2-7',
    chapter: 2,
    term: 'Sex Ratio',
    definition:
      'The number of females per 1,000 males in a population. India\'s sex ratio has historically been skewed, reflecting gender discrimination through son preference and neglect of girl children.',
    category: 'demography',
    example:
      'The child sex ratio (0–6 years) was 927 girls per 1,000 boys in Census 2011, down from 945 in 2001.',
  },
  {
    id: 'glos-2-8',
    chapter: 2,
    term: 'Age Structure',
    definition:
      'The distribution of a population across different age groups. India\'s age structure shows a large young population — a demographic feature with both opportunities and challenges.',
    category: 'demography',
    example:
      'Over 65% of India\'s population is below 35 years of age, creating a vast potential workforce.',
  },
  {
    id: 'glos-2-9',
    chapter: 2,
    term: 'Dependency Ratio',
    definition:
      'The ratio of dependents (population below 15 and above 65) to the working-age population (15–64). A low dependency ratio is favourable for economic growth.',
    category: 'demography',
    example:
      'India\'s dependency ratio is projected to decline to 0.4 by 2030, signalling a favourable window for economic expansion.',
  },
  {
    id: 'glos-2-10',
    chapter: 2,
    term: 'Demographic Dividend',
    definition:
      'The economic growth potential resulting from a large working-age population relative to dependents. India is currently experiencing this window, expected to last until 2055.',
    category: 'demography',
    example:
      'India\'s working-age population (15–64) is projected to reach 70% by 2030, offering a productivity dividend.',
  },
  {
    id: 'glos-2-11',
    chapter: 2,
    term: 'Replacement Level',
    definition:
      'The total fertility rate at which a population exactly replaces itself from one generation to the next, typically 2.1 children per woman in low-mortality settings.',
    category: 'demography',
    example:
      'When TFR falls below 2.1, the population eventually stabilises and may begin to decline without migration.',
  },
  {
    id: 'glos-2-12',
    chapter: 2,
    term: 'Population Explosion',
    definition:
      'The rapid and dramatic increase in population size, particularly after independence. India\'s population grew from 361 million (1951) to 1.4 billion (2023).',
    category: 'demography',
    example:
      'Post-1947, declining mortality rates without a corresponding decline in fertility led to exponential population growth.',
  },
  {
    id: 'glos-2-13',
    chapter: 2,
    term: 'Malthusian Theory',
    definition:
      'Thomas Malthus argued that population grows geometrically while food supply increases arithmetically, leading to inevitable scarcity. Critics argue this ignores technological innovation and carrying capacity.',
    category: 'theory',
    example:
      'The Green Revolution of the 1960s–70s contradicted Malthusian predictions by dramatically increasing food grain output.',
  },
  {
    id: 'glos-2-14',
    chapter: 2,
    term: 'Demographic Transition Theory',
    definition:
      'A model describing how societies move from high birth and death rates to low ones through four stages of development. India is currently in Stage 3 — low death rates and declining birth rates.',
    category: 'theory',
    example:
      'Kerala, with low fertility and mortality, exemplifies an advanced demographic transition compared to Bihar.',
  },
  {
    id: 'glos-2-15',
    chapter: 2,
    term: 'Epidemiological Transition',
    definition:
      'A shift in the pattern of diseases from infectious and communicable diseases to chronic and lifestyle diseases as societies develop. Accompanies demographic transition.',
    category: 'theory',
    example:
      'The rising prevalence of diabetes and cardiovascular disease in urban India alongside declining tuberculosis mortality.',
  },
  {
    id: 'glos-2-16',
    chapter: 2,
    term: 'Migration',
    definition:
      'The permanent or semi-permanent movement of people from one place to another. Internal migration in India is driven by employment, marriage, education, and environmental displacement.',
    category: 'demography',
    example:
      'Seasonal migration of agricultural labourers from Bihar and UP to Punjab and Haryana during harvest seasons.',
  },
  {
    id: 'glos-2-17',
    chapter: 2,
    term: 'Rural-Urban Migration',
    definition:
      'The movement of people from rural areas to cities, driven by agrarian distress, employment opportunities, and access to services. It is the largest component of internal migration in India.',
    category: 'demography',
    example:
      'The mass exodus of migrant workers from cities during the 2020 COVID-19 lockdown exposed the vulnerability of rural-urban migrants.',
  },
  {
    id: 'glos-2-18',
    chapter: 2,
    term: 'Census',
    definition:
      'A systematic enumeration of the population, conducted every ten years in India since 1872 (first complete census in 1881). It provides data essential for policy planning and resource allocation.',
    category: 'demography',
    example:
      'Census 2011 revealed that Uttar Pradesh was the most populous state with 199 million people.',
  },
  {
    id: 'glos-2-19',
    chapter: 2,
    term: 'NREGA',
    definition:
      'The National Rural Employment Guarantee Act (2005) guarantees 100 days of wage employment per year to every rural household willing to do unskilled manual work. It addresses rural unemployment and distress migration.',
    category: 'economy',
    example:
      'NREGA has generated over 300 crore person-days of employment annually, functioning as a social safety net for rural labourers.',
  },
  {
    id: 'glos-2-20',
    chapter: 2,
    term: 'PNDT Act',
    definition:
      'The Pre-Conception and Pre-Natal Diagnostic Techniques (Prohibition of Sex Selection) Act, 1994, aims to prevent female foeticide by banning sex determination tests before birth.',
    category: 'demography',
    example:
      'Despite the PNDT Act, states like Haryana and Punjab continue to show highly skewed child sex ratios due to illegal sex selection.',
  },

  // Chapter 3: IS Ch3 — Social Institutions
  {
    id: 'glos-3-1',
    chapter: 3,
    term: 'Caste',
    definition:
      'A hereditary, endogamous social group with prescribed ritual status, occupation, and social hierarchy. The caste system organises Indian society into a graded hierarchy of purity and pollution.',
    category: 'social-institution',
    example:
      'The traditional occupation-based division — Brahmins (priesthood), Kshatriyas (warriors), Vaishyas (merchants), Shudras (labourers) — with Dalits outside the system.',
  },
  {
    id: 'glos-3-2',
    chapter: 3,
    term: 'Varna',
    definition:
      'The four-fold theoretical division of Hindu society — Brahmin, Kshatriya, Vaishya, and Shudra — described in ancient texts like the Rigveda. Varna is an idealised model, distinct from the lived reality of Jati.',
    category: 'social-institution',
    example:
      'The Purusha Sukta hymn in the Rigveda describes the origin of the four varnas from the cosmic being.',
  },
  {
    id: 'glos-3-3',
    chapter: 3,
    term: 'Jati',
    definition:
      'The actual endogamous group that functions as the unit of caste in daily life. India has thousands of jatis, each with specific customary rules regarding occupation, marriage, and social interaction.',
    category: 'social-institution',
    example:
      'The Yadav community is a jati classified as OBC, traditionally associated with dairy and cattle rearing.',
  },
  {
    id: 'glos-3-4',
    chapter: 3,
    term: 'Sanskritisation',
    definition:
      'A concept by M.N. Srinivas describing how lower castes adopt upper-caste rituals, customs, and lifestyle to claim higher status within the caste hierarchy. It reflects mobility within the caste system.',
    category: 'social-institution',
    example:
      'The Nadar community of Tamil Nadu claimed Kshatriya status through ritual emulation in the nineteenth century.',
  },
  {
    id: 'glos-3-5',
    chapter: 3,
    term: 'Westernisation',
    definition:
      'The adoption of Western cultural traits — in dress, food, education, and values — particularly by the upper and middle classes during and after colonialism. Often associated with modernity and secular outlook.',
    category: 'social-institution',
    example:
      'The spread of English-language education and the adoption of parliamentary democratic institutions reflect Westernisation.',
  },
  {
    id: 'glos-3-6',
    chapter: 3,
    term: 'Tribe',
    definition:
      'A community with a distinct language, culture, and territorial identity, typically outside the caste system, often with a subsistence economy and egalitarian social organisation. Tribes constitute 8.6% of India\'s population.',
    category: 'social-institution',
    example:
      'The Gond, Santhal, and Bhil are among India\'s largest tribal communities.',
  },
  {
    id: 'glos-3-7',
    chapter: 3,
    term: 'Scheduled Tribes',
    definition:
      'Constitutionally recognised tribal communities listed in the Fifth and Sixth Schedules of the Constitution, entitled to protective safeguards in education, employment, and land rights.',
    category: 'social-institution',
    example:
      'The Fifth Schedule protects land and resources of tribal areas in states like Jharkhand, Chhattisgarh, and Odisha.',
  },
  {
    id: 'glos-3-8',
    chapter: 3,
    term: 'Family',
    definition:
      'A basic social institution formed through marriage, kinship, and cohabitation, responsible for reproduction, socialisation, and economic cooperation. Indian families vary widely across regions and communities.',
    category: 'social-institution',
    example:
      'The family acts as the primary agent of socialisation, transmitting cultural values and norms to children.',
  },
  {
    id: 'glos-3-9',
    chapter: 3,
    term: 'Nuclear Family',
    definition:
      'A family unit consisting of a married couple and their dependent children. Urbanisation, industrialisation, and changing values have contributed to the increasing prevalence of nuclear families in India.',
    category: 'social-institution',
    example:
      'Young IT professionals in Bengaluru and Hyderabad typically form nuclear families separate from their parental households.',
  },
  {
    id: 'glos-3-10',
    chapter: 3,
    term: 'Joint Family',
    definition:
      'A multigenerational family structure where three or more generations live together under a common household head, sharing resources and decision-making. It is traditionally associated with Hindu undivided families.',
    category: 'social-institution',
    example:
      'The Hindu Undivided Family (HUF) has legal and tax implications, reflecting the institutionalisation of joint family norms.',
  },
  {
    id: 'glos-3-11',
    chapter: 3,
    term: 'Matrilineal',
    definition:
      'A kinship system where descent and inheritance are traced through the mother\'s line. Among Indian societies, the Khasi and Nair communities are notable examples of matrilineal descent.',
    category: 'social-institution',
    example:
      'Among the Khasi of Meghalaya, children take the mother\'s surname and property passes from mother to daughter.',
  },
  {
    id: 'glos-3-12',
    chapter: 3,
    term: 'Patrilineal',
    definition:
      'A kinship system where descent and inheritance are traced through the father\'s line. The majority of Indian societies follow patrilineal descent, linking property, name, and caste status to the male line.',
    category: 'social-institution',
    example:
      'Hindu succession laws historically favoured male heirs in property inheritance, reflecting patrilineal norms.',
  },
  {
    id: 'glos-3-13',
    chapter: 3,
    term: 'Kinship',
    definition:
      'The system of social relationships based on blood ties (consanguineal) or marriage (affinal). Kinship determines roles, obligations, inheritance, and marriage rules in all societies.',
    category: 'social-institution',
    example:
      'Kinship networks in rural India serve as informal insurance systems, providing support during crises.',
  },
  {
    id: 'glos-3-14',
    chapter: 3,
    term: 'Consanguineal',
    definition:
      'Kinship relations based on blood or biological descent — parents, siblings, grandparents, uncles, and aunts. These form the core of most Indian family and kinship systems.',
    category: 'social-institution',
    example:
      'Consanguineous marriages are preferred in South Indian communities to keep property and kinship ties intact.',
  },
  {
    id: 'glos-3-15',
    chapter: 3,
    term: 'Affinal',
    definition:
      'Kinship relations established through marriage — in-laws, spouse\'s relatives. In Indian society, affinal ties play a crucial role in expanding social networks and strategic alliances.',
    category: 'social-institution',
    example:
      'Arranged marriages in India are often strategic alliances between families, strengthening affinal networks.',
  },
  {
    id: 'glos-3-16',
    chapter: 3,
    term: 'Exogamy',
    definition:
      'The rule that requires marriage outside one\'s own group — clan, gotra, or village. It prevents inbreeding and expands inter-group alliances.',
    category: 'social-institution',
    example:
      'Hindu gotra exogamy forbids marriage between individuals sharing the same patrilineal clan name.',
  },
  {
    id: 'glos-3-17',
    chapter: 3,
    term: 'Endogamy',
    definition:
      'The rule that requires marriage within one\'s own group — caste, sub-caste, or community. Caste endogamy is a fundamental feature of the Indian caste system.',
    category: 'social-institution',
    example:
      'Matrimonial advertisements specifying caste, sub-caste, and community preferences reflect endogamous norms.',
  },
  {
    id: 'glos-3-18',
    chapter: 3,
    term: 'Panchayati Raj',
    definition:
      'A three-tier system of local self-governance in rural India, comprising Gram Panchayat, Panchayat Samiti, and Zila Parishad. It decentralises power to grassroots democratic institutions.',
    category: 'social-institution',
    example:
      'Over 3 million elected representatives, including a significant number of women, serve in Panchayati Raj Institutions.',
  },
  {
    id: 'glos-3-19',
    chapter: 3,
    term: '73rd Amendment',
    definition:
      'The 73rd Constitutional Amendment Act (1992) constitutionally mandated Panchayati Raj institutions, with provisions for reservation of seats for SC, ST, and women, and regular elections.',
    category: 'social-institution',
    example:
      'One-third reservation for women in Panchayats led to over 1.4 million women elected to local governance positions.',
  },
  {
    id: 'glos-3-20',
    chapter: 3,
    term: 'Dominant Caste',
    definition:
      'A concept by M.N. Srinivas referring to a caste that is numerically large, economically prosperous, and politically powerful in a local area, wielding influence over other castes.',
    category: 'social-institution',
    example:
      'The Jats of western UP and Haryana, the Marathas of Maharashtra, and the Patidars of Gujarat function as dominant castes in their regions.',
  },

  // Chapter 5: IS Ch5 — Social Inequality and Exclusion
  {
    id: 'glos-5-1',
    chapter: 5,
    term: 'Social Stratification',
    definition:
      'The hierarchical arrangement of individuals into different layers or strata based on wealth, power, status, and access to resources. India\'s stratification is uniquely shaped by caste, class, gender, and region.',
    category: 'inequality',
    example:
      'The stark contrast between urban elites in gated communities and slum dwellers without basic sanitation.',
  },
  {
    id: 'glos-5-2',
    chapter: 5,
    term: 'Social Inequality',
    definition:
      'The unequal distribution of resources, opportunities, and privileges among different groups in a society. In India, inequality is structured through caste, class, gender, and regional disparities.',
    category: 'inequality',
    example:
      'The top 10% of India\'s population holds 77% of the national wealth, while the bottom 50% owns just 3%.',
  },
  {
    id: 'glos-5-3',
    chapter: 5,
    term: 'Economic Capital',
    definition:
      'Material and financial resources — income, property, wealth — that can be converted into economic advantage. Pierre Bourdieu identified it as one of the key forms of capital driving social inequality.',
    category: 'inequality',
    example:
      'Access to quality education and healthcare is heavily determined by a family\'s economic capital.',
  },
  {
    id: 'glos-5-4',
    chapter: 5,
    term: 'Social Capital',
    definition:
      'The networks of relationships, trust, and reciprocity that enable individuals to access resources and opportunities. It operates through community connections, family ties, and institutional memberships.',
    category: 'inequality',
    example:
      'Caste networks in urban markets help members of particular communities secure employment and business contracts.',
  },
  {
    id: 'glos-5-5',
    chapter: 5,
    term: 'Cultural Capital',
    definition:
      'Knowledge, skills, education, and cultural competencies that confer social advantage. Bourdieu argued that cultural capital reproduces class inequality through educational and social institutions.',
    category: 'inequality',
    example:
      'Proficiency in English and familiarity with Western cultural norms function as cultural capital in India\'s job market.',
  },
  {
    id: 'glos-5-6',
    chapter: 5,
    term: 'Prejudice',
    definition:
      'A preconceived opinion or attitude, usually negative, towards an individual or group based on perceived characteristics like caste, religion, gender, or ethnicity. It often operates below conscious awareness.',
    category: 'inequality',
    example:
      'Assuming that a person from a lower caste is less intelligent or capable reflects caste-based prejudice.',
  },
  {
    id: 'glos-5-7',
    chapter: 5,
    term: 'Stereotype',
    definition:
      'A fixed, oversimplified belief about a particular group of people. Stereotypes ignore individual variation and reinforce discriminatory attitudes and practices.',
    category: 'inequality',
    example:
      'The stereotype that northeastern Indians are "foreign" or "Chinese" undermines their Indian identity and belonging.',
  },
  {
    id: 'glos-5-8',
    chapter: 5,
    term: 'Discrimination',
    definition:
      'Unjust or prejudicial treatment of individuals or groups based on characteristics like caste, religion, gender, or race. Discrimination translates prejudice into unequal outcomes in employment, education, and public life.',
    category: 'inequality',
    example:
      'Denying housing to Dalit families in urban neighbourhoods is a form of caste discrimination.',
  },
  {
    id: 'glos-5-9',
    chapter: 5,
    term: 'Social Exclusion',
    definition:
      'The process by which certain groups are systematically denied access to resources, rights, and opportunities available to others. It operates through economic marginalisation, cultural stigmatisation, and political powerlessness.',
    category: 'inequality',
    example:
      'Manual scavengers face social exclusion through occupation-based stigma, economic deprivation, and limited mobility.',
  },
  {
    id: 'glos-5-10',
    chapter: 5,
    term: 'Untouchability',
    definition:
      'The practice of social segregation and discrimination against Dalits (formerly called "untouchables") based on notions of ritual purity and pollution. Abolished by Article 17 of the Indian Constitution but persists in practice.',
    category: 'inequality',
    example:
      'Dalits in some villages are still denied entry to temples, shared water sources, and upper-caste residential areas.',
  },
  {
    id: 'glos-5-11',
    chapter: 5,
    term: 'OBC',
    definition:
      'Other Backward Classes — a constitutional category of socially and educationally disadvantaged castes that are not Scheduled Castes or Scheduled Tribes. They are entitled to reservation in education and government employment.',
    category: 'inequality',
    example:
      'The Yadav, Kurmi, and Jatav communities are among the largest OBC groups in India.',
  },
  {
    id: 'glos-5-12',
    chapter: 5,
    term: 'Mandal Commission',
    definition:
      'The Second Backward Classes Commission (1979), chaired by B.P. Mandal, recommended 27% reservation for OBCs in government services and educational institutions. Its implementation in 1990 triggered massive political and social upheaval.',
    category: 'inequality',
    example:
      'The Mandal Commission recommendations led to self-immolation protests by upper-caste students and transformed Indian coalition politics.',
  },
  {
    id: 'glos-5-13',
    chapter: 5,
    term: 'Adivasi',
    definition:
      'An indigenous or tribal community, literally "original inhabitant." Adivasis have distinct languages, cultures, and territorial identities, and have historically faced displacement, exploitation, and marginalisation.',
    category: 'inequality',
    example:
      'The displacement of Adivasi communities for dam construction and mining projects in Jharkhand and Chhattisgarh.',
  },
  {
    id: 'glos-5-14',
    chapter: 5,
    term: 'Reservation',
    definition:
      'The constitutional policy of affirmative action reserving seats in education, government employment, and legislatures for historically marginalised communities — SC, ST, and OBC — to ensure equality of opportunity.',
    category: 'inequality',
    example:
      '15% reservation for SCs and 7.5% for STs in central educational institutions under the Indian Constitution.',
  },
  {
    id: 'glos-5-15',
    chapter: 5,
    term: 'Life Chances',
    definition:
      'A concept by Max Weber referring to the opportunities available to individuals to improve their quality of life — including health, education, income, and social participation. Unequal life chances reflect structural inequality.',
    category: 'inequality',
    example:
      'A child born in a Dalit household in rural Bihar has drastically lower life chances than one born in an upper-caste urban family.',
  },
  {
    id: 'glos-5-16',
    chapter: 5,
    term: 'Egalitarian',
    definition:
      'A society or system that believes in or strives for equality among all people, particularly in terms of rights, opportunities, and social status. Egalitarian ideals underpin constitutional democracy and social justice movements.',
    category: 'inequality',
    example:
      'The Indian Constitution\'s Preamble declares India a sovereign, socialist, secular, democratic republic committed to justice and equality.',
  },

  // Chapter 6: IS Ch6 — Cultural Diversity
  {
    id: 'glos-6-1',
    chapter: 6,
    term: 'Cultural Diversity',
    definition:
      'The coexistence of distinct cultural groups — defined by language, religion, ethnicity, and traditions — within a society. India is one of the most culturally diverse nations in the world.',
    category: 'social-change',
    example:
      'India\'s 22 scheduled languages, hundreds of dialects, and multiple religious traditions reflect profound cultural diversity.',
  },
  {
    id: 'glos-6-2',
    chapter: 6,
    term: 'Communalism',
    definition:
      'The exploitation of religious identity for political mobilisation, leading to social conflict. It manifests as competitive majoritarianism and threatens the secular fabric of a plural society.',
    category: 'social-institution',
    example:
      'The Partition of 1947 and recurring communal riots in Indian cities reflect communal tensions.',
  },
  {
    id: 'glos-6-3',
    chapter: 6,
    term: 'Regionalism',
    definition:
      'The assertion of regional identity and interests, sometimes leading to demands for separate states or autonomy. It arises from linguistic, ethnic, and economic disparities between regions.',
    category: 'social-change',
    example:
      'The demand for a separate Telangana state, carved out of Andhra Pradesh in 2014, was driven by regional economic grievances.',
  },
  {
    id: 'glos-6-4',
    chapter: 6,
    term: 'Linguistic Chauvinism',
    definition:
      'An aggressive or优越感 towards one\'s own language, often accompanied by hostility towards other languages. It can lead to imposition of one language and suppression of linguistic minorities.',
    category: 'social-change',
    example:
      'The anti-Hindi agitation in Tamil Nadu (1965) resisted the imposition of Hindi as the sole national language.',
  },
  {
    id: 'glos-6-5',
    chapter: 6,
    term: 'Secularism',
    definition:
      'In the Indian context, not the strict separation of religion and state, but equal respect and non-interference of the state in all religious practices (Sarva Dharma Sama Bhava). It is enshrined in the Preamble.',
    category: 'social-institution',
    example:
      'The Indian state\'s refusal to adopt a national religion while maintaining personal law systems for different communities.',
  },
  {
    id: 'glos-6-6',
    chapter: 6,
    term: 'Multilingualism',
    definition:
      'The coexistence of multiple languages in a society, where individuals and communities use more than one language for different purposes. India\'s linguistic landscape is inherently multilingual.',
    category: 'social-change',
    example:
      'A typical urban Indian switches between a regional language at home, Hindi in the marketplace, and English in professional settings.',
  },
  {
    id: 'glos-6-7',
    chapter: 6,
    term: 'Federalism',
    definition:
      'A system of governance in which power is divided between a central authority and constituent political units (states). India follows a quasi-federal structure with a strong centre and constitutionally defined state powers.',
    category: 'social-institution',
    example:
      'Education is on the Concurrent List, allowing both the Centre and states to legislate on it.',
  },
  {
    id: 'glos-6-8',
    chapter: 6,
    term: 'National Integration',
    definition:
      'The process of fostering unity and solidarity among diverse communities within a nation, transcending regional, linguistic, religious, and caste identities to strengthen the national fabric.',
    category: 'social-change',
    example:
      'The National Integration Council was established in 1961 to address communal tensions and promote national cohesion.',
  },
  {
    id: 'glos-6-9',
    chapter: 6,
    term: 'Syncretism',
    definition:
      'The blending of different cultural, religious, or social traditions to create new hybrid forms. Indian civilisation is marked by centuries of syncretism between Hindu, Islamic, Buddhist, and local traditions.',
    category: 'social-change',
    example:
      'The architectural and culinary traditions of Lucknow, blending Mughal and Awadhi cultures.',
  },
  {
    id: 'glos-6-10',
    chapter: 6,
    term: 'Uniform Civil Code',
    definition:
      'A proposal to replace personal laws based on religious scriptures with a common civil code for all citizens, irrespective of religion. It is enshrined as a Directive Principle in Article 44 of the Constitution.',
    category: 'social-institution',
    example:
      'Goa is the only Indian state that follows a uniform civil code, inherited from Portuguese civil law.',
  },
  {
    id: 'glos-6-11',
    chapter: 6,
    term: 'Minority',
    definition:
      'A group distinguished from the majority by religion, language, or ethnicity, often requiring constitutional protection. In India, minorities include Muslims, Christians, Sikhs, Buddhists, Jains, and Parsis.',
    category: 'social-institution',
    example:
      'The National Commission for Minorities safeguards the rights and interests of minority communities.',
  },
  {
    id: 'glos-6-12',
    chapter: 6,
    term: 'Nation',
    definition:
      'A large-scale community bound by shared history, culture, territory, and political aspirations. Unlike a state, a nation is a cultural and psychological entity — a sense of collective belonging.',
    category: 'social-change',
    example:
      'India as a civilisational nation predates the modern nation-state, with a continuous cultural consciousness spanning millennia.',
  },
  {
    id: 'glos-6-13',
    chapter: 6,
    term: 'Nation-State',
    definition:
      'A political entity where the boundaries of a state coincide with those of a nation. India is a multi-national nation-state, housing many linguistic and cultural nations within a single political framework.',
    category: 'social-change',
    example:
      'The drawing of state boundaries along linguistic lines after independence attempted to align state and nation within India.',
  },
  {
    id: 'glos-6-14',
    chapter: 6,
    term: 'Identity Politics',
    definition:
      'Political mobilisation based on shared identity — caste, religion, language, or ethnicity — to advance the interests of a particular group. It can both empower marginalised communities and deepen social divisions.',
    category: 'social-change',
    example:
      'The Dalit Panthers movement in Maharashtra mobilised urban Dalit youth around caste identity and social justice.',
  },
  {
    id: 'glos-6-15',
    chapter: 6,
    term: 'Sanskritisation',
    definition:
      'M.N. Srinivas\'s concept describing how lower castes adopt upper-caste practices to claim higher ritual status. It is a form of cultural mobility within — rather than against — the caste hierarchy.',
    category: 'social-change',
    example:
      'The forgotten Maratha sub-castes claiming Kshatriya status through the adoption of vegetarianism and Vedic rituals.',
  },
];
