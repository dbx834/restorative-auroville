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
import withSizes from 'react-sizes'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import Button from 'antd/lib/button'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/button/style/css'

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
  pageAbstract: 'Page abstract.',
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
        <Button type="primary">
          <Link to="projects/past">
            <span style={{ fontSize: '125%' }}>Past Projects ⇝</span>
          </Link>
        </Button>
      </div>
      <p>
        Our approach incorporates different strategies, with the hope to connect
        with different aspects of our community life, so that we can better
        understand how to build systems that respond to our unique and complex
        reality.
      </p>
      <ProjectListing data={ongoingProjects} isMobile={isMobile} />
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
