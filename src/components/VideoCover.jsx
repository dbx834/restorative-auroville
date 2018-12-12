// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
import { css } from 'glamor'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import Image from '@bodhi-project/components/lib/Image'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from './Link'

import playNow from '../assets/playNow.jpg'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const styleObject = css({
  '& .play-hover': {
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
const VideoCover = ({ to, cover, text }) => {
  return (
    <div className={blockStyle}>
      <Link to={to}>
        <div className="play-hover">
          <Image
            src={cover}
            style={{
              background: 'transparent',
              border: 'unset',
              height: 'auto',
              width: '100%',
              marginBottom: 10,
            }}
            loader="gradient"
            rawWidth={1440}
            rawHeight={900}
          />
          <div className="hover-this">
            <Image
              src={playNow}
              style={{
                background: 'transparent',
                border: 'unset',
                height: 'auto',
                width: '100%',
                marginBottom: 10,
              }}
              loader="gradient"
              rawWidth={1440}
              rawHeight={900}
            />
          </div>
        </div>
      </Link>
      <p>{text}</p>
    </div>
  )
}

VideoCover.propTypes = {}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default VideoCover
