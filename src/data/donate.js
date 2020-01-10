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
    title: 'Building an RC Yurt',
    cover: undefined,
    routeSlug: '/donate/building-an-rc-yurt',
    formattedDate: 'Ongoing',
    publishedAt: timestamp('01.01.2019'),
    abstract:
      'With our work growing, it’s high-time that we build a physical structure for our RC gatherings. We’re hoping to raise Rs.5 lakhs, in order to set up a dismountable yurt.',
    hasCategories: mockCategory(),
    hasTags: mockTag(),
  },
  {
    key: smallKey(),
    title: 'Filming a Live Restorative Circle',
    cover: undefined,
    routeSlug: '/donate/filming-a-live-restorative-circle',
    formattedDate: 'Ongoing',
    publishedAt: timestamp('01.02.2019'),
    abstract:
      'We have a big, big, big dream to one day film a live Circle, so that we can document the entire process and share this beautiful work with the rest of the world.',
    hasCategories: mockCategory(),
    hasTags: mockTag(),
  },
  {
    key: smallKey(),
    title: 'Tamil Aurovilian Journeys (Publication)',
    cover: undefined,
    routeSlug: '/donate/tamil-aurovilian-journeys',
    formattedDate: 'Ongoing',
    publishedAt: timestamp('01.03.2019'),
    abstract:
      'We are creating a one-time magazine focusing on the experiences of Tamil Aurovilians, their journeys into Auroville, and their feelings of belonging and exclusion.',
    hasCategories: mockCategory(),
    hasTags: mockTag(),
  },
]

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default data
