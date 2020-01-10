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
    publishedAt: timestamp('02.01.2019'),
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
]

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default data
