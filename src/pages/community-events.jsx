// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'

import filter from 'lodash/filter'
import sortBy from 'lodash/sortBy'
import reverse from 'lodash/reverse'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import withSizes from 'react-sizes'

// import Image from '@bodhi-project/components/lib/Image'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import StandardPage from '../components/wrappers/StandardPage'

import ProjectListing from '../components/lists/ProjectListing'

import seoHelper from '../methods/seoHelper'

import projects from '../data/events.json'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const pageData = {
  pageTitle: 'Community Events',
  nakedPageSlug: 'community-events',
  pageAbstract:
    'Our approach is to engage with the community at many levels and through different initiatives. We’ve hosted several large-scale community events, with the hope to inspire and challenge us to take a leap forward!',
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
const pageStyles = css({
  display: 'block',
  position: 'relative',

  '& .ant-card': {
    boxShadow: '1px 2px 0 0 #FF7D00',

    '&:hover': {
      boxShadow: '2px 4px 0 0 #FF7D00',
    },
  },
}).toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Page */
const Page = ({ data, isMobile, ...props }) => (
  <StandardPage className={pageStyles} seoData={seoData} {...props}>
    <h2 className="mask-h3">Community Events</h2>
    <p>
      Our approach is to engage with the community at many levels and through
      different initiatives. We’ve hosted several large-scale community events,
      with the hope to inspire and challenge us to take a leap forward!
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

Page.propTypes = {
  data: PropTypes.object,
}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
/** mapSizesToProps */
const mapSizesToProps = ({ width }) => ({
  isMobile: width <= 768,
})

export default withSizes(mapSizesToProps)(Page)
