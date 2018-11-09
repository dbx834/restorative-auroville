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
import Link from 'gatsby-link'
import withSizes from 'react-sizes'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import StandardPage from '../../components/StandardPage'
import ProjectListing from '../../components/ProjectListing'

import seoHelper from '../../methods/seoHelper'

import projects from '../../data/projects.json'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React;
const ongoingProjects = reverse(
  sortBy(filter(projects, 'ongoing'), [
    o => o.beginTimestamp,
    o => o.endTimestamp,
  ])
)

const pageData = {
  pageTitle: 'Ongoing projects',
  nakedPageSlug: 'projects/ongoing',
  pageAbstract:
    'Our approach at Restorative Auroville is to engage with the community at many levels and through different initiatives, with the hope to connect with different aspects of our community life, so that we can better understand how to build systems that respond to our unique and complex reality.',
}

const seoData = seoHelper(pageData)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const pageStyle = css({
  display: 'block',
  position: 'relative',

  '& .ant-card': {
    boxShadow: '1px 2px 0 0 #FF7D00',

    '&:hover': {
      boxShadow: '2px 4px 0 0 #FF7D00',
    },
  },
})
const pageStyles = pageStyle.toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Ongoingprojects */
const Ongoingprojects = props => {
  const { isMobile } = props

  return (
    <StandardPage className={pageStyles} seoData={seoData}>
      <h1 className="mask-h3">Our Projects</h1>
      <div style={{ position: 'absolute', top: 4, right: 0 }}>
        <Link to="/projects/past" className="ant-btn ant-btn-primary">
          <span style={{ fontSize: '125%' }}>Past Projects ⇝</span>
        </Link>
      </div>
      <p>
        Our approach is to engage with the community at many levels and through
        different initiatives, with a real longing to grow and transform our
        systems together. Our activities range from large-scale community events
        (like a FilmFest on peace and reconciliation work around the world, or a
        Cross-Cultural Dialogue on Discrimination), to taking RC to schools, to
        fundraising to build an RC Yurt for our Circles, and more…
      </p>
      <div className="margin-p">
        <ProjectListing
          data={ongoingProjects}
          isMobile={isMobile}
          itemWidth="33%"
        />
      </div>
    </StandardPage>
  )
}

Ongoingprojects.propTypes = {
  data: PropTypes.object,
}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
/** mapSizesToProps */
const mapSizesToProps = ({ width }) => ({
  isMobile: width <= 768,
})

export default withSizes(mapSizesToProps)(Ongoingprojects)
