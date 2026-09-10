export interface Distinction {
  id: string;
  title: string;
  chapter: number;
  rows: { label: string; col1: string; col2: string }[];
}

export const distinctions: Distinction[] = [
  {
    id: "d1", title: "Psychometric vs Information Processing Approaches", chapter: 1,
    rows: [
      { label: "Focus", col1: "Measuring intelligence through test scores", col2: "Understanding how intelligence works cognitively" },
      { label: "Key Theorists", col1: "Spearman, Thurstone, Guilford, Cattell", col2: "Sternberg, Das-Naglieri, Gardner" },
      { label: "Nature", col1: "Quantitative — IQ scores, g factor, PMAs", col2: "Qualitative — processing strategies, components" },
      { label: "Example", col1: "IQ = (MA/CA) × 100", col2: "PASS Theory: Planning, Arousal, Simultaneous, Successive" },
    ]
  },
  {
    id: "d2", title: "Type vs Trait Approaches to Personality", chapter: 2,
    rows: [
      { label: "Core Idea", col1: "People fall into distinct categories/types", col2: "Personality is described on continuous trait dimensions" },
      { label: "Classification", col1: "Either/or — you are Type A or Type B", col2: "Spectrum — everyone scores at different levels on each trait" },
      { label: "Key Theorists", col1: "Hippocrates, Sheldon, Jung, Friedman", col2: "Allport, Cattell, Eysenck, Costa & McCrae" },
      { label: "Flexibility", col1: "Rigid categories; hard to shift types", col2: "Flexible; traits can change over time/therapy" },
    ]
  },
  {
    id: "d3", title: "Self-Efficacy vs Self-Regulation", chapter: 2,
    rows: [
      { label: "Definition", col1: "Belief in one's own ability to succeed", col2: "Controlling one's own behavior to reach goals" },
      { label: "Nature", col1: "Cognitive — a belief/expectation", col2: "Behavioral — an active process" },
      { label: "Key Elements", col1: "Mastery experiences, Vicarious experiences", col2: "Self-observation, Judgment, Self-reaction" },
      { label: "Theorist", col1: "Albert Bandura", col2: "Albert Bandura" },
    ]
  },
  {
    id: "d4", title: "Eustress vs Distress", chapter: 3,
    rows: [
      { label: "Nature", col1: "Positive, beneficial stress", col2: "Negative, harmful stress" },
      { label: "Effect on Performance", col1: "Enhances motivation and performance", col2: "Impairs performance, causes wear and tear" },
      { label: "Duration", col1: "Usually short-term", col2: "Can be chronic/long-term" },
      { label: "Example", col1: "Excitement before a sports competition", col2: "Chronic work pressure leading to burnout" },
    ]
  },
  {
    id: "d5", title: "Problem-Focused vs Emotion-Focused Coping", chapter: 3,
    rows: [
      { label: "Target", col1: "The stressor/problem itself", col2: "Emotional distress caused by stressor" },
      { label: "Strategy", col1: "Direct action, planning, information-seeking", col2: "Ventilation, distraction, denial, reinterpretation" },
      { label: "Best When", col1: "Stressor is controllable", col2: "Stressor is uncontrollable" },
      { label: "Example", col1: "Creating a revision timetable", col2: "Deep breathing exercises to calm down" },
    ]
  },
  {
    id: "d6", title: "Delusions vs Hallucinations", chapter: 4,
    rows: [
      { label: "Definition", col1: "False unshakable beliefs", col2: "False sensory perceptions without external stimulus" },
      { label: "Modality", col1: "Cognitive — thought content", col2: "Perceptual — hearing, seeing, feeling things" },
      { label: "Types", col1: "Persecution, Grandeur, Reference, Control", col2: "Auditory (most common), Visual, Tactile, Olfactory" },
      { label: "Example", col1: "'People are plotting against me'", col2: "Hearing voices when nobody is speaking" },
    ]
  },
  {
    id: "d7", title: "MDD vs Bipolar Disorder", chapter: 4,
    rows: [
      { label: "Mood Pattern", col1: "Persistent depressed mood only", col2: "Alternating mania and depression episodes" },
      { label: "Mania", col1: "Absent", col2: "Present — elevated mood, grandiosity, pressured speech" },
      { label: "Subtypes", col1: "Single episode or recurrent", col2: "Bipolar I (full mania), Bipolar II (hypomania)" },
      { label: "Functioning", col1: "Consistently impaired during episodes", col2: "May function very well during manic phases" },
    ]
  },
  {
    id: "d8", title: "Positive vs Negative Symptoms of Schizophrenia", chapter: 4,
    rows: [
      { label: "Nature", col1: "Behavioral excesses — added experiences", col2: "Behavioral deficits — absent experiences" },
      { label: "Key Symptoms", col1: "Delusions, Hallucinations, Disorganized speech", col2: "Alogia, Flat Affect, Avolition, Anhedonia" },
      { label: "Response to Treatment", col1: "Generally respond better to antipsychotics", col2: "Resistant to standard medication" },
      { label: "Example", col1: "Hearing voices, paranoid beliefs", col2: "Sitting motionless, unable to initiate action" },
    ]
  },
  {
    id: "d9", title: "Balance Theory vs Cognitive Dissonance", chapter: 6,
    rows: [
      { label: "Theorist", col1: "Fritz Heider", col2: "Leon Festinger" },
      { label: "Model", col1: "P-O-X Triangle (three elements)", col2: "Any two conflicting cognitions" },
      { label: "Trigger", col1: "Imbalanced triad of attitudes", col2: "Conflicting beliefs/behaviors" },
      { label: "Resolution", col1: "Change one attitude to restore positive product", col2: "Change attitude, behavior, or add new cognition" },
    ]
  },
  {
    id: "d10", title: "Stereotypes vs Prejudice vs Discrimination", chapter: 6,
    rows: [
      { label: "Component", col1: "Cognitive (ABC = C)", col2: "Affective (ABC = A)" },
      { label: "Nature", col1: "Overgeneralized beliefs about a group", col2: "Negative emotional attitude toward a group" },
      { label: "Behavior", col1: "May not lead to action", col2: "Leads to discriminatory behavior" },
      { label: "Example", col1: "'All teens are lazy' (belief)", col2: "Disliking teenagers because of that belief" },
    ]
  },
];
