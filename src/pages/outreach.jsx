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

import rawData from '../data/outreach'

import seoHelper from '../methods/seoHelper'

import '../styles/pages/outreach.less'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React;
const pageData = {
  pageTitle: 'Outreach',
  nakedPageSlug: 'outreach',
  pageAbstract: 'Outreach initiatives…',
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
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Images
// ----------------------------------------------------------------------------
export const query = graphql`
  query {
    restorativeCirclesWithIsabs: file(
      relativePath: { eq: "outreach/rc-outreach-isabs.jpg" }
    ) {
      ...max900
    }
    restorativeCirclesWithEnfold: file(
      relativePath: { eq: "outreach/rc-outreach-enfold.jpg" }
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
    <StandardPage className="outreach-page" seoData={seoData} {...props}>
      <h1 className="mask-h3">Outreach</h1>
      <p>
        Our intention is to make this work as available as possible and to share
        it with communities and projects that are seeking to shift paradigms.
      </p>
      <div className="margin-p" id="c">
        <Grid
          loading={false}
          Link={Link}
          Box={Box}
          Button={Button}
          Img={Img}
          MediaQuery={MediaQuery}
          dataAlias={data}
          data={[]}
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
export default Ongoingprojects
