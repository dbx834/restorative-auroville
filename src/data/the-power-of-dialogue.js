// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import smallKey from '@bodhi-project/components/lib/methods/smallKey'
import timestamp from '@bodhi-project/components/lib/methods/timestamp'
import mockTag from '@bodhi-project/components/lib/methods/mockTag'

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------- Data
// ----------------------------------------------------------------------------
const data = [
  {
    key: smallKey(),
    title: undefined,
    cover: undefined,
    routeSlug: '/the-power-of-dialogue/pre-circle-getting-the-act',
    publishedAt: timestamp('01.01.2019'),
    abstract:
      'The first step in the Pre-Circle is "getting the act," which is the starting point for the Circle process. We look for a specific incident that took place and that\'s symbolic of the larger context.',
    hasCategories: ['theCraft'],
    hasTags: mockTag(),
  },
  {
    key: smallKey(),
    title: undefined,
    cover: undefined,
    routeSlug: '/the-power-of-dialogue/pre-circle-hearing-meaning',
    publishedAt: timestamp('01.02.2019'),
    abstract:
      'The second step in the Pre-Circle is "hearing meaning," where the Facilitator reflects back to the participant what he/she understands as their message, how they might be feeling about the incident, or what values might be at stake for them.',
    hasCategories: ['theCraft'],
    hasTags: mockTag(),
  },
  {
    key: smallKey(),
    title: undefined,
    cover: undefined,
    routeSlug: '/the-power-of-dialogue/pre-circle-explaining-the-process',
    publishedAt: timestamp('01.03.2019'),
    abstract:
      'The third step in the Pre-Circle is "explaining the process," where the Facilitator reviews the RC process with the participant and answers any questions they may have, so that everyone is on the same page about how this particular process works.',
    hasCategories: ['theCraft'],
    hasTags: mockTag(),
  },
  {
    key: smallKey(),
    title: undefined,
    cover: undefined,
    routeSlug: '/the-power-of-dialogue/pre-circle-who-needs-to-be-there',
    publishedAt: timestamp('01.04.2019'),
    abstract:
      'The fourth step in the Pre-Circle is "naming those to be invited," where the Facilitator asks each participant, "Who needs to be there?"',
    hasCategories: ['theCraft'],
    hasTags: mockTag(),
  },
  // {
  //   key: smallKey(),
  //   title: undefined,
  //   cover: undefined,
  //   routeSlug: '/the-power-of-dialogue/pre-circle-would-you-like-to-go-ahead',
  //   publishedAt: timestamp('01.05.2019'),
  //   abstract:
  //     'The fifth step in the Pre-Circle is "getting consent," where the Facilitator asks each participant whether they\'d like to go ahead and attend the Circle process.',
  //   hasCategories: ['theCraft'],
  //   hasTags: mockTag(),
  // },
  {
    key: smallKey(),
    title: undefined,
    cover: undefined,
    routeSlug: '/the-power-of-dialogue/genies-pre-circle-with-janet',
    publishedAt: timestamp('02.01.2019'),
    abstract:
      'Before entering a Restorative Circle, Facilitators meet amongst themselves to work through any challenging thoughts or feelings that might interfere with their capacity to hold space during the Circle. Eugénie Dumont (Genie), in her role as filmmaker, is also given an opportunity to be heard for her connection to the Circle.',
    hasCategories: ['inAction'],
    hasTags: mockTag(),
  },
  {
    key: smallKey(),
    title: undefined,
    cover: undefined,
    routeSlug: '/the-power-of-dialogue/rakhals-pre-circle-with-henrike',
    publishedAt: timestamp('02.02.2019'),
    abstract:
      'Rakhal was named for this Circle, and here is his Pre-Circle with our Co-Facilitator, Henrike.',
    hasCategories: ['inAction'],
    hasTags: mockTag(),
  },
  {
    key: smallKey(),
    title: undefined,
    cover: undefined,
    routeSlug:
      '/the-power-of-dialogue/facilitators-pre-circle-on-sexual-misconduct',
    publishedAt: timestamp('02.03.2019'),
    abstract:
      "Here Henrike, Kati, Pranjal, L'aura and Nils have their Facilitators' Pre-Circle for a Circle that was called around women's safety and the impact of a community member's behaviour. This Circle was particularly delicate, as several decision-making bodies did not approve of our choice to respond to the call for a Circle process.",
    hasCategories: ['inAction'],
    hasTags: mockTag(),
  },
  {
    key: smallKey(),
    title: undefined,
    cover: undefined,
    routeSlug:
      '/the-power-of-dialogue/engaging-with-restorative-circles-in-auroville',
    publishedAt: timestamp('03.01.2019'),
    abstract:
      "L'aura shares about her experience of engaging with Restorative Circles in Auroville and how it's received by the community.",
    hasCategories: ['theRestorativeSystem'],
    hasTags: mockTag(),
  },
  {
    key: smallKey(),
    title: undefined,
    cover: undefined,
    routeSlug:
      '/the-power-of-dialogue/designing-our-justice-system-consciously',
    publishedAt: timestamp('03.02.2019'),
    abstract:
      "L'aura shares about her experience of engaging with Restorative Circles in Auroville and the importance of designing a justice system consciously, otherwise we'll just inherit the old ways.",
    hasCategories: ['theRestorativeSystem'],
    hasTags: mockTag(),
  },
  {
    key: smallKey(),
    title: undefined,
    cover: undefined,
    routeSlug: '/the-power-of-dialogue/defining-the-act',
    publishedAt: timestamp('03.03.2019'),
    abstract:
      "Kati shares her recent learning regarding the importance of bringing an authentic live act to a Circle, instead of simply having an 'interesting' topic as the starting point.",
    hasCategories: ['theRestorativeSystem'],
    hasTags: mockTag(),
  },
  {
    key: smallKey(),
    title: undefined,
    cover: undefined,
    routeSlug: '/the-power-of-dialogue/rc-challenges-us-to-grow',
    publishedAt: timestamp('03.04.2019'),
    abstract:
      'Henrike shares her thoughts on learning RC and how it invites for growth, as individuals and as a collective.',
    hasCategories: ['theRestorativeSystem'],
    hasTags: mockTag(),
  },
  {
    key: smallKey(),
    title: undefined,
    cover: undefined,
    routeSlug: '/the-power-of-dialogue/rcs-ripple-effect',
    publishedAt: timestamp('03.05.2019'),
    abstract:
      'Pranjal reflects on how Circles can impact the community in unexpected ways, even when some folks choose not to attend.',
    hasCategories: ['theRestorativeSystem'],
    hasTags: mockTag(),
  },
  {
    key: smallKey(),
    title: undefined,
    cover: undefined,
    routeSlug: '/the-power-of-dialogue/engaging-with-the-community-through-rc',
    publishedAt: timestamp('03.06.2019'),
    abstract:
      'Nils shares about his experience joining Restorative Auroville as a project team member and co-facilitator, and how it contributes to his journey in this community.',
    hasCategories: ['theRestorativeSystem'],
    hasTags: mockTag(),
  },
  {
    key: smallKey(),
    title: undefined,
    cover: undefined,
    routeSlug:
      '/the-power-of-dialogue/listening-as-a-means-to-community-resilience',
    publishedAt: timestamp('03.07.2019'),
    abstract:
      'Nils shares on the power of listening deeply to one another, and how that has the potential to create connection and understanding amongst us, and in the long run contribute to community resilience.',
    hasCategories: ['theRestorativeSystem'],
    hasTags: mockTag(),
  },
  {
    key: smallKey(),
    title: undefined,
    cover: undefined,
    routeSlug: '/the-power-of-dialogue/can-rc-really-handle-challenging-cases',
    publishedAt: timestamp('03.08.2019'),
    abstract:
      "L'aura shares about the challenge when governance bodies and decision-making groups feel somewhat threatened by a Circle being called, and how she longs for the day when we'll all see Circles as an opportunity for collective growth and shared responsibility, even for the most so-called challenging cases.",
    hasCategories: ['theRestorativeSystem'],
    hasTags: mockTag(),
  },
  {
    key: smallKey(),
    title: undefined,
    cover: undefined,
    routeSlug: '/the-power-of-dialogue/surya-on-restorative-circles',
    publishedAt: timestamp('04.01.2019'),
    abstract: 'Surya shares about her experiences with Restoratives Circles.',
    hasCategories: ['experiences'],
    hasTags: mockTag(),
  },
  {
    key: smallKey(),
    title: undefined,
    cover: undefined,
    routeSlug: '/the-power-of-dialogue/the-value-of-rc-facilitation',
    publishedAt: timestamp('04.02.2019'),
    abstract:
      'Pranjal reflects on his learning journey with RC facilitation, and appreciates how the skills he has acquired here can provide for a strong foundation in holding space in different contexts.',
    hasCategories: ['experiences'],
    hasTags: mockTag(),
  },
  {
    key: smallKey(),
    title: undefined,
    cover: undefined,
    routeSlug:
      '/the-power-of-dialogue/highlights-and-learning-on-restorative-circles-1',
    publishedAt: timestamp('04.03.2019'),
    abstract:
      'Aurovik is a supporter and advisor to our project, and he attended several Circles either as a member of the Auroville Council or as a Resource Person to our Working Groups. After a few intense Circles, we had a debrief session to review celebrations, challenges and growing edges of our project.',
    hasCategories: ['experiences'],
    hasTags: mockTag(),
  },
  {
    key: smallKey(),
    title: undefined,
    cover: undefined,
    routeSlug:
      '/the-power-of-dialogue/highlights-and-learning-on-restorative-circles-2',
    publishedAt: timestamp('04.04.2019'),
    abstract:
      'Elisa is a supporter and advisor to our project, and she attended several Circles, both as a member of the Working Committee and of the Auroville Council. After a few intense Circles, we had a debrief session to review celebrations, challenges and growing edges of our project.',
    hasCategories: ['experiences'],
    hasTags: mockTag(),
  },
  {
    key: smallKey(),
    title: undefined,
    cover: undefined,
    routeSlug:
      '/the-power-of-dialogue/highlights-and-learning-on-restorative-circles-3',
    publishedAt: timestamp('04.05.2019'),
    abstract:
      'Sandyra is a supporter and advisor to our project, and she attended several Circles while she served on the Auroville Council. After a few intense Circles, we had a debrief session to review celebrations, challenges and growing edges of our project.',
    hasCategories: ['experiences'],
    hasTags: mockTag(),
  },
  {
    key: smallKey(),
    title: undefined,
    cover: undefined,
    routeSlug: '/the-power-of-dialogue/rc-as-a-powerful-life-skill',
    publishedAt: timestamp('04.06.2019'),
    abstract:
      'Jola shares about her volunteering experience and how moved she was to discover the power and potential of Restorative Circles.',
    hasCategories: ['experiences'],
    hasTags: mockTag(),
  },
  {
    key: smallKey(),
    title: undefined,
    cover: undefined,
    routeSlug: '/the-power-of-dialogue/celebrating-a-one-month-rc-immersion',
    publishedAt: timestamp('04.07.2019'),
    abstract:
      'Sun-Mi shares about her experience of apprenticing with and shadowing Restorative Auroville for an intense month.',
    hasCategories: ['experiences'],
    hasTags: mockTag(),
  },
  {
    key: smallKey(),
    title: undefined,
    cover: undefined,
    routeSlug: '/the-power-of-dialogue/rc-as-perseverance',
    publishedAt: timestamp('04.08.2019'),
    abstract:
      'Amy, Mael and Aurovik share about their experiences with Restorative Circles and explore its impact on conflict in Auroville.',
    hasCategories: ['experiences'],
    hasTags: mockTag(),
  },
]

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default data
