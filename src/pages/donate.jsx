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

import rawData from '../data/donate'

import '../styles/pages/donate.less'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const pageData = {
  pageTitle: 'Donate',
  nakedPageSlug: 'donate',
  pageAbstract:
    'If you’d like to make a donation towards Restorative Auroville, you may do so here. A link directly to the Auroville Foundation payment gateway page, and you will be able to receive a tax exemption.',
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
    filmingALiveRestorativeCircle: file(
      relativePath: { eq: "donate/filming/cover.jpg" }
    ) {
      ...max900
    }
    tamilAurovilianJourneys: file(
      relativePath: { eq: "donate/magazine/cover.jpg" }
    ) {
      ...max900
    }
    buildingAnRcYurt: file(relativePath: { eq: "donate/yurt/cover.jpg" }) {
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
    <StandardPage className="donate-page" seoData={seoData} {...props}>
      <h1 className="mask-h3">Donate to Support Our Work!</h1>
      <p>
        If you’re inspired by our project and would like to help, we welcome
        your contributions. Please know that any amount is greatly appreciated.
      </p>
      <p>
        This will link directly to the Auroville Foundation payment gateway
        page, and you will be able to receive a tax exemption.
      </p>
      <div className="mask-p donate-button">
        <Button
          label={
            <Link
              to="https://donations.auroville.com/"
              style={{ marginTop: 10, marginBottom: 10 }}
            >
              <span>Donate Here</span>
            </Link>
          }
        />
      </div>
      <ul className="mask-p" style={{ paddingLeft: 20 }}>
        <li>
          Please select “Other” in the Project selection, and specify
          “Restorative Auroville, Joy Living Learning” as the Project name.
        </li>
        <li>
          Please notify us by email (
          <Link to="mailto:restorative@auroville.org.in">
            restorative@auroville.org.in
          </Link>
          ) that you’ve made a transfer, so that we can track your contribution.
        </li>
      </ul>
      <br />
      <h2 className="mask-h4" style={{ marginTop: -20 }}>
        We need support for these projects:
      </h2>
      <div id="c">
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
      <br />
      <p style={{ marginTop: -20 }}>
        Restorative Auroville is an initiative of{' '}
        <Link to="https://www.joylivinglearning.org/">Joy Living Learning</Link>
        , a Unit under the{' '}
        <Link to="https://www.auroville.org/">Auroville Foundation</Link>, a
        Charitable Trust under the Ministry of Human Resources (Indian
        Government). Your donation will support Restorative Auroville in its
        mission to bring Restorative Circles to above and beyond.
      </p>
    </StandardPage>
  )
}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default Page
