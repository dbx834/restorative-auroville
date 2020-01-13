// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Box, Button } from 'grommet'
import MediaQuery from 'react-responsive'

import Grid from '@bodhi-project/components/lib/grid/gatsby'
import '@bodhi-project/components/lib/grid/style.less'
import '@bodhi-project/components/lib/standard-renderers/article/vertical.less'
// import '@bodhi-project/components/lib/grid/buttons-as-links.less'
import '@bodhi-project/components/lib/snippets/hover-underline-animation.less'
import '@bodhi-project/components/lib/features/loading-detection/style.less'
import '@bodhi-project/components/lib/features/tag-filter/style.less'
import '@bodhi-project/components/lib/features/category-filter/style.less'
import '@bodhi-project/components/lib/features/chronology-sort/style.less'
import '@bodhi-project/components/lib/features/year-filter/style.less'

import smallKey from '@bodhi-project/components/lib/methods/smallKey'
import mapCovers from '@bodhi-project/components/lib/methods/mapCovers'

// import mockTimestamp from '@bodhi-project/components/lib/methods/mockTimestamp'
import { tags } from '@bodhi-project/components/lib/methods/mockTag'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../components/Link'

import rawData from '../data/writings'

import StandardPage from '../components/wrappers/StandardPage'

import seoHelper from '../methods/seoHelper'

import '../styles/pages/writings.less'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const pageData = {
  pageTitle: 'Writings',
  nakedPageSlug: 'writings',
  pageAbstract:
    'Our mission is to live and share the principles of Nonviolence, not only in terms of an individual practice and way of life, but also in its application to social structures, such as in our families, schools, and organizations.',
}

const seoData = seoHelper(pageData)

const categories = [
  {
    categoryId: smallKey(),
    key: smallKey(),
    categoryName: 'Pranjal',
    categoryShortCode: 'pranjal',
    __typename: 'Category',
  },
  {
    categoryId: smallKey(),
    key: smallKey(),
    categoryName: 'La Revue d’Auroville',
    categoryShortCode: 'laRevueDAuroville',
    __typename: 'Category',
  },
  {
    categoryId: smallKey(),
    key: smallKey(),
    categoryName: 'Auroville Today',
    categoryShortCode: 'aurovilleToday',
    __typename: 'Category',
  },
  {
    categoryId: smallKey(),
    key: smallKey(),
    categoryName: "L'aura Joy",
    categoryShortCode: 'lauraJoy',
    __typename: 'Category',
  },
]

const conf = {
  wrapper: '',
  articleType: 'linkedArticle',
  render: ['cover', 'date', 'title', 'abstract'],
  layout: 'vertical',
  columns: 3,
  titleMask: 'mask-h5',
  filterMethod: {
    categories: 'exclusive',
    tags: 'exclusive',
  },
  reverseYearOrder: true,
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Images
// ----------------------------------------------------------------------------
export const query = graphql`
  query {
    canWeTalkAboutDiscriminationInAuroville: file(
      relativePath: {
        eq: "writings/can-we-talk-about-discrimination-in-auroville.jpg"
      }
    ) {
      ...max900
    }
    dealingWithConflictInRestorativeCircles: file(
      relativePath: {
        eq: "writings/dealing-with-conflict-in-restorative-circles.jpg"
      }
    ) {
      ...max900
    }
    justiceAndPunishment: file(
      relativePath: { eq: "writings/justice-and-punishment.jpg" }
    ) {
      ...max900
    }
    justiceInAuroville: file(
      relativePath: { eq: "writings/justice-in-auroville.jpg" }
    ) {
      ...max900
    }
    laResponsabiliteDeTous: file(
      relativePath: { eq: "writings/la-responsabilite-de-tous.jpg" }
    ) {
      ...max900
    }
    listening: file(relativePath: { eq: "writings/listening.jpg" }) {
      ...max900
    }
    ourJusticeSystem: file(
      relativePath: { eq: "writings/our-justice-system.jpg" }
    ) {
      ...max900
    }
    restoringConnection: file(
      relativePath: { eq: "writings/restoring-connection.jpg" }
    ) {
      ...max900
    }
  }
`

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Page */
const Page = props => {
  const { data: images } = props
  const data = mapCovers(rawData, images)

  return (
    <StandardPage className="writings-page" seoData={seoData} {...props}>
      <h1 className="mask-h3">Articles</h1>
      <Grid
        loading={false}
        Link={Link}
        Box={Box}
        Button={Button}
        Img={Img}
        MediaQuery={MediaQuery}
        data={data}
        allCategories={categories}
        allTags={tags}
        strictChronology
        conf={conf}
      />
    </StandardPage>
  )
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
