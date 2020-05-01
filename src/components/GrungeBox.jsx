// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
// import { css } from "glamor"

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components

import Image from '@bodhi-project/components/lib/image/Image'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import birdsTop from '../assets/birdsTop.png'
import grungeBox from '../assets/grungeBg.jpg'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** GrungeBox */
const GrungeBox = props => {
  const { children, style } = props
  return (
    <div
      style={{
        padding: 18,
        paddingTop: 36,
        paddingBottom: 36,
        borderRadius: 4,
        position: 'relative',
        ...style,
      }}
      className="margin-p"
    >
      <div
        style={{
          position: 'absolute',
          top: 2,
          right: 5,
          height: 40,
          zIndex: -1,
        }}
      >
        <Image
          src={birdsTop}
          style={{
            background: 'transparent',
            border: 'unset',
            height: 40,
            width: 40,
          }}
          rawWidth={900}
          rawHeight={900}
        />
      </div>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          zIndex: -2,
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        <Image
          src={grungeBox}
          style={{
            background: 'transparent',
            border: 'unset',
            height: '100%',
            width: '100%',
          }}
          rawWidth={1440}
          rawHeight={900}
        />
      </div>
      {children}
    </div>
  )
}

GrungeBox.propTypes = {}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default GrungeBox
