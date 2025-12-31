const studyData = {
  metadata: {
    topic: "ATI Mental Health - Units 1 & 2",
    examDate: "January 2026",
    createdAt: "December 31, 2025",
    description: "Legal/Ethical Framework, Therapeutic Communication, Defense Mechanisms, Anxiety Levels, Safety Interventions"
  },

  concepts: [
    {
      id: 1,
      title: "Legal & Ethical Framework - Admissions",
      content: "Understanding voluntary vs involuntary admission is critical for protecting client rights while ensuring safety.",
      keyPoints: [
        "Voluntary Admission: Client chooses admission, is competent, has right to refuse meds/treatment, can request release",
        "Involuntary Admission: Admitted against will when danger to self, danger to others, or gravely disabled (unable to care for self)",
        "Involuntary clients retain right to refuse treatment unless court ordered or emergency",
        "Requires 2 physicians for involuntary commitment",
        "Must have legal review within 72 hours",
        "Involuntary admission does NOT equal incompetence - separate court hearing needed for that determination"
      ],
      nursingInterventions: [
        "Inform client of their rights upon admission",
        "Document mental status and safety concerns thoroughly",
        "Provide information about legal review process",
        "Respect autonomy while maintaining safety"
      ]
    },
    {
      id: 2,
      title: "Torts & Duty to Warn (Tarasoff)",
      content: "Nurses must understand civil wrongs (torts) and the critical exception to confidentiality when clients threaten specific harm to specific individuals.",
      keyPoints: [
        "False Imprisonment: Confining client without justification (e.g., unjustified seclusion for convenience)",
        "Assault: Making a threat ('If you don't take this pill, I'll inject you')",
        "Battery: Touching without consent (giving injection after threat)",
        "Tarasoff Rule (Duty to Warn): MUST warn third party if client makes specific threat against specific person",
        "Duty to Warn is an EXCEPTION to confidentiality",
        "Negligence: Failure to provide standard of care (unintentional tort)"
      ],
      nursingInterventions: [
        "Never threaten clients to gain compliance",
        "Always obtain consent before touching/procedures",
        "Document all threats made by clients with specific details",
        "Notify supervisor and follow facility protocol for duty to warn",
        "Use least restrictive interventions first"
      ]
    },
    {
      id: 3,
      title: "Therapeutic Communication",
      content: "Goal-directed, client-centered communication that promotes trust and healing. NOT social conversation.",
      keyPoints: [
        "TECHNIQUES TO USE: Silence (allows reflection), Restating/Reflecting (validates feelings), Open-ended questions (encourages sharing), Offering self ('I will sit with you')",
        "TECHNIQUES TO AVOID: 'Why' questions (cause defensiveness), False reassurance ('Everything will be okay'), Advice giving ('You should...'), Minimizing feelings ('Everyone feels that way')",
        "Communication must be purposeful and goal-directed",
        "Focus on client's feelings, not facts",
        "Reflecting: 'You feel angry when...'",
        "Open-ended: 'Tell me more about...'"
      ],
      nursingInterventions: [
        "Use silence therapeutically - allow client to process",
        "Reflect feelings back to validate client's experience",
        "Ask open-ended questions to encourage expression",
        "Offer presence: 'I will stay with you'",
        "Avoid giving advice - support client autonomy"
      ]
    },
    {
      id: 4,
      title: "Defense Mechanisms",
      content: "Unconscious psychological strategies to reduce anxiety. Most are maladaptive; only Altruism and Sublimation are always healthy.",
      keyPoints: [
        "Sublimation: Substituting acceptable activity for unacceptable impulse (angry person works out) - HEALTHY",
        "Altruism: Helping others to manage own anxiety - HEALTHY",
        "Displacement: Shifting feelings to less threatening object (kick dog after boss yells)",
        "Reaction Formation: Doing opposite of what is felt (dislike neighbor but bake them cookies)",
        "Projection: Attributing own thoughts to others (cheating spouse accuses partner of cheating)",
        "Splitting: Seeing people as all good or all bad - RED FLAG for Borderline PD",
        "Rationalization: Creating logical explanations for unacceptable outcomes",
        "Denial: Refusing to accept reality"
      ],
      nursingInterventions: [
        "Identify defense mechanisms without judgment",
        "Help client recognize patterns over time",
        "Encourage healthy coping (sublimation, altruism)",
        "Set firm boundaries with clients using splitting",
        "Document observed defense mechanisms"
      ]
    },
    {
      id: 5,
      title: "Levels of Anxiety",
      content: "Anxiety exists on a continuum from adaptive (mild) to dysfunctional (panic). Interventions must match the level.",
      keyPoints: [
        "MILD: Everyday stress, increases focus/learning, slight restlessness - ADAPTIVE",
        "MODERATE: Selective inattention, learning hampered but possible, somatic symptoms (headache)",
        "SEVERE: Distorted perception, learning IMPOSSIBLE, hyperventilation, sense of doom",
        "PANIC: Lost touch with reality, possible hallucinations, immobility or flight - MEDICAL EMERGENCY",
        "As anxiety increases, perceptual field narrows",
        "Teaching is ineffective at severe/panic levels"
      ],
      nursingInterventions: [
        "MODERATE: Ask open-ended questions, encourage talking, redirect focus",
        "SEVERE: Use simple, direct statements, reduce stimuli, stay calm",
        "PANIC: Stay with client (SAFETY PRIORITY), minimal stimulation, firm short sentences, do NOT attempt teaching",
        "Move client to quiet, low-stimulation environment",
        "PRN medications after environmental interventions fail"
      ]
    },
    {
      id: 6,
      title: "Seclusion & Restraints",
      content: "Used only as LAST RESORT when client is danger to self or others. Strict time limits and documentation required.",
      keyPoints: [
        "Order of interventions: Verbal de-escalation → Diversion → PRN Meds → Seclusion → Restraints (LEAST RESTRICTIVE FIRST)",
        "TIME LIMITS: Adults = 4 hours, Ages 9-17 = 2 hours, Under 9 = 1 hour",
        "Documentation every 15-30 minutes: circulation, food/fluids, toileting, behavior",
        "Provider must see client within 1 hour of emergency restraint use",
        "New order required after time limit expires",
        "Never use restraints for staff convenience or punishment"
      ],
      nursingInterventions: [
        "Attempt verbal de-escalation first",
        "Document all less restrictive interventions tried",
        "Check circulation, sensation, movement every 15-30 min",
        "Offer food, fluids, toileting regularly",
        "Maintain client dignity throughout",
        "Release restraints as soon as safely possible"
      ]
    },
    {
      id: 7,
      title: "Transference & Countertransference",
      content: "Understanding these phenomena is essential for maintaining therapeutic boundaries and self-awareness.",
      keyPoints: [
        "Transference: Client views nurse as person from their past ('You act just like my mother')",
        "Countertransference: Nurse views client as person from nurse's past (nurse dislikes client who reminds them of ex)",
        "Both are unconscious processes",
        "Transference can be therapeutic if recognized and managed",
        "Countertransference requires nurse self-reflection and supervision",
        "Unrecognized countertransference can harm therapeutic relationship"
      ],
      nursingInterventions: [
        "Recognize when client is projecting past relationships onto you",
        "Maintain professional boundaries",
        "Engage in self-reflection to identify countertransference",
        "Seek clinical supervision when experiencing strong reactions to clients",
        "Do not act on countertransference feelings"
      ]
    },
    {
      id: 8,
      title: "Family Therapy Dynamics",
      content: "Dysfunctional family patterns that perpetuate mental health issues across generations.",
      keyPoints: [
        "Enmeshed Boundaries: Thoughts/roles blend, no independence, over-involvement",
        "Rigid Boundaries: Isolation, no sharing of feelings, emotional distance",
        "Triangulation: Two people pull in third party to stabilize conflict (parent-child alliance against other parent)",
        "Scapegoating: Blaming member with least power (usually child) for family problems",
        "Healthy boundaries: Clear but flexible, allow for individuality AND connection"
      ],
      nursingInterventions: [
        "Identify dysfunctional family patterns during assessment",
        "Avoid being triangulated into family conflicts",
        "Support the scapegoated member",
        "Educate family about healthy boundaries",
        "Refer to family therapy when appropriate"
      ]
    },
    {
      id: 9,
      title: "Psychoanalytic Theory (Freud)",
      content: "Freud's structural model of personality explains internal conflict and the development of defense mechanisms.",
      keyPoints: [
        "Id: Pleasure principle, instincts, 'I want it NOW' - primitive, unconscious",
        "Ego: Reality principle, balances Id and Superego - conscious mediator",
        "Superego: Moral compass/conscience, 'It's wrong to do that' - internalized rules",
        "Anxiety results from conflict between Id, Ego, and Superego",
        "Defense mechanisms are Ego's way of managing anxiety",
        "Healthy personality requires balance among all three"
      ],
      nursingInterventions: [
        "Recognize when client is acting on impulse (Id-driven behavior)",
        "Support reality testing (Ego function)",
        "Identify overly harsh self-criticism (Superego)",
        "Help client find balance between desires and values"
      ]
    }
  ],

  questions: [
    {
      id: 1,
      question: "A client admitted involuntarily for severe depression demands to leave, stating, 'I am a competent adult and I want to go home.' Which response by the nurse is appropriate?",
      options: [
        "A. 'You cannot leave because you are here under a court order.'",
        "B. 'You have the right to leave, but we advise against it.'",
        "C. 'You can request a legal review of your admission at any time.'",
        "D. 'If you try to leave, we will have to place you in restraints.'"
      ],
      correct: 2,
      rationale: "CORRECT (C): Even involuntary clients retain the right to legal review of their admission status. This respects autonomy while following legal protocol. WRONG (A): Dismissive and doesn't address the client's rights. WRONG (B): Incorrect - involuntary clients cannot simply leave; they must go through legal process. WRONG (D): This is assault (making a threat) and inappropriate."
    },
    {
      id: 2,
      question: "A nurse is assessing a client who is pacing, hyperventilating, and states, 'I feel like I'm going to die.' The client cannot follow detailed instructions. What is the priority intervention?",
      options: [
        "A. Teach the client deep breathing exercises.",
        "B. Ask the client what triggered this feeling.",
        "C. Move the client to a quiet, low-stimulation environment.",
        "D. Administer a PRN benzodiazepine immediately."
      ],
      correct: 2,
      rationale: "CORRECT (C): This client is experiencing PANIC level anxiety (sense of doom, unable to follow instructions). Moving to low-stimulation environment is the priority safety/milieu intervention. WRONG (A): Teaching is ineffective - learning is impossible at panic level. WRONG (B): Complex questioning fails - client cannot process. WRONG (D): Medications are chemical restraint - use environmental interventions FIRST (least restrictive)."
    },
    {
      id: 3,
      question: "A client says, 'I didn't get the job I wanted, but it's probably for the best because it was too far of a commute anyway.' Which defense mechanism is this?",
      options: [
        "A. Denial",
        "B. Rationalization",
        "C. Projection",
        "D. Sublimation"
      ],
      correct: 1,
      rationale: "CORRECT (B): Rationalization is creating logical, socially acceptable explanations for disappointing outcomes to protect self-esteem. The client is justifying the loss with a 'reasonable' excuse. WRONG (A): Denial would be refusing to acknowledge they didn't get the job. WRONG (C): Projection would be blaming others for not getting the job. WRONG (D): Sublimation would be channeling disappointment into productive activity."
    },
    {
      id: 4,
      question: "During a group therapy session, a client physically threatens another member with a chair. The nurse calls for help. What is the next action?",
      options: [
        "A. Place the client in mechanical restraints.",
        "B. Administer an IM antipsychotic.",
        "C. Tell the client calmly to put the chair down.",
        "D. Evacuate the other clients from the room."
      ],
      correct: 3,
      rationale: "CORRECT (D): SAFETY FIRST. Remove potential victims and the 'audience' immediately. This is risk reduction priority. WRONG (A): Restraints are last resort after other interventions and require securing scene first. WRONG (B): Chemical restraint is used after environmental safety is established. WRONG (C): Verbal de-escalation is important but safety of other clients takes priority when a weapon is involved."
    },
    {
      id: 5,
      question: "A client asks the nurse to keep a secret about their plan to harm their partner. How should the nurse respond?",
      options: [
        "A. 'I promise I won't tell anyone.'",
        "B. 'I cannot keep secrets that involve harm to others.'",
        "C. 'Why do you want to harm your partner?'",
        "D. 'Let's talk about why you feel this way.'"
      ],
      correct: 1,
      rationale: "CORRECT (B): Duty to Warn (Tarasoff Rule) - confidentiality has EXCEPTIONS when there is a specific threat to a specific person. The nurse must be honest about limits of confidentiality. WRONG (A): This is an ethical violation and lie - nurses cannot promise to keep threats secret. WRONG (C): 'Why' questions are non-therapeutic and cause defensiveness. WRONG (D): While exploring feelings is appropriate, it doesn't address the immediate safety/legal obligation."
    },
    {
      id: 6,
      question: "A nurse notices she feels irritated every time she works with a particular client who reminds her of her critical mother. This is an example of:",
      options: [
        "A. Transference",
        "B. Countertransference",
        "C. Splitting",
        "D. Projection"
      ],
      correct: 1,
      rationale: "CORRECT (B): Countertransference occurs when the NURSE projects feelings from past relationships onto the client. The nurse is reacting to the client as if they were her mother. WRONG (A): Transference is when the CLIENT projects onto the nurse. WRONG (C): Splitting is seeing people as all good or all bad. WRONG (D): Projection is attributing one's own thoughts to others."
    },
    {
      id: 7,
      question: "A client in restraints is being monitored by the nurse. Which assessment finding requires immediate intervention?",
      options: [
        "A. Client requests water",
        "B. Client's fingers are cyanotic",
        "C. Client is yelling obscenities",
        "D. Client refuses to make eye contact"
      ],
      correct: 1,
      rationale: "CORRECT (B): Cyanotic (blue) fingers indicate compromised circulation - this is a MEDICAL EMERGENCY requiring immediate intervention (loosen restraints, assess neurovascular status). WRONG (A): Important but not emergent - can be addressed but circulation takes priority. WRONG (C): Expected behavior, not dangerous. WRONG (D): Not concerning for safety."
    },
    {
      id: 8,
      question: "An older adult client is suddenly confused and agitated with no psychiatric history. Which action should the nurse take FIRST?",
      options: [
        "A. Administer a PRN antipsychotic",
        "B. Apply restraints for safety",
        "C. Obtain urinalysis",
        "D. Request psychiatric consultation"
      ],
      correct: 2,
      rationale: "CORRECT (C): Rule out MEDICAL cause before assuming psychiatric. UTI is the #1 cause of acute confusion in older adults. Physical survival takes priority over psychosocial. WRONG (A): Never medicate before ruling out medical cause. WRONG (B): Restraints are last resort. WRONG (D): Medical clearance needed before psychiatric evaluation."
    },
    {
      id: 9,
      question: "A client states, 'My husband left me because I'm worthless.' Which response demonstrates therapeutic communication?",
      options: [
        "A. 'You are not worthless. You have many good qualities.'",
        "B. 'Why do you think you're worthless?'",
        "C. 'It sounds like you're feeling hurt by your husband leaving.'",
        "D. 'Many people go through divorce. You'll be okay.'"
      ],
      correct: 2,
      rationale: "CORRECT (C): Reflecting feelings validates the client's emotional experience and encourages further expression. WRONG (A): False reassurance - dismisses feelings. WRONG (B): 'Why' questions cause defensiveness. WRONG (D): Minimizing feelings - invalidates the client's experience."
    },
    {
      id: 10,
      question: "A client with Borderline Personality Disorder tells the day nurse, 'You're the only one who understands me. The night nurse is terrible and doesn't care.' This behavior is:",
      options: [
        "A. Manipulation",
        "B. Splitting",
        "C. Projection",
        "D. Transference"
      ],
      correct: 1,
      rationale: "CORRECT (B): Splitting is the inability to integrate positive and negative qualities - seeing people as ALL good or ALL bad. This is a hallmark of Borderline PD. WRONG (A): While it may seem manipulative, splitting is an unconscious defense mechanism. WRONG (C): Projection is attributing own thoughts to others. WRONG (D): Transference involves projecting past relationship patterns."
    },
    {
      id: 11,
      question: "Which client statement indicates MODERATE level anxiety?",
      options: [
        "A. 'I can't breathe! I'm going to die!'",
        "B. 'I have a slight headache and feel restless about my test tomorrow.'",
        "C. 'I feel energized and ready to study for my exam.'",
        "D. 'I can't focus on anything you're saying.'"
      ],
      correct: 1,
      rationale: "CORRECT (B): Moderate anxiety features somatic symptoms (headache) and selective inattention, but learning is still possible. WRONG (A): This is panic level - sense of doom, physical crisis. WRONG (C): This is mild anxiety - adaptive, increases focus. WRONG (D): This suggests severe anxiety - learning impossible."
    },
    {
      id: 12,
      question: "A nurse restrains a client who posed no safety threat because the client was 'annoying the staff.' This action is:",
      options: [
        "A. Appropriate use of restraints",
        "B. False imprisonment",
        "C. Negligence",
        "D. Assault"
      ],
      correct: 1,
      rationale: "CORRECT (B): False imprisonment is confining a client without justification. Using restraints for staff convenience or punishment (not safety) is illegal. WRONG (A): Restraints are ONLY for safety threats. WRONG (C): Negligence is failure to act, not wrongful action. WRONG (D): Assault is making a threat."
    },
    {
      id: 13,
      question: "A client taking haloperidol (Haldol) develops a temperature of 104°F (40°C), muscle rigidity, and altered consciousness. The nurse should:",
      options: [
        "A. Administer acetaminophen for the fever",
        "B. Recognize this as Neuroleptic Malignant Syndrome and notify provider immediately",
        "C. Continue monitoring as this is an expected side effect",
        "D. Administer the next scheduled dose of Haldol"
      ],
      correct: 1,
      rationale: "CORRECT (B): NMS (Neuroleptic Malignant Syndrome) is a MEDICAL EMERGENCY characterized by high fever, muscle rigidity, and altered mental status. STOP the medication and notify provider immediately. WRONG (A): This treats a symptom, not the emergency. WRONG (C): NMS is life-threatening, not expected. WRONG (D): The medication CAUSED this - never continue."
    },
    {
      id: 14,
      question: "In family therapy, a mother and daughter consistently form an alliance against the father. This dynamic is called:",
      options: [
        "A. Enmeshment",
        "B. Scapegoating",
        "C. Triangulation",
        "D. Rigid boundaries"
      ],
      correct: 2,
      rationale: "CORRECT (C): Triangulation occurs when two people pull in a third party to stabilize conflict. The mother-daughter alliance against father is classic triangulation. WRONG (A): Enmeshment is blurred boundaries/over-involvement. WRONG (B): Scapegoating is blaming one member for all problems. WRONG (D): Rigid boundaries involve emotional distance/isolation."
    },
    {
      id: 15,
      question: "According to Freud, which personality structure operates on the 'pleasure principle'?",
      options: [
        "A. Ego",
        "B. Superego",
        "C. Id",
        "D. Conscience"
      ],
      correct: 2,
      rationale: "CORRECT (C): The Id operates on the pleasure principle - 'I want it NOW' - primitive, instinctual, unconscious. WRONG (A): Ego operates on reality principle - mediates between Id and Superego. WRONG (B): Superego is the moral compass/conscience. WRONG (D): Conscience is part of the Superego."
    }
  ],

  flashcards: [
    { id: 1, front: "Voluntary Admission", back: "Client chooses admission; is competent; has right to refuse treatment and request release" },
    { id: 2, front: "Involuntary Admission Criteria", back: "Danger to self, danger to others, or gravely disabled (unable to care for self)" },
    { id: 3, front: "Tarasoff Rule (Duty to Warn)", back: "Exception to confidentiality: MUST warn third party if client makes specific threat against specific person" },
    { id: 4, front: "False Imprisonment", back: "Tort: Confining a client without justification (e.g., unjustified seclusion for convenience)" },
    { id: 5, front: "Assault", back: "Tort: Making a threat ('If you don't take this pill, I'll inject you')" },
    { id: 6, front: "Battery", back: "Tort: Touching without consent (e.g., giving injection without permission)" },
    { id: 7, front: "Beneficence", back: "Ethical principle: The duty to do good for the client" },
    { id: 8, front: "Autonomy", back: "Ethical principle: Client's right to make their own decisions (e.g., refuse meds)" },
    { id: 9, front: "Fidelity", back: "Ethical principle: Loyalty and faithfulness to duties/promises" },
    { id: 10, front: "Veracity", back: "Ethical principle: Honesty; telling the truth" },
    { id: 11, front: "Justice", back: "Ethical principle: Fair and equal treatment for all clients" },
    { id: 12, front: "Negligence", back: "Unintentional tort: Failure to provide standard of care" },
    { id: 13, front: "Sublimation", back: "HEALTHY defense: Substituting acceptable activity for unacceptable impulse (angry person works out)" },
    { id: 14, front: "Displacement", back: "Defense mechanism: Shifting feelings to less threatening object (kick dog after boss yells)" },
    { id: 15, front: "Reaction Formation", back: "Defense mechanism: Doing the opposite of what is felt (dislike neighbor but bake them cookies)" },
    { id: 16, front: "Projection", back: "Defense mechanism: Attributing own thoughts to others (cheating spouse accuses partner of cheating)" },
    { id: 17, front: "Splitting", back: "Defense mechanism: Seeing people as ALL good or ALL bad - RED FLAG for Borderline PD" },
    { id: 18, front: "Rationalization", back: "Defense mechanism: Creating logical explanations for unacceptable outcomes" },
    { id: 19, front: "Mild Anxiety", back: "Everyday stress; INCREASES focus and learning; slight restlessness - ADAPTIVE" },
    { id: 20, front: "Moderate Anxiety", back: "Selective inattention; learning hampered but possible; somatic symptoms (headache)" },
    { id: 21, front: "Severe Anxiety", back: "Distorted perception; learning IMPOSSIBLE; hyperventilation; sense of doom" },
    { id: 22, front: "Panic Level Anxiety", back: "Lost touch with reality; possible hallucinations; immobility or flight - STAY WITH CLIENT" },
    { id: 23, front: "Restraint Time Limits", back: "Adults: 4 hours | Ages 9-17: 2 hours | Under 9: 1 hour" },
    { id: 24, front: "Restraint Documentation Frequency", back: "Every 15-30 minutes: Check circulation, food/fluids, toileting, behavior" },
    { id: 25, front: "Transference", back: "Client projects past relationship feelings onto nurse ('You act just like my mother')" },
    { id: 26, front: "Countertransference", back: "Nurse projects past relationship feelings onto client - requires self-reflection" },
    { id: 27, front: "Milieu Therapy", back: "Structuring the environment (people, resources, setting) to be therapeutic and safe" },
    { id: 28, front: "Enmeshed Boundaries", back: "Family dysfunction: Thoughts/roles blend; no independence; over-involvement" },
    { id: 29, front: "Rigid Boundaries", back: "Family dysfunction: Isolation; no sharing of feelings; emotional distance" },
    { id: 30, front: "Triangulation", back: "Two people pull in third party to stabilize conflict (parent-child vs other parent)" },
    { id: 31, front: "Scapegoating", back: "Blaming member with least power (usually child) for family problems" },
    { id: 32, front: "Id (Freud)", back: "Pleasure principle; instincts; 'I want it NOW' - primitive, unconscious" },
    { id: 33, front: "Ego (Freud)", back: "Reality principle; balances Id and Superego; conscious mediator" },
    { id: 34, front: "Superego (Freud)", back: "Moral compass/conscience; 'It's wrong to do that'; internalized rules" },
    { id: 35, front: "Affect", back: "OBJECTIVE, visible expression of mood (e.g., flat, blunted, labile)" },
    { id: 36, front: "Mood", back: "SUBJECTIVE internal emotion - what client SAYS they feel" },
    { id: 37, front: "Tangentiality", back: "Speech that wanders from topic and NEVER returns" },
    { id: 38, front: "Flight of Ideas", back: "Rapid shifting of topics WITH a connection between them" },
    { id: 39, front: "Word Salad", back: "Jumble of meaningless words - seen in Schizophrenia" },
    { id: 40, front: "Neologism", back: "Made-up words with meaning only to the client" },
    { id: 41, front: "Systematic Desensitization", back: "Behavioral therapy for phobias using GRADUAL exposure" },
    { id: 42, front: "Flooding", back: "Immediate, FULL exposure to phobia stimulus" },
    { id: 43, front: "ECT (Electroconvulsive Therapy)", back: "Induces seizure for treatment-resistant depression" },
    { id: 44, front: "DBS (Deep Brain Stimulation)", back: "Implanted electrodes for OCD/Parkinson's" },
    { id: 45, front: "Maslow's Hierarchy (Order)", back: "Physiological → Safety → Love/Belonging → Esteem → Self-Actualization" },
    { id: 46, front: "Diazepam (Valium) - Class & Action", back: "Benzodiazepine: Enhances GABA to calm CNS; used for acute anxiety/panic" },
    { id: 47, front: "Diazepam (Valium) - Red Flags", back: "Respiratory depression, sedation/fall risk, tolerance/dependence; Antidote: FLUMAZENIL" },
    { id: 48, front: "Haloperidol (Haldol) - Class & Use", back: "Typical/First-Gen Antipsychotic: Used for acute psychosis and agitation" },
    { id: 49, front: "EPS (Extrapyramidal Symptoms)", back: "Antipsychotic side effects: Dystonia, Akathisia, Pseudoparkinsonism" },
    { id: 50, front: "NMS (Neuroleptic Malignant Syndrome)", back: "MEDICAL EMERGENCY: High fever + muscle rigidity + altered consciousness - STOP MED" },
    { id: 51, front: "Tardive Dyskinesia", back: "IRREVERSIBLE tongue/facial movements from long-term antipsychotic use" },
    { id: 52, front: "TSH - Mental Health Significance", back: "Hyperthyroid mimics Mania/Anxiety; Hypothyroid mimics Depression (Normal: 0.4-4.0 mU/L)" },
    { id: 53, front: "#1 Cause of Acute Confusion in Older Adults", back: "UTI (Urinary Tract Infection) - always check urinalysis!" },
    { id: 54, front: "Resilience", back: "Ability to adapt and cope with stress" }
  ],

  labValues: [
    {
      name: "TSH (Thyroid Stimulating Hormone)",
      normalRange: "0.4 - 4.0 mU/L",
      criticalValues: "< 0.1 or > 10 mU/L",
      nursingConsiderations: "ALWAYS check before psych diagnosis. Hyperthyroid mimics mania/anxiety. Hypothyroid mimics depression. Rule out medical cause first."
    },
    {
      name: "Urinalysis (C&S)",
      normalRange: "Negative for bacteria/WBCs",
      criticalValues: "Positive culture with symptoms",
      nursingConsiderations: "UTI is #1 cause of acute confusion/delirium in older adults. Always obtain UA for sudden mental status changes."
    },
    {
      name: "Toxicology Screen",
      normalRange: "Negative",
      criticalValues: "Positive for any substance",
      nursingConsiderations: "Rule out substance-induced psychosis. Meth, cocaine, alcohol withdrawal can all cause psychiatric symptoms."
    },
    {
      name: "Sodium (Na+)",
      normalRange: "135 - 145 mEq/L",
      criticalValues: "< 120 or > 160 mEq/L",
      nursingConsiderations: "Hyponatremia causes confusion, seizures, mental status changes. Can occur with SIADH from some psych meds."
    }
  ],

  medications: [
    {
      name: "Diazepam",
      brandName: "Valium",
      drugClass: "Benzodiazepine (Anxiolytic)",
      mechanism: "Enhances GABA (inhibitory neurotransmitter) to calm CNS",
      uses: ["Acute anxiety", "Panic attacks", "Aggressive behavior (chemical restraint)", "Alcohol withdrawal"],
      nursingConsiderations: [
        "Monitor respiratory rate and O2 saturation - respiratory depression risk",
        "Assess for sedation and implement fall precautions",
        "Short-term use only - tolerance and dependence develop quickly",
        "Do not stop abruptly - taper to prevent withdrawal seizures",
        "Avoid in older adults if possible (Beers Criteria)"
      ],
      sideEffects: ["Sedation/drowsiness", "Respiratory depression", "Hypotension", "Confusion (especially elderly)"],
      antidote: "Flumazenil",
      patientTeaching: "Avoid alcohol and other CNS depressants. Do not drive or operate machinery. Do not stop suddenly."
    },
    {
      name: "Haloperidol",
      brandName: "Haldol",
      drugClass: "Typical/First-Generation Antipsychotic",
      mechanism: "Blocks dopamine (D2) receptors in the brain",
      uses: ["Acute psychosis", "Severe agitation", "Schizophrenia", "Tourette syndrome"],
      nursingConsiderations: [
        "Monitor for EPS: dystonia, akathisia, pseudoparkinsonism",
        "Watch for NMS: fever + rigidity + altered LOC = STOP MED, call provider",
        "Assess for tardive dyskinesia (irreversible)",
        "Monitor QT interval - can cause cardiac arrhythmias",
        "Give IM for acute agitation; PO for maintenance"
      ],
      sideEffects: ["EPS (dystonia, akathisia)", "Tardive dyskinesia", "NMS", "QT prolongation", "Sedation"],
      antidote: "Benztropine (Cogentin) or Diphenhydramine for EPS; Dantrolene for NMS",
      patientTeaching: "Report muscle stiffness, tremors, or involuntary movements immediately. Avoid alcohol. May cause drowsiness."
    }
  ],

  criticalPoints: [
    {
      title: "Involuntary ≠ Incompetent",
      content: "Involuntary admission does NOT mean the client is incompetent. They can still refuse medications. A SEPARATE court hearing is needed to declare incompetence and appoint a guardian."
    },
    {
      title: "Least Restrictive First",
      content: "Intervention order: Verbal de-escalation → Diversion → PRN Meds → Seclusion → Restraints. Always document less restrictive measures tried."
    },
    {
      title: "Rule Out Medical First",
      content: "Physical causes can mimic psychiatric symptoms. Always check: TSH (thyroid), UA (UTI), Tox screen, Electrolytes BEFORE assuming psychiatric diagnosis."
    },
    {
      title: "Teaching Fails at Panic",
      content: "Learning is IMPOSSIBLE at severe and panic levels of anxiety. Use simple directives, reduce stimulation, STAY with client. Save teaching for mild/moderate anxiety."
    },
    {
      title: "NMS is an Emergency",
      content: "High fever + muscle rigidity + altered consciousness in a client on antipsychotics = Neuroleptic Malignant Syndrome. STOP the medication. This is life-threatening."
    }
  ]
};

// Make data available globally
if (typeof module !== 'undefined' && module.exports) {
  module.exports = studyData;
}
