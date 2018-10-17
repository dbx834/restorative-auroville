// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'
// import { css } from 'glamor'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Disqus from 'disqus-react'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import data from '../data/website.json'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** DisqusComments */
const DisqusComments = props => {
  const { pageData } = props
  const disqusShortname = 'restorativeauroville'
  const disqusConfig = {
    url: `${data.websiteUrl}${pageData.nakedPageSlug}`,
    identifier: `${data.websiteUrl}${pageData.nakedPageSlug}`,
    title: pageData.pageTitle,
  }

  return (
    <Fragment>
      <h2 className="mask-h6">Leave a comment…</h2>
      <p>
        Our hope is for the comments below to bring to surface our collective
        wisdom on the topic.
      </p>
      <p>
        If you have something to share, please add a link to an article, a
        video... Feel free to agree or disagree with what I say, but always:
        please keep it on topic, relevant, practical. And of course, let's keep
        things respectful and kind. Please don't comment if what you say is
        off-topic or wouldn't benefit viewers of this page.
      </p>
      <div className="mask-p">
        <Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
      </div>
    </Fragment>
  )
}

DisqusComments.propTypes = {
  pageData: PropTypes.object,
}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default DisqusComments
