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
  // ── SC Ch1: Structural Change ────────────────────────────
  {
    chapterId: 1,
    title: 'SC Ch1: Structural Change',
    tree: {
      label: 'Structural Change',
      children: [
        {
          label: 'Colonial Economy',
          children: [
            { label: 'Railway network — connected markets' },
            { label: 'Factory system — replaced cottage industry' },
            { label: 'Commercial agriculture — cash crops (indigo, cotton, jute)' },
            { label: 'Decline of artisan crafts' },
          ],
        },
        {
          label: 'Land Revenue Systems',
          children: [
            { label: 'Zamindari — hereditary landlords (Bengal)' },
            { label: 'Ryotwari — direct with peasants (Madras)' },
            { label: 'Mahalwari — village community (NWP)' },
          ],
        },
        {
          label: 'Administrative Changes',
          children: [
            { label: 'Census — classified & rigidified caste' },
            { label: 'Legal codes — uniform law' },
            { label: 'Provincial reorganization' },
          ],
        },
        {
          label: 'Social Reform Movements',
          children: [
            { label: 'Brahmo Samaj — Raja Ram Mohan Roy (1828)' },
            { label: 'Prarthana Samaj — Atmaram Pandurang (1867)' },
            { label: 'Arya Samaj — Dayanand Saraswati (1875)' },
          ],
        },
        {
          label: 'Ideas & Technology',
          children: [
            { label: 'Print technology — newspapers, pamphlets' },
            { label: 'Spread of literacy — educated middle class' },
            { label: 'Nationalism — anti-colonial consciousness' },
          ],
        },
      ],
    },
  },

  // ── IS Ch2: Demographic Structure ────────────────────────
  {
    chapterId: 2,
    title: 'IS Ch2: Demographic Structure',
    tree: {
      label: 'Demographic Structure',
      children: [
        {
          label: 'Population Theories',
          children: [
            { label: 'Malthus: geometric pop. vs arithmetic food' },
            { label: 'Demographic Transition: 3 stages' },
            { label: 'Epidemiological Transition: infectious to degenerative' },
          ],
        },
        {
          label: 'Key Indicators',
          children: [
            { label: 'Birth Rate — live births per 1,000' },
            { label: 'Death Rate — deaths per 1,000' },
            { label: 'TFR — 2.1 replacement level' },
            { label: 'IMR, MMR, Sex Ratio, Life Expectancy' },
          ],
        },
        {
          label: 'Population Structure',
          children: [
            { label: 'Age: 0-15 youth, 15-64 working, 65+ dependent' },
            { label: 'Dependency Ratio' },
            { label: 'Demographic Dividend: working > dependent' },
          ],
        },
        {
          label: 'Population Policy',
          children: [
            { label: 'NFPP 1952 — first family planning' },
            { label: 'Emergency sterilization camps (1975-76)' },
            { label: 'NFWP — voluntary sterilization' },
            { label: 'PNDT Act 1996/2003 — sex determination ban' },
            { label: 'NREGA — employment safety net' },
          ],
        },
        {
          label: 'Social Patterns',
          children: [
            { label: 'Literacy: Kerala highest, gender gap' },
            { label: 'Rural-Urban migration: push-pull' },
            { label: 'Sex ratio decline: son preference' },
            { label: 'Kerala: low fertility; UP: high fertility' },
          ],
        },
      ],
    },
  },

  // ── IS Ch3: Social Institutions ──────────────────────────
  {
    chapterId: 3,
    title: 'IS Ch3: Social Institutions',
    tree: {
      label: 'Social Institutions',
      children: [
        {
          label: 'Caste System',
          children: [
            { label: 'Varna — 4-fold: Brahmin, Kshatriya, Vaishya, Shudra' },
            { label: 'Jati — thousands of endogamous groups' },
            { label: 'Brahmanical ideology + untouchability' },
            { label: 'Sanskritisation (M.N. Srinivas)' },
          ],
        },
        {
          label: 'Tribe',
          children: [
            { label: 'Scheduled Tribes — 8.6% of population' },
            { label: 'Isolation, forest-dwelling, self-sufficient' },
            { label: 'Reservation and protective provisions' },
            { label: 'PVTGs — Particularly Vulnerable Tribal Groups' },
          ],
        },
        {
          label: 'Family',
          children: [
            { label: 'Nuclear vs Joint family' },
            { label: 'Matrilineal: Khasi, Nayar' },
            { label: 'Patrilineal — dominant in most regions' },
            { label: 'Functions: economic, social, emotional, reproductive' },
          ],
        },
        {
          label: 'Kinship',
          children: [
            { label: 'Consanguineal — blood relations' },
            { label: 'Affinal — marriage relations' },
            { label: 'Exogamy vs Endogamy' },
          ],
        },
        {
          label: 'Panchayati Raj',
          children: [
            { label: '73rd Constitutional Amendment (1992)' },
            { label: '3-tier: Gram Panchayat, Samiti, Zila Parishad' },
            { label: '1/3 reservation for women' },
            { label: 'SC/ST reservation in local bodies' },
          ],
        },
      ],
    },
  },

  // ── IS Ch5: Social Inequality & Exclusion ────────────────
  {
    chapterId: 5,
    title: 'IS Ch5: Social Inequality & Exclusion',
    tree: {
      label: 'Social Inequality & Exclusion',
      children: [
        {
          label: 'Social Stratification',
          children: [
            { label: 'Group-based, inherited, life chances unequal' },
            { label: 'Economic capital — property, income' },
            { label: 'Social capital — networks, connections' },
            { label: 'Cultural capital — qualifications, education' },
          ],
        },
        {
          label: 'Prejudice, Stereotype, Discrimination',
          children: [
            { label: 'Prejudice — preconceived notions' },
            { label: 'Stereotype — fixed group characterisation' },
            { label: 'Discrimination — acting on prejudice' },
            { label: 'Social exclusion — systematic, involuntary' },
          ],
        },
        {
          label: 'Caste as Discriminatory System',
          children: [
            { label: 'Exclusion — untouchables denied water, festivals' },
            { label: 'Exploitation — low wages, degrading jobs' },
            { label: 'Humiliation — no bright clothes, heads bowed' },
            { label: 'Subordination — below upper castes' },
          ],
        },
        {
          label: 'Marginalised Groups',
          children: [
            { label: 'SC/ST: reservation, Art 17, Prevention of Atrocities Act' },
            { label: 'OBC: Mandal Commission, Kaka Kalelkar Commission' },
            { label: 'Adivasi: forest exploitation, displacement, state formation' },
            { label: 'Women: patriarchal society, reform movements' },
            { label: 'Differently-abled: 2.19 crore, integration needed' },
          ],
        },
        {
          label: 'Social Reformers',
          children: [
            { label: 'Jyotirao Phule — Satyashodhak Samaj' },
            { label: 'B.R. Ambedkar — Annihilation of Caste' },
            { label: 'Periyar — Self-Respect Movement' },
          ],
        },
      ],
    },
  },

  // ── IS Ch6: Cultural Diversity ───────────────────────────
  {
    chapterId: 6,
    title: 'IS Ch6: Cultural Diversity',
    tree: {
      label: 'Cultural Diversity',
      children: [
        {
          label: 'Diversity & Identity',
          children: [
            { label: 'Language, religion, caste, ethnicity' },
            { label: 'Nation vs Nation-State' },
            { label: 'Identity politics' },
          ],
        },
        {
          label: 'Challenges to Unity',
          children: [
            { label: 'Communalism — religious mobilisation' },
            { label: 'Regionalism — sub-national identity' },
            { label: 'Linguistic chauvinism — Hindi imposition resistance' },
          ],
        },
        {
          label: 'Secularism & Federalism',
          children: [
            { label: 'Indian secularism — equal respect (Sarva Dharma Sama Bhava)' },
            { label: 'Federalism — centre-state relations' },
            { label: 'Multilingualism — 22 scheduled languages' },
          ],
        },
        {
          label: 'Integration & Syncretism',
          children: [
            { label: 'National integration — unity in diversity' },
            { label: 'Syncretism — blending of cultures' },
            { label: 'UCC debate — uniform personal laws' },
            { label: 'Minority protections — constitutional safeguards' },
          ],
        },
      ],
    },
  },
];
