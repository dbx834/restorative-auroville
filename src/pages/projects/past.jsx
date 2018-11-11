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
import Breadcrumb from 'antd/lib/breadcrumb'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/breadcrumb/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import StandardPage from '../../components/StandardPage'
import seoHelper from '../../methods/seoHelper'

import ProjectListing from '../../components/ProjectListing'
import projects from '../../data/projects.json'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React;

const pastProjects = reverse(
  sortBy(filter(projects, ['ongoing', false]), [
    o => o.beginTimestamp,
    o => o.endTimestamp,
  ])
)

const pageData = {
  pageTitle: 'Past projects',
  nakedPageSlug: 'projects/past',
  pageAbstract: 'Page abstract.',
}

const seoData = seoHelper(pageData)

const { Item: BItem } = Breadcrumb

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const pageStyle = css({
  display: 'block',

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
/** Pastprojects */
const Pastprojects = props => {
  const { isMobile } = props

  return (
    <StandardPage className={pageStyles} seoData={seoData}>
      <Breadcrumb className="mask-p" separator="»" style={{ marginBottom: 30 }}>
        <BItem>
          <Link to="/">Home</Link>
        </BItem>
        <BItem>
          <Link to="/projects/ongoing">Projects</Link>
        </BItem>
        <BItem>Past Projects</BItem>
      </Breadcrumb>
      <h1 className="mask-h3">Past Projects</h1>
      <ProjectListing data={pastProjects} isMobile={isMobile} itemWidth="33%" />
    </StandardPage>
  )
}

Pastprojects.propTypes = {
  data: PropTypes.object,
}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
/** mapSizesToProps */
const mapSizesToProps = ({ width }) => ({
  isMobile: width <= 768,
})

export default withSizes(mapSizesToProps)(Pastprojects)
