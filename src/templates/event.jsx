// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'
// import { css } from 'glamor'
import moment from 'moment'

import isNull from 'lodash/isNull'
import startsWith from 'lodash/startsWith'
import join from 'lodash/join'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link, { withPrefix } from 'gatsby-link'
import treeParser from '@bodhi-project/markdown-to-react/lib/treeParser'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import EventWrapper from '../components/wrappers/EventWrapper'

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** BlogPostTemplate */
class BlogPostTemplate extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props)
  }

  /** standard renderer */
  render() {
    // Abstract stuff
    const { pathContext } = this.props
    const { frontmatter } = pathContext
    // const { toc } = pathContext;
    const { markdownAst, next, prev } = pathContext
    const { route, humanDate, formattedDate } = pathContext
    const checkedRoute = startsWith(route, '/') ? route : `/${route}`
    const nakedRoute = checkedRoute.substr(1)
    const { tags, date, startDate, finishDate, cover } = frontmatter

    // Date stuff
    const beginDate = moment(!isNull(startDate) ? startDate : date)
    const begins = beginDate.format()
    const endDate = moment(
      !isNull(finishDate) ? finishDate : beginDate.clone().add(23, 'hours')
    )
    const ends = endDate.format()

    let eventBanner = null
    if (cover === 'fallback') {
      const coverHint = join(tags, '-')
      eventBanner = withPrefix(
        `/content-assets/event-fallbacks/${coverHint}.jpg`
      )
    } else {
      eventBanner = withPrefix(cover)
    }

    const pageData = {
      pageTitle: frontmatter.title,
      nakedPageSlug: nakedRoute,
      pageAbstract: frontmatter.abstract,
      cover: eventBanner,
      startDate: begins,
      endDate: ends,
      cost: frontmatter.cost,
    }

    console.log(markdownAst)

    return (
      <EventWrapper
        className=""
        pageData={pageData}
        frontmatter={frontmatter}
        humanDate={humanDate}
        formattedDate={formattedDate}
        next={next}
        prev={prev}
      >
        {treeParser(
          markdownAst,
          {
            localLink: Link,
            linkHeaders: false,
            trackHeaders: false,
            nestHeaders: false,
          },
          {}
        )}
      </EventWrapper>
    )
  }
}

BlogPostTemplate.propTypes = {
  pathContext: PropTypes.object,
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default BlogPostTemplate
