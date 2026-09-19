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
  // Chapter 1 — Introducing Indian Society
  // ─────────────────────────────────────────────
  {
    id: 'socio-mcq-1-1',
    chapter: 1,
    type: 'mcq',
    question: 'C. Wright Mills coined the term "sociological imagination" to describe the ability to see the link between:',
    options: [
      'Economy and politics',
      'Personal troubles and public issues',
      'Tradition and modernity',
      'Rural and urban life',
    ],
    correct: 1,
    rationale:
      'Mills argued that sociological imagination helps individuals connect their personal biography with wider social structures, distinguishing personal troubles from public issues.',
  },
  {
    id: 'socio-ar-1-1',
    chapter: 1,
    type: 'assertion-reason',
    question: 'Assertion: Colonialism unified India through railways, census, and postal systems. Reason: The colonial state needed administrative control over a vast territory.',
    options: [
      'Both A and R are true and R is the correct explanation of A',
      'Both A and R are true but R is not the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true',
    ],
    correct: 0,
    rationale:
      'The British introduced railways, census, and postal systems primarily for administrative and economic exploitation of India, which incidentally unified the country politically.',
  },
  {
    id: 'socio-mcq-1-2',
    chapter: 1,
    type: 'mcq',
    question: 'Edward Said\'s concept of "Orientalism" refers to:',
    options: [
      'Indian scholars studying Western societies',
      'Western construction and stereotyping of Eastern societies',
      'The Eastern revival of classical learning',
      'A school of art depicting Eastern landscapes',
    ],
    correct: 1,
    rationale:
      'Said argued that Orientalism was a discourse through which the West constructed a stereotyped and inferior image of the East to justify colonial domination.',
  },
  {
    id: 'socio-mcq-1-3',
    chapter: 1,
    type: 'mcq',
    question: 'Which of the following is an example of an "ascriptive" identity?',
    options: [
      'A doctor by profession',
      'A person elected as president',
      'A person born into a particular caste',
      'A self-taught musician',
    ],
    correct: 2,
    rationale:
      'Ascriptive identities are assigned at birth based on attributes like caste, ethnicity, or gender, unlike achieved identities which are acquired through effort or choice.',
  },
  {
    id: 'socio-ar-1-2',
    chapter: 1,
    type: 'assertion-reason',
    question: 'Assertion: Sociology is different from common sense. Reason: Sociology relies on systematic methods and empirical evidence while common sense is based on informal knowledge.',
    options: [
      'Both A and R are true and R is the correct explanation of A',
      'Both A and R are true but R is not the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true',
    ],
    correct: 0,
    rationale:
      'Sociology uses rigorous research methods, verified data, and theoretical frameworks, whereas common sense is based on everyday experiences and unverified assumptions.',
  },
  {
    id: 'socio-cs-1-1',
    chapter: 1,
    type: 'case-study',
    passage:
      'Ravi, a young software engineer from a small village in Bihar, moved to Bengaluru for work. He noticed that his urban colleagues spoke about "gender equality" and "individual choice," while at home, decisions were still made collectively by elders. He felt caught between two worlds.',
    question: 'Ravi\'s experience best illustrates the concept of:',
    options: [
      'Social stratification',
      'Sociological imagination',
      'Cultural lag',
      'Secularisation',
    ],
    correct: 1,
    rationale:
      'Ravi\'s ability to reflect on the contrast between his personal experience and the broader social norms of two different settings reflects the sociological imagination — connecting personal troubles with public issues.',
  },
  {
    id: 'socio-mcq-1-4',
    chapter: 1,
    type: 'mcq',
    question: 'The Indian nationalist movement was primarily carried by:',
    options: [
      'Rural peasantry',
      'Urban middle classes',
      'Tribal communities',
      'Industrial working class',
    ],
    correct: 1,
    rationale:
      'The urban middle classes, educated in English and exposed to modern ideas of liberty and democracy, played a leading role in organising and leading the nationalist movement.',
  },
  {
    id: 'socio-mcq-1-5',
    chapter: 1,
    type: 'mcq',
    question: 'Which of the following best describes "unity in diversity" in Indian society?',
    options: [
      'India has only one religion practiced in different ways',
      'Diverse communities coexist while maintaining distinct identities',
      'Uniformity in language across all states',
      'Absence of regional differences',
    ],
    correct: 1,
    rationale:
      'India\'s plurality means that diverse religious, linguistic, and cultural groups coexist, sharing a common national identity while retaining their distinct traditions.',
  },
  {
    id: 'socio-ar-1-3',
    chapter: 1,
    type: 'assertion-reason',
    question: 'Assertion: Self-reflexivity is important in sociology. Reason: Sociologists must examine their own biases to produce objective knowledge.',
    options: [
      'Both A and R are true and R is the correct explanation of A',
      'Both A and R are true but R is not the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true',
    ],
    correct: 0,
    rationale:
      'Self-reflexivity requires sociologists to acknowledge their own positionality and biases, which is essential for producing credible and objective social research.',
  },
  {
    id: 'socio-mcq-1-6',
    chapter: 1,
    type: 'mcq',
    question: 'Sociology differs from philosophy in that sociology:',
    options: [
      'Is purely speculative and abstract',
      'Focuses on empirical study of society',
      'Deals only with moral questions',
      'Does not use any research methods',
    ],
    correct: 1,
    rationale:
      'While philosophy is largely speculative and deals with abstract questions, sociology is an empirical discipline that studies society through systematic observation and analysis.',
  },

  // ─────────────────────────────────────────────
  // Chapter 2 — Demographic Structure
  // ─────────────────────────────────────────────
  {
    id: 'socio-mcq-2-1',
    chapter: 2,
    type: 'mcq',
    question: 'According to Malthus, population grows in which progression while food supply grows arithmetically?',
    options: [
      'Arithmetic progression',
      'Geometric progression',
      'Logarithmic progression',
      'Exponential decay',
    ],
    correct: 1,
    rationale:
      'Malthus argued that population tends to grow geometrically (2, 4, 8, 16…) while food supply grows only arithmetically (1, 2, 3, 4…), leading to eventual crisis.',
  },
  {
    id: 'socio-ar-2-1',
    chapter: 2,
    type: 'assertion-reason',
    question: 'Assertion: India is undergoing a demographic transition. Reason: Birth rates have been declining while death rates fell earlier.',
    options: [
      'Both A and R are true and R is the correct explanation of A',
      'Both A and R are true but R is not the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true',
    ],
    correct: 0,
    rationale:
      'Demographic transition occurs when death rates fall first due to better healthcare, followed by a decline in birth rates, leading to population stabilisation over time.',
  },
  {
    id: 'socio-mcq-2-2',
    chapter: 2,
    type: 'mcq',
    question: 'The "replacement level" Total Fertility Rate (TFR) is approximately:',
    options: [
      '1.0',
      '1.5',
      '2.1',
      '3.0',
    ],
    correct: 2,
    rationale:
      'A TFR of 2.1 means each couple replaces itself with the next generation, accounting for mortality. Below this level, population eventually declines.',
  },
  {
    id: 'socio-cs-2-1',
    chapter: 2,
    type: 'case-study',
    passage:
      'Kerala has a TFR of 1.5 and high literacy rates, while Uttar Pradesh has a TFR above 2.7 with lower female literacy. The central government has attempted various population policies to bridge this gap.',
    question: 'The contrast between Kerala and UP primarily highlights:',
    options: [
      'Regional disparities in demographic transition',
      'Differences in Malthusian growth patterns',
      'The failure of all population policies',
      'The irrelevance of literacy to fertility',
    ],
    correct: 0,
    rationale:
      'Kerala\'s high literacy, especially female literacy, and good healthcare have accelerated its demographic transition, while UP lags due to lower literacy and poorer health infrastructure.',
  },
  {
    id: 'socio-mcq-2-3',
    chapter: 2,
    type: 'mcq',
    question: 'The declining sex ratio in India is primarily attributed to:',
    options: [
      'Higher male mortality',
      'Son preference and sex-selective practices',
      'Female migration to cities',
      'Biological factors alone',
    ],
    correct: 1,
    rationale:
      'Son preference, reinforced by patriarchal values and dowry, has led to sex-selective abortions and neglect of girl children, causing a declining sex ratio.',
  },
  {
    id: 'socio-ar-2-2',
    chapter: 2,
    type: 'assertion-reason',
    question: 'Assertion: The PNDT Act was enacted to ban sex determination tests. Reason: Sex-selective abortion was leading to a declining child sex ratio.',
    options: [
      'Both A and R are true and R is the correct explanation of A',
      'Both A and R are true but R is not the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true',
    ],
    correct: 0,
    rationale:
      'The Pre-Natal Diagnostic Techniques (Regulation and Prevention of Misuse) Act, 1994 (amended 2003), was enacted specifically to prevent sex-selective abortions that were distorting the sex ratio.',
  },
  {
    id: 'socio-mcq-2-4',
    chapter: 2,
    type: 'mcq',
    question: '"Demographic dividend" refers to:',
    options: [
      'A sudden increase in population',
      'The economic advantage when working population exceeds dependents',
      'Higher birth rates in developed countries',
      'Government subsidies for large families',
    ],
    correct: 1,
    rationale:
      'Demographic dividend occurs when the proportion of working-age population is large relative to dependents (children and elderly), creating potential for rapid economic growth.',
  },
  {
    id: 'socio-mcq-2-5',
    chapter: 2,
    type: 'mcq',
    question: 'The first National Family Planning Programme in India was launched in:',
    options: [
      '1947',
      '1952',
      '1971',
      '1985',
    ],
    correct: 1,
    rationale:
      'India was the first country in the world to launch a National Family Planning Programme in 1952, initially focusing on motivating couples to have fewer children.',
  },
  {
    id: 'socio-ar-2-3',
    chapter: 2,
    type: 'assertion-reason',
    question: 'Assertion: Migration in India is driven by push and pull factors. Reason: Rural poverty pushes people while urban employment opportunities pull them.',
    options: [
      'Both A and R are true and R is the correct explanation of A',
      'Both A and R are true but R is not the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true',
    ],
    correct: 0,
    rationale:
      'Push factors (poverty, unemployment, lack of services) drive people from rural areas, while pull factors (jobs, education, healthcare) attract them to urban centres.',
  },
  {
    id: 'socio-cs-2-2',
    chapter: 2,
    type: 'case-study',
    passage:
      'During the Emergency (1975-77), forced sterilisation campaigns were carried out in many parts of India. Men were coerced into vasectomies, leading to widespread resentment and ultimately contributing to the defeat of the ruling party.',
    question: 'The forced sterilisation campaign during the Emergency illustrates:',
    options: [
      'Successful population control policy',
      'Coercive state intervention in reproductive rights',
      'Voluntary adoption of family planning',
      'The Malthusian theory in practice',
    ],
    correct: 1,
    rationale:
      'The forced sterilisation programme was a coercive state measure that violated individual reproductive rights and generated massive public backlash against the government.',
  },
  {
    id: 'socio-mcq-2-6',
    chapter: 2,
    type: 'mcq',
    question: 'Epidemiological transition refers to the shift from:',
    options: [
      'Rural to urban diseases',
      'Infectious/communicable to degenerative/non-communicable diseases',
      'Tropical to temperate diseases',
      'Curable to incurable diseases',
    ],
    correct: 1,
    rationale:
      'As societies develop, the burden of disease shifts from infectious diseases (malaria, cholera) to degenerative diseases (heart disease, diabetes, cancer).',
  },

  // ─────────────────────────────────────────────
  // Chapter 3 — Social Institutions
  // ─────────────────────────────────────────────
  {
    id: 'socio-mcq-3-1',
    chapter: 3,
    type: 'mcq',
    question: 'The key difference between Varna and Jati is:',
    options: [
      'Varna is thousands in number while Jati is four-fold',
      'Varna is a broad four-fold classification while Jati is a localized endogamous group',
      'Varna is based on occupation while Jati is based on religion',
      'There is no difference between them',
    ],
    correct: 1,
    rationale:
      'Varna is an ancient four-fold theoretical classification (Brahmin, Kshatriya, Vaishya, Shudra), while Jati refers to thousands of localized, endogamous occupational groups.',
  },
  {
    id: 'socio-ar-3-1',
    chapter: 3,
    type: 'assertion-reason',
    question: 'Assertion: M.N. Srinivas coined the concept of "Sanskritisation." Reason: It describes the process by which lower castes adopt upper-caste rituals and practices to claim higher status.',
    options: [
      'Both A and R are true and R is the correct explanation of A',
      'Both A and R are true but R is not the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true',
    ],
    correct: 0,
    rationale:
      'Sanskritisation, as described by Srinivas, is a process where lower castes or groups adopt the rituals, practices, and lifestyle of upper castes to improve their social position.',
  },
  {
    id: 'socio-cs-3-1',
    chapter: 3,
    type: 'case-study',
    passage:
      'In a village in Rajasthan, the Meena community stopped consuming beef and began performing puja like Brahmins. They also started cremating their dead instead of burying them. After a generation, they claimed equal status with Rajput landowners.',
    question: 'The Meena community\'s actions best illustrate the concept of:',
    options: [
      'Westernisation',
      'Sanskritisation',
      'Secularisation',
      'Industrialisation',
    ],
    correct: 1,
    rationale:
      'The Meenas adopted upper-caste Hindu practices (vegetarianism, cremation, puja) to improve their ritual status, which is a textbook example of Sanskritisation.',
  },
  {
    id: 'socio-mcq-3-2',
    chapter: 3,
    type: 'mcq',
    question: 'The Indian Constitution classifies tribes under:',
    options: [
      'Scheduled Castes',
      'Scheduled Tribes',
      'Other Backward Classes',
      'Minority Communities',
    ],
    correct: 1,
    rationale:
      'Scheduled Tribes are listed in the Fifth Schedule of the Constitution and receive special protections including reservations in education and government jobs.',
  },
  {
    id: 'socio-mcq-3-3',
    chapter: 3,
    type: 'mcq',
    question: 'Which of the following is an example of a matrilineal society in India?',
    options: [
      'Rajputs of Rajasthan',
      'Khasi of Meghalaya',
      'Reddys of Andhra Pradesh',
      'Jats of Haryana',
    ],
    correct: 1,
    rationale:
      'The Khasi tribe of Meghalaya traces descent through the mother\'s line. Property and family name pass from mother to daughter, making it a matrilineal society.',
  },
  {
    id: 'socio-ar-3-2',
    chapter: 3,
    type: 'assertion-reason',
    question: 'Assertion: The 73rd Constitutional Amendment established Panchayati Raj institutions. Reason: It mandated one-third reservation for women in all tiers of local self-government.',
    options: [
      'Both A and R are true and R is the correct explanation of A',
      'Both A and R are true but R is not the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true',
    ],
    correct: 0,
    rationale:
      'The 73rd Amendment (1992) constitutionalised Panchayati Raj and ensured at least one-third seats and chairperson positions are reserved for women at all three tiers.',
  },
  {
    id: 'socio-mcq-3-4',
    chapter: 3,
    type: 'mcq',
    question: '"Westernisation" in the Indian context primarily refers to:',
    options: [
      'Adoption of Christianity',
      'Exposure to modern technology, English education, and Western lifestyle',
      'Complete rejection of Indian traditions',
      'Migration to Western countries',
    ],
    correct: 1,
    rationale:
      'Westernisation refers to the adoption of Western technology, education, dress, food habits, and values, particularly among the urban educated elite, without necessarily abandoning Indian culture.',
  },
  {
    id: 'socio-mcq-3-5',
    chapter: 3,
    type: 'mcq',
    question: 'Kinship based on blood relations is called:',
    options: [
      'Affinal kinship',
      'Consanguineal kinship',
      'Functional kinship',
      'Classificatory kinship',
    ],
    correct: 1,
    rationale:
      'Consanguineal kinship is based on blood relations (parents, siblings, cousins), while affinal kinship is established through marriage (in-laws, spouse\'s relatives).',
  },
  {
    id: 'socio-ar-3-3',
    chapter: 3,
    type: 'assertion-reason',
    question: 'Assertion: Exogamy is practised in many Indian communities. Reason: It prevents inbreeding and builds alliances between different groups.',
    options: [
      'Both A and R are true and R is the correct explanation of A',
      'Both A and R are true but R is not the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true',
    ],
    correct: 0,
    rationale:
      'Exogamy (marrying outside one\'s group) serves to prevent genetic disorders from inbreeding and to create wider social networks and alliances between different communities.',
  },
  {
    id: 'socio-cs-3-2',
    chapter: 3,
    type: 'case-study',
    passage:
      'In Kerala, the Nair community historically followed matrilineal descent (Marumakkathayam) where property passed through the mother\'s line. Children belonged to the mother\'s tharavad (ancestral home) rather than the father\'s.',
    question: 'The Nair inheritance system is an example of:',
    options: [
      'Patrilineal descent',
      'Matrilineal descent',
      'Bilateral descent',
      'No systematic descent',
    ],
    correct: 1,
    rationale:
      'The Nair practice of Marumakkathayam traced descent and inheritance through the female line, making it one of India\'s most well-known matrilineal systems.',
  },

  // ─────────────────────────────────────────────
  // Chapter 5 — Structural Change
  // ─────────────────────────────────────────────
  {
    id: 'socio-mcq-5-1',
    chapter: 5,
    type: 'mcq',
    question: 'The railway network introduced by the British primarily served the purpose of:',
    options: [
      'Promoting internal trade for Indian merchants',
      'Military movement and extraction of raw materials',
      'Connecting villages for social interaction',
      'Encouraging tourism across India',
    ],
    correct: 1,
    rationale:
      'Railways were built primarily to facilitate the movement of troops, transport raw materials to ports, and open markets for British manufactured goods.',
  },
  {
    id: 'socio-ar-5-1',
    chapter: 5,
    type: 'assertion-reason',
    question: 'Assertion: Colonialism brought about structural changes in Indian society. Reason: The colonial state reorganised the economy, polity, and social institutions to serve its own interests.',
    options: [
      'Both A and R are true and R is the correct explanation of A',
      'Both A and R are true but R is not the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true',
    ],
    correct: 0,
    rationale:
      'Colonialism restructured Indian society by introducing new legal codes, administrative units, land revenue systems, and commercial agriculture, all designed to serve colonial economic interests.',
  },
  {
    id: 'socio-cs-5-1',
    chapter: 5,
    type: 'case-study',
    passage:
      'Before colonialism, Indian artisans produced fine textiles for local and export markets. The British imposed heavy tariffs on Indian cloth entering Britain while flooding Indian markets with cheap machine-made Manchester textiles. Traditional weavers lost their livelihoods.',
    question: 'This process is best described as:',
    options: [
      'Industrialisation of India',
      'Deindustrialisation of India',
      'Modernisation of Indian economy',
      'Commercialisation of agriculture',
    ],
    correct: 1,
    rationale:
      'Deindustrialisation refers to the systematic destruction of India\'s indigenous manufacturing sector, particularly textiles, through colonial policies that favoured British industry.',
  },
  {
    id: 'socio-mcq-5-2',
    chapter: 5,
    type: 'mcq',
    question: 'Print technology under colonialism was significant because it:',
    options: [
      'Only printed government notices',
      'Enabled spread of ideas, debate, and nationalist consciousness',
      'Was restricted to English language',
      'Was used only by missionaries',
    ],
    correct: 1,
    rationale:
      'The printing press enabled newspapers, pamphlets, and books in Indian languages, facilitating social reform movements and the growth of nationalist ideas.',
  },
  {
    id: 'socio-ar-5-2',
    chapter: 5,
    type: 'assertion-reason',
    question: 'Assertion: The colonial census rigidified caste categories. Reason: The census required people to declare a single caste, reducing the fluidity of caste identities.',
    options: [
      'Both A and R are true and R is the correct explanation of A',
      'Both A and R are true but R is not the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true',
    ],
    correct: 0,
    rationale:
      'Before the census, caste boundaries were fluid and context-dependent. The colonial practice of listing and counting castes in fixed categories made them more rigid and politically significant.',
  },
  {
    id: 'socio-mcq-5-3',
    chapter: 5,
    type: 'mcq',
    question: 'The Brahmo Samaj was founded by:',
    options: [
      'Jyotirao Phule',
      'Ram Mohan Roy',
      'Swami Vivekananda',
      'Dayanand Saraswati',
    ],
    correct: 1,
    rationale:
      'Ram Mohan Roy founded the Brahmo Samaj in 1828 to campaign against social evils like Sati and to promote modern education and rational thinking.',
  },
  {
    id: 'socio-mcq-5-4',
    chapter: 5,
    type: 'mcq',
    question: 'The shift from subsistence farming to commercial agriculture under colonialism meant:',
    options: [
      'Farmers grew only what they needed',
      'Farmers grew cash crops for market sale',
      'Food production increased for local consumption',
      'Land revenue was abolished',
    ],
    correct: 1,
    rationale:
      'Colonial policies forced farmers to grow cash crops like indigo, cotton, and jute for export, often at the expense of food crops, leading to food insecurity.',
  },
  {
    id: 'socio-cs-5-2',
    chapter: 5,
    type: 'case-study',
    passage:
      'Ishwar Chandra Vidyasagar championed widow remarriage and opened schools for girls. The Hindu Widows\' Remarriage Act was passed in 1856. However, conservative opposition remained strong, and social reformers faced criticism from orthodox groups.',
    question: 'Vidyasagar\'s efforts are an example of:',
    options: [
      'Economic structural change',
      'Social reform within traditional institutions',
      'Colonial imposition of Western values',
      'Religious revivalism',
    ],
    correct: 1,
    rationale:
      'Vidyasagar worked within the Hindu social reform tradition to challenge practices like the prohibition of widow remarriage, using both traditional texts and modern arguments.',
  },
  {
    id: 'socio-mcq-5-5',
    chapter: 5,
    type: 'mcq',
    question: 'The factory system in colonial India replaced:',
    options: [
      'Plantation agriculture',
      'Handloom cottage industries',
      'Forest-based economies',
      'Pastoral nomadism',
    ],
    correct: 1,
    rationale:
      'The factory system, especially in textiles, displaced traditional handloom weavers and artisans who could not compete with mass-produced machine-made goods.',
  },
  {
    id: 'socio-ar-5-3',
    chapter: 5,
    type: 'assertion-reason',
    question: 'Assertion: Print technology contributed to the growth of Indian nationalism. Reason: Newspapers and pamphlets in vernacular languages connected people across regions.',
    options: [
      'Both A and R are true and R is the correct explanation of A',
      'Both A and R are true but R is not the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true',
    ],
    correct: 0,
    rationale:
      'Vernacular newspapers and pamphlets created a shared public sphere where ideas about rights, freedom, and social reform circulated, fostering a sense of common identity.',
  },

  // ─────────────────────────────────────────────
  // Chapter 6 — Cultural Change
  // ─────────────────────────────────────────────
  {
    id: 'socio-mcq-6-1',
    chapter: 6,
    type: 'mcq',
    question: 'Modernisation in the Indian context involves:',
    options: [
      'Only westernisation',
      'Westernisation, secularisation, and rationalisation',
      'Complete abandonment of tradition',
      'Only industrialisation',
    ],
    correct: 1,
    rationale:
      'Modernisation is a multi-dimensional process involving westernisation (adoption of Western institutions), secularisation (reduced religious authority), and rationalisation (scientific thinking).',
  },
  {
    id: 'socio-ar-6-1',
    chapter: 6,
    type: 'assertion-reason',
    question: 'Assertion: Sanskritisation can challenge caste hierarchy. Reason: When lower castes adopt upper-caste practices, they question the ritual superiority of higher castes.',
    options: [
      'Both A and R are true and R is the correct explanation of A',
      'Both A and R are true but R is not the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true',
    ],
    correct: 0,
    rationale:
      'Sanskritisation implicitly challenges caste hierarchy by asserting that lower castes are capable of upward mobility, though it also reinforces the idea that upper-caste norms are superior.',
  },
  {
    id: 'socio-cs-6-1',
    chapter: 6,
    type: 'case-study',
    passage:
      'In R.K. Narayan\'s story "A Horse and Two Goats," an Indian villager and a foreign tourist have a conversation where neither understands the other\'s language. The villager assumes the tourist wants to buy his horse, while the tourist admires the statue of a horse nearby. They part happily, each believing they got what they wanted.',
    question: 'The story illustrates:',
    options: [
      'The success of cultural exchange',
      'Cultural misunderstanding between different worlds',
      'The decline of traditional values',
      'The importance of English education',
    ],
    correct: 1,
    rationale:
      'Narayan\'s story humorously captures the gap in cultural understanding, where communication barriers lead to mutual misinterpretation, yet both parties remain content in their assumptions.',
  },
  {
    id: 'socio-mcq-6-2',
    chapter: 6,
    type: 'mcq',
    question: 'Ram Mohan Roy is best known for campaigning against:',
    options: [
      'Child marriage',
      'Sati (widow immolation)',
      'Caste discrimination',
      'Untouchability',
    ],
    correct: 1,
    rationale:
      'Ram Mohan Roy campaigned vigorously against the practice of Sati, leading to its abolition by Lord William Bentinck in 1829.',
  },
  {
    id: 'socio-ar-6-2',
    chapter: 6,
    type: 'assertion-reason',
    question: 'Assertion: Secularisation involves declining religious authority. Reason: It does not mean people stop being religious, but that religion loses its hold over public institutions.',
    options: [
      'Both A and R are true and R is the correct explanation of A',
      'Both A and R are true but R is not the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true',
    ],
    correct: 0,
    rationale:
      'Secularisation refers to the process by which religion is separated from public institutions like law, education, and governance, even while personal faith may persist.',
  },
  {
    id: 'socio-mcq-6-3',
    chapter: 6,
    type: 'mcq',
    question: 'Jyotirao Phule\'s contribution was primarily in the area of:',
    options: [
      'Women\'s education and anti-caste activism',
      'Establishing English-medium schools',
      'Campaigning against untouchability through Bhakti movement',
      'Founding trade unions',
    ],
    correct: 0,
    rationale:
      'Jyotirao Phule, along with his wife Savitribai Phule, opened schools for girls and Dalits and fought against caste-based discrimination, establishing the Satya Shodhak movement.',
  },
  {
    id: 'socio-cs-6-2',
    chapter: 6,
    type: 'case-study',
    passage:
      'Periyar E.V. Ramasamy launched the Self-Respect Movement in 1925 in Tamil Nadu. He urged non-Brahmins to reject Brahminical rituals, refuse to use Sanskrit names, and develop a rational outlook. He rejected the caste system entirely and advocated for social equality.',
    question: 'Periyar\'s movement is best described as:',
    options: [
      'Sanskritisation of lower castes',
      'A rationalist and anti-caste social reform movement',
      'A religious revivalist movement',
      'A nationalist freedom struggle',
    ],
    correct: 1,
    rationale:
      'Periyar\'s Self-Respect Movement was fundamentally anti-caste and rationalist, rejecting Brahminical hegemony and advocating for self-respect, social equality, and scientific thinking.',
  },
  {
    id: 'socio-mcq-6-4',
    chapter: 6,
    type: 'mcq',
    question: 'Pandita Ramabai was a pioneer in:',
    options: [
      'Industrial workers\' rights',
      'Women\'s education and rights of widows',
      'Peasant movements',
      'Tribal welfare',
    ],
    correct: 1,
    rationale:
      'Pandita Ramabai, a scholar and reformer, championed the cause of women\'s education and worked for the upliftment of widows and destitute women.',
  },
  {
    id: 'socio-ar-6-3',
    chapter: 6,
    type: 'assertion-reason',
    question: 'Assertion: The Left Movement in India has influenced trade unions and peasant movements. Reason: Marxist ideology advocates for the rights of the working class against capitalist exploitation.',
    options: [
      'Both A and R are true and R is the correct explanation of A',
      'Both A and R are true but R is not the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true',
    ],
    correct: 0,
    rationale:
      'Left ideology, based on Marxist principles, has historically organised workers and peasants to demand better wages, working conditions, and land rights against exploitation.',
  },
  {
    id: 'socio-mcq-6-5',
    chapter: 6,
    type: 'mcq',
    question: 'The term "Kudumbam" refers to:',
    options: [
      'A joint family system',
      'Women\'s self-help groups in Kerala',
      'A tribal welfare organisation',
      'A caste-based political party',
    ],
    correct: 1,
    rationale:
      'Kudumbam is a network of women\'s self-help groups in Kerala that empowers women economically through collective savings, micro-finance, and community development initiatives.',
  },
];
