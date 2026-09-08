export interface GlossaryTerm {
  term: string;
  definition: string;
  chapter: number;
}

export const glossary: GlossaryTerm[] = [
  // Ch 1
  { term: "Individual Differences", definition: "Distinctiveness and variations among people's characteristics and behavior patterns.", chapter: 1 },
  { term: "Intelligence (Wechsler)", definition: "Global and aggregate capacity of an individual to think rationally, act purposefully, and deal effectively with environment.", chapter: 1 },
  { term: "Mental Age (MA)", definition: "Measure of a person's intellectual development relative to peers of the same chronological age.", chapter: 1 },
  { term: "Aptitude", definition: "Potential to acquire skills or knowledge with training; predictor of future performance.", chapter: 1 },
  { term: "Creativity", definition: "Ability to produce novel, original, and valuable ideas or solutions.", chapter: 1 },
  { term: "Emotional Intelligence", definition: "Ability to perceive, understand, manage, and use emotions effectively in oneself and others.", chapter: 1 },
  // Ch 2
  { term: "Personality", definition: "Dynamic organization of psychophysical systems that determines characteristic behavior and thought.", chapter: 2 },
  { term: "Trait", definition: "A stable, enduring characteristic that describes a person's behavior across situations.", chapter: 2 },
  { term: "Defense Mechanism", definition: "Unconscious protective strategies used by the Ego to reduce anxiety from Id-Superego conflict.", chapter: 2 },
  { term: "Libido", definition: "Psychic energy that fuels the id; basic drives in Freudian theory.", chapter: 2 },
  { term: "Projective Technique", definition: "Ambiguous stimuli allowing subjects to project unconscious motives and conflicts.", chapter: 2 },
  { term: "Self-Efficacy", definition: "Belief in one's own ability to succeed in specific situations or accomplish a task.", chapter: 2 },
  // Ch 3
  { term: "Stress", definition: "Pattern of responses an organism makes to a stimulus event that disturbs equilibrium.", chapter: 3 },
  { term: "Eustress", definition: "Positive stress that enhances performance and motivation.", chapter: 3 },
  { term: "Distress", definition: "Negative stress that causes body's wear and tear, impairs performance.", chapter: 3 },
  { term: "Coping", definition: "Efforts to manage, reduce, or tolerate demands created by stress.", chapter: 3 },
  { term: "Hardiness", definition: "Personality style with 3 Cs (Commitment, Control, Challenge) that buffers stress effects.", chapter: 3 },
  // Ch 4
  { term: "Psychological Disorder", definition: "Behavioral or mental pattern causing significant distress or impairment in functioning.", chapter: 4 },
  { term: "Diathesis", definition: "Biological or psychological predisposition to develop a disorder.", chapter: 4 },
  { term: "Delusion", definition: "False unshakable beliefs maintained despite contradictory evidence.", chapter: 4 },
  { term: "Hallucination", definition: "False sensory perceptions without any external stimulus.", chapter: 4 },
  { term: "Anhedonia", definition: "Inability to feel pleasure from normally enjoyable activities.", chapter: 4 },
  { term: "Alogia", definition: "Poverty of speech; reduced speech output characteristic of negative symptoms.", chapter: 4 },
  { term: "Avolition", definition: "Inability to initiate and persist in goal-directed activities.", chapter: 4 },
  // Ch 5
  { term: "Psychotherapy", definition: "Professional, systematic application of psychological principles to help people overcome problems.", chapter: 5 },
  { term: "Therapeutic Alliance", definition: "Trust and rapport between therapist and client; essential for effective therapy.", chapter: 5 },
  { term: "Reciprocal Inhibition", definition: "Principle that two opposing responses (relaxation and anxiety) cannot coexist.", chapter: 5 },
  { term: "Irrational Beliefs", definition: "Illogical, unrealistic thought patterns that cause emotional disturbance (Ellis).", chapter: 5 },
  { term: "Cognitive Triad", definition: "Beck's model: negative views of Self, World, and Future in depression.", chapter: 5 },
  // Ch 6
  { term: "Attitude", definition: "A stable set of evaluative reactions (positive/negative) toward objects, people, or events.", chapter: 6 },
  { term: "Stereotype", definition: "Overgeneralized beliefs or assumptions about a group of people.", chapter: 6 },
  { term: "Prejudice", definition: "Negative affective attitude toward members of a specific group.", chapter: 6 },
  { term: "Discrimination", definition: "Behavioral expression of prejudice; unequal treatment of individuals.", chapter: 6 },
  { term: "Attribution", definition: "Process of explaining causes of behavior and events.", chapter: 6 },
  { term: "Halo Effect", definition: "Tendency to assume positive qualities in someone based on one positive trait.", chapter: 6 },
  // Ch 7
  { term: "Conformity", definition: "Adjusting behavior or attitudes to match group norms or expectations.", chapter: 7 },
  { term: "Obedience", definition: "Compliance with direct orders from an authority figure.", chapter: 7 },
  { term: "Social Loafing", definition: "Reduced individual effort when working in a group compared to alone.", chapter: 7 },
  { term: "Groupthink", definition: "Suppression of dissent in cohesive groups leading to poor decision-making.", chapter: 7 },
  { term: "Cohesiveness", definition: "Togetherness and mutual attraction among group members ('We-feeling').", chapter: 7 },
  { term: "Social Facilitation", definition: "Improved performance on simple tasks due to presence of others.", chapter: 7 },
];

export const chapterNotes = [
  {
    chapter: 1,
    title: "Variations in Psychological Attributes",
    marks: 13,
    color: "indigo",
    keyPoints: [
      "Individual differences arise from heredity, environment, and their interaction",
      "Intelligence = global capacity to think rationally, act purposefully, deal with environment",
      "Spearman: g factor (general) + s factors (specific)",
      "Gardner: 8 Multiple Intelligences (Linguistic, Logical-Math, Spatial, Musical, Bodily-Kinesthetic, Interpersonal, Intrapersonal, Naturalistic)",
      "Sternberg: Triarchic (Componential, Experiential, Contextual)",
      "PASS Theory: Planning, Arousal, Simultaneous & Successive Processing",
      "IQ = (MA/CA) × 100; Normal 90-109, Gifted >130, Disability <70",
      "Indian view: Buddhi (Integral Intelligence) — cognitive, social, emotional, entrepreneurial",
      "Creativity ≠ Intelligence; Divergent thinking: fluency, flexibility, originality",
      "Emotional Intelligence: Perceive, Understand, Manage, Use emotions"
    ]
  },
  {
    chapter: 2,
    title: "Self and Personality",
    marks: 13,
    color: "rose",
    keyPoints: [
      "Freud: Id (Pleasure), Ego (Reality), Superego (Moral) — dynamic interaction",
      "Defense Mechanisms: Repression, Projection, Reaction Formation, Rationalisation, Displacement, Sublimation",
      "Allport: Cardinal, Central, Secondary Traits",
      "Cattell: 16 PF using Factor Analysis (Surface vs Source traits)",
      "Eysenck: PEN (Psychoticism, Extraversion, Neuroticism) — biological basis",
      "Big Five OCEAN: Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism",
      "Projective Tests: Rorschach Inkblots, TAT (Murray & Morgan), Rosenzweig P-F Study",
      "Self: Subject (I) vs Object (Me); Self-efficacy (Bandura) vs Self-regulation",
      "Rogers: Fully Functioning Person — UPR, Empathy, Congruence"
    ]
  },
  {
    chapter: 3,
    title: "Meeting Life Challenges",
    marks: 9,
    color: "emerald",
    keyPoints: [
      "Stress = pattern of responses to disturbing stimulus exceeding ability to cope",
      "Lazarus: Primary Appraisal (Harm/Threat/Challenge) + Secondary Appraisal (Coping Resources)",
      "Selye's GAS: Alarm → Resistance → Exhaustion",
      "Coping: Problem-Focused (controllable) vs Emotion-Focused (uncontrollable)",
      "Type A → CHD, Type B → relaxed, Type C → cancer, Type D → cardiac mortality",
      "Psychoneuroimmunology: Stress suppresses WBCs (T & B cells)",
      "Hardiness (Kobasa): Commitment, Control, Challenge",
      "Eustress (positive) vs Distress (negative)",
      "Sources: Physical, Psychological, Social stressors"
    ]
  },
  {
    chapter: 4,
    title: "Psychological Disorders",
    marks: 12,
    color: "amber",
    keyPoints: [
      "4 D's: Deviance, Distress, Dysfunction, Danger",
      "Diathesis-Stress: Predisposition + Stress = Disorder",
      "GAD: Free-floating worry; Panic: sudden terror episodes; Phobias: specific fears",
      "Schizophrenia Positive symptoms: Delusions, Hallucinations, Disorganized speech",
      "Schizophrenia Negative symptoms: Alogia, Flat Affect, Avolition, Anhedonia",
      "Conversion Disorder: Loss of function post-trauma without medical cause",
      "DID: Two or more distinct personality states",
      "MDD: Depressed mood + anhedonia; Bipolar: Mania + Depression alternation",
      "OCD: Obsessions (intrusive thoughts) + Compulsions (repetitive behaviors)",
      "Classification systems: DSM-5 (APA) and ICD-11 (WHO)"
    ]
  },
  {
    chapter: 5,
    title: "Therapeutic Approaches",
    marks: 9,
    color: "cyan",
    keyPoints: [
      "Psychotherapy: Voluntary, professional, systematic application of principles",
      "Therapeutic Alliance: Trust, Empathy, Warmth, Genuineness",
      "Behavior Therapy: Systematic Desensitization (Wolpe), Reciprocal Inhibition",
      "REBT (Ellis): ABC Model — Activating event, Belief, Consequence",
      "Beck's Cognitive Therapy: Cognitive Triad, Core Schemas, Distortions",
      "Client-Centered (Rogers): UPR, Accurate Empathy, Congruence",
      "CBT: Integrated cognitive + behavioral approach",
      "Alternative: Yoga, Meditation, Pranayama",
      "Biomedical: ECT, Drug therapy for severe cases"
    ]
  },
  {
    chapter: 6,
    title: "Attitude and Social Cognition",
    marks: 8,
    color: "fuchsia",
    keyPoints: [
      "ABC Components: Affective (feeling), Behavioral (action), Cognitive (belief)",
      "Formation: Classical conditioning, Operant conditioning, Observational learning",
      "Balance Theory (Heider): P-O-X triangle; balance = positive product",
      "Cognitive Dissonance (Festinger): Conflicting cognitions → motivation to reduce",
      "Stereotype (cognitive) → Prejudice (affective) → Discrimination (behavioral)",
      "Attribution: Internal (dispositional) vs External (situational)",
      "FAE: Overemphasizing internal causes for others' failures",
      "Impression Formation: Primacy Effect, Recency Effect, Halo Effect",
      "Prejudice Reduction: Superordinate goals, Intergroup contact"
    ]
  },
  {
    chapter: 7,
    title: "Social Influence and Group Processes",
    marks: 6,
    color: "lime",
    keyPoints: [
      "Groups: Primary/Secondary, Formal/Informal, In-Group/Out-Group",
      "Tuckman's 5 Stages: Forming → Storming → Norming → Performing → Adjourning",
      "Group Elements: Roles, Norms, Status, Cohesiveness",
      "Conformity (Asch): Group size, unanimity, task ambiguity affect it",
      "Obedience (Milgram): 65% max shock; authority proximity, legitimacy",
      "Social Loafing (Ringelmann): Diffusion of responsibility",
      "Social Facilitation: Simple tasks → better; Complex → worse",
      "Group Polarization: Shift toward extreme positions",
      "Groupthink (Janis): Suppressed dissent, illusion of invulnerability"
    ]
  }
];
