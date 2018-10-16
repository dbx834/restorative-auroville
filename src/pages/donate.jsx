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
import { Link } from 'gatsby'

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
    <h1 className="mask-h3">Donate</h1>
    <p>
      If you’d like to make a donation to Joy Living Learning, you may do so
      below. This will link directly to the Auroville Foundation payment gateway
      page, and you will be able to receive a tax exemption.
    </p>
    <div className="mask-p">
      <Button type="primary" style={{ marginTop: 10, marginBottom: 10 }}>
        <OutLink to="https://www.auroville.com/donations/">Donate Now</OutLink>
      </Button>
    </div>
    <p>
      Please email{' '}
      <OutLink to="mailto:joylivinglearning@gmail.com">
        joylivinglearning@gmail.com
      </OutLink>{' '}
      to let us know that you have sent a donation, so that we can track it.
    </p>
    <p>
      Joy Living Learning is a Unit under the Auroville Foundation, which is a
      Charitable Trust under the Ministry of Human Resources (Indian
      Government). Your donation will support Joy Living Learning in its mission
      to share the principles of applied nonviolence in different communities
      and sectors, such as education, governance, and the corporate world.
    </p>
    <p>
      If you would like more detailed information about our projects,{' '}
      <Link to="/contact-us">contact us</Link>.
    </p>
  </StandardPage>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
