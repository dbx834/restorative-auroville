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
import withSizes from 'react-sizes'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../Link'
import ProjectListing from '../lists/ProjectListing'
import projects from '../../data/projects.json'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React;
const ongoingProjects = reverse(
  sortBy(filter(projects, 'highlight'), [
    o => o.beginTimestamp,
    o => o.endTimestamp,
  ])
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const styleObject = css({
  marginBottom: 40,
  display: 'block',

  '& .ant-card': {
    boxShadow: '1px 2px 0 0 rgba(0, 0, 111, 1)',

    '&:hover': {
      boxShadow: '2px 4px 0 0 rgba(0, 0, 111, 1)',
    },
  },
})
const blockStyle = styleObject.toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/**
 * ProjectHighlight
 * @param  {[type]} props [description]
 * @return {[type]}       [description]
 */
const ProjectHighlight = props => {
  const { isMobile } = props

  return (
    <section className={blockStyle}>
      <h2 className="mask-h3">Some of Our Projects</h2>
      <p>
        Our approach at Restorative Auroville is to engage with the community at
        many levels and through different initiatives, with a real longing to
        grow and transform our systems together.&nbsp;
        <Link to="/projects/ongoing">See more projects ⇝</Link>
      </p>
      <ProjectListing
        data={ongoingProjects}
        isMobile={isMobile}
        itemWidth="33%"
      />
    </section>
  )
}

ProjectHighlight.propTypes = {
  isMobile: PropTypes.bool,
}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
/** mapSizesToProps */
const mapSizesToProps = ({ width }) => ({
  isMobile: width <= 768,
})

export default withSizes(mapSizesToProps)(ProjectHighlight)
