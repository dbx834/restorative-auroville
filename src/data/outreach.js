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
    title: 'Restorative Circles with ISABS',
    cover: undefined,
    routeSlug: '/outreach/restorative-circles-with-isabs',
    publishedAt: timestamp('02.01.2020'),
    formattedDate: '2018 - 2019',
    abstract:
      'Members from ISABS have been excited about the possibility of setting up an RC System within their organization, offering a space and shared agreements for difficult conversations.',
    hasCategories: mockCategory(),
    hasTags: mockTag(),
  },
  {
    key: smallKey(),
    title: 'Restorative Circles with Enfold',
    cover: undefined,
    routeSlug: '/outreach/restorative-circles-with-enfold',
    publishedAt: timestamp('01.01.2020'),
    formattedDate: 'Nov 2018',
    abstract:
      'Enfold works with at-risk youth and those in detention centres, offering them spaces to be heard and to reconnect with their own humanity.',
    hasCategories: mockCategory(),
    hasTags: mockTag(),
  },
]

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default data
