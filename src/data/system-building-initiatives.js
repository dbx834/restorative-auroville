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
    title: 'Restorative Circles in TLC (The Learning Community School)',
    cover: undefined,
    routeSlug:
      '/system-building-initiatives/restorative-circles-in-the-learning-community-school',
    publishedAt: timestamp('01.01.2015'),
    formattedDate: 'November 2015 - April 2020',
    abstract:
      'In late 2015, we were invited to share RC with the teachers at TLC (The Learning Community School).',
    hasCategories: mockCategory(),
    hasTags: mockTag(),
  },
  {
    key: smallKey(),
    title: 'Restorative Circles in Aikiyam School',
    cover: undefined,
    routeSlug:
      '/system-building-initiatives/restorative-circles-in-aikiyam-school',
    publishedAt: timestamp('01.01.2017'),
    formattedDate: 'January 2017 - November 2019',
    abstract:
      'We are sharing RC in Aikiyam School, one of Auroville’s outreach schools for children from Kindergarten to 8th Grade. After discussions with the administration and teachers of the school, a group of ten teachers has committed to learn about RC.',
    hasCategories: mockCategory(),
    hasTags: mockTag(),
  },
  {
    key: smallKey(),
    title: 'Exploring Justice & RC with the Auroville Council',
    cover: undefined,
    routeSlug:
      '/system-building-initiatives/exploring-justice-and-rc-with-the-auroville-council',
    publishedAt: timestamp('01.01.2018'),
    formattedDate: 'January 2018',
    abstract:
      'In early 2018, we invited the Auroville Council to explore RC and justice with us, so that we could improve our collaboration and better contribute to the community.',
    hasCategories: mockCategory(),
    hasTags: mockTag(),
  },
]

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default data
