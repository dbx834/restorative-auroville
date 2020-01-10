// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import smallKey from '@bodhi-project/components/lib/methods/smallKey'
import timestamp from '@bodhi-project/components/lib/methods/timestamp'
import mockTag from '@bodhi-project/components/lib/methods/mockTag'
import mockCategory from '@bodhi-project/components/lib/methods/mockCategory'

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------- Data
// ----------------------------------------------------------------------------
const data = [
  {
    key: smallKey(),
    title: 'Women for Justice',
    cover: undefined,
    routeSlug: '/community-events/women-for-justice',
    formattedDate: 'To be announced',
    publishedAt: timestamp('01.01.2019'),
    abstract:
      'In collaboration with Auroville Village Action Group and Nimisha Desai, founder of the NGO "Olakh" (Gujarat), we will present a documentary about Nimisha’s work with women’s justice.',
    hasCategories: mockCategory(),
    hasTags: mockTag(),
  },
  {
    key: smallKey(),
    title: 'Cross-Cultural Dialogue: Discrimination in Auroville',
    cover: undefined,
    routeSlug: '/community-events/cross-cultural-dialogue',
    formattedDate: 'April 2018',
    publishedAt: timestamp('01.04.2018'),
    abstract:
      'In response to the recent claim of discrimination against some in the Tamil community in Auroville, we hosted a 2-day Cross-Cultural Dialogue.',
    hasCategories: mockCategory(),
    hasTags: mockTag(),
  },
  {
    key: smallKey(),
    title: 'Walk of Hope in Auroville & the Bioregion',
    cover: undefined,
    routeSlug: '/community-events/walk-of-hope-in-auroville-and-the-bioregion',
    formattedDate: 'January 2018',
    publishedAt: timestamp('01.01.2018'),
    abstract:
      'We want to explore and understand this question: Are we divided in Auroville, as local Tamil Aurovilians and non-local Aurovilians?',
    hasCategories: mockCategory(),
    hasTags: mockTag(),
  },
  {
    key: smallKey(),
    title: 'Restorative Dialogue across Cultures',
    cover: undefined,
    routeSlug: '/community-events/restorative-dialogue-across-cultures',
    formattedDate: 'September 2016',
    publishedAt: timestamp('01.09.2016'),
    abstract:
      'We want to explore and understand this question: Are we divided in Auroville, as local Tamil Aurovilians and non-local Aurovilians?',
    hasCategories: mockCategory(),
    hasTags: mockTag(),
  },
  {
    key: smallKey(),
    title: 'World Cafés on Peace & Justice',
    cover: undefined,
    routeSlug: '/community-events/world-cafes-on-peace-and-justice',
    formattedDate: 'January 2016 - April 2016',
    publishedAt: timestamp('01.01.2016'),
    abstract:
      'In the first months of 2016, we hosted a series of evening conversations in the co-creative World Café format. “What can we do as a community to openly share past pain and to restore connection and trust?”',
    hasCategories: mockCategory(),
    hasTags: mockTag(),
  },
  {
    key: smallKey(),
    title: 'FilmFest: "Restoring Connection"',
    cover: undefined,
    routeSlug: '/community-events/filmfest-restoring-connection',
    publishedAt: timestamp('01.10.2016'),
    abstract:
      'We hosted a 6-day Film Festival, in hopes to raise awareness about Restorative Justice and hopefully contribute to building a justice system that is in alignment with our Auroville values.',
    formattedDate: 'October 2016',
    hasCategories: mockCategory(),
    hasTags: mockTag(),
  },
]

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default data
