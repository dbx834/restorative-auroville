// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
// import { css } from "glamor";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
// import map from "lodash/map";
// import isUndefined from "lodash/isUndefined";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from 'gatsby-link'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
// import Image from '@bodhi-project/components/lib/Image'
import OutLink from '@bodhi-project/components/lib/OutLink'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import Button from 'antd/lib/button'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/button/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import StandardPage from '../components/StandardPage'

import seoHelper from '../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const pageData = {
  pageTitle: 'Donate',
  nakedPageSlug: 'donate',
  pageAbstract:
    'Joy Living Learning is a Unit under the Auroville Foundation, which is a Charitable Trust under the Ministry of Human Resources (Indian Government). Your donation will support Joy Living Learning in its mission to share the principles of applied nonviolence in different communities and sectors, such as education, governance, and the corporate world.',
}

const seoData = seoHelper(pageData)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Page */
const Page = () => (
  <StandardPage className="" seoData={seoData}>
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
  </StandardPage>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
