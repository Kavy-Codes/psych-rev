export interface Flashcard {
  id: string;
  chapter: number;
  chapterName: string;
  topic: string;
  term: string;
  theorist: string;
  markWeight: string;
  definition: string;
  keyPoints: string[];
  example: string;
}

export const flashcards: Flashcard[] = [
  // ===== CH 1: Variations in Psychological Attributes =====
  {
    id: "c1_01", chapter: 1, chapterName: "Variations in Psychological Attributes",
    topic: "Theories of Intelligence", term: "Two-Factor Theory (g & s factors)",
    theorist: "Charles Spearman (1927)", markWeight: "2/3 Marks",
    definition: "Proposes that intellectual abilities comprise two factors: a general factor ('g' factor) common to all intellectual activities, and specific factors ('s' factors) unique to particular tasks.",
    keyPoints: ["'g' factor: Universal inborn mental energy; primary mental energy", "'s' factors: Specific capabilities varying task-to-task", "A person high in 'g' performs well across domains", "'s' factors determine domain-specific excellence"],
    example: "A high-'g' student excels across subjects, but needs a specific 's' factor for extraordinary musical ability."
  },
  {
    id: "c1_02", chapter: 1, chapterName: "Variations in Psychological Attributes",
    topic: "Theories of Intelligence", term: "Theory of Multiple Intelligences",
    theorist: "Howard Gardner (1983)", markWeight: "4/6 Marks",
    definition: "Intelligence is not a single entity; it consists of 8 distinct, autonomous intelligences that interact together.",
    keyPoints: ["Linguistic — poets, writers", "Logical-Mathematical — scientists, accountants", "Spatial — pilots, architects", "Musical — composers, vocalists", "Bodily-Kinesthetic — athletes, dancers", "Interpersonal — politicians, counselors", "Intrapersonal — philosophers", "Naturalistic — farmers, botanists"],
    example: "An architect requires high spatial and bodily-kinesthetic intelligence, independent of verbal proficiency."
  },
  {
    id: "c1_03", chapter: 1, chapterName: "Variations in Psychological Attributes",
    topic: "Theories of Intelligence", term: "Triarchic Theory of Intelligence",
    theorist: "Robert Sternberg (1985)", markWeight: "4/6 Marks",
    definition: "Information-processing approach defining intelligence as the ability to adapt, shape, and select environments to accomplish goals.",
    keyPoints: ["Componential/Analytical: Knowledge acquisition, meta-components, performance components", "Experiential/Creative: Dealing with novel situations, integrating insights", "Contextual/Practical: 'Street smarts', everyday problem-solving", "Ability to adapt, shape, and select environments"],
    example: "Componential helps score well on tests; Contextual helps an executive adapt management style."
  },
  {
    id: "c1_04", chapter: 1, chapterName: "Variations in Psychological Attributes",
    topic: "Theories of Intelligence", term: "PASS Theory of Intelligence",
    theorist: "J.P. Das, Naglieri & Kirby (1994)", markWeight: "4/6 Marks",
    definition: "Intellectual activity involves interdependent functioning of three neurological systems/functional units in the brain.",
    keyPoints: ["Planning: Setting goals, choosing strategies (prefrontal cortex)", "Arousal/Attention: Optimal alertness, focusing on stimuli (reticular activating system)", "Simultaneous Processing: Integrating relations into meaningful whole", "Successive Processing: Recalling items in serial order"],
    example: "A student organizing study steps uses Planning; reading words phonetically in sequence uses Successive processing."
  },
  {
    id: "c1_05", chapter: 1, chapterName: "Variations in Psychological Attributes",
    topic: "Theories of Intelligence", term: "Hierarchical Model of Intelligence",
    theorist: "Arthur Jensen", markWeight: "2/3 Marks",
    definition: "Proposed two levels: Level I (Associative learning, rote memory) and Level II (Higher-order cognitive abilities, reasoning).",
    keyPoints: ["Level I: Associative, memory-based, simple recall", "Level II: Cognitive, reasoning-based, educationally relevant", "Level II is more related to academic performance", "Level I is basic; Level II builds upon it"],
    example: "Memorizing multiplication tables = Level I; Applying algebra to solve a word problem = Level II."
  },
  {
    id: "c1_06", chapter: 1, chapterName: "Variations in Psychological Attributes",
    topic: "Theories of Intelligence", term: "Structure of Intellect (SOI)",
    theorist: "J.P. Guilford", markWeight: "2/3 Marks",
    definition: "Intelligence is a three-dimensional model with 180 factors: Operations × Content × Products.",
    keyPoints: ["Operations: Cognition, Memory, Divergent Production, Convergent Production, Evaluation", "Content: Visual, Auditory, Symbolic, Semantic, Behavioral", "Products: Units, Classes, Relations, Systems, Transformations, Implications", "180 unique intellectual factors (6×5×6)"],
    example: "Solving a math problem uses Convergent Production (operation) on Symbolic content to produce a System (product)."
  },
  {
    id: "c1_07", chapter: 1, chapterName: "Variations in Psychological Attributes",
    topic: "Assessment", term: "IQ Calculation & Classification",
    theorist: "William Stern (formula)", markWeight: "1/2 Marks",
    definition: "IQ = (Mental Age / Chronological Age) × 100. Mental Age is measured level of cognitive development; Chronological Age is actual age.",
    keyPoints: ["Normal/Average IQ: 90–109", "Intellectual Giftedness: IQ > 130", "Intellectual Disability: IQ < 70 with adaptive deficits", "Formula: IQ = (MA/CA) × 100"],
    example: "A 10-year-old performing at 12-year-old level: IQ = (12/10) × 100 = 120."
  },
  {
    id: "c1_08", chapter: 1, chapterName: "Variations in Psychological Attributes",
    topic: "Assessment", term: "Integral Intelligence (Buddhi)",
    theorist: "Indian Tradition / J.P. Das", markWeight: "3/4 Marks",
    definition: "The Indian perspective views intelligence holistically, emphasizing contextual, social, and emotional integration.",
    keyPoints: ["Cognitive capacity: Sensitivity to context, reasoning, discrimination", "Social competence: Respect for social order, helping others", "Emotional competence: Self-regulation, patience, polite conduct", "Entrepreneurial competence: Hard work, persistence"],
    example: "A person who respects elders, remains calm in crisis, and exercises deep self-control exemplifies 'Buddhi'."
  },
  {
    id: "c1_09", chapter: 1, chapterName: "Variations in Psychological Attributes",
    topic: "Creativity", term: "Creativity & Divergent Thinking",
    theorist: "Torrance / Guilford", markWeight: "2 Marks",
    definition: "Creativity is producing novel, original, valuable ideas. High IQ does not guarantee high creativity (threshold theory).",
    keyPoints: ["Torrance Tests of Creative Thinking (TTCT)", "Divergent thinking: fluency, flexibility, originality, elaboration", "High IQ ≠ High creativity (threshold theory)", "Guilford: Divergent Production is key to creativity"],
    example: "A student with average grades but exceptional artistic originality scores high on creativity tests."
  },
  {
    id: "c1_10", chapter: 1, chapterName: "Variations in Psychological Attributes",
    topic: "Emotional Intelligence", term: "Emotional Intelligence (EI)",
    theorist: "Salovey, Mayer, Goleman", markWeight: "2/3 Marks",
    definition: "The ability to perceive, understand, manage, and use emotions effectively in oneself and others.",
    keyPoints: ["Perceiving emotions: Recognizing emotions in faces, music, stories", "Using emotions: Facilitating thinking and creativity", "Understanding emotions: Interpreting complex feelings", "Managing emotions: Regulating emotions in self and others"],
    example: "A teacher who reads students' frustration and adjusts teaching approach demonstrates high EI."
  },
  {
    id: "c1_11", chapter: 1, chapterName: "Variations in Psychological Attributes",
    topic: "Aptitude", term: "Aptitude vs Intelligence",
    theorist: "Various", markWeight: "2/3 Marks",
    definition: "Aptitude refers to an individual's potential or capacity to learn and perform in a specific area, while intelligence is a broader cognitive ability.",
    keyPoints: ["Aptitude is domain-specific; Intelligence is general", "Aptitude predicts future learning potential", "Measured by Differential Aptitude Tests (DAT)", "Used for vocational guidance and career planning", "Combines innate ability with potential for development"],
    example: "A student scoring high on mechanical aptitude test is guided toward engineering careers."
  },
  {
    id: "c1_12", chapter: 1, chapterName: "Variations in Psychological Attributes",
    topic: "Culture and Intelligence", term: "Culture-Fair vs Culture-Biased Tests",
    theorist: "Cattell / Wechsler", markWeight: "2 Marks",
    definition: "Culture-fair tests minimize cultural and linguistic bias to measure intelligence equitably across diverse populations.",
    keyPoints: ["Culture-fair tests use non-verbal, universal items (Raven's Matrices)", "Culture-biased tests favour dominant cultural groups", "Wechsler scales include cultural balance", "IQ scores may be inflated/deflated by cultural familiarity", "Cross-cultural testing reveals universal vs culture-specific abilities"],
    example: "Raven's Progressive Matrices use abstract shapes, avoiding language/culture-specific content."
  },

  // ===== CH 2: Self and Personality =====
  {
    id: "c2_01", chapter: 2, chapterName: "Self and Personality",
    topic: "Structure of Personality", term: "Id, Ego, and Superego",
    theorist: "Sigmund Freud", markWeight: "3/4 Marks",
    definition: "Structural model of personality composed of three interacting mental agencies competing for mental energy (libido).",
    keyPoints: ["Id: Pleasure Principle — impulsive, unconscious, seeks immediate gratification", "Ego: Reality Principle — executive, directs impulses socially", "Superego: Moral Principle — internalizes societal values, induces guilt", "Personality is dynamic interaction of all three"],
    example: "Id wants to steal chocolate; Superego says stealing is sin; Ego waits and purchases legally."
  },
  {
    id: "c2_02", chapter: 2, chapterName: "Self and Personality",
    topic: "Defense Mechanisms", term: "Ego Defense Mechanisms",
    theorist: "Sigmund Freud / Anna Freud", markWeight: "4 Marks",
    definition: "Unconscious protective mechanisms used by the Ego to reduce anxiety from unresolved Id-Superego conflict.",
    keyPoints: ["Repression: Pushing anxiety-provoking thoughts into unconscious", "Projection: Attributing own unacceptable feelings to others", "Reaction Formation: Opposite behavior to unconscious desires", "Rationalisation: Logical excuses for irrational behavior", "Displacement: Redirecting aggression onto safer target"],
    example: "A student furious with teacher comes home and kicks the door (Displacement)."
  },
  {
    id: "c2_03", chapter: 2, chapterName: "Self and Personality",
    topic: "Defense Mechanisms", term: "Advanced Defense Mechanisms",
    theorist: "Freud / Anna Freud", markWeight: "4 Marks",
    definition: "Additional unconscious strategies: Denial, Regression, Sublimation, Compensation, Identification.",
    keyPoints: ["Denial: Refusing to accept reality", "Regression: Reverting to earlier developmental behavior under stress", "Sublimation: Channeling unacceptable impulses into socially acceptable activities", "Compensation: Overachieving in one area to offset weaknesses", "Identification: Adopting characteristics of a role model"],
    example: "An adult throwing tantrum under stress shows Regression; channeling aggression into sports shows Sublimation."
  },
  {
    id: "c2_04", chapter: 2, chapterName: "Self and Personality",
    topic: "Trait Theories", term: "Gordon Allport's Trait Theory",
    theorist: "Gordon Allport", markWeight: "3/4 Marks",
    definition: "Traits are primary units of personality that guide consistent behavior across diverse situations.",
    keyPoints: ["Cardinal Traits: Pervasive traits dominating entire life (e.g., Gandhi's non-violence)", "Central Traits: 5–10 general characteristics forming building blocks", "Secondary Traits: Peripheral preferences in specific settings", "Approximately 4500 trait words in English language"],
    example: "Mother Teresa's lifelong humanitarian compassion is a Cardinal trait."
  },
  {
    id: "c2_05", chapter: 2, chapterName: "Self and Personality",
    topic: "Trait Theories", term: "Cattell's 16 Personality Factors",
    theorist: "Raymond Cattell", markWeight: "3/4 Marks",
    definition: "Identified 16 primary source traits underlying personality using factor analysis.",
    keyPoints: ["Surface Traits vs Source Traits", "16 Personality Factor Questionnaire (16PF)", "Source traits are underlying causes; surface traits are observable clusters", "Factors include: Warmth, Reasoning, Emotional Stability, Dominance, Liveliness"],
    example: "Warmth and sociability are surface traits emerging from underlying source traits."
  },
  {
    id: "c2_06", chapter: 2, chapterName: "Self and Personality",
    topic: "Trait Theories", term: "Five-Factor Model (Big Five / OCEAN)",
    theorist: "Paul Costa & Robert McCrae", markWeight: "3/4 Marks",
    definition: "A comprehensive model proposing 5 universal, cross-cultural fundamental personality trait dimensions.",
    keyPoints: ["Openness: Imaginative, curious vs. conventional", "Conscientiousness: Organized, disciplined vs. impulsive", "Extraversion: Outgoing, assertive vs. introverted", "Agreeableness: Cooperative, trusting vs. cold, suspicious", "Neuroticism: Anxious, irritable vs. calm, resilient"],
    example: "A student who systematically finishes projects ahead of schedule scores high in Conscientiousness."
  },
  {
    id: "c2_07", chapter: 2, chapterName: "Self and Personality",
    topic: "Trait Theories", term: "Eysenck's PEN Model",
    theorist: "Hans Eysenck", markWeight: "3 Marks",
    definition: "Proposed 3 super-traits (dimensions) of personality with biological basis.",
    keyPoints: ["Psychoticism: Aggressive, cold, egocentric vs. empathetic", "Extraversion: Outgoing, lively vs. reserved, passive", "Neuroticism: Anxious, moody vs. even-tempered, calm", "Biological basis: arousal levels in cortex"],
    example: "An introvert has higher baseline cortical arousal, needing less external stimulation."
  },
  {
    id: "c2_08", chapter: 2, chapterName: "Self and Personality",
    topic: "Personality Assessment", term: "Projective Techniques",
    theorist: "Rorschach, Murray, Morgan", markWeight: "4 Marks",
    definition: "Unstructured/ambiguous stimuli allowing subjects to project unconscious motives and conflicts.",
    keyPoints: ["Rorschach Inkblot Test: 10 inkblots, scored on location/determinants/content", "TAT: 30 B&W pictures + 1 blank; respondent constructs story with beginning, middle, end", "Rosenzweig P-F Study: Assesses aggression in frustrating situations", "Extrapunitive, Intropunitive, Impunitive response patterns"],
    example: "Looking at an ambiguous drawing, a person projects their own fear of parental pressure."
  },
  {
    id: "c2_09", chapter: 2, chapterName: "Self and Personality",
    topic: "Self", term: "Self-Efficacy vs Self-Regulation",
    theorist: "Albert Bandura", markWeight: "2 Marks",
    definition: "Self-efficacy: Belief in one's ability to succeed. Self-Regulation: Controlling one's own behavior through self-monitoring.",
    keyPoints: ["Self-efficacy is belief; Self-regulation is process", "High self-efficacy → greater effort and persistence", "Self-regulation involves self-observation, judgment, self-reaction", "Self-efficacy built through mastery experiences"],
    example: "A student with high self-efficacy attempts harder problems; self-regulation keeps them studying on schedule."
  },
  {
    id: "c2_10", chapter: 2, chapterName: "Self and Personality",
    topic: "Self", term: "Carl Rogers' Fully Functioning Person",
    theorist: "Carl Rogers", markWeight: "3 Marks",
    definition: "Humanistic view: People strive for self-actualization and personal growth.",
    keyPoints: ["Open to experience vs defensive", "Existential living: Living in present moment", "Organismic trusting: Trusting own feelings", "Experiential freedom: Sense of free will", "Creative and adaptable to change"],
    example: "A fully functioning person embraces change openly rather than clinging to rigid routines."
  },
  {
    id: "c2_11", chapter: 2, chapterName: "Self and Personality",
    topic: "Self", term: "Self as Subject vs Self as Object",
    theorist: "William James", markWeight: "2 Marks",
    definition: "Self as subject (I): The active knower. Self as object (Me): Something that can be known — includes material, social, and spiritual self.",
    keyPoints: ["'I' is the active, experiencing self", "'Me' is the self as known — material, social, spiritual", "Material Self: Body, clothes, possessions", "Social Self: Recognition from others", "Spiritual Self: Inner subjective being"],
    example: "'I am dancing' = Self as subject. 'I am a good dancer' = Self as object."
  },
  {
    id: "c2_12", chapter: 2, chapterName: "Self and Personality",
    topic: "Personality Assessment", term: "MMPI (Minnesota Multiphasic Personality Inventory)",
    theorist: "Hathaway & McKinley", markWeight: "3/4 Marks",
    definition: "A standardized objective personality test using true/false items to assess personality characteristics and psychopathology.",
    keyPoints: ["567 true/false items covering 10 clinical scales", "Clinical scales include: Hypochondriasis, Depression, Hysteria, Psychopathic Deviate, Paranoia", "Validity scales detect malingering and inconsistent responding", "Used widely in clinical and forensic settings", "Empirically derived — items correlate with diagnosed conditions"],
    example: "A forensic psychologist uses MMPI to assess whether a defendant is exaggerating symptoms of mental illness."
  },
  {
    id: "c2_13", chapter: 2, chapterName: "Self and Personality",
    topic: "Trait Theories", term: "Big Five Personality Traits — Detailed Assessment",
    theorist: "Costa & McCrae / Goldberg", markWeight: "3/4 Marks",
    definition: "The Big Five (OCEAN) model provides a comprehensive framework for measuring personality across cultures using standardized inventories.",
    keyPoints: ["NEO-PI-R: 240-item inventory measuring 5 factors and 30 facets", "Openness: Fantasy, aesthetics, feelings, actions, ideas, values", "Conscientiousness: Competence, order, dutifulness, achievement, self-discipline", "Extraversion: Warmth, gregariousness, assertiveness, activity, excitement-seeking, positive emotions", "Cross-culturally validated across 50+ languages"],
    example: "A psychologist uses the NEO-PI-R to create a detailed personality profile for career counselling."
  },

  // ===== CH 3: Meeting Life Challenges =====
  {
    id: "c3_01", chapter: 3, chapterName: "Meeting Life Challenges",
    topic: "Nature of Stress", term: "Cognitive Appraisal of Stress",
    theorist: "Richard Lazarus", markWeight: "3/4 Marks",
    definition: "Stress is determined by an individual's cognitive evaluation of an event, not just the event itself.",
    keyPoints: ["Primary Appraisal: Perceiving event as Positive, Neutral, or Negative", "Harm: Damage already done; Threat: Potential future harm; Challenge: Growth opportunity", "Secondary Appraisal: Assessment of coping resources and capabilities", "Appraisal is the mediating process between stimulus and stress response"],
    example: "Viewing a tough exam as 'threat' sparks anxiety; viewing as 'challenge' triggers focused study."
  },
  {
    id: "c3_02", chapter: 3, chapterName: "Meeting Life Challenges",
    topic: "Stress Response", term: "General Adaptation Syndrome (GAS)",
    theorist: "Hans Selye", markWeight: "4/6 Marks",
    definition: "A physiological three-stage biological response pattern of the body to prolonged chronic stress.",
    keyPoints: ["Alarm Reaction: Fight-or-flight; adrenal-pituitary-cortex activation", "Resistance Stage: Parasympathetic attempts restoration; body resists but depletes reserves", "Exhaustion Stage: Resources drained; immune system collapses", "Diseases of adaptation: Hypertension, ulcers"],
    example: "A student studying without breaks stays alert (Resistance) then falls ill after exams (Exhaustion)."
  },
  {
    id: "c3_03", chapter: 3, chapterName: "Meeting Life Challenges",
    topic: "Coping Strategies", term: "Problem-Focused vs Emotion-Focused Coping",
    theorist: "Lazarus & Folkman", markWeight: "3/4 Marks",
    definition: "Two primary modes of handling stressful encounters: altering the problem directly or regulating emotional distress.",
    keyPoints: ["Problem-Focused: Direct action — seeking info, planning, scheduling", "Emotion-Focused: Ventilation, positive reinterpretation, denial", "Problem-focused effective when stressors are controllable", "Emotion-focused useful when events are uncontrollable"],
    example: "Problem-focused: Creating a revision timetable. Emotion-focused: Deep breathing exercises."
  },
  {
    id: "c3_04", chapter: 3, chapterName: "Meeting Life Challenges",
    topic: "Personality & Health", term: "Type A, B, C, D Personalities",
    theorist: "Friedman/Rosenman (A/B)", markWeight: "3/4 Marks",
    definition: "Personality clusters correlating with susceptibility to physical health ailments.",
    keyPoints: ["Type A: Competitive, impatient, hostile, time urgency → CHD risk", "Type B: Relaxed, patient, unhurried, easygoing", "Type C: Unassertive, compliant, suppresses emotions → cancer risk", "Type D: Negative affectivity, social inhibition → cardiac mortality"],
    example: "A person honking relentlessly at red lights exhibits classic Type A characteristics."
  },
  {
    id: "c3_05", chapter: 3, chapterName: "Meeting Life Challenges",
    topic: "Stress & Health", term: "Psychoneuroimmunology",
    theorist: "Various", markWeight: "2 Marks",
    definition: "Study of interaction between psychological processes, nervous system, and immune system.",
    keyPoints: ["Stress suppresses White Blood Cells (T & B cells)", "Prolonged stress weakens immune response", "Immune system has memory (antibodies)", "Psychological factors can make us susceptible to diseases"],
    example: "Students often fall sick during exam season due to stress-weakened immunity."
  },
  {
    id: "c3_06", chapter: 3, chapterName: "Meeting Life Challenges",
    topic: "Resilience", term: "Hardiness (3 Cs)",
    theorist: "Suzanne Kobasa", markWeight: "2 Marks",
    definition: "A personality style that buffers the negative effects of stress: Commitment, Control, and Challenge.",
    keyPoints: ["Commitment: Active involvement in activities", "Control: Belief you can influence events", "Challenge: Viewing change as opportunity for growth", "Hardy people convert threats into challenges"],
    example: "A hardy person facing job loss commits to finding solutions, believes they can succeed."
  },
  {
    id: "c3_07", chapter: 3, chapterName: "Meeting Life Challenges",
    topic: "Sources of Stress", term: "Types of Stress",
    theorist: "Lazarus & Folkman", markWeight: "2 Marks",
    definition: "Stress can be physical/environmental, psychological, or social in origin.",
    keyPoints: ["Physical: Noise, pollution, crowding, natural disasters", "Psychological: Frustration, conflict, internal pressures", "Social: Isolation, strained relationships, major life events", "Daily hassles vs Major life events"],
    example: "Exams = psychological stress; Moving to new city = social stress; Earthquake = physical stress."
  },
  {
    id: "c3_08", chapter: 3, chapterName: "Meeting Life Challenges",
    topic: "Burnout", term: "Occupational Burnout",
    theorist: "Herbert Freudenberger / Christina Maslach", markWeight: "3 Marks",
    definition: "A state of physical, emotional, and mental exhaustion caused by prolonged occupational stress, characterized by depersonalization and reduced personal accomplishment.",
    keyPoints: ["Emotional exhaustion: Feeling drained and depleted", "Depersonalization: Cynical, detached attitude toward work", "Reduced personal accomplishment: Feeling incompetent", "Common in helping professions (teachers, nurses)", "Maslach Burnout Inventory (MBI) is the standard assessment tool"],
    example: "A teacher who once loved teaching now feels dreads going to work and feels emotionally numb toward students."
  },
  {
    id: "c3_09", chapter: 3, chapterName: "Meeting Life Challenges",
    topic: "Coping Strategies", term: "Problem-Focused Coping",
    theorist: "Lazarus & Folkman", markWeight: "2/3 Marks",
    definition: "A coping strategy that involves directly addressing the source of stress through planning, information-seeking, and concrete action.",
    keyPoints: ["Involves taking direct action to modify the stressor", "Includes time management, seeking advice, problem-solving", "More effective when situation is controllable", "Reduces stress by changing the actual circumstances", "Associated with better outcomes in work and academic stressors"],
    example: "A student facing exam stress creates a structured study timetable and seeks help from teachers."
  },
  {
    id: "c3_10", chapter: 3, chapterName: "Meeting Life Challenges",
    topic: "Coping Strategies", term: "Emotion-Focused Coping",
    theorist: "Lazarus & Folkman", markWeight: "2/3 Marks",
    definition: "A coping strategy aimed at managing emotional distress rather than altering the stressful situation itself.",
    keyPoints: ["Includes ventilation, positive reappraisal, wishful thinking", "Useful when situation is uncontrollable (e.g., bereavement)", "Meditation and prayer are forms of emotion-focused coping", "Avoidance-based emotion-focused coping can be maladaptive", "Helps maintain emotional equilibrium during stress"],
    example: "A person grieving a loss practices deep breathing and reframes the experience as 'they lived a full life'."
  },
  {
    id: "c3_11", chapter: 3, chapterName: "Meeting Life Challenges",
    topic: "Stress Management", term: "Relaxation Techniques",
    theorist: "Various (Jacobson, Benson)", markWeight: "2 Marks",
    definition: "Systematic methods of reducing physiological arousal and psychological tension through controlled exercises.",
    keyPoints: ["Progressive Muscle Relaxation (PMR): Tensing and releasing muscle groups", "Deep breathing exercises activate parasympathetic nervous system", "Mindfulness meditation: Non-judgmental awareness of present moment", "Autogenic training: Self-suggestion for relaxation", "Regular practice reduces baseline stress levels"],
    example: "A student practices PMR before exams — tensing and releasing leg muscles to reduce anxiety."
  },
  {
    id: "c3_12", chapter: 3, chapterName: "Meeting Life Challenges",
    topic: "Social Support", term: "Social Support Systems",
    theorist: "Cobb & Cassel", markWeight: "2 Marks",
    definition: "Emotional, informational, and tangible assistance provided by family, friends, and community that buffers the effects of stress.",
    keyPoints: ["Emotional support: Empathy, love, trust", "Informational support: Advice, suggestions, guidance", "Instrumental/Tangible support: Financial aid, material resources", "Appraisal support: Constructive feedback for self-evaluation", "Strong social support is linked to better physical and mental health"],
    example: "A student coping with exam stress feels better after talking to friends who encourage and guide them."
  },

  // ===== CH 4: Psychological Disorders =====
  {
    id: "c4_01", chapter: 4, chapterName: "Psychological Disorders",
    topic: "Abnormality", term: "The 4 D's of Abnormality",
    theorist: "DSM-5 Clinical Criteria", markWeight: "2/3 Marks",
    definition: "Four indicators to determine whether thoughts/behaviors are abnormal.",
    keyPoints: ["Deviance: Behavior deviating from statistical/cultural norms", "Distress: Subjective unpleasantness or suffering", "Dysfunction: Significant interference with daily functioning", "Danger: Risk of harm to self or others"],
    example: "A student whose panic attacks prevent attending school shows Dysfunction and Distress."
  },
  {
    id: "c4_02", chapter: 4, chapterName: "Psychological Disorders",
    topic: "Etiology", term: "Diathesis-Stress Model",
    theorist: "Integrative Paradigm", markWeight: "3/4 Marks",
    definition: "Disorders develop from interaction of underlying predisposition (diathesis) triggered by environmental stress.",
    keyPoints: ["Diathesis: Biological/genetic or psychological predisposition", "Stress: Environmental hardships, trauma, interpersonal stressors", "Neither alone is sufficient; interaction manifests disorder", "Predisposition + Stress = Disorder"],
    example: "Genetic history of depression (diathesis) triggers episode after financial crisis (stress)."
  },
  {
    id: "c4_03", chapter: 4, chapterName: "Psychological Disorders",
    topic: "Anxiety Disorders", term: "Anxiety Disorder Spectrum",
    theorist: "DSM-5 Criteria", markWeight: "4 Marks",
    definition: "Persistent, excessive fear and anxiety with behavioral disturbances and physiological arousal.",
    keyPoints: ["GAD: Prolonged, vague, free-floating anxiety without specific trigger", "Panic Disorder: Recurrent intense fear surges peaking within minutes", "Phobias: Irrational fears of specific objects/situations", "Separation Anxiety: Excessive fear of separation from attachment figures"],
    example: "Sudden breathlessness, sweating, and dread during normal conversation marks a Panic Attack."
  },
  {
    id: "c4_04", chapter: 4, chapterName: "Psychological Disorders",
    topic: "Schizophrenia", term: "Positive vs Negative Symptoms",
    theorist: "Bleuler / DSM-5", markWeight: "4/6 Marks",
    definition: "Schizophrenia symptoms bifurcated into behavioral excesses (Positive) and deficits (Negative).",
    keyPoints: ["Positive (Excesses): Delusions, Hallucinations, Incoherent speech", "Delusions: Persecution, grandeur, reference, control", "Negative (Deficits): Alogia, Flat Affect, Avolition, Anhedonia", "Auditory hallucinations most common"],
    example: "Hearing voices when nobody speaks = Positive (hallucination); motionless staring = Negative (avolition)."
  },
  {
    id: "c4_05", chapter: 4, chapterName: "Psychological Disorders",
    topic: "Dissociative Disorders", term: "Somatic vs Dissociative Disorders",
    theorist: "DSM-5", markWeight: "3/4 Marks",
    definition: "Conditions with physical symptoms without medical explanation or sudden disruptions in identity/memory.",
    keyPoints: ["Conversion Disorder: Loss of motor/sensory function post-trauma without cause", "Illness Anxiety: Preoccupation with undiagnosed illness", "Dissociative Amnesia: Inability to recall personal info", "DID: Two or more distinct personality states"],
    example: "A soldier waking with paralyzed legs without nerve damage shows Conversion Disorder."
  },
  {
    id: "c4_06", chapter: 4, chapterName: "Psychological Disorders",
    topic: "Mood Disorders", term: "MDD & Bipolar Disorders",
    theorist: "DSM-5", markWeight: "3 Marks",
    definition: "MDD: Persistent depressed mood with anhedonia. Bipolar: Alternating episodes of mania and depression.",
    keyPoints: ["MDD: Depressed mood, anhedonia, guilt, sleep/appetite changes", "Bipolar I: At least one manic episode", "Bipolar II: Hypomanic episodes + depressive episodes", "Mania: Elevated mood, grandiosity, pressured speech, decreased sleep"],
    example: "A person oscillating between weeks of euphoric energy and deep hopelessness may have Bipolar I."
  },
  {
    id: "c4_07", chapter: 4, chapterName: "Psychological Disorders",
    topic: "OCD", term: "Obsessive-Compulsive Disorder",
    theorist: "DSM-5", markWeight: "3 Marks",
    definition: "Characterized by obsessions (intrusive thoughts) and compulsions (repetitive behaviors).",
    keyPoints: ["Obsessions: Recurrent, persistent, unwanted thoughts", "Compulsions: Repetitive behaviors or mental acts to reduce anxiety", "Ego-dystonic: Person recognizes thoughts are irrational", "Causes significant distress and functional impairment"],
    example: "Repeatedly checking if door is locked (compulsion) due to fear of burglary (obsession)."
  },
  {
    id: "c4_08", chapter: 4, chapterName: "Psychological Disorders",
    topic: "Mood Disorders", term: "Major Depressive Disorder (MDD)",
    theorist: "DSM-5", markWeight: "3/4 Marks",
    definition: "A mood disorder characterized by persistent depressed mood or loss of interest/pleasure (anhedonia) for at least two weeks, with significant functional impairment.",
    keyPoints: ["Core symptoms: Depressed mood and/or anhedonia for ≥2 weeks", "Associated symptoms: Weight changes, insomnia/hypersomnia, fatigue, guilt", "Cognitive symptoms: Difficulty concentrating, suicidal ideation", "Diagnosis requires ≥5 symptoms present during same 2-week period", "Causes significant distress in social, occupational, or other areas"],
    example: "A student who stops enjoying hobbies, sleeps excessively, and cannot concentrate for weeks may have MDD."
  },
  {
    id: "c4_09", chapter: 4, chapterName: "Psychological Disorders",
    topic: "Mood Disorders", term: "Bipolar Disorder — Detailed",
    theorist: "DSM-5", markWeight: "3/4 Marks",
    definition: "A disorder characterized by alternating episodes of mania (or hypomania) and depression, with periods of normal mood in between.",
    keyPoints: ["Bipolar I: At least one manic episode lasting ≥7 days", "Bipolar II: Hypomanic episodes + major depressive episodes", "Mania symptoms: Grandiosity, decreased need for sleep, pressured speech", "Cyclothymia: Chronic fluctuating mood with hypomanic and depressive symptoms", "Often first appears in late adolescence or early adulthood"],
    example: "A person spending recklessly, sleeping 2 hours, and giving grandiose speeches may be in a manic episode."
  },
  {
    id: "c4_10", chapter: 4, chapterName: "Psychological Disorders",
    topic: "Trauma Disorders", term: "Post-Traumatic Stress Disorder (PTSD)",
    theorist: "DSM-5", markWeight: "3 Marks",
    definition: "A disorder that develops following exposure to a traumatic event, involving persistent re-experiencing, avoidance, and hyperarousal.",
    keyPoints: ["Triggered by actual or threatened death, serious injury, or sexual violence", "Re-experiencing: Flashbacks, nightmares, intrusive memories", "Avoidance: Avoiding reminders of the trauma", "Hyperarousal: Exaggerated startle, irritability, sleep disturbances", "Symptoms persist for more than one month after the event"],
    example: "A disaster survivor who cannot enter buildings and has nightly nightmares may have PTSD."
  },
  {
    id: "c4_11", chapter: 4, chapterName: "Psychological Disorders",
    topic: "Somatoform Disorders", term: "Somatic Symptom Disorder",
    theorist: "DSM-5", markWeight: "3 Marks",
    definition: "A condition where excessive attention and concern about physical symptoms causes significant distress and functional impairment, even without medical explanation.",
    keyPoints: ["Excessive thoughts, feelings, or behaviors related to somatic symptoms", "Disproportionate response to actual or perceived symptoms", "Persistent symptoms typically last ≥6 months", "Individuals may seek excessive medical tests and consultations", "Previously called 'somatization disorder' or 'hypochondriasis'"],
    example: "A person with mild headaches who repeatedly visits doctors fearing a brain tumour may have Somatic Symptom Disorder."
  },
  {
    id: "c4_12", chapter: 4, chapterName: "Psychological Disorders",
    topic: "Feeding Disorders", term: "Eating Disorders",
    theorist: "DSM-5", markWeight: "3/4 Marks",
    definition: "Persistent disturbances in eating behavior and related thoughts that significantly impair physical health and psychosocial functioning.",
    keyPoints: ["Anorexia Nervosa: Severe restriction of intake, intense fear of gaining weight, distorted body image", "Binge-Eating Disorder: Recurrent binge episodes without compensatory behaviors", "Purging: Self-induced vomiting, laxative misuse to control weight", "Strongly linked to body dissatisfaction and societal pressure", "Highest mortality rate of any psychological disorder (Anorexia)"],
    example: "An adolescent girl skipping meals, exercising excessively, and seeing herself as 'fat' despite being underweight may have Anorexia Nervosa."
  },

  // ===== CH 5: Therapeutic Approaches =====
  {
    id: "c5_01", chapter: 5, chapterName: "Therapeutic Approaches",
    topic: "Behavior Therapy", term: "Systematic Desensitization",
    theorist: "Joseph Wolpe", markWeight: "3 Marks",
    definition: "An anxiety reduction technique pairing relaxation with gradual exposure to feared stimulus using reciprocal inhibition.",
    keyPoints: ["Reciprocal Inhibition: Can't be anxious and relaxed simultaneously", "Anxiety Hierarchy: Least to most feared situations", "Step-by-step gradual exposure with relaxation at each step", "Used for phobias and anxiety disorders"],
    example: "For fear of dogs: first look at pictures → watch from distance → approach friendly dog."
  },
  {
    id: "c5_02", chapter: 5, chapterName: "Therapeutic Approaches",
    topic: "Cognitive Therapy", term: "REBT — ABC Model",
    theorist: "Albert Ellis", markWeight: "3 Marks",
    definition: "Rational Emotive Behavior Therapy uses the ABC model to identify and dispute irrational beliefs.",
    keyPoints: ["A = Activating Event (trigger)", "B = Belief System (irrational/rational)", "C = Consequence (emotional/behavioral)", "Disputation of irrational beliefs → Effective Philosophy"],
    example: "Failed exam (A) → 'I'm worthless' (B) → depression (C). Dispute: 'One exam doesn't define me'."
  },
  {
    id: "c5_03", chapter: 5, chapterName: "Therapeutic Approaches",
    topic: "Cognitive Therapy", term: "Beck's Cognitive Therapy",
    theorist: "Aaron Beck", markWeight: "3 Marks",
    definition: "Focuses on identifying and modifying dysfunctional core schemas and cognitive distortions.",
    keyPoints: ["Dysfunctional Core Schemas: Deep negative self-beliefs", "Cognitive Distortions: Overgeneralization, black-and-white thinking", "Cognitive Triad: Negative view of Self, World, Future", "CBT integrates cognitive + behavioral approaches"],
    example: "A depressed person's schema 'I am unlovable' leads to overgeneralizing from one rejection."
  },
  {
    id: "c5_04", chapter: 5, chapterName: "Therapeutic Approaches",
    topic: "Humanistic Therapy", term: "Client-Centered Therapy",
    theorist: "Carl Rogers", markWeight: "3 Marks",
    definition: "Non-directive therapy emphasizing the client's self-healing capacity through therapeutic relationship.",
    keyPoints: ["Unconditional Positive Regard: Accept without judgment", "Accurate Empathy: Understanding client's feelings", "Congruence: Therapist genuineness and authenticity", "Therapeutic Alliance: Trust between therapist and client"],
    example: "Rogers believed the therapist's genuine warmth and acceptance naturally facilitate client growth."
  },
  {
    id: "c5_05", chapter: 5, chapterName: "Therapeutic Approaches",
    topic: "Alternative Therapies", term: "Alternative & Biological Therapies",
    theorist: "Various", markWeight: "2 Marks",
    definition: "Non-mainstream approaches and biological interventions for psychological disorders.",
    keyPoints: ["Yoga: Physical postures + breathing + meditation", "Pranayama: Controlled breathing techniques", "Biomedical: Electroconvulsive Therapy (ECT), Drug therapy", "Community rehabilitation for mentally ill"],
    example: "ECT is used for severe, treatment-resistant depression."
  },
  {
    id: "c5_06", chapter: 5, chapterName: "Therapeutic Approaches",
    topic: "Nature of Therapy", term: "Therapeutic Alliance",
    theorist: "Various", markWeight: "2 Marks",
    definition: "The trust and rapport between therapist and client, essential for effective therapy.",
    keyPoints: ["Voluntary relationship between client and therapist", "Based on trust, acceptance, and understanding", "Key elements: Empathy, Warmth, Genuineness", "Stronger alliance = better therapy outcomes"],
    example: "A client who feels understood and accepted by their therapist engages more deeply in therapy."
  },
  {
    id: "c5_07", chapter: 5, chapterName: "Therapeutic Approaches",
    topic: "Behavior Therapy", term: "Systematic Desensitization — Detailed",
    theorist: "Joseph Wolpe (1958)", markWeight: "3 Marks",
    definition: "A behavior therapy technique based on reciprocal inhibition, gradually exposing clients to anxiety-provoking stimuli while they maintain a relaxed state.",
    keyPoints: ["Step 1: Establish anxiety hierarchy (least to most feared)", "Step 2: Train client in progressive muscle relaxation", "Step 3: Pair each hierarchy step with relaxation", "Reciprocal inhibition: Relaxation and anxiety are incompatible", "Effective for specific phobias, test anxiety, public speaking fear"],
    example: "A student afraid of public speaking practices relaxation while imagining giving a speech, then gradually progresses to actual speaking."
  },
  {
    id: "c5_08", chapter: 5, chapterName: "Therapeutic Approaches",
    topic: "Behavior Therapy", term: "Token Economy",
    theorist: "Ayllon & Azrin / Skinnerian", markWeight: "3 Marks",
    definition: "A behavior modification system using tokens (secondary reinforcers) as rewards for desired behaviors, exchangeable for privileges or items.",
    keyPoints: ["Based on operant conditioning principles (Skinner)", "Target behaviors are clearly defined and observable", "Tokens serve as generalized secondary reinforcers", "Used in psychiatric hospitals, classrooms, rehabilitation centers", "Effective for shaping behavior in children with intellectual disabilities"],
    example: "In a classroom, students earn tokens for completing homework on time, exchangeable for extra recess time."
  },
  {
    id: "c5_09", chapter: 5, chapterName: "Therapeutic Approaches",
    topic: "Cognitive Therapy", term: "Cognitive Behaviour Therapy (CBT)",
    theorist: "Aaron Beck / Albert Ellis", markWeight: "3/4 Marks",
    definition: "An integrative therapy combining cognitive restructuring (changing maladaptive thoughts) with behavioral techniques (exposure, homework assignments).",
    keyPoints: ["Identifies and challenges automatic negative thoughts", "Uses thought records to track and reframe distortions", "Incorporates behavioral experiments and exposure tasks", "Structured, time-limited, and goal-oriented", "Most evidence-based therapy for depression and anxiety"],
    example: "A person with social anxiety identifies 'Everyone judges me' and tests it through a behavioral experiment at a social gathering."
  },
  {
    id: "c5_10", chapter: 5, chapterName: "Therapeutic Approaches",
    topic: "Cognitive Therapy", term: "REBT — Detailed",
    theorist: "Albert Ellis (1955)", markWeight: "3/4 Marks",
    definition: "Rational Emotive Behavior Therapy holds that emotional disturbances are caused by irrational beliefs, which can be identified and disputed.",
    keyPoints: ["Core irrational beliefs: Musts, Shoulds, Awfulizing", "DEBT technique: Disputing, Effective new philosophy, Behavioral homework", "Focuses on unconditional self-acceptance", "Distinguishes between healthy negative emotions (concern) and unhealthy (panic)", "Direct, confrontational, and humorous therapeutic style"],
    example: "A client who believes 'I must always be perfect' learns to replace it with 'I prefer to do well, but imperfection is acceptable'."
  },
  {
    id: "c5_11", chapter: 5, chapterName: "Therapeutic Approaches",
    topic: "Nature of Therapy", term: "Eclectic Therapy",
    theorist: "Various", markWeight: "2 Marks",
    definition: "An approach that integrates techniques from multiple therapeutic orientations rather than adhering strictly to one school of thought.",
    keyPoints: ["Draws from cognitive, behavioral, humanistic, and psychodynamic approaches", "Tailored to individual client needs and presenting problems", "Most commonly used approach in modern clinical practice", "Avoids limitations of rigid adherence to single school", "Requires therapist competence across multiple modalities"],
    example: "A therapist uses CBT techniques for a client's anxiety while employing humanistic rapport-building skills."
  },
  {
    id: "c5_12", chapter: 5, chapterName: "Therapeutic Approaches",
    topic: "Rehabilitation", term: "Community-Based Rehabilitation",
    theorist: "WHO / Various", markWeight: "2 Marks",
    definition: "A strategy for the rehabilitation, equalization of opportunities, and social inclusion of persons with disabilities within their community.",
    keyPoints: ["Focuses on integrating mentally ill into mainstream community", "Involves family, social workers, and community health workers", "Emphasizes dignity, autonomy, and participation", "Includes vocational training and skill development", "Aims to deinstitutionalize mental health care"],
    example: "A patient recovering from schizophrenia participates in a community program learning vocational skills and social interaction."
  },

  // ===== CH 6: Attitude and Social Cognition =====
  {
    id: "c6_01", chapter: 6, chapterName: "Attitude and Social Cognition",
    topic: "Nature of Attitudes", term: "ABC Components of Attitude",
    theorist: "Standard Model", markWeight: "2/3 Marks",
    definition: "Attitudes have three components: Affective (feeling), Behavioral (action), Cognitive (belief).",
    keyPoints: ["Affective: Emotional evaluation or feeling toward object", "Behavioral: Tendency or action readiness", "Cognitive: Beliefs, ideas, knowledge about object", "ABC model shows attitudes are multi-dimensional"],
    example: "Attitude toward Environment: Affective (feel concerned), Behavioral (reduce plastic), Cognitive (aware of pollution)."
  },
  {
    id: "c6_02", chapter: 6, chapterName: "Attitude and Social Cognition",
    topic: "Attitude Change", term: "Balance Theory",
    theorist: "Fritz Heider", markWeight: "3 Marks",
    definition: "P-O-X model: People seek consistency in attitudes between person, other person, and object.",
    keyPoints: ["P-O-X Triangle: Person, Other person, Object/Issue", "Balance when product of 3 signs is positive (+)", "Imbalance creates tension → attitude change to restore balance", "Based on cognitive consistency principle"],
    example: "P likes O, O likes X, but P dislikes X → imbalance → P changes attitude toward X."
  },
  {
    id: "c6_03", chapter: 6, chapterName: "Attitude and Social Cognition",
    topic: "Attitude Change", term: "Cognitive Dissonance Theory",
    theorist: "Leon Festinger", markWeight: "3 Marks",
    definition: "Tension from conflicting cognitions motivates individuals to restore consonance.",
    keyPoints: ["Conflicting cognitions create psychological discomfort", "Motivation to reduce dissonance by changing attitude/behavior", "More important the attitude, greater the dissonance", "Used to explain attitude change after contradictory behavior"],
    example: "A smoker who knows smoking is harmful experiences dissonance — may quit or minimize risks."
  },
  {
    id: "c6_04", chapter: 6, chapterName: "Attitude and Social Cognition",
    topic: "Prejudice", term: "Stereotypes vs Prejudice vs Discrimination",
    theorist: "Social Psychology", markWeight: "3 Marks",
    definition: "Stereotypes are cognitive generalizations; Prejudice is negative affective attitude; Discrimination is unequal behavior.",
    keyPoints: ["Stereotype: Cognitive overgeneralization about a group", "Prejudice: Negative emotional attitude toward a group", "Discrimination: Behavioral expression — unequal treatment", "Prejudice reduction: Superordinate goals & intergroup contact"],
    example: "Assuming all elderly are tech-illiterate = Stereotype; disliking them = Prejudice; refusing to hire = Discrimination."
  },
  {
    id: "c6_05", chapter: 6, chapterName: "Attitude and Social Cognition",
    topic: "Social Cognition", term: "Attribution Theory & FAE",
    theorist: "Bernard Weiner", markWeight: "3 Marks",
    definition: "Theory explaining how people attribute causes to behavior: internal (dispositional) vs external (situational).",
    keyPoints: ["Internal Attribution: Blaming personality/disposition", "External Attribution: Blaming situation/circumstances", "Fundamental Attribution Error: Overemphasizing internal for others' failures", "Actor-Observer Effect: Attributing own failures to situation"],
    example: "Seeing someone trip and thinking 'they're clumsy' (internal) vs 'the road is slippery' (external)."
  },
  {
    id: "c6_06", chapter: 6, chapterName: "Attitude and Social Cognition",
    topic: "Social Cognition", term: "Impression Formation",
    theorist: "Solomon Asch", markWeight: "2 Marks",
    definition: "The process by which we form impressions about others based on limited information.",
    keyPoints: ["Primacy Effect: First impressions are strongest", "Recency Effect: Latest information has more weight", "Halo Effect: Positive trait → assumes all traits positive", "Central traits have more impact than peripheral traits"],
    example: "Meeting someone well-dressed and assuming they're also intelligent = Halo Effect."
  },
  {
    id: "c6_07", chapter: 6, chapterName: "Attitude and Social Cognition",
    topic: "Cognitive Processes", term: "Cognitive Dissonance — Detailed",
    theorist: "Leon Festinger (1957)", markWeight: "3/4 Marks",
    definition: "When an individual holds two or more contradictory cognitions (beliefs, attitudes, or behaviors), they experience psychological discomfort that motivates them to reduce the inconsistency.",
    keyPoints: ["Dissonance is strongest when behavior contradicts deeply held beliefs", "Methods to reduce: Change behavior, change attitude, add new cognitions", "Forced compliance paradigm: Counter-attitudinal behavior under low justification", "Greater freedom of choice increases felt dissonance", "Classic study: Participants paid $1 to lie enjoyed boring task more than those paid $20"],
    example: "A student who hates studying but does it anyway adds the cognition 'studying is necessary for my goals' to reduce dissonance."
  },
  {
    id: "c6_08", chapter: 6, chapterName: "Attitude and Social Cognition",
    topic: "Attitude-Behaviour", term: "Attitude-Behaviour Relationship",
    theorist: "LaPiere / Fishbein & Ajzen", markWeight: "2/3 Marks",
    definition: "The relationship between attitudes and actual behavior is moderated by situational factors, attitude strength, and specificity.",
    keyPoints: ["LaPiere's study: Attitudes do not always predict behavior", "Theory of Reasoned Action (Fishbein & Ajzen): Intention predicts behavior", "Attitude specificity: General attitudes poorly predict specific behaviors", "Strong, accessible attitudes are better behavioral predictors", "Subjective norms and perceived control also influence behavior"],
    example: "A person who values environment (attitude) but doesn't recycle (behavior) shows attitude-behaviour inconsistency."
  },
  {
    id: "c6_09", chapter: 6, chapterName: "Attitude and Social Cognition",
    topic: "Prejudice", term: "Prejudice — Formation and Reduction",
    theorist: "Allport / Sherif", markWeight: "3 Marks",
    definition: "Prejudice is a preconceived negative attitude toward members of a group, often based on stereotypes and leading to discriminatory behavior.",
    keyPoints: ["Roots: Ethnocentrism, realistic conflict theory, social learning", "In-group bias: Favouring one's own group over out-groups", "Sherif's Robbers Cave: Superordinate goals reduce intergroup conflict", "Contact hypothesis: Intergroup contact under equal conditions reduces prejudice", "Individuation: Getting to know individuals breaks stereotypes"],
    example: "Students from rival schools develop prejudice until forced to cooperate on a joint community project (superordinate goal)."
  },
  {
    id: "c6_10", chapter: 6, chapterName: "Attitude and Social Cognition",
    topic: "Social Cognition", term: "Scapegoating",
    theorist: "Allport / Dollard", markWeight: "2 Marks",
    definition: "The process of directing blame and aggression toward a less powerful out-group to displace frustration from the actual source.",
    keyPoints: ["Displaced aggression toward a convenient, less powerful group", "Occurs during economic hardship, frustration, or threat", "Scapegoat group is typically visible and cannot retaliate", "Reinforces prejudice and intergroup hostility", "Historical examples: Jews in Nazi Germany, immigrants during recessions"],
    example: "During an economic downturn, immigrants are blamed for job losses despite having no causal role."
  },
  {
    id: "c6_11", chapter: 6, chapterName: "Attitude and Social Cognition",
    topic: "Social Cognition", term: "Discrimination",
    theorist: "Social Psychology", markWeight: "2 Marks",
    definition: "Unjustified negative or harmful behavior directed toward members of a group based solely on their group membership.",
    keyPoints: ["Behavioral component of prejudice — unequal treatment in practice", "Can be individual (personal) or institutional (systemic)", "Institutional discrimination: Policies that systematically disadvantage groups", "Types: Direct (overt), Indirect (structural), Microaggressions", "Legislation (e.g., Civil Rights Act) aims to reduce discrimination"],
    example: "A qualified candidate is rejected because of their gender or ethnicity, not their qualifications."
  },
  {
    id: "c6_12", chapter: 6, chapterName: "Attitude and Social Cognition",
    topic: "Social Cognition", term: "Self-Fulfilling Prophecy",
    theorist: "Robert Merton / Rosenthal & Jacobson", markWeight: "2/3 Marks",
    definition: "A false belief or expectation that causes itself to become true through its influence on behavior.",
    keyPoints: ["Initially false belief leads to behavior that makes it come true", "Rosenthal & Jacobson: Teacher expectations affect student performance (Pygmalion Effect)", "Self-defeating prophecy: Negative expectations lead to negative outcomes", "Operates through confirmation bias and selective attention", "Relevant in education, workplace, and healthcare settings"],
    example: "A teacher told certain students are 'bloomers' unconsciously gives them more attention, and they actually improve (Pygmalion Effect)."
  },

  // ===== CH 7: Social Influence and Group Processes =====
  {
    id: "c7_01", chapter: 7, chapterName: "Social Influence and Group Processes",
    topic: "Groups", term: "Types of Groups",
    theorist: "Social Psychology", markWeight: "2 Marks",
    definition: "Two or more individuals interacting, sharing norms and goals.",
    keyPoints: ["Primary vs Secondary groups", "Formal vs Informal groups", "In-Group vs Out-Group", "Why join: Security, Status, Self-esteem, Goal achievement"],
    example: "Family is a primary informal group; workplace team is a formal secondary group."
  },
  {
    id: "c7_02", chapter: 7, chapterName: "Social Influence and Group Processes",
    topic: "Social Influence", term: "Conformity (Asch's Line Study)",
    theorist: "Solomon Asch", markWeight: "3/4 Marks",
    definition: "Adjusting behavior to align with group norms, even when obviously wrong.",
    keyPoints: ["Asch used confederates giving obviously wrong answers", "Conformity influenced by: group size, unanimity", "Higher task ambiguity → higher conformity", "Individual self-esteem affects conformity rate"],
    example: "When everyone in a group says a straight line is longer, you agree even though you can see it isn't."
  },
  {
    id: "c7_03", chapter: 7, chapterName: "Social Influence and Group Processes",
    topic: "Social Influence", term: "Obedience (Milgram's Study)",
    theorist: "Stanley Milgram", markWeight: "4 Marks",
    definition: "Compliance with direct orders from an authority figure, even when harmful.",
    keyPoints: ["65% administered maximum 450V shock", "Authority legitimacy is key determinant", "Physical proximity of authority increases obedience", "Defiant models reduce obedience"],
    example: "Ordinary people obeyed experimenter's orders to shock a learner because authority figure insisted."
  },
  {
    id: "c7_04", chapter: 7, chapterName: "Social Influence and Group Processes",
    topic: "Group Behavior", term: "Social Loafing",
    theorist: "Max Ringelmann", markWeight: "2 Marks",
    definition: "Individuals exert less effort when working in a group than when working alone.",
    keyPoints: ["Rope-pulling experiment: Individual force decreased in groups", "Diffusion of responsibility", "Lack of individual evaluation", "Reduced when task is meaningful and identifiable"],
    example: "A student contributes less to a group project thinking others will cover."
  },
  {
    id: "c7_05", chapter: 7, chapterName: "Social Influence and Group Processes",
    topic: "Group Behavior", term: "Groupthink",
    theorist: "Irving Janis", markWeight: "2 Marks",
    definition: "Illusion of invulnerability leading to excessive optimism and suppression of dissent.",
    keyPoints: ["Illusion of invulnerability and unanimity", "Suppressed dissent and self-censorship", "Mindguards: Members who protect group from dissenting info", "Seen in high-cohesion groups making poor decisions"],
    example: "A committee unanimously approves a flawed plan because no one wants to challenge consensus."
  },
  {
    id: "c7_06", chapter: 7, chapterName: "Social Influence and Group Processes",
    topic: "Group Development", term: "Tuckman's 5 Stages",
    theorist: "Bruce Tuckman", markWeight: "2 Marks",
    definition: "Groups develop through five sequential stages of development.",
    keyPoints: ["Forming: Orientation and testing", "Storming: Intergroup conflict and struggle", "Norming: Developing cohesion and consensus", "Performing: Task execution and cooperation", "Adjourning: Termination and wrap-up"],
    example: "A new project team goes through getting-to-know-you conflicts before becoming effective."
  },
  {
    id: "c7_07", chapter: 7, chapterName: "Social Influence and Group Processes",
    topic: "Group Behavior", term: "Social Facilitation & Inhibition",
    theorist: "Triplett / Zajonc", markWeight: "2 Marks",
    definition: "Presence of others enhances (facilitation) or impairs (inhibition) performance depending on task complexity.",
    keyPoints: ["Triplett (1898): First social psychology experiment — bicycle racing", "Zajonc: Arousal theory — others' presence increases arousal", "Simple/well-learned tasks → Facilitation", "Complex/new tasks → Inhibition"],
    example: "A runner runs faster in a race (facilitation) but performs worse on a complex math problem with audience (inhibition)."
  },
  {
    id: "c7_08", chapter: 7, chapterName: "Social Influence and Group Processes",
    topic: "Group Behavior", term: "Social Facilitation — Detailed",
    theorist: "Robert Zajonc (1965)", markWeight: "2/3 Marks",
    definition: "The tendency for people to perform differently when in the presence of others than when alone, explained by the drive/arousal theory.",
    keyPoints: ["Mere presence of others increases physiological arousal", "Arousal strengthens the dominant (most likely) response", "Well-learned dominant responses → improved performance (facilitation)", "Novel/complex dominant responses → worsened performance (inhibition)", "Evaluated apprehension: Fear of being judged increases the effect"],
    example: "An experienced chef cooks better with an audience (facilitation) while a novice cook makes more mistakes (inhibition)."
  },
  {
    id: "c7_09", chapter: 7, chapterName: "Social Influence and Group Processes",
    topic: "Group Behavior", term: "Social Loafing — Detailed",
    theorist: "Latané, Williams & Harkins (1979)", markWeight: "2/3 Marks",
    definition: "The phenomenon where individuals reduce their effort when working collectively compared to when they work alone, due to diffusion of responsibility.",
    keyPoints: ["Increases with group size — larger groups → more loafing", "Reduced when individual contributions are identifiable", "Cultural difference: More loafing in individualistic cultures", "Task involvement and meaningfulness reduce loafing", "Gender differences: Men tend to loaf more than women in mixed groups"],
    example: "In a tug-of-war, each team member pulls with less force as the team gets larger."
  },
  {
    id: "c7_10", chapter: 7, chapterName: "Social Influence and Group Processes",
    topic: "Group Behavior", term: "Groupthink — Detailed",
    theorist: "Irving Janis (1972)", markWeight: "3 Marks",
    definition: "A mode of thinking in cohesive groups where the desire for harmony overrides realistic appraisal of alternatives, leading to poor decisions.",
    keyPoints: ["Symptoms: Illusion of invulnerability, collective rationalization, belief in morality", "Self-censorship and pressure on dissenters", "Mindguards protect the group from contradictory information", "Highly cohesive groups with poor decision-making procedures are vulnerable", "Historical examples: Bay of Pigs, Watergate, Challenger disaster"],
    example: "NASA engineers who raised concerns about O-rings were pressured to conform before the Challenger disaster."
  },
  {
    id: "c7_11", chapter: 7, chapterName: "Social Influence and Group Processes",
    topic: "Social Influence", term: "Obedience — Variations",
    theorist: "Stanley Milgram", markWeight: "3/4 Marks",
    definition: "Milgram's variations showed that obedience rates change based on proximity of authority, victim, and presence of dissenting models.",
    keyPoints: ["Remote authority (phone instructions): Obedience dropped to 20.5%", "Proximity of learner (same room): Obedience dropped to 40%", "No physical contact ( learner in隔壁 room): 65% obeyed", "Two defiant confederates: Only 10% obeyed", "Female participants showed same obedience rates as males"],
    example: "When the 'learner' was in the same room as the participant, fewer people continued shocking them."
  },
  {
    id: "c7_12", chapter: 7, chapterName: "Social Influence and Group Processes",
    topic: "Social Influence", term: "Conformity — Types and Determinants",
    theorist: "Kelman / Deutsch & Gerard", markWeight: "3 Marks",
    definition: "Conformity occurs through compliance (public agreement), identification (adopting behavior of liked group), or internalization (true acceptance of group norms).",
    keyPoints: ["Compliance: Public conformity without private belief change", "Identification: Adopting behavior to maintain relationship with group", "Internalization: Genuine acceptance of group norms and values", "Larger group size increases conformity (up to ~7 people)", "Unanimity is more powerful than size in causing conformity", "Higher self-esteem reduces conformity tendency"],
    example: "A student wears traditional clothes on a festival (compliance), joins a sports team they admire (identification), and adopts environmental values from family (internalization)."
  },
];
