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
  // ===== CH 1: Variations in Psychological Attributes =====
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
  {
    id: "q30", chapter: 1, type: "case-study",
    question: "Kavya is excellent at understanding others' emotions and building relationships, but struggles with mathematics. According to Gardner's theory, she is high in:",
    context: "Kavya is the class monitor who mediates conflicts between students. Teachers say she has a gift for understanding how people feel. However, she consistently scores low in math.",
    options: ["Logical-Mathematical intelligence", "Interpersonal intelligence", "Intrapersonal intelligence", "Spatial intelligence"],
    correct: 1,
    rationale: "Interpersonal intelligence involves understanding others' emotions, motivations, and intentions — exactly what Kavya excels at."
  },
  {
    id: "q36", chapter: 1, type: "mcq",
    question: "In Sternberg's Triarchic Theory, which subtheory involves the ability to cope with novel situations and produce creative ideas?",
    options: ["Componential Subtheory", "Experiential Subtheory", "Contextual Subtheory", "Environmental Subtheory"],
    correct: 1,
    rationale: "The Experiential Subtheory deals with handling novelty and automating information processing. It encompasses creative intelligence — the ability to deal with novel tasks and situations."
  },
  {
    id: "q37", chapter: 1, type: "mcq",
    question: "According to the PASS Theory of Intelligence, which component is responsible for orienting attention and maintaining arousal?",
    options: ["Planning", "Arousal/Attention", "Simultaneous Processing", "Successive Processing"],
    correct: 1,
    rationale: "The Arousal/Attention component of PASS is responsible for orienting attention to relevant stimuli and maintaining an optimal level of arousal for task engagement."
  },
  {
    id: "q38", chapter: 1, type: "mcq",
    question: "Which of the following is NOT a characteristic of Intellectual Disability according to AAIDD criteria?",
    options: ["Onset before age 18", "IQ below 70", "Deficits in adaptive behaviour", "Inability to learn any skills"],
    correct: 3,
    rationale: "AAIDD criteria: onset before 18 years, IQ below 70, and deficits in adaptive functioning. People with intellectual disability can and do learn skills — they require more time and support."
  },
  {
    id: "q39", chapter: 1, type: "case-study",
    question: "Advait, a student, scores 90 marks in mathematics but only 40 in English. His teachers say he is brilliant but lazy. Which limitation of IQ testing does this highlight?",
    context: "Advait consistently excels in STEM subjects but performs poorly in languages and arts. His overall IQ average may mask his true abilities in specific areas.",
    options: ["Cultural bias of tests", "IQ does not capture specific abilities or creative talent", "Tests are unreliable", "Tests are only valid for adults"],
    correct: 1,
    rationale: "IQ scores can mask specific strengths. A single composite score overlooks domain-specific talent — Gardner's theory of multiple intelligences addresses this gap."
  },
  // ===== CH 2: Self and Personality =====
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
  {
    id: "q34", chapter: 2, type: "case-study",
    question: "Meera is always polite and agreeable in public but privately harbors anger toward her boss. She channels this energy into volunteering at a shelter. This defense mechanism is:",
    context: "Meera has been passed over for promotion several times but remains outwardly pleasant. She channels her frustration into helping others at a local shelter every weekend.",
    options: ["Displacement", "Sublimation", "Reaction Formation", "Rationalisation"],
    correct: 1,
    rationale: "Sublimation: channeling unacceptable impulses (anger) into socially acceptable activities (volunteering)."
  },
  {
    id: "q40", chapter: 2, type: "mcq",
    question: "Abraham Maslow placed which need at the top of his hierarchy?",
    options: ["Belongingness and Love", "Esteem", "Safety", "Self-Actualisation"],
    correct: 3,
    rationale: "Maslow's Hierarchy of Needs: Physiological → Safety → Belongingness → Esteem → Self-Actualisation (at the top)."
  },
  {
    id: "q41", chapter: 2, type: "assertion-reason",
    question: "",
    context: "Assertion: According to Freud, Repression is the most fundamental defense mechanism.\nReason: Repression pushes threatening unconscious impulses into the unconscious mind.",
    options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true"],
    correct: 0,
    rationale: "Both true. Repression is considered the master defense mechanism because other defenses serve to keep repressed material from surfacing. R correctly explains the mechanism."
  },
  {
    id: "q42", chapter: 2, type: "mcq",
    question: "According to Carl Rogers, 'Unconditional Positive Regard' in therapy means:",
    options: ["The therapist evaluates the client's behavior constantly", "The therapist accepts the client without judgement or conditions", "The therapist agrees with all client decisions", "The therapist provides financial support unconditionally"],
    correct: 1,
    rationale: "UPR means the therapist shows complete acceptance and caring for the client as a person, without conditions or judgement — not agreement with all behaviors."
  },
  {
    id: "q43", chapter: 2, type: "case-study",
    question: "Zoya consistently sets unrealistic goals for herself and becomes deeply upset when she fails. Her therapist observes she has a fragile self-esteem dependent on others' approval. Which self-concept pattern does Zoya exhibit?",
    context: "Zoya always needs to be told she did well. If not praised, she feels worthless. Her actual achievements are above average, but she never feels 'good enough'.",
    options: ["Congruent self-concept", "Conditional self-worth dependent on external validation", "Overcompensation through narcissism", "Rationalisation of failures"],
    correct: 1,
    rationale: "Zoya exhibits conditional self-worth — her self-esteem is contingent on external validation. Rogers identified this as incongruence between self-concept and experience."
  },
  // ===== CH 3: Meeting Life Challenges =====
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
  {
    id: "q31", chapter: 3, type: "assertion-reason",
    question: "",
    context: "Assertion: Problem-focused coping is more effective when the stressor is controllable.\nReason: Emotion-focused coping involves altering the source of stress directly.",
    options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true"],
    correct: 2,
    rationale: "A is true. R is FALSE — Emotion-focused coping deals with emotional distress, not the stressor directly. Problem-focused coping alters the source."
  },
  {
    id: "q44", chapter: 3, type: "mcq",
    question: "Personality Type C is characterized by which of the following?",
    options: ["Competitiveness and impatience", "Suppressing emotions, especially negative ones", "Social withdrawal and apathy", "Excessive optimism and risk-taking"],
    correct: 1,
    rationale: "Type C personality is characterized by excessive suppression of emotions (especially anger), passivity, and a tendency to endure distress without expression — linked to higher risk of cancer."
  },
  {
    id: "q45", chapter: 3, type: "mcq",
    question: "Which of the following is an example of an emotion-focused coping strategy?",
    options: ["Seeking information about the problem", "Taking direct action to solve the problem", "Meditating to calm oneself", "Making a plan of action"],
    correct: 2,
    rationale: "Meditation is emotion-focused coping — it addresses the emotional response to stress rather than changing the stressor itself."
  },
  {
    id: "q46", chapter: 3, type: "case-study",
    question: "After failing his board exams, Arjun blamed the unfair marking system, complained about the questions, and refused to accept that he could have studied more. Which appraisal process is Arjun using?",
    context: "Arjun scored below expectations. Instead of reflecting on his preparation, he attributes the failure entirely to external factors. His parents and teachers notice this pattern in other areas of his life too.",
    options: ["Primary appraisal as threat", "Secondary appraisal of coping resources", "External locus of control and denial", "Emotion-focused coping"],
    correct: 2,
    rationale: "Arjun attributes failure to external factors (marking system, questions) rather than internal ones — characteristic of external locus of control. This is also a form of denial as a defense mechanism."
  },
  {
    id: "q47", chapter: 3, type: "assertion-reason",
    question: "",
    context: "Assertion: Social support acts as a buffer against the negative effects of stress.\nReason: Social support provides emotional reassurance, information, and tangible resources during stressful situations.",
    options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true"],
    correct: 0,
    rationale: "Both true and R correctly explains A. Social support buffers stress through multiple pathways: emotional comfort, informational guidance, and practical (tangible) assistance."
  },
  // ===== CH 4: Psychological Disorders =====
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
  {
    id: "q32", chapter: 4, type: "mcq",
    question: "A person who refuses to accept that their spouse has died and continues setting dinner for them is exhibiting:",
    options: ["Projection", "Denial", "Regression", "Rationalisation"],
    correct: 1,
    rationale: "Denial is refusing to accept the reality of a threatening or painful situation."
  },
  {
    id: "q48", chapter: 4, type: "mcq",
    question: "Which of the following is a positive symptom of Schizophrenia?",
    options: ["Flat affect", "Avolition", "Thought delusions", "Social withdrawal"],
    correct: 2,
    rationale: "Thought delusions are positive symptoms (behaviours added to normal functioning). Flat affect, avolition, and social withdrawal are negative symptoms (behaviours lost or diminished)."
  },
  {
    id: "q49", chapter: 4, type: "mcq",
    question: "A person experiencing persistent, uncontrollable, and excessive worry about everyday situations for at least 6 months is most likely diagnosed with:",
    options: ["Panic Disorder", "Generalised Anxiety Disorder", "Specific Phobia", "Social Anxiety Disorder"],
    correct: 1,
    rationale: "GAD is characterised by chronic, excessive, uncontrollable worry about multiple life domains persisting for at least 6 months — not limited to a specific situation."
  },
  {
    id: "q50", chapter: 4, type: "case-study",
    question: "Sanya washes her hands 30 times a day, each time for exactly 5 minutes. She knows this is irrational but feels intense anxiety if she tries to stop. Which disorder and symptom does this best represent?",
    context: "Sanya has been washing her hands excessively for over a year. She reports an intrusive thought that her hands are contaminated with germs that will make her family severely ill. She recognises the thought is irrational but cannot resist the compulsion.",
    options: ["GAD with excessive worry", "OCD with obsessions and compulsions", "Specific phobia with avoidance", "Hypochondriasis with health anxiety"],
    correct: 1,
    rationale: "This is classic Obsessive-Compulsive Disorder: the intrusive fear of contamination (obsession) drives the hand-washing ritual (compulsion). The ego-dystonic nature (knowing it's irrational) is characteristic."
  },
  // ===== CH 5: Therapeutic Approaches =====
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
  {
    id: "q51", chapter: 5, type: "mcq",
    question: "The technique of 'Exposure and Response Prevention' (ERP) is most effective for treating:",
    options: ["Phobias", "Obsessive-Compulsive Disorder", "Schizophrenia", "Personality Disorders"],
    correct: 1,
    rationale: "ERP is the gold-standard behavioral treatment for OCD. It involves exposing the person to the anxiety-provoking stimulus (exposure) while preventing the compulsive ritual (response prevention)."
  },
  {
    id: "q52", chapter: 5, type: "mcq",
    question: "Which of the following is a core condition in Carl Rogers' Client-Centered Therapy?",
    options: ["Transference interpretation", "Accurate Empathy", "Free association", "Counter-conditioning"],
    correct: 1,
    rationale: "Rogers identified three core conditions: Unconditional Positive Regard, Accurate Empathy, and Congruence (genuineness)."
  },
  {
    id: "q53", chapter: 5, type: "assertion-reason",
    question: "",
    context: "Assertion: Cognitive Behavior Therapy (CBT) is effective for depression.\nReason: CBT helps clients identify and modify distorted cognitive patterns and maladaptive behaviors.",
    options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true"],
    correct: 0,
    rationale: "Both true. CBT addresses depression by restructuring negative automatic thoughts and replacing maladaptive behaviors with adaptive ones — R correctly explains why A is true."
  },
  {
    id: "q54", chapter: 5, type: "case-study",
    question: "A client avoids social situations due to fear of judgement. The therapist teaches relaxation techniques and gradually introduces social interactions, starting with small groups and progressing to larger gatherings. Which therapeutic approach is being used?",
    context: "The client has avoided parties and public speaking for years. The therapist creates a hierarchy: first talking to one stranger, then joining a group discussion, then giving a small presentation. Relaxation is practiced before each step.",
    options: ["Psychoanalytic free association", "Systematic Desensitization", "Client-Centered active listening", "Rational Emotive Behavior Therapy"],
    correct: 1,
    rationale: "Systematic Desensitization: the therapist creates an anxiety hierarchy and pairs each step with relaxation (reciprocal inhibition) until the client can face the feared situation without anxiety."
  },
  // ===== CH 6: Attitude and Social Cognition =====
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
  {
    id: "q33", chapter: 6, type: "case-study",
    question: "Rahul assumes that his new colleague, who is well-dressed and confident, must also be intelligent and hardworking. This is an example of:",
    context: "Rahul met his new colleague at a meeting. The colleague was well-dressed, spoke confidently, and seemed knowledgeable. Rahul immediately formed a positive impression.",
    options: ["Fundamental Attribution Error", "Halo Effect", "Stereotyping", "Cognitive Dissonance"],
    correct: 1,
    rationale: "Halo Effect: assuming other positive qualities based on one positive trait (being well-dressed/confident → intelligent/hardworking)."
  },
  {
    id: "q55", chapter: 6, type: "mcq",
    question: "The Hovland-Yale model of attitude change identifies three key factors. Which of the following is NOT one of them?",
    options: ["Source of communication", "Nature of the message", "Medium of communication", "Receiver of communication"],
    correct: 2,
    rationale: "The Hovland-Yale model identifies three factors: Source (communicator credibility), Message (content and appeal), and Receiver (audience characteristics). Medium is not a core factor in this model."
  },
  {
    id: "q56", chapter: 6, type: "mcq",
    question: "According to Leon Festinger's Cognitive Dissonance Theory, people are motivated to:",
    options: ["Seek out attitudes that conflict with their behavior", "Maintain consistency between their attitudes and behavior", "Conform to group norms at all costs", "Avoid all cognitive inconsistencies in daily life"],
    correct: 1,
    rationale: "Festinger's theory states that inconsistency (dissonance) between attitudes and behavior creates discomfort, motivating people to restore consistency."
  },
  {
    id: "q57", chapter: 6, type: "case-study",
    question: "Priya believes smoking is dangerous to health but smokes regularly. She resolves this conflict by telling herself 'Smoking reduces stress and that's more important.' This is an example of:",
    context: "Priya has been smoking for two years. She has seen awareness campaigns and knows the risks, but continues to smoke. She frequently tells friends that stress relief is worth the health risk.",
    options: ["Cognitive Dissonance reduction", "Halo Effect", "Stereotyping", "Fundamental Attribution Error"],
    correct: 0,
    rationale: "Priya reduces dissonance between her attitude (smoking is bad) and behavior (smoking) by rationalizing — minimizing the threat. This is a classic dissonance reduction strategy."
  },
  {
    id: "q58", chapter: 6, type: "assertion-reason",
    question: "",
    context: "Assertion: Attitudes formed through direct experience are more resistant to change.\nReason: Direct experience creates stronger attitude-behaviour consistency.",
    options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true"],
    correct: 0,
    rationale: "Both true. Attitudes formed through direct behavioural involvement are more accessible, stronger, and more resistant to persuasion because they are more firmly encoded in memory and guide behavior more reliably."
  },
  // ===== CH 7: Social Influence and Group Processes =====
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
  {
    id: "q35", chapter: 7, type: "assertion-reason",
    question: "",
    context: "Assertion: Social facilitation improves performance on complex tasks.\nReason: The presence of others increases physiological arousal.",
    options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true"],
    correct: 3,
    rationale: "A is FALSE — social facilitation improves simple/well-learned tasks but impairs (inhibits) complex tasks. R is true but doesn't support A."
  },
  {
    id: "q59", chapter: 7, type: "mcq",
    question: "Group Polarisation refers to:",
    options: ["Group members becoming more moderate in their views", "Group members' attitudes becoming more extreme in the direction the group already leans", "Individual opinions becoming more diverse within a group", "Groups splitting into opposing factions"],
    correct: 1,
    rationale: "Group Polarisation: after group discussion, members' attitudes shift toward the more extreme end of their initial collective倾向. Risky groups become riskier; cautious groups become more cautious."
  },
  {
    id: "q60", chapter: 7, type: "case-study",
    question: "During a street protest, individuals in the large crowd began behaving more aggressively than they normally would. They felt anonymous and less personally responsible. This phenomenon is best described as:",
    context: "Ravi, a usually mild-mannered teacher, joined a large protest. In the crowd, he found himself shouting, throwing objects, and behaving in ways he would never behave alone. He later said he 'felt like a different person'.",
    options: ["Social Loafing", "Deindividuation", "Groupthink", "Conformity"],
    correct: 1,
    rationale: "Deindividuation: loss of self-awareness and personal responsibility in groups, leading to disinhibited and often aggressive behavior. Anonymity and reduced accountability are key factors."
  },
  {
    id: "q61", chapter: 7, type: "assertion-reason",
    question: "",
    context: "Assertion: Conformity is stronger when the group is unanimous.\nReason: Unanimity increases the pressure on the individual to align with the group norm.",
    options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true"],
    correct: 0,
    rationale: "Both true. Asch's experiments showed that even one dissenting confederate dramatically reduced conformity. Unanimity eliminates any social support for the minority view, maximising normative pressure."
  },
];
