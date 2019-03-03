// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
import { css } from 'glamor'

import filter from 'lodash/filter'
import sortBy from 'lodash/sortBy'
import reverse from 'lodash/reverse'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import withSizes from 'react-sizes'

// import Image from '@bodhi-project/components/lib/Image'
import OutLink from '@bodhi-project/components/lib/OutLink'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../components/Link'
import StandardPage from '../components/wrappers/StandardPage'
import DonateListing from '../components/lists/DonateListing'

import seoHelper from '../methods/seoHelper'

import projects from '../data/donate.json'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const pageData = {
  pageTitle: 'Donate',
  nakedPageSlug: 'donate',
  pageAbstract:
    'If you’d like to make a donation towards Restorative Auroville, you may do so here. A link directly to the Auroville Foundation payment gateway page, and you will be able to receive a tax exemption.',
}

const seoData = seoHelper(pageData)

const ongoingProjects = reverse(
  sortBy(filter(projects, 'ongoing'), [
    o => o.beginTimestamp,
    o => o.endTimestamp,
  ])
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const pageStyles = css({
  display: 'block',
  position: 'relative',

  '& .ant-card': {
    boxShadow: '1px 2px 0 0 #FF7D00',

    '&:hover': {
      boxShadow: '2px 4px 0 0 #FF7D00',
    },
  },
}).toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Page */
const Page = ({ isMobile, ...props }) => (
  <StandardPage className={pageStyles} seoData={seoData}>
    <h1 className="mask-h3">Donate to Support Our Work!</h1>
    <p>
      If you’d like to make a donation towards Restorative Auroville, you may do
      so below. This will link directly to the Auroville Foundation payment
      gateway page, and you will be able to receive a tax exemption.
    </p>
    <div className="mask-p">
      <OutLink
        to="https://www.auroville.com/donations/"
        style={{ marginTop: 10, marginBottom: 10 }}
        className="ant-btn ant-btn-primary"
      >
        Donate Here
      </OutLink>
    </div>
    <ul className="mask-p" style={{ paddingLeft: 20 }}>
      <li>
        Please select “Other” in the Project selection, and specify “Restorative
        Auroville, Joy Living Learning” as the Project name.
      </li>
      <li>
        Please notify us by email (
        <OutLink to="mailto:restorative@auroville.org.in">
          restorative@auroville.org.in
        </OutLink>
        ) that you’ve made a transfer, so that we can track your contribution.
      </li>
    </ul>
    <p>
      Restorative Auroville is an initiative of Joy Living Learning, a Unit
      under the Auroville Foundation, a Charitable Trust under the Ministry of
      Human Resources (Indian Government). Your donation will support
      Restorative Auroville in its mission to bring Restorative Circles to above
      and beyond.
    </p>
    <p>
      <Link to="/contact-us">
        If you would like more detailed information about our project, contact
        us
      </Link>
      .
    </p>
    <br />
    <h2 className="mask-h4">We need support for these projects:</h2>
    <div className="margin-p">
      <DonateListing
        data={ongoingProjects}
        isMobile={isMobile}
        itemWidth="33%"
      />
    </div>
  </StandardPage>
)

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
/** mapSizesToProps */
const mapSizesToProps = ({ width }) => ({
  isMobile: width <= 768,
})

export default withSizes(mapSizesToProps)(Page)
