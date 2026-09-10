export interface MindMapChapter {
  chapterId: number;
  title: string;
  mermaidCode: string;
}

export const mindMapsData: MindMapChapter[] = [
  {
    chapterId: 1,
    title: "Variations in Psychological Attributes",
    mermaidCode: `graph TD
    CH1["Ch1: Variations in Psychological Attributes"] --> INT["Theories of Intelligence"]
    CH1 --> ASS["Assessment"]
    CH1 --> CUL["Culture & Intelligence"]
    INT --> PSY["Psychometric Approaches"]
    INT --> INF["Information Processing"]
    PSY --> T1["Binet: First IQ Test"]
    PSY --> T2["Spearman: g & s factors"]
    PSY --> T3["Thurstone: 7 PMAs"]
    PSY --> T4["Guilford: Structure of Intellect (180 cells)"]
    PSY --> T5["Jensen: Level I & II"]
    INF --> T6["Sternberg: Triarchic Theory"]
    T6 --> T6A["Componential"]
    T6 --> T6B["Experiential"]
    T6 --> T6C["Contextual"]
    INF --> T7["Gardner: 8 Multiple Intelligences"]
    INF --> T8["Das-Naglieri: PASS Theory"]
    T8 --> T8A["Planning"]
    T8 --> T8B["Arousal/Attention"]
    T8 --> T8C["Simultaneous & Successive"]
    ASS --> IQ["IQ = MA/CA x 100"]
    IQ --> CL1["Gifted > 130"]
    IQ --> CL2["Normal 90-109"]
    IQ --> CL3["Disability < 70"]
    CUL --> W["Western: Tech Intelligence"]
    CUL --> E["Indian: Buddhi (Integral)"]
    E --> EB["Cognitive + Social + Emotional + Entrepreneurial"]
    style CH1 fill:#4f46e5,color:#fff,stroke:#6366f1
    style INT fill:#7c3aed,color:#fff
    style ASS fill:#7c3aed,color:#fff
    style CUL fill:#7c3aed,color:#fff`
  },
  {
    chapterId: 2,
    title: "Self and Personality",
    mermaidCode: `graph TD
    CH2["Ch2: Self and Personality"] --> SELF["Concepts of Self"]
    CH2 --> PER["Personality Approaches"]
    CH2 --> ASS["Assessment"]
    SELF --> SE["Self-Efficacy: Bandura"]
    SELF --> SR["Self-Regulation"]
    SELF --> SC["Self-Concept & Esteem"]
    PER --> TYP["Type Approaches"]
    PER --> TRT["Trait Approaches"]
    PER --> DYN["Psychodynamic"]
    PER --> POST["Post-Freudians"]
    PER --> HUM["Humanistic"]
    TYP --> TY1["Hippocrates: 4 Humours"]
    TYP --> TY2["Jung: Introvert/Extravert"]
    TYP --> TY3["Friedman: Type A/B/C/D"]
    TRT --> TR1["Allport: Cardinal/Central/Secondary"]
    TRT --> TR2["Cattell: 16PF"]
    TRT --> TR3["Eysenck: PEN"]
    TRT --> TR4["Costa: Big Five OCEAN"]
    DYN --> ID["Id: Pleasure Principle"]
    DYN --> EG["Ego: Reality Principle"]
    DYN --> SP["Superego: Moral Principle"]
    DYN --> DEF["Defense Mechanisms"]
    DEF --> D1["Repression"]
    DEF --> D2["Projection"]
    DEF --> D3["Displacement"]
    DEF --> D4["Rationalisation"]
    DEF --> D5["Sublimation"]
    POST --> PJ["Jung: Collective Unconscious"]
    POST --> PA["Adler: Inferiority Complex"]
    POST --> PH["Horney: Basic Anxiety"]
    POST --> PE["Erikson: 8 Psychosocial Stages"]
    HUM --> CR["Rogers: Fully Functioning Person"]
    ASS --> PROJ["Projective: Rorschach, TAT"]
    ASS --> SR2["Self-Report: MMPI, 16PF"]
    style CH2 fill:#4f46e5,color:#fff,stroke:#6366f1
    style DYN fill:#dc2626,color:#fff
    style TRT fill:#059669,color:#fff`
  },
  {
    chapterId: 3,
    title: "Meeting Life Challenges",
    mermaidCode: `graph TD
    CH3["Ch3: Meeting Life Challenges"] --> NAT["Nature of Stress"]
    CH3 --> RES["Stress Response"]
    CH3 --> COP["Coping"]
    CH3 --> HLTH["Health & Resilience"]
    NAT --> LAZ["Lazarus: Cognitive Appraisal"]
    LAZ --> P["Primary: Harm/Threat/Challenge"]
    LAZ --> S["Secondary: Coping Resources"]
    NAT --> SRC["Sources: Life Events, Hassles, Trauma"]
    NAT --> EUD["Eustress vs Distress"]
    RES --> GAS["Selye: General Adaptation Syndrome"]
    GAS --> A1["Alarm: Fight-or-Flight"]
    GAS --> A2["Resistance: Body Fights"]
    GAS --> A3["Exhaustion: Resources Depleted"]
    COP --> PF["Problem-Focused Coping"]
    COP --> EF["Emotion-Focused Coping"]
    COP --> TASK["Task/Emotion/Avoidance (Endler & Parker)"]
    HLTH --> PNI["Psychoneuroimmunology"]
    HLTH --> TYPE["Type A/B/C/D"]
    HLTH --> HD["Hardiness: 3 Cs"]
    HD --> HC["Commitment"]
    HD --> HCO["Control"]
    HD --> HCH["Challenge"]
    HLTH --> SS["Social Support Types"]
    style CH3 fill:#4f46e5,color:#fff,stroke:#6366f1
    style GAS fill:#dc2626,color:#fff
    style LAZ fill:#7c3aed,color:#fff`
  },
  {
    chapterId: 4,
    title: "Psychological Disorders",
    mermaidCode: `graph TD
    CH4["Ch4: Psychological Disorders"] --> DEF["Abnormality Concepts"]
    CH4 --> ETIOL["Etiology"]
    CH4 --> CLAS["Major Disorders"]
    DEF --> D4["4 D's: Deviance/Distress/Dysfunction/Danger"]
    DEF --> SYS["DSM-5 & ICD-11"]
    ETIOL --> BIO["Biological: Genetics & Neurotransmitters"]
    ETIOL --> PSY["Psychological Models"]
    ETIOL --> SOC["Socio-Cultural Model"]
    ETIOL --> DIATH["Diathesis-Stress Model"]
    CLAS --> ANX["Anxiety Disorders"]
    ANX --> GAD["GAD: Free-floating worry"]
    ANX --> PAN["Panic Disorder: Terror episodes"]
    ANX --> PHOB["Phobias: Specific, Social, Agora"]
    CLAS --> SOM["Somatic & Dissociative"]
    SOM --> CONV["Conversion Disorder"]
    SOM --> DID["Dissociative Identity Disorder"]
    CLAS --> MOOD["Mood Disorders"]
    MOOD --> MDD["Major Depressive Disorder"]
    MOOD --> BIP["Bipolar I & II"]
    CLAS --> SCHIZ["Schizophrenia"]
    SCHIZ --> POS["Positive: Delusions, Hallucinations"]
    SCHIZ --> NEG["Negative: Alogia, Flat Affect, Avolition"]
    SCHIZ --> CAT["Catatonia: Stupor, Rigidity"]
    CLAS --> EAT["Eating Disorders"]
    EAT --> AN["Anorexia Nervosa"]
    EAT --> BU["Bulimia Nervosa"]
    style CH4 fill:#4f46e5,color:#fff,stroke:#6366f1
    style SCHIZ fill:#dc2626,color:#fff
    style ANX fill:#f59e0b,color:#000`
  },
  {
    chapterId: 5,
    title: "Therapeutic Approaches",
    mermaidCode: `graph TD
    CH5["Ch5: Therapeutic Approaches"] --> ALL["Therapeutic Alliance"]
    CH5 --> BEH["Behavior Therapy"]
    CH5 --> COG["Cognitive Therapy"]
    CH5 --> HUM["Humanistic Therapy"]
    CH5 --> ALT["Alternative & Ethics"]
    ALL --> AL["Unconditional Acceptance + Empathy"]
    BEH --> SD["Systematic Desensitization: Wolpe"]
    SD --> RI["Reciprocal Inhibition"]
    SD --> AH["Anxiety Hierarchy"]
    BEH --> AV["Aversive Conditioning"]
    BEH --> RE["Positive Reinforcement & Token Economy"]
    BEH --> MO["Modeling / Vicarious Learning"]
    COG --> REBT["REBT: Albert Ellis"]
    REBT --> ABC["ABC: Event -> Belief -> Consequence"]
    REBT --> DIS["Disputation of Irrational Beliefs"]
    COG --> BECK["Cognitive Therapy: Aaron Beck"]
    BECK --> SCHEMA["Dysfunctional Core Schemas"]
    BECK --> TRIAD["Cognitive Triad: Self/World/Future"]
    COG --> CBT["CBT: Integrated Approach"]
    HUM --> CCR["Client-Centered: Carl Rogers"]
    CCR --> UPR["Unconditional Positive Regard"]
    CCR --> EMP["Accurate Empathy"]
    CCR --> CONG["Congruence / Genuineness"]
    HUM --> GEST["Gestalt Therapy: Perls"]
    HUM --> LOGO["Logotherapy: Frankl"]
    ALT --> YOGA["Yoga & Meditation"]
    ALT --> ETH["Ethics: Confidentiality, Consent"]
    style CH5 fill:#4f46e5,color:#fff,stroke:#6366f1
    style REBT fill:#dc2626,color:#fff
    style CCR fill:#059669,color:#fff`
  },
  {
    chapterId: 6,
    title: "Attitude and Social Cognition",
    mermaidCode: `graph TD
    CH6["Ch6: Attitude & Social Cognition"] --> NAT["Nature of Attitudes"]
    CH6 --> FORM["Attitude Formation"]
    CH6 --> CHG["Attitude Change"]
    CH6 --> PREJ["Prejudice & Discrimination"]
    CH6 --> SOC["Social Cognition"]
    NAT --> ABC["ABC Components"]
    ABC --> A["Affective (Feeling)"]
    ABC --> B["Behavioral (Action)"]
    ABC --> C["Cognitive (Belief)"]
    NAT --> FEAT["Features: Valence, Extremeness"]
    FORM --> AF1["Classical Conditioning"]
    FORM --> AF2["Operant Conditioning"]
    FORM --> AF3["Observational Learning"]
    FORM --> AF4["Group/Cultural Norms"]
    CHG --> BAL["Balance Theory: Heider (P-O-X)"]
    CHG --> DIS2["Cognitive Dissonance: Festinger"]
    CHG --> TWO["Two-Step: S.M. Mohsin"]
    PREJ --> STER["Stereotypes (Cognitive)"]
    PREJ --> PRE["Prejudice (Affective)"]
    PREJ --> DISC["Discrimination (Behavioral)"]
    PREJ --> RED["Reduction: Superordinate Goals"]
    SOC --> ATTR["Attribution: Weiner"]
    ATTR --> INT2["Internal vs External"]
    ATTR --> FAE["Fundamental Attribution Error"]
    SOC --> IMP["Impression Formation"]
    IMP --> HALO["Halo Effect"]
    IMP --> PRI["Primacy & Recency Effects"]
    style CH6 fill:#4f46e5,color:#fff,stroke:#6366f1
    style CHG fill:#7c3aed,color:#fff
    style PREJ fill:#dc2626,color:#fff`
  },
  {
    chapterId: 7,
    title: "Social Influence and Group Processes",
    mermaidCode: `graph TD
    CH7["Ch7: Social Influence & Groups"] --> GRP["Groups"]
    CH7 --> INF["Social Influence"]
    CH7 --> BEH["Group Behavior"]
    GRP --> TYP["Types: Primary/Secondary, Formal/Informal"]
    GRP --> WHY["Why Join: Security, Status, Goals"]
    GRP --> DEV["Tuckman's 5 Stages"]
    DEV --> S1["Forming"]
    DEV --> S2["Storming"]
    DEV --> S3["Norming"]
    DEV --> S4["Performing"]
    DEV --> S5["Adjourning"]
    GRP --> EL["Elements: Roles, Norms, Status, Cohesion"]
    INF --> CON["Conformity: Asch's Line Study"]
    CON --> CF["Factors: Size, Unanimity, Ambiguity"]
    INF --> OBE["Obedience: Milgram's Shock Study"]
    OBE --> OF["65% gave max shock"]
    OBE --> OD["Authority proximity, legitimacy"]
    INF --> COMP["Compliance Techniques"]
    BEH --> FAC["Social Facilitation: Triplett/Zajonc"]
    BEH --> LOAF["Social Loafing: Ringelmann"]
    LOAF --> LR["Diffusion of Responsibility"]
    BEH --> POL["Group Polarization"]
    BEH --> GT["Groupthink: Janis"]
    GT --> GI["Illusion of invulnerability"]
    GT --> GD["Suppressed dissent"]
    style CH7 fill:#4f46e5,color:#fff,stroke:#6366f1
    style INF fill:#7c3aed,color:#fff
    style OBE fill:#dc2626,color:#fff`
  }
];
