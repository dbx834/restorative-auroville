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
    <div
      style={{
        background: '#f8f8ff',
        border: '1px solid #00006F',
        padding: 16,
        borderRadius: 8,
      }}
    >
      <h2 className="mask-h6">Leave a comment…</h2>
      <p>
        Please share your thoughts and inspiration. Our hope is for these
        comments to create a space for collective wisdom to emerge on
        Restorative Circles and justice.
      </p>
      <p>
        And a little request to please stay on topic and to keep your comments
        relevant and practical, so that other viewers are benefited.
      </p>
      <div className="mask-p">
        <Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
      </div>
    </div>
  )
}

DisqusComments.propTypes = {
  pageData: PropTypes.object,
}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default DisqusComments
