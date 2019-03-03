// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'

import isUndefined from 'lodash/isUndefined'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from './Link'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** PrevNext */
const PrevNext = ({ prev, next }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
      className="mask-p"
    >
      <div>
        {!isUndefined(prev) && !isUndefined(prev.nakedPageSlug) ? (
          <Link to={`/${prev.nakedPageSlug}`}>⇜ Previous</Link>
        ) : (
          <span style={{ color: '#8a8a8a', cursor: 'not-allowed' }}>
            ⇜ Previous
          </span>
        )}
      </div>
      <div>
        {!isUndefined(next) && !isUndefined(next.nakedPageSlug) ? (
          <Link to={`/${next.nakedPageSlug}`}>Next ⇝</Link>
        ) : (
          <span style={{ color: '#8a8a8a', cursor: 'not-allowed' }}>
            Next ⇝
          </span>
        )}
      </div>
    </div>
  )
}

// --------------------------------------------------------------------- Export
export default PrevNext
