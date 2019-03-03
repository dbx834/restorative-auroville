// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
// import { css } from "glamor"

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import ReactPlayer from 'react-player'
import ContainerDimensions from 'react-container-dimensions'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Video */
const Video = props => {
  const { url } = props
  return (
    <div className="mask-p" style={{ display: 'block' }} {...props}>
      <ContainerDimensions>
        {({ width }) => {
          const playerWidth = width
          const playerHeight = width * 0.62
          return (
            <div
              style={{
                width: playerWidth,
                height: playerHeight,
              }}
            >
              <ReactPlayer url={url} width="inherit" height="inherit" />
            </div>
          )
        }}
      </ContainerDimensions>
    </div>
  )
}

Video.propTypes = {}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default Video
