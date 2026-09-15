export interface SocioRevisionNote {
  id: number;
  chapter: number;
  title: string;
  summary: string;
  keyConcepts: { term: string; definition: string }[];
  keyThinkers: { name: string; contribution: string }[];
  importantFacts: string[];
  examQuestions: { question: string; answer: string }[];
  examTips: string[];
}

export const socioRevisionNotes: SocioRevisionNote[] = [
  // ================================================================
  // Ch1: Introducing Indian Society
  // ================================================================
  {
    id: 1,
    chapter: 1,
    title: 'Introducing Indian Society',
    summary:
      'Sociology is the scientific study of society and social relationships. Indian Society is unique because colonialism unified it politically for the first time. Community identity in India is ascriptive (based on birth). C. Wright Mills linked personal troubles to social issues. Self-reflexivity is key to sociological thinking, requiring us to question our own assumptions about the world.',
    keyConcepts: [
      {
        term: 'Society',
        definition:
          'A group of people who share a common culture, territory, and social relationships, living together in an organized way.',
      },
      {
        term: 'Social Structure',
        definition:
          'The relatively stable pattern of social relationships that forms the framework of a society, including institutions and social positions.',
      },
      {
        term: 'Community Identity',
        definition:
          'An identity derived from membership in a group based on birth, kinship, religion, language, caste, or shared history.',
      },
      {
        term: 'Colonialism',
        definition:
          'A practice of acquiring control over another country and exploiting it politically and economically, practiced by European powers in India from the 18th century.',
      },
      {
        term: 'Nationalism',
        definition:
          'A sense of belonging to a nation, combined with loyalty and devotion to its interests and culture.',
      },
      {
        term: 'Orientalism',
        definition:
          'A way of thinking that constructs and represents "the East" (especially Asia) as inferior and inferior, justifying Western dominance.',
      },
      {
        term: 'Occidentalism',
        definition:
          'The representation of the West (Occident) in terms that are simplified and stereotypical, often as a mirror image of Orientalism.',
      },
      {
        term: 'Self-reflexivity',
        definition:
          'The ability to reflect upon one\'s own assumptions, biases, and social position, crucial for sociological analysis.',
      },
    ],
    keyThinkers: [
      {
        name: 'C. Wright Mills',
        contribution:
          'Coined the term "sociological imagination" — the ability to connect personal troubles (biography) with public issues (history and social structure).',
      },
      {
        name: 'Edward Said',
        contribution:
          'Analyzed "Orientalism" — how the West constructed and misrepresented the East to justify colonial domination and cultural superiority.',
      },
    ],
    importantFacts: [
      'Urban middle classes were the prime carriers of nationalism in India.',
      'Colonialism unified India politically for the first time through British administrative control.',
      'Society performs 4 key functions: recruitment of members, socialization, production/distribution of goods, and maintaining social order.',
      'Indian Society is characterized by unity in diversity with multiple coexisting identities.',
    ],
    examQuestions: [
      {
        question:
          'How does colonialism help us understand the structure of Indian Society?',
        answer:
          'Colonialism unified India politically for the first time, bringing diverse regions under one administration. It introduced new social categories, changed land revenue systems, rigidified caste through census, and created new classes. The colonial experience also gave rise to nationalism, bringing people together against foreign rule.',
      },
      {
        question:
          'Explain the concept of "sociological imagination" given by C. Wright Mills.',
        answer:
          'C. Wright Mills described sociological imagination as the ability to see the connection between personal troubles and public issues. For example, unemployment of an individual is a personal trouble, but when millions are unemployed it becomes a public issue requiring structural analysis. It helps link biography with history and social structure.',
      },
      {
        question:
          'What is the difference between community identity and individual identity?',
        answer:
          'Community identity is ascriptive — based on birth, kinship, religion, caste, or shared history that one inherits. Individual identity is achieved through personal choices, education, career, and life experiences. Community identities are collective (shared with others), while individual identity is unique to a person.',
      },
    ],
    examTips: [
      'Understand the difference between ascribed and achieved identities with examples.',
      'Be ready to define Orientalism with Edward Said\'s perspective.',
      'Practice connecting personal experiences to larger social structures using sociological imagination.',
      'Focus on how colonialism reshaped Indian society politically, economically, and socially.',
    ],
  },

  // ================================================================
  // Ch2: Demographic Structure
  // ================================================================
  {
    id: 2,
    chapter: 2,
    title: 'Demographic Structure of Indian Society',
    summary:
      'Demography is the scientific study of population characteristics. India\'s population grew slowly before independence, rapidly between 1961-1981, and has been declining since 1991. Key indicators include birth rate, death rate, total fertility rate, infant mortality rate, and sex ratio. Demographic transition theory links population change to economic development. Malthus predicted population outstripping food supply. India currently has a demographic dividend opportunity with an average age of 29 years.',
    keyConcepts: [
      {
        term: 'Demography',
        definition:
          'The scientific study of population — its size, composition, distribution, and changes over time through births, deaths, and migration.',
      },
      {
        term: 'Birth Rate',
        definition:
          'Number of live births per 1,000 people in a year. Indicates population growth pressure.',
      },
      {
        term: 'Death Rate',
        definition:
          'Number of deaths per 1,000 people in a year. Declining death rates with stable birth rates lead to population growth.',
      },
      {
        term: 'Total Fertility Rate (TFR)',
        definition:
          'Average number of children a woman would have during her reproductive years. Replacement level is 2.1.',
      },
      {
        term: 'Infant Mortality Rate (IMR)',
        definition:
          'Number of deaths of infants (below 1 year) per 1,000 live births. Key indicator of healthcare quality.',
      },
      {
        term: 'Sex Ratio',
        definition:
          'Number of females per 1,000 males in the population. India\'s sex ratio has been declining historically.',
      },
      {
        term: 'Demographic Transition',
        definition:
          'Theory that population changes in stages as a country develops — from high birth/death rates to low birth/death rates through economic modernization.',
      },
      {
        term: 'Demographic Dividend',
        definition:
          'Economic growth potential from a young working-age population when dependency ratio is low. India\'s average age is 29 years.',
      },
    ],
    keyThinkers: [
      {
        name: 'Thomas Malthus',
        contribution:
          'Predicted that population grows geometrically (2, 4, 8, 16) while food supply grows arithmetically (1, 2, 3, 4), leading to famine and misery. Advocated "moral restraint."',
      },
      {
        name: 'Herbert Risley',
        contribution:
          'Conducted the 1901 census and used anthropometric measurements to rank castes in a hierarchy based on racial characteristics.',
      },
      {
        name: 'Amartya Sen',
        contribution:
          'Argued that famine is not caused by food shortage but by "entitlement failure" — people lack the means to buy available food due to poverty and inequality.',
      },
    ],
    importantFacts: [
      'India experienced negative population growth only once during 1911-1921 due to epidemics, famines, and World War I.',
      'The proportion of children (under 15) declined from 42% (1971) to 29% (2011), showing falling fertility.',
      'Replacement level fertility is 2.1 — the TFR at which population stabilizes over time.',
      'National Family Planning Programme was launched in 1952, the first in the world.',
      'India\'s sex ratio has been declining, with 943 females per 1,000 males in 2001.',
      'India has a demographic dividend opportunity with average age of 29 years, potentially boosting economic growth.',
    ],
    examQuestions: [
      {
        question:
          'Explain the concept of demographic transition and its relevance to India.',
        answer:
          'Demographic transition theory shows how population changes in stages as a country develops. Stage 1: high birth and death rates (stable population). Stage 2: death rates fall due to healthcare/food, but birth rates remain high (rapid growth). Stage 3: birth rates begin to fall (growth slows). Stage 4: low birth and death rates (stable). India is in Stage 3 with declining fertility rates. This explains India\'s population growth pattern — slow before independence, rapid 1961-81, declining since 1991.',
      },
      {
        question:
          'What are the key demographic indicators used to study population? Explain any three.',
        answer:
          'Key indicators include: (1) Birth Rate — live births per 1,000 population per year, indicating growth pressure. (2) Death Rate — deaths per 1,000 population per year, reflecting healthcare quality. (3) Total Fertility Rate — average children per woman, with replacement level at 2.1. Other indicators: IMR, MMR, sex ratio, literacy rate, and dependency ratio.',
      },
      {
        question:
          'How did Malthus\'s population theory influence demographic thinking?',
        answer:
          'Malthus argued population grows geometrically while food grows arithmetically, leading to inevitable crisis. Though his predictions were largely wrong due to technological advances, his theory stimulated demographic studies, led to family planning movements, and highlighted the relationship between population and resources. Amartya Sen later challenged this by showing famine results from entitlement failure, not just food shortage.',
      },
      {
        question:
          'What is demographic dividend and how can India benefit from it?',
        answer:
          'Demographic dividend is the economic growth potential when a country has a large working-age population relative to dependents (children and elderly). India with average age 29 has this advantage. To benefit, India needs: quality education, skill development, job creation, and healthcare. If properly harnessed, this young population can drive economic growth for decades, as happened in East Asian economies.',
      },
    ],
    examTips: [
      'Memorize key indicators with their formulas: BR, DR, TFR, IMR, MMR, sex ratio.',
      'Know India\'s population growth phases: slow (pre-1961), rapid (1961-81), declining (post-1991).',
      'Be ready to compare Malthus\'s pessimistic view with Amartya Sen\'s entitlement approach.',
      'Understand demographic dividend requires investment in education and health to be realized.',
    ],
  },

  // ================================================================
  // Ch3: Social Institutions
  // ================================================================
  {
    id: 3,
    chapter: 3,
    title: 'Social Institutions — Family, Kinship, and Caste',
    summary:
      'Family, kinship, and caste are key social institutions that shape Indian society. The caste system operates on two principles: separation and hierarchy, based on concepts of purity and pollution. Colonial census rigidified caste identities by classifying and ranking them. Tribal communities (8.2% of population) face unique challenges of isolation and exploitation. Matriliny is found in Meghalaya and Kerala, but matriarchy is only a theoretical concept.',
    keyConcepts: [
      {
        term: 'Endogamy',
        definition:
          'The practice of marrying within one\'s own caste, community, or group. Caste is strictly endogamous.',
      },
      {
        term: 'Exogamy',
        definition:
          'The practice of marrying outside one\'s gotra (clan) to prevent inbreeding and expand kinship networks.',
      },
      {
        term: 'Gotra',
        definition:
          'A clan or lineage system, usually tracing descent from a common ancestor. Members of the same gotra cannot marry each other.',
      },
      {
        term: 'Matriliny',
        definition:
          'A system where descent and inheritance are traced through the mother\'s line. Found in Meghalaya (Khasi, Garo) and parts of Kerala (Nair).',
      },
      {
        term: 'Patrilineal',
        definition:
          'A system where descent and inheritance are traced through the father\'s line. Most common in India.',
      },
      {
        term: 'Purity and Pollution',
        definition:
          'The ideological basis of caste hierarchy — upper castes claim ritual purity while lower castes are considered polluted. This justifies social segregation.',
      },
      {
        term: 'Nuclear Family',
        definition:
          'A family unit consisting of parents and their children only, living independently.',
      },
      {
        term: 'Joint Family',
        definition:
          'An extended family system where multiple generations live together, sharing resources, property, and decisions under the authority of the eldest male member.',
      },
    ],
    keyThinkers: [
      {
        name: 'Herbert Risley',
        contribution:
          'Used the 1901 census to rank castes in a hierarchical order based on anthropometric measurements, rigidifying caste identities through colonial administration.',
      },
    ],
    importantFacts: [
      'Tribals constitute 8.2% of India\'s population (approximately 85 million in 2001 Census).',
      'Gonds and Bhils are the largest tribal groups in India.',
      'Colonial census made caste identity rigid by classifying, counting, and ranking castes in a hierarchy.',
      'Land revenue systems under colonialism recognized and strengthened upper-caste rights over land.',
      'Caste rules include: birth-based membership, endogamy, hereditary occupation, and hierarchy.',
      'Matriliny exists in Meghalaya (Khasi, Garo tribes) and Kerala (Nair community), but matriarchy is theoretical only.',
    ],
    examQuestions: [
      {
        question:
          'How did colonialism affect the caste system in India?',
        answer:
          'Colonialism affected caste in several ways: (1) Census classification rigidified caste identities by counting and ranking them. (2) Land revenue systems recognized upper-caste land rights. (3) Legal codes codified caste customs. (4) Colonial administration created new categories and hierarchies. (5) Western education and urbanization challenged traditional caste occupations but also created new forms of caste consciousness.',
      },
      {
        question:
          'Distinguish between matriliny and matriarchy with examples.',
        answer:
          'Matriliny is a system of descent through the mother\'s line — property and lineage are traced through women. Example: Khasi tribe in Meghalaya, Nair community in Kerala. Matriarchy is a system where women hold primary power and authority — this is largely theoretical and has never existed in practice. Matriliny does not mean women rule; it means descent is traced through them, but men may still hold authority.',
      },
      {
        question:
          'What are the characteristics of the caste system? Explain with examples.',
        answer:
          'Caste system characteristics: (1) Birth-based membership — one is born into a caste. (2) Endogamy — marriage within one\'s caste. (3) Hereditary occupation — occupation determined by caste (e.g., Brahmins as priests, Shudras as laborers). (4) Hierarchy — castes ranked from pure to impure. (5) Separation — physical and social segregation of castes. (6) Purity-pollution ideology — justifies hierarchy through ritual concepts.',
      },
    ],
    examTips: [
      'Know the difference between matriliny (descent through mother) and matriarchy (rule by women).',
      'Understand how colonial census transformed caste from fluid to rigid identity.',
      'Be ready to discuss both positive functions (social order) and negative aspects (discrimination) of social institutions.',
      'Memorize facts about tribal population (8.2%, 85 million, Gonds/Bhils largest).',
    ],
  },

  // ================================================================
  // Ch4: Market as Social Institution
  // ================================================================
  {
    id: 4,
    chapter: 4,
    title: 'Market as a Social Institution',
    summary:
      'Markets are not just economic spaces but social institutions shaped by caste, class, and kinship networks. Adam Smith\'s "invisible hand" theory suggests markets self-regulate. Marx analyzed surplus value exploitation under capitalism. Weber linked market position to status symbols. Weekly haats serve both social and economic functions in rural India. Chettiars used caste networks for banking across Southeast Asia. Liberalisation minimized state control over markets.',
    keyConcepts: [
      {
        term: 'Invisible Hand',
        definition:
          'Adam Smith\'s concept that individuals pursuing self-interest in a free market unintentionally promote the good of society as a whole.',
      },
      {
        term: 'Social Embeddedness',
        definition:
          'The idea that economic activities are embedded within social relationships, cultural norms, and institutions — markets are not separate from society.',
      },
      {
        term: 'Commoditisation',
        definition:
          'The process of treating goods, services, or even people as commodities that can be bought and sold in the market.',
      },
      {
        term: 'Liberalisation',
        definition:
          'Economic reforms that reduce government control, open markets to competition, and allow private enterprise greater freedom.',
      },
      {
        term: 'Globalisation',
        definition:
          'The increasing interconnectedness of economies, cultures, and societies through trade, technology, and migration across national boundaries.',
      },
      {
        term: 'Surplus Value',
        definition:
          'Marx\'s concept of the difference between the value workers produce and the wages they receive — the surplus appropriated by capitalists as profit.',
      },
      {
        term: 'Weekly Haat',
        definition:
          'Periodic rural markets where villagers buy and sell goods, exchange information, and socialize — combining economic and social functions.',
      },
    ],
    keyThinkers: [
      {
        name: 'Adam Smith',
        contribution:
          'Proposed the "invisible hand" theory — free markets self-regulate through competition, and individual self-interest benefits society. Advocated minimal government intervention.',
      },
      {
        name: 'Karl Marx',
        contribution:
          'Analyzed capitalism as a system of exploitation based on surplus value — capitalists extract profit from workers\' unpaid labor. Predicted capitalism\'s eventual overthrow.',
      },
      {
        name: 'Max Weber',
        contribution:
          'Linked market position to status — economic class, social status, and political power are interrelated but distinct dimensions of social stratification.',
      },
    ],
    importantFacts: [
      'Chettiars (Nadars) from Tamil Nadu controlled banking and trade across Southeast Asia using caste networks.',
      'Marwaris (from Rajasthan) became the most widespread trading community in India.',
      'India was a major supplier of goods (textiles, spices) to the world before colonialism disrupted trade.',
      'Weekly haats serve dual functions — economic exchange and social interaction in rural areas.',
      'Markets in India are shaped by caste (trading communities), kinship (family businesses), and class (corporate sectors).',
    ],
    examQuestions: [
      {
        question:
          'How are markets socially embedded? Explain with Indian examples.',
        answer:
          'Markets in India are not purely economic spaces but shaped by social relationships. Examples: (1) Caste networks — Chettiars used caste ties for banking across SE Asia; Marwaris dominate specific trades. (2) Kinship — family businesses run on trust and relationships. (3) Weekly haats combine economic exchange with social interaction. (4) Trust based on community ties rather than legal contracts. Markets reflect social hierarchies and cultural norms.',
      },
      {
        question:
          'Compare Adam Smith\'s and Karl Marx\'s views on markets and capitalism.',
        answer:
          'Smith: Free markets self-regulate through the "invisible hand." Competition benefits consumers. Individual self-interest leads to collective good. Government should minimize intervention. Marx: Markets are arenas of exploitation. Capitalists extract surplus value from workers\' labor. Competition leads to concentration of wealth. Capitalism will eventually be overthrown by workers. Smith sees markets as beneficial; Marx sees them as exploitative.',
      },
      {
        question:
          'What role do caste and kinship play in Indian markets?',
        answer:
          'Caste and kinship shape Indian markets in multiple ways: (1) Trading castes (Chettiars, Marwaris, Baniyas) dominate specific market sectors. (2) Kinship networks provide trust and credit for business. (3) Caste panchayats resolve commercial disputes. (4) Endogamous marriage alliances strengthen business partnerships. (5) Weekly haats organized by caste/community. Even in modern corporate sector, caste networks influence business formation and growth.',
      },
    ],
    examTips: [
      'Understand the key differences between Smith (free market), Marx (exploitation), and Weber (status).',
      'Be ready to give examples of how caste influences modern markets and business.',
      'Know the functions of weekly haats — both economic and social.',
      'Discuss how liberalisation changed India\'s market structure post-1991.',
    ],
  },

  // ================================================================
  // Ch5: Structural Change
  // ================================================================
  {
    id: 5,
    chapter: 5,
    title: 'Structural Change',
    summary:
      'Colonialism fundamentally altered India\'s political, economic, and social structure. British capitalism drove every policy decision. Deindustrialisation destroyed Indian manufacturing industries as raw materials were exported and finished goods imported. New colonial cities like Bombay, Madras, and Kolkata emerged as administrative and commercial centres, while old indigenous centres like Surat and Masulipatnam declined. Kolkata grew from three villages in 1690 to become a major colonial metropolis.',
    keyConcepts: [
      {
        term: 'Deindustrialisation',
        definition:
          'The process where India\'s traditional manufacturing industries (especially textiles) were destroyed as they could not compete with machine-made British goods, reducing India to a supplier of raw materials.',
      },
      {
        term: 'Structural Change',
        definition:
          'Fundamental transformation in the organization of society — its economy, polity, social relations, and culture — driven by colonial capitalism.',
      },
      {
        term: 'Colonial City',
        definition:
          'New urban centres built by colonial administration (Bombay, Madras, Kolkata) serving as nodes connecting the economic centre (Britain) to the periphery (India).',
      },
      {
        term: 'Bourgeoisie',
        definition:
          'Marx\'s term for the capitalist class that owns the means of production — in colonial India, this included both British traders and Indian merchants.',
      },
      {
        term: 'Proletariat',
        definition:
          'Marx\'s term for the working class that sells its labor to survive — in colonial India, this included factory workers, plantation laborers, and artisans.',
      },
    ],
    keyThinkers: [
      {
        name: 'Karl Marx',
        contribution:
          'Analyzed how capitalism transforms social structures. His concepts of bourgeoisie, proletariat, and surplus value explain how colonial capitalism restructured Indian economy and society.',
      },
      {
        name: 'Max Weber',
        contribution:
          'Studied bureaucracy as a key feature of modern rational-legal authority. Colonial administration introduced bureaucratic structures that transformed Indian governance.',
      },
    ],
    importantFacts: [
      'Kolkata was founded by Job Charnock in 1690, growing from three villages to a major colonial city.',
      'Fort William was built in 1698 as the British administrative headquarters in Bengal.',
      'Deindustrialisation occurred because Indian handloom weavers could not compete with Manchester\'s machine-made textiles.',
      'Colonial cities served as administrative nodes connecting the economic centre (Britain) to the periphery (India).',
      'Old trading centres like Surat and Masulipatnam declined as colonial cities like Bombay and Madras rose.',
      'British capitalism drove every colonial policy — from land revenue to trade regulations.',
    ],
    examQuestions: [
      {
        question:
          'How did colonialism lead to deindustrialisation in India?',
        answer:
          'Deindustrialisation occurred through several mechanisms: (1) British policy flooded India with cheap machine-made textiles from Manchester, destroying handloom industries. (2) Raw materials like cotton were exported to Britain instead of being used in India. (3) Tariff policies protected British goods while Indian exports faced barriers. (4) Traditional artisans lost livelihoods and became agricultural laborers. (5) India was reduced from exporter of finished goods to supplier of raw materials.',
      },
      {
        question:
          'Explain the emergence of colonial cities and their impact on Indian society.',
        answer:
          'Colonial cities (Bombay, Madras, Kolkata) emerged as: (1) Administrative centres for British governance. (2) Ports for raw material export and finished goods import. (3) Hubs of new employment — clerks, overseers, laborers. (4) Sites of social reform and modern education. (5) Centers of nationalist politics. They displaced old trading centres (Surat, Masulipatnam), created new urban working classes, and introduced Western institutions and ideas.',
      },
      {
        question:
          'What were the major structural changes brought about by colonialism?',
        answer:
          'Major structural changes: (1) Economic — deindustrialisation, new cash crops, commercialization of agriculture. (2) Political — centralized colonial administration, new legal systems. (3) Social — new middle classes, urbanization, new forms of labor. (4) Cultural — Western education, new social reform movements. (5) Administrative — bureaucracy, census, land revenue systems. These fundamentally transformed Indian society from its pre-colonial form.',
      },
    ],
    examTips: [
      'Understand the chain: colonialism → capitalism → deindustrialisation → structural change.',
      'Know the difference between old indigenous centres (Surat, Masulipatnam) and new colonial cities.',
      'Be ready to explain how Kolkata grew from three villages to a colonial metropolis.',
      'Connect structural changes to both economic and social transformations.',
    ],
  },

  // ================================================================
  // Ch6: Cultural Change
  // ================================================================
  {
    id: 6,
    chapter: 6,
    title: 'Cultural Change',
    summary:
      'M.N. Srinivas coined the concepts of sanskritisation, westernisation, and dominant caste. Sanskritisation involves lower castes adopting upper-caste customs to improve their status — it is positional change, not structural. Westernisation reflects 150+ years of British impact on Indian culture. Modernisation prioritizes universal over local. Secularisation of caste means caste groups function as political pressure groups. Social reform movements of the 19th-20th century challenged traditional practices.',
    keyConcepts: [
      {
        term: 'Sanskritisation',
        definition:
          'M.N. Srinivas\'s concept where lower castes adopt upper-caste (Brahminical) customs like vegetarianism, teetotalism, and rituals to improve their social position. It leads to positional change, not structural change.',
      },
      {
        term: 'Westernisation',
        definition:
          'The process of adopting Western cultural traits — technology, institutions, ideology, and lifestyle — resulting from 150+ years of British colonial impact on Indian society.',
      },
      {
        term: 'Dominant Caste',
        definition:
          'M.N. Srinivas\'s concept of a caste that is numerically large, economically powerful, and politically influential in a local area, enjoying a superior ritual position.',
      },
      {
        term: 'Modernisation',
        definition:
          'A process of social change where universalistic values (based on merit and achievement) replace particularistic values (based on birth and ascription).',
      },
      {
        term: 'Secularisation of Caste',
        definition:
          'Rajni Kothari\'s concept where caste loses its ritual significance and functions as a political pressure group for electoral mobilization and resource allocation.',
      },
      {
        term: 'Social Reform Movements',
        definition:
          '19th-20th century movements that challenged caste oppression, gender inequality, and irrational practices — Brahmo Samaj, Arya Samaj, Satyashodhak Samaj.',
      },
    ],
    keyThinkers: [
      {
        name: 'M.N. Srinivas',
        contribution:
          'Coined three key concepts: (1) Sanskritisation — lower castes adopting upper-caste customs for status improvement. (2) Westernisation — impact of Western culture. (3) Dominant Caste — locally powerful caste with numerical, economic, and political strength.',
      },
      {
        name: 'Rajni Kothari',
        contribution:
          'Coined "secularisation of caste" — in modern India, caste has lost its ritual purity-pollution basis and now functions as a political identity for mobilization and bargaining.',
      },
      {
        name: 'Satish Saberwal',
        contribution:
          'Analyzed three aspects of modern change: (1) Movement from ascriptive to achievement-based status. (2) Movement from particularistic to universalistic values. (3) Movement from sacred to secular authority.',
      },
    ],
    importantFacts: [
      'Brahmo Samaj was founded in Bengal by Raja Ram Mohan Roy — challenged Sati, child marriage, idol worship.',
      'Arya Samaj was founded in Punjab by Swami Dayanand Saraswati — promoted Vedic learning, opposed caste discrimination.',
      'Jyotirao Phule started the first school for girls in Pune in 1848 with his wife Savitribai Phule.',
      'Sanskritisation leads to positional change (status improvement) NOT structural change (no change in social hierarchy).',
      'De-sanskritisation occurs in areas where non-Sanskritic dominant castes reject Brahminical customs.',
      'Social reform movements of 19th-20th century were crucial in challenging caste oppression and gender inequality.',
    ],
    examQuestions: [
      {
        question:
          'What is sanskritisation? Explain with examples and its limitations.',
        answer:
          'Sanskritisation (M.N. Srinivas) is when lower castes adopt upper-caste customs to improve status. Examples: (1) Lower castes becoming vegetarian, giving up alcohol. (2) Adopting Brahminical rituals and ceremonies. (3) Claiming Kshatriya status. Limitations: (1) It is positional change, not structural — hierarchy remains. (2) Upper castes may resist or react negatively. (3) Not all groups can sanskritise. (4) It reinforces the idea that upper-caste culture is superior. (5) In some areas, de-sanskritisation occurs where non-Sanskritic castes reject these customs.',
      },
      {
        question:
          'Explain the concept of "secularisation of caste" with examples.',
        answer:
          'Secularisation of caste (Rajni Kothari) means caste has moved from ritual domain to political domain. Caste now functions as: (1) Political pressure group — castes mobilize for electoral gains. (2) Identity for resource allocation — reservation politics. (3) Voting bloc — caste-based party support. (4) Social network — matrimonial, business, professional networks. Example: Mandal Commission politics where OBC identity became a powerful political tool.',
      },
      {
        question:
          'Compare sanskritisation and westernisation as processes of cultural change.',
        answer:
          'Sanskritisation: (1) Adoption of upper-caste Hindu customs. (2) Internal change within Indian society. (3) Positively valued by most. (4) Reinforces traditional hierarchy. Westernisation: (1) Adoption of Western culture and values. (2) External influence from colonialism. (3) Mixed reception — some embrace, some resist. (4) Challenges traditional hierarchy through modern values. Both processes coexist and sometimes conflict in Indian society.',
      },
    ],
    examTips: [
      'Understand that sanskritisation is positional, NOT structural change.',
      'Be ready to give examples of social reform movements and their founders.',
      'Know the difference between ascriptive and achievement-based status.',
      'Understand how caste has become a political tool (secularisation of caste).',
    ],
  },

  // ================================================================
  // Ch7: Constitution and Social Change
  // ================================================================
  {
    id: 7,
    chapter: 7,
    title: 'The Constitution and Social Change',
    summary:
      'The Indian Constitution is an instrument of social change. Fundamental Rights are justiciable (enforceable by courts) while Directive Principles of State Policy are non-justiciable (guidelines for governance). Article 17 abolishes untouchability as a punishable offence. Reservation for SCs, STs, OBCs, and EWS aims at social justice. Dr. Ambedkar feared local elite domination in self-governance. The Basic Structure Doctrine (Kesavananda Bharati, 1973) protects the Constitution\'s core features.',
    keyConcepts: [
      {
        term: 'Fundamental Rights',
        definition:
          'Justiciable rights guaranteed by the Constitution (Part III) — enforceable by courts. Include Right to Equality, Freedom, Against Exploitation, Freedom of Religion, Cultural/Educational, and Constitutional Remedies.',
      },
      {
        term: 'Directive Principles of State Policy',
        definition:
          'Non-justiciable guidelines (Part IV) for the state to follow in governance — welfare state objectives like social justice, adequate livelihood, equal pay, and free education.',
      },
      {
        term: 'Reservation',
        definition:
          'Constitutional provision for affirmative action — reserving seats in education, government jobs, and legislatures for historically oppressed groups (SCs, STs, OBCs, EWS).',
      },
      {
        term: 'Untouchability',
        definition:
          'Social practice of excluding and discriminating against certain castes considered "impure." Article 17 of the Constitution abolishes it as a punishable offence.',
      },
      {
        term: 'Basic Structure Doctrine',
        definition:
          'Legal principle from Kesavananda Bharati case (1973) — Parliament cannot amend the basic structure of the Constitution, protecting its core features like democracy, secularism, and federalism.',
      },
    ],
    keyThinkers: [
      {
        name: 'Dr. B.R. Ambedkar',
        contribution:
          'Chairman of the Drafting Committee of the Constitution. Champion of Dalit rights. Initially opposed local self-government fearing local elite domination. Fought for reservation and social justice.',
      },
      {
        name: 'Mahatma Gandhi',
        contribution:
          'Advocated "gram-swarajya" (village self-rule) — his vision of decentralized democracy was incorporated in Part IX of the Constitution through Panchayati Raj.',
      },
    ],
    importantFacts: [
      'The Constitution of India was adopted on 26 January 1950 (Republic Day).',
      'The 103rd Amendment (2019) introduced 10% reservation for Economically Weaker Sections (EWS).',
      'Article 17 abolishes untouchability — its practice is a punishable offence under the Protection of Civil Rights Act.',
      'Panchayati Raj institutions were NOT in the original Constitution — added later through 73rd Amendment (1992).',
      'Fundamental Rights are enforceable by courts through Article 32 (Supreme Court) and Article 226 (High Courts).',
      'Reservation covers: SCs (15%), STs (7.5%), OBCs (27%), EWS (10%) in central government.',
    ],
    examQuestions: [
      {
        question:
          'How does the Constitution serve as an instrument of social change?',
        answer:
          'The Constitution facilitates social change through: (1) Fundamental Rights guaranteeing equality and prohibiting discrimination. (2) Article 17 abolishing untouchability. (3) Reservation for oppressed groups in education and employment. (4) Directive Principles directing state toward welfare measures. (5) Constitutional amendments enabling progressive reforms. (6) Independent judiciary protecting rights. Dr. Ambedkar envisioned the Constitution as a tool to transform hierarchical society into an egalitarian one.',
      },
      {
        question:
          'Distinguish between Fundamental Rights and Directive Principles.',
        answer:
          'Fundamental Rights (Part III): Justiciable, enforceable by courts, negative rights (state cannot violate), include equality, freedom, against exploitation. Directive Principles (Part IV): Non-justiciable, not enforceable by courts, positive obligations (state should implement), include social welfare goals. FR protect individuals from state overreach; DP guide state policy toward social justice. They are complementary — FR ensure liberty, DP ensure equality and welfare.',
      },
      {
        question:
          'Explain the significance of Article 17 and reservation policy.',
        answer:
          'Article 17 abolishes untouchability — a revolutionary provision against centuries of caste oppression. Its practice is a punishable offence. Reservation policy (Articles 15(4), 16(4)) compensates historically oppressed groups: SCs (15%), STs (7.5%), OBCs (27%), EWS (10%). Together, they aim to create a level playing field. However, debates continue about creamy layer, sub-categorization, and whether reservation should be time-bound.',
      },
      {
        question:
          'What was Dr. Ambedkar\'s concern about local self-government?',
        answer:
          'Dr. Ambedkar feared that in a caste-ridden society, local self-government would be dominated by local elites (upper castes), perpetuating oppression at the grassroots level. He preferred centralized institutions with constitutional safeguards for oppressed groups. This tension between democratic decentralization and social justice remains relevant in Panchayati Raj implementation.',
      },
    ],
    examTips: [
      'Know the difference between justiciable (FR) and non-justiciable (DP) rights.',
      'Memorize Article 17 (untouchability) and reservation percentages.',
      'Understand the Basic Structure Doctrine from Kesavananda Bharati case (1973).',
      'Be ready to discuss both achievements and limitations of constitutional social change.',
    ],
  },

  // ================================================================
  // Ch8: Rural Society
  // ================================================================
  {
    id: 8,
    chapter: 8,
    title: 'Rural Society in India',
    summary:
      'Approximately 67% of India\'s population lives in rural areas (2001 Census). The Green Revolution introduced High Yielding Variety (HYV) seeds, pesticides, and fertilizers, transforming agriculture but also creating inequalities. Land reforms had limited success: zamindari abolition was most effective, tenancy reforms were poorly implemented except in West Bengal and Kerala, and land ceiling laws were toothless with widespread benami transactions. Bonded labor persists in various forms. Class differentiation continues with the rich getting richer.',
    keyConcepts: [
      {
        term: 'Green Revolution',
        definition:
          'Introduction of High Yielding Variety (HYV) seeds, chemical fertilizers, pesticides, and modern irrigation techniques that dramatically increased agricultural production, especially wheat and rice.',
      },
      {
        term: 'Zamindari Abolition',
        definition:
          'Land reform policy that abolished the zamindari (landlord) system, transferring ownership rights from intermediaries to actual cultivators. Most effective of all land reforms.',
      },
      {
        term: 'Tenancy Reform',
        definition:
          'Laws regulating the relationship between landlords and tenants — fixing rent, providing security of tenure, and giving tenants ownership rights. Poorly implemented except in West Bengal and Kerala.',
      },
      {
        term: 'Land Ceiling',
        definition:
          'Legislation fixing maximum land holding per individual/family to redistribute surplus land to landless farmers. Largely ineffective due to benami (proxy) transactions and loopholes.',
      },
      {
        term: 'Bonded Labour',
        definition:
          'A system where workers are forced to work for a employer to repay a debt, with little or no wages. Legally abolished but persists in various forms in agriculture, brick kilns, and quarrying.',
      },
      {
        term: 'Bhoodan Yojana',
        definition:
          'Voluntary land donation movement started by Acharya Vinoba Bhave in 1951 — persuading landowners to gift surplus land to landless laborers.',
      },
    ],
    keyThinkers: [
      {
        name: 'Daniel Thorner',
        contribution:
          'Categorized rural class structure into three groups: (1) Landlord — owns large land, lives off rent. (2) Middle Peasant — medium holdings, works land with family. (3) Small Peasant — marginal holdings, supplements with wage labor.',
      },
      {
        name: 'Acharya Vinoba Bhave',
        contribution:
          'Started the Bhoodan (land donation) movement in 1951 at Pochampally, Andhra Pradesh. Walked across India persuading landowners to voluntarily donate surplus land to the landless.',
      },
    ],
    importantFacts: [
      '67% of India\'s population was rural (2001 Census), showing continued rural dominance.',
      'Zamindari abolition was the most successful land reform — ended intermediary rights.',
      'Tenancy reforms were never effectively implemented except in West Bengal and Kerala.',
      'Green Revolution targeted wheat and rice growing regions (Punjab, Haryana, Western UP).',
      'Bonded labor takes various forms: Bandhua Mazdoor, Halpati, Jeeta — abolished by law but persists.',
      'Benami transactions (proxy ownership) undermined land ceiling laws.',
    ],
    examQuestions: [
      {
        question:
          'What was the Green Revolution? Discuss its positive and negative impacts.',
        answer:
          'Green Revolution introduced HYV seeds, fertilizers, pesticides, and modern irrigation. Positive: (1) India became self-sufficient in food grains. (2) Increased productivity and farmer income. (3) Reduced dependence on food imports. Negative: (1) Increased inequality — benefits went mainly to large farmers. (2) Environmental degradation — chemical pollution, water table depletion. (3) Regional disparity — concentrated in wheat/rice areas. (4) Increased debt for small farmers buying expensive inputs.',
      },
      {
        question:
          'Why have land reforms been largely unsuccessful in India?',
        answer:
          'Land reforms failed due to: (1) Political will — landlords dominated legislatures. (2) Benami transactions — proxy ownership to evade ceiling laws. (3) Legal loopholes — exemptions for orchards, plantations. (4) Poor implementation — lack of land records, bureaucratic delays. (5) Tenancy reforms — landlords evicted tenants to avoid regulations. Exception: West Bengal and Kerala implemented tenancy reforms effectively through political commitment.',
      },
      {
        question:
          'Explain the concept of bonded labour and its persistence despite legal abolition.',
        answer:
          'Bonded labour forces workers to work for debt repayment with exploitative conditions. Forms: Bandhua Mazdoor (construction), Halpati (agriculture), Jeeta (animal sacrifice). Legal abolition: Bonded Labour System (Abolition) Act, 1976. Persistence reasons: (1) Extreme poverty forces debt. (2) Weak enforcement of laws. (3) Rural power structures protect employers. (4) Lack of alternative employment. (5) Social barriers prevent mobility.',
      },
    ],
    examTips: [
      'Know the three types of land reforms: zamindari, tenancy, ceiling — and their implementation success.',
      'Understand both benefits and costs of Green Revolution.',
      'Be ready to explain why West Bengal and Kerala succeeded in tenancy reform.',
      'Know the forms of bonded labour and why it persists despite legal abolition.',
    ],
  },

  // ================================================================
  // Ch9: Industrial Society
  // ================================================================
  {
    id: 9,
    chapter: 9,
    title: 'Industrial Society',
    summary:
      'India\'s industrial workforce is divided between organized sector (10+ employees, PF, bonus, job security) and unorganized sector (70% of workforce, no social security). The Bombay Textile Mill Strike of 1982 led by Dr. Datta Samant failed, showing worker vulnerability. Fordism (assembly line production) and Taylorism (task specialization) transformed industrial production. Outsourcing reduces costs but risks quality. Home-based work involves mainly women and children in vulnerable conditions.',
    keyConcepts: [
      {
        term: 'Organized Sector',
        definition:
          'Industrial enterprises with 10 or more employees, providing job security, provident fund, bonuses, and benefits. Subject to labor laws and regulations.',
      },
      {
        term: 'Unorganized Sector',
        definition:
          'Enterprises with less than 10 employees or informal work arrangements — no job security, no social security, low wages. Constitutes 70% of India\'s workforce.',
      },
      {
        term: 'Fordism',
        definition:
          'Henry Ford\'s assembly line production system — repetitive, standardized tasks on a moving conveyor belt. Increased productivity but created monotonous, deskilled work.',
      },
      {
        term: 'Taylorism',
        definition:
          'Frederick Taylor\'s scientific management — breaking work into smallest possible tasks, timing each movement, and optimizing for maximum efficiency. Known as "time and motion study."',
      },
      {
        term: 'Outsourcing',
        definition:
          'Contracting out work to external agencies or other companies, often to reduce costs. Can be domestic (within country) or international (BPO, KPO).',
      },
      {
        term: 'Home-based Work',
        definition:
          'Work done in workers\' homes rather than factories — common in garment, agarbatti, food processing industries. Mainly women and children, with poor wages and no protections.',
      },
    ],
    keyThinkers: [
      {
        name: 'Henry Ford',
        contribution:
          'Pioneered assembly line production (Fordism) — standardized, repetitive tasks on moving conveyor belts. Revolutionized manufacturing by making mass production possible.',
      },
      {
        name: 'Dr. Datta Samant',
        contribution:
          'Led the Bombay Textile Mill Strike of 1982 — approximately 250,000 workers went on strike demanding better wages and conditions. The strike failed, leading to permanent closure of many mills.',
      },
      {
        name: 'Mahatma Gandhi',
        contribution:
          'Advocated "Trusteeship" — capitalists should consider themselves trustees of workers\' wealth, sharing profits fairly. Also promoted village-level small-scale industries.',
      },
    ],
    importantFacts: [
      'Unorganized sector employs 70% of India\'s workforce — the vast majority without any social security.',
      'Mines Act, 1952 regulated working conditions in mines after tragic accidents.',
      'Bombay Textile Mill Strike of 1982 involved quarter million workers and lasted 18 months, ending in failure.',
      'Alam Ara (1931) was India\'s first talkie, marking the beginning of the Indian film industry.',
      'Post-liberalisation, new industrial cities emerged: Bengaluru (IT), Hyderabad (pharma), Gurgaon (corporate).',
      'Home-based work mainly involves women and children in garment, agarbatti, and food processing industries.',
    ],
    examQuestions: [
      {
        question:
          'Compare organized and unorganized sectors in India.',
        answer:
          'Organized: 10+ employees, PF, bonus, job security, labor laws apply, regular wages, social security. Examples: factories, banks, government. Unorganized: <10 employees or informal, no social security, low irregular wages, no job security, exploitative conditions. Examples: construction workers, street vendors, home-based workers. Key difference: 70% workforce is in unorganized sector with minimal protections. This dualism creates inequality and vulnerability.',
      },
      {
        question:
          'What was the Bombay Textile Mill Strike? Why did it fail?',
        answer:
          'The 1982 strike led by Dr. Datta Samant involved 250,000 workers demanding better wages, job security, and union recognition. It lasted 18 months. Failure reasons: (1) Workers had no savings to sustain long strike. (2) Mill owners locked out workers permanently. (3) Government was unsympathetic. (4) No national support or solidarity. (5) Alternative workers were available. (6) Mills closed permanently, workers lost jobs permanently.',
      },
      {
        question:
          'Explain the concepts of Fordism and Taylorism.',
        answer:
          'Fordism: Assembly line production — standardized tasks, moving conveyor belts, mass production. Increased efficiency but created monotonous, deskilled work. Taylorism: Scientific management — breaking work into smallest tasks, timing movements, optimizing for efficiency. "Time and motion study." Both increased productivity but dehumanized work. Workers became cogs in machines. In India, both coexist — modern factories use Fordism while management consultants promote Taylorism.',
      },
    ],
    examTips: [
      'Know the key difference: organized (10+ employees, regulated) vs unorganized (70% workforce, unregulated).',
      'Understand why Bombay Mill Strike failed — economic, political, and organizational factors.',
      'Be ready to explain how Fordism and Taylorism transformed work and its impact on workers.',
      'Discuss how outsourcing and home-based work create new forms of exploitation.',
    ],
  },

  // ================================================================
  // Ch10: Globalisation
  // ================================================================
  {
    id: 10,
    chapter: 10,
    title: 'Globalisation',
    summary:
      'The 1991 economic reforms liberalised the Indian economy, opening it to global markets. Globalisation created an electronic economy with instant transactions and a weightless economy based on IT and knowledge. MNCs and TNCs spread globally, bringing both investment and cultural homogenisation. Corporate culture promotes productivity but can be exploitative. A culture of consumption emerged through malls and multiplexes. The Chipko movement showed grassroots resistance to environmental destruction. Globalisation creates both winners and losers.',
    keyConcepts: [
      {
        term: 'Liberalisation',
        definition:
          'The 1991 economic reforms that reduced government control, opened markets to foreign investment, deregulated industries, and privatized public enterprises.',
      },
      {
        term: 'Electronic Economy',
        definition:
          'An economy based on digital transactions, online banking, e-commerce, and instant electronic transfers — reducing physical currency and enabling global financial flows.',
      },
      {
        term: 'Weightless Economy',
        definition:
          'An economy based on IT, knowledge, and services rather than physical goods — software, consulting, finance, entertainment. Products have no physical weight.',
      },
      {
        term: 'MNCs/TNCs',
        definition:
          'Multinational/T transnational corporations — companies operating in multiple countries, spreading production, marketing, and management globally.',
      },
      {
        term: 'Corporate Culture',
        definition:
          'Workplace values and practices emphasizing productivity, efficiency, profit-maximization, and competitiveness — sometimes at the cost of worker welfare.',
      },
      {
        term: 'Culture of Consumption',
        definition:
          'Lifestyle centered around buying and displaying consumer goods — malls, multiplexes, branded products — as symbols of status and identity.',
      },
      {
        term: 'Chipko Movement',
        definition:
          'Grassroots environmental movement (1973) where villagers, especially women, hugged trees to prevent deforestation — symbolizing resistance to exploitative development.',
      },
    ],
    keyThinkers: [
      {
        name: 'Chipko Activists',
        contribution:
          'Gaura Devi, Sunderlal Bahuguna, and others led the movement to protect forests. Their "tree-hugging" tactics became a global symbol of environmental resistance.',
      },
    ],
    importantFacts: [
      'The 1991 economic reforms were triggered by a balance of payments crisis and opened India to global markets.',
      'The Spice Route connected South India to Southeast Asia, Middle East, and Europe through trade.',
      'The Silk Route connected India to China, Persia, and Rome — ancient globalisation.',
      'MNCs tried to patent Indian traditional products: tulsi (basil), haldi (turmeric), basmati rice.',
      'The Chipko movement (1973) involved women hugging trees to prevent logging in Uttarakhand.',
      'Globalisation has created a dual economy — a small globally competitive sector alongside a large traditional sector.',
    ],
    examQuestions: [
      {
        question:
          'What is globalisation? Discuss its impact on Indian society.',
        answer:
          'Globalisation is increasing interconnectedness of economies and cultures. Impact: Positive — (1) Economic growth and investment. (2) Technology transfer. (3) Consumer choice. (4) Employment in IT/services. Negative — (1) Job losses in traditional sectors. (2) Cultural homogenization. (3) Environmental degradation. (4) Rising inequality. (5) MNC dominance. Winners: urban educated, IT workers, consumers. Losers: farmers, traditional artisans, informal workers.',
      },
      {
        question:
          'What was the Chipko movement? Why is it significant?',
        answer:
          'Chipko (1973) was a grassroots environmental movement in Uttarakhand where villagers, especially women, hugged trees to prevent commercial logging. Significance: (1) Showed that development should not destroy environment. (2) Women as environmental activists. (3) Local communities protecting common resources. (4) Challenged state-corporate nexus. (5) Became global symbol of eco-resistance. "Chipko" means "to hug" — physical protection of trees.',
      },
      {
        question:
          'How does globalisation affect Indian culture and identity?',
        answer:
          'Globalisation affects culture through: (1) Western consumer culture via malls, multiplexes, branded goods. (2) English language dominance threatening local languages. (3) Homogenization of food, fashion, entertainment. (4) New identities based on consumption rather than tradition. (5) Resistance through revival of local culture, handicrafts, and movements like Chipko. Tension between universal modernity and local tradition.',
      },
    ],
    examTips: [
      'Know the key features of 1991 liberalisation and its economic impact.',
      'Understand the concept of both winners and losers of globalisation.',
      'Be ready to explain Chipko movement with specific details (1973, Uttarakhand, women).',
      'Discuss how traditional knowledge (tulsi, haldi, basmati) was threatened by MNC patenting.',
    ],
  },

  // ================================================================
  // Ch11: Mass Media
  // ================================================================
  {
    id: 11,
    chapter: 11,
    title: 'Mass Media and Communication',
    summary:
      'Mass media includes newspapers, television, radio, and internet that reach large audiences. Mass media has a dialectical relationship with society — it both reflects and shapes social reality. Nehru called it the "watchdog of democracy." Print media began with Bombay Samachar (1822). Radio was introduced in 1920. Talkies began with Alam Ara (1931). Post-1991, TV channels expanded from 1 to 70+. Censorship during colonial rule controlled information flow. Mass media is crucial for democracy, education, and social awareness.',
    keyConcepts: [
      {
        term: 'Mass Media',
        definition:
          'Communication channels designed to reach large audiences simultaneously — newspapers, magazines, TV, radio, internet, and social media.',
      },
      {
        term: 'Dialectical Relationship',
        definition:
          'The reciprocal relationship between media and society — media influences society while society also shapes media content and practices.',
      },
      {
        term: 'Censorship',
        definition:
          'Government control and suppression of information, publications, or media content deemed objectionable — practiced during colonial rule and sometimes in independent India.',
      },
      {
        term: 'Watchdog of Democracy',
        definition:
          'Nehru\'s phrase for media\'s role in monitoring government actions, exposing corruption, and informing citizens — essential for democratic functioning.',
      },
      {
        term: 'Digital Divide',
        definition:
          'The gap between those with access to digital technology (internet, computers) and those without — creating new forms of inequality.',
      },
    ],
    keyThinkers: [
      {
        name: 'Jawaharlal Nehru',
        contribution:
          'Called media the "watchdog of democracy" — its role is to inform citizens, expose corruption, and hold government accountable for a functioning democracy.',
      },
      {
        name: 'Fardoonji Murzban',
        contribution:
          'Published the first Indian newspaper — Bombay Samachar (1822) in Gujarati, marking the beginning of print journalism in India.',
      },
      {
        name: 'Ramoji Rao',
        contribution:
          'Founded Eenadu (1974) — the largest Telugu daily and media empire. Demonstrated how regional language media could be commercially successful and politically influential.',
      },
    ],
    importantFacts: [
      'Bombay Samachar (1822) was India\'s first newspaper, published by Fardoonji Murzban in Gujarati.',
      'Gutenberg invented the printing press around 1440, revolutionizing information dissemination.',
      'Alam Ara (1931) was India\'s first talkie film, directed by Ardeshir Irani.',
      'The transistor revolution of the 1960s made radio portable and accessible to millions.',
      'AIR (All India Radio) broadcasts in 24 languages and 146 dialects.',
      'STAR Plus switched to Hindi programming in 1996, marking the beginning of Hindi TV dominance.',
      'Post-1991, TV channels expanded from 1 to over 70, transforming media landscape.',
    ],
    examQuestions: [
      {
        question:
          'What is the role of mass media in a democracy?',
        answer:
          'Mass media plays crucial democratic roles: (1) Watchdog — monitors government actions and exposes corruption (Nehru called it "watchdog of democracy"). (2) Informer — provides citizens with news and information for informed participation. (3) Forum — enables public debate on social and political issues. (4) Educator — raises awareness about rights, health, education. (5) Entertainer — provides cultural content. Without free media, democracy cannot function as citizens cannot make informed choices.',
      },
      {
        question:
          'How has technology changed mass media in India?',
        answer:
          'Technology transformed Indian media: (1) Printing press (1440) → newspapers reached masses. (2) Radio (1920s) → audio reach to rural areas. (3) Television (1959-Doordarshan) → visual medium. (4) Cable TV (1990s) → 70+ channels. (5) Internet/Social Media (2000s) → interactive, real-time. (6) Smartphones → mobile media. Digital divide persists — urban-rural, rich-poor gap in access. New challenges: fake news, privacy, algorithmic bias.',
      },
      {
        question:
          'What was censorship during colonial rule? How does it affect media freedom?',
        answer:
          'Colonial censorship: (1) Vernacular Press Act (1878) — controlled Indian language newspapers. (2) Official Secrets Act — restricted information. (3) Sedition laws — criminalized criticism of government. Post-independence: Constitutional freedom of press (Article 19(1)(a)) but with reasonable restrictions. Ongoing issues: government pressure on media, corporate ownership influencing content, sedition charges against journalists. Media freedom remains contested.',
      },
    ],
    examTips: [
      'Know the timeline: Bombay Samachar (1822), Alam Ara (1931), transistor revolution (1960s), post-1991 TV expansion.',
      'Understand Nehru\'s "watchdog of democracy" concept with examples.',
      'Be ready to discuss both benefits and challenges of digital media.',
      'Know about colonial censorship laws and their impact on press freedom.',
    ],
  },

  // ================================================================
  // Ch12: Social Movements
  // ================================================================
  {
    id: 12,
    chapter: 12,
    title: 'Social Movements in India',
    summary:
      'Social movements are sustained collective mobilization for or against social change. Major theories explain their emergence: relative deprivation (resentment at inequality), collective action (Mancur Olson — rational self-interest), and resource mobilization (McCarthy & Zald — organizational resources). Types include reformist (change within system), revolutionary (overthrow system), and redemptive (personal transformation). Indian movements span peasant (Champaran, Bardoli, AIKS), workers (AITUC, INTUC), Dalit (Satnami, Mahar, Dalit Panther), and environmental (Chipko).',
    keyConcepts: [
      {
        term: 'Social Movement',
        definition:
          'Sustained collective mobilization of people for or against social change — organized, continuous, and aimed at transforming or preserving some aspect of society.',
      },
      {
        term: 'Relative Deprivation',
        definition:
          'Theory that movements arise when people feel resentful about their disadvantaged position compared to others who are better off — the gap between expectations and reality.',
      },
      {
        term: 'Collective Action',
        definition:
          'Mancur Olson\'s theory that individuals join movements based on rational calculation of self-interest — weighing costs against benefits of participation.',
      },
      {
        term: 'Resource Mobilization',
        definition:
          'McCarthy & Zald\'s theory that movements depend on available resources — money, leadership, media access, organizational structure — not just grievances.',
      },
      {
        term: 'Reformist Movement',
        definition:
          'A movement seeking change within the existing social system — through legislation, education, or persuasion, not overthrow of the system.',
      },
      {
        term: 'Revolutionary Movement',
        definition:
          'A movement seeking fundamental transformation of the social order — overthrow of existing power structures and creation of new ones.',
      },
      {
        term: 'Redemptive Movement',
        definition:
          'A movement focused on personal transformation rather than social change — spiritual, religious, or moral regeneration of individuals.',
      },
    ],
    keyThinkers: [
      {
        name: 'Emile Durkheim',
        contribution:
          'Studied social disintegration and anomie (normlessness). His ideas explain how rapid social change creates conditions for social movements as old norms break down.',
      },
      {
        name: 'Mancur Olson',
        contribution:
          'Proposed "Logic of Collective Action" — individuals join movements based on rational self-interest, weighing costs and benefits. Free-rider problem explains why movements struggle.',
      },
      {
        name: 'McCarthy & Zald',
        contribution:
          'Resource mobilization theory — movements depend on organizational resources (money, leadership, media, networks) rather than just grievances. Success requires mobilizing resources.',
      },
      {
        name: 'Shree Narayan Guru',
        contribution:
          'Led anti-Brahmin social reform movement in Kerala — challenged caste hierarchy through education, temple entry, and social equality. Founded SNDP Yogam.',
      },
    ],
    importantFacts: [
      'The French Revolution (1789) against monarchy is often considered the first modern social movement.',
      'The Bengal Indigo Revolt (1917-20) was an early peasant movement against exploitative planters.',
      'AITUC (All India Trade Union Congress) was founded by B.P. Wadia in 1920 — first major trade union.',
      'Dalit literature played a crucial role in changing mindsets about caste discrimination.',
      'The New Farmers\' Movement emerged in Tamil Nadu and Punjab in the 1980s against agricultural policies.',
      'Movements can be classified as: reformist (within system), revolutionary (overthrow system), redemptive (personal transformation).',
    ],
    examQuestions: [
      {
        question:
          'What are the different theories that explain the emergence of social movements?',
        answer:
          'Three major theories: (1) Relative Deprivation — movements arise from resentment at inequality (gap between expectations and reality). (2) Collective Action (Olson) — individuals join based on rational self-interest, weighing costs/benefits. Free-rider problem explains difficulty in mobilization. (3) Resource Mobilization (McCarthy & Zald) — movements depend on organizational resources (money, leadership, media, networks), not just grievances. Each theory highlights different aspects of why movements emerge and succeed.',
      },
      {
        question:
          'Classify social movements and give Indian examples.',
        answer:
          'Types: (1) Reformist — seeks change within system. Example: Brahmo Samaj (social reform). (2) Revolutionary — seeks fundamental transformation. Example: Naxalite movement. (3) Redemptive — personal transformation. Example: Bhakti movement. By sector: Peasant — Champaran (1917), Bardoli (1928), AIKS. Workers — AITUC (1920), INTUC. Dalit — Satnami, Mahar, Dalit Panther. Environmental — Chipko (1973).',
      },
      {
        question:
          'Explain the significance of the Champaran and Bardoli movements.',
        answer:
          'Champaran (1917): Gandhi\'s first Civil Disobedience in India — indigo farmers forced to grow indigo on 3/20th land. Forced government inquiry and abolition of tinkathia system. Significance: Gandhian method of satyagraha established. Bardoli (1928): Vallabhbhai Patel led peasant movement against 30% land revenue increase. Women participated actively. Victory forced government to reduce revenue. Significance: Established Sardar Patel\'s leadership, demonstrated organized peasant power.',
      },
      {
        question:
          'How did Dalit movements challenge caste discrimination?',
        answer:
          'Dalit movements challenged caste through: (1) Temple entry movements — accessing sacred spaces denied to untouchables. (2) Education — Ambedkar emphasized education as liberation. (3) Political mobilization — forming parties, contesting elections. (4) Literature — Dalit writing exposed discrimination. (5) Organizations — Dalit Panthers (1972), BAMCEF. (6) Constitutional rights — Article 17, reservation. Key figures: Ambedkar, Jyotirao Phule, Shree Narayan Guru.',
      },
    ],
    examTips: [
      'Know the three theories: relative deprivation, collective action (Olson), resource mobilization (McCarthy & Zald).',
      'Be ready to classify movements: reformist, revolutionary, redemptive with Indian examples.',
      'Understand the significance of Champaran (1917) and Bardoli (1928) in peasant movements.',
      'Know about Dalit movements and their strategies: education, politics, literature, organizations.',
    ],
  },
];
