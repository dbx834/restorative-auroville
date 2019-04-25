// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
import { css } from 'glamor'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Img from 'gatsby-image'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from './Link'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const styleObject = css({
  '& .play-hover': {
    '@media(max-width: 992px)': {
      maxWidth: 400,
    },

    position: 'relative',
    cursor: 'pointer',

    '& .hover-this': {
      height: '100%',
      width: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      opacity: 0,
      transition: 'all 300ms ease-in',
    },

    '&:hover': {
      '& .hover-this': {
        opacity: 0.6,
      },
    },
  },
})
const blockStyle = styleObject.toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/**
 * [description]
 * @param  {[type]} options.to    [description]
 * @param  {[type]} options.cover [description]
 * @param  {[type]} options.text  [description]
 * @return {[type]}               [description]
 */
const VideoCover = ({ to, cover, text, playNow }) => {
  return (
    <div className={blockStyle}>
      <Link to={to}>
        <div className="play-hover">
          <Img fluid={cover} />
          <div className="hover-this">
            <Img fluid={playNow} />
          </div>
        </div>
      </Link>
      <p style={{ marginTop: 3, lineHeight: '1.1 !important' }}>
        <span style={{ fontSize: '90%' }}>{text}</span>
      </p>
    </div>
  )
}

VideoCover.propTypes = {}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default VideoCover
