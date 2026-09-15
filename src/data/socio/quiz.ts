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
  // ─── Chapter 1: Introducing Indian Society ───
  {
    id: 'socio-mcq-1',
    chapter: 1,
    type: 'mcq',
    question: 'Who coined the term "sociological imagination"?',
    options: [
      'Max Weber',
      'C. Wright Mills',
      'Émile Durkheim',
      'Karl Marx'
    ],
    correct: 1,
    rationale: 'C. Wright Mills introduced the concept of sociological imagination to link personal troubles with public issues.'
  },
  {
    id: 'socio-mcq-2',
    chapter: 1,
    type: 'mcq',
    question: 'Community identity in Indian society is primarily based on:',
    options: [
      'Achievement',
      'Choice',
      'Ascriptive characteristics',
      'Economic status'
    ],
    correct: 2,
    rationale: 'Community identity in Indian society is largely ascriptive, determined by birth into caste, religion, or ethnicity rather than individual choice.'
  },
  {
    id: 'socio-ar-1',
    chapter: 1,
    type: 'assertion-reason',
    question: 'Assertion (A): Colonialism played a role in unifying India as a single political entity.\nReason (R): The British created common institutions, laws, and infrastructure that brought diverse communities under one administrative framework.',
    options: [
      'Both A and R are true and R is the correct explanation',
      'Both A and R are true but R is NOT the correct explanation',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correct: 0,
    rationale: 'Colonial administration unified India through railways, census, legal codes, and centralized governance, making R the correct explanation for A.'
  },
  {
    id: 'socio-cs-1',
    chapter: 1,
    type: 'case-study',
    passage: 'During the Indian independence movement, leaders like Tilak and Gandhi mobilised people across caste and regional lines. Urban middle-class professionals, Western-educated elites, and traditional elites all participated in the nationalistic struggle. The press played a crucial role in creating a shared sense of identity among Indians.',
    question: 'According to the passage, which social group was the primary carrier of Indian nationalism?',
    options: [
      'Rural peasants',
      'Urban middle classes',
      'Tribal communities',
      'Industrial workers'
    ],
    correct: 1,
    rationale: 'The passage highlights that urban middle classes, particularly Western-educated professionals, were the key carriers of nationalist ideology and mobilisation.'
  },
  {
    id: 'socio-mcq-3',
    chapter: 1,
    type: 'mcq',
    question: 'Orientalism refers to:',
    options: [
      'Western scholars studying and representing Eastern societies',
      'Eastern scholars studying Western societies',
      'The study of Eastern philosophy',
      'A form of cultural relativism'
    ],
    correct: 0,
    rationale: 'Orientalism is a way of describing Eastern societies through Western perspectives, often involving stereotypical or patronising representations.'
  },
  {
    id: 'socio-mcq-4',
    chapter: 1,
    type: 'mcq',
    question: 'Self-reflexivity in sociology means:',
    options: [
      'Examining one\'s own social biases and assumptions',
      'Reflexively applying theories to others',
      'Studying only individual behaviour',
      'Rejecting all cultural practices'
    ],
    correct: 0,
    rationale: 'Self-reflexivity requires sociologists to critically examine their own positionality, biases, and assumptions when studying society.'
  },

  // ─── Chapter 2: Demographic Structure ───
  {
    id: 'socio-mcq-5',
    chapter: 2,
    type: 'mcq',
    question: 'The birth rate is calculated as:',
    options: [
      'Number of deaths per 1000 population',
      'Number of births per 1000 population per year',
      'Number of births per 100 population per year',
      'Number of live births per 10000 population'
    ],
    correct: 1,
    rationale: 'Birth rate is expressed as B/P × 1000, where B is the number of live births and P is the total population in a given year.'
  },
  {
    id: 'socio-ar-2',
    chapter: 2,
    type: 'assertion-reason',
    question: 'Assertion (A): The Total Fertility Rate (TFR) at replacement level is approximately 2.1.\nReason (R): Replacement level fertility accounts for the fact that some women die before reaching reproductive age, so slightly more than 2 children per woman are needed to maintain population size.',
    options: [
      'Both A and R are true and R is the correct explanation',
      'Both A and R are true but R is NOT the correct explanation',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correct: 0,
    rationale: 'The replacement level TFR of 2.1 accounts for mortality before reproductive age, making R the correct explanation for A.'
  },
  {
    id: 'socio-mcq-6',
    chapter: 2,
    type: 'mcq',
    question: 'The Infant Mortality Rate (IMR) is considered an indicator of:',
    options: [
      'Economic growth',
      'Social backwardness and health infrastructure',
      'Urbanisation levels',
      'Literacy rates'
    ],
    correct: 1,
    rationale: 'IMR reflects overall health conditions, sanitation, nutrition, and medical care availability, making it a key indicator of social development.'
  },
  {
    id: 'socio-cs-2',
    chapter: 2,
    type: 'case-study',
    passage: 'In a village census conducted in 2011, the following data was recorded: Total population = 5000, births in the year = 75, deaths in the year = 30, females aged 15-49 = 1100, infants died before age 1 = 15. The sex ratio was 940 females per 1000 males.',
    question: 'Based on the data, what was the crude birth rate of the village?',
    options: [
      '12 per 1000',
      '15 per 1000',
      '18 per 1000',
      '6 per 1000'
    ],
    correct: 1,
    rationale: 'Birth rate = (75/5000) × 1000 = 15 per 1000 population, which is calculated using the standard formula B/P × 1000.'
  },
  {
    id: 'socio-mcq-7',
    chapter: 2,
    type: 'mcq',
    question: 'The demographic dividend refers to:',
    options: [
      'A decline in death rates',
      'The economic growth potential from a large working-age population',
      'An increase in the birth rate',
      'A reduction in infant mortality'
    ],
    correct: 1,
    rationale: 'Demographic dividend is the economic advantage gained when the proportion of working-age population is larger than the dependent population.'
  },
  {
    id: 'socio-mcq-8',
    chapter: 2,
    type: 'mcq',
    question: 'Who conducted the first scientific census in India in 1901?',
    options: [
      'Lord Curzon',
      'Herbert Risley',
      'William Jones',
      'Max Weber'
    ],
    correct: 1,
    rationale: 'Herbert Risley conducted the 1901 census which introduced systematic classification of castes and communities.'
  },

  // ─── Chapter 3: Social Institutions ───
  {
    id: 'socio-mcq-9',
    chapter: 3,
    type: 'mcq',
    question: 'The caste system is characterised by all of the following EXCEPT:',
    options: [
      'Endogamy',
      'Hierarchy',
      'Purity and pollution',
      'Voluntary membership'
    ],
    correct: 3,
    rationale: 'Caste membership is determined by birth and is not voluntary; it involves endogamy, hierarchy, and concepts of purity and pollution.'
  },
  {
    id: 'socio-ar-3',
    chapter: 3,
    type: 'assertion-reason',
    question: 'Assertion (A): Gotra exogamy prevents marriage within the same patrilineal lineage.\nReason (R): In the Hindu caste system, the gotra system is based on patrilineal descent and marriage within the same gotra is considered incestuous.',
    options: [
      'Both A and R are true and R is the correct explanation',
      'Both A and R are true but R is NOT the correct explanation',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correct: 0,
    rationale: 'Gotra exogamy is based on patrilineal descent where same-gotra marriages are forbidden, making R the correct explanation for A.'
  },
  {
    id: 'socio-mcq-10',
    chapter: 3,
    type: 'mcq',
    question: 'Matriliny is practiced in:',
    options: [
      'Punjab and Haryana',
      'Meghalaya and parts of Kerala',
      'Rajasthan and Gujarat',
      'Bihar and Uttar Pradesh'
    ],
    correct: 1,
    rationale: 'Matriliny, where descent and inheritance pass through the mother, is practiced among the Khasi and other tribes of Meghalaya and in parts of Kerala.'
  },
  {
    id: 'socio-cs-3',
    chapter: 3,
    type: 'case-study',
    passage: 'The Gond tribe is one of the largest tribal groups in India, primarily found in Madhya Pradesh, Chhattisgarh, Maharashtra, and Andhra Pradesh. They have their own system of governance called the "village council" or "panchayat" and practice shifting cultivation. With modernisation, many Gonds have adopted Hindu customs while retaining aspects of their traditional religion.',
    question: 'Which of the following is the largest tribal community in India along with the Bhils and Santhals?',
    options: [
      'The Gonds',
      'The Khasis',
      'The Todas',
      'The Warlis'
    ],
    correct: 0,
    rationale: 'The Gonds, along with Bhils and Santhals, form the three largest tribal communities in India by population.'
  },
  {
    id: 'socio-mcq-11',
    chapter: 3,
    type: 'mcq',
    question: 'What percentage of India\'s population is tribal according to the 2011 census?',
    options: [
      '5.2%',
      '7.5%',
      '8.2%',
      '10.1%'
    ],
    correct: 2,
    rationale: 'Tribals constitute approximately 8.2% of India\'s total population according to the 2011 census data.'
  },
  {
    id: 'socio-mcq-12',
    chapter: 3,
    type: 'mcq',
    question: 'Colonial census rigidified caste by:',
    options: [
      'Abolishing caste distinctions',
      'Systematically classifying and ranking communities',
      'Promoting inter-caste marriages',
      'Removing caste-based occupations'
    ],
    correct: 1,
    rationale: 'The colonial census introduced systematic classification and ranking of castes, making what was a fluid social system more rigid and hierarchical.'
  },

  // ─── Chapter 4: Market as Social Institution ───
  {
    id: 'socio-mcq-13',
    chapter: 4,
    type: 'mcq',
    question: 'The concept of the "invisible hand" was proposed by:',
    options: [
      'Karl Marx',
      'Adam Smith',
      'Max Weber',
      'Émile Durkheim'
    ],
    correct: 1,
    rationale: 'Adam Smith used the metaphor of the "invisible hand" to describe how market forces self-regulate through individual self-interest.'
  },
  {
    id: 'socio-ar-4',
    chapter: 4,
    type: 'assertion-reason',
    question: 'Assertion (A): Karl Marx believed that capitalism is exploitative.\nReason (R): Marx argued that capitalists extract surplus value from workers by paying them less than the value they produce.',
    options: [
      'Both A and R are true and R is the correct explanation',
      'Both A and R are true but R is NOT the correct explanation',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correct: 0,
    rationale: 'Marx\'s theory of surplus value explains how capitalists exploit workers by appropriating the difference between the value workers create and their wages, making R the correct explanation.'
  },
  {
    id: 'socio-mcq-14',
    chapter: 4,
    type: 'mcq',
    question: 'According to Max Weber, status is:',
    options: [
      'Only determined by economic wealth',
      'A social honour or prestige associated with a particular position',
      'Independent of lifestyle and consumption patterns',
      'The same as class position'
    ],
    correct: 1,
    rationale: 'Weber distinguished status from class, arguing that status represents social honour and prestige that may not directly correlate with economic position.'
  },
  {
    id: 'socio-cs-4',
    chapter: 4,
    type: 'case-study',
    passage: 'The weekly haat (market) in rural India serves multiple purposes. Farmers sell their produce directly to consumers, bypassing middlemen. Besides commerce, it is a social gathering place where people exchange news, celebrate festivals, and arrange marriages. In many villages, the haat has been functioning for centuries and remains integral to the local economy.',
    question: 'The weekly haat demonstrates that markets are:',
    options: [
      'Purely economic institutions',
      'Socially embedded institutions',
      'Governments-controlled entities',
      'Urban phenomena only'
    ],
    correct: 1,
    rationale: 'The weekly haat exemplifies how markets are socially embedded, serving both economic and social functions within the community.'
  },
  {
    id: 'socio-mcq-15',
    chapter: 4,
    type: 'mcq',
    question: 'Which of the following is an example of commoditisation?',
    options: [
      'Giving gifts during festivals',
      'Selling water in bottled form',
      'Donating to charity',
      'Volunteer work'
    ],
    correct: 1,
    rationale: 'Commoditisation is the process of converting goods, services, or ideas into objects that can be bought and sold, like bottling water for sale.'
  },
  {
    id: 'socio-mcq-16',
    chapter: 4,
    type: 'mcq',
    question: 'The Chettiars of Tamil Nadu were primarily engaged in:',
    options: [
      'Agriculture',
      'Banking and money-lending',
      'Textile manufacturing',
      'Mining'
    ],
    correct: 1,
    rationale: 'The Chettiars (Nattukottai Chettiars) were a caste community traditionally engaged in banking, money-lending, and trade.'
  },

  // ─── Chapter 5: Structural Change ───
  {
    id: 'socio-mcq-17',
    chapter: 5,
    type: 'mcq',
    question: 'Deindustrialisation during colonial rule refers to:',
    options: [
      'Growth of Indian industries',
      'Decline of indigenous handicrafts and manufacturing',
      'Introduction of new industries',
      'Nationalisation of industries'
    ],
    correct: 1,
    rationale: 'Deindustrialisation was the systematic destruction of India\'s traditional industries, especially textiles, under colonial economic policies.'
  },
  {
    id: 'socio-ar-5',
    chapter: 5,
    type: 'assertion-reason',
    question: 'Assertion (A): Colonialism in India was based on capitalism.\nReason (R): The British established plantations, mines, and indentured labour systems to extract raw materials and create markets for manufactured goods.',
    options: [
      'Both A and R are true and R is the correct explanation',
      'Both A and R are true but R is NOT the correct explanation',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correct: 0,
    rationale: 'Colonial capitalism involved extracting resources and creating exploitative economic structures, making R the correct explanation for A.'
  },
  {
    id: 'socio-cs-5',
    chapter: 5,
    type: 'case-study',
    passage: 'Kolkata was founded in 1690 by Job Charnock of the East India Company. Before colonial rule, the area consisted of three villages: Sutanuti, Gobindapur, and Kalikata. Under British rule, Kolkata became the capital of British India and developed into a major industrial and commercial centre with jute mills, railways, and port facilities. Many artisans and craftspeople migrated to the city seeking employment.',
    question: 'The transformation of Kolkata from three villages to a major city illustrates:',
    options: [
      'Rural-urban migration',
      'Colonial urbanisation',
      'Industrialisation only',
      'Decentralised development'
    ],
    correct: 1,
    rationale: 'Kolkata\'s growth from villages to a major colonial city exemplifies how urbanisation was driven by colonial administrative and economic interests.'
  },
  {
    id: 'socio-mcq-18',
    chapter: 5,
    type: 'mcq',
    question: 'The "drain of wealth" theory was propounded by:',
    options: [
      'Mahatma Gandhi',
      'Dadabhai Naoroji',
      'Jawaharlal Nehru',
      'Bal Gangadhar Tilak'
    ],
    correct: 1,
    rationale: 'Dadabhai Naoroji\'s "drain theory" explained how wealth was systematically transferred from India to Britain through colonial economic policies.'
  },
  {
    id: 'socio-mcq-19',
    chapter: 5,
    type: 'mcq',
    question: 'Which of the following cities experienced decline during colonial rule?',
    options: [
      'Kolkata',
      'Bombay',
      'Surat',
      'Delhi'
    ],
    correct: 2,
    rationale: 'Surat, once a thriving port, declined after the British established Bombay as the main port and diverted trade away from Surat.'
  },
  {
    id: 'socio-mcq-20',
    chapter: 5,
    type: 'mcq',
    question: 'Industrialisation is primarily characterised by:',
    options: [
      'Agricultural production',
      'Machine-based production',
      'Handicraft production',
      'Service sector growth'
    ],
    correct: 1,
    rationale: 'Industrialisation involves the shift from manual/handicraft production to machine-based manufacturing in factories.'
  },

  // ─── Chapter 6: Cultural Change ───
  {
    id: 'socio-mcq-21',
    chapter: 6,
    type: 'mcq',
    question: 'Who coined the concepts of "sanskritisation" and "westernisation"?',
    options: [
      'Louis Dumont',
      'M.N. Srinivas',
      'G.S. Ghurye',
      'Yogendra Singh'
    ],
    correct: 1,
    rationale: 'M.N. Srinivas introduced these concepts to describe cultural mobility and social change in Indian society.'
  },
  {
    id: 'socio-ar-6',
    chapter: 6,
    type: 'assertion-reason',
    question: 'Assertion (A): Sanskritisation involves lower castes adopting upper-caste customs and rituals.\nReason (R): By emulating Brahminical practices, lower castes attempt to improve their social status within the caste hierarchy.',
    options: [
      'Both A and R are true and R is the correct explanation',
      'Both A and R are true but R is NOT the correct explanation',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correct: 0,
    rationale: 'Sanskritisation is a strategy for social mobility where lower castes adopt Brahminical practices to claim higher status, making R the correct explanation.'
  },
  {
    id: 'socio-mcq-22',
    chapter: 6,
    type: 'mcq',
    question: 'Westernisation in India refers to:',
    options: [
      'Total rejection of Indian culture',
      'Changes due to over 150 years of British colonial impact',
      'Only adoption of Western dress',
      'Changes limited to urban areas'
    ],
    correct: 1,
    rationale: 'Westernisation encompasses the broad spectrum of cultural changes resulting from prolonged British colonial influence over more than 150 years.'
  },
  {
    id: 'socio-cs-6',
    chapter: 6,
    type: 'case-study',
    passage: 'Raja Ram Mohan Roy founded the Brahmo Samaj in 1828 to reform Hindu society. He campaigned against sati and child marriage, promoted women\'s education, and advocated for a rational interpretation of Vedas. The Brahmo Samaj influenced many social reformers and contributed to the passing of the Bengal Sati Regulation Act in 1829.',
    question: 'Raja Ram Mohan Roy and the Brahmo Samaj represent which type of cultural change?',
    options: [
      'Sanskritisation',
      'Westernisation',
      'Reform movements',
      'Revolutionary change'
    ],
    correct: 2,
    rationale: 'The Brahmo Samaj was a reform movement that sought to change social practices through rational interpretation of scriptures and progressive legislation.'
  },
  {
    id: 'socio-mcq-23',
    chapter: 6,
    type: 'mcq',
    question: 'Who started the first women\'s school in India along with Jyotirao Phule?',
    options: [
      'Savitribai Phule',
      'Pandita Ramabai',
      'Sarojini Naidu',
      'Kamaladevi Chattopadhyay'
    ],
    correct: 0,
    rationale: 'Savitribai Phule, along with her husband Jyotirao Phule, started the first school for girls in Pune in 1848.'
  },
  {
    id: 'socio-mcq-24',
    chapter: 6,
    type: 'mcq',
    question: 'Rajni Kothari described the secularisation of caste as:',
    options: [
      'Caste becoming irrelevant',
      'Caste being used for political mobilisation',
      'Caste being banned by law',
      'Caste disappearing in cities'
    ],
    correct: 1,
    rationale: 'Kothari argued that caste has been secularised in the sense that it is now used for political purposes like vote-bank politics rather than purely religious functions.'
  },

  // ─── Chapter 7: Constitution ───
  {
    id: 'socio-mcq-25',
    chapter: 7,
    type: 'mcq',
    question: 'Article 17 of the Indian Constitution deals with:',
    options: [
      'Right to equality',
      'Abolition of untouchability',
      'Right to freedom',
      'Right against exploitation'
    ],
    correct: 1,
    rationale: 'Article 17 abolishes untouchability and forbids its practice in any form, making enforcement of disability arising out of untouchability a punishable offence.'
  },
  {
    id: 'socio-ar-7',
    chapter: 7,
    type: 'assertion-reason',
    question: 'Assertion (A): Fundamental Rights are justiciable while Directive Principles are non-justiciable.\nReason (R): Fundamental Rights can be enforced by courts, while Directive Principles are guidelines for the state that cannot be enforced through legal action.',
    options: [
      'Both A and R are true and R is the correct explanation',
      'Both A and R are true but R is NOT the correct explanation',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correct: 0,
    rationale: 'Justiciability means enforceability through courts; Fundamental Rights are enforceable while Directive Principles are not, making R the correct explanation.'
  },
  {
    id: 'socio-mcq-26',
    chapter: 7,
    type: 'mcq',
    question: 'Who was the chairman of the Drafting Committee of the Indian Constitution?',
    options: [
      'Jawaharlal Nehru',
      'Rajendra Prasad',
      'Dr. B.R. Ambedkar',
      'Sardar Vallabhbhai Patel'
    ],
    correct: 2,
    rationale: 'Dr. B.R. Ambedkar chaired the Drafting Committee and played a crucial role in shaping the Constitution.'
  },
  {
    id: 'socio-cs-7',
    chapter: 7,
    type: 'case-study',
    passage: 'The 103rd Constitutional Amendment Act introduced 10% reservation for Economically Weaker Sections (EWS) of the forward castes. This reservation was separate from the existing reservations for Scheduled Castes (SCs), Scheduled Tribes (STs), and Other Backward Classes (OBCs). The amendment was challenged in the Supreme Court but ultimately upheld.',
    question: 'The reservation system in India aims to:',
    options: [
      'Create a casteless society immediately',
      'Address historical discrimination and promote social justice',
      'Benefit only economically weaker sections',
      'Replace merit-based selection entirely'
    ],
    correct: 1,
    rationale: 'Reservation aims to address centuries of social discrimination by providing affirmative action to historically marginalised communities.'
  },
  {
    id: 'socio-mcq-27',
    chapter: 7,
    type: 'mcq',
    question: 'The basic structure doctrine was established in which landmark case?',
    options: [
      ' Golaknath v. State of Punjab',
      'Kesavananda Bharati v. State of Kerala',
      'Minerva Mills v. Union of India',
      'Maneka Gandhi v. Union of India'
    ],
    correct: 1,
    rationale: 'The Kesavananda Bharati case (1973) established that Parliament cannot amend the basic structure of the Constitution.'
  },
  {
    id: 'socio-mcq-28',
    chapter: 7,
    type: 'mcq',
    question: 'Universal adult franchise means:',
    options: [
      'Only literate citizens can vote',
      'Only male citizens can vote',
      'Every adult citizen has the right to vote',
      'Only property owners can vote'
    ],
    correct: 2,
    rationale: 'Universal adult franchise grants every citizen above 18 years the right to vote regardless of caste, religion, gender, or economic status.'
  },

  // ─── Chapter 8: Rural Society ───
  {
    id: 'socio-mcq-29',
    chapter: 8,
    type: 'mcq',
    question: 'The Green Revolution introduced:',
    options: [
      'Traditional farming methods',
      'High Yielding Variety (HYV) seeds',
      'Organic farming',
      'Shift to cash crops only'
    ],
    correct: 1,
    rationale: 'The Green Revolution brought HYV seeds, along with chemical fertilisers and irrigation, to boost agricultural productivity.'
  },
  {
    id: 'socio-ar-8',
    chapter: 8,
    type: 'assertion-reason',
    question: 'Assertion (A): Zamindari abolition was the most effective land reform in independent India.\nReason (R): Unlike tenancy abolition and land ceiling laws, zamindari abolition directly removed the intermediary class that extracted rent without any productive contribution.',
    options: [
      'Both A and R are true and R is the correct explanation',
      'Both A and R are true but R is NOT the correct explanation',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correct: 0,
    rationale: 'Zamindari abolition was effective because it eliminated exploitative intermediaries, unlike other reforms that had loopholes and poor implementation, making R the correct explanation.'
  },
  {
    id: 'socio-cs-8',
    chapter: 8,
    type: 'case-study',
    passage: 'Vinoba Bhave launched the Bhoodan movement in 1951 in Pochampally, Andhra Pradesh. He walked from village to village asking landowners to voluntarily donate a portion of their land to landless labourers. The movement was seen as a non-violent way to address land inequality. While it achieved some success in states like Bihar and UP, it could not significantly reduce landlessness.',
    question: 'The Bhoodan movement is an example of:',
    options: [
      'Government-mandated land reform',
      'Voluntary land redistribution',
      'Market-driven land purchase',
      'Colonial land policy'
    ],
    correct: 1,
    rationale: 'Bhoodan was a voluntary movement where landowners were asked to donate land, making it a non-coercive approach to land redistribution.'
  },
  {
    id: 'socio-mcq-30',
    chapter: 8,
    type: 'mcq',
    question: 'Daniel Thorner classified Indian villages as:',
    options: [
      'Rich and poor only',
      'Landlord, peasant, and laborer villages',
      'Hindu and Muslim villages',
      'Agricultural and non-agricultural villages'
    ],
    correct: 1,
    rationale: 'Thorner classified villages based on the dominance of different classes: landlord-dominated, peasant-dominated, and labourer-dominated.'
  },
  {
    id: 'socio-mcq-31',
    chapter: 8,
    type: 'mcq',
    question: 'Benami transfers refer to:',
    options: [
      'Open sale of land',
      'Land held in someone else\'s name to evade land ceiling laws',
      'Government acquisition of land',
      'Land gifted to temples'
    ],
    correct: 1,
    rationale: 'Benami transactions involve holding property in the name of another person to circumvent legal restrictions like land ceiling laws.'
  },
  {
    id: 'socio-mcq-32',
    chapter: 8,
    type: 'mcq',
    question: 'Bonded labour was abolished under which Act?',
    options: [
      'Minimum Wages Act',
      'Bonded Labour System (Abolition) Act, 1976',
      'Land Reform Act',
      'Employment of Manual Scavengers Act'
    ],
    correct: 1,
    rationale: 'The Bonded Labour System (Abolition) Act, 1976 made the practice of bonded labour a punishable offence.'
  },

  // ─── Chapter 9: Industrial Society ───
  {
    id: 'socio-mcq-33',
    chapter: 9,
    type: 'mcq',
    question: 'The organised sector in India is characterised by:',
    options: [
      'Less than 10 employees',
      'No job security or benefits',
      '10+ employees with PF, bonus, and other benefits',
      'Seasonal employment only'
    ],
    correct: 2,
    rationale: 'The organised sector employs 10 or more workers and provides provident fund, gratuity, bonus, and other statutory benefits.'
  },
  {
    id: 'socio-ar-9',
    chapter: 9,
    type: 'assertion-reason',
    question: 'Assertion (A): The Bombay Textile Mill Strike of 1982 was a turning point in Indian industrial relations.\nReason (R): Led by Datta Samant, the strike lasted 18 months and resulted in the closure of many mills, permanently changing Mumbai\'s industrial landscape.',
    options: [
      'Both A and R are true and R is the correct explanation',
      'Both A and R are true but R is NOT the correct explanation',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correct: 0,
    rationale: 'The 1982 strike led by Datta Samant did fundamentally alter Mumbai\'s textile industry, causing permanent mill closures, making R the correct explanation.'
  },
  {
    id: 'socio-mcq-34',
    chapter: 9,
    type: 'mcq',
    question: 'Fordism refers to:',
    options: [
      'Handicraft production',
      'Assembly line mass production',
      'Agricultural mechanisation',
      'Service sector management'
    ],
    correct: 1,
    rationale: 'Fordism is a system of mass production using assembly lines, named after Henry Ford who pioneered this method in automobile manufacturing.'
  },
  {
    id: 'socio-cs-9',
    chapter: 9,
    type: 'case-study',
    passage: 'Home-based work in India involves women and children working in their houses making bidi (hand-rolled cigarettes), assembling garments, or crafting carpets for export. Workers receive piece-rate payment with no job security, social security, or minimum wage protections. The contractors who supply raw materials and collect finished goods profit significantly while the workers remain impoverished.',
    question: 'Home-based work primarily affects:',
    options: [
      'Male factory workers',
      'Women and children in vulnerable employment',
      'Organised sector employees',
      'Government workers'
    ],
    correct: 1,
    rationale: 'Home-based work disproportionately employs women and children in informal, exploitative conditions without labour protections.'
  },
  {
    id: 'socio-mcq-35',
    chapter: 9,
    type: 'mcq',
    question: 'Taylorism refers to:',
    options: [
      'Assembly line production',
      'Scientific management through task specialisation',
      'Worker self-management',
      'Outsourcing production'
    ],
    correct: 1,
    rationale: 'Taylorism, developed by Frederick Taylor, involves scientific management with task specialisation to maximise efficiency.'
  },
  {
    id: 'socio-mcq-36',
    chapter: 9,
    type: 'mcq',
    question: 'What percentage of India\'s workforce is in the unorganised sector?',
    options: [
      '50%',
      '60%',
      '70%',
      '80%'
    ],
    correct: 2,
    rationale: 'Approximately 70% of India\'s workforce is employed in the unorganised sector with no job security or social protection.'
  },

  // ─── Chapter 10: Globalisation ───
  {
    id: 'socio-mcq-37',
    chapter: 10,
    type: 'mcq',
    question: 'Economic liberalisation in India was introduced in:',
    options: [
      '1985',
      '1991',
      '1995',
      '2000'
    ],
    correct: 1,
    rationale: 'India introduced major economic liberalisation reforms in 1991 under Prime Minister P.V. Narasimha Rao and Finance Minister Dr. Manmohan Singh.'
  },
  {
    id: 'socio-ar-10',
    chapter: 10,
    type: 'assertion-reason',
    question: 'Assertion (A): Globalisation has created both winners and losers.\nReason (R): While some sectors like IT benefited enormously, traditional industries like handloom and small-scale manufacturing declined due to competition from multinational corporations.',
    options: [
      'Both A and R are true and R is the correct explanation',
      'Both A and R are true but R is NOT the correct explanation',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correct: 0,
    rationale: 'Globalisation\'s uneven impact creates winners (IT, services) and losers (traditional crafts, small industries), making R the correct explanation.'
  },
  {
    id: 'socio-cs-10',
    chapter: 10,
    type: 'case-study',
    passage: 'In the 1970s, women of the Chipko movement in Uttarakhand hugged trees to prevent their cutting by contractors. The movement was led by local women who depended on forests for fuel, fodder, and livelihood. Their protest drew international attention to environmental conservation and the rights of local communities over natural resources.',
    question: 'The Chipko movement is an example of:',
    options: [
      'Pro-globalisation movement',
      'Ecological/environmental movement',
      'Labour movement',
      'Political party movement'
    ],
    correct: 1,
    rationale: 'Chipko was an ecological movement focused on forest conservation and local community rights over natural resources.'
  },
  {
    id: 'socio-mcq-38',
    chapter: 10,
    type: 'mcq',
    question: 'A "weightless economy" refers to:',
    options: [
      'Manufacturing heavy goods',
      'Knowledge-based and IT-driven economic activity',
      'Agricultural production',
      'Mining and extraction'
    ],
    correct: 1,
    rationale: 'The weightless economy emphasises knowledge, information, and services rather than physical goods and materials.'
  },
  {
    id: 'socio-mcq-39',
    chapter: 10,
    type: 'mcq',
    question: 'Multinational Corporations (MNCs) are characterised by:',
    options: [
      'Operating in only one country',
      'Having operations in multiple countries',
      'Being government-owned',
      'Operating only in developing countries'
    ],
    correct: 1,
    rationale: 'MNCs are corporations that have production facilities and other operations in more than one country.'
  },
  {
    id: 'socio-mcq-40',
    chapter: 10,
    type: 'mcq',
    question: 'Culture of consumption associated with globalisation includes:',
    options: [
      'Village haats',
      'Malls, multiplexes, and branded goods',
      'Traditional markets',
      'Community sharing'
    ],
    correct: 1,
    rationale: 'Globalisation has promoted a consumer culture centred around malls, multiplexes, branded products, and lifestyle consumption.'
  },

  // ─── Chapter 11: Mass Media ───
  {
    id: 'socio-mcq-41',
    chapter: 11,
    type: 'mcq',
    question: 'The relationship between media and society is described as:',
    options: [
      'One-way communication',
      'Dialectical',
      'Independent',
      'Non-existent'
    ],
    correct: 1,
    rationale: 'The media-society relationship is dialectical — media influences society and society shapes media content and practices.'
  },
  {
    id: 'socio-ar-11',
    chapter: 11,
    type: 'assertion-reason',
    question: 'Assertion (A): Jawaharlal Nehru described the media as the "watchdog of democracy."\nReason (R): A free press is essential to hold the government accountable and inform citizens about public affairs.',
    options: [
      'Both A and R are true and R is the correct explanation',
      'Both A and R are true but R is NOT the correct explanation',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correct: 0,
    rationale: 'Nehru believed that a free press serves as a check on government power and keeps citizens informed, making R the correct explanation.'
  },
  {
    id: 'socio-mcq-42',
    chapter: 11,
    type: 'mcq',
    question: 'Alam Ara (1931) was significant because it was:',
    options: [
      'The first Indian newspaper',
      'The first Indian talkie (sound film)',
      'The first radio broadcast',
      'The first TV channel'
    ],
    correct: 1,
    rationale: 'Alam Ara, directed by Ardeshir Irani, was the first Indian film with sound, marking the beginning of talkies in Indian cinema.'
  },
  {
    id: 'socio-cs-11',
    chapter: 11,
    type: 'case-study',
    passage: 'All India Radio (AIR) broadcasts in 24 languages and 146 dialects, reaching audiences across urban and rural India. It provides news, entertainment, educational content, and emergency information. Despite competition from private channels, AIR remains important for reaching remote areas where television and internet penetration is low.',
    question: 'All India Radio\'s extensive language coverage serves the purpose of:',
    options: [
      'Promoting only Hindi language',
      'Ensuring information reaches diverse linguistic communities',
      'Eliminating regional languages',
      'Serving only urban audiences'
    ],
    correct: 1,
    rationale: 'AIR\'s multilingual broadcasts ensure that information and entertainment reach India\'s linguistically diverse population.'
  },
  {
    id: 'socio-mcq-43',
    chapter: 11,
    type: 'mcq',
    question: 'STAR Plus switched from English to Hindi programming in:',
    options: [
      '1991',
      '1994',
      '1996',
      '2000'
    ],
    correct: 2,
    rationale: 'STAR Plus switched to Hindi programming in 1996 to capture the larger Hindi-speaking audience market.'
  },
  {
    id: 'socio-mcq-44',
    chapter: 11,
    type: 'mcq',
    question: 'The Bombay Samachar (1822) was:',
    options: [
      'An English newspaper',
      'The first Gujarati daily newspaper',
      'A Hindi magazine',
      'An Urdu literary journal'
    ],
    correct: 1,
    rationale: 'The Bombay Samachar, started in 1822, was the first Gujarati language daily newspaper in India.'
  },

  // ─── Chapter 12: Social Movements ───
  {
    id: 'socio-mcq-45',
    chapter: 12,
    type: 'mcq',
    question: 'The relative deprivation theory explains social movements as arising from:',
    options: [
      'Economic prosperity',
      'The gap between expectations and actual conditions',
      'Government policies',
      'Religious beliefs'
    ],
    correct: 1,
    rationale: 'Relative deprivation theory suggests that movements arise when people perceive a gap between what they deserve and what they actually have.'
  },
  {
    id: 'socio-ar-12',
    chapter: 12,
    type: 'assertion-reason',
    question: 'Assertion (A): Reformist movements seek to change specific aspects of society within the existing system.\nReason (R): Revolutionary movements aim to completely overthrow and replace the existing social order.',
    options: [
      'Both A and R are true and R is the correct explanation',
      'Both A and R are true but R is NOT the correct explanation',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correct: 1,
    rationale: 'Both statements are true definitions, but R does not explain A — they are separate but related concepts describing different approaches to social change.'
  },
  {
    id: 'socio-cs-12',
    chapter: 12,
    type: 'case-study',
    passage: 'The All India Kisan Sabha (AIKS) was formed in 1936 to represent the interests of peasants. It organised struggles against feudal exploitation, demanded land reform, and fought for debt relief. The Bardoli Satyagraha of 1928, led by Vallabhbhai Patel, was a landmark peasant movement against excessive land revenue assessment.',
    question: 'The Bardoli Satyagraha is classified as:',
    options: [
      'A workers\' movement',
      'A peasant movement',
      'A Dalit movement',
      'An environmental movement'
    ],
    correct: 1,
    rationale: 'The Bardoli Satyagraha was a peasant movement against unjust land revenue demands by the colonial government.'
  },
  {
    id: 'socio-mcq-46',
    chapter: 12,
    type: 'mcq',
    question: 'The Dalit Panther movement was inspired by:',
    options: [
      'The Black Panther movement in the USA',
      'The Indian National Congress',
      'The Communist Party',
      'Gandhian philosophy'
    ],
    correct: 0,
    rationale: 'The Dalit Panther movement, founded in Maharashtra in 1972, was inspired by the Black Panther movement in the United States.'
  },
  {
    id: 'socio-mcq-47',
    chapter: 12,
    type: 'mcq',
    question: 'New social movements primarily focus on:',
    options: [
      'Class struggle',
      'Quality of life issues like environment and human rights',
      'Economic redistribution',
      'Territorial expansion'
    ],
    correct: 1,
    rationale: 'New social movements focus on quality-of-life issues such as environmental protection, gender equality, and human rights rather than class-based struggles.'
  },
  {
    id: 'socio-mcq-48',
    chapter: 12,
    type: 'mcq',
    question: 'Which of the following is a workers\' trade union in India?',
    options: [
      'Dalit Panthers',
      'All India Trade Union Congress (AITUC)',
      'Chipko movement',
      'Brahmo Samaj'
    ],
    correct: 1,
    rationale: 'AITUC (All India Trade Union Congress) is one of the oldest and largest trade union federations in India, founded in 1920.'
  }
];
