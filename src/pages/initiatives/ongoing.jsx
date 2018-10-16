// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import filter from 'lodash/filter'
import sortBy from 'lodash/sortBy'
import reverse from 'lodash/reverse'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { Link } from 'gatsby'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import SectionAstridAlt from '@bodhi-project/blocks/lib/SectionAstridAlt'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/tag/style/css'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/card/style/css'

// import SectionHalley from "@bodhi-project/blocks/lib/SectionHalley";
// import "@bodhi-project/antrd/lib/restorative-auroville/3.10.0/list/style/css";
// import "@bodhi-project/antrd/lib/restorative-auroville/3.10.0/spin/style/css";
// import "@bodhi-project/antrd/lib/restorative-auroville/3.10.0/button/style/css";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import StandardPage from '../../components/StandardPage'
import seoHelper from '../../methods/seoHelper'

import projects from '../../data/projects.json'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React;
const ongoingProjects = reverse(
  sortBy(filter(projects, 'ongoing'), [o => o.publishedTimestamp])
)

const pageData = {
  pageTitle: 'Ongoing Initiatives',
  nakedPageSlug: 'ongoing',
  pageAbstract: 'Page abstract.',
}

const seoData = seoHelper(pageData)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const pageStyle = css({
  display: 'block',

  '& .ant-card': {
    boxShadow: '1px 2px 0 0 rgba(0, 0, 111, 1)',

    '&:hover': {
      boxShadow: '2px 4px 0 0 rgba(0, 0, 111, 1)',
    },
  },
})
const pageStyles = pageStyle.toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** OngoingInitiatives */
const OngoingInitiatives = props => {
  const astridData = {
    cards: ongoingProjects,
    components: {
      localLink: Link,
    },
    conf: {
      image: {
        rawCoverWidth: 1440,
        rawCoverHeight: 900,
      },
      columnWidth: '50%',
      tags: false,
    },
    categoryMap: {
      NVC: 'Nonviolent Communication',
      RC: 'Restorative Circles',
    },
  }

  return (
    <StandardPage className={pageStyles} seoData={seoData}>
      <h1 className="mask-h3">Ongoing Initiatives</h1>
      <p>
        Our approach incorporates different strategies, with the hope to connect
        with different aspects of our community life, so that we can better
        understand how to build systems that respond to our unique and complex
        reality.
      </p>
      <SectionAstridAlt data={astridData} />
    </StandardPage>
  )
}

OngoingInitiatives.propTypes = {
  data: PropTypes.object,
}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default OngoingInitiatives
