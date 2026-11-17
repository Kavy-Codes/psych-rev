import type { OnePagerNote } from './types';
import { chapterNotes, glossary } from '../psych/glossary';
import { socioRevisionNotes } from '../socio/revisionNotes';
import { hindiRevisionNotes } from '../hindi/revisionNotes';

const PSYCH_SUMMARIES: Record<number, string> = {
  1: 'Individual differences are the variations in psychological attributes such as intelligence, aptitude, creativity, and personality. Psychologists study these differences through intelligence theories (Spearman, Gardner, Sternberg, PASS), assessment methods (IQ tests, aptitude tests, rating scales), and cultural perspectives. The chapter also explains creativity, emotional intelligence, and the Indian concept of "buddhi" as integral intelligence.',
  2: 'The self is the totality of one\'s experiences, and personality is the dynamic organisation of psychophysical systems that shapes behaviour. The chapter covers Freud\'s psychoanalytic theory (Id, Ego, Superego, defence mechanisms), trait theories (Allport, Cattell, Eysenck, Big Five), humanistic theories (Rogers, Maslow), and methods of personality assessment such as interviews, projective tests, and self-report inventories.',
  3: 'Stress is a pattern of responses to events that disturb equilibrium. Lazarus explains stress through primary and secondary appraisal, while Selye describes the General Adaptation Syndrome (alarm, resistance, exhaustion). The chapter discusses sources of stress, coping strategies (problem-focused and emotion-focused), personality types (A, B, C, D), hardiness, and the effects of stress on health and the immune system.',
  4: 'Psychological disorders are patterns of behaviour that cause distress or impairment. The chapter explains the 4 Ds (deviance, distress, dysfunction, danger), the diathesis-stress model, and classifications such as anxiety disorders, obsessive-compulsive disorder, mood disorders, schizophrenia, and eating disorders. It also discusses the importance of diagnosis and the stigma surrounding mental illness.',
  5: 'Psychotherapy is the systematic application of psychological principles to help people overcome problems. The chapter covers psychoanalytic therapy, behaviour therapy (systematic desensitisation, aversive conditioning, token economy), cognitive therapy (Ellis, Beck), humanistic-existential therapy, and biomedical therapy. It also discusses the therapeutic alliance, ethics, and the effectiveness of different approaches.',
  6: 'Attitudes are evaluative reactions toward objects, people, or events. The chapter explains how attitudes are formed and changed through persuasion, cognitive consistency, and social influence. It also covers social cognition, attribution, stereotypes, prejudice, discrimination, and strategies for reducing prejudice. The focus is on how we perceive, interpret, and respond to the social world.',
  7: 'Social influence refers to the ways in which groups affect individual behaviour. The chapter discusses conformity (Asch), obedience (Milgram), compliance, group processes, social loafing, groupthink, cooperation, competition, and intergroup conflict. It also explains social identity theory and the factors that promote harmony and cooperation among groups.',
};

const PSYCH_EXAM_QUESTIONS: Record<number, { question: string; answer: string }[]> = {
  1: [
    { question: 'Explain Gardner\'s theory of multiple intelligences.', answer: 'Gardner proposed that intelligence is not a single general ability but a set of relatively independent intelligences: linguistic, logical-mathematical, spatial, musical, bodily-kinaesthetic, interpersonal, intrapersonal, and naturalistic. Each intelligence enables a person to solve problems or create products valued in a culture. The theory broadens the concept of intelligence and supports the idea that different people can be intelligent in different ways.' },
    { question: 'What is emotional intelligence? Why is it important?', answer: 'Emotional intelligence is the ability to perceive, understand, manage, and use emotions effectively in oneself and others. It helps people build relationships, handle stress, resolve conflicts, and make balanced decisions. It is important because academic intelligence alone does not guarantee success or well-being; emotional skills are crucial for personal and social adjustment.' },
  ],
  2: [
    { question: 'Explain Freud\'s structure of personality.', answer: 'Freud divided personality into the Id, Ego, and Superego. The Id operates on the pleasure principle and seeks immediate gratification. The Ego operates on the reality principle and mediates between the Id, Superego, and external world. The Superego represents moral standards and ideals. Their dynamic interaction shapes behaviour, and conflicts among them produce anxiety, which the Ego manages through defence mechanisms.' },
    { question: 'Describe the Big Five personality factors.', answer: 'The Big Five model (OCEAN) includes Openness to experience, Conscientiousness, Extraversion, Agreeableness, and Neuroticism. Openness reflects curiosity and imagination; Conscientiousness reflects discipline and responsibility; Extraversion reflects sociability and energy; Agreeableness reflects cooperation and trust; Neuroticism reflects emotional instability and anxiety. These five dimensions are used to describe personality across cultures.' },
  ],
  3: [
    { question: 'Explain Selye\'s General Adaptation Syndrome.', answer: 'Selye described three stages of the body\'s response to stress: alarm, resistance, and exhaustion. In the alarm stage, the body mobilises resources to meet the stressor. In resistance, the body tries to cope with the stressor and maintain equilibrium. If the stress continues, the body enters exhaustion, when resources are depleted and illness or collapse may occur. The model shows that prolonged stress harms health.' },
    { question: 'Differentiate between problem-focused and emotion-focused coping.', answer: 'Problem-focused coping involves taking action to change or solve the stressful situation, such as planning or seeking information. It is most useful when the stressor is controllable. Emotion-focused coping involves managing the emotional response to stress, such as relaxation or reappraisal. It is useful when the stressor cannot be changed. Effective coping often combines both strategies.' },
  ],
  4: [
    { question: 'What are the 4 Ds of psychological disorders?', answer: 'The 4 Ds are deviance, distress, dysfunction, and danger. Deviance refers to behaviour that differs from social norms. Distress refers to subjective suffering. Dysfunction refers to impairment in daily functioning. Danger refers to risk of harm to self or others. These criteria help distinguish psychological disorders from ordinary variations in behaviour, though no single criterion is sufficient.' },
    { question: 'Explain the diathesis-stress model.', answer: 'The diathesis-stress model proposes that psychological disorders develop when a person has a predisposition (diathesis) and experiences stressful life events. The predisposition may be biological, psychological, or social. Stress activates the vulnerability, leading to disorder. The model explains why some people develop disorders under stress while others do not, and it integrates nature and nurture.' },
  ],
  5: [
    { question: 'Describe systematic desensitisation.', answer: 'Systematic desensitisation is a behaviour therapy technique used to treat phobias. The client is taught relaxation techniques and then gradually exposed to a hierarchy of anxiety-provoking situations, from least to most frightening. Relaxation is paired with each step so that anxiety is replaced by calmness. This is based on the principle of reciprocal inhibition: two opposing responses cannot occur at the same time.' },
    { question: 'What is cognitive therapy? Who developed it?', answer: 'Cognitive therapy focuses on changing irrational or distorted thoughts that cause emotional distress. Aaron Beck developed cognitive therapy for depression, identifying the cognitive triad: negative views of the self, the world, and the future. Albert Ellis developed rational emotive behaviour therapy, which challenges irrational beliefs. Both approaches help clients replace distorted thinking with more realistic thoughts.' },
  ],
  6: [
    { question: 'How are attitudes formed and changed?', answer: 'Attitudes are formed through direct experience, social learning, conditioning, and exposure to information. They can change through persuasive communication, cognitive dissonance, and social influence. The source, message, and audience affect persuasion. Attitudes that are strong, central, and personally relevant are harder to change. Cognitive consistency theories explain that people seek harmony among their beliefs and behaviours.' },
    { question: 'Differentiate between prejudice and discrimination.', answer: 'Prejudice is a negative attitude toward members of a group, based on stereotypes and emotional reactions. Discrimination is the behavioural expression of prejudice, involving unequal treatment of individuals because of their group membership. Prejudice is attitudinal, while discrimination is behavioural. Both can be reduced through education, intergroup contact, and awareness of bias.' },
  ],
  7: [
    { question: 'Explain conformity and obedience with examples.', answer: 'Conformity is changing one\'s behaviour or beliefs to match group norms, often because of real or imagined group pressure. Asch\'s experiments showed that people conform to incorrect group judgments. Obedience is complying with direct orders from an authority figure, as in Milgram\'s study where participants administered apparently painful shocks because an authority instructed them. Conformity involves group influence; obedience involves authority.' },
    { question: 'What is groupthink? How can it be prevented?', answer: 'Groupthink is a mode of thinking in highly cohesive groups in which the desire for harmony suppresses dissent and critical evaluation, leading to poor decisions. It can be prevented by encouraging open discussion, appointing a devil\'s advocate, inviting outside opinions, and allowing anonymous feedback. Leaders should remain impartial and encourage members to question assumptions.' },
  ],
};

const PSYCH_TIPS: Record<number, string[]> = {
  1: ['Remember theorist-theory pairs: Spearman (g & s), Gardner (8 intelligences), Sternberg (triarchic), Das (PASS).', 'IQ formula: IQ = (Mental Age / Chronological Age) × 100.', 'Use the Indian concept of buddhi for a high-scoring cultural perspective.'],
  2: ['Freud: Id = pleasure, Ego = reality, Superego = morality.', 'Big Five = OCEAN; learn one example trait for each.', 'Know the difference between projective and self-report tests.'],
  3: ['Selye\'s GAS = Alarm → Resistance → Exhaustion.', 'Lazarus: primary appraisal (what is at stake) and secondary appraisal (coping resources).', 'Type A → heart disease; Type C → cancer; hardiness = commitment, control, challenge.'],
  4: ['Use the 4 Ds to define abnormality.', 'Diathesis + stress = disorder; this is a favourite 4/6-marker.', 'Learn one symptom cluster each for anxiety, mood, and schizophrenia.'],
  5: ['Match therapy to theorist: Freud (psychoanalysis), Rogers (client-centred), Ellis (REBT), Beck (cognitive), Wolpe (systematic desensitisation).', 'Reciprocal inhibition explains why relaxation and anxiety cannot coexist.', 'Biomedical therapy treats symptoms; psychotherapy addresses underlying patterns.'],
  6: ['Attitude has cognitive, affective, and behavioural components.', 'Stereotype = belief; prejudice = attitude; discrimination = behaviour.', 'Use attribution errors (fundamental attribution error, self-serving bias) in examples.'],
  7: ['Asch = conformity; Milgram = obedience; Zimbardo = role of situation.', 'Social loafing = less effort in groups; groupthink = poor decisions due to conformity.', 'Social identity theory: in-group favouritism and out-group bias.'],
};

export const psychOnePagers: OnePagerNote[] = chapterNotes.map((note) => ({
  id: `psych-${note.chapter}`,
  subject: 'psych' as const,
  book: 'Psychology',
  section: 'NCERT',
  chapter: note.chapter,
  chapterLabel: `Ch ${note.chapter}`,
  title: note.title,
  marks: note.marks,
  summary: PSYCH_SUMMARIES[note.chapter] || note.keyPoints.slice(0, 3).join(' '),
  keyPoints: note.keyPoints,
  keyTerms: glossary
    .filter((term) => term.chapter === note.chapter)
    .map((term) => ({ term: term.term, definition: term.definition })),
  examQuestions: PSYCH_EXAM_QUESTIONS[note.chapter] || [],
  examTips: PSYCH_TIPS[note.chapter] || [],
}));

export const socioOnePagers: OnePagerNote[] = socioRevisionNotes.map((note) => ({
  id: `socio-${note.chapter}`,
  subject: 'socio' as const,
  book: 'Sociology',
  section: 'NCERT',
  chapter: note.chapter,
  chapterLabel: `Ch ${note.chapter}`,
  title: note.title,
  summary: note.summary,
  keyPoints: note.importantFacts,
  keyTerms: note.keyConcepts,
  keyPeople: note.keyThinkers.map((thinker) => ({
    name: thinker.name,
    contribution: thinker.contribution,
  })),
  examQuestions: note.examQuestions,
  examTips: note.examTips,
}));

const HINDI_BOOKS: Record<string, { book: string; section: string }> = {
  kavya: { book: 'Antra Bhag-2', section: 'Kavya Khand (Poetry)' },
  gadya: { book: 'Antra Bhag-2', section: 'Gadya Khand (Prose)' },
  antral: { book: 'Antral Bhag-2', section: 'Supplementary Reader' },
};

export const hindiOnePagers: OnePagerNote[] = hindiRevisionNotes.map((note) => {
  const meta = HINDI_BOOKS[note.type] || HINDI_BOOKS.kavya;
  return {
    id: `hindi-${note.chapter}`,
    subject: 'hindi' as const,
    book: meta.book,
    section: meta.section,
    chapter: note.chapter,
    chapterLabel: `Ch ${note.chapter}`,
    title: note.title,
    author: note.author,
    summary: note.summary,
    keyPoints: note.keyThemes,
    devices: note.literaryDevices || [],
    quotes: note.importantQuotes,
    examQuestions: note.importantQuestions,
    examTips: note.examTips,
    characterSketch: note.characterSketch,
    wordMeanings: note.wordMeanings,
  };
});
