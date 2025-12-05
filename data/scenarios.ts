
import { ToolType, Scenario } from '../types';

export const SCENARIOS: Record<ToolType, Scenario[]> = {
    [ToolType.REMIX]: [
        { 
            id: 'salmon', 
            label: 'Scenario 1: Salmon Cycle (Gr 4)', 
            teacherStory: "Jade (Gr 4) has two students reading at a Grade 2 level. She wants them to access this DFO article without losing the scientific terminology required by the curriculum.",
            data: { 
                grade: 'Grade 4 Reading Level', 
                text: 'Sockeye salmon (Oncorhynchus nerka) are anadromous, meaning they hatch in freshwater, migrate to the Pacific Ocean, and return to spawn. In the Fraser River watershed, fry spend up to a year in lakes before migrating as smolts. Upon maturation, they navigate via magnetoreception back to their natal streams. The females utilize their caudal fins to excavate redds in the gravel substrate.',
                terms: 'Anadromous, Smolt, Redd, Spawn'
            } 
        },
        { 
            id: 'fur_trade', 
            label: 'Scenario 2: The Fur Trade (Gr 7)', 
            teacherStory: "Teaching the impact of the HBC monopoly. Students struggle with the textbook's dense phrasing about economic systems.",
            data: { 
                grade: 'Grade 7', 
                text: 'The Hudson’s Bay Company established a mercantilist monopoly over the Rupert’s Land basin, fundamentally altering Indigenous economic systems. This corporate hegemony relied on the extraction of beaver pelts for European markets, creating a dependency cycle that eroded traditional sovereignty and enforced a barter system heavily weighted in favor of colonial goods.',
                terms: 'Monopoly, Sovereignty, Barter, Pelt'
            } 
        },
        { 
            id: 'macbeth', 
            label: 'Scenario 3: Macbeth (Gr 10)', 
            teacherStory: "Introducing Shakespeare. Teacher wants a side-by-side translation so students can bridge the archaic language to modern meaning.",
            data: { 
                grade: 'Gen-Z / Modern English', 
                text: 'Is this a dagger which I see before me, The handle toward my hand? Come, let me clutch thee. I have thee not, and yet I see thee still. Art thou not, fatal vision, sensible To feeling as to sight? or art thou but A dagger of the mind, a false creation, Proceeding from the heat-oppressed brain?',
                terms: 'Heat-oppressed brain, Marshall’st, Palpable'
            } 
        },
        { 
            id: 'geometry', 
            label: 'Scenario 4: Geometric Proofs (Gr 9)', 
            teacherStory: "A student who 'hates math' needs to understand the Pythagorean theorem. The textbook definition is too abstract.",
            data: { 
                grade: 'Grade 9 (Concrete Analogy)', 
                text: 'In a right-angled triangle, the square of the hypotenuse is equal to the sum of the squares of the other two sides. This fundamental theorem establishes the relationship between the legs and the hypotenuse in Euclidean geometry, forming the basis for trigonometric ratios.',
                terms: 'Hypotenuse, Leg, Right Angle'
            } 
        },
    ],
    [ToolType.INTEREST_SKIN]: [
        {
            id: 'dirt_bike',
            label: 'Scenario 5: Dirt Biking (Math)',
            teacherStory: "Mark (Gr 8) loves riding at the bike park near the creek. He disengages from worksheet math.",
            data: {
                topic: 'Slope as Rise over Run',
                interest: 'Building a practice ramp at the Lytton bike park',
                problem: 'We need to build a tabletop jump. It rises 2 meters over a run of 6 meters. What is the slope? If we want a steeper launch (0.5 slope), how much run do we need?'
            }
        },
        {
            id: 'food_sovereignty',
            label: 'Scenario 6: Food Sovereignty (Math)',
            teacherStory: "Connecting math curriculum to the new community garden project.",
            data: {
                topic: 'Area of Composite Shapes',
                interest: 'Building raised cedar planter beds',
                problem: 'We are building "L" shaped beds for traditional medicines. Calculate the total soil needed based on these dimensions: Long side 8ft, short side 4ft, width 2ft.'
            }
        },
        {
            id: 'fortnite',
            label: 'Scenario 7: Fortnite Ecosystem (Science)',
            teacherStory: "Using a game map to explain ecological relationships to Grade 6s.",
            data: {
                topic: 'Predator/Prey Relationships',
                interest: 'Fortnite Battle Royale Map',
                problem: 'If all the "Wolves" (Predators) are eliminated from the Weeping Woods, what happens to the population of "Boars" (Prey)? How does this affect the "Shield Mushrooms" (Producers) they eat?'
            }
        },
        {
            id: 'tiktok',
            label: 'Scenario 8: Anti-Vaping TikTok (English)',
            teacherStory: "Grade 8 Health/English unit. Students need to use rhetorical devices in a medium they actually watch.",
            data: {
                topic: 'Rhetorical Devices (Ethos, Pathos, Logos)',
                interest: 'Becoming a Viral Influencer',
                problem: 'Script a 60-second video convincing classmates to stop vaping. Use Ethos (cite a cool creator), Pathos (a sad story), and Logos (one scary stat).'
            }
        }
    ],
    [ToolType.METAPHOR_MAPPER]: [
        {
            id: 'immune_hockey',
            label: 'Scenario: Immune System (Science)',
            teacherStory: "Teaching Grade 11 Biology. Students memorize the terms (T-Cells, Antigens) but don't understand the *function*. Most of the class plays hockey.",
            data: {
                target: 'The Human Immune System',
                base: 'A Hockey Team (Defense Strategy)',
                strictness: 'strict'
            }
        },
        {
            id: 'cell_city',
            label: 'Scenario: Cell Biology (Science)',
            teacherStory: "Grade 8 Science. Need to explain cell organelles. Students are familiar with how the Band Office and community services work.",
            data: {
                target: 'Plant Cell Organelles',
                base: 'The Band Office and Community Infrastructure',
                strictness: 'loose'
            }
        }
    ],
    [ToolType.BLIND_SPOT]: [
        {
            id: 'dam_essay',
            label: 'Scenario: Hydro Dam Essay (Socials)',
            teacherStory: "Grade 10 Social Studies. Students are writing about hydroelectric power. Their drafts focus entirely on economic benefits and ignore ecological or Indigenous impacts.",
            data: {
                topic: 'The Economic Benefits of the Site C Dam',
                text: 'The Site C dam will provide clean energy for thousands of homes and create jobs during construction. It contributes to the province\'s GDP and allows for energy export.',
                perspectives: 'Ecological Impact, Indigenous Land Rights, Long-term Sustainability'
            }
        },
        {
            id: 'ai_policy',
            label: 'Scenario: School AI Policy (Leadership)',
            teacherStory: "Leadership students drafting a policy on AI use. They focus on 'cheating' but miss privacy and data sovereignty.",
            data: {
                topic: 'Rules for AI in Class',
                text: 'Students should not use AI to write essays because it is cheating. If they use it, they will get a zero.',
                perspectives: 'Data Privacy, Provenance Debt, Equity of Access'
            }
        }
    ],
    [ToolType.SYNTAX_SCAFFOLDER]: [
        {
            id: 'transitive_verbs',
            label: 'Scenario: Transitive Verbs (Language)',
            teacherStory: "Elders are teaching the rule for 'Doing something TO something' (Transitive). Students need practice scenarios to say the phrase, without AI hallucinating the translation.",
            data: {
                rule: 'Transitive Verbs (Subject acts on Object)',
                context: 'Fishing at the river',
                difficulty: 'Beginner'
            }
        },
        {
            id: 'command_form',
            label: 'Scenario: Command Form (Language)',
            teacherStory: "Practice for 'Imperative/Command' forms in the local language. Context: Kitchen/Cooking.",
            data: {
                rule: 'Imperative / Commands (Telling someone to do something)',
                context: 'Cooking a meal in the kitchen',
                difficulty: 'Intermediate'
            }
        }
    ],
    [ToolType.PROJECT_BREAKER]: [
        {
            id: 'science_fair',
            label: 'Scenario 9: Science Fair (Gr 7)',
            teacherStory: "Student has ADHD and freezes when they see the word 'Project'. Needs granular steps.",
            data: {
                task: 'Design and carry out an experiment using the scientific method, create a display board, and present at the school fair on March 15.',
                time: '4 weeks'
            }
        },
        {
            id: 'capstone',
            label: 'Scenario 10: Capstone Project (Gr 12)',
            teacherStory: "The 30-hour volunteer requirement feels overwhelming to students.",
            data: {
                task: 'Career Life Connections (CLC) Capstone: 30 Hours of Volunteering + Reflection Paper + Final Presentation.',
                time: 'Semester'
            }
        },
        {
            id: 'novel_study',
            label: 'Scenario 11: Novel Study (Gr 5)',
            teacherStory: "Breaking down a book report into nightly reading goals.",
            data: {
                task: 'Read "The Barren Grounds", complete a character map, and write a one-page summary.',
                time: '3 weeks'
            }
        },
        {
            id: 'short_film',
            label: 'Scenario 12: Short Film (Gr 10)',
            teacherStory: "A documentary project about Lytton. Emotional content warning: students may discuss the fire.",
            data: {
                task: 'Create a 3-minute documentary about "My Home". Includes storyboarding, filming B-roll, and editing.',
                time: '2 weeks'
            }
        }
    ],
    [ToolType.RUBRIC_ARCHITECT]: [
        {
            id: 'oral_story',
            label: 'Scenario 13: Oral Storytelling (Gr 6)',
            teacherStory: "Assessing oral language protocols without using colonial/academic jargon.",
            data: {
                criteria: 'Demonstrates oratorical proficiency and cultural adherence.',
                critique: 'Too colonial. Too academic for a 12-year-old.',
                fix: 'I can tell the story clearly so everyone hears. / I can say who gave me this story.'
            }
        },
        {
            id: 'chemistry',
            label: 'Scenario 14: Chemistry Lab (Gr 11)',
            teacherStory: "Ensuring students understand the *why* of the experiment, not just following recipe steps.",
            data: {
                criteria: 'Properly hypothesizes stoichiometric ratios.',
                critique: 'Confusing language.',
                fix: 'I can predict exactly how much product I will get using math (ratios).'
            }
        },
        {
            id: 'sel',
            label: 'Scenario 15: SEL (Gr 4)',
            teacherStory: "Self-regulation goals for a student with behavioral challenges.",
            data: {
                criteria: 'Exhibits self-regulation strategies during conflict.',
                critique: 'A 9-year-old does not know what that means.',
                fix: 'When I feel hot/angry, I take a deep breath or walk away instead of yelling.'
            }
        },
        {
            id: 'art',
            label: 'Scenario 16: Visual Arts (Gr 8)',
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
            label: 'Scenario 17: The Ghost Student',
            teacherStory: "Grade 8 student, usually engaged, hasn't come for 2 weeks. Family recently moved. Teacher is worried but burnt out.",
            data: {
                situation: 'Student has not shown up in 2 weeks. I am worried they are falling behind, but I don\'t want to sound like I am scolding them.',
                persona: 'The Compassionate Connector'
            }
        },
        {
            id: 'plagiarism',
            label: 'Scenario 18: The Plagiarism Incident',
            teacherStory: "Night before report cards. Student used AI for their essay. Teacher feels disrespected but wants to use it as a learning moment.",
            data: {
                situation: 'Student used ChatGPT to write their whole essay. It is obvious. I need them to redo it, but I want to offer help, not just a zero.',
                persona: 'The Digital Mentor'
            }
        },
        {
            id: 'failing_grade',
            label: 'Scenario 19: The Failing Grade',
            teacherStory: "Parent has previously accused the school of not supporting their child. Data-driven but warm approach needed.",
            data: {
                situation: 'Student failed the math unit test (42%). Parent is demanding and defensive. I need to outline 2 specific things we can do to help.',
                persona: 'The Partner in Success'
            }
        },
        {
            id: 'behavior',
            label: 'Scenario 20: Behavioral Outburst',
            teacherStory: "Student has known trauma history. There was a loud noise in the hall before they flipped the desk.",
            data: {
                situation: 'Student flipped a desk and walked out of class today. I want to check in on them and set up a re-entry meeting when they are regulated.',
                persona: 'The Trauma-Informed Regulator'
            }
        }
    ],
    [ToolType.DEEP_DIVER]: [
        {
            id: 'default_deep',
            label: 'Standard Scenario',
            teacherStory: "A complex behavioral incident requiring analysis beyond immediate reaction.",
            data: { scenario: "A Grade 9 student, usually quiet, suddenly flipped a desk and yelled 'This whole system is rigged!' after receiving a C- on his History essay." }
        }
    ],
    [ToolType.LESSON_PLANNER]: []
};