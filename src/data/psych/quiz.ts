export interface QuizQuestion {
  id: string;
  chapter: number;
  type: 'mcq' | 'assertion-reason' | 'case-study';
  question: string;
  context?: string;
  options: string[];
  correct: number;
  rationale: string;
}

export const quizQuestions: QuizQuestion[] = [
  // ===== CH 1 =====
  {
    id: "q1", chapter: 1, type: "mcq",
    question: "Who proposed the Theory of Multiple Intelligences?",
    options: ["Charles Spearman", "Howard Gardner", "Robert Sternberg", "J.P. Das"],
    correct: 1,
    rationale: "Howard Gardner (1983) proposed 8 distinct intelligences: Linguistic, Logical-Mathematical, Spatial, Musical, Bodily-Kinesthetic, Interpersonal, Intrapersonal, Naturalistic."
  },
  {
    id: "q2", chapter: 1, type: "mcq",
    question: "In Spearman's Two-Factor Theory, the 'g' factor refers to:",
    options: ["Specific abilities", "General intelligence common to all activities", "Creative intelligence", "Emotional intelligence"],
    correct: 1,
    rationale: "The 'g' factor is the universal inborn capacity common to all intellectual activities — primary mental energy."
  },
  {
    id: "q3", chapter: 1, type: "mcq",
    question: "PASS Theory involves Planning, Arousal, and:",
    options: ["Processing only", "Simultaneous and Successive Processing", "Perception and Action", "Performance and Strategy"],
    correct: 1,
    rationale: "PASS = Planning, Arousal/Attention, Simultaneous Processing, Successive Processing (J.P. Das, Naglieri & Kirby)."
  },
  {
    id: "q4", chapter: 1, type: "mcq",
    question: "An IQ of 70 or below with deficits in adaptive behavior indicates:",
    options: ["Intellectual giftedness", "Intellectual disability", "Learning disability", "Average intelligence"],
    correct: 1,
    rationale: "IQ < 70 accompanied by deficits in adaptive behavior during developmental period indicates Intellectual Disability."
  },
  {
    id: "q5", chapter: 1, type: "assertion-reason",
    question: "",
    context: "Assertion: Sternberg's Triarchic Theory defines intelligence as the ability to adapt, shape, and select environments.\nReason: It includes Componential, Experiential, and Contextual subtheories.",
    options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true"],
    correct: 0,
    rationale: "Both are true and R correctly explains A — the three subtheories collectively describe how intelligence functions in adapting, shaping, and selecting environments."
  },
  // ===== CH 2 =====
  {
    id: "q6", chapter: 2, type: "mcq",
    question: "Freud's Ego operates on which principle?",
    options: ["Pleasure Principle", "Reality Principle", "Moral Principle", "Natural Principle"],
    correct: 1,
    rationale: "The Ego operates on the Reality Principle — it mediates between the Id's desires and external reality, directing impulses into socially acceptable channels."
  },
  {
    id: "q7", chapter: 2, type: "mcq",
    question: "Which defense mechanism involves redirecting impulses onto a safer target?",
    options: ["Repression", "Projection", "Displacement", "Rationalisation"],
    correct: 2,
    rationale: "Displacement redirects aggression or energy onto a safer, substitute target (e.g., angry at teacher → shouts at sibling)."
  },
  {
    id: "q8", chapter: 2, type: "mcq",
    question: "The Big Five personality model includes all EXCEPT:",
    options: ["Openness", "Conscientiousness", "Aggression", "Neuroticism"],
    correct: 2,
    rationale: "The Big Five (OCEAN) are: Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism — not Aggression."
  },
  {
    id: "q9", chapter: 2, type: "mcq",
    question: "Rorschach Inkblot Test is classified as a:",
    options: ["Self-report measure", "Projective technique", "Behavioral assessment", "Cognitive test"],
    correct: 1,
    rationale: "Rorschach presents ambiguous stimuli for the subject to project unconscious motives — a projective technique."
  },
  {
    id: "q10", chapter: 2, type: "assertion-reason",
    question: "",
    context: "Assertion: Carl Rogers believed in the concept of the 'Fully Functioning Person'.\nReason: Rogers emphasized that therapy should provide Unconditional Positive Regard, Accurate Empathy, and Congruence.",
    options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true"],
    correct: 0,
    rationale: "Both true. Rogers' Fully Functioning Person concept is supported by therapeutic conditions of UPR, Empathy, and Congruence."
  },
  // ===== CH 3 =====
  {
    id: "q11", chapter: 3, type: "mcq",
    question: "According to Lazarus, which appraisal involves assessing one's coping resources?",
    options: ["Primary Appraisal", "Secondary Appraisal", "Tertiary Appraisal", "Emotional Appraisal"],
    correct: 1,
    rationale: "Secondary Appraisal involves assessment of one's available coping resources and ability to master the situation."
  },
  {
    id: "q12", chapter: 3, type: "case-study",
    question: "Riya has been preparing for competitive exams for 6 months without any break. She recently started experiencing chronic headaches, insomnia, and frequent colds. Identify the stage of GAS she is most likely in:",
    context: "Riya has been studying intensively for months. She pushed through initial fatigue and maintained high energy for weeks. Now her body is showing signs of breakdown.",
    options: ["Alarm Reaction Stage", "Resistance Stage", "Exhaustion Stage", "Recovery Stage"],
    correct: 2,
    rationale: "Prolonged stress has drained Riya's body resources. Chronic headaches, insomnia, and frequent colds indicate the Exhaustion Stage where the immune system collapses."
  },
  {
    id: "q13", chapter: 3, type: "mcq",
    question: "Type A personality is most closely associated with:",
    options: ["Cancer", "Coronary Heart Disease", "Asthma", "Diabetes"],
    correct: 1,
    rationale: "Type A personality (competitiveness, impatience, hostility) is linked to higher risk of Coronary Heart Disease (CHD)."
  },
  {
    id: "q14", chapter: 3, type: "mcq",
    question: "Hardiness as a stress buffer includes all EXCEPT:",
    options: ["Commitment", "Control", "Challenge", "Confidence"],
    correct: 3,
    rationale: "Hardiness = 3 Cs: Commitment, Control, and Challenge (Suzanne Kobasa). 'Confidence' is not part of the model."
  },
  // ===== CH 4 =====
  {
    id: "q15", chapter: 4, type: "assertion-reason",
    question: "",
    context: "Assertion: The Diathesis-Stress model states that psychological disorders result from a predisposition triggered by environmental stress.\nReason: Genetic predisposition alone is sufficient to cause psychological disorders.",
    options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true"],
    correct: 2,
    rationale: "A is correct. R is FALSE — neither predisposition alone nor stress alone is sufficient; their interaction is required."
  },
  {
    id: "q16", chapter: 4, type: "mcq",
    question: "Hearing voices when nobody is speaking is a symptom of:",
    options: ["Negative symptom of Schizophrenia", "Positive symptom — auditory hallucination", "Dissociative Identity Disorder", "Generalized Anxiety Disorder"],
    correct: 1,
    rationale: "Auditory hallucinations (false sensory perceptions) are a Positive symptom (behavioral excess) of Schizophrenia."
  },
  {
    id: "q17", chapter: 4, type: "case-study",
    question: "A 20-year-old suddenly lost the ability to walk after witnessing a violent incident, though medical examination found no nerve damage. This is most likely:",
    context: "The student was involved in a traumatic event. Within hours, they could not move their legs. MRI and neurological tests show complete physical normalcy.",
    options: ["Major Depressive Disorder", "Conversion Disorder", "Dissociative Identity Disorder", "Panic Disorder"],
    correct: 1,
    rationale: "Conversion Disorder: sudden loss of motor/sensory function post-trauma with no physiological cause."
  },
  {
    id: "q18", chapter: 4, type: "mcq",
    question: "The 4 D's of abnormality include all EXCEPT:",
    options: ["Deviance", "Distress", "Duration", "Danger"],
    correct: 2,
    rationale: "The 4 D's are Deviance, Distress, Dysfunction, and Danger — not 'Duration'."
  },
  // ===== CH 5 =====
  {
    id: "q19", chapter: 5, type: "mcq",
    question: "Systematic Desensitization was developed by:",
    options: ["Albert Ellis", "Aaron Beck", "Joseph Wolpe", "Carl Rogers"],
    correct: 2,
    rationale: "Joseph Wolpe developed Systematic Desensitization using Reciprocal Inhibition — gradual exposure paired with relaxation."
  },
  {
    id: "q20", chapter: 5, type: "mcq",
    question: "In REBT (Ellis), the ABC model stands for:",
    options: ["Attention, Behavior, Consequence", "Activating Event, Belief, Consequence", "Arousal, Balance, Change", "Association, Belief, Cognition"],
    correct: 1,
    rationale: "ABC = Activating Event → Belief System → Consequence. Disputing irrational beliefs leads to effective philosophy."
  },
  {
    id: "q21", chapter: 5, type: "mcq",
    question: "Which therapist emphasized 'Unconditional Positive Regard' as essential for client growth?",
    options: ["Sigmund Freud", "Albert Ellis", "Carl Rogers", "Aaron Beck"],
    correct: 2,
    rationale: "Carl Rogers' Client-Centered Therapy emphasizes Unconditional Positive Regard, Accurate Empathy, and Congruence."
  },
  {
    id: "q22", chapter: 5, type: "case-study",
    question: "A patient consistently believes 'I am worthless because I failed one exam.' The therapist helps identify and challenge this distorted thought. Which therapy is being used?",
    context: "The therapist and client are working together to identify automatic negative thoughts and replace them with more balanced thinking.",
    options: ["Systematic Desensitization", "Client-Centered Therapy", "Cognitive Behavioral Therapy", "Psychoanalytic Therapy"],
    correct: 2,
    rationale: "CBT (specifically Beck's Cognitive Therapy) focuses on identifying and modifying dysfunctional thoughts and core schemas."
  },
  // ===== CH 6 =====
  {
    id: "q23", chapter: 6, type: "mcq",
    question: "According to Attribution Theory, the Fundamental Attribution Error refers to:",
    options: ["Overestimating situational factors for others' behavior", "Overemphasizing internal/dispositional causes for others' failures", "Underestimating one's own abilities", "Attributing success to external factors"],
    correct: 1,
    rationale: "FAE is the tendency to overemphasize internal/dispositional causes when explaining others' behavior, especially failures."
  },
  {
    id: "q24", chapter: 6, type: "assertion-reason",
    question: "",
    context: "Assertion: Cognitive Dissonance creates motivation to change attitudes.\nReason: People prefer consistency among their cognitions and are motivated to reduce inconsistency.",
    options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true"],
    correct: 0,
    rationale: "Both true. Festinger's theory: dissonance creates tension, and people are motivated by consistency to reduce it."
  },
  {
    id: "q25", chapter: 6, type: "mcq",
    question: "The ABC components of attitude are:",
    options: ["Arousal, Behavior, Cognition", "Affective, Behavioral, Cognitive", "Attitude, Belief, Confidence", "Association, Balance, Change"],
    correct: 1,
    rationale: "ABC = Affective (feeling), Behavioral (action tendency), Cognitive (belief/knowledge)."
  },
  // ===== CH 7 =====
  {
    id: "q26", chapter: 7, type: "mcq",
    question: "In Milgram's obedience experiment, what percentage of participants administered the maximum shock?",
    options: ["25%", "40%", "65%", "85%"],
    correct: 2,
    rationale: "65% of participants administered the maximum 450-volt shock when instructed by the authority figure."
  },
  {
    id: "q27", chapter: 7, type: "mcq",
    question: "Groupthink was described by:",
    options: ["Solomon Asch", "Irving Janis", "Stanley Milgram", "Max Ringelmann"],
    correct: 1,
    rationale: "Irving Janis described Groupthink — an illusion of invulnerability leading to suppression of dissent in cohesive groups."
  },
  {
    id: "q28", chapter: 7, type: "case-study",
    question: "In a group project, Arjun notices he's doing most of the work while his teammates contribute minimally. This phenomenon is called:",
    context: "The group has been working together for weeks. Arjun has noticed that the more members in the group, the less each person tends to contribute individually.",
    options: ["Social Facilitation", "Groupthink", "Social Loafing", "Conformity"],
    correct: 2,
    rationale: "Social Loafing (Ringelmann): individuals exert less effort in groups due to diffusion of responsibility."
  },
  {
    id: "q29", chapter: 7, type: "mcq",
    question: "Tuckman's model of group development includes all EXCEPT:",
    options: ["Forming", "Storming", "Performing", "Competing"],
    correct: 3,
    rationale: "Tuckman's 5 stages: Forming → Storming → Norming → Performing → Adjourning. 'Competing' is not a stage."
  },
  // ===== MIXED =====
  {
    id: "q30", chapter: 1, type: "case-study",
    question: "Kavya is excellent at understanding others' emotions and building relationships, but struggles with mathematics. According to Gardner's theory, she is high in:",
    context: "Kavya is the class monitor who mediates conflicts between students. Teachers say she has a gift for understanding how people feel. However, she consistently scores low in math.",
    options: ["Logical-Mathematical intelligence", "Interpersonal intelligence", "Intrapersonal intelligence", "Spatial intelligence"],
    correct: 1,
    rationale: "Interpersonal intelligence involves understanding others' emotions, motivations, and intentions — exactly what Kavya excels at."
  },
  {
    id: "q31", chapter: 3, type: "assertion-reason",
    question: "",
    context: "Assertion: Problem-focused coping is more effective when the stressor is controllable.\nReason: Emotion-focused coping involves altering the source of stress directly.",
    options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true"],
    correct: 2,
    rationale: "A is true. R is FALSE — Emotion-focused coping deals with emotional distress, not the stressor directly. Problem-focused coping alters the source."
  },
  {
    id: "q32", chapter: 4, type: "mcq",
    question: "A person who refuses to accept that their spouse has died and continues setting dinner for them is exhibiting:",
    options: ["Projection", "Denial", "Regression", "Rationalisation"],
    correct: 1,
    rationale: "Denial is refusing to accept the reality of a threatening or painful situation."
  },
  {
    id: "q33", chapter: 6, type: "case-study",
    question: "Rahul assumes that his new colleague, who is well-dressed and confident, must also be intelligent and hardworking. This is an example of:",
    context: "Rahul met his new colleague at a meeting. The colleague was well-dressed, spoke confidently, and seemed knowledgeable. Rahul immediately formed a positive impression.",
    options: ["Fundamental Attribution Error", "Halo Effect", "Stereotyping", "Cognitive Dissonance"],
    correct: 1,
    rationale: "Halo Effect: assuming other positive qualities based on one positive trait (being well-dressed/confident → intelligent/hardworking)."
  },
  {
    id: "q34", chapter: 2, type: "case-study",
    question: "Meera is always polite and agreeable in public but privately harbors anger toward her boss. She channels this energy into volunteering at a shelter. This defense mechanism is:",
    context: "Meera has been passed over for promotion several times but remains outwardly pleasant. She channels her frustration into helping others at a local shelter every weekend.",
    options: ["Displacement", "Sublimation", "Reaction Formation", "Rationalisation"],
    correct: 1,
    rationale: "Sublimation: channeling unacceptable impulses (anger) into socially acceptable activities (volunteering)."
  },
  {
    id: "q35", chapter: 7, type: "assertion-reason",
    question: "",
    context: "Assertion: Social facilitation improves performance on complex tasks.\nReason: The presence of others increases physiological arousal.",
    options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true"],
    correct: 3,
    rationale: "A is FALSE — social facilitation improves simple/well-learned tasks but impairs (inhibits) complex tasks. R is true but doesn't support A."
  },
];
