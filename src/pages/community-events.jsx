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

import { categories } from '@bodhi-project/components/lib/methods/mockCategory'
import { tags } from '@bodhi-project/components/lib/methods/mockTag'
import mapCovers from '@bodhi-project/components/lib/methods/mapCovers'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../components/Link'

import StandardPage from '../components/wrappers/StandardPage'

import seoHelper from '../methods/seoHelper'

import rawData from '../data/community-events'

import '../styles/pages/community-events.less'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const pageData = {
  pageTitle: 'Community Events',
  nakedPageSlug: 'community-events',
  pageAbstract:
    'Our approach is to engage with the community at many levels and through different initiatives. We’ve hosted several large-scale community events, with the hope to inspire and challenge us to take a leap forward!',
}

const seoData = seoHelper(pageData)

const conf = {
  wrapper: '',
  articleType: 'linkedArticle',
  render: ['cover', 'date', 'formattedDate', 'title', 'abstract'],
  layout: 'vertical',
  columns: 3,
  titleMask: 'mask-h5',
  filterMethod: {
    categories: 'exclusive',
    tags: 'exclusive',
  },
  containerId: 'c',
  hashFilter: false,
  hydrate: {
    activeFilter: false,
    chronology: 'recent-first',
  },
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Images
// ----------------------------------------------------------------------------
export const query = graphql`
  query {
    crossCulturalDialogue: file(
      relativePath: {
        eq: "community-events/cross-cultural-dialogue/banner.jpg"
      }
    ) {
      ...max900
    }
    filmfestRestoringConnection: file(
      relativePath: {
        eq: "community-events/filmfest-restoring-connection/banner.jpg"
      }
    ) {
      ...max900
    }
    restorativeDialogueAcrossCultures: file(
      relativePath: {
        eq: "community-events/restorative-dialogue-across-cultures/banner.jpg"
      }
    ) {
      ...max900
    }
    walkOfHopeInAurovilleAndTheBioregion: file(
      relativePath: {
        eq: "community-events/walk-of-hope-in-auroville-and-the-bioregion/banner.jpg"
      }
    ) {
      ...max900
    }
    womenForJustice: file(
      relativePath: { eq: "community-events/women-for-justice/banner.jpg" }
    ) {
      ...max900
    }
    worldCafesOnPeaceAndJustice: file(
      relativePath: {
        eq: "community-events/world-cafes-on-peace-and-justice/banner.jpg"
      }
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
    <StandardPage
      className="community-events-page"
      seoData={seoData}
      {...props}
    >
      <h2 className="mask-h3">Community Events</h2>
      <p>
        Our approach is to engage with the community at many levels and through
        different initiatives. We’ve hosted several large-scale community
        events, with the hope to inspire and challenge us to take a leap
        forward!
      </p>
      <div className="margin-p" id="c">
        <Grid
          loading={false}
          Link={Link}
          Box={Box}
          Button={Button}
          Img={Img}
          MediaQuery={MediaQuery}
          documents={data}
          allCategories={categories}
          allTags={tags}
          strictChronology
          conf={conf}
        />
      </div>
    </StandardPage>
  )
}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default Page
