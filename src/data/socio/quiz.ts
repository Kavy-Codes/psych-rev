export interface SocioQuizQuestion {
  id: string;
  chapter: number;
  type: 'mcq' | 'assertion-reason' | 'case-study';
  passage?: string;
  question: string;
  options: string[];
  correct: number;
  rationale: string;
}

export const socioQuizQuestions: SocioQuizQuestion[] = [
  // ─────────────────────────────────────────────
  // Chapter 1 — Structural Change
  // ─────────────────────────────────────────────
  {
    id: 'socio-mcq-1-1',
    chapter: 1,
    type: 'mcq',
    question:
      'The Permanent Settlement of 1793 was introduced in which of the following regions?',
    options: [
      'Madras and Bombay',
      'Bengal, Bihar, and Orissa',
      'Punjab and North-West Provinces',
      'Central Provinces',
    ],
    correct: 1,
    rationale:
      'Lord Cornwallis introduced the Permanent Settlement in 1793 in Bengal, Bihar, and Orissa. It created the zamindari system where zamindars were made hereditary landowners who collected revenue from peasants.',
  },
  {
    id: 'socio-ar-1-1',
    chapter: 1,
    type: 'assertion-reason',
    question:
      'Assertion: The factory system displaced traditional cottage industries in India. Reason: Machine-made goods from factories were cheaper and could be mass-produced.',
    options: [
      'Both A and R are true and R is the correct explanation of A',
      'Both A and R are true but R is not the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true',
    ],
    correct: 0,
    rationale:
      'The factory system, especially in textiles, replaced cottage industries because factories could produce large volumes at lower cost, making it impossible for handloom weavers and artisans to compete.',
  },
  {
    id: 'socio-mcq-1-2',
    chapter: 1,
    type: 'mcq',
    question:
      'The Ryotwari system of land revenue was primarily introduced in:',
    options: [
      'Bengal and Odisha',
      'Madras and Bombay Presidencies',
      'Punjab and United Provinces',
      'Assam and Bengal',
    ],
    correct: 1,
    rationale:
      'The Ryotwari system, introduced by Thomas Munro and Alexander Read, was implemented in the Madras and Bombay Presidencies. Under this system, the ryot (cultivator) was recognised as the owner of the land and paid revenue directly to the state.',
  },
  {
    id: 'socio-cs-1-1',
    chapter: 1,
    type: 'case-study',
    passage:
      'In 1828, Raja Ram Mohan Roy founded an organisation in Calcutta that campaigned against Sati, child marriage, and polygamy. The organisation promoted modern education and rational thinking. Lord William Bentinck passed legislation banning Sati in 1829, largely due to Roy\'s persistent efforts.',
    question: 'The organisation referred to in the passage is:',
    options: [
      'Prarthana Samaj',
      'Brahmo Samaj',
      'Arya Samaj',
      'Satya Shodhak Samaj',
    ],
    correct: 1,
    rationale:
      'Raja Ram Mohan Roy founded the Brahmo Samaj in 1828 in Calcutta. It was a social and religious reform movement that challenged orthodox Hindu practices and promoted rational, humanistic values.',
  },
  {
    id: 'socio-mcq-1-3',
    chapter: 1,
    type: 'mcq',
    question:
      'Which of the following land revenue systems created an intermediary class between the state and the actual cultivator?',
    options: [
      'Ryotwari system',
      'Mahalwari system',
      'Zamindari system',
      'Plantation system',
    ],
    correct: 2,
    rationale:
      'The Zamindari system (Permanent Settlement) created zamindars as intermediaries who collected rent from peasants and remitted a fixed amount to the state. The actual cultivators had no rights over the land.',
  },
  {
    id: 'socio-ar-1-2',
    chapter: 1,
    type: 'assertion-reason',
    question:
      'Assertion: The introduction of railways in India had mixed consequences. Reason: Railways facilitated both colonial exploitation and the spread of nationalist ideas.',
    options: [
      'Both A and R are true and R is the correct explanation of A',
      'Both A and R are true but R is not the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true',
    ],
    correct: 0,
    rationale:
      'Railways served colonial interests by transporting raw materials and troops, but they also connected different regions, enabling the circulation of nationalist ideas and the growth of a unified political consciousness.',
  },
  {
    id: 'socio-mcq-1-4',
    chapter: 1,
    type: 'mcq',
    question:
      'The Arya Samaj was founded by Dayanand Saraswati in the year:',
    options: [
      '1828',
      '1868',
      '1875',
      '1897',
    ],
    correct: 2,
    rationale:
      'Dayanand Saraswati founded the Arya Samaj in 1875 in Bombay. It advocated a return to the Vedas, opposed caste-based discrimination, promoted education, and supported widow remarriage.',
  },
  {
    id: 'socio-cs-1-2',
    chapter: 1,
    type: 'case-study',
    passage:
      'A village in Punjab shifted from growing wheat and pulses for local consumption to cultivating cotton and sugarcane for sale in urban markets during the late 19th century. This shift was driven by the expansion of canal irrigation and the demand from British textile mills.',
    question: 'This transformation is best described as:',
    options: [
      'Subsistence farming',
      'Commercialisation of agriculture',
      'Land redistribution',
      'Deindustrialisation',
    ],
    correct: 1,
    rationale:
      'Commercialisation of agriculture refers to the shift from growing crops for self-consumption to growing cash crops for sale in the market. Colonial policies and infrastructure like canals and railways facilitated this transition.',
  },
  {
    id: 'socio-mcq-1-5',
    chapter: 1,
    type: 'mcq',
    question:
      'The Mahalwari system of land revenue was introduced in which regions?',
    options: [
      'Madras and Bombay',
      'Bengal, Bihar, and Odisha',
      'North-West Provinces, Punjab, and parts of Central India',
      'Assam and Bengal',
    ],
    correct: 2,
    rationale:
      'The Mahalwari system was introduced in the North-West Provinces, Punjab, and parts of Central India. Under this system, the village community (mahal) as a whole was held jointly responsible for payment of land revenue.',
  },
  {
    id: 'socio-ar-1-3',
    chapter: 1,
    type: 'assertion-reason',
    question:
      'Assertion: Social reform movements in 19th century India were influenced by Western liberal ideas. Reason: Many reformers had access to English education and were exposed to Enlightenment values.',
    options: [
      'Both A and R are true and R is the correct explanation of A',
      'Both A and R are true but R is not the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true',
    ],
    correct: 0,
    rationale:
      'Reformers like Ram Mohan Roy, Ishwar Chandra Vidyasagar, and others were influenced by Western liberal ideas of individual rights, rationalism, and humanism, which they applied to critique existing social practices.',
  },

  // ─────────────────────────────────────────────
  // Chapter 2 — Demographic Structure
  // ─────────────────────────────────────────────
  {
    id: 'socio-mcq-2-1',
    chapter: 2,
    type: 'mcq',
    question:
      'According to Malthusian theory, population grows in which progression while food supply grows arithmetically?',
    options: [
      'Arithmetic progression',
      'Geometric progression',
      'Logarithmic progression',
      'Exponential decay',
    ],
    correct: 1,
    rationale:
      'Malthus argued that population tends to grow geometrically (2, 4, 8, 16…) while food supply grows only arithmetically (1, 2, 3, 4…), leading to eventual crisis unless checked by positive or preventive checks.',
  },
  {
    id: 'socio-ar-2-1',
    chapter: 2,
    type: 'assertion-reason',
    question:
      'Assertion: India is undergoing a demographic transition. Reason: Death rates declined first due to better healthcare, and birth rates are now declining.',
    options: [
      'Both A and R are true and R is the correct explanation of A',
      'Both A and R are true but R is not the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true',
    ],
    correct: 0,
    rationale:
      'Demographic transition theory describes the shift from high birth and death rates to low birth and death rates. In India, death rates fell first due to improvements in healthcare, sanitation, and food supply, and birth rates are now gradually declining.',
  },
  {
    id: 'socio-mcq-2-2',
    chapter: 2,
    type: 'mcq',
    question:
      'The replacement level Total Fertility Rate (TFR) that ensures population stabilisation is approximately:',
    options: [
      '1.0',
      '1.5',
      '2.1',
      '3.5',
    ],
    correct: 2,
    rationale:
      'A TFR of 2.1 means each couple replaces itself with the next generation, accounting for mortality. Below this level, the population eventually declines. India\'s current TFR is approximately 2.0.',
  },
  {
    id: 'socio-cs-2-1',
    chapter: 2,
    type: 'case-study',
    passage:
      'In a district in Kerala, the Infant Mortality Rate (IMR) is 6 per 1,000 live births, while in a district in Uttar Pradesh, the IMR is 38 per 1,000 live births. Kerala has near-universal female literacy and a well-functioning primary healthcare system, while UP struggles with healthcare access in rural areas.',
    question: 'The contrast between Kerala and UP districts primarily highlights:',
    options: [
      'Regional disparities in health infrastructure and literacy',
      'Differences in Malthusian growth patterns',
      'The failure of all population policies',
      'The irrelevance of literacy to health outcomes',
    ],
    correct: 0,
    rationale:
      'Kerala\'s success in reducing IMR is attributed to high literacy (especially female literacy), accessible healthcare, and effective public health programmes. UP lags due to inadequate healthcare infrastructure and lower literacy rates.',
  },
  {
    id: 'socio-mcq-2-3',
    chapter: 2,
    type: 'mcq',
    question:
      'The child sex ratio (0-6 years) in India as per Census 2011 was:',
    options: [
      '1000 males per 1000 females',
      '945 males per 1000 females',
      '914 males per 1000 females',
      '940 males per 1000 females',
    ],
    correct: 2,
    rationale:
      'The Census 2011 reported a child sex ratio (0-6 years) of 914 girls per 1000 boys, the lowest since independence. This decline is attributed to son preference, sex-selective abortions, and neglect of girl children.',
  },
  {
    id: 'socio-ar-2-2',
    chapter: 2,
    type: 'assertion-reason',
    question:
      'Assertion: The PNDT Act was enacted to regulate prenatal diagnostic techniques. Reason: Sex-selective abortion was leading to a declining child sex ratio.',
    options: [
      'Both A and R are true and R is the correct explanation of A',
      'Both A and R are true but R is not the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true',
    ],
    correct: 0,
    rationale:
      'The Pre-Natal Diagnostic Techniques (Regulation and Prevention of Misuse) Act, 1994 (amended 2003) was enacted specifically to prevent the misuse of prenatal diagnostic techniques for sex determination and sex-selective abortion.',
  },
  {
    id: 'socio-mcq-2-4',
    chapter: 2,
    type: 'mcq',
    question:
      '"Demographic dividend" refers to the economic growth potential that arises when:',
    options: [
      'Population increases rapidly',
      'The working-age population is larger than the dependent population',
      'Birth rates exceed death rates',
      'Migration from rural to urban areas increases',
    ],
    correct: 1,
    rationale:
      'Demographic dividend occurs when the proportion of the working-age population (15-64 years) is large relative to dependents (children and elderly), creating potential for accelerated economic growth if the workforce is skilled and employed.',
  },
  {
    id: 'socio-cs-2-2',
    chapter: 2,
    type: 'case-study',
    passage:
      'A construction worker from Jharkhand migrates to Delhi every year during the non-agricultural season. He works on building sites for 6-8 months and returns home during the monsoon when there is no work. His family depends on both his urban earnings and their small landholding.',
    question: 'This type of migration is best described as:',
    options: [
      'Permanent migration',
      'Seasonal or circular migration',
      'Forced migration',
      'International migration',
    ],
    correct: 1,
    rationale:
      'Seasonal or circular migration involves periodic movement between rural and urban areas based on the availability of work. It is driven by the lack of year-round employment in rural areas and the demand for cheap labour in cities.',
  },
  {
    id: 'socio-mcq-2-5',
    chapter: 2,
    type: 'mcq',
    question:
      'Epidemiological transition refers to the shift in the pattern of diseases from:',
    options: [
      'Urban to rural areas',
      'Infectious and communicable to degenerative and lifestyle diseases',
      'Tropical to temperate climate diseases',
      'Curable to incurable diseases',
    ],
    correct: 1,
    rationale:
      'As societies develop, the burden of disease shifts from infectious and communicable diseases (malaria, tuberculosis) to degenerative and lifestyle diseases (cardiovascular disease, diabetes, cancer).',
  },
  {
    id: 'socio-ar-2-3',
    chapter: 2,
    type: 'assertion-reason',
    question:
      'Assertion: NREGA has a positive impact on rural migration patterns. Reason: It provides guaranteed employment in rural areas, reducing distress migration to cities.',
    options: [
      'Both A and R are true and R is the correct explanation of A',
      'Both A and R are true but R is not the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true',
    ],
    correct: 0,
    rationale:
      'The National Rural Employment Guarantee Act (NREGA) guarantees 100 days of wage employment per year to rural households, providing a safety net that reduces the need for distress migration to urban areas.',
  },

  // ─────────────────────────────────────────────
  // Chapter 3 — Social Institutions
  // ─────────────────────────────────────────────
  {
    id: 'socio-mcq-3-1',
    chapter: 3,
    type: 'mcq',
    question:
      'The key difference between Varna and Jati in the caste system is:',
    options: [
      'Varna is thousands in number while Jati is four-fold',
      'Varna is a broad four-fold classification while Jati is a localised endogamous group',
      'Varna is based on occupation while Jati is based on religion',
      'There is no difference between them',
    ],
    correct: 1,
    rationale:
      'Varna is an ancient four-fold theoretical classification (Brahmin, Kshatriya, Vaishya, Shudra), while Jati refers to thousands of localised, endogamous occupational groups with their own customs and social hierarchy.',
  },
  {
    id: 'socio-ar-3-1',
    chapter: 3,
    type: 'assertion-reason',
    question:
      'Assertion: M.N. Srinivas coined the concept of "Sanskritisation." Reason: It describes the process by which lower castes adopt upper-caste rituals to claim higher status.',
    options: [
      'Both A and R are true and R is the correct explanation of A',
      'Both A and R are true but R is not the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true',
    ],
    correct: 0,
    rationale:
      'Sanskritisation, as described by M.N. Srinivas, is a process where lower castes or groups adopt the rituals, practices, and lifestyle of upper castes (vegetarianism, teetotalism, cremation) to improve their social position.',
  },
  {
    id: 'socio-cs-3-1',
    chapter: 3,
    type: 'case-study',
    passage:
      'In a village in Karnataka, the Bestha (fishermen) community stopped consuming beef and began performing puja like Brahmins. They also started cremating their dead instead of burying them. After two generations, they claimed equal status with dominant landowning castes.',
    question: 'The Bestha community\'s actions best illustrate the concept of:',
    options: [
      'Westernisation',
      'Sanskritisation',
      'Secularisation',
      'Industrialisation',
    ],
    correct: 1,
    rationale:
      'The Bestha community adopted upper-caste Hindu practices (vegetarianism, cremation, puja) to improve their ritual status, which is a textbook example of Sanskritisation as described by M.N. Srinivas.',
  },
  {
    id: 'socio-mcq-3-2',
    chapter: 3,
    type: 'mcq',
    question:
      '"Dominant Caste" in Indian villages, as described by M.N. Srinivas, refers to a caste that:',
    options: [
      'Is numerically the smallest',
      'Has high ritual status and economic power',
      'Possesses numerical strength, economic power, and political influence',
      'Is always from the Brahmin varna',
    ],
    correct: 2,
    rationale:
      'A dominant caste is one that has a large population, controls land and economic resources, and exercises political influence in a village. It does not necessarily have high ritual status but wields de facto power.',
  },
  {
    id: 'socio-ar-3-2',
    chapter: 3,
    type: 'assertion-reason',
    question:
      'Assertion: The 73rd Constitutional Amendment institutionalised Panchayati Raj. Reason: It mandated reservations for Scheduled Castes, Scheduled Tribes, and women in local self-government.',
    options: [
      'Both A and R are true and R is the correct explanation of A',
      'Both A and R are true but R is not the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true',
    ],
    correct: 0,
    rationale:
      'The 73rd Amendment (1992) constitutionalised Panchayati Raj institutions and mandated at least one-third reservation for women, along with reservations for SCs and STs proportional to their population at all three tiers.',
  },
  {
    id: 'socio-mcq-3-3',
    chapter: 3,
    type: 'mcq',
    question:
      'The Khasi tribe of Meghalaya practices descent through:',
    options: [
      'Patrilineal descent',
      'Matrilineal descent',
      'Bilateral descent',
      'No systematic descent',
    ],
    correct: 1,
    rationale:
      'The Khasi tribe traces descent through the mother\'s line. Property and the family surname pass from mother to daughter (youngest daughter inherits the ancestral property), making it a matrilineal society.',
  },
  {
    id: 'socio-mcq-3-4',
    chapter: 3,
    type: 'mcq',
    question:
      '"Westernisation" in the Indian context, as described by M.N. Srinivas, refers to:',
    options: [
      'Adoption of Christianity',
      'Exposure to modern technology, English education, and Western lifestyle',
      'Complete rejection of Indian traditions',
      'Migration to Western countries',
    ],
    correct: 1,
    rationale:
      'Westernisation refers to the adoption of Western technology, education, dress, food habits, and values, particularly among the urban educated elite, without necessarily abandoning Indian culture entirely.',
  },
  {
    id: 'socio-cs-3-2',
    chapter: 3,
    type: 'case-study',
    passage:
      'In a village in Haryana, the Jat community, which controls most of the agricultural land and dominates the village panchayat, dictates social norms. They decide which families can use the community well, where lower castes can sit in the village, and which cultural practices are to be followed.',
    question: 'The Jat community in this village is best described as:',
    options: [
      'A tribal community',
      'A dominant caste',
      'A Sanskritised community',
      'A minority community',
    ],
    correct: 1,
    rationale:
      'The Jats in this village exhibit all characteristics of a dominant caste — numerical strength, control over land and economic resources, political dominance in the panchayat, and the power to enforce social norms.',
  },
  {
    id: 'socio-ar-3-3',
    chapter: 3,
    type: 'assertion-reason',
    question:
      'Assertion: Kinship systems vary widely across Indian communities. Reason: India has both patrilineal and matrilineal descent systems, as well as diverse marriage practices.',
    options: [
      'Both A and R are true and R is the correct explanation of A',
      'Both A and R are true but R is not the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true',
    ],
    correct: 0,
    rationale:
      'India\'s immense cultural diversity is reflected in its kinship systems. Communities differ in descent rules (patrilineal vs. matrilineal), inheritance patterns, marriage rules (endogamy, exogamy, polyandry), and family structures (joint vs. nuclear).',
  },
  {
    id: 'socio-mcq-3-5',
    chapter: 3,
    type: 'mcq',
    question:
      'Consanguineal kinship refers to relationships based on:',
    options: [
      'Marriage ties',
      'Blood relations',
      'Economic exchange',
      'Political alliances',
    ],
    correct: 1,
    rationale:
      'Consanguineal kinship is based on blood relations (parents, siblings, cousins), as opposed to affinal kinship which is established through marriage (in-laws, spouse\'s relatives).',
  },

  // ─────────────────────────────────────────────
  // Chapter 5 — Social Inequality & Exclusion
  // ─────────────────────────────────────────────
  {
    id: 'socio-mcq-5-1',
    chapter: 5,
    type: 'mcq',
    question:
      'Social stratification refers to:',
    options: [
      'The study of social movements',
      'The hierarchical arrangement of individuals into social classes or groups',
      'The process of social change',
      'The study of social norms',
    ],
    correct: 1,
    rationale:
      'Social stratification is the hierarchical arrangement of individuals into different layers or strata based on factors like wealth, power, prestige, caste, class, or gender, which determines their access to resources and opportunities.',
  },
  {
    id: 'socio-ar-5-1',
    chapter: 5,
    type: 'assertion-reason',
    question:
      'Assertion: Prejudice and stereotype are interrelated concepts. Reason: Stereotypes are oversimplified beliefs about a group, while prejudice is a negative attitude based on those stereotypes.',
    options: [
      'Both A and R are true and R is the correct explanation of A',
      'Both A and R are true but R is not the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true',
    ],
    correct: 0,
    rationale:
      'Stereotypes are cognitive generalisations — oversimplified, fixed beliefs about a group. Prejudice is an affective component — a preconceived negative attitude. Stereotypes often form the basis for prejudice.',
  },
  {
    id: 'socio-cs-5-1',
    chapter: 5,
    type: 'case-study',
    passage:
      'In a city, a Dalit family was denied entry into a temple by the priest. When they protested, local authorities cited "tradition" to justify the exclusion. The family approached the district magistrate who invoked Article 17 of the Constitution.',
    question: 'Article 17 of the Indian Constitution deals with:',
    options: [
      'Right to equality',
      'Abolition of untouchability',
      'Right against exploitation',
      'Freedom of religion',
    ],
    correct: 1,
    rationale:
      'Article 17 of the Indian Constitution abolishes untouchability and forbids its practice in any form. The enforcement of any disability arising out of untouchability is a punishable offence under the law.',
  },
  {
    id: 'socio-mcq-5-2',
    chapter: 5,
    type: 'mcq',
    question:
      'The Mandal Commission was constituted to identify:',
    options: [
      'Scheduled Castes and Scheduled Tribes',
      'Other Backward Classes (OBCs) for reservation in education and employment',
      'Minority communities',
      'Economically weaker sections',
    ],
    correct: 1,
    rationale:
      'The Second Backward Classes Commission (Mandal Commission) was appointed in 1979 under B.P. Mandal to identify the socially or educationally backward classes and recommend steps for their advancement, leading to 27% reservation for OBCs.',
  },
  {
    id: 'socio-ar-5-2',
    chapter: 5,
    type: 'assertion-reason',
    question:
      'Assertion: Social exclusion goes beyond economic poverty. Reason: It involves denial of access to basic rights, social participation, and dignity based on identity.',
    options: [
      'Both A and R are true and R is the correct explanation of A',
      'Both A and R are true but R is not the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true',
    ],
    correct: 0,
    rationale:
      'Social exclusion refers to the process by which certain groups are systematically excluded from full participation in social, economic, political, and cultural life. It is multidimensional and goes beyond mere income poverty.',
  },
  {
    id: 'socio-mcq-5-3',
    chapter: 5,
    type: 'mcq',
    question:
      'Discrimination differs from prejudice in that:',
    options: [
      'Discrimination is a thought, prejudice is an action',
      'Discrimination is the behavioural component, prejudice is the attitudinal component',
      'They are the same thing',
      'Discrimination only applies to economic exclusion',
    ],
    correct: 1,
    rationale:
      'Prejudice is an attitude (a preconceived opinion), while discrimination is the action or behaviour that results from prejudice. A person may hold prejudices but not discriminate, or discrimination may occur through institutional structures even without individual prejudice.',
  },
  {
    id: 'socio-cs-5-2',
    chapter: 5,
    type: 'case-study',
    passage:
      'The Chhotanagpur Tenancy Act (CNT Act) was enacted to protect the land rights of tribal communities in Jharkhand. Despite this, many Adivasi families have lost their land through forged documents, debt bondage, and encroachment by non-tribal settlers.',
    question: 'The struggle of Adivasi communities to retain their land is primarily related to:',
    options: [
      'Cultural diversity issues',
      'Social inequality and exclusion of tribal communities',
      'Demographic transition',
      'Urbanisation trends',
    ],
    correct: 1,
    rationale:
      'Adivasi land dispossession is a key manifestation of social inequality and exclusion. Despite constitutional protections and laws like the CNT Act, tribal communities continue to face systematic displacement from their ancestral lands.',
  },
  {
    id: 'socio-ar-5-3',
    chapter: 5,
    type: 'assertion-reason',
    question:
      'Assertion: Reservation policy in India has helped in reducing social inequality. Reason: It provides affirmative action to historically disadvantaged groups in education and employment.',
    options: [
      'Both A and R are true and R is the correct explanation of A',
      'Both A and R are true but R is not the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true',
    ],
    correct: 0,
    rationale:
      'Reservation is a form of affirmative action that provides guaranteed access to educational institutions and government jobs for SCs, STs, and OBCs, helping to counteract centuries of social exclusion and promote equality of opportunity.',
  },
  {
    id: 'socio-cs-5-3',
    chapter: 5,
    type: 'case-study',
    passage:
      'A government school in rural Rajasthan refuses admission to a girl child from a Musahar (Dalit) family, citing that the school has "no space." The family approaches the Block Education Officer, who orders immediate admission. The school then segregates the girl in a separate corner of the classroom.',
    question: 'This situation illustrates:',
    options: [
      'Successful implementation of right to education',
      'Multiple forms of social exclusion — caste and gender discrimination',
      'The effectiveness of reservation policy',
      'Cultural diversity in education',
    ],
    correct: 1,
    rationale:
      'The case illustrates intersectional social exclusion — the girl faces discrimination on both caste (Musahar/Dalit) and gender (female child) grounds. Initial denial of admission and subsequent segregation demonstrate how multiple forms of exclusion operate simultaneously.',
  },
  {
    id: 'socio-ar-5-4',
    chapter: 5,
    type: 'assertion-reason',
    question:
      'Assertion: The struggle for land rights is central to Adivasi identity. Reason: Land is not just an economic resource but is integral to tribal culture, spirituality, and self-governance.',
    options: [
      'Both A and R are true and R is the correct explanation of A',
      'Both A and R are true but R is not the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true',
    ],
    correct: 0,
    rationale:
      'For Adivasi communities, land is inseparable from their cultural and spiritual identity. It is the basis of their self-governance, communal living, and relationship with nature. Displacement from land is therefore experienced as both economic loss and cultural destruction.',
  },

  // ─────────────────────────────────────────────
  // Chapter 6 — Cultural Diversity
  // ─────────────────────────────────────────────
  {
    id: 'socio-mcq-6-1',
    chapter: 6,
    type: 'mcq',
    question:
      'Communalism in the Indian context refers to:',
    options: [
      'Living together in harmony',
      'Belief in the supremacy of one\'s own religious community over others',
      'Cooperation between religious groups',
      'The practice of secularism',
    ],
    correct: 1,
    rationale:
      'Communalism is the belief that one\'s own religious community is superior to others, leading to tension, conflict, and the demand for a separate political identity based on religion. It is a major threat to national integration.',
  },
  {
    id: 'socio-ar-6-1',
    chapter: 6,
    type: 'assertion-reason',
    question:
      'Assertion: Secularism in India is different from the Western model. Reason: Indian secularism does not mean separation of religion and state but equal respect for all religions.',
    options: [
      'Both A and R are true and R is the correct explanation of A',
      'Both A and R are true but R is not the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true',
    ],
    correct: 0,
    rationale:
      'Unlike the Western model of strict separation of church and state, Indian secularism (Sarva Dharma Sambhava) means equal respect and treatment of all religions. The state maintains a principled distance from all religions.',
  },
  {
    id: 'socio-mcq-6-2',
    chapter: 6,
    type: 'mcq',
    question:
      'Linguistic chauvinism refers to:',
    options: [
      'Promotion of all languages equally',
      'Aggressive assertion of the superiority of one\'s own language',
      'Learning multiple languages',
      'The policy of multilingualism',
    ],
    correct: 1,
    rationale:
      'Linguistic chauvinism is the aggressive assertion of the superiority of one language over others, often leading to conflict. The anti-Hindi agitation in Tamil Nadu is a classic example of resistance to linguistic chauvinism.',
  },
  {
    id: 'socio-cs-6-1',
    chapter: 6,
    type: 'case-study',
    passage:
      'In 2014, the Bharatiya Nyaya Sanhita was proposed to replace the Indian Penal Code. Several states objected, arguing that laws should reflect regional cultural contexts. Meanwhile, the debate around a Uniform Civil Code (UCC) intensified, with proponents arguing for gender justice and opponents citing violation of cultural diversity.',
    question: 'The UCC debate primarily involves the tension between:',
    options: [
      'Economic growth and poverty reduction',
      'National integration and cultural-religious diversity',
      'Urbanisation and rural development',
      'Demographic transition and population growth',
    ],
    correct: 1,
    rationale:
      'The UCC debate reflects the fundamental tension in Indian democracy between the goal of national integration (one law for all citizens) and the protection of cultural-religious diversity (personal laws of different communities).',
  },
  {
    id: 'socio-ar-6-2',
    chapter: 6,
    type: 'assertion-reason',
    question:
      'Assertion: Regionalism in India is a threat to national unity. Reason: It often involves demands for separate states based on linguistic or ethnic identity.',
    options: [
      'Both A and R are true and R is the correct explanation of A',
      'Both A and R are true but R is not the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true',
    ],
    correct: 0,
    rationale:
      'Regionalism — the assertion of regional identity against national identity — can threaten unity when it takes the form of demands for separate states (like Telangana, Vidarbha) or separatist movements (like in Punjab in the 1980s).',
  },
  {
    id: 'socio-mcq-6-3',
    chapter: 6,
    type: 'mcq',
    question:
      'India\'s federal structure is important for managing cultural diversity because:',
    options: [
      'It centralises all power in the national government',
      'It allows states to protect and promote regional languages and cultures',
      'It eliminates all cultural differences',
      'It prevents states from having their own policies',
    ],
    correct: 1,
    rationale:
      'India\'s quasi-federal structure allows states significant autonomy in matters of language, culture, and education. This enables the accommodation of linguistic and cultural diversity within a unified national framework.',
  },
  {
    id: 'socio-cs-6-2',
    chapter: 6,
    type: 'case-study',
    passage:
      'The state of Meghalaya has its own tribal customary laws that govern marriage, inheritance, and property rights. These laws are different from the Indian Succession Act. For instance, among the Khasi tribe, the youngest daughter inherits the ancestral property.',
    question: 'The coexistence of tribal customary laws and national laws in India reflects:',
    options: [
      'The failure of the legal system',
      'Cultural diversity managed through federal governance',
      'The supremacy of tribal laws over national laws',
      'The absence of a uniform legal framework',
    ],
    correct: 1,
    rationale:
      'India accommodates cultural diversity by allowing tribal communities to follow their customary personal laws in matters of marriage, inheritance, and succession, reflecting the federal principle of respecting regional and cultural differences.',
  },
  {
    id: 'socio-ar-6-3',
    chapter: 6,
    type: 'assertion-reason',
    question:
      'Assertion: Multilingualism is a reality in India. Reason: The Indian Constitution recognises 22 scheduled languages and Hindi and English are used for official purposes.',
    options: [
      'Both A and R are true and R is the correct explanation of A',
      'Both A and R are true but R is not the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true',
    ],
    correct: 0,
    rationale:
      'India is one of the most linguistically diverse countries in the world. The Eighth Schedule of the Constitution lists 22 scheduled languages, and Hindi and English are used as official languages of the Union government.',
  },
  {
    id: 'socio-cs-6-3',
    chapter: 6,
    type: 'case-study',
    passage:
      'During the anti-Hindi agitation of 1965 in Tamil Nadu, thousands of students protested against the imposition of Hindi as the sole official language. The agitation led to the Official Languages Act being amended to provide for the continued use of English alongside Hindi for official purposes.',
    question: 'The anti-Hindi agitation illustrates:',
    options: [
      'Support for linguistic uniformity',
      'Resistance to linguistic chauvinism and assertion of regional linguistic identity',
      'The success of national integration',
      'The irrelevance of language politics',
    ],
    correct: 1,
    rationale:
      'The anti-Hindi agitation was a powerful assertion of Tamil linguistic and cultural identity against perceived Hindi imposition. It demonstrated how linguistic chauvinism can provoke strong regional resistance and shape national language policy.',
  },
  {
    id: 'socio-ar-6-4',
    chapter: 6,
    type: 'assertion-reason',
    question:
      'Assertion: Cultural diversity can be a source of both strength and conflict in a nation. Reason: While diversity enriches society, it can also lead to tensions if not managed through inclusive institutions.',
    options: [
      'Both A and R are true and R is the correct explanation of A',
      'Both A and R are true but R is not the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true',
    ],
    correct: 0,
    rationale:
      'Cultural diversity enriches national life through varied traditions, cuisines, languages, and perspectives. However, when institutional mechanisms fail to accommodate differences fairly, diversity can become a source of conflict, as seen in communal riots and linguistic agitations.',
  },
];
