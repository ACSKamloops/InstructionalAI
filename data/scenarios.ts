import { ToolType, Scenario } from '../types';

export const SCENARIOS: Record<ToolType, Scenario[]> = {
    [ToolType.REMIX]: [
        { 
            id: 'salmon', 
            label: 'Scenario: Salmon Cycle (Gr 4 Science)', 
            teacherStory: "Students reading at a Grade 2 level need to access this DFO article without losing the scientific terminology required by the curriculum.",
            data: { 
                grade: 'Grade 4 Reading Level', 
                text: 'Sockeye salmon (Oncorhynchus nerka) are anadromous, meaning they hatch in freshwater, migrate to the Pacific Ocean, and return to spawn. In the Fraser River watershed, fry spend up to a year in lakes before migrating as smolts. Upon maturation, they navigate via magnetoreception back to their natal streams. The females utilize their caudal fins to excavate redds in the gravel substrate.',
                terms: 'Anadromous, Smolt, Redd, Spawn',
                translationMode: 'academic_vernacular'
            } 
        },
        { 
            id: 'fur_trade', 
            label: 'Scenario: The Fur Trade (Gr 7 History)', 
            teacherStory: "Teaching the impact of the HBC monopoly. Students struggle with the textbook's dense phrasing about economic systems.",
            data: { 
                grade: 'Grade 7', 
                text: 'The Hudson\'s Bay Company established a mercantilist monopoly over the Rupert\'s Land basin, fundamentally altering Indigenous economic systems. This corporate hegemony relied on the extraction of beaver pelts for European markets, creating a dependency cycle that eroded traditional sovereignty and enforced a barter system heavily weighted in favor of colonial goods.',
                terms: 'Monopoly, Sovereignty, Barter, Hegemony',
                translationMode: 'academic_vernacular'
            } 
        },
        { 
            id: 'macbeth', 
            label: 'Scenario: Macbeth (Gr 10 English)', 
            teacherStory: "Introducing Shakespeare. Teacher wants a side-by-side translation so students can bridge the archaic language to modern meaning.",
            data: { 
                grade: 'Gen-Z / Modern English', 
                text: 'Is this a dagger which I see before me, The handle toward my hand? Come, let me clutch thee. I have thee not, and yet I see thee still. Art thou not, fatal vision, sensible To feeling as to sight? or art thou but A dagger of the mind, a false creation, Proceeding from the heat-oppressed brain?',
                terms: 'Heat-oppressed brain, Fatal vision, Palpable',
                translationMode: 'academic_vernacular'
            } 
        },
        { 
            id: 'geometry', 
            label: 'Scenario: Geometric Proofs (Gr 9 Math)', 
            teacherStory: "A student who 'hates math' needs to understand the Pythagorean theorem. The textbook definition is too abstract.",
            data: { 
                grade: 'Grade 9 (Concrete Analogy)', 
                text: 'In a right-angled triangle, the square of the hypotenuse is equal to the sum of the squares of the other two sides. This fundamental theorem establishes the relationship between the legs and the hypotenuse in Euclidean geometry, forming the basis for trigonometric ratios.',
                terms: 'Hypotenuse, Leg, Right Angle, Square',
                translationMode: 'academic_vernacular'
            } 
        },
        {
            id: 'climate_science',
            label: 'Scenario: Climate Science Report (Gr 11 Science)',
            teacherStory: "Students are preparing policy recommendations. They need to understand IPCC summary language to cite it properly.",
            data: {
                grade: 'Grade 11 (Policy Brief Level)',
                text: 'Global surface temperature has increased faster since 1970 than in any other 50-year period over at least the last 2000 years. Continued global warming is projected to further intensify the global water cycle, including its variability, global monsoon precipitation, and the severity of wet and dry events. It is unequivocal that human influence has warmed the atmosphere, ocean and land.',
                terms: 'Unequivocal, Projected, Global water cycle, Anthropogenic',
                translationMode: 'academic_vernacular'
            }
        },
        {
            id: 'tenant_rights',
            label: 'Scenario: Legal Rights Document (Adult Ed)',
            teacherStory: "Adult learners need to understand their tenant rights but the legal language is inaccessible.",
            data: {
                grade: 'Plain Language (Adult Literacy)',
                text: 'The landlord shall not terminate a tenancy except in accordance with this Act. A landlord who terminates a tenancy shall do so in good faith. A landlord may not unreasonably withhold consent to the assignment or sublease of a rental unit. The burden of proof that the landlord acted in bad faith is on the tenant.',
                terms: 'Terminate, Good faith, Assignment, Burden of proof',
                translationMode: 'legal_operational'
            }
        },
        {
            id: 'medical_consent',
            label: 'Scenario: Medical Consent Form (Health)',
            teacherStory: "Health class is studying patient rights. Students need to understand what they're signing when they consent to procedures.",
            data: {
                grade: 'Grade 10 (Health Literacy)',
                text: 'I acknowledge that I have been informed of the potential risks, complications, and alternatives to the proposed surgical intervention. These include but are not limited to: infection, hemorrhage, adverse reaction to anesthesia, and the possibility of further surgical intervention. I understand that no guarantees have been made regarding the outcome of this procedure.',
                terms: 'Hemorrhage, Intervention, Adverse reaction, Prognosis',
                translationMode: 'legal_operational'
            }
        },
        {
            id: 'compound_interest',
            label: 'Scenario: Financial Literacy (Gr 10 Math)',
            teacherStory: "Students are learning about savings and loans but struggle with the mathematical explanation of compound interest.",
            data: {
                grade: 'Grade 10 (Real-world application)',
                text: 'Compound interest is calculated on the initial principal and also on the accumulated interest of previous periods. The formula A = P(1 + r/n)^(nt) determines the future value where P is principal, r is the annual interest rate, n is the number of times interest is compounded per year, and t is time in years.',
                terms: 'Principal, Compound, Interest rate, Future value',
                translationMode: 'technical_narrative'
            }
        },
        {
            id: 'kant_ethics',
            label: 'Scenario: Philosophy Text (Gr 12 Philosophy)',
            teacherStory: "Introducing Kant's ethics. Students need to grasp the categorical imperative before discussing modern ethical dilemmas.",
            data: {
                grade: 'Grade 12 (Accessible Philosophy)',
                text: 'Act only according to that maxim whereby you can at the same time will that it should become a universal law. This categorical imperative demands that moral actions be universalizable—that one could rationally will all persons to act on the same principle without logical contradiction.',
                terms: 'Maxim, Categorical imperative, Universalizable, Rational will',
                translationMode: 'academic_vernacular'
            }
        },
        {
            id: 'electrical_code',
            label: 'Scenario: Technical Manual (Trades)',
            teacherStory: "Electrical apprentices need to understand code requirements but the technical language is dense.",
            data: {
                grade: 'Apprentice Level',
                text: 'All conductors of the same circuit shall be contained within the same raceway, cable, or trench. Where single conductors are installed, all phase conductors and the neutral conductor shall be grouped together to minimize inductance. Branch circuit conductors shall have an ampacity not less than the maximum load to be served.',
                terms: 'Conductor, Raceway, Ampacity, Inductance',
                translationMode: 'technical_narrative'
            }
        },
        {
            id: 'research_abstract',
            label: 'Scenario: Scientific Paper (University Prep)',
            teacherStory: "Grade 12 students preparing for university need to learn to read peer-reviewed research abstracts.",
            data: {
                grade: 'University Prep',
                text: 'This meta-analysis synthesizes findings from 47 longitudinal studies (N=12,847) examining the correlation between sleep duration and academic performance in adolescents. Results indicate a statistically significant positive correlation (r=0.38, p<.001) between adequate sleep (7-9 hours) and GPA. Heterogeneity analysis revealed moderating effects of socioeconomic status and screen time.',
                terms: 'Meta-analysis, Longitudinal, Correlation coefficient, Heterogeneity, Moderating effects',
                translationMode: 'academic_vernacular'
            }
        },
    ],
    [ToolType.INTEREST_SKIN]: [
        {
            id: 'dirt_bike',
            label: 'Scenario: Dirt Biking (Math - Slope)',
            teacherStory: "Student loves riding at the bike park near the creek. He disengages from worksheet math.",
            data: {
                topic: 'Slope as Rise over Run',
                interest: 'Building a practice ramp at the local bike park',
                problem: 'We need to build a tabletop jump. It rises 2 meters over a run of 6 meters. What is the slope? If we want a steeper launch (0.5 slope), how much run do we need?'
            }
        },
        {
            id: 'food_sovereignty',
            label: 'Scenario: Community Garden (Math - Area)',
            teacherStory: "Connecting math curriculum to the new community garden project.",
            data: {
                topic: 'Area of Composite Shapes',
                interest: 'Building raised cedar planter beds for community gardens',
                problem: 'We are building "L" shaped beds for vegetables and herbs. Calculate the total soil needed based on these dimensions: Long side 8ft, short side 4ft, width 2ft.'
            }
        },
        {
            id: 'fortnite',
            label: 'Scenario: Game Ecosystem (Science)',
            teacherStory: "Using a game map to explain ecological relationships to Grade 6s.",
            data: {
                topic: 'Predator/Prey Relationships',
                interest: 'Fortnite Battle Royale Map',
                problem: 'If all the "Wolves" (Predators) are eliminated from the Weeping Woods, what happens to the population of "Boars" (Prey)? How does this affect the "Shield Mushrooms" (Producers) they eat?'
            }
        },
        {
            id: 'tiktok',
            label: 'Scenario: Anti-Vaping Campaign (English)',
            teacherStory: "Grade 8 Health/English unit. Students need to use rhetorical devices in a medium they actually watch.",
            data: {
                topic: 'Rhetorical Devices (Ethos, Pathos, Logos)',
                interest: 'Becoming a Viral Content Creator',
                problem: 'Script a 60-second video convincing classmates to stop vaping. Use Ethos (cite a credible source), Pathos (emotional story), and Logos (one impactful statistic).'
            }
        },
        {
            id: 'basketball_analytics',
            label: 'Scenario: Basketball Analytics (Statistics)',
            teacherStory: "Student is obsessed with basketball stats but zones out during statistics lessons.",
            data: {
                topic: 'Plus/Minus Calculations and Statistical Analysis',
                interest: 'Analyzing NBA player performance like a sports analyst',
                problem: 'Player A scores 18 points but their team is -12 when they\'re on court. Player B scores 8 points but their team is +15. Who contributes more to winning? How do we measure true impact versus raw scoring?'
            }
        },
        {
            id: 'music_production',
            label: 'Scenario: Music Production (Physics)',
            teacherStory: "Student wants to produce beats but doesn't see the connection to physics class.",
            data: {
                topic: 'Sound Wave Frequency and Amplitude',
                interest: 'Creating beats and understanding audio production',
                problem: 'The bass in your track is at 60Hz but sounds muddy. Your hi-hats are at 8000Hz but too quiet. Explain why changing frequency affects perceived pitch and why amplitude changes affect volume. What happens when two frequencies are close together (beat frequency)?'
            }
        },
        {
            id: 'cooking_chemistry',
            label: 'Scenario: Cooking Chemistry (Science)',
            teacherStory: "Student loves baking but thinks chemistry is boring and irrelevant.",
            data: {
                topic: 'Maillard Reaction and Caramelization',
                interest: 'Perfecting their signature cookies and steaks',
                problem: 'Why does bread crust turn brown but not the inside? Why does a steak seared at 450 degrees taste different from one cooked at 250 degrees? What is the minimum temperature for browning to occur, and why does adding baking soda speed it up?'
            }
        },
        {
            id: 'skateboarding',
            label: 'Scenario: Skateboarding (Physics)',
            teacherStory: "Student spends all free time at the skate park but struggles with physics concepts.",
            data: {
                topic: 'Angular Momentum and Center of Gravity',
                interest: 'Landing kickflips and 360 spins consistently',
                problem: 'Why do you pull your arms in when spinning (like a kickflip rotation)? How does crouching affect your center of gravity? If you spin with arms out vs. arms tucked, which completes the rotation faster and why?'
            }
        },
        {
            id: 'fashion_design',
            label: 'Scenario: Fashion Design (Geometry)',
            teacherStory: "Student dreams of fashion design but doesn't see why geometry matters.",
            data: {
                topic: 'Pattern Making and Symmetry',
                interest: 'Designing and creating their own clothing line',
                problem: 'A dress pattern needs to fit a 36 inch bust, 28 inch waist, and 38 inch hip. Calculate the dart angles needed to take in fabric at the waist. If you are adding a circular skirt with a 24 inch waist opening, what radius do you cut for the waist hole?'
            }
        },
        {
            id: 'automotive',
            label: 'Scenario: Automotive (Algebra)',
            teacherStory: "Student is in the automotive program but struggles with the math behind engine performance.",
            data: {
                topic: 'Gear Ratios and Torque Calculations',
                interest: 'Understanding what makes a car fast and powerful',
                problem: 'A car has a 3.73:1 rear axle ratio and a first gear ratio of 4.2:1. If the engine produces 300 lb-ft of torque, what is the torque at the wheels in first gear? How does changing to a 4.10:1 axle affect acceleration vs. top speed?'
            }
        },
        {
            id: 'social_media_algorithms',
            label: 'Scenario: Social Media (Data Science)',
            teacherStory: "Student is always on social media but doesn't understand how the algorithms work.",
            data: {
                topic: 'Recommendation Systems and Basic Machine Learning',
                interest: 'Understanding why certain content shows up on their feed',
                problem: 'If you watch 10 cooking videos and 2 gaming videos, the algorithm assigns weights: Cooking=0.8, Gaming=0.2. After you watch 5 more gaming videos, how do the weights change? What data points does the algorithm use besides watch time?'
            }
        },
    ],
    [ToolType.METAPHOR_MAPPER]: [
        {
            id: 'immune_hockey',
            label: 'Scenario: Immune System (Biology)',
            teacherStory: "Teaching Grade 11 Biology. Students memorize the terms (T-Cells, Antigens) but don't understand the *function*. Most of the class plays hockey.",
            data: {
                target: 'The Human Immune System',
                base: 'A Hockey Team (Defense Strategy)',
                strictness: 'strict',
                includesFriction: true
            }
        },
        {
            id: 'cell_city',
            label: 'Scenario: Cell Biology (Science)',
            teacherStory: "Grade 8 Science. Need to explain cell organelles. Students are familiar with how municipal government works.",
            data: {
                target: 'Plant Cell Organelles',
                base: 'A City Government and Infrastructure',
                strictness: 'loose',
                includesFriction: true
            }
        },
        {
            id: 'democracy_ecosystem',
            label: 'Scenario: Democracy & Ecosystem (Political Science)',
            teacherStory: "Grade 12 students are studying political systems but struggle with abstract concepts of balance of power.",
            data: {
                target: 'Democratic Government (Checks and Balances)',
                base: 'A Forest Ecosystem (Predator-Prey Balance)',
                strictness: 'strict',
                includesFriction: true
            }
        },
        {
            id: 'networks_circulatory',
            label: 'Scenario: Computer Networks & Circulation (Tech/Biology)',
            teacherStory: "Computer Science students need to understand network architecture. Biology knowledge can serve as a bridge.",
            data: {
                target: 'Computer Network Architecture (Routers, Packets, Protocols)',
                base: 'Human Circulatory System (Heart, Blood Cells, Arteries)',
                strictness: 'strict',
                includesFriction: true
            }
        },
        {
            id: 'markets_weather',
            label: 'Scenario: Markets & Weather (Economics)',
            teacherStory: "Economics students struggle with market volatility concepts. Weather patterns provide a familiar reference.",
            data: {
                target: 'Economic Market Systems (Supply, Demand, Price Fluctuations)',
                base: 'Weather Systems (Pressure, Temperature, Storm Formation)',
                strictness: 'loose',
                includesFriction: true
            }
        },
        {
            id: 'orchestra_software',
            label: 'Scenario: Orchestra & Software Team (Arts/Tech)',
            teacherStory: "Teaching software development methodology. Students with music backgrounds can leverage their knowledge.",
            data: {
                target: 'Software Development Team (Developers, QA, Product Manager)',
                base: 'Symphony Orchestra (Musicians, Conductor, Composer)',
                strictness: 'strict',
                includesFriction: true
            }
        },
    ],
    [ToolType.BLIND_SPOT]: [
        {
            id: 'dam_essay',
            label: 'Scenario: Hydro Dam Essay (Social Studies)',
            teacherStory: "Grade 10 Social Studies. Students are writing about hydroelectric power. Their drafts focus entirely on economic benefits.",
            data: {
                topic: 'The Economic Benefits of Hydroelectric Dams',
                text: 'Hydroelectric dams provide clean energy for thousands of homes and create jobs during construction. They contribute to the province\'s GDP and allow for energy export.',
                perspectives: 'Ecological Impact, Community Displacement, Long-term Infrastructure Costs, Alternative Energy Comparison',
                intensity: 'moderate'
            }
        },
        {
            id: 'ai_policy',
            label: 'Scenario: School AI Policy (Leadership)',
            teacherStory: "Leadership students drafting a policy on AI use. They focus on 'cheating' but miss privacy and equity issues.",
            data: {
                topic: 'Rules for AI in Class',
                text: 'Students should not use AI to write essays because it is cheating. If they use it, they will get a zero.',
                perspectives: 'Data Privacy, Skill Development Impact, Equity of Access, Preparation for Future Workforce',
                intensity: 'moderate'
            }
        },
        {
            id: 'automation_employment',
            label: 'Scenario: Automation & Employment (Economics)',
            teacherStory: "Grade 12 Economics. Student essay argues automation will create more jobs than it eliminates.",
            data: {
                topic: 'Automation and the Future of Work',
                text: 'Automation will create more jobs than it destroys. History shows that technology always leads to new industries. Workers just need to learn new skills. Companies become more efficient, leading to lower prices and more consumer spending.',
                perspectives: 'Transition Period Impacts, Geographic Distribution of Jobs, Income Inequality, Skill Gap Timeline, Social Safety Nets',
                intensity: 'rigorous'
            }
        },
        {
            id: 'social_media_mental_health',
            label: 'Scenario: Social Media & Mental Health (Psychology)',
            teacherStory: "Psychology class. Student argues social media is entirely harmful to teen mental health.",
            data: {
                topic: 'Social Media Impact on Teen Mental Health',
                text: 'Social media causes depression and anxiety in teenagers. Studies show increased rates of mental health issues since smartphones became common. We should ban social media for anyone under 18.',
                perspectives: 'Correlation vs. Causation, Positive Uses (Community, Identity), Enforcement Practicality, Alternative Factors, Youth Agency',
                intensity: 'rigorous'
            }
        },
        {
            id: 'urban_development',
            label: 'Scenario: Urban Development (Urban Planning)',
            teacherStory: "Civics class. Student proposal advocates for converting a park into affordable housing.",
            data: {
                topic: 'Converting Green Space to Affordable Housing',
                text: 'The city should build affordable housing on the underused park downtown. There is a housing crisis and we need to prioritize people over empty grass. The units would house 200 families.',
                perspectives: 'Mental Health Benefits of Green Space, Environmental Services (Cooling, Drainage), Community Gathering Function, Alternative Sites, Long-term Urban Planning',
                intensity: 'moderate'
            }
        },
        {
            id: 'healthcare_policy',
            label: 'Scenario: Healthcare Policy (Public Health)',
            teacherStory: "Health class. Student argues for mandatory vaccination policies with no exceptions.",
            data: {
                topic: 'Mandatory Vaccination Policies',
                text: 'All students should be required to be vaccinated to attend school with no exceptions. Vaccines are safe and protect the community. Parents who refuse are putting everyone at risk.',
                perspectives: 'Medical Exemption Necessity, Religious/Philosophical Considerations, Public Health vs. Individual Rights, Education Access Implications, Historical Context',
                intensity: 'gentle'
            }
        },
    ],
    [ToolType.SYNTAX_SCAFFOLDER]: [
        {
            id: 'transitive_verbs',
            label: 'Scenario: Transitive Verbs',
            teacherStory: "Language instructors are teaching the rule for 'Doing something TO something' (Transitive). Students need practice scenarios to work with the specific structure.",
            data: {
                rule: 'Transitive Verbs (Subject acts on Object)',
                context: 'Fishing at the river',
                difficulty: 'Beginner',
                structure: 'Subject + Verb + Direct Object'
            }
        },
        {
            id: 'command_form',
            label: 'Scenario: Command/Imperative Form',
            teacherStory: "Practice for Imperative/Command forms. Context: Kitchen/Cooking.",
            data: {
                rule: 'Imperative / Commands (Telling someone to do something)',
                context: 'Cooking a meal in the kitchen',
                difficulty: 'Intermediate',
                structure: 'Verb + Object (implied subject)'
            }
        },
        {
            id: 'possessive_forms',
            label: 'Scenario: Possessive Forms',
            teacherStory: "Students need to practice expressing ownership and relationships. Context: Family and belongings.",
            data: {
                rule: 'Possessive Forms (Expressing ownership or relationship)',
                context: 'Family gathering and introducing relatives',
                difficulty: 'Beginner',
                structure: 'Possessor + Possessed item/person'
            }
        },
        {
            id: 'conditional_statements',
            label: 'Scenario: Conditional Statements',
            teacherStory: "Advanced learners working on 'if-then' constructions in planning contexts.",
            data: {
                rule: 'Conditional Statements (If X happens, then Y)',
                context: 'Planning a camping trip and preparing for weather',
                difficulty: 'Advanced',
                structure: 'Condition clause + Result clause'
            }
        },
        {
            id: 'location_description',
            label: 'Scenario: Location/Direction',
            teacherStory: "Practice describing where things are or giving directions.",
            data: {
                rule: 'Locative Expressions (Where something is, direction of movement)',
                context: 'Navigating around the community and giving directions',
                difficulty: 'Intermediate',
                structure: 'Subject + Location marker + Place'
            }
        },
    ],
    [ToolType.PROJECT_BREAKER]: [
        {
            id: 'science_fair',
            label: 'Scenario: Science Fair (Gr 7)',
            teacherStory: "Student has difficulty with executive function and freezes when they see the word 'Project'. Needs granular steps.",
            data: {
                task: 'Design and carry out an experiment using the scientific method, create a display board, and present at the school fair on March 15.',
                time: '4 weeks',
                domains: 'Technical, Regulatory, Community',
                riskTolerance: 'low'
            }
        },
        {
            id: 'capstone',
            label: 'Scenario: Capstone Project (Gr 12)',
            teacherStory: "The 30-hour volunteer requirement feels overwhelming to students.",
            data: {
                task: 'Career Life Connections (CLC) Capstone: 30 Hours of Volunteering + Reflection Paper + Final Presentation.',
                time: 'Semester',
                domains: 'Community, Technical',
                riskTolerance: 'medium'
            }
        },
        {
            id: 'novel_study',
            label: 'Scenario: Novel Study (Gr 5)',
            teacherStory: "Breaking down a book report into nightly reading goals.",
            data: {
                task: 'Read "The Barren Grounds", complete a character map, and write a one-page summary.',
                time: '3 weeks',
                domains: 'Technical',
                riskTolerance: 'low'
            }
        },
        {
            id: 'short_film',
            label: 'Scenario: Short Film (Gr 10)',
            teacherStory: "A documentary project about their community. Students need to manage creative and technical aspects.",
            data: {
                task: 'Create a 3-minute documentary about "My Home". Includes storyboarding, filming B-roll, and editing.',
                time: '2 weeks',
                domains: 'Technical, Community',
                riskTolerance: 'medium'
            }
        },
        {
            id: 'business_plan',
            label: 'Scenario: Community Business Plan (Entrepreneurship)',
            teacherStory: "Student wants to start a small business but doesn't know where to begin with planning.",
            data: {
                task: 'Develop a business plan for a summer lawn care service including: market research, startup costs, pricing strategy, marketing plan, and projected revenue.',
                time: '6 weeks',
                domains: 'Financial, Regulatory, Community, Technical',
                riskTolerance: 'medium'
            }
        },
        {
            id: 'research_thesis',
            label: 'Scenario: Research Thesis (University Prep)',
            teacherStory: "Grade 12 student preparing an extended essay for university applications. The scope is overwhelming.",
            data: {
                task: 'Write a 4000-word research paper on a topic of choice including: thesis development, literature review, methodology, analysis, and proper citations (minimum 15 sources).',
                time: '8 weeks',
                domains: 'Technical, Regulatory',
                riskTolerance: 'low'
            }
        },
        {
            id: 'school_conference',
            label: 'Scenario: School Conference (Leadership)',
            teacherStory: "Student council is organizing a one-day leadership conference for 100 students from regional schools.",
            data: {
                task: 'Plan and execute a one-day student leadership conference including: venue booking, speaker recruitment, registration system, catering, schedule, and volunteer coordination.',
                time: '3 months',
                domains: 'Community, Financial, Regulatory, Technical',
                riskTolerance: 'high'
            }
        },
        {
            id: 'portfolio_development',
            label: 'Scenario: Portfolio Development (Career Prep)',
            teacherStory: "Student needs to create a professional portfolio for post-secondary applications or job hunting.",
            data: {
                task: 'Build a comprehensive portfolio including: resume, cover letter template, work samples (5 pieces), digital portfolio website, and professional social media presence.',
                time: '4 weeks',
                domains: 'Technical, Community',
                riskTolerance: 'low'
            }
        },
    ],
    [ToolType.RUBRIC_ARCHITECT]: [
        {
            id: 'oral_story',
            label: 'Scenario: Oral Storytelling (Gr 6)',
            teacherStory: "Assessing oral language protocols without using academic jargon.",
            data: {
                criteria: 'Demonstrates oratorical proficiency and cultural adherence.',
                critique: 'Too academic for a 12-year-old.',
                fix: 'I can tell the story clearly so everyone hears. / I can say who gave me this story.'
            }
        },
        {
            id: 'chemistry',
            label: 'Scenario: Chemistry Lab (Gr 11)',
            teacherStory: "Ensuring students understand the *why* of the experiment, not just following recipe steps.",
            data: {
                criteria: 'Properly hypothesizes stoichiometric ratios.',
                critique: 'Confusing language.',
                fix: 'I can predict exactly how much product I will get using math (ratios).'
            }
        },
        {
            id: 'sel',
            label: 'Scenario: SEL (Gr 4)',
            teacherStory: "Self-regulation goals for a student with behavioral challenges.",
            data: {
                criteria: 'Exhibits self-regulation strategies during conflict.',
                critique: 'A 9-year-old does not know what that means.',
                fix: 'When I feel hot/angry, I take a deep breath or walk away instead of yelling.'
            }
        },
        {
            id: 'art',
            label: 'Scenario: Visual Arts (Gr 8)',
            teacherStory: "Assessing depth and space in drawing.",
            data: {
                criteria: 'Utilizes negative space and perspective effectively.',
                critique: 'Too technical.',
                fix: 'I used the whole paper (no empty corners). / My drawing shows what is close and what is far away.'
            }
        }
    ],
    [ToolType.DIFFICULT_EMAIL]: [
        {
            id: 'ghost_student',
            label: 'Scenario: The Ghost Student',
            teacherStory: "Grade 8 student, usually engaged, hasn't come for 2 weeks. Family recently moved. Teacher is worried but burnt out.",
            data: {
                situation: 'Student has not shown up in 2 weeks. I am worried they are falling behind, but I don\'t want to sound like I am scolding them.',
                persona: 'The Compassionate Connector'
            }
        },
        {
            id: 'plagiarism',
            label: 'Scenario: The AI Use Incident',
            teacherStory: "Night before report cards. Student used AI for their essay. Teacher feels disrespected but wants to use it as a learning moment.",
            data: {
                situation: 'Student used AI to write their whole essay. It is obvious. I need them to redo it, but I want to offer help, not just a zero.',
                persona: 'The Digital Mentor'
            }
        },
        {
            id: 'failing_grade',
            label: 'Scenario: The Failing Grade',
            teacherStory: "Parent has previously accused the school of not supporting their child. Data-driven but warm approach needed.",
            data: {
                situation: 'Student failed the math unit test (42%). Parent is demanding and defensive. I need to outline 2 specific things we can do to help.',
                persona: 'The Partner in Success'
            }
        },
        {
            id: 'behavior',
            label: 'Scenario: Behavioral Outburst',
            teacherStory: "Student has known history of challenges. There was a loud noise in the hall before they had an outburst.",
            data: {
                situation: 'Student had an outburst and walked out of class today. I want to check in on them and set up a re-entry meeting when they are ready.',
                persona: 'The Trauma-Informed Regulator'
            }
        }
    ],
    [ToolType.DEEP_DIVER]: [
        {
            id: 'default_deep',
            label: 'Standard Behavioral Scenario',
            teacherStory: "A complex behavioral incident requiring analysis beyond immediate reaction.",
            data: { 
                scenario: "A Grade 9 student, usually quiet, suddenly flipped a desk and yelled 'This whole system is rigged!' after receiving a C- on his History essay.",
                mode: 'slow'
            }
        },
        {
            id: 'academic_integrity',
            label: 'Scenario: Academic Integrity Investigation',
            teacherStory: "A complex situation where two students submitted nearly identical lab reports. Both claim to have worked independently.",
            data: {
                scenario: "Two high-achieving students, best friends, submitted lab reports with identical methodology descriptions and similar data analysis. Both are in the running for academic awards. When questioned separately, both claim they didn't share work. One student's parent is on the school board.",
                mode: 'slow'
            }
        },
        {
            id: 'conflict_resolution',
            label: 'Scenario: Peer Conflict Resolution',
            teacherStory: "Two students with history of conflict. Latest incident involves social media posts that have divided the class.",
            data: {
                scenario: "Student A posted a TikTok mocking Student B's presentation. Student B retaliated by spreading rumors. Both have support groups in the class. A parent is threatening to involve lawyers. The class climate has deteriorated significantly.",
                mode: 'slow'
            }
        },
        {
            id: 'resource_allocation',
            label: 'Scenario: Resource Allocation Decision',
            teacherStory: "Limited spots available for an enrichment opportunity. Multiple deserving candidates with different needs.",
            data: {
                scenario: "Three spots remaining for the STEM summer program (full scholarship): Student A has top grades but stable home/finances. Student B has good grades, single-parent home, would be first in family to pursue STEM. Student C has average grades but exceptional improvement trajectory and documented learning challenges.",
                mode: 'slow'
            }
        },
        {
            id: 'crisis_response',
            label: 'Scenario: Crisis Response Planning',
            teacherStory: "Developing a response plan for a student showing warning signs but no immediate threat.",
            data: {
                scenario: "A teacher notices a Grade 11 student's creative writing has become increasingly dark and nihilistic. The student recently lost a grandparent, broke up with their partner, and quit the basketball team. They're still attending school and maintaining grades. No explicit threats or self-harm indicators, but multiple staff members have expressed concern.",
                mode: 'slow'
            }
        },
    ],
    [ToolType.LESSON_PLANNER]: []
};
