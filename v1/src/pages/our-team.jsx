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
import Link from 'gatsby-link'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import OutLink from '@bodhi-project/components/lib/OutLink'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import StandardPage from '../components/StandardPage'

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
    'Restorative Auroville is an independent project that aims to bring the practice of Restorative Circles, a holistic, community-based form of conflict resolution, to Auroville, and to explore what a consciously designed justice system could look like here – one that reflects our ideals, but that is also effective and has the power to bring about constructive change, both on the individual and community levels.',
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
      <h1 className="mask-h3">About Our Team</h1>
      <p className="mask-p">
        Restorative Auroville is an independent project that aims to bring the
        practice of&nbsp;
        <OutLink to="https://www.restorativecircles.org">
          Restorative Circles
        </OutLink>
        , a holistic, community-based form of conflict resolution, to Auroville,
        and to explore what a consciously designed justice system could look
        like here – one that reflects our ideals, but that is also effective and
        has the power to bring about constructive change, both on the individual
        and community levels.
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
