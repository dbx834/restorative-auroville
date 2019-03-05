// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'

import filter from 'lodash/filter'
import sortBy from 'lodash/sortBy'
import reverse from 'lodash/reverse'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import withSizes from 'react-sizes'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import StandardPage from '../components/wrappers/StandardPage'
import ProjectListing from '../components/lists/ProjectListing'

import seoHelper from '../methods/seoHelper'

import projects from '../data/sbi.json'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React;
const pageData = {
  pageTitle: 'System-Building Initiatives',
  nakedPageSlug: 'system-building-initiatives',
  pageAbstract:
    'Our approach is to engage with the community at many levels and through different initiatives, with a real longing to grow and transform our systems together. Our initiatives include engagement with Working Groups, Units, Services, schools, residential communities, and more.',
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
      <h1 className="mask-h3">System-Building Initiatives</h1>
      <p>
        Our approach is to engage with the community at many levels and through
        different initiatives, with a real longing to grow and transform our
        systems together. Our initiatives include engagement with Working
        Groups, commercial Units, Services, schools, residential communities,
        and more.
      </p>
      <div className="margin-p">
        <ProjectListing
          data={ongoingProjects}
          isMobile={isMobile}
          itemWidth="33%"
        />
      </div>
      <div
        style={{
          border: '2px solid #00006F',
          padding: 24,
          borderRadius: 8,
          marginTop: 30,
        }}
      >
        <p>
          In our aim to bring about a cultural shift in Auroville and how we
          engage with conflict, we’re hoping to bring RC and its principles to
          different groups in the community.
        </p>
        <p>
          This initiative aims to inform and empower members of the community so
          that when conflict or misunderstanding arises, we are more aware of
          our options and hopefully better equipped to move through the
          challenge.
        </p>
        <p>
          Restorative Auroville’s wish is to offer RC as a safe space for
          holding difficult conversations through a process of reflective
          listening. It’s designed to share power in the community and can
          potentially be facilitated by anyone. When we’re better informed about
          the process, we can use it to its fullest.
        </p>
        <p style={{ marginBottom: 0 }}>
          We invite any Working Groups, commercial Units, Services, schools and
          residential communities that are interested in learning more to reach
          out, so that we can design a training series together and/or look at
          how to collaborate.
        </p>
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
