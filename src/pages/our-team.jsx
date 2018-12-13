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
import withSizes from 'react-sizes'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
// import OutLink from '@bodhi-project/components/lib/OutLink'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import StandardPage from '../components/wrappers/StandardPage'

import seoHelper from '../methods/seoHelper'

import ProjectWorkingTeam from '../components/our-team-blocks/ProjectWorkingTeam'
import FacilitatorsTeam from '../components/our-team-blocks/FacilitatorsTeam'
import Apprentices from '../components/our-team-blocks/Apprentices'
import PastMembers from '../components/our-team-blocks/PastMembers'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const pageData = {
  pageTitle: 'Our Team',
  nakedPageSlug: 'our-team',
  pageAbstract:
    'Who Are We? A small group of people passionate about human connection and committed to walking towards increased community resilience. We lead the larger Restorative Auroville project, we facilitate Circles, some of us teach, some of us run our different initiatives, and more... And we’re wanting to expand our team and our reach in the community.',
}

const seoData = seoHelper(pageData)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Page */
const Page = props => {
  const { isMobile } = props
  return (
    <StandardPage className="" seoData={seoData}>
      <h1 className="mask-h3">Our Teams</h1>
      <p className="mask-p" style={{ marginBottom: 30 }}>
        Who Are We? A small group of people passionate about human connection
        and committed to walking towards increased community resilience. We lead
        the larger Restorative Auroville project, we facilitate Circles, some of
        us teach, some of us run our different initiatives, and more... And
        we’re wanting to expand our team and our reach in the community.
      </p>
      <ProjectWorkingTeam isMobile={isMobile} />
      <FacilitatorsTeam isMobile={isMobile} />
      <Apprentices isMobile={isMobile} />
      <PastMembers isMobile={isMobile} />
    </StandardPage>
  )
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
/** mapSizesToProps */
const mapSizesToProps = ({ width }) => ({
  isMobile: width <= 768,
})

export default withSizes(mapSizesToProps)(Page)
