interface SocioMindMapNode {
  label: string;
  children?: SocioMindMapNode[];
}

interface SocioMindMap {
  chapterId: number;
  title: string;
  tree: SocioMindMapNode;
}

export const socioMindMapsData: SocioMindMap[] = [
  // ── Chapter 1: Introducing Indian Society ────────────────
  {
    chapterId: 1,
    title: 'Introducing Indian Society',
    tree: {
      label: 'Indian Society',
      children: [
        {
          label: 'Salient Features',
          children: [
            { label: 'Unity in Diversity' },
            { label: 'Complexity & Plurality' },
            { label: 'Multi-religious & Multi-lingual' },
          ],
        },
        {
          label: 'Social Structure',
          children: [
            { label: 'Caste System' },
            { label: 'Class System' },
            { label: 'Gender Hierarchy' },
            { label: 'Tribe-based Stratification' },
          ],
        },
        {
          label: 'Major Social Institutions',
          children: [
            { label: 'Family & Kinship' },
            { label: 'Religion' },
            { label: 'Education' },
            { label: 'Economy & Polity' },
          ],
        },
        {
          label: 'Social Diversity',
          children: [
            { label: 'Regional Variation' },
            { label: 'Linguistic Pluralism' },
            { label: 'Cultural Practices' },
          ],
        },
        {
          label: 'Study of Society',
          children: [
            { label: 'Sociology vs Common Sense' },
            { label: 'Sociological Imagination' },
            { label: 'C. Wright Mills' },
          ],
        },
      ],
    },
  },

  // ── Chapter 2: Demographic Structure ─────────────────────
  {
    chapterId: 2,
    title: 'Demographic Structure of Indian Society',
    tree: {
      label: 'Demography',
      children: [
        {
          label: 'Key Indicators',
          children: [
            { label: 'Birth Rate & Death Rate' },
            { label: 'Fertility Rate (TFR)' },
            { label: 'IMR & MMR' },
            { label: 'Sex Ratio' },
          ],
        },
        {
          label: 'Population Growth',
          children: [
            { label: 'Growth Trends since 1951' },
            { label: 'Stages of Demographic Transition' },
            { label: 'Regional Variations' },
          ],
        },
        {
          label: 'Population Policies',
          children: [
            { label: 'Family Planning Programme' },
            { label: 'National Population Policy 2000' },
            { label: 'Reproductive & Child Health' },
          ],
        },
        {
          label: 'Population Structure',
          children: [
            { label: 'Age Composition' },
            { label: 'Dependency Ratio' },
            { label: 'Demographic Dividend' },
            { label: 'Population Pyramid' },
          ],
        },
        {
          label: 'Social Impact',
          children: [
            { label: 'Migration Patterns' },
            { label: 'Urbanisation' },
            { label: 'Poverty & Inequality' },
          ],
        },
      ],
    },
  },

  // ── Chapter 3: Social Institutions ───────────────────────
  {
    chapterId: 3,
    title: 'Social Institutions: Continuity and Change',
    tree: {
      label: 'Social Institutions',
      children: [
        {
          label: 'Caste System',
          children: [
            { label: 'Varna & Jati' },
            { label: 'Untouchability' },
            { label: 'Caste Panchayats' },
            { label: 'Mobility & Change' },
          ],
        },
        {
          label: 'Family & Kinship',
          children: [
            { label: 'Joint vs Nuclear Family' },
            { label: 'Patrilineal vs Matrilineal' },
            { label: 'Patriarchy in Family' },
            { label: 'Changing Family Roles' },
          ],
        },
        {
          label: 'Marriage',
          children: [
            { label: 'Endogamy & Exogamy' },
            { label: 'Gotra System' },
            { label: 'Inter-caste Marriage' },
          ],
        },
        {
          label: 'Tribal Society',
          children: [
            { label: 'Cultural Diversity' },
            { label: 'Tribal Economy' },
            { label: 'Impact of Colonialism' },
            { label: 'Post-Independence Policy' },
          ],
        },
        {
          label: 'Change in Institutions',
          children: [
            { label: 'Constitutional Reforms' },
            { label: 'Legislation against Discrimination' },
            { label: 'Education & Modernisation' },
          ],
        },
      ],
    },
  },

  // ── Chapter 4: Market as Social Institution ──────────────
  {
    chapterId: 4,
    title: 'Market as Social Institution',
    tree: {
      label: 'Market as Social Institution',
      children: [
        {
          label: 'Market Concept',
          children: [
            { label: 'What is a Market?' },
            { label: 'Types of Markets' },
            { label: 'Virtual Markets' },
          ],
        },
        {
          label: 'Market & Society',
          children: [
            { label: 'Social Embeddedness (Polanyi)' },
            { label: 'Invisible Hand (Smith)' },
            { label: 'Commoditisation' },
          ],
        },
        {
          label: 'Consumer & Producer',
          children: [
            { label: 'Consumer Identity' },
            { label: 'Producer Class & Interests' },
            { label: 'Labour & Market' },
          ],
        },
        {
          label: 'Regulation & Ethics',
          children: [
            { label: 'Consumer Protection Act' },
            { label: 'Role of Cooperatives' },
            { label: 'Fair Trade' },
          ],
        },
        {
          label: 'Impact on Society',
          children: [
            { label: 'Globalisation of Markets' },
            { label: 'Impact on Farmers' },
            { label: 'Informal Markets' },
          ],
        },
      ],
    },
  },

  // ── Chapter 5: Structural Change ────────────────────────
  {
    chapterId: 5,
    title: 'Structural Change',
    tree: {
      label: 'Structural Change',
      children: [
        {
          label: 'Colonial Impact',
          children: [
            { label: 'British Administration' },
            { label: 'Land Revenue Systems' },
            { label: 'Impact on Caste' },
            { label: 'Urbanisation under Colonialism' },
          ],
        },
        {
          label: 'Industrialisation',
          children: [
            { label: 'Growth of Factories' },
            { label: 'Working Class Formation' },
            { label: 'Migration to Cities' },
          ],
        },
        {
          label: 'Urbanisation',
          children: [
            { label: 'Growth of Cities' },
            { label: 'Rural-Urban Divide' },
            { label: 'Slums & Informal Settlements' },
          ],
        },
        {
          label: 'Changes in Rural Society',
          children: [
            { label: 'Decline of Zamindari' },
            { label: 'Land Reforms' },
            { label: 'Green Revolution' },
            { label: 'Agrarian Unrest' },
          ],
        },
        {
          label: 'Post-Independence Changes',
          children: [
            { label: 'Five Year Plans' },
            { label: 'Public Sector Growth' },
            { label: 'New Economic Policy 1991' },
          ],
        },
      ],
    },
  },

  // ── Chapter 6: Cultural Change ──────────────────────────
  {
    chapterId: 6,
    title: 'Cultural Change',
    tree: {
      label: 'Cultural Change',
      children: [
        {
          label: 'Sanskritisation',
          children: [
            { label: 'M.N. Srinivas\'s Theory' },
            { label: 'Adoption of Upper-caste Practices' },
            { label: 'Examples: Yadavs, Jats' },
            { label: 'Critique of Theory' },
          ],
        },
        {
          label: 'Westernisation',
          children: [
            { label: 'Spread of English Education' },
            { label: 'Western Dress & Lifestyle' },
            { label: 'Rise of Middle Class' },
          ],
        },
        {
          label: 'Secularisation',
          children: [
            { label: 'Decline of Religious Authority' },
            { label: 'Rationalism & Science' },
            { label: 'Secularism in India' },
          ],
        },
        {
          label: 'Social Reform Movements',
          children: [
            { label: 'Anti-Sati Movement' },
            { label: 'Widow Remarriage' },
            { label: 'Dravidian Movement' },
            { label: 'Ambedkarite Movement' },
          ],
        },
        {
          label: 'De-sanskritisation',
          children: [
            { label: 'Reclaiming Folk Identity' },
            { label: 'Dalit Cultural Assertion' },
          ],
        },
      ],
    },
  },

  // ── Chapter 7: Constitution and Social Change ────────────
  {
    chapterId: 7,
    title: 'Constitution and Social Change',
    tree: {
      label: 'Constitution & Social Change',
      children: [
        {
          label: 'Constitutional Values',
          children: [
            { label: 'Liberty, Equality, Fraternity' },
            { label: 'Justice (Social, Economic, Political)' },
            { label: 'Secularism' },
            { label: 'Federalism' },
          ],
        },
        {
          label: 'Fundamental Rights',
          children: [
            { label: 'Right to Equality' },
            { label: 'Abolition of Untouchability' },
            { label: 'Freedom of Religion' },
            { label: 'Right against Exploitation' },
          ],
        },
        {
          label: 'Reservation Policy',
          children: [
            { label: 'SC & ST Reservations' },
            { label: 'OBC Reservations (Mandal)' },
            { label: 'EWS Reservations' },
            { label: 'Debate on Reservation' },
          ],
        },
        {
          label: 'Directive Principles',
          children: [
            { label: 'Welfare State Goals' },
            { label: 'Uniform Civil Code Debate' },
            { label: 'Right to Education' },
          ],
        },
        {
          label: 'Amendments & Laws',
          children: [
            { label: 'Amendment Process' },
            { label: 'Land Reform Legislation' },
            { label: 'Protection of Civil Rights Act' },
          ],
        },
      ],
    },
  },

  // ── Chapter 8: Change and Development in Rural Society ───
  {
    chapterId: 8,
    title: 'Change and Development in Rural Society',
    tree: {
      label: 'Rural Society',
      children: [
        {
          label: 'Colonial Land Systems',
          children: [
            { label: 'Zamindari System' },
            { label: 'Ryotwari System' },
            { label: 'Mahalwari System' },
          ],
        },
        {
          label: 'Land Reforms',
          children: [
            { label: 'Zamindari Abolition' },
            { label: 'Tenancy Reform' },
            { label: 'Ceiling on Land Holdings' },
            { label: 'Land Redistribution' },
          ],
        },
        {
          label: 'Green Revolution',
          children: [
            { label: 'High Yielding Seeds' },
            { label: 'Irrigation & Fertilisers' },
            { label: 'Regional Disparities' },
            { label: 'Impact on Inequality' },
          ],
        },
        {
          label: 'Agrarian Unrest',
          children: [
            { label: 'Farmer Protests' },
            { label: 'Naxalite Movement' },
            { label: 'Debt & Suicides' },
            { label: 'Demand for Land Rights' },
          ],
        },
        {
          label: 'Rural Transformation',
          children: [
            { label: 'Migration to Cities' },
            { label: 'Panchayati Raj' },
            { label: 'Rural Employment Programmes' },
          ],
        },
      ],
    },
  },

  // ── Chapter 9: Change and Development in Industrial Society
  {
    chapterId: 9,
    title: 'Change and Development in Industrial Society',
    tree: {
      label: 'Industrial Society',
      children: [
        {
          label: 'Industrialisation',
          children: [
            { label: 'Historical Background' },
            { label: 'Growth of Manufacturing' },
            { label: 'Role of Public Sector' },
          ],
        },
        {
          label: 'Industrial Labour',
          children: [
            { label: 'Organised Sector' },
            { label: 'Unorganised Sector' },
            { label: 'Working Conditions' },
            { label: 'Child Labour' },
          ],
        },
        {
          label: 'Trade Unions',
          children: [
            { label: 'History of Trade Unionism' },
            { label: 'Major Trade Unions' },
            { label: 'Strikes & Collective Bargaining' },
          ],
        },
        {
          label: 'Industrialisation & Society',
          children: [
            { label: 'Urbanisation' },
            { label: 'Migration & Informal Sector' },
            { label: 'Impact on Family & Gender' },
          ],
        },
        {
          label: 'Liberalisation Impact',
          children: [
            { label: '1991 Reforms' },
            { label: 'Deindustrialisation' },
            { label: 'Jobless Growth Debate' },
          ],
        },
      ],
    },
  },

  // ── Chapter 10: Globalisation and Social Change ──────────
  {
    chapterId: 10,
    title: 'Globalisation and Social Change',
    tree: {
      label: 'Globalisation',
      children: [
        {
          label: 'What is Globalisation?',
          children: [
            { label: 'Economic Integration' },
            { label: 'Cultural Exchange' },
            { label: 'Technological Change' },
          ],
        },
        {
          label: 'Economic Globalisation',
          children: [
            { label: 'Liberalisation 1991' },
            { label: 'Privatisation' },
            { label: 'MNCs & FDI' },
            { label: 'Outsourcing & IT Boom' },
          ],
        },
        {
          label: 'Social Impact',
          children: [
            { label: 'Growing Inequality' },
            { label: 'Impact on Labour' },
            { label: 'Consumer Culture' },
            { label: 'Loss of Livelihoods' },
          ],
        },
        {
          label: 'Cultural Dimensions',
          children: [
            { label: 'Homogenisation Debate' },
            { label: 'Hybridisation' },
            { label: 'Resistance Movements' },
          ],
        },
        {
          label: 'Resistance & Alternatives',
          children: [
            { label: 'Anti-globalisation Movements' },
            { label: 'World Social Forum' },
            { label: 'People\'s Movements' },
            { label: 'Alternative Globalisation' },
          ],
        },
      ],
    },
  },

  // ── Chapter 11: Mass Media and Communications ────────────
  {
    chapterId: 11,
    title: 'Mass Media and Communications',
    tree: {
      label: 'Mass Media',
      children: [
        {
          label: 'Types of Media',
          children: [
            { label: 'Print Media' },
            { label: 'Electronic Media' },
            { label: 'Digital & Social Media' },
            { label: 'Radio & Podcasts' },
          ],
        },
        {
          label: 'Role of Mass Media',
          children: [
            { label: 'Information & Awareness' },
            { label: 'Watchdog Function' },
            { label: 'Shaping Public Opinion' },
            { label: 'Entertainment & Infotainment' },
          ],
        },
        {
          label: 'Media & Society',
          children: [
            { label: 'Dialectical Relationship' },
            { label: 'Media & Consumerism' },
            { label: 'Impact on Culture' },
          ],
        },
        {
          label: 'Ownership & Control',
          children: [
            { label: 'Media Ownership Patterns' },
            { label: 'Government & Censorship' },
            { label: 'Corporate Influence' },
            { label: 'Media & Democracy' },
          ],
        },
        {
          label: 'New Media',
          children: [
            { label: 'Internet Revolution' },
            { label: 'Social Media activism' },
            { label: 'Digital Divide' },
            { label: 'Fake News Challenge' },
          ],
        },
      ],
    },
  },

  // ── Chapter 12: Social Movements ────────────────────────
  {
    chapterId: 12,
    title: 'Social Movements',
    tree: {
      label: 'Social Movements',
      children: [
        {
          label: 'What is a Social Movement?',
          children: [
            { label: 'Definition & Features' },
            { label: 'Types: Reform, Revolutionary, Redemptive' },
            { label: 'Collective Action' },
          ],
        },
        {
          label: 'Theories of Social Movements',
          children: [
            { label: 'Relative Deprivation' },
            { label: 'Resource Mobilisation' },
            { label: 'New Social Movements Theory' },
          ],
        },
        {
          label: 'Indian Social Movements',
          children: [
            { label: 'Independence Movement' },
            { label: 'Dalit Panthers Movement' },
            { label: 'Anti-caste Movements' },
            { label: 'Environmental Movements' },
          ],
        },
        {
          label: 'Peasant & Worker Movements',
          children: [
            { label: 'Indigo Revolt' },
            { label: 'Telangana Rebellion' },
            { label: 'Trade Union Movement' },
            { label: 'Farmers\' Movements' },
          ],
        },
        {
          label: 'Women\'s Movement',
          children: [
            { label: 'Anti-Sati & Widow Remarriage' },
            { label: 'Feminist Movement' },
            { label: 'Post-1970s Women\'s Organisations' },
            { label: 'Gender Violence Protests' },
          ],
        },
        {
          label: 'Contemporary Movements',
          children: [
            { label: 'Right to Information' },
            { label: 'Anti-Corruption Movement' },
            { label: 'Environmental Activism' },
            { label: 'LGBTQ+ Rights' },
          ],
        },
      ],
    },
  },
];
