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
  // ── Demography ──────────────────────────────────────────
  {
    id: 'dem-01',
    term: 'Birth Rate',
    definition:
      'Number of live births per 1,000 people in a year. A key indicator of population growth.',
    category: 'demography',
    example:
      'India\'s birth rate fell from 36.9 (1951) to around 20.0 (2020).',
  },
  {
    id: 'dem-02',
    term: 'Death Rate',
    definition:
      'Number of deaths per 1,000 people in a year. Declining death rates due to healthcare improvements contribute to population growth.',
    category: 'demography',
    example:
      'Death rate in India dropped from 27.4 (1951) to about 7.3 (2020).',
  },
  {
    id: 'dem-03',
    term: 'Total Fertility Rate (TFR)',
    definition:
      'Average number of children a woman would have in her lifetime at current fertility rates. Replacement level TFR is 2.1.',
    category: 'demography',
    example:
      'India\'s TFR reached 2.0 in 2020, just below replacement level.',
  },
  {
    id: 'dem-04',
    term: 'Infant Mortality Rate (IMR)',
    definition:
      'Number of deaths of infants under one year of age per 1,000 live births. Reflects healthcare and nutrition quality.',
    category: 'demography',
    example: 'Kerala has an IMR of 6 while Bihar has around 25.',
  },
  {
    id: 'dem-05',
    term: 'Maternal Mortality Ratio (MMR)',
    definition:
      'Number of maternal deaths per 100,000 live births due to pregnancy-related causes.',
    category: 'demography',
    example:
      'India\'s MMR dropped from 556 (1990) to 97 (2018-20).',
  },
  {
    id: 'dem-06',
    term: 'Sex Ratio',
    definition:
      'Number of females per 1,000 males in a population. India had 943 females per 1,000 males in the 2011 Census.',
    category: 'demography',
    example:
      'Kerala has a favourable sex ratio of 1,084 while Haryana had 879.',
  },
  {
    id: 'dem-07',
    term: 'Dependency Ratio',
    definition:
      'Ratio of dependents (children 0-14 and elderly 65+) to the working-age population (15-64).',
    category: 'demography',
    example:
      'A high dependency ratio means fewer workers supporting more dependents.',
  },
  {
    id: 'dem-08',
    term: 'Demographic Dividend',
    definition:
      'Economic growth potential from a bulging working-age population when the dependency ratio is low.',
    category: 'demography',
    example:
      'India is expected to have a demographic dividend window until 2055.',
  },
  {
    id: 'dem-09',
    term: 'Demographic Transition',
    definition:
      'Shift from high birth and death rates to low birth and death rates as a society develops economically.',
    category: 'demography',
    example:
      'India is in the third stage of demographic transition with declining birth rates but still growing population.',
  },
  {
    id: 'dem-10',
    term: 'Census',
    definition:
      'Official count of a country\'s population conducted periodically. India conducts its census every 10 years.',
    category: 'demography',
    example:
      'The 2011 Census recorded India\'s population as 1.21 billion.',
  },
  {
    id: 'dem-11',
    term: 'Migration',
    definition:
      'Movement of people from one place to another, leading to changes in population distribution.',
    category: 'demography',
    example:
      'Rural-to-urban migration in India is driven by employment opportunities.',
  },
  {
    id: 'dem-12',
    term: 'Population Pyramid',
    definition:
      'Graphical representation showing the distribution of various age groups in a population.',
    category: 'demography',
    example:
      'India has a young population pyramid with a wide base.',
  },
  {
    id: 'dem-13',
    term: 'Replacement Level',
    definition:
      'The TFR at which a population exactly replaces itself from one generation to the next, approximately 2.1.',
    category: 'demography',
    example:
      'States like Kerala and Tamil Nadu have already achieved replacement level fertility.',
  },
  {
    id: 'dem-14',
    term: 'Malthusian Theory',
    definition:
      'Thomas Malthus argued that population grows geometrically while food supply grows arithmetically, leading to eventual crisis.',
    category: 'demography',
    example:
      'India\'s Green Revolution disproved the Malthusian catastrophe by boosting food production.',
  },

  // ── Social Institutions ─────────────────────────────────
  {
    id: 'soc-01',
    term: 'Family',
    definition:
      'A basic social institution that provides socialisation, emotional support, and economic cooperation among its members.',
    category: 'social-institution',
  },
  {
    id: 'soc-02',
    term: 'Kinship',
    definition:
      'Network of social relationships based on blood, marriage, or adoption that defines how people interact with each other.',
    category: 'social-institution',
  },
  {
    id: 'soc-03',
    term: 'Caste System',
    definition:
      'Hierarchical social stratification based on birth that determines occupation, social status, and marriage alliances.',
    category: 'social-institution',
    example:
      'The varna system divides society into Brahmins, Kshatriyas, Vaishyas, and Shudras.',
  },
  {
    id: 'soc-04',
    term: 'Endogamy',
    definition:
      'Practice of marrying within one\'s own caste, community, or social group.',
    category: 'social-institution',
    example:
      'Marriage within the same jati is a rule of endogamy.',
  },
  {
    id: 'soc-05',
    term: 'Exogamy',
    definition:
      'Practice of marrying outside one\'s own kinship group, clan, or gotra.',
    category: 'social-institution',
    example:
      'Hindu law prohibits marriage within the same gotra (sapinda).',
  },
  {
    id: 'soc-06',
    term: 'Gotra',
    definition:
      'A lineage or kinship group tracing descent from a common ancestor. Members of the same gotra are considered siblings.',
    category: 'social-institution',
  },
  {
    id: 'soc-07',
    term: 'Matriliny',
    definition:
      'System of tracing descent through the mother\'s line. Found among Nairs, Khasis, and other communities.',
    category: 'social-institution',
  },
  {
    id: 'soc-08',
    term: 'Matriarchy',
    definition:
      'A social system where women hold primary power. True matriarchal societies are debated; matriliny is not the same as matriarchy.',
    category: 'social-institution',
  },
  {
    id: 'soc-09',
    term: 'Patrilineal',
    definition:
      'System where descent and inheritance are traced through the father\'s line. The most common form in India.',
    category: 'social-institution',
  },
  {
    id: 'soc-10',
    term: 'Patriarchal',
    definition:
      'Social system where men hold dominant power in political leadership, moral authority, and control of property.',
    category: 'social-institution',
  },
  {
    id: 'soc-11',
    term: 'Tribal Society',
    definition:
      'Community that shares a common ancestor, language, culture, and typically lives in a distinct geographical area.',
    category: 'social-institution',
    example:
      'The Gond, Santhal, and Bhil are major tribal groups in India.',
  },
  {
    id: 'soc-12',
    term: 'Joint Family',
    definition:
      'Extended family system where multiple generations live together with shared property and authority under the eldest male member.',
    category: 'social-institution',
  },
  {
    id: 'soc-13',
    term: 'Nuclear Family',
    definition:
      'Family unit consisting of two parents and their children living independently from other relatives.',
    category: 'social-institution',
    example:
      'Urbanisation and industrialisation have contributed to the rise of nuclear families.',
  },

  // ── Inequality ──────────────────────────────────────────
  {
    id: 'ine-01',
    term: 'Communal Identity',
    definition:
      'Identity based on religious or communal belonging that can become a basis for social and political mobilisation.',
    category: 'inequality',
  },
  {
    id: 'ine-02',
    term: 'Social Stratification',
    definition:
      'Hierarchical arrangement of individuals into groups based on wealth, power, status, or other factors.',
    category: 'inequality',
  },
  {
    id: 'ine-03',
    term: 'Marginalisation',
    definition:
      'Process by which certain groups are pushed to the edges of society, denied access to resources and opportunities.',
    category: 'inequality',
  },
  {
    id: 'ine-04',
    term: 'Reservation',
    definition:
      'Policy of reserving seats in education, government jobs, and legislatures for historically disadvantaged groups.',
    category: 'inequality',
    example:
      '15% seats are reserved for SCs, 7.5% for STs in central educational institutions.',
  },
  {
    id: 'ine-05',
    term: 'Affirmative Action',
    definition:
      'Government policies aimed at improving opportunities for historically excluded groups. Known as reservation in India.',
    category: 'inequality',
  },
  {
    id: 'ine-06',
    term: 'Scheduled Castes (SC)',
    definition:
      'Constitutional term for communities historically subjected to untouchability, listed in Schedule 1 of the Constitution.',
    category: 'inequality',
  },
  {
    id: 'ine-07',
    term: 'Scheduled Tribes (ST)',
    definition:
      'Indigenous communities listed in Schedule 5 of the Constitution, often living in geographically isolated areas.',
    category: 'inequality',
  },
  {
    id: 'ine-08',
    term: 'Other Backward Classes (OBC)',
    definition:
      'Socially and educationally backward communities identified by the Mandal Commission, entitled to 27% reservation.',
    category: 'inequality',
  },
  {
    id: 'ine-09',
    term: 'Bonded Labour',
    definition:
      'System where a person works to pay off a debt, often under exploitative conditions with little or no wages.',
    category: 'inequality',
    example:
      'The Bonded Labour System (Abolition) Act, 1976 prohibits bonded labour in India.',
  },

  // ── Social Change ───────────────────────────────────────
  {
    id: 'chg-01',
    term: 'Sanskritisation',
    definition:
      'Process described by M.N. Srinivas where lower castes adopt upper-caste rituals and practices to claim higher status.',
    category: 'social-change',
    example:
      'The Yadavs adopted vegetarianism and began claiming Kshatriya status.',
  },
  {
    id: 'chg-02',
    term: 'Westernisation',
    definition:
      'Process of adopting Western ideas, values, and practices in areas like education, dress, and consumption.',
    category: 'social-change',
    example:
      'The spread of English education and western-style dress among the elite.',
  },
  {
    id: 'chg-03',
    term: 'Modernisation',
    definition:
      'Widespread adoption of rational, secular, and egalitarian values replacing traditional beliefs and practices.',
    category: 'social-change',
  },
  {
    id: 'chg-04',
    term: 'Secularisation',
    definition:
      'Decline of religion\'s influence on social institutions and individual behaviour. Not the same as being non-religious.',
    category: 'social-change',
  },
  {
    id: 'chg-05',
    term: 'De-sanskritisation',
    definition:
      'Process where communities reject upper-caste practices they had earlier adopted and reclaim their own cultural identity.',
    category: 'social-change',
    example:
      'Dalits reclaiming folk cultural practices over Sanskritic Hindu practices.',
  },
  {
    id: 'chg-06',
    term: 'Social Reform',
    definition:
      'Deliberate efforts to change social customs, laws, and institutions to address injustice and inequality.',
    category: 'social-change',
    example:
      'The movements against Sati and for widow remarriage in the 19th century.',
  },
  {
    id: 'chg-07',
    term: 'Structural Change',
    definition:
      'Fundamental shifts in social institutions, economy, and political systems that alter how society is organised.',
    category: 'social-change',
  },
  {
    id: 'chg-08',
    term: 'Cultural Change',
    definition:
      'Transformation in the values, norms, beliefs, and practices of a society over time.',
    category: 'social-change',
  },
  {
    id: 'chg-09',
    term: 'Green Revolution',
    definition:
      'Introduction of high-yielding variety seeds, fertilisers, and irrigation that dramatically increased food production in the 1960s-70s.',
    category: 'social-change',
    example:
      'Punjab and Haryana became food surplus states through the Green Revolution.',
  },
  {
    id: 'chg-10',
    term: 'Land Reforms',
    definition:
      'Government redistribution of agricultural land to remove intermediaries and give land to tillers.',
    category: 'social-change',
    example:
      'Kerala\'s land reform gave land rights to tenant farmers and reduced inequality.',
  },
  {
    id: 'chg-11',
    term: 'Zamindari Abolition',
    definition:
      'Post-independence policy of abolishing the zamindari system that extracted rent from peasants without performing any function.',
    category: 'social-change',
    example:
      'The Zamindari Abolition Act, 1951 removed intermediaries in many states.',
  },

  // ── Media ───────────────────────────────────────────────
  {
    id: 'med-01',
    term: 'Mass Media',
    definition:
      'Means of communication that reach a large audience simultaneously, including newspapers, television, radio, and the internet.',
    category: 'media',
  },
  {
    id: 'med-02',
    term: 'Mass Communication',
    definition:
      'Process of disseminating information to a large, diverse audience through various media channels.',
    category: 'media',
  },
  {
    id: 'med-03',
    term: 'Infotainment',
    definition:
      'Combination of information and entertainment in media programming that blurs the line between news and entertainment.',
    category: 'media',
    example:
      'News channels using dramatic music and sensational headlines to boost ratings.',
  },
  {
    id: 'med-04',
    term: 'Censorship',
    definition:
      'Suppression or control of speech, information, or media content by authority or social groups.',
    category: 'media',
  },
  {
    id: 'med-05',
    term: 'Dialectical Relationship',
    definition:
      'Two-way relationship where society shapes media and media simultaneously shapes society.',
    category: 'media',
  },
  {
    id: 'med-06',
    term: 'Transistor Revolution',
    definition:
      'Proliferation of transistor radios from the 1960s-70s that brought mass media to rural and remote India.',
    category: 'media',
  },

  // ── Economy ─────────────────────────────────────────────
  {
    id: 'eco-01',
    term: 'Invisible Hand',
    definition:
      'Adam Smith\'s concept that individuals pursuing self-interest in a free market unintentionally promote the social good.',
    category: 'economy',
  },
  {
    id: 'eco-02',
    term: 'Social Embeddedness',
    definition:
      'Concept by Karl Polanyi that economic activity is embedded in and shaped by social relations, not separate from them.',
    category: 'economy',
  },
  {
    id: 'eco-03',
    term: 'Commoditisation',
    definition:
      'Process where goods, services, or relationships that were previously not traded become commercialised commodities.',
    category: 'economy',
    example:
      'Water and healthcare becoming market commodities rather than public goods.',
  },
  {
    id: 'eco-04',
    term: 'Liberalisation',
    definition:
      'Reduction of government regulations on trade and industry, opening the economy to private and foreign participation.',
    category: 'economy',
    example:
      'India\'s 1991 economic reforms dismantled the License Raj.',
  },
  {
    id: 'eco-05',
    term: 'Globalisation',
    definition:
      'Increasing interconnectedness of economies, cultures, and societies across the world through trade, technology, and migration.',
    category: 'economy',
  },
  {
    id: 'eco-06',
    term: 'Capitalism',
    definition:
      'Economic system where private individuals or firms own the means of production and operate for profit.',
    category: 'economy',
  },
  {
    id: 'eco-07',
    term: 'Surplus Value',
    definition:
      'Karl Marx\'s concept that profit is the unpaid labour of workers, extracted by capitalists who own the means of production.',
    category: 'economy',
  },
  {
    id: 'eco-08',
    term: 'Organised Sector',
    definition:
      'Economic sector with formal employment contracts, regular wages, and legal protections under labour laws.',
    category: 'economy',
  },
  {
    id: 'eco-09',
    term: 'Unorganised Sector',
    definition:
      'Economic sector with informal, unprotected employment—no contracts, irregular wages, and no social security.',
    category: 'economy',
    example:
      'Street vendors, domestic workers, and construction labourers form most of the unorganised sector.',
  },
  {
    id: 'eco-10',
    term: 'Outsourcing',
    definition:
      'Hiring an outside company or contractor to perform services or produce goods previously done in-house.',
    category: 'economy',
    example:
      'IT and BPO outsourcing brought India into the global services economy.',
  },
  {
    id: 'eco-11',
    term: 'MNC / TNC',
    definition:
      'Multinational or Transnational Corporation—company that operates in multiple countries with a centralised headquarters.',
    category: 'economy',
    example:
      'Companies like Toyota, Samsung, and Coca-Cola are major MNCs operating in India.',
  },

  // ── Theory ──────────────────────────────────────────────
  {
    id: 'the-01',
    term: 'Relative Deprivation',
    definition:
      'Theory that people engage in collective action when they perceive a gap between what they have and what they believe they deserve.',
    category: 'theory',
  },
  {
    id: 'the-02',
    term: 'Collective Action',
    definition:
      'Action undertaken by a group to achieve common goals, often in pursuit of social or political change.',
    category: 'theory',
  },
  {
    id: 'the-03',
    term: 'Resource Mobilisation',
    definition:
      'Theory focusing on how social movements acquire and use resources (money, labour, media) to achieve their goals.',
    category: 'theory',
  },
  {
    id: 'the-04',
    term: 'Reformist Movement',
    definition:
      'Social movement that seeks to change specific aspects of society without fundamentally altering the existing social order.',
    category: 'theory',
    example:
      'The Chipko movement sought environmental protection within existing systems.',
  },
  {
    id: 'the-05',
    term: 'Revolutionary Movement',
    definition:
      'Social movement that seeks to completely transform the existing social, political, or economic system.',
    category: 'theory',
    example:
      'The Naxalite movement sought the overthrow of the state through armed struggle.',
  },
  {
    id: 'the-06',
    term: 'Social Movement',
    definition:
      'Organised, sustained, and collective efforts by a group of people to bring about or resist fundamental change in society.',
    category: 'theory',
    example:
      'The Indian independence movement, Dalit rights movement, and women\'s movement.',
  },
];
