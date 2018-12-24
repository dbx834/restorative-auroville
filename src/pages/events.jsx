// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
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
// import Image from '@bodhi-project/components/lib/Image'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import StandardPage from '../components/wrappers/StandardPage'
import EventsGrid from '../components/lists/EventsGrid'

import ProjectListing from '../components/lists/ProjectListing'

import seoHelper from '../methods/seoHelper'

import projects from '../data/events.json'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const pageData = {
  pageTitle: 'Events',
  nakedPageSlug: 'events',
  pageAbstract:
    'We offer learning opportunities through workshops and practice groups on Nonviolent Communication and Restorative Circles. We are also available for individual coaching and mediation, and we are happy to consult with community-based projects that are seeking to shift paradigms.',
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
  <StandardPage className={pageStyles} seoData={seoData}>
    <EventsGrid data={data} />
    <hr
      style={{
        borderTop: '1px solid #00006F',
        marginTop: 30,
        marginBottom: 30,
      }}
      id="events"
    />
    <h2 className="mask-h3">Events</h2>
    <p>
      Our approach is to engage with the community at many levels and through
      different initiatives, with a real longing to grow and transform our
      systems together.
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
// ---------------------------------------------------------------------- Query
// ----------------------------------------------------------------------------
/* eslint-disable no-undef */
export const pageQuery = graphql`
  query UpcomingEventsQuery {
    allMarkdownRemark(
      limit: 365
      sort: { fields: [frontmatter___date], order: ASC }
      filter: { frontmatter: { type: { eq: "event" } } }
    ) {
      edges {
        node {
          fields {
            route
            humanDate
            elapsed
            beginDateInt
            diff
            year
            month
            monthN
            dayOfMonth
            displayDate
            formattedDate
          }
          frontmatter {
            abstract
            title
            subTitle
            cover
            date
            startDate
            finishDate
            fromTime
            toTime
            category
            tags
            type
            cost
          }
        }
      }
    }
  }
`

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
/** mapSizesToProps */
const mapSizesToProps = ({ width }) => ({
  isMobile: width <= 768,
})

export default withSizes(mapSizesToProps)(Page)
