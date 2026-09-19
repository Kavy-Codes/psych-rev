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
      label: 'Introducing Indian Society',
      children: [
        {
          label: 'Sociology as a Discipline',
          children: [
            { label: 'Systematic study of society (not common sense)' },
            { label: 'Self-reflexivity — questioning own assumptions' },
            { label: 'Linking personal troubles to public issues' },
          ],
        },
        {
          label: 'Colonial Impact on India',
          children: [
            { label: 'Land revenue: Zamindari, Ryotwari, Mahalwari' },
            { label: 'Census operations rigidified caste categories' },
            { label: 'Railways unified markets across regions' },
            { label: 'Administrative unification under British rule' },
          ],
        },
        {
          label: 'Community vs Individual Identity',
          children: [
            { label: 'Community: ascriptive (birth-based, inherited)' },
            { label: 'Individual: achieved (education, career, choice)' },
            { label: 'Multiple coexisting identities in Indian society' },
          ],
        },
        {
          label: 'Key Thinkers',
          children: [
            { label: 'C. Wright Mills — Sociological Imagination' },
            { label: 'Edward Said — Orientalism' },
            { label: 'Max Weber — Social Action theory' },
          ],
        },
        {
          label: 'Features of Indian Society',
          children: [
            { label: 'Unity in diversity' },
            { label: 'Pluralism, multi-religious, multi-lingual' },
            { label: 'Social stratification (caste, class, gender)' },
          ],
        },
      ],
    },
  },

  // ── Chapter 2: Demographic Structure ─────────────────────
  {
    chapterId: 2,
    title: 'Demographic Structure',
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
            { label: 'NFPP 1952 — first family planning programme' },
            { label: 'Emergency sterilization camps (1975-76)' },
            { label: 'NFWP — voluntary sterilization with consent' },
            { label: 'PNDT Act 1996/2003 — sex determination ban' },
            { label: 'NREGA — employment safety net' },
          ],
        },
        {
          label: 'Social Patterns',
          children: [
            { label: 'Literacy: Kerala highest, gender gap exists' },
            { label: 'Rural-Urban migration: push-pull factors' },
            { label: 'Sex ratio decline: son preference, female foeticide' },
            { label: 'Kerala: low fertility; UP: high fertility' },
          ],
        },
      ],
    },
  },

  // ── Chapter 3: Social Institutions ───────────────────────
  {
    chapterId: 3,
    title: 'Social Institutions',
    tree: {
      label: 'Social Institutions',
      children: [
        {
          label: 'Caste System',
          children: [
            { label: 'Varna — 4-fold: Brahmins, Kshatriyas, Vaishyas, Shudras' },
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
            { label: 'Particularly Vulnerable Tribal Groups (PVTGs)' },
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
            { label: '73rd Constitutional Amendment' },
            { label: '3-tier: Gram Panchayat, Zila Parishad, Block Samiti' },
            { label: '1/3 reservation for women' },
            { label: 'SC/ST reservation in local bodies' },
          ],
        },
      ],
    },
  },

  // ── Chapter 5: Structural Change ─────────────────────────
  {
    chapterId: 5,
    title: 'Structural Change',
    tree: {
      label: 'Structural Change',
      children: [
        {
          label: 'Colonial Economy',
          children: [
            { label: 'Railway network — connected markets' },
            { label: 'Factory system — replaced cottage industry' },
            { label: 'Commercial agriculture — cash crops' },
            { label: 'Decline of artisan crafts' },
          ],
        },
        {
          label: 'Land Revenue Systems',
          children: [
            { label: 'Zamindari — intermediary landlords' },
            { label: 'Ryotwari — direct with peasants' },
            { label: 'Mahalwari — village-level assessment' },
          ],
        },
        {
          label: 'Administrative Changes',
          children: [
            { label: 'Census operations — classified population' },
            { label: 'Legal codes — uniform law across regions' },
            { label: 'Provincial reorganization under British' },
          ],
        },
        {
          label: 'Social Reform Movements',
          children: [
            { label: 'Brahmo Samaj — Raja Ram Mohan Roy' },
            { label: 'Prarthana Samaj — Atmaram Pandurang' },
            { label: 'Arya Samaj — Dayanand Saraswati' },
          ],
        },
        {
          label: 'Ideas and Technology',
          children: [
            { label: 'Print technology — newspapers, pamphlets' },
            { label: 'Spread of literacy — educated middle class' },
            { label: 'Nationalism — anti-colonial consciousness' },
          ],
        },
      ],
    },
  },

  // ── Chapter 6: Cultural Change ───────────────────────────
  {
    chapterId: 6,
    title: 'Cultural Change',
    tree: {
      label: 'Cultural Change',
      children: [
        {
          label: 'Modernization',
          children: [
            { label: 'Westernisation — English education, technology' },
            { label: 'Secularisation — declining religious authority' },
            { label: 'Rationalisation — scientific temper' },
          ],
        },
        {
          label: 'Sanskritisation',
          children: [
            { label: 'Lower castes adopt upper caste rituals' },
            { label: 'Claim higher status in caste hierarchy' },
            { label: 'Example: Nadars of Tamil Nadu, Ezhavas of Kerala' },
          ],
        },
        {
          label: 'Social Reformers',
          children: [
            { label: 'Raja Ram Mohan Roy — abolition of Sati' },
            { label: 'Jyotirao Phule — caste emancipation, education' },
            { label: 'Pandita Ramabai — women and widows' },
            { label: 'Periyar — Self-Respect Movement, rationalism' },
          ],
        },
        {
          label: 'Left Movement',
          children: [
            { label: 'Naxalite movement — armed revolution' },
            { label: 'Trade unions — workers rights' },
            { label: 'Peasant movements — land reform' },
          ],
        },
        {
          label: 'Other Movements',
          children: [
            { label: 'Kudumbam — women self-help, Kerala' },
            { label: 'Syncretism — blending of cultures' },
            { label: 'Partial reconstruction of tradition (T.N. Madan)' },
          ],
        },
      ],
    },
  },
];
