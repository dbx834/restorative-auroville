// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
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

import rawData from '../data/system-building-initiatives'

import '../styles/pages/system-building-initiatives.less'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React;
const pageData = {
  pageTitle: 'System-Building Initiatives',
  nakedPageSlug: 'system-building-initiatives',
  pageAbstract:
    'Our approach is to engage with the community at many levels and through different initiatives, with a real longing to grow and transform our systems together. Our initiatives include engagement with Working Groups, Units, Services, schools, residential communities, and more.',
}

const seoData = seoHelper(pageData)

const conf = {
  wrapper: '',
  articleType: 'linkedArticle',
  render: ['cover', 'date', 'formattedDate', 'title'],
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
    chronology: 'oldest-first',
  },
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Images
// ----------------------------------------------------------------------------
export const query = graphql`
  query {
    restorativeCirclesInTheLearningCommunitySchool: file(
      relativePath: {
        eq: "system-building-initiatives/restorative-circles-in-the-learning-community-school.jpg"
      }
    ) {
      ...max900
    }
    restorativeCirclesInAikiyamSchool: file(
      relativePath: {
        eq: "system-building-initiatives/restorative-circles-in-aikiyam-school.jpg"
      }
    ) {
      ...max900
    }
    exploringJusticeAndRcWithTheAurovilleCouncil: file(
      relativePath: {
        eq: "system-building-initiatives/exploring-justice-and-rc-with-the-auroville-council.jpg"
      }
    ) {
      ...max900
    }
  }
`

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Ongoingprojects */
const Ongoingprojects = props => {
  const { data: images } = props
  const data = mapCovers(rawData, images)

  return (
    <StandardPage
      className="system-building-initiatives-page"
      seoData={seoData}
      {...props}
    >
      <h1 className="mask-h3">System-Building Initiatives</h1>
      <p>
        Our approach is to engage with the community at many levels and through
        different initiatives, with a real longing to grow and transform our
        systems together. Our initiatives include engagement with Working
        Groups, commercial Units, Services, schools, residential communities,
        and more.
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
      <div className="box">
        <p>
          In our aim to bring about a cultural shift in Auroville and how we
          engage with conflict, we’re hoping to bring RC and its principles to
          different groups in the community.
        </p>
        <p>
          This initiative aims to inform and empower members of the community so
          that when conflict or misunderstanding arises, we are more aware of
          our options and hopefully better equipped to move through the
          challenge.
        </p>
        <p>
          Restorative Auroville’s wish is to offer RC as a safe space for
          holding difficult conversations through a process of reflective
          listening. It’s designed to share power in the community and can
          potentially be facilitated by anyone. When we’re better informed about
          the process, we can use it to its fullest.
        </p>
        <p style={{ marginBottom: 0 }}>
          We invite any Working Groups, commercial Units, Services, schools and
          residential communities that are interested in learning more to reach
          out, so that we can design a training series together and/or look at
          how to collaborate.
        </p>
      </div>
    </StandardPage>
  )
}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default Ongoingprojects
